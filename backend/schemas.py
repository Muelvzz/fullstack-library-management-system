from pydantic import BaseModel, EmailStr
from datetime import datetime

class UserCreate(BaseModel):
    email: EmailStr
    password: str

class UserOut(BaseModel):
    access_token: str
    token_type: str = "bearer"

    class Config:
        from_attributes = True