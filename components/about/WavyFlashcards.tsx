'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const flashcards = [
  { title: 'Innovation', image: '/innovation.png' },
  { title: 'Sustainability', image: '/sustainability.jpg' },
  { title: 'Technology', image: '/technology1.png' },
  { title: 'Impact', image: '/impact.jpg' },
]

const WavyFlashcards = () => {
  return (
    <section className="py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {flashcards.map((card, index) => (
          <motion.div
            key={card.title}
            className="relative overflow-hidden rounded-lg shadow-lg"
            initial={{ y: index % 2 === 0 ? -20 : 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -10, transition: { duration: 0.2 } }}
          >
            <Image
              src={card.image}
              alt={card.title}
              width={300}
              height={200}
              className="w-full h-48 object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <h3 className="text-white text-2xl font-bold">{card.title}</h3>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default WavyFlashcards

