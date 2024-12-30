'use client'

import { motion } from 'framer-motion'

const impactData = [
  {
    title: 'Environmental Impact',
    stats: [
      { label: 'CO2 offset', value: '2,000,000 MT' },
      { label: 'Plastic waste diverted', value: '1,000,000 MT' },
      { label: 'Water Saved', value: '12,000,000 M' },
    
    ],
  },
  {
    title: 'Social Impact',
    stats: [
      { label: 'IEC activities', value: '400+' },
      { label: 'Rag-pickers empowered', value: '15,000+' },
      { label: 'Direct employment', value: '1000+' },
      { label: 'Women employees', value: '52%' },
    ],
  },
  {
    title: 'Strength',
    stats: [
      { label: 'Esteemed brands', value: '600+' },
      { label: 'ULB tie-ups PAN India', value: '150+' },
      { label: 'Disposal Centres PAN India', value: '30+' },
      { label: 'Years of Excellence', value: '54+' },
    ],
  },
  {
    title: 'Product/Sites',
    stats: [
      { label: 'Recycling facilities', value: '5+' },
      { label: 'Upcoming recycling facilities', value: '10+' },
      { label: 'Products Delivered', value: '50K+' },
      { label: 'Sustainable Projects', value: '10+' },
    ],
  },
]

const ImpactStatistics = () => {
  return (
    <section className="py-12 bg-muted rounded-lg">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Recycle Plastics is a Prominent Service Provider for EPR Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {impactData.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-background p-6 rounded-lg shadow-lg"
            >
              <h3 className="text-xl font-semibold mb-4 text-primary">{category.title}</h3>
              <ul className="space-y-2">
                {category.stats.map((stat, statIndex) => (
                  <li key={statIndex} className="flex justify-between">
                    <span className="text-muted-foreground">{stat.label}</span>
                    <span className="font-bold">{stat.value}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ImpactStatistics

