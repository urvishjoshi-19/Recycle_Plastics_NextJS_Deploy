'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Button } from '@/components/ui/button'

const CTASection = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    company: '',
    inquiry: '',
    granuleType: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Here you would typically send the data to your backend
  }

  return (
    <section className="py-12 bg-gradient-to-br from-primary to-secondary text-white rounded-lg relative overflow-hidden">
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
      >
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-white rounded-full opacity-10"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 50 + 10}px`,
              height: `${Math.random() * 50 + 10}px`,
            }}
            animate={{
              scale: [1, 1.5, 1],
              rotate: [0, 180, 360],
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
        <h2 className="text-3xl font-bold mb-6 text-center">Let's Collaborate on Sustainable Solutions!</h2>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
          <Input
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
            required
            className="bg-white/20 text-white placeholder-white/70"
          />
          <Input
            name="email"
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="bg-white/20 text-white placeholder-white/70"
          />
          <Input
            name="company"
            placeholder="Company Name"
            value={formData.company}
            onChange={handleChange}
            required
            className="bg-white/20 text-white placeholder-white/70"
          />
          <Textarea
            name="inquiry"
            placeholder="Inquiry Details"
            value={formData.inquiry}
            onChange={handleChange}
            required
            className="bg-white/20 text-white placeholder-white/70"
          />
          <Select onValueChange={(value) => setFormData(prev => ({ ...prev, granuleType: value }))}>
            <SelectTrigger className="bg-white/20 text-white">
              <SelectValue placeholder="Select Granule Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="PP">PP</SelectItem>
              <SelectItem value="HIPS">HIPS</SelectItem>
              <SelectItem value="LDPE">LDPE</SelectItem>
              <SelectItem value="HDPE">HDPE</SelectItem>
            </SelectContent>
          </Select>
          <Button type="submit" className="w-full bg-white text-primary hover:bg-white/90">Submit</Button>
        </form>
      </div>
    </section>
  )
}

export default CTASection

