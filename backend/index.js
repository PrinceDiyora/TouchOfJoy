import 'dotenv/config'
import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import contactRoutes from './routes/contact.js'

const app = express()
const PORT = process.env.PORT || 5000
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/touchofjoy'

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
    app.listen(PORT, () => {
      console.log(`Server listening on http://localhost:${PORT}`)
    })
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err)
    process.exit(1)
  })
