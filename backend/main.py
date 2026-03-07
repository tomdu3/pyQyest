import asyncio
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from . import models
from .database import engine
from .routers import auth, progress

app = FastAPI(title="PyQuest Backend API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173", "http://127.0.0.1:5173", "http://localhost:3000"], 
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

async def init_models():
    async with engine.begin() as conn:
        # Instead of Alembic for now, let SQLAlchemy create the tables
        # if they don't exist.
        await conn.run_sync(models.Base.metadata.create_all)

@app.on_event("startup")
async def startup_event():
    await init_models()

app.include_router(auth.router)
app.include_router(progress.router)

@app.get("/")
def read_root():
    return {"message": "Welcome to the PyQuest API"}
