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
  shortDesc: string
}

export default function ProjectCardFlip(props: Props) {
  const [flipped, setFlipped] = useState(false)

  return (
    <div className="relative w-full h-80 [perspective:1200px]" onClick={() => setFlipped(!flipped)}>
      <motion.div
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.8 }}
        className="relative w-full h-full [transform-style:preserve-3d]"
      >
        <div className="absolute inset-0 backface-hidden">
          <ProjectCardFront {...props} />
        </div>
        <div className="absolute inset-0 rotate-y-180 backface-hidden">
          <ProjectCardBack {...props} />
        </div>
      </motion.div>
    </div>
  )
}