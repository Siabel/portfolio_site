'use client'

import SectionWrapper from '@/components/Common/SectionWrapper'
import CareerItem from './CareerItem'
import { careerData } from '../../lib/careerData'

export default function CareerSection() {
  return (
    <SectionWrapper id="career">
      <h2 className="text-3xl font-bold text-center mb-12 text-[var(--color-primary)]">
        📜 Career & Education
      </h2>

      <div className="relative w-full max-w-4xl mx-auto">
        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-700" />

        <div className="flex flex-col gap-12">
          {careerData.map((item, i) => (
            <div key={i} className="flex flex-col md:flex-row justify-between items-center">
              {i % 2 === 0 ? (
                <>
                  <CareerItem {...item} direction="left" />
                  <div className="hidden md:block w-1/12" />
                </>
              ) : (
                <>
                  <div className="hidden md:block w-1/12" />
                  <CareerItem {...item} direction="right" />
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}