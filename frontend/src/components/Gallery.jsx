import { motion } from 'framer-motion'

const images = [
  'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&q=80',
  'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=600&q=80',
  'https://images.unsplash.com/photo-1519014816548-bf5fe059798b?w=600&q=80',
  'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=600&q=80',
  'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=600&q=80',
  'https://images.unsplash.com/photo-1583001931096-959e9a1a6223?w=600&q=80',
]

export default function Gallery() {
  return (
    <section id="gallery" className="scroll-mt-24 bg-plum/5 px-4 py-20 md:px-6 md:py-28">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="mb-14 text-center"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-rose-gold">Portfolio</p>
          <h2 className="mt-2 font-display text-3xl font-semibold text-plum md:text-4xl">
            Our Work
          </h2>
          <div className="mx-auto mt-4 h-px w-24 bg-gradient-to-r from-transparent via-rose-gold to-transparent" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6 }}
          className="columns-1 gap-4 sm:columns-2 lg:columns-3"
        >
          {images.map((src, i) => (
            <motion.figure
              key={src}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group relative mb-4 break-inside-avoid overflow-hidden rounded-2xl"
            >
              <img
                src={src}
                alt={`Salon work sample ${i + 1}`}
                className="w-full object-cover transition duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-plum/0 opacity-0 transition duration-300 group-hover:bg-plum/55 group-hover:opacity-100">
                <span className="rounded-full border border-cream/80 px-5 py-2 text-sm font-semibold tracking-wide text-cream">
                  View
                </span>
              </div>
            </motion.figure>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
