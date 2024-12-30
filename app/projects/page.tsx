import { Metadata } from 'next'
import Image from 'next/image'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'

export const metadata: Metadata = {
  title: 'Projects - Recycle Plastics',
  description: 'Discover our innovative recycling projects and their impact on sustainability.',
}

const projects = [
  {
    title: 'City-wide Recycling Initiative',
    description: 'Implementing a comprehensive recycling program for a major metropolitan area.',
    image: '/city-recycling.jpg',
    progress: 75,
    impact: '500 tons of plastic diverted from landfills',
    partner: 'Metro City Council',
  },
  {
    title: 'Ocean Plastic Recovery',
    description: 'Collecting and recycling plastic waste from coastal areas and ocean surfaces.',
    image: '/ocean-plastic.jpg',
    progress: 60,
    impact: '200 tons of ocean plastic recovered',
    partner: 'Coastal Conservation Society',
  },
  {
    title: 'Circular Economy in Textiles',
    description: 'Developing a closed-loop system for recycling and reusing textile waste.',
    image: '/textile-recycling.jpg',
    progress: 40,
    impact: '30% reduction in textile waste for partner companies',
    partner: 'Fashion Forward Alliance',
  },
  {
    title: 'School Recycling Education Program',
    description: 'Educating students about the importance of recycling and implementing school-wide initiatives.',
    image: '/school-recycling.jpg',
    progress: 90,
    impact: '100 schools engaged, reaching 50,000 students',
    partner: 'National Education Board',
  },
]

export default function ProjectsPage() {
  return (
    <div className="container py-12">
      <h1 className="mb-8 text-4xl font-bold">Our Projects</h1>
      <p className="mb-12 text-xl text-muted-foreground">
        Explore our ongoing and completed projects that are making a significant impact on plastic recycling and
        sustainability across various sectors.
      </p>
      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((project, index) => (
          <Card key={index} className="overflow-hidden">
            <Image src={project.image} alt={project.title} width={600} height={300} className="object-cover" />
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                <div className="mb-2 flex justify-between text-sm">
                  <span>Progress</span>
                  <span>{project.progress}%</span>
                </div>
                <Progress value={project.progress} />
              </div>
              <div className="mb-4">
                <Badge variant="outline" className="mb-2">
                  Impact
                </Badge>
                <p className="text-sm">{project.impact}</p>
              </div>
              <div>
                <Badge variant="outline" className="mb-2">
                  Partner
                </Badge>
                <p className="text-sm">{project.partner}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

