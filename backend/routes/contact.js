import { Router } from 'express'
import Contact from '../models/Contact.js'

const router = Router()

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function countPhoneDigits(value) {
  return String(value).replace(/\D/g, '').length
}

router.post('/', async (req, res) => {
  try {
    const { name, email, phone, message } = req.body || {}

    if (!name || String(name).trim() === '') {
      return res.status(400).json({ success: false, message: 'Name is required.' })
    }
    if (!email || String(email).trim() === '') {
      return res.status(400).json({ success: false, message: 'Email is required.' })
    }
    if (!phone || String(phone).trim() === '') {
      return res.status(400).json({ success: false, message: 'Contact number is required.' })
    }
    if (!message || String(message).trim() === '') {
      return res.status(400).json({ success: false, message: 'Message is required.' })
    }
    if (!emailRegex.test(String(email).trim())) {
      return res.status(400).json({ success: false, message: 'Please enter a valid email address.' })
    }
    const phoneTrim = String(phone).trim()
    const digitCount = countPhoneDigits(phoneTrim)
    if (digitCount < 10 || digitCount > 15) {
      return res.status(400).json({
        success: false,
        message: 'Please enter a valid contact number (10–15 digits).',
      })
    }

    await Contact.create({
      name: String(name).trim(),
      email: String(email).trim(),
      phone: phoneTrim,
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
