import { motion } from 'framer-motion'

const ABOUT_IMG =
  'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=700&q=80'

const stats = [
  { label: '500+ Happy Clients' },
  { label: '10+ Expert Artists' },
  { label: '5★ Rated Salon' },
]

export default function About() {
  return (
    <section id="about" className="scroll-mt-24 px-4 py-20 md:px-6 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.55 }}
          className="relative"
        >
          <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-blush via-champagne/40 to-rose-gold/30 blur-2xl" />
          <img
            src={ABOUT_IMG}
            alt="Touch of Joy salon interior"
            className="relative z-10 w-full rounded-3xl object-cover shadow-2xl ring-1 ring-white/50"
            loading="lazy"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.55 }}
        >
          <p className="text-sm uppercase tracking-[0.3em] text-rose-gold">Our Story</p>
          <h2 className="mt-2 font-display text-3xl font-semibold text-plum md:text-4xl">
            A Sanctuary of Beauty
          </h2>
          <p className="mt-6 leading-relaxed text-plum/80">
            At Touch of Joy, we believe every woman deserves to feel radiant and confident.
            Founded with a passion for beauty and wellness, our expert stylists and beauty
            therapists are dedicated to crafting personalized experiences that leave you glowing
            inside and out. Step into our world — where every visit is a celebration of you.
          </p>

          <ul className="mt-10 flex flex-wrap gap-3">
            {stats.map((s) => (
              <li
                key={s.label}
                className="rounded-full border border-rose-gold/35 bg-white/50 px-4 py-2 text-sm font-medium text-plum backdrop-blur-sm"
              >
                {s.label}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  )
}
