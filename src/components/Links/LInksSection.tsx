'use client'

import { motion } from 'framer-motion'
import SectionWrapper from '@/components/Common/SectionWrapper'
import LinkCard from './LinkCard'
import { FaGithub, FaBlog } from 'react-icons/fa'

const linkItems = [
  {
    title: 'GitHub',
    description: '프로젝트와 코드 저장소를 확인하세요.',
    href: 'https://github.com/Siabel',
    Icon: FaGithub,
  },
  {
    title: 'Blog',
    description: '지식을 공유하는 블로그입니다.',
    href: 'https://bels-log.tistory.com/',
    Icon: FaBlog,
  },
]

export default function LinksSection() {
  return (
    <SectionWrapper id="links">
      <motion.h2
        className="text-4xl font-bold mb-12 text-center text-[var(--color-primary)]"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        🔗 Links
      </motion.h2>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
      >
        {linkItems.map((item) => (
          <motion.div
            key={item.title}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.4 }}
          >
            <LinkCard {...item} />
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  )
}