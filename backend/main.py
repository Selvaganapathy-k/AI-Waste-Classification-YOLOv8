from fastapi import (
    FastAPI,
    UploadFile,
    File,
    Depends,
    HTTPException
)

from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles

from sqlalchemy.orm import Session

from ultralytics import YOLO

import os
import shutil


from database import (
    Base,
    engine,
    get_db
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



# Create tables

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

    "https://ai-waste-classification-yol-ov8.vercel.app",

    "https://ecovision-ai-backend-95u4.onrender.com"

],

    allow_credentials=True,

    allow_methods=["*"],

    allow_headers=["*"]

)



# Upload folder

os.makedirs(
    "uploads",
    exist_ok=True
)



app.mount(

    "/uploads",

    StaticFiles(
        directory="uploads"
    ),

    name="uploads"

)



# Load YOLO Model

model = YOLO(
    "model/waste_classifier.pt"
)


print("MODEL LOADED")





@app.get("/")
def home():

    return {
        "message":"EcoVision AI API"
    }





# ================= REGISTER =================


@app.post("/register")
def register(

    username:str,

    email:str,

    password:str,

    db:Session = Depends(get_db)

):


    existing = db.query(
        User
    ).filter(
        User.email == email
    ).first()



    if existing:

        raise HTTPException(

            status_code=400,

            detail="Email already exists"

        )



    user = User(

        username=username,

        email=email,

        password=hash_password(password)

    )



    db.add(user)

    db.commit()

    db.refresh(user)



    return {

        "message":
        "Registered successfully"

    }






# ================= LOGIN =================



@app.post("/login")
def login(

    email:str,

    password:str,

    db:Session = Depends(get_db)

):


    user = db.query(
        User
    ).filter(
        User.email == email
    ).first()



    if not user:

        raise HTTPException(

            status_code=404,

            detail="User not found"

        )



    if not verify_password(

        password,

        user.password

    ):

        raise HTTPException(

            status_code=401,

            detail="Wrong password"

        )



    token = create_token(

        {
            "id":user.id
        }

    )



    return {

        "token":token,

        "username":user.username,

        "email":user.email

    }







# ================= PREDICT =================


@app.post("/predict")
async def predict(

    file:UploadFile=File(...),

    current_user=Depends(
        get_current_user
    ),

    db:Session=Depends(get_db)

):


    try:


        path = (
            "uploads/"
            +
            file.filename
        )



        with open(
            path,
            "wb"
        ) as buffer:

            shutil.copyfileobj(

                file.file,

                buffer

            )



        result = model.predict(

            path,

            imgsz=320,

            verbose=False

        )[0]



        class_id = result.probs.top1


        class_name = result.names[class_id]


        confidence = float(

            result.probs.top1conf

        )



        history = PredictionHistory(

            user_id=current_user.id,

            image_name=file.filename,

            predicted_class=class_name,

            confidence=confidence

        )



        db.add(history)

        db.commit()



        return {

            "class":class_name,

            "confidence":
            round(
                confidence*100,
                2
            )

        }



    except Exception as e:


        print(e)


        raise HTTPException(

            status_code=500,

            detail=str(e)

        )







# ================= HISTORY =================



@app.get("/history")
def history(

    current_user=Depends(
        get_current_user
    ),

    db:Session=Depends(get_db)

):


    records = db.query(

        PredictionHistory

    ).filter(

        PredictionHistory.user_id
        ==
        current_user.id

    ).all()



    result=[]



    for r in records:


        result.append({

            "id":r.id,

            "image_name":
            r.image_name,

            "predicted_class":
            r.predicted_class,

            "confidence":
            r.confidence,

            "created_at":
            r.created_at

        })



    return result