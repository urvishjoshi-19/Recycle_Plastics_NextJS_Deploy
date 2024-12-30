'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const exhibitions = [
  {
    id: 1,
    title: 'Best Eco-Friendly Product Award at XYZ Expo',
    image: '/exhibition-1.jpg',
    description: 'Recycle Plastics showcased its innovative recycled plastic products, winning the Best Eco-Friendly Product Award at the XYZ Sustainability Expo.',
  },
  {
    id: 2,
    title: 'Green Tech Innovation Showcase',
    image: '/exhibition-2.jpg',
    description: 'Our team presented cutting-edge recycling technologies at the Green Tech Innovation Showcase, attracting interest from industry leaders and environmental organizations.',
  },
  {
    id: 3,
    title: 'Circular Economy Conference',
    image: '/exhibition-3.jpg',
    description: 'Recycle Plastics was a key speaker at the Circular Economy Conference, sharing insights on implementing sustainable practices in the recycling industry.',
  },
]

const upcomingExhibitions = [
  {
    id: 1,
    name: 'Global Sustainability Expo 2024',
    date: 'March 15-17, 2024',
    venue: 'New York City, USA',
    description: 'Recycle Plastics will present its latest advancements in plastic recycling technology and sustainable packaging solutions.',
  },
  {
    id: 2,
    name: 'EcoTech Innovation Summit',
    date: 'June 5-7, 2024',
    venue: 'Berlin, Germany',
    description: 'Join us as we showcase our AI-driven sorting systems and discuss the future of automated recycling processes.',
  },
]

export default function ExhibitionsSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % exhibitions.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + exhibitions.length) % exhibitions.length)
  }

  return (
    <section className="mb-16">
      <h2 className="mb-4 text-3xl font-bold text-center text-secondary">Exhibitions and Awards</h2>
      <p className="mb-8 text-lg text-muted-foreground text-center max-w-2xl mx-auto">
        Explore our participation in key industry exhibitions and the recognition we have received for our commitment to sustainability and innovation.
      </p>
      <div className="relative mb-12">
        <Card className="overflow-hidden bg-card">
          <div className="relative h-64 sm:h-96">
            <Image
              src={exhibitions[currentSlide].image}
              alt={exhibitions[currentSlide].title}
              fill
              className="object-cover"
            />
          </div>
          <CardHeader>
            <CardTitle className="text-primary">{exhibitions[currentSlide].title}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">{exhibitions[currentSlide].description}</p>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="bg-secondary text-secondary-foreground hover:bg-secondary/90">Read More</Button>
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
      <h3 className="mb-4 text-2xl font-semibold text-center text-secondary">Upcoming Exhibitions</h3>
      <div className="grid gap-6 sm:grid-cols-2">
        {upcomingExhibitions.map((exhibition) => (
          <Card key={exhibition.id} className="bg-card">
            <CardHeader>
              <CardTitle className="text-primary">{exhibition.name}</CardTitle>
              <CardDescription>{exhibition.date} • {exhibition.venue}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{exhibition.description}</p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="bg-secondary text-secondary-foreground hover:bg-secondary/90">RSVP</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  )
}

