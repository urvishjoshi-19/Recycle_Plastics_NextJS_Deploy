'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Brain, Truck, Package, Database } from 'lucide-react'

const initiatives = [
  {
    title: 'AI & Machine Learning for Smart Sorting',
    description: 'Automating waste separation with advanced algorithms for better recycling efficiency.',
    icon: Brain,
  },
  {
    title: 'Smart Waste Collection Systems',
    description: 'Introducing IoT-enabled bins that will optimize collection schedules and routes, reducing carbon footprints.',
    icon: Truck,
  },
  {
    title: 'Sustainable Packaging Solutions',
    description: 'Developing eco-friendly packaging and encouraging the industry to reduce plastic waste through innovative materials.',
    icon: Package,
  },
  {
    title: 'Blockchain for Waste Traceability',
    description: 'Implementing blockchain to ensure full transparency in waste management, improving accountability, and reducing fraud.',
    icon: Database,
  },
]

const FutureInitiatives = () => {
  const [activeInitiative, setActiveInitiative] = useState<number | null>(null)

  return (
    <section className="py-12 bg-gradient-to-b from-green-900 to-green-700 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-4 text-center">Pioneering the Future of Waste Management</h2>
        <p className="text-xl mb-12 text-center">Innovating for a sustainable tomorrow.</p>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, staggerChildren: 0.1 }}
        >
          {initiatives.map((initiative, index) => (
            <motion.div
              key={index}
              className="relative"
              whileHover={{ scale: 1.05 }}
              onHoverStart={() => setActiveInitiative(index)}
              onHoverEnd={() => setActiveInitiative(null)}
            >
              <div className="bg-white bg-opacity-10 rounded-lg p-6 h-full flex flex-col items-center justify-center text-center">
                <initiative.icon className="w-16 h-16 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{initiative.title}</h3>
                <motion.p
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ 
                    opacity: activeInitiative === index ? 1 : 0,
                    height: activeInitiative === index ? 'auto' : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="text-sm"
                >
                  {initiative.description}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default FutureInitiatives

