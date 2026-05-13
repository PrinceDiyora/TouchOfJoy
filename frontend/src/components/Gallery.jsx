import { useState } from 'react'
import { motion } from 'framer-motion'

const INITIAL_VISIBLE = 6

const galleryItems = [
  {
    src: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&q=80',
    alt: 'Makeup artist finishing a soft glam look in the salon',
  },
  {
    src: 'https://images.unsplash.com/photo-1519014816548-bf5fe059798b?w=600&q=80',
    alt: 'Hands with a fresh manicure and neutral polish',
  },
  {
    src: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=600&q=80',
    alt: 'Detailed nail art with glossy gel finish',
  },
  {
    src: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=600&q=80',
    alt: 'Bridal-style makeup application with brushes',
  },
  {
    src: 'https://images.unsplash.com/photo-1583001931096-959e9a1a6223?w=600&q=80',
    alt: 'Hair styling session with curling tools',
  },
  {
    src: 'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=600&q=80',
    alt: 'Bright salon interior with styling chairs and mirrors',
  },
  {
    src: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?w=600&q=80',
    alt: 'Haircut and blow-dry in progress at the station',
  },
  {
    src: 'https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=600&q=80',
    alt: 'Relaxing facial with mask application',
  },
  {
    src: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=600&q=80',
    alt: 'Scalp and head massage for deep relaxation',
  },
  {
    src: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=600&q=80',
    alt: 'Curated skincare products on marble for treatments',
  },
  {
    src: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=600&q=80',
    alt: 'Spa essentials and oils ready for a facial ritual',
  },
  {
    src: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=600&q=80',
    alt: 'Makeup brushes and cosmetics laid out for a makeover',
  },
  {
    src: 'https://images.unsplash.com/photo-1522338242992-e1a54906a8da?w=600&q=80',
    alt: 'Natural beauty look with focus on glowing skin',
  },
  {
    src: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600&q=80',
    alt: 'Salon styling chairs and warm ambient lighting',
  },
]

export default function Gallery() {
  const [showAll, setShowAll] = useState(false)
  const visibleItems = showAll ? galleryItems : galleryItems.slice(0, INITIAL_VISIBLE)
  const hasMore = galleryItems.length > INITIAL_VISIBLE

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
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-plum/75 md:text-base">
            Hair, nails, skin, and makeup — a glimpse of the looks and experiences we create every
            day at Touch of Joy.
          </p>
          <div className="mx-auto mt-5 h-px w-24 bg-gradient-to-r from-transparent via-rose-gold to-transparent" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6 }}
          className="columns-1 gap-4 sm:columns-2 lg:columns-3"
        >
          {visibleItems.map((item, i) => (
            <motion.figure
              key={item.src}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: Math.min(i * 0.04, 0.4) }}
              className="group relative mb-4 break-inside-avoid overflow-hidden rounded-2xl"
            >
              <img
                src={item.src}
                alt={item.alt}
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

        {hasMore && (
          <div className="mt-10 flex justify-center">
            <button
              type="button"
              onClick={() => setShowAll((v) => !v)}
              className="rounded-full border-2 border-rose-gold bg-cream/80 px-8 py-3 text-sm font-semibold uppercase tracking-wide text-plum shadow-sm transition hover:bg-rose-gold hover:text-cream"
              aria-expanded={showAll}
            >
              {showAll ? 'Show less' : `Show more (${galleryItems.length - INITIAL_VISIBLE})`}
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
