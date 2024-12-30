'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

const testimonials = [
  {
    name: 'John Doe',
    company: 'Green Solutions Inc.',
    image: '/pexels-linkedin-2182970.jpg',
    rating: 5,
    text: 'Recycle Plastics has been an invaluable partner in our sustainability efforts. Their innovative solutions have helped us significantly reduce our environmental impact.',
  },
  {
    name: 'Jane Smith',
    company: 'EcoPackaging Co.',
    image: '/pexels-linkedin-2182970.jpg',
    rating: 4,
    text: 'The team at Recycle Plastics is professional, knowledgeable, and committed to excellence. Their recycled granules have been a game-changer for our packaging needs.',
  },
  {
    name: 'Mike Johnson',
    company: 'Sustainable Futures Ltd.',
    image: '/pexels-linkedin-2182970.jpg',
    rating: 5,
    text: 'Working with Recycle Plastics has been a pleasure. Their EPR services have made compliance a breeze, allowing us to focus on our core business.',
  },
]

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="bg-muted py-16">
      <div className="container">
        <h2 className="mb-12 text-center text-3xl font-bold">What Our Clients Say</h2>
        <div className="relative">
          <Card className="mx-auto max-w-3xl">
            <CardContent className="pt-6">
              <div className="mb-4 flex justify-center">
                <Image
                  src={testimonials[currentTestimonial].image}
                  alt={testimonials[currentTestimonial].name}
                  width={80}
                  height={80}
                  className="rounded-full"
                />
              </div>
              <div className="mb-4 flex justify-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < testimonials[currentTestimonial].rating ? 'text-yellow-400' : 'text-gray-300'
                    }`}
                    fill="currentColor"
                  />
                ))}
              </div>
              <p className="mb-4 text-center italic">{testimonials[currentTestimonial].text}</p>
              <p className="text-center font-bold">{testimonials[currentTestimonial].name}</p>
              <p className="text-center text-sm text-muted-foreground">{testimonials[currentTestimonial].company}</p>
            </CardContent>
          </Card>
          <Button
            variant="outline"
            size="icon"
            className="absolute -left-4 top-1/2 -translate-y-1/2 transform"
            onClick={prevTestimonial}
          >
            <ChevronLeft className="h-4 w-4" />
            <span className="sr-only">Previous testimonial</span>
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute -right-4 top-1/2 -translate-y-1/2 transform"
            onClick={nextTestimonial}
          >
            <ChevronRight className="h-4 w-4" />
            <span className="sr-only">Next testimonial</span>
          </Button>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection

