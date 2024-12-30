import Header from '@/components/Header'
import HeroSlider from '@/components/HeroSlider'
import LogoCarousel from '@/components/LogoCarousel'
import SustainabilitySection from '@/components/SustainabilitySection'
import ExcellenceSection from '@/components/ExcellenceSection'
import MissionGoalsSection from '@/components/MissionGoalsSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import Footer from '@/components/Footer'
import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import EcoAI from '@/components/EcoAI'

export const metadata: Metadata = {
  title: 'Recycle Plastics',
  description: 'Recycle Plastics offers innovative recycling solutions for a greener tomorrow. Explore our services in business strategy, EPR, recycled granules, and CPCB compliance.',
  openGraph: {
    title: 'Recycle Plastics',
    description: 'Recycle Plastics offers innovative recycling solutions for a greener tomorrow. Explore our services in business strategy, EPR, recycled granules, and CPCB compliance.',
    images: [{ url: '/og-image.jpg' }],
  },
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <HeroSlider />
      <LogoCarousel />
      <SustainabilitySection />
      <ExcellenceSection />
      <MissionGoalsSection />
      <section className="bg-muted py-16 text-center">
        <h2 className="mb-4 text-3xl font-bold">Discover Our Achievements</h2>
        <p className="mb-8 text-lg">Learn about our latest projects, awards, and industry recognition.</p>
        <Link href="/achievements">
          <Button size="lg">View Achievements</Button>
        </Link>
      </section>
      <TestimonialsSection />
      <section className="bg-primary py-16 text-center text-white">
        <h2 className="mb-4 text-3xl font-bold">Ready to Make a Difference?</h2>
        <p className="mb-8 text-lg">Contact us today to learn how we can help with your recycling needs.</p>
        <Link href="/contact-us">
          <Button size="lg" variant="secondary">Contact Us</Button>
        </Link>
      </section>
      <EcoAI />
      <Footer />
    </main>
  )
}

