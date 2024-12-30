import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import HeroSection from '@/components/pcr-granule/HeroSection'
import DiscoverProducts from '@/components/pcr-granule/DiscoverProducts'
import OurProducts from '@/components/pcr-granule/OurProducts'
import LocallySourced from '@/components/pcr-granule/LocallySourced'
import CTASection from '@/components/pcr-granule/CTASection'
import BackgroundAnimation from '@/components/pcr-granule/BackgroundAnimation'

export const metadata: Metadata = {
  title: 'PCR Granules - Recycle Plastics',
  description: 'Discover our high-quality plastic granules for every application. Certified quality and global presence.',
}

export default function PCRGranulePage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-grow relative">
        <BackgroundAnimation />
        <div className="container mx-auto px-4 py-8 relative z-10">
          <HeroSection />
          <DiscoverProducts />
          <OurProducts />
          <LocallySourced />
          <CTASection />
        </div>
      </main>
      <Footer />
    </div>
  )
}

