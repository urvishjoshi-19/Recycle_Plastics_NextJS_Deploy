import { Metadata } from 'next'
import Image from 'next/image'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export const metadata: Metadata = {
  title: 'Services - Recycle Plastics',
  description: 'Explore our comprehensive range of recycling and sustainability services.',
}

const services = [
  {
    title: 'Plastic Recycling',
    description: 'State-of-the-art recycling process for various types of plastics.',
    image: '/plastic-recycling.jpg',
    tags: ['PET', 'HDPE', 'LDPE', 'PP'],
  },
  {
    title: 'EPR Compliance',
    description: 'End-to-end solutions for Extended Producer Responsibility compliance.',
    image: '/epr-compliance.jpg',
    tags: ['Consultation', 'Documentation', 'Reporting'],
  },
  {
    title: 'Recycled Granules Production',
    description: 'High-quality recycled plastic granules for various industries.',
    image: '/recycled-granules.jpg',
    tags: ['Food-grade', 'Textile', 'Automotive'],
  },
  {
    title: 'Waste Management Consulting',
    description: 'Expert consulting services for effective waste management strategies.',
    image: '/waste-management.jpg',
    tags: ['Audits', 'Strategy', 'Implementation'],
  },
]

export default function ServicesPage() {
  return (
    <div className="container py-12">
      <h1 className="mb-8 text-4xl font-bold">Our Services</h1>
      <p className="mb-12 text-xl text-muted-foreground">
        At Recycle Plastics, we offer a comprehensive range of services designed to meet the diverse needs of businesses
        committed to sustainability and responsible waste management.
      </p>
      <div className="grid gap-8 md:grid-cols-2">
        {services.map((service, index) => (
          <Card key={index} className="overflow-hidden">
            <Image src={service.image} alt={service.title} width={600} height={300} className="object-cover" />
            <CardHeader>
              <CardTitle>{service.title}</CardTitle>
              <CardDescription>{service.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag, tagIndex) => (
                  <Badge key={tagIndex} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

