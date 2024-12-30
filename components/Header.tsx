'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useTheme } from 'next-themes'
import { Moon, Sun, Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { usePathname } from 'next/navigation'

const Header = () => {
  const [mounted, setMounted] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const pathname = usePathname()

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about-us' },
    { name: 'PCR Granules', href: '/pcr-granules' },
    { name: 'EPR', href: '/epr' },
    { name: 'Achievements', href: '/achievements' },
    { name: 'Impact', href: '/impact' },
    { name: 'Technology', href: '/technology' },
    { name: 'Contact Us', href: '/contact-us' },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          {/* Conditionally render logo based on theme */}
          <Image
            src={theme === 'dark' ? '/logo.svg' : '/logo-black.svg'} // Use logo-black.svg for light mode
            alt="Recycle Plastics Logo"
            width={167}
            height={24}
          />
        </Link>
        <nav className="hidden md:flex flex-1 items-center justify-end space-x-4 text-sm font-medium">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`transition-colors hover:text-foreground/80 ${
                pathname === item.href ? 'text-primary font-bold' : ''
              }`}
            >
              {item.name}
            </Link>
          ))}
          <Button
            variant="ghost"
            size="icon"
            aria-label="Toggle theme"
            className="mr-6"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          >
            <Sun className="h-6 w-6 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-6 w-6 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </nav>
        <div className="md:hidden flex items-center ml-auto">
          <Button
            variant="ghost"
            size="icon"
            aria-label="Toggle theme"
            className="mr-2"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          >
            <Sun className="h-6 w-6 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-6 w-6 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            aria-label="Toggle mobile menu"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>
      {mobileMenuOpen && (
        <div className="md:hidden">
          <nav className="flex flex-col items-center space-y-4 py-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`transition-colors hover:text-foreground/80 ${
                  pathname === item.href ? 'text-primary font-bold' : ''
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}

export default Header
