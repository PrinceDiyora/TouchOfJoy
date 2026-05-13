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

## Deploy fully (Vercel + Render + MongoDB Atlas)

### 1. MongoDB Atlas

1. Sign up at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) and create a free **M0** cluster.
2. **Database Access:** create a user with password (save the password).
3. **Network Access:** add `0.0.0.0/0` (allow from anywhere) so **Render** can connect — or use Atlas “Add Current IP” plus Render’s outbound IPs if you prefer a tighter rule.
4. **Connect** → Drivers → copy the **SRV** string (`mongodb+srv://...`), replace `<password>` and set the database name in the path, e.g. `...mongodb.net/touchofjoy?retryWrites=true&w=majority`.

### 2. Push code to GitHub

Ensure this repo (with `frontend/` and `backend/`) is on GitHub. Vercel and Render both deploy from Git.

### 3. Render — backend (API)

1. [Render Dashboard](https://dashboard.render.com) → **New +** → **Web Service**.
2. Connect your GitHub repo → choose this repository.
3. Settings:
   - **Name:** e.g. `touch-of-joy-api`
   - **Root Directory:** `backend`
   - **Runtime:** Node
   - **Build Command:** `npm install`
   - **Start Command:** `npm start`
   - **Instance type:** Free (cold starts: first request after idle may take ~30–60s)
4. **Environment** (Environment tab):
   - `MONGODB_URI` = your Atlas SRV connection string
   - `FRONTEND_URL` = leave empty for the first deploy, or set after step 4 (see below)
5. Create Web Service and wait for deploy. Copy the service URL, e.g. `https://touch-of-joy-api.onrender.com`.

**CORS:** The API allows `localhost` for dev plus any origins listed in `FRONTEND_URL` (comma-separated, **no trailing slash**), e.g. `https://touch-of-joy.vercel.app`.

### 4. Vercel — frontend (site)

1. [Vercel Dashboard](https://vercel.com) → **Add New…** → **Project** → import the same GitHub repo.
2. **Root Directory:** set to `frontend` (important).
3. Framework should detect **Vite**. Build: `npm run build`, output: `dist` (Vercel usually sets this automatically).
4. **Environment Variables:**
   - `VITE_API_URL` = your Render URL **without** a trailing slash, e.g. `https://touch-of-joy-api.onrender.com`  
     (The contact form calls `${VITE_API_URL}/api/contact`.)
5. Deploy. Copy your production URL, e.g. `https://touch-of-joy.vercel.app`.

### 5. Finish CORS on Render

1. In Render → your Web Service → **Environment** → add or update:
   - `FRONTEND_URL` = your exact Vercel URL, e.g. `https://touch-of-joy.vercel.app`  
     (For multiple domains, comma-separate: `https://app.vercel.app,https://www.yourdomain.com`)
2. **Manual Deploy** → **Clear build cache & deploy** (or just redeploy) so the new env applies.

### 6. Verify

- Open the Vercel site, scroll to **Get In Touch**, submit the form — you should see the success toast and a new document in Atlas.
- Optional: open `https://<your-render-host>/api/health` — should return `{"ok":true}`.

### Render deploy exits with status 1

The API only starts after MongoDB connects. Common causes:

1. **`MONGODB_URI` not set** on the Render service (Environment tab). Render does not use your local `.env` file from Git — you must add variables in the dashboard.
2. **Wrong URI** or password with special characters — URL-encode the password in the Atlas string.
3. **Atlas Network Access** — allow **`0.0.0.0/0`** (or Render’s egress IPs) so Render can reach the cluster.

Open **Render → your service → Logs** to see the exact error (the app logs `[TouchOfJoy]` messages).

Optional: in Render → **Environment**, set **`NODE_VERSION`** to **`20`** if you hit odd runtime issues on the default Node version.

### Order summary

Atlas → GitHub → **Render** (get API URL) → **Vercel** (`VITE_API_URL`) → **Render** again (`FRONTEND_URL` = Vercel URL) → test form.
