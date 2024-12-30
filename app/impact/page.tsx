import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WorldMap from '@/components/impact/WorldMap'
import WomenEmpowerment from '@/components/impact/WomenEmpowerment'
import SocioEconomicImpact from '@/components/impact/SocioEconomicImpact'
import Sustainability from '@/components/impact/Sustainability'
import BackgroundAnimation from '@/components/BackgroundAnimation'

export const metadata: Metadata = {
  title: 'Impact - Recycle Plastics',
  description: 'Discover the positive impact of Recycle Plastics across the world, from women empowerment to sustainability initiatives.',
}

export default function ImpactPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-grow relative">
        <BackgroundAnimation />
        <div className="container mx-auto px-4 py-8 relative z-10">
          <h1 className="text-4xl font-bold text-center mb-12 text-primary">Our Global Impact</h1>
          <WorldMap />
          <WomenEmpowerment />
          <SocioEconomicImpact />
          <Sustainability />
        </div>
      </main>
      <Footer />
    </div>
  )
}

