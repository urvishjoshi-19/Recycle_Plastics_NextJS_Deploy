import Link from 'next/link'
import { Button } from '@/components/ui/button'

const CallToAction = () => {
  return (
    <section className="py-12 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Passionate about digital technology?</h2>
        <p className="text-xl mb-8">Interested in disrupting the waste management industry?</p>
        <Link href="/contact-us">
          <Button size="lg" variant="secondary">
            Contact Us
          </Button>
        </Link>
      </div>
    </section>
  )
}

export default CallToAction

