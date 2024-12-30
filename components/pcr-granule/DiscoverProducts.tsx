'use client'
import Image from 'next/image'

import { useState } from 'react'
import { motion } from 'framer-motion'

const productData = [
  {
    name: 'PP',
    image: '/pp-granules.jpg',
    density: '0.90-0.92 g/cm³',
    mfi: '2-25 g/10 min',
    meltingPoint: '160-165°C',
    tensileStrength: '25-35 MPa',
    flexuralModulus: '1000-1300 MPa',
    impactStrength: '20-100 J/m',
    applications: 'Packaging, Automotive, Consumer Goods',
  },
  {
    name: 'HDPE',
    image: '/hdpe-granules.jpg',
    density: '0.94-0.96 g/cm³',
    mfi: '0.2-20 g/10 min',
    meltingPoint: '120-130°C',
    tensileStrength: '20-30 MPa',
    flexuralModulus: '800-1200 MPa',
    impactStrength: '150-200 J/m',
    applications: 'Bottles, Pipes, Films',
  },
  {
    name: 'LDPE',
    image: '/ldpe-granules.jpg',
    density: '0.91-0.94 g/cm³',
    mfi: '0.5-15 g/10 min',
    meltingPoint: '110-120°C',
    tensileStrength: '10-20 MPa',
    flexuralModulus: '400-600 MPa',
    impactStrength: '100-150 J/m',
    applications: 'Film, Coating, Packaging',
  },
  {
    name: 'LLDPE',
    image: '/lldpe-granules.jpg',
    density: '0.91-0.93 g/cm³',
    mfi: '0.8-12 g/10 min',
    meltingPoint: '120-125°C',
    tensileStrength: '15-25 MPa',
    flexuralModulus: '500-700 MPa',
    impactStrength: '120-180 J/m',
    applications: 'Stretch Wrap, Containers, Liners',
  },
  {
    name: 'HIPS',
    image: '/hips-granules.jpg',
    density: '1.04-1.06 g/cm³',
    mfi: '2-8 g/10 min',
    meltingPoint: '200-220°C',
    tensileStrength: '20-30 MPa',
    flexuralModulus: '1500-1800 MPa',
    impactStrength: '10-50 J/m',
    applications: 'Appliances, Toys, Medical Equipment',
  },
  {
    name: 'ABS',
    image: '/abs-granules.jpg',
    density: '1.02-1.06 g/cm³',
    mfi: '1-10 g/10 min',
    meltingPoint: '220-240°C',
    tensileStrength: '30-50 MPa',
    flexuralModulus: '2000-2400 MPa',
    impactStrength: '50-100 J/m',
    applications: 'Automotive Parts, Electronics, Toys',
  },
  {
    name: 'PET',
    image: '/pet-granules.jpg',
    density: '1.30-1.40 g/cm³',
    mfi: '2-25 g/10 min',
    meltingPoint: '250-260°C',
    tensileStrength: '50-70 MPa',
    flexuralModulus: '2000-2500 MPa',
    impactStrength: '10-20 J/m',
    applications: 'Bottles, Fibers, Films',
  },
  {
    name: 'PVC',
    image: '/pvc-granules.jpg',
    density: '1.3-1.45 g/cm³',
    mfi: '0.5-5 g/10 min',
    meltingPoint: '170-180°C',
    tensileStrength: '40-60 MPa',
    flexuralModulus: '2500-3500 MPa',
    impactStrength: '10-30 J/m',
    applications: 'Pipes, Flooring, Profiles',
  },
  {
    name: 'PC',
    image: '/pc-granules.jpg',
    density: '1.20-1.22 g/cm³',
    mfi: '5-15 g/10 min',
    meltingPoint: '260-270°C',
    tensileStrength: '60-70 MPa',
    flexuralModulus: '2300-2700 MPa',
    impactStrength: '200-400 J/m',
    applications: 'Lenses, Automotive, Electrical',
  },
  {
    name: 'PA (Nylon)',
    image: '/pa-granules.jpg',
    density: '1.12-1.14 g/cm³',
    mfi: '3-20 g/10 min',
    meltingPoint: '260-280°C',
    tensileStrength: '50-90 MPa',
    flexuralModulus: '3000-5000 MPa',
    impactStrength: '30-60 J/m',
    applications: 'Textiles, Gears, Bearings',
  },
]

const DiscoverProducts = () => {
  const [hoveredRow, setHoveredRow] = useState<number | null>(null)

  return (
    <section className="py-12 transform scale-[0.9]">
      <h2 className="text-3xl font-bold mb-6 text-center">Discover Our Products</h2>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-primary text-primary-foreground">
              <th className="p-2 border">Product</th>
              <th className="p-2 border">Image</th>
              <th className="p-2 border">Density</th>
              <th className="p-2 border">MFI</th>
              <th className="p-2 border">Melting Point</th>
              <th className="p-2 border">Tensile Strength</th>
              <th className="p-2 border">Flexural Modulus</th>
              <th className="p-2 border">Impact Strength</th>
              <th className="p-2 border">Applications</th>
            </tr>
          </thead>
          <tbody>
            {productData.map((product, index) => (
              <motion.tr
                key={product.name}
                className={index % 2 === 0 ? 'bg-background' : 'bg-muted'}
                onMouseEnter={() => setHoveredRow(index)}
                onMouseLeave={() => setHoveredRow(null)}
                animate={{
                  backgroundColor: hoveredRow === index ? 'rgba(0,0,0,0.05)' : 'transparent',
                }}
              >
                <td className="p-2 border font-semibold">{product.name}</td>
                <td className="p-2 border">
                  <Image src={product.image} fill = {true} alt={product.name} className="w-16 h-16 object-cover mx-auto" />
                </td>
                <td className="p-2 border">{product.density}</td>
                <td className="p-2 border">{product.mfi}</td>
                <td className="p-2 border">{product.meltingPoint}</td>
                <td className="p-2 border">{product.tensileStrength}</td>
                <td className="p-2 border">{product.flexuralModulus}</td>
                <td className="p-2 border">{product.impactStrength}</td>
                <td className="p-2 border">{product.applications}</td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default DiscoverProducts
