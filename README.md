# 🌱 EcoVision AI - AI Based Waste Classification System

![Project Banner](https://img.shields.io/badge/AI-Waste%20Classification-green)
![YOLOv8](https://img.shields.io/badge/Model-YOLOv8-blue)
![FastAPI](https://img.shields.io/badge/Backend-FastAPI-teal)
![React](https://img.shields.io/badge/Frontend-React-black)


---

# 📌 Project Overview

EcoVision AI is an AI-powered waste classification system that automatically identifies and categorizes waste images into three major classes:

- ♻️ Recyclable Waste
- 🌱 Organic Waste
- ⚠️ Hazardous Waste

The system uses **YOLOv8 deep learning model** for image classification and provides an intelligent waste disposal recommendation system.

The main goal of this project is to support automated waste segregation, reduce manual effort, and promote sustainable waste management.

---

# 🚀 Live Deployment

## Frontend

🔗 https://ai-waste-classification-yol-ov8.vercel.app/

## Backend API

🔗 https://ecovision-ai-backend-95u4.onrender.com/

## API Documentation

🔗 https://ecovision-ai-backend-95u4.onrender.com/docs

---

# ✨ Features

## User Management

- User Registration
- Secure Login Authentication
- JWT Token Based Authorization


## AI Waste Classification

- Upload waste image
- YOLOv8 based prediction
- Confidence score generation
- Automatic waste category detection


## Waste Categories

| Category | Description |
|----------|-------------|
| ♻️ Recyclable | Plastic, paper, metal, glass etc. |
| 🌱 Organic | Food waste, biological waste |
| ⚠️ Hazardous | Chemical and harmful waste |


## Additional Features

- Prediction history tracking
- User profile statistics
- Waste disposal recommendations
- Environmental impact information

---

# 🏗️ System Architecture

            User
             |
             |
      React Frontend
             |
             |
      FastAPI Backend
             |
    -----------------
    |               |
 YOLOv8 Model     Database
    |               |
    -----------------
             |
    Waste Prediction Result



---

# 🛠️ Technology Stack


## Frontend

- React.js
- JavaScript
- Axios
- React Router
- Lucide Icons
- CSS


## Backend

- Python
- FastAPI
- SQLAlchemy
- JWT Authentication


## Artificial Intelligence

- YOLOv8
- Ultralytics
- PyTorch
- OpenCV


## Database

- SQLite (Local Development)
- PostgreSQL (Deployment)

---

# 📂 Project Structure

EcoVision-AI

│
├── frontend
│ ├── src
│ │ ├── pages
│ │ ├── components
│ │ ├── api
│ │ └── data
│ └── package.json
│

├── backend
│ ├── main.py
│ ├── database.py
│ ├── models.py
│ ├── security.py
│ ├── auth.py
│ ├── model
│ │ └── waste_classifier.pt
│ └── requirements.txt
│

├── SRS_Document.pdf
├── Project_Report.pdf
├── Database_Schema.pdf
├── Team_Details.md
└── README.md


---

# ⚙️ Installation and Setup

## Backend Setup


Clone repository:

```bash
git clone <https://github.com/Selvaganapathy-k/AI-Waste-Classification-YOLOv8>


🗄️ Database Schema
| Column   | Type    |
| -------- | ------- |
| id       | Integer |
| username | String  |
| email    | String  |
| password | String  |

Prediction History Table

| Column          | Type     |
| --------------- | -------- |
| id              | Integer  |
| user_id         | Integer  |
| image_name      | String   |
| predicted_class | String   |
| confidence      | Float    |
| created_at      | DateTime |

🤖 AI Model Details

Model:

YOLOv8 Classification Model

Input:

Waste Image

Output:

Waste Category + Confidence Score

Classes:

Recyclable
Organic
Hazardous

📄 Project Documents
Software Requirements Specification (SRS)

Contains:

Project Introduction
Functional Requirements
Non Functional Requirements
System Requirements
User Requirements
Complete Source Code

Contains:

React frontend
FastAPI backend
YOLOv8 model integration
Database Schema with Data

Contains:

Entity Relationship Design
Database Tables
Sample Data
Project Report

Contains:

Abstract
Literature Survey
Methodology
Implementation
Results
Future Enhancement
Deployment Link

Available online:

Frontend:

https://ai-waste-classification-yol-ov8.vercel.app/

Backend:

https://ecovision-ai-backend-95u4.onrender.com/

Example Output:
WhatsApp Image 2026-08-01 at 4.20.59 PM.jpeg

WhatsApp Image 2026-08-01 at 4.19.28 PM.jpeg


👨‍💻 Team Details
| Name             | Role                   |
| ---------------- | ---------------------- |
| Selvaganapathy K | AI Developer |
| Vinithirha K     | Frontend Developer     |
| Manoj K          | AI Developer           |
| Vignesh S        | Frontend Developer     |

🔮 Future Enhancements
Mobile application development
Real-time camera waste detection
Smart dustbin integration
IoT based waste monitoring
More waste categories
Cloud based AI scaling


📜 License

This project is developed for academic and research purposes.

.
