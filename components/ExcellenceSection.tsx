import Image from 'next/image'
import { Award, Recycle, Leaf, Zap } from 'lucide-react'

const ExcellenceSection = () => {
  return (
    <section className="bg-muted py-16">
      <div className="container">
        <h2 className="mb-12 text-center text-3xl font-bold">Our Excellence</h2>
        <div className="flex flex-col items-center gap-8 md:flex-row">
          <div className="w-full md:w-1/2">
            <Image
              src="/women-empowerment.jpg"
              alt="Recycling Excellence"
              width={600}
              height={400}
              className="rounded-lg object-cover"
            />
          </div>
          <div className="w-full md:w-1/2">
            <h3 className="mb-4 text-2xl font-bold">Pioneering Excellence in Recycling Industry for Over 40 Years</h3>
            <p className="mb-6">
              Recycle Plastics has been at the forefront of the plastic recycling industry, bringing innovative solutions to businesses in India and beyond. Our dedication to environmental sustainability and responsible recycling practices guides us in everything we do.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-2">
                <Award className="h-6 w-6 text-primary" />
                <span>Industry Leader</span>
              </div>
              <div className="flex items-center gap-2">
                <Recycle className="h-6 w-6 text-primary" />
                <span>Innovative Solutions</span>
              </div>
              <div className="flex items-center gap-2">
                <Leaf className="h-6 w-6 text-primary" />
                <span>Eco-Friendly</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="h-6 w-6 text-primary" />
                <span>Efficient Processes</span>
              </div>
            </div>
            <p className="mt-6 font-bold">Connect with Us: +91 9409058154</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ExcellenceSection

