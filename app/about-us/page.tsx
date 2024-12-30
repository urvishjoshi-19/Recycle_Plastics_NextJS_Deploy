import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import AboutHero from '@/components/about/AboutHero'
import WavyFlashcards from '@/components/about/WavyFlashcards'
import OurStory from '@/components/about/OurStory'
import Timeline from '@/components/about/Timeline'
import WhatMattersToUs from '@/components/about/WhatMattersToUs'
import OurTeam from '@/components/about/OurTeam'
import FutureInitiatives from '@/components/about/FutureInitiatives'
import Expansion from '@/components/about/Expansion'
import CallToAction from '@/components/about/CallToAction'
import BackgroundAnimation from '@/components/about/BackgroundAnimation'

export const metadata: Metadata = {
  title: 'About Us - Recycle Plastics',
  description: 'Learn about Recycle Plastics, our story, vision, and the team behind our innovative waste management solutions.',
}

export default function AboutUsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-grow relative">
        <BackgroundAnimation />
        <div className="container mx-auto px-4 py-8 relative z-10">
          <AboutHero />
          <WavyFlashcards />
          <OurStory />
          <Timeline />
          <WhatMattersToUs />
          <OurTeam />
          <FutureInitiatives />
          <Expansion />
          <CallToAction />
        </div>
      </main>
      <Footer />
    </div>
  )
}

