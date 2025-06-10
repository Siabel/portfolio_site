'use client'

import SectionWrapper from '@/components/Common/SectionWrapper'
import SkillCategory from './SkillCategory'
import { skillData } from '../../lib/SkillData'

export default function SkillsSection() {
  return (
    <SectionWrapper id="skills">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-[var(--color-primary)]">
        💻 Skills
      </h2>

      <div className="max-w-4xl mx-auto space-y-10">
        {skillData.map(({ category, items }) => (
          <SkillCategory key={category} category={category} items={items} />
        ))}
      </div>
    </SectionWrapper>
  )
}