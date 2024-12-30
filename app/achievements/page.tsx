import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import BlogSection from '@/components/achievements/BlogSection'
import FeaturedContent from '@/components/achievements/FeaturedContent'
import ExhibitionsSection from '@/components/achievements/ExhibitionsSection'

export const metadata: Metadata = {
  title: 'Achievements - Recycle Plastics',
  description: 'Explore our blogs, featured achievements, and exhibitions in the world of sustainable recycling.',
}

export default function AchievementsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8">
          <h1 className="mb-8 text-4xl font-bold text-center text-primary">Our Achievements</h1>
          <BlogSection />
          <FeaturedContent />
          <ExhibitionsSection />
        </div>
      </main>
      <Footer />
    </div>
  )
}

