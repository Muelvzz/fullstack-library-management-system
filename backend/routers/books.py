from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from backend.database import get_db
from backend import models
from backend.schemas import UserCreate, UserOut
from backend.auth import get_current_user

from typing import List

router = APIRouter(
    prefix="/book",
    tags=["Books"]
)

@router.get("/")