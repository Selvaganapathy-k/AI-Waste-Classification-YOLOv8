from passlib.context import CryptContext


pwd_context = CryptContext(
    schemes=["bcrypt"],
    deprecated="auto"
)


def hash_password(password):

    password = str(password)

    if len(password.encode("utf-8")) > 72:
        password = password[:72]

    return pwd_context.hash(password)



def verify_password(password, hashed_password):

    password = str(password)

    if len(password.encode("utf-8")) > 72:
        password = password[:72]

    return pwd_context.verify(
        password,
        hashed_password
    )