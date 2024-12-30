'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

const coordinates = [
  { x: 200, y: 300 },
  { x: 300, y: 200 },
  { x: 400, y: 400 },
  { x: 500, y: 300 },
  { x: 600, y: 500 },
]

const IndianMap = () => {
  const svgRef = useRef<SVGSVGElement>(null)

  useEffect(() => {
    const svg = svgRef.current
    if (!svg) return

    const updateViewBox = () => {
      const width = svg.clientWidth
      const height = svg.clientHeight
      svg.setAttribute('viewBox', `0 0 ${width} ${height}`)
    }

    updateViewBox()
    window.addEventListener('resize', updateViewBox)

    return () => window.removeEventListener('resize', updateViewBox)
  }, [])

  return (
    <div className="w-full h-[60vh] mb-12">
      <svg ref={svgRef} className="w-full h-full">
        <path
          d="M100,100 L700,100 L700,700 L100,700 Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="text-primary"
        />
        {coordinates.map((coord, index) => (
          <motion.circle
            key={index}
            cx={coord.x}
            cy={coord.y}
            r="10"
            fill="currentColor"
            className="text-secondary"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: [0, 1.2, 1], opacity: 1 }}
            transition={{ delay: index * 0.5, duration: 1, repeat: Infinity, repeatDelay: 2 }}
          />
        ))}
      </svg>
    </div>
  )
}

export default IndianMap

