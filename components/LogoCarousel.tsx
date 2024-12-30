'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

const logos = [
  '/cplogo.png',
  '/cplogo.png',
  '/cplogo.png',
  '/cplogo.png',
  '/cplogo.png',
  '/cplogo.png',
  '/cplogo.png',
  '/cplogo.png',
  '/cplogo.png',
  '/cplogo.png',
]

const LogoCarousel = () => {
  const carouselRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const carousel = carouselRef.current
    if (!carousel) return

    const scrollWidth = carousel.scrollWidth
    const clientWidth = carousel.clientWidth

    const animate = () => {
      if (carousel.scrollLeft >= scrollWidth - clientWidth) {
        carousel.scrollLeft = 0
      } else {
        carousel.scrollLeft += 1
      }
      requestAnimationFrame(animate)
    }

    const animationId = requestAnimationFrame(animate)

    return () => cancelAnimationFrame(animationId)
  }, [])

  return (
    <div className="w-full overflow-hidden bg-muted py-12">
      <div className="container">
        <h2 className="mb-8 text-center text-2xl font-bold">Our Clients</h2>
        <div 
          ref={carouselRef}
          className="flex overflow-hidden"
          style={{ width: '100%' }}
        >
          <motion.div
            className="flex"
            style={{ minWidth: '200%' }}
          >
            {[...logos, ...logos].map((logo, index) => (
              <div key={index} className="flex-shrink-0 px-4" style={{ width: '12.5%' }}>
                <Image src={logo} alt={`Client logo ${index + 1}`} width={150} height={75} />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default LogoCarousel

