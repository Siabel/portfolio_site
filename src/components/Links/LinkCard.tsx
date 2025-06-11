'use client'

import { motion } from 'framer-motion'
import { IconType } from 'react-icons'

interface LinkCardProps {
  title: string
  description: string
  href: string
  Icon: IconType
}

export default function LinkCard({ title, description, href, Icon }: LinkCardProps) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.05 }}
      transition={{ type: 'spring', stiffness: 300 }}
      className="flex items-center gap-4 bg-white/5 p-6 rounded-xl shadow-md hover:shadow-xl transition w-full max-w-md"
    >
      <Icon className="text-[var(--color-primary)]" size={40} />
      <div>
        <h3 className="text-lg font-semibold text-[var(--color-primary)]">{title}</h3>
        <p className="text-sm text-white">{description}</p>
      </div>
    </motion.a>
  )
}