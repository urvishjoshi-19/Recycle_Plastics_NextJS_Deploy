import Image from 'next/image'

const EPRProcessFlowchart = () => {
  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold mb-8 text-center">EPR Process Flowchart</h2>
      <div className="max-w-4xl mx-auto">
        <div className="relative h-64 md:h-96 rounded-lg overflow-hidden">
          <Image
            src="/three.png"
            alt="EPR Process Flowchart"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
      </div>
    </section>
  )
}

export default EPRProcessFlowchart

