'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import SectionWrapper from '@/components/Common/SectionWrapper'
import ProjectCardBack from './ProjectCardBack'
import { projects } from '@/lib/projectData'
import ProjectCardFlip from './ProjectCardFlip'

const filterTags = ['React', 'Vue', 'Unity', 'Django']

export default function ProjectsSection() {
  const [selectedTag, setSelectedTag] = useState<string | null>(null)

  const filteredProjects = selectedTag
    ? projects.filter((project) => project.tags.includes(selectedTag))
    : projects

  const buttonClass = (active: boolean) =>
    `px-4 py-2 rounded-full border transition text-sm ${
      active
        ? 'bg-[var(--color-primary)] text-black'
        : 'border-[var(--color-primary)] text-[var(--color-text)] hover:bg-[var(--color-primary)] hover:text-black'
    }`

  return (
    <SectionWrapper id="projects">
      <motion.h2
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl font-bold mb-12 text-center text-[var(--color-primary)]"
      >
        🚀 Projects
      </motion.h2>

      <div className="text-center mb-10 flex flex-wrap gap-3 justify-center">
        <button
          onClick={() => setSelectedTag(null)}
          className={buttonClass(selectedTag === null)}
        >
          전체
        </button>
        {filterTags.map((tag) => (
          <button
            key={tag}
            onClick={() => setSelectedTag(tag)}
            className={buttonClass(selectedTag === tag)}
          >
            {tag}
          </button>
        ))}
      </div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.1,
            },
          },
        }}
      >
        {filteredProjects.map((project) => (
          <motion.div
            key={project.title}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.4 }}
          >
            <ProjectCardBack {...project} />
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  )
}