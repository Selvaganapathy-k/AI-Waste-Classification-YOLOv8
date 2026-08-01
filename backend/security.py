from passlib.context import CryptContext
from jose import jwt
from datetime import datetime, timedelta


pwd_context = CryptContext(
    schemes=["bcrypt"],
    deprecated="auto"
)


SECRET_KEY = "your-secret-key"
ALGORITHM = "HS256"



def hash_password(password: str):

    # bcrypt maximum = 72 bytes
    password = password[:72]

    return pwd_context.hash(password)



def verify_password(
    password: str,
    hashed_password: str
):

    # bcrypt maximum = 72 bytes
    password = password[:72]

    return pwd_context.verify(
        password,
        hashed_password
    )



def create_token(data):

    payload = data.copy()

    payload["exp"] = datetime.utcnow() + timedelta(
        minutes=60
    )

    return jwt.encode(
        payload,
        SECRET_KEY,
        algorithm=ALGORITHM
    )