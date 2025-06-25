'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import ProjectCardFront from './ProjectCardFront'
import ProjectCardBack from './ProjectCardBack'

interface Props {
  title: string
  duration: string
  summary: string
  tags: string[]
  github: string
  notion: string
  thumbnail: string
  description: string
  readmeUrl: string
}

export default function ProjectCardFlip(props: Props) {
  const [flipped, setFlipped] = useState(false)

  return (
    <div
      className="relative w-full h-[400px] min-w-[500px] [perspective:1200px]"
      onClick={() => setFlipped(!flipped)}
    >
      <motion.div
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
        className="w-1600px h-full [transform-style:preserve-3d]"
      >
        <div className="absolute inset-0 backface-hidden w-full h-full">
          <ProjectCardFront {...props} />
        </div>
        <div className="absolute inset-0 rotate-y-180 backface-hidden w-full h-full">
          <ProjectCardBack {...props} />
        </div>
      </motion.div>
    </div>
  )
}