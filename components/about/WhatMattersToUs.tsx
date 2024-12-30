'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const values = [
  { title: 'Innovation', image: '/light-bulb-idea-innovation-creative-svgrepo-com.svg' },
  { title: 'Sustainability', image: '/sustainability-approved-ecology-approval-environment-conservation-agreement-svgrepo-com.svg' },
  { title: 'Collaboration', image: '/collaboration-svgrepo-com.svg' },
  { title: 'Transparency', image: '/open-svgrepo-com.svg' },
  { title: 'Impact', image: '/impact-point-svgrepo-com.svg' },
  { title: 'Empowerment', image: '/women-group-svgrepo-com.svg' },
]

const WhatMattersToUs = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">What Matters to Us?</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <Image
                src={value.image}
                alt={value.title}
                width={100}
                height={100}
                className="mb-4"
              />
              <h3 className="text-xl font-semibold text-center">{value.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhatMattersToUs

