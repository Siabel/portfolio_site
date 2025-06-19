'use client'

import SectionWrapper from '@/components/Common/SectionWrapper'
import { motion } from 'framer-motion'
import Background from './Background'
import Typewriter from './Typewriter'

export default function Intro() {
  const handleScroll = () => {
    const next = document.getElementById('career')
    if (next) next.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <SectionWrapper id="intro" className="relative">
      <Background />

      <div className="relative z-10 flex flex-col items-center justify-center text-center max-w-3xl mx-auto px-4 gap-y-6">
        <motion.span
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl md:text-3xl font-semibold tracking-wide text-primary"
          style={{color : 'var(--color-primary)'}}
        >
          - 정원종의 포트폴리오 -
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-2xl md:text-4xl font-medium leading-relaxed min-h-[5.5rem] text-text"
        >
          <Typewriter
            lines={[
              '안녕하세요, 사용자 경험을 설계하는',
              '프론트엔드 개발자 정원종입니다.',
            ]}
          />
        </motion.h1>

        <motion.button
          onClick={handleScroll}
          animate={{ y: [0, -10, 0] }}
          transition={{
            repeat: Infinity,
            repeatType: 'loop',
            duration: 1.5,
            ease: 'easeInOut',
          }}
          className="mt-20 text-base md:text-lg font-medium py-2 px-6 rounded-md border border-primary 
                    transition-colors duration-300 ease-out cursor-pointer 
                    text-[var(--color-text)] hover:bg-[var(--color-primary)] hover:text-[var(--color-background)]"
        >
          스크롤을 내려 저에 대해 더 알아보세요 ↓
        </motion.button>


      </div>
    </SectionWrapper>
  )
}