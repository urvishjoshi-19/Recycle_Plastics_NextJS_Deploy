'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const teamMembers = [
  {
    name: 'John Doe',
    designation: 'CEO',
    description: 'Leading Recykal\'s mission of transforming waste management with innovation.',
    image: '/pexels-linkedin-2182970.jpg',
  },
  {
    name: 'Jane Smith',
    designation: 'Managing Director',
    description: 'Driving strategic growth and operational excellence in our waste management solutions.',
    image: '/pexels-edmond-dantes-4342352.jpg',
  },
  {
    name: 'Mike Johnson',
    designation: 'Vice President',
    description: 'Spearheading technological advancements and product development for Recykal.',
    image: '/pexels-pranavdigwal-32976.jpg',
  },
]

const OurTeam = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              className="bg-card rounded-lg overflow-hidden shadow-lg transition-transform duration-300 transform hover:scale-105"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="relative h-64">
                <Image
                  src={member.image}
                  alt={member.name}
                  layout="fill"
                  objectFit="cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="text-2xl font-bold">{member.name}</h3>
                  <p className="text-lg">{member.designation}</p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-muted-foreground">{member.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default OurTeam
