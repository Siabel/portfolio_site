// components/Common/SectionWrapper.tsx
'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface SectionWrapperProps {
  children: ReactNode
  id?: string
  className?: string
}

export default function SectionWrapper({ children, id }: SectionWrapperProps) {
  return (
    <>
      <motion.section
        id={id}
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="min-h-screen py-16 px-4 flex flex-col justify-center items-center"
      >
        {children}
      </motion.section>
    </>
  )
}