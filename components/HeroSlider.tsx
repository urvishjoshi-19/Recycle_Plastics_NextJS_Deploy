'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

const slides = [
  {
    image: '/i1.jpeg',
    caption: 'Innovative Recycling Solutions for a Greener Tomorrow',
  },
  {
    image: '/i2.jpeg',
    caption: 'Transforming Waste into Valuable Resources',
  },
  {
    image: '/i3.jpeg',
    caption: 'Sustainable Practices for a Cleaner Planet',
  },
  {
    image: '/i2.jpeg',
    caption: 'Leading the Way in Plastic Recycling Technology',
  },
  {
    image: '/i1.jpeg',
    caption: 'Partnering for a Sustainable Future',
  },
]

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length)
  const prevSlide = () => setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length)

  return (
    <div className="relative h-[60vh] w-full overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={slide.image}
            alt={slide.caption}
            fill
            style={{ objectFit: 'cover' }}
            priority={index === 0}
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 flex items-center justify-center">
            <h2 className="text-center text-3xl font-bold text-white md:text-4xl lg:text-5xl">
              {slide.caption}
            </h2>
          </div>
        </div>
      ))}
      <Button
        variant="outline"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 transform"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-4 w-4" />
        <span className="sr-only">Previous slide</span>
      </Button>
      <Button
        variant="outline"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 transform"
        onClick={nextSlide}
      >
        <ChevronRight className="h-4 w-4" />
        <span className="sr-only">Next slide</span>
      </Button>
    </div>
  )
}

export default HeroSlider

