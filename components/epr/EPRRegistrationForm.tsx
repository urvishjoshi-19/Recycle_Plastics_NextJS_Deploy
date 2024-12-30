'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'

const EPRRegistrationForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Here you would typically send the data to your backend
  }

  return (
    <section className="py-12">
      <div className="bg-card shadow-lg rounded-lg overflow-hidden">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 p-6 flex items-center justify-center">
            <Image
              src="/four.png"
              alt="EPR Compliance"
              width={500}
              height={300}
              className="rounded-lg object-cover"
            />
          </div>
          <div className="w-full md:w-1/2 p-6">
            <h2 className="text-3xl font-bold mb-4">EPR Registration</h2>
            <p className="mb-4 text-muted-foreground">
              Obtain EPR Credits and Comply with Plastic Waste Management Rules alongside 600+ Major Brands.
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex gap-4">
                <Input
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
                <Input
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>
              <Input
                name="email"
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <Input
                name="phone"
                type="tel"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
              <Input
                name="company"
                placeholder="Company"
                value={formData.company}
                onChange={handleChange}
                required
              />
              <Textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                required
              />
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button type="submit" className="w-full">Submit</Button>
              </motion.div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default EPRRegistrationForm

