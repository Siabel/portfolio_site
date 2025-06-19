'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import SectionWrapper from '@/components/Common/SectionWrapper'
import ProjectCardFlip from './ProjectCardFlip'
import { projects } from '@/lib/projectData'
import ProjectCardBack from './ProjectCardBack'

const filterTags = ['React', 'Vue', 'Unity', 'Django']

export default function ProjectsSection() {
  const [selectedTags, setSelectedTags] = useState<string[]>([])
  // console.log('selectedTags:', selectedTags)

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) => {
      const newTags = prev.includes(tag)
        ? prev.filter((t) => t !== tag)
        : [...prev, tag]
      // console.log('selectedTags:', newTags)

      return [...newTags]
    })
  }

  const filteredProjects =
    selectedTags.length === 0
      ? projects
      : projects.filter((project) =>
          selectedTags.every((tag) => project.tags.includes(tag))
        )

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
          onClick={() => setSelectedTags([])}
          className={buttonClass(selectedTags.length === 0)}
        >
          전체
        </button>
        {filterTags.map((tag) => (
          <button
            key={tag}
            onClick={() => toggleTag(tag)}
            className={buttonClass(selectedTags.includes(tag))}
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
        <AnimatePresence>
          {filteredProjects.map((project) => (
            <motion.div
              key={project.title}
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.3 }}
            >
              <ProjectCardFlip {...project} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </SectionWrapper>
  )
}