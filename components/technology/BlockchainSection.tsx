'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const BlockchainSection = () => {
  return (
    <section className="py-12">
      <div className="flex flex-col md:flex-row-reverse items-center gap-8">
        <motion.div 
          className="w-full md:w-1/2"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src="/blockchain-illustration.gif"
            alt="Blockchain in Recycling"
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
          <h2 className="text-3xl font-bold mb-4 text-primary">Blockchain</h2>
          <p className="mb-4 text-muted-foreground">
            Blockchain technology ensures transparency and traceability in the recycling process. It enables us to track the journey of every recycled material, building trust and accountability with our stakeholders.
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Traceability of recycled materials</li>
            <li>Secure transactions with vendors and clients</li>
            <li>Verifiable EPR compliance</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default BlockchainSection
