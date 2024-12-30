import Image from 'next/image'

const WorldMap = () => {
  return (
    <div className="w-full mb-12 rounded-lg overflow-hidden shadow-lg">
      <Image
        src="/world-map.jpg"
        alt="World Map showing Recycle Plastics' impact"
        width={1200}
        height={600}
        layout="responsive"
        className="object-cover"
      />
    </div>
  )
}

export default WorldMap

