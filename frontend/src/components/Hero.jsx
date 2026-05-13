import { useId } from 'react'
import { motion } from 'framer-motion'

const HERO_BG =
  'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1600&q=80'

function Petal({ className, delay }) {
  const gid = useId().replace(/:/g, '')
  return (
    <motion.svg
      className={className}
      viewBox="0 0 40 48"
      fill="none"
      aria-hidden="true"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 0.55, y: [0, -10, 0] }}
      transition={{
        opacity: { duration: 1, delay },
        y: { duration: 6 + delay, repeat: Infinity, ease: 'easeInOut' },
      }}
    >
      <path
        d="M20 2c4 8 14 12 14 22a14 14 0 11-28 0c0-10 10-14 14-22z"
        fill={`url(#${gid})`}
      />
      <defs>
        <linearGradient id={gid} x1="8" y1="2" x2="32" y2="44" gradientUnits="userSpaceOnUse">
          <stop stopColor="#EDD9A3" />
          <stop offset="1" stopColor="#C9956C" />
        </linearGradient>
      </defs>
    </motion.svg>
  )
}

function Sparkle({ className, delay }) {
  return (
    <motion.svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: [0.4, 0.9, 0.4], scale: [0.8, 1.1, 0.8] }}
      transition={{ duration: 3, repeat: Infinity, delay }}
    >
      <path d="M12 2l1.2 5.2L18 8l-4.8 1L12 14l-1.2-5L6 8l4.8-1L12 2z" />
    </motion.svg>
  )
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${HERO_BG})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-plum/75 via-plum/55 to-plum/80" />

      <Petal className="pointer-events-none absolute left-[8%] top-[18%] h-14 w-12 text-champagne" delay={0} />
      <Petal className="pointer-events-none absolute right-[12%] top-[22%] h-10 w-9 rotate-12" delay={0.4} />
      <Petal className="pointer-events-none absolute bottom-[20%] left-[18%] h-11 w-10 -rotate-6" delay={0.8} />
      <Sparkle className="pointer-events-none absolute right-[22%] top-[35%] h-6 w-6 text-champagne/90" delay={0.2} />
      <Sparkle className="pointer-events-none absolute left-[28%] bottom-[28%] h-5 w-5 text-blush" delay={1} />

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mb-4 text-sm uppercase tracking-[0.35em] text-champagne/95"
        >
          Touch of Joy
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.35 }}
          className="font-display text-4xl font-semibold leading-tight text-cream sm:text-5xl md:text-6xl"
        >
          Where Beauty Meets Bliss
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.55 }}
          className="mx-auto mt-6 max-w-2xl text-lg text-cream/90 md:text-xl"
        >
          Premium beauty services tailored exclusively for you
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.75 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a
            href="#services"
            className="inline-flex min-w-[200px] justify-center rounded-full border-2 border-cream/90 px-8 py-3.5 text-sm font-semibold text-cream transition hover:bg-cream/10"
          >
            Explore Services
          </a>
          <a
            href="#contact"
            className="inline-flex min-w-[200px] justify-center rounded-full bg-rose-gold px-8 py-3.5 text-sm font-semibold text-cream shadow-lg transition hover:bg-champagne hover:text-plum"
          >
            Book Appointment
          </a>
        </motion.div>
      </div>
    </section>
  )
}
