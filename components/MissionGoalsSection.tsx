import { Button } from '@/components/ui/button'
import { CheckCircle } from 'lucide-react'
import Image from 'next/image'

const achievements = [
  'Recycled granules for sustainable packaging solutions.',
  'EPR compliance and filing for major corporate clients.',
  'Community awareness programs for plastic waste management.',
  'Collaboration with local governments to promote recycling initiatives.',
]

const MissionGoalsSection = () => {
  return (
    <section className="bg-background py-16">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left side: Mission & Goals content */}
        <div>
          <h2 className="mb-4 text-3xl font-bold">Mission & Goal</h2>
          <p className="mb-8 text-xl">
            A Commitment to Excellence, Crafting a Sustainable Future
          </p>
          <div className="space-y-4">
            {achievements.map((achievement, index) => (
              <div key={index} className="flex items-start gap-2">
                <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                <p>{achievement}</p>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <Button size="lg">Explore with Us!</Button>
          </div>
        </div>

        {/* Right side: Image */}
        <div className="flex justify-center">
          <Image
            src="/sustainability.jpg" // Replace with your image path
            alt="Mission and Goals"
            width={400} // Adjust the width as needed
            height={400} // Adjust the height as needed
            className="rounded-lg shadow-lg object-cover"
          />
        </div>
      </div>
    </section>
  )
}

export default MissionGoalsSection
