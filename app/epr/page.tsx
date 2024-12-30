import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import EPRHero from '@/components/epr/EPRHero'
import EPRRegistrationForm from '@/components/epr/EPRRegistrationForm'
import ImpactStatistics from '@/components/epr/ImpactStatistics'
import EPRProcessFlowchart from '@/components/epr/EPRProcessFlowchart'
import EPRCalculator from '@/components/epr/EPRCalculator'
import BackgroundAnimation from '@/components/BackgroundAnimation'

export const metadata: Metadata = {
  title: 'EPR - Recycle Plastics',
  description: 'Learn about Extended Producer Responsibility (EPR) and how Recycle Plastics helps with EPR registration and compliance.',
}

export default function EPRPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-grow relative">
        <BackgroundAnimation />
        <div className="container mx-auto px-4 py-8 relative z-10 max-w-6xl">
          <EPRHero />
          <EPRRegistrationForm />
          <ImpactStatistics />
          <EPRProcessFlowchart />
          <EPRCalculator />
        </div>
      </main>
      <Footer />
    </div>
  )
}

