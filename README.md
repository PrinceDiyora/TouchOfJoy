# Touch of Joy

Full-stack website for **Touch of Joy** — a premium ladies' beauty salon. Stack: **React (Vite) + Tailwind CSS** in `frontend/`, **Node.js + Express + MongoDB** in `backend/`.

## Prerequisites

- Node.js 20+
- MongoDB running locally, or a [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) connection string

## Backend

```bash
cd backend
npm install
```

Copy `backend/.env.example` to `backend/.env` and adjust values:

- `MONGODB_URI` — e.g. `mongodb://localhost:27017/touchofjoy` or your Atlas URI
- `PORT` — default `5000`

```bash
npm run dev
```

API: `POST http://localhost:5000/api/contact` with JSON `{ "name", "email", "phone", "message" }`.

## Frontend

```bash
cd frontend
npm install
npm run dev
```

App runs at [http://localhost:5173](http://localhost:5173). The contact form posts to `http://localhost:5000` by default. The dev stack pins **Vite 5** so the project runs on common Node 20 LTS versions without requiring the very latest patch release.

For production builds, set `VITE_API_URL` to your deployed API URL (e.g. on Render) before `npm run build`.

## Deployment notes

- **Frontend (Vercel):** `npm run build` in `frontend/`, deploy `frontend/dist`, set `VITE_API_URL`.
- **Backend (Render):** set root to `backend`, add `MONGODB_URI` for Atlas.
- **Database:** MongoDB Atlas free tier is enough for contact submissions.
