'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Send, CheckCircle } from 'lucide-react'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleSubjectChange = (value: string) => {
    setFormData((prevData) => ({
      ...prevData,
      subject: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 5000)
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    })
  }

  const inputClasses = 'focus:ring-2 focus:ring-primary/50 transition-all duration-300 ease-in-out transform hover:scale-[1.02] focus:scale-[1.02]'

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-2xl mx-auto"
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
          <Input
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className={inputClasses}
          />
        </motion.div>
        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
          <Input
            name="email"
            type="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className={inputClasses}
          />
        </motion.div>
        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
          <Input
            name="phone"
            type="tel"
            placeholder="Your Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className={inputClasses}
          />
        </motion.div>
        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
          <Select onValueChange={handleSubjectChange} value={formData.subject}>
            <SelectTrigger className={inputClasses}>
              <SelectValue placeholder="Select Subject" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="General Inquiry">General Inquiry</SelectItem>
              <SelectItem value="Partnership">Partnership</SelectItem>
              <SelectItem value="Recycling Services">Recycling Services</SelectItem>
              <SelectItem value="Other">Other</SelectItem>
            </SelectContent>
          </Select>
        </motion.div>
        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
          <Textarea
            name="message"
            placeholder="Tell us how we can help you…"
            value={formData.message}
            onChange={handleChange}
            required
            className={`${inputClasses} min-h-[150px]`}
          />
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex justify-center"
        >
          <Button
            type="submit"
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white font-bold py-3 px-6 rounded-full shadow-lg transition-all duration-300 ease-in-out transform hover:translate-y-[-2px]"
          >
            <Send className="mr-2 h-5 w-5" /> Send Message
          </Button>
        </motion.div>
      </form>
      <AnimatePresence>
        {isSubmitted && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            className="fixed bottom-5 right-5 bg-green-500 text-white p-4 rounded-lg shadow-lg flex items-center"
          >
            <CheckCircle className="mr-2 h-5 w-5" />
            <span>Thank you for reaching out! We will get back to you soon.</span>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

