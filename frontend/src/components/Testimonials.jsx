import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const testimonials = [
  {
    quote:
      'An absolutely dreamy experience. The team made me feel like royalty — my bridal look was flawless!',
    name: 'Priya S.',
    stars: 5,
  },
  {
    quote:
      'The ambiance, the attention to detail, and the expertise — Touch of Joy is now my go-to for facials and nails.',
    name: 'Ananya R.',
    stars: 5,
  },
  {
    quote:
      'Warm, welcoming, and incredibly skilled. I walked out glowing and relaxed after my head massage.',
    name: 'Meera K.',
    stars: 5,
  },
]

function Stars({ count }) {
  return (
    <div className="flex gap-0.5 text-champagne" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} aria-hidden="true">
          ★
        </span>
      ))}
    </div>
  )
}

export default function Testimonials() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const t = setInterval(() => {
      setIndex((i) => (i + 1) % testimonials.length)
    }, 5500)
    return () => clearInterval(t)
  }, [])

  const active = testimonials[index]

  return (
    <section
      id="reviews"
      aria-label="Client reviews and testimonials"
      className="scroll-mt-24 bg-gradient-to-b from-cream via-blush/40 to-cream px-4 py-20 md:px-6 md:py-28"
    >
      <div className="mx-auto max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-rose-gold">Love Letters</p>
          <h2 className="mt-2 font-display text-3xl font-semibold text-plum md:text-4xl">
            What Our Clients Say
          </h2>
          <div className="mx-auto mt-4 h-px w-24 bg-gradient-to-r from-transparent via-rose-gold to-transparent" />
        </motion.div>

        <div className="relative min-h-[280px]">
          <AnimatePresence mode="wait">
            <motion.article
              key={active.name}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.45 }}
              className="mx-auto rounded-3xl border border-white/50 bg-white/45 p-8 shadow-xl backdrop-blur-md md:p-10"
            >
              <Stars count={active.stars} />
              <blockquote className="mt-5 text-lg leading-relaxed text-plum/90 md:text-xl">
                “{active.quote}”
              </blockquote>
              <div className="mt-8 flex flex-col items-center gap-3">
                <div
                  className="h-12 w-12 rounded-full bg-gradient-to-br from-rose-gold to-champagne ring-2 ring-cream"
                  aria-hidden="true"
                />
                <cite className="not-italic text-sm font-semibold uppercase tracking-wider text-plum/80">
                  {active.name}
                </cite>
              </div>
            </motion.article>
          </AnimatePresence>
        </div>

        <div className="mt-8 flex justify-center gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setIndex(i)}
              className={`h-2.5 w-2.5 rounded-full transition ${
                i === index ? 'bg-rose-gold scale-110' : 'bg-plum/25 hover:bg-plum/45'
              }`}
              aria-label={`Show testimonial ${i + 1}`}
              aria-current={i === index ? 'true' : undefined}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
