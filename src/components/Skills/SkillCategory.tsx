'use client'

import SkillItem from './SkillItem'
import { motion } from 'framer-motion'

interface SkillItemData {
  name: string
  color: string
  description?: string
}

interface Props {
  category: string
  items: SkillItemData[]
}

export default function SkillCategory({ category, items }: Props) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 1 }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.15,
          },
        },
      }}
    >
      <h3 className="text-xl font-semibold text-[var(--color-secondary)] mb-4">
        {category}
      </h3>

      <motion.ul className="flex flex-wrap gap-3">
        {items.map((item) => (
          <motion.div
            key={item.name}
            variants={{
              hidden: { opacity: 0, y: 8 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.4 }}
          >
          <SkillItem
            name={item.name}
            color={item.color}
            description={item.description}
          />
          </motion.div>
        ))}
      </motion.ul>
    </motion.div>
  )
}