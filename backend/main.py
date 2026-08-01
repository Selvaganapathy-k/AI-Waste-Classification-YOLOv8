from fastapi import (
    FastAPI,
    UploadFile,
    File,
    Depends,
    HTTPException
)


from models import PredictionHistory
from fastapi.middleware.cors import CORSMiddleware


from ultralytics import YOLO


from database import (
    Base,
    engine,
    SessionLocal
)


from models import (
    User,
    PredictionHistory
)


from security import (
    hash_password,
    verify_password,
    create_token
)


from auth import get_current_user
from database import engine
from models import Base


Base.metadata.create_all(bind=engine)

import shutil
import os



# create database

Base.metadata.create_all(
    bind=engine
)



app = FastAPI(
    title="EcoVision AI API"
)



# CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "https://YOUR-PROJECT.vercel.app"
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)

from fastapi.staticfiles import StaticFiles


app.mount(
    "/uploads",
    StaticFiles(directory="uploads"),
    name="uploads"
)

# Load YOLO
model = None


@app.on_event("startup")
def load_model():

    global model

    print("Loading YOLO model...")

    model = YOLO(
        "model/waste_classifier.pt"
    )

    print("MODEL LOADED")



@app.get("/")
def home():

    return {
        "message":"EcoVision AI API"
    }





# REGISTER

@app.post("/register")
def register(

    username:str,

    email:str,

    password:str

):

    db=SessionLocal()



    check=db.query(
        User
    ).filter(
        User.email==email
    ).first()



    if check:

        db.close()

        raise HTTPException(
            400,
            "Email already exists"
        )



    user=User(

        username=username,

        email=email,

        password=hash_password(password)

    )



    db.add(user)

    db.commit()

    db.close()


   



@app.post("/login")
def login(
    email:str,
    password:str
):

    db = SessionLocal()


    user = db.query(User).filter(
        User.email == email
    ).first()


    db.close()



    if not user:

        raise HTTPException(
            404,
            "User not found"
        )



    if not verify_password(
        password,
        user.password
    ):

        raise HTTPException(
            401,
            "Wrong password"
        )



    token = create_token(
        {
            "id": user.id
        }
    )


    return {

        "token": token,

        "username": user.username,

        "email": user.email

    }





# PREDICT

@app.post("/predict")
async def predict(

    file:UploadFile=File(...),

    current_user=Depends(
        get_current_user
    )

):


    try:


        os.makedirs(
            "uploads",
            exist_ok=True
        )


        path=f"uploads/{file.filename}"



        with open(
            path,
            "wb"
        ) as buffer:

            shutil.copyfileobj(
                file.file,
                buffer
            )



        result=model.predict(
            path,
            imgsz=320,
            verbose=False
        )[0]



        class_id=result.probs.top1


        class_name=result.names[class_id]


        confidence=float(
            result.probs.top1conf
        )



        db=SessionLocal()



        history=PredictionHistory(

            user_id=current_user.id,

            image_name=file.filename,

            predicted_class=class_name,

            confidence=confidence

        )


        db.add(history)

        db.commit()

        db.close()



        return {

            "class":class_name,

            "confidence":
            round(confidence*100,2)

        }



    except Exception as e:

        print("PREDICT ERROR:",e)

        raise HTTPException(
            500,
            str(e)
        )




# HISTORY

@app.get("/history")
def history(

    current_user=Depends(
        get_current_user
    )

):


    try:


        db=SessionLocal()



        records=db.query(
            PredictionHistory
        ).filter(
            PredictionHistory.user_id==
            current_user.id
        ).all()



        result=[]


        for r in records:

            result.append({

                "id":r.id,

                "image_name":r.image_name,

                "predicted_class":
                r.predicted_class,

                "confidence":
                r.confidence,

                "created_at":
                r.created_at

            })



        db.close()


        return result



    except Exception as e:

        print("HISTORY ERROR:",e)

        raise HTTPException(
            500,
            str(e)
        )