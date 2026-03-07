from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.future import select
from sqlalchemy import desc

from backend import models, schemas, database
from backend.routers.auth import get_current_user

router = APIRouter(prefix="/api/progress", tags=["progress"])

@router.post("/submit", response_model=schemas.GameSessionResponse)
async def submit_progress(
    session_data: schemas.GameSessionCreate, 
    current_user: models.User = Depends(get_current_user), 
    db: AsyncSession = Depends(database.get_db)
):
    # 1. Start a new session record
    db_session = models.GameSession(
        user_id=current_user.id,
        lesson_id=session_data.lesson_id,
        time_spent_seconds=session_data.time_spent_seconds,
        session_points_earned=session_data.session_points_earned
    )
    db.add(db_session)
    
    # 2. Update user's total points
    current_user.total_points += session_data.session_points_earned
    db.add(current_user)
    
    await db.commit()
    await db.refresh(db_session)
    return db_session

@router.get("/leaderboard", response_model=list[schemas.LeaderboardEntry])
async def get_leaderboard(db: AsyncSession = Depends(database.get_db)):
    result = await db.execute(
        select(models.User).order_by(desc(models.User.total_points)).limit(10)
    )
    users = result.scalars().all()
    
    return [{"username": u.username, "total_points": u.total_points} for u in users]
