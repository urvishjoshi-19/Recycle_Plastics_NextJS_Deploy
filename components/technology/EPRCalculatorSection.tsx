'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Calculator } from 'lucide-react'
import Link from 'next/link'

const EPRCalculatorSection = () => {
  return (
    <section className="py-12">
      <div className="text-center max-w-2xl mx-auto">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Calculator className="w-24 h-24 mx-auto text-primary mb-4" />
        </motion.div>
        <h2 className="text-3xl font-bold mb-4 text-primary">EPR Calculator</h2>
        <p className="mb-6 text-muted-foreground">
          Simplify your EPR compliance with our interactive calculator. Calculate compliance requirements effortlessly and explore the impact of your recycling efforts.
        </p>
        <Link href="/epr#calculator">
          <Button size="lg">
            Use the EPR Calculator
          </Button>
        </Link>
      </div>
    </section>
  )
}

export default EPRCalculatorSection

