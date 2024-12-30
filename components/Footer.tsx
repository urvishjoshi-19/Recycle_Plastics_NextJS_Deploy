import Link from 'next/link'
import Image from 'next/image'
import { Facebook, Linkedin, Twitter } from 'lucide-react'
import ClientForm from './ClientForm'

const quickLinks = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about-us' },
  { name: 'PCR Granule', href: '/pcr-granule' },
  { name: 'EPR', href: '/epr' },
  { name: 'Impact', href: '/impact' },
  { name: 'Technology', href: '/technology' },
  { name: 'Achievements', href: '/achievements' },
  { name: 'Contact Us', href: '/contact-us' },
]

const Footer = () => {
  return (
    <footer className="bg-muted py-12">
      <div className="container">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <Link href="/" className="mb-4 flex items-center space-x-2">
              <Image src="/logo.svg" alt="Recycle Plastics Logo" width={32} height={32} />
              <span className="text-lg font-bold">Recycle Plastics</span>
            </Link>
            <p className="mb-4 text-sm">Innovative recycling solutions for a greener tomorrow.</p>
            <p className="text-sm">
              Phone: +91 9409058154
              <br />
              Email: info@recycleplastics.com
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
              <ul className="space-y-2">
                {quickLinks.slice(0, 4).map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="text-sm hover:underline">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
              <ul className="space-y-2">
                {quickLinks.slice(4).map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="text-sm hover:underline">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Stay Connected</h3>
            <div className="mb-4 flex space-x-4">
              <a href="#" aria-label="Facebook">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" aria-label="LinkedIn">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="#" aria-label="Twitter">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
            <ClientForm />
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 pt-8 text-center text-sm">
          ©  Developed by Urvish Joshi. {new Date().getFullYear()} Recycle Plastics. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer
