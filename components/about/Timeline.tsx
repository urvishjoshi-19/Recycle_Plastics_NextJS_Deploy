'use client'

import { motion } from 'framer-motion'

const timelineEvents = [
  { year: 2024, event: 'Onwards & Upwards: Winning National & International accolades' },
  { year: 2023, event: 'Google Case Study Ft. Recykal' },
  { year: 2022, event: 'Digital India Award: Recognised as Technology Pioneers by WEF' },
  { year: 2021, event: 'World Economic Forum Recognition' },
]

const Timeline = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Our Journey</h2>
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-primary"></div>
          {timelineEvents.map((event, index) => (
            <motion.div
              key={event.year}
              className="relative mb-8 h-24"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-4 h-4 bg-primary rounded-full"></div>
              </div>
              <div className={`absolute top-1/2 transform -translate-y-1/2 w-5/12 ${index % 2 === 0 ? 'left-0 text-right pr-8' : 'right-0 text-left pl-8'}`}>
                <h3 className="text-xl font-bold mb-2">{event.year}</h3>
                <p>{event.event}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Timeline

