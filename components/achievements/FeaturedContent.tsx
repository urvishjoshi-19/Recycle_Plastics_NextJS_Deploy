'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const featuredAchievements = [
  {
    id: 1,
    title: 'Awarded Best Sustainable Business of the Year',
    description: 'Recycle Plastics was recognized for its innovative approach to plastic recycling and commitment to sustainability, receiving the prestigious "Best Sustainable Business of the Year" award at the Global Green Awards 2023.',
    image: '/achievement-1.jpg',
  },
  {
    id: 2,
    title: 'Milestone: 1 Million Tons of Plastic Recycled',
    description: 'We\'ve reached a significant milestone in our journey towards a cleaner planet. Recycle Plastics has successfully recycled 1 million tons of plastic, preventing it from ending up in landfills or oceans.',
    image: '/achievement-2.jpg',
  },
  {
    id: 3,
    title: 'Launch of Innovative Recycling Technology',
    description: 'Recycle Plastics unveiled its groundbreaking recycling technology that increases efficiency by 40% while reducing energy consumption. This innovation marks a new era in sustainable recycling practices.',
    image: '/achievement-3.jpg',
  },
]

export default function FeaturedContent() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % featuredAchievements.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + featuredAchievements.length) % featuredAchievements.length)
  }

  return (
    <section className="mb-16">
      <h2 className="mb-4 text-3xl font-bold text-center text-secondary">Featured Achievements</h2>
      <p className="mb-8 text-lg text-muted-foreground text-center max-w-2xl mx-auto">
        Discover our key milestones, awards, and projects that showcase our commitment to innovation and sustainability in the recycling industry.
      </p>
      <div className="relative">
        <Card className="overflow-hidden bg-card">
          <div className="relative h-64 sm:h-96">
            <Image
              src={featuredAchievements[currentSlide].image}
              alt={featuredAchievements[currentSlide].title}
              fill
              className="object-cover"
            />
          </div>
          <CardHeader>
            <CardTitle className="text-primary">{featuredAchievements[currentSlide].title}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">{featuredAchievements[currentSlide].description}</p>
          </CardContent>
          <CardFooter>
            <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90">Learn More</Button>
          </CardFooter>
        </Card>
        <Button
          variant="outline"
          size="icon"
          className="absolute left-4 top-1/2 -translate-y-1/2 transform bg-primary/20 hover:bg-primary/30"
          onClick={prevSlide}
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="absolute right-4 top-1/2 -translate-y-1/2 transform bg-primary/20 hover:bg-primary/30"
          onClick={nextSlide}
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </section>
  )
}

