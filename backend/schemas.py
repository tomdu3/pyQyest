from pydantic import BaseModel, EmailStr
from typing import Optional
from datetime import datetime

class UserBase(BaseModel):
    username: str
    email: EmailStr

class UserCreate(UserBase):
    password: str

class UserResponse(UserBase):
    id: int
    total_points: int
    created_at: datetime

    class Config:
        from_attributes = True

class Token(BaseModel):
    access_token: str
    token_type: str

class TokenData(BaseModel):
    username: Optional[str] = None

class GameSessionCreate(BaseModel):
    lesson_id: int
    time_spent_seconds: int
    session_points_earned: int

class GameSessionResponse(GameSessionCreate):
    id: int
    user_id: int
    completed_at: datetime

    class Config:
        from_attributes = True

class LeaderboardEntry(BaseModel):
    username: str
    total_points: int
