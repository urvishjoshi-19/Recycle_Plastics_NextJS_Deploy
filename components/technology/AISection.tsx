'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const AISection = () => {
  return (
    <section className="py-12">
      <div className="flex flex-col md:flex-row items-center gap-8">
        <motion.div 
          className="w-full md:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src="/ai-illustration.gif"
            alt="AI in Recycling"
            width={500}
            height={500}
            className="w-full h-auto rounded-lg border-4 border-transparent transition-all duration-300 ease-in-out hover:shadow-2xl hover:shadow-primary-500 hover:border-transparent"
            style={{
              boxShadow: "0 0 10px rgba(0, 128, 255, 0.8)", // Glowing effect
              transition: "box-shadow 0.3s ease-in-out",  // Smooth transition for glowing effect
            }}
          />
        </motion.div>
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl font-bold mb-4 text-primary">Artificial Intelligence (AI)</h2>
          <p className="mb-4 text-muted-foreground">
            AI is at the heart of our operations, enabling precise data analysis, predictive modeling, and efficient recycling processes. By leveraging AI, we optimize waste collection, ensure accurate sorting, and make data-driven decisions to enhance sustainability.
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Smart waste sorting</li>
            <li>Real-time data analytics</li>
            <li>Predictive maintenance for recycling equipment</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default AISection
