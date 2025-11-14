# Google Calendar Clone (Vite + Tailwind) — Fullstack

## Structure
- backend/  (Node.js + Express + Mongoose)
- frontend/ (Vite + React + Tailwind)

## Run locally

1. Backend:
   cd backend
   cp .env.example .env
   # set MONGO_URI in .env
   npm install
   npm run dev

2. Frontend:
   cd frontend
   cp .env.example .env
   npm install
   npm run dev

Frontend expects backend API at VITE_API_URL (default http://localhost:5000/api)
