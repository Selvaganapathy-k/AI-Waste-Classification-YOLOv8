from database import engine
from models import Base


print("Creating database...")


Base.metadata.drop_all(
    bind=engine
)


Base.metadata.create_all(
    bind=engine
)


print("Database created successfully")