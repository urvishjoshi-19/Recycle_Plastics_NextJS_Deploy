import Image from 'next/image'
import { Button } from '@/components/ui/button'

const WomenEmpowerment = () => {
  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold mb-8 text-center">Empowering Women for a Better Tomorrow</h2>
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="w-full md:w-1/2">
          <Image
            src="/women-empowerment.jpg"
            alt="Women engaged in recycling activities"
            width={600}
            height={400}
            className="rounded-lg object-cover"
          />
        </div>
        <div className="w-full md:w-1/2">
          <p className="text-lg mb-4">
            Recycle Plastics empowers women globally by offering training, employment, and leadership opportunities, fostering equality in the recycling industry.
          </p>
          <Button>Read More</Button>
        </div>
      </div>
    </section>
  )
}

export default WomenEmpowerment

