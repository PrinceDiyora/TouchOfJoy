import { motion } from 'framer-motion'

const services = [
  {
    icon: '💇',
    name: 'Hair Styling',
    desc: 'Cuts, coloring, keratin & more',
    price: '₹500+',
  },
  {
    icon: '💅',
    name: 'Nail Art',
    desc: 'Manicure, pedicure & nail extensions',
    price: '₹300+',
  },
  {
    icon: '🧖',
    name: 'Facials & Skincare',
    desc: 'Glow-up treatments for radiant skin',
    price: '₹800+',
  },
  {
    icon: '💄',
    name: 'Bridal Makeup',
    desc: 'Look breathtaking on your special day',
    price: '₹5000+',
  },
  {
    icon: '🧴',
    name: 'Waxing & Threading',
    desc: 'Smooth skin, painless experience',
    price: '₹150+',
  },
  {
    icon: '💆',
    name: 'Head Massage',
    desc: 'Relax, restore and rejuvenate',
    price: '₹400+',
  },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
}

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
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
          className="mb-14 text-center"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-rose-gold">Discover</p>
          <h2 className="mt-2 font-display text-3xl font-semibold text-plum md:text-4xl">
            Our Services
          </h2>
          <div className="mx-auto mt-4 h-px w-24 bg-gradient-to-r from-transparent via-rose-gold to-transparent" />
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((s) => (
            <motion.article
              key={s.name}
              variants={item}
              className="group rounded-2xl border border-white/40 bg-white/35 p-6 shadow-lg backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-rose-gold/40 hover:shadow-xl"
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-rose-gold/15 text-3xl ring-1 ring-rose-gold/30 transition group-hover:scale-105">
                <span aria-hidden="true">{s.icon}</span>
              </div>
              <h3 className="font-display text-xl text-plum">{s.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-plum/75">{s.desc}</p>
              <p className="mt-4 text-sm font-semibold text-rose-gold">{s.price}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
