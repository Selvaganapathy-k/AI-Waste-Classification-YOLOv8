from sqlalchemy import (
    Column,
    Integer,
    String,
    Float,
    DateTime,
    ForeignKey
)

from datetime import datetime

from database import Base



class User(Base):

    __tablename__ = "users"


    id = Column(
        Integer,
        primary_key=True,
        index=True
    )


    username = Column(
        String
    )


    email = Column(
        String,
        unique=True
    )


    password = Column(
        String
    )

class PredictionHistory(Base):

    __tablename__ = "history"

    id = Column(
        Integer,
        primary_key=True
    )

    user_id = Column(
        Integer,
        ForeignKey("users.id")
    )

    image_name = Column(String)

    predicted_class = Column(String)

    confidence = Column(Float)

    created_at = Column(
        DateTime,
        default=datetime.utcnow
    )