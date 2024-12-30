'use client'

import { motion } from 'framer-motion'
import { Recycle, Truck, Factory, Package } from 'lucide-react'

const LocallySourced = () => {
  return (
    <section className="py-12 bg-green-100 dark:bg-green-900 rounded-lg relative overflow-hidden">
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
      >
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-green-300 dark:bg-green-700 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 20 + 5}px`,
              height: `${Math.random() * 20 + 5}px`,
            }}
            animate={{
              y: [0, Math.random() * 100 - 50],
              x: [0, Math.random() * 100 - 50],
            }}
            transition={{
              duration: Math.random() * 10 + 5,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
          />
        ))}
      </motion.div>
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl font-bold mb-6 text-center">Locally sourced Post-Consumer Waste (PCR), with 100% traceability</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <motion.div
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
            whileHover={{ scale: 1.05 }}
          >
            <Recycle className="w-12 h-12 mb-4 mx-auto text-green-600" />
            <h3 className="text-xl font-semibold mb-2 text-center">Collection</h3>
            <p className="text-center">Efficient collection of post-consumer waste from local sources</p>
          </motion.div>
          <motion.div
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
            whileHover={{ scale: 1.05 }}
          >
            <Truck className="w-12 h-12 mb-4 mx-auto text-blue-600" />
            <h3 className="text-xl font-semibold mb-2 text-center">Transportation</h3>
            <p className="text-center">Eco-friendly transportation to our recycling facilities</p>
          </motion.div>
          <motion.div
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
            whileHover={{ scale: 1.05 }}
          >
            <Factory className="w-12 h-12 mb-4 mx-auto text-purple-600" />
            <h3 className="text-xl font-semibold mb-2 text-center">Processing</h3>
            <p className="text-center">State-of-the-art recycling process to create high-quality granules</p>
          </motion.div>
          <motion.div
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
            whileHover={{ scale: 1.05 }}
          >
            <Package className="w-12 h-12 mb-4 mx-auto text-yellow-600" />
            <h3 className="text-xl font-semibold mb-2 text-center">Distribution</h3>
            <p className="text-center">Efficient distribution of recycled granules to manufacturers</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default LocallySourced

