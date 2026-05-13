import 'dotenv/config'
import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import contactRoutes from './routes/contact.js'

const app = express()
const PORT = Number(process.env.PORT) || 5000

const onRender = process.env.RENDER === 'true'
const MONGODB_URI =
  (process.env.MONGODB_URI && process.env.MONGODB_URI.trim()) ||
  (onRender ? '' : 'mongodb://localhost:27017/touchofjoy')

if (!MONGODB_URI) {
  console.error(
    '[TouchOfJoy] MONGODB_URI is not set. In Render: Web Service → Environment → add MONGODB_URI with your MongoDB Atlas connection string (mongodb+srv://...).',
  )
  process.exit(1)
}

const devOrigins = ['http://localhost:5173', 'http://127.0.0.1:5173']
const prodOrigins = (process.env.FRONTEND_URL || '')
  .split(',')
  .map((s) => s.trim())
  .filter(Boolean)
const allowedOrigins = [...devOrigins, ...prodOrigins]

app.use(
  cors({
    origin: allowedOrigins,
    credentials: true,
  }),
)
app.use(express.json())

app.get('/api/health', (_req, res) => {
  res.json({ ok: true })
})

app.use('/api/contact', contactRoutes)

mongoose
  .connect(MONGODB_URI)
  .then(() => {
    app.listen(PORT, '0.0.0.0', () => {
      console.log(`[TouchOfJoy] Server listening on port ${PORT}`)
    })
  })
  .catch((err) => {
    console.error('[TouchOfJoy] MongoDB connection failed:', err.message)
    console.error(
      'Check: (1) MONGODB_URI is correct (2) Atlas → Network Access allows 0.0.0.0/0 (3) DB password in the URI is URL-encoded if it contains @ # : etc.',
    )
    process.exit(1)
  })
