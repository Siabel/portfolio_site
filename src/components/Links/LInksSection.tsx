'use client'

import { motion } from 'framer-motion'
import SectionWrapper from '@/components/Common/SectionWrapper'
import LinkCard from './LinkCard'

export default function LinksSection() {
  return (
    <SectionWrapper id="links">
      <motion.h2
        className="text-4xl font-bold mb-12 text-center text-[var(--color-primary)]"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        더 알아보기
      </motion.h2>

      <div className="grid grid-cols-2 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <LinkCard
          title="Github"
          description="프로젝트와 코드 저장소를 확인하세요."
          iconSrc="/icons/Github.png"
          href="https://github.com/Siabel"
        />
        <LinkCard
          title="Blog"
          description="지식을 공유하는 블로그입니다."
          iconSrc="/icons/Blog.png"
          href="https://bels-log.tistory.com/"
        />
      </div>
    </SectionWrapper>
  )
}