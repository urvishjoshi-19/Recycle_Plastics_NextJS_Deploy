import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import TechnologyHero from '@/components/technology/TechnologyHero'
import AISection from '@/components/technology/AISection'
import BlockchainSection from '@/components/technology/BlockchainSection'
import EPRCalculatorSection from '@/components/technology/EPRCalculatorSection'
import BackgroundAnimation from '@/components/technology/BackgroundAnimation'

export const metadata: Metadata = {
  title: 'Technology - Recycle Plastics',
  description: 'Explore the cutting-edge technologies empowering Recycle Plastics to lead the way in sustainable waste management.',
}

export default function TechnologyPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-grow relative">
        <BackgroundAnimation />
        <div className="container mx-auto px-4 py-8 relative z-10 max-w-6xl">
          <TechnologyHero />
          <AISection />
          <BlockchainSection />
          <EPRCalculatorSection />
        </div>
      </main>
      <Footer />
    </div>
  )
}

