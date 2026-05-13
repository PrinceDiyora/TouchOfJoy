import { Router } from 'express'
import Contact from '../models/Contact.js'

const router = Router()

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

router.post('/', async (req, res) => {
  try {
    const { name, email, message } = req.body || {}

    if (!name || String(name).trim() === '') {
      return res.status(400).json({ success: false, message: 'Name is required.' })
    }
    if (!email || String(email).trim() === '') {
      return res.status(400).json({ success: false, message: 'Email is required.' })
    }
    if (!message || String(message).trim() === '') {
      return res.status(400).json({ success: false, message: 'Message is required.' })
    }
    if (!emailRegex.test(String(email).trim())) {
      return res.status(400).json({ success: false, message: 'Please enter a valid email address.' })
    }

    await Contact.create({
      name: String(name).trim(),
      email: String(email).trim(),
      message: String(message).trim(),
    })

    return res.status(201).json({
      success: true,
      message: "Thank you! We'll contact you soon.",
    })
  } catch (err) {
    console.error(err)
    return res.status(500).json({
      success: false,
      message: 'Server error. Please try again later.',
    })
  }
})

export default router
