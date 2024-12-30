import Image from 'next/image'
import { Button } from '@/components/ui/button'

const Sustainability = () => {
  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold mb-8 text-center">Building a Sustainable Future Worldwide</h2>
      <div className="flex flex-col md:flex-row-reverse items-center gap-8">
        <div className="w-full md:w-1/2">
          <Image
            src="/sustainability.jpg"
            alt="Global sustainability initiatives"
            width={600}
            height={400}
            className="rounded-lg object-cover"
          />
        </div>
        <div className="w-full md:w-1/2">
          <p className="text-lg mb-4">
            At Recycle Plastics, we are committed to building a sustainable future through eco-friendly packaging solutions and responsible recycling practices on a global scale. Our initiatives aim to reduce waste, conserve resources, and promote circular economy principles across the world.
          </p>
          <Button>Explore Our Global Sustainability Practices</Button>
        </div>
      </div>
    </section>
  )
}

export default Sustainability

