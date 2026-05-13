import { useState } from 'react'
import axios from 'axios'
import toast from 'react-hot-toast'
import { motion } from 'framer-motion'

const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:5000'

export default function ContactForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()
    setLoading(true)
    try {
      await axios.post(`${API_BASE}/api/contact`, { name, email, phone, message })
      toast.success("✨ Message sent! We'll be in touch soon.")
      setName('')
      setEmail('')
      setPhone('')
      setMessage('')
    } catch (err) {
      const msg =
        err.response?.data?.message ||
        err.message ||
        'Something went wrong. Please try again.'
      toast.error(msg)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="scroll-mt-24 px-4 py-20 md:px-6 md:py-28">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="mb-14 text-center"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-rose-gold">Visit Us</p>
          <h2 className="mt-2 font-display text-3xl font-semibold text-plum md:text-4xl">
            Get In Touch
          </h2>
          <div className="mx-auto mt-4 h-px w-24 bg-gradient-to-r from-transparent via-rose-gold to-transparent" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.55 }}
          className="grid gap-10 rounded-3xl border border-white/50 bg-white/40 p-8 shadow-xl backdrop-blur-md lg:grid-cols-2 lg:gap-14 lg:p-12"
        >
          <div>
            <h3 className="font-display text-2xl text-plum">Salon Info</h3>
            <ul className="mt-6 space-y-5 text-plum/85">
              <li>
                <p className="text-xs font-semibold uppercase tracking-wider text-rose-gold">
                  Address
                </p>
                <p className="mt-1 leading-relaxed">
                  12 Jasmine Lane, Koregaon Park
                  <br />
                  Pune, Maharashtra 411001
                </p>
              </li>
              <li>
                <p className="text-xs font-semibold uppercase tracking-wider text-rose-gold">
                  Phone
                </p>
                <a href="tel:+919876543210" className="mt-1 inline-block hover:text-rose-gold">
                  +91 98765 43210
                </a>
              </li>
              <li>
                <p className="text-xs font-semibold uppercase tracking-wider text-rose-gold">
                  Hours
                </p>
                <p className="mt-1 leading-relaxed">
                  Mon–Sat: 10:00 AM – 8:00 PM
                  <br />
                  Sunday: By appointment
                </p>
              </li>
            </ul>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="fullName" className="text-sm font-medium text-plum">
                Full Name
              </label>
              <input
                id="fullName"
                name="name"
                type="text"
                autoComplete="name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-1.5 w-full rounded-xl border border-plum/15 bg-cream/80 px-4 py-3 text-plum outline-none ring-rose-gold/30 transition focus:border-rose-gold focus:ring-2"
              />
            </div>
            <div>
              <label htmlFor="email" className="text-sm font-medium text-plum">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1.5 w-full rounded-xl border border-plum/15 bg-cream/80 px-4 py-3 text-plum outline-none ring-rose-gold/30 transition focus:border-rose-gold focus:ring-2"
              />
            </div>
            <div>
              <label htmlFor="phone" className="text-sm font-medium text-plum">
                Contact number
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                inputMode="tel"
                placeholder="+91 98765 43210"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="mt-1.5 w-full rounded-xl border border-plum/15 bg-cream/80 px-4 py-3 text-plum outline-none ring-rose-gold/30 transition placeholder:text-plum/40 focus:border-rose-gold focus:ring-2"
              />
            </div>
            <div>
              <label htmlFor="message" className="text-sm font-medium text-plum">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="mt-1.5 w-full resize-y rounded-xl border border-plum/15 bg-cream/80 px-4 py-3 text-plum outline-none ring-rose-gold/30 transition focus:border-rose-gold focus:ring-2"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-full bg-rose-gold py-3.5 text-sm font-semibold text-cream shadow-md transition hover:bg-plum disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? 'Sending…' : 'Send Message'}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}
