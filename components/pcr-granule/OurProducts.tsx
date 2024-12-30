'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

const products = [
  { name: 'PP Granules', image: '/black.png', pdf: '/Report1.pdf' },
  { name: 'HIPS Granules', image: '/blue.png', pdf: '/hips-granules-spec.pdf' },
  { name: 'LDPE Granules', image: '/green.png', pdf: '/ldpe-granules-spec.pdf' },
  { name: 'HDPE Granules', image: '/orange.png', pdf: '/hdpe-granules-spec.pdf' },
  { name: 'LLDPE Granules', image: '/red.png', pdf: '/lldpe-granules-spec.pdf' },
]

const OurProducts = () => (
  <section className="py-12">
    <h2 className="text-3xl font-bold mb-6 text-center">Our Products</h2>
    <motion.div 
      className="flex justify-center" 
      initial={{ scale: 0.9 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {products.map((product, i) => (
          <motion.div
            key={product.name}
            className="bg-card rounded-lg overflow-hidden shadow-lg flex flex-col items-center p-4"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <div className="w-40 h-40 relative mb-4">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover rounded-full"
              />
            </div>
            <div className="text-center mb-4">
              <h3 className="text-lg font-semibold">{product.name}</h3>
            </div>
            <Link href={product.pdf} target="_blank" rel="noopener noreferrer">
              <motion.button
                className="bg-primary text-primary-foreground px-6 py-3 rounded-full text-base font-medium"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                View Specifications
              </motion.button>
            </Link>
          </motion.div>
        ))}
      </div>
    </motion.div>
  </section>
)

export default OurProducts
