'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const expansionData = [
  { 
    year: 2020, 
    states: 2, 
    wasteManaged: 10000, 
    brands: 100,
    highlight: 'Started operations in 2 states'
  },
  { 
    year: 2021, 
    states: 10, 
    wasteManaged: 50000, 
    brands: 250,
    highlight: 'Expanded to 8 more states'
  },
  { 
    year: 2022, 
    states: 20, 
    wasteManaged: 100000, 
    brands: 400,
    highlight: 'Doubled our presence'
  },
  { 
    year: 2023, 
    states: 30, 
    wasteManaged: 200000, 
    brands: 600,
    highlight: 'Reached 30+ states and UTs'
  },
]

const Expansion = () => {
  const [activeYear, setActiveYear] = useState(2023)

  return (
    <section className="py-12 bg-gradient-to-b from-blue-100 to-blue-200 dark:from-blue-900 dark:to-blue-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-4 text-center">Expanding Horizons</h2>
        <p className="text-xl mb-12 text-center">Taking Recycle Plastics&apos;s Vision Nationwide and Beyond</p>

        <div className="relative mb-12">
          {/* Timeline bar */}
          <div className="absolute left-0 right-0 h-2 bg-blue-300 dark:bg-blue-700 top-1/2 transform -translate-y-1/2"></div>
          <div className="flex justify-between relative">
            {expansionData.map((data) => (
              <motion.div
                key={data.year}
                className={`w-10 h-10 rounded-full ${activeYear === data.year ? 'bg-primary' : 'bg-blue-300 dark:bg-blue-700'} cursor-pointer relative`}
                whileHover={{ scale: 1.2 }}
                onClick={() => setActiveYear(data.year)}
              >
                <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 text-sm font-semibold">
                  {data.year}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Card content */}
        <motion.div
          key={activeYear}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Expansion Highlights</h3>
              <ul className="space-y-2">
                <li className="text-red-500">States/UTs: {expansionData.find(d => d.year === activeYear)?.states}</li>
                <li className="text-red-500">Waste Managed: {expansionData.find(d => d.year === activeYear)?.wasteManaged.toLocaleString()} MT</li>
                <li className="text-red-500">Brands Onboarded: {expansionData.find(d => d.year === activeYear)?.brands}</li>
              </ul>
              <p className="mt-4 text-lg">{expansionData.find(d => d.year === activeYear)?.highlight}</p>
            </div>
            <div className="relative h-64 md:h-auto">
              <Image
                src="/stages.png"
                alt="India Map"
                layout="fill"
                objectFit="contain"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Expansion
