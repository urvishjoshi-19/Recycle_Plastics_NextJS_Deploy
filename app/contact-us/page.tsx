import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ContactForm from '@/components/ContactForm'
import BackgroundAnimation from '@/components/BackgroundAnimation'

export const metadata: Metadata = {
  title: 'Contact Us - Recycle Plastics',
  description: 'Get in touch with Recycle Plastics for all your recycling and sustainability needs.',
}

export default function ContactUsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-grow relative overflow-hidden">
        <BackgroundAnimation />
        <div className="container mx-auto px-4 py-8 relative z-10">
          <h1 className="text-4xl font-bold text-center mb-8 text-primary">We'd Love to Hear from You!</h1>
          <ContactForm />
        </div>
      </main>
      <Footer />
    </div>
  )
}

