'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Button } from '@/components/ui/button'

const HeroSection = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    mobile: '',
    email: '',
    company: '',
    granuleType: '',
    application: '',
    quantity: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Here you would typically send the data to your backend
  }

  return (
    <div className="transform scale-[0.9]"> {/* Wrapper with scale */}
      <section className="py-12 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Plastic Granules from Leading Manufacturer for Every Application
            </motion.h1>
            <motion.p 
              className="text-lg md:text-xl mb-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Recycle Plastics is a pioneer and leading recycler of plastic waste in India, actively exporting recycled granules of PP, HIPS, LDPE, HDPE, etc.
            </motion.p>
            <motion.p 
              className="text-md md:text-lg text-muted-foreground"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Certified Quality, Global Presence.
            </motion.p>
          </div>
          <motion.div 
            className="bg-card p-6 rounded-lg shadow-lg"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-semibold mb-4">Fill in your details, and we'll contact you shortly.</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                name="fullName"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
              <div className="flex gap-2">
                <Select onValueChange={(value) => setFormData(prev => ({ ...prev, mobile: value }))}>
                  <SelectTrigger className="w-[100px]">
                    <SelectValue placeholder="Code" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="+91">+91</SelectItem>
                    <SelectItem value="+1">+1</SelectItem>
                    <SelectItem value="+44">+44</SelectItem>
                  </SelectContent>
                </Select>
                <Input
                  name="mobile"
                  type="tel"
                  placeholder="Mobile/WhatsApp Number"
                  value={formData.mobile}
                  onChange={handleChange}
                  required
                  className="flex-1"
                />
              </div>
              <Input
                name="email"
                type="email"
                placeholder="Work Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <Input
                name="company"
                placeholder="Company Name"
                value={formData.company}
                onChange={handleChange}
                required
              />
              <Select onValueChange={(value) => setFormData(prev => ({ ...prev, granuleType: value }))}>
                <SelectTrigger>
                  <SelectValue placeholder="Type and Grade of Granule" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="PP">PP</SelectItem>
                  <SelectItem value="HIPS">HIPS</SelectItem>
                  <SelectItem value="LDPE">LDPE</SelectItem>
                  <SelectItem value="HDPE">HDPE</SelectItem>
                </SelectContent>
              </Select>
              <Input
                name="application"
                placeholder="Application"
                value={formData.application}
                onChange={handleChange}
                required
              />
              <Input
                name="quantity"
                type="number"
                placeholder="Quantity (Metric Tonnes)"
                value={formData.quantity}
                onChange={handleChange}
                required
              />
              <Button type="submit" className="w-full">Submit</Button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default HeroSection
