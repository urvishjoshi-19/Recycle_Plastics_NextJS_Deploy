'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Calculator } from 'lucide-react'
import Link from 'next/link'

const EPRCalculator = () => {
  const [formData, setFormData] = useState({
    importedPlastic2020: '',
    preConsumerWaste2020: '',
    importedPlastic2021: '',
    preConsumerWaste2021: '',
  })
  const [result, setResult] = useState<number | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // This is a simplified calculation for demonstration purposes
    const total = Object.values(formData).reduce((sum, value) => sum + Number(value), 0)
    setResult(total * 0.1) // Assuming 10% of the total is the EPR obligation
  }

  return (
    <section className="py-12" id="calculator">
      <div className="max-w-full mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">EPR Calculator</h2>
        <div className="bg-card shadow-lg rounded-lg overflow-hidden">
          <div className="flex flex-col md:flex-row w-full">
            <div className="w-full md:w-1/2 p-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <p className="mb-4 text-muted-foreground">
                  Importer means a person who imports plastic packaging products or products with plastic packaging, carry bags, multi-layered packaging, or plastic sheets.
                </p>
                <Input
                  name="importedPlastic2020"
                  type="number"
                  placeholder="Quantities of plastic packaging products imported (2020–21)"
                  value={formData.importedPlastic2020}
                  onChange={handleChange}
                  required
                />
                <Input
                  name="preConsumerWaste2020"
                  type="number"
                  placeholder="Quantities of pre-consumer plastic waste generated (2020–21)"
                  value={formData.preConsumerWaste2020}
                  onChange={handleChange}
                  required
                />
                <Input
                  name="importedPlastic2021"
                  type="number"
                  placeholder="Quantities of plastic packaging products imported (2021–22)"
                  value={formData.importedPlastic2021}
                  onChange={handleChange}
                  required
                />
                <Input
                  name="preConsumerWaste2021"
                  type="number"
                  placeholder="Quantities of pre-consumer plastic waste generated (2021–22)"
                  value={formData.preConsumerWaste2021}
                  onChange={handleChange}
                  required
                />
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button type="submit" className="w-full">Calculate</Button>
                </motion.div>
              </form>
              {result !== null && (
                <div className="mt-4 p-4 bg-muted rounded-lg">
                  <p className="font-bold">Estimated EPR Obligation: {result.toFixed(2)} MT</p>
                </div>
              )}
            </div>
            <div className="w-full md:w-1/2 p-6 flex flex-col items-center justify-center bg-muted">
              <motion.div
                initial={{ rotate: 0 }}
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              >
                <Calculator className="w-32 h-32 text-primary mb-4" />
              </motion.div>
              <Link href="/technology">
                <Button variant="outline">Learn More About Our Technology</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default EPRCalculator
