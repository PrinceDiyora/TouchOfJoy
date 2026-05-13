import { motion } from 'framer-motion'

const services = [
  {
    icon: '💇',
    name: 'Hair Styling',
    tagline: 'Cuts, colour & treatments tailored to your hair goals.',
    image:
      'https://images.unsplash.com/photo-1562322140-8baeececf3df?w=900&q=80',
    imageAlt: 'Stylist working on a client’s hair in a bright salon',
    price: 'From ₹500',
    duration: '~45–120 min',
    highlights: [
      'Precision cuts, layers & styling for every occasion',
      'Global colour, highlights, balayage & root touch-ups',
      'Keratin, smoothening & deep-conditioning rituals',
    ],
  },
  {
    icon: '💅',
    name: 'Nail Art',
    tagline: 'Manicures and pedicures that feel as good as they look.',
    image:
      'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=900&q=80',
    imageAlt: 'Close-up of manicured nails with elegant polish',
    price: 'From ₹300',
    duration: '~40–90 min',
    highlights: [
      'Classic & gel manicure / pedicure with cuticle care',
      'Nail art, extensions & shape sculpting (square, almond, oval)',
      'Hygiene-first tools and long-wear finish options',
    ],
  },
  {
    icon: '🧖',
    name: 'Facials & Skincare',
    tagline: 'Clinical-meets-luxury facials for visible glow.',
    image:
      'https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=900&q=80',
    imageAlt: 'Therapist gently applying a facial mask during a skincare treatment',
    price: 'From ₹800',
    duration: '~50–90 min',
    highlights: [
      'Deep cleansing, hydration & anti-fatigue brightening',
      'Extraction-safe blackhead care where suitable',
      'Custom masks & massage to suit sensitive or oily skin',
    ],
  },
  {
    icon: '💄',
    name: 'Bridal Makeup',
    tagline: 'Camera-ready looks that last from vows to reception.',
    image:
      'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=900&q=80',
    imageAlt: 'Makeup artist applying bridal makeup',
    price: 'From ₹5,000',
    duration: '~2–4 hrs',
    highlights: [
      'HD / dewy / matte finishes — we match your outfit & lighting',
      'Trial sessions available so the big day feels effortless',
      'Touch-up kit guidance for family & bridesmaids add-ons',
    ],
  },
  {
    icon: '🧴',
    name: 'Waxing & Threading',
    tagline: 'Smooth results with gentle technique and premium wax.',
    image:
      'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=900&q=80',
    imageAlt: 'Beauty treatment and skincare in a serene salon space',
    price: 'From ₹150',
    duration: '~15–45 min',
    highlights: [
      'Full-face threading & brow shaping for clean arches',
      'Full body, arms, legs & bikini line waxing options',
      'Pre- and post-care tips to minimise redness',
    ],
  },
  {
    icon: '💆',
    name: 'Head Massage',
    tagline: 'Release tension and reset your mind in one session.',
    image:
      'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=900&q=80',
    imageAlt: 'Relaxing head and scalp massage',
    price: 'From ₹400',
    duration: '~25–45 min',
    highlights: [
      'Pressure-point work to ease headaches & screen fatigue',
      'Nourishing oils optional for scalp health & shine',
      'Perfect add-on after colour days or before events',
    ],
  },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.06 },
  },
}

const item = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function Services() {
  return (
    <section id="services" className="relative scroll-mt-24 px-4 py-20 md:px-6 md:py-28">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center md:mb-16"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-rose-gold">Discover</p>
          <h2 className="mt-2 font-display text-3xl font-semibold text-plum md:text-4xl">
            Our Services
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-plum/75 md:text-base">
            Every treatment is delivered by trained artists using quality products. Browse what we
            offer, then book a slot — we will confirm the best time and any prep you need.
          </p>
          <div className="mx-auto mt-5 h-px w-24 bg-gradient-to-r from-transparent via-rose-gold to-transparent" />
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-40px' }}
          className="grid gap-8 md:grid-cols-2 xl:grid-cols-3"
        >
          {services.map((s) => (
            <motion.article
              key={s.name}
              variants={item}
              className="group flex flex-col overflow-hidden rounded-3xl border border-white/50 bg-white/45 shadow-xl backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-rose-gold/45 hover:shadow-2xl"
            >
              <div className="relative aspect-[5/3] overflow-hidden bg-plum/10">
                <img
                  src={s.image}
                  alt={s.imageAlt}
                  className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-plum/85 via-plum/20 to-transparent" />
                <div className="absolute left-4 top-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-cream/95 text-2xl shadow-md ring-1 ring-white/60">
                  <span aria-hidden="true">{s.icon}</span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 pt-12">
                  <h3 className="font-display text-xl font-semibold text-cream drop-shadow md:text-2xl">
                    {s.name}
                  </h3>
                  <p className="mt-1 line-clamp-2 text-sm leading-snug text-cream/90">{s.tagline}</p>
                </div>
              </div>

              <div className="flex flex-1 flex-col p-5 md:p-6">
                <ul className="flex-1 space-y-2.5 border-b border-plum/10 pb-5">
                  {s.highlights.map((line) => (
                    <li key={line} className="flex gap-2.5 text-sm leading-relaxed text-plum/85">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-rose-gold" aria-hidden />
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap items-end justify-between gap-3">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-plum/50">
                      Starting at
                    </p>
                    <p className="font-display text-lg font-semibold text-rose-gold">{s.price}</p>
                    <p className="mt-0.5 text-xs text-plum/55">{s.duration} · varies by service</p>
                  </div>
                  <a
                    href="#contact"
                    className="inline-flex shrink-0 items-center justify-center rounded-full border border-rose-gold/50 bg-rose-gold/10 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-plum transition hover:bg-rose-gold hover:text-cream"
                  >
                    Enquire
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mt-10 text-center text-sm text-plum/65"
        >
          Final pricing depends on hair length, product choice, and add-ons.{' '}
          <a href="#contact" className="font-medium text-rose-gold underline-offset-2 hover:underline">
            Message us
          </a>{' '}
          for a personalised quote.
        </motion.p>
      </div>
    </section>
  )
}
