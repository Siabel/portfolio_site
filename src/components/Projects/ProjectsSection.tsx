'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import SectionWrapper from '@/components/Common/SectionWrapper'
import ProjectCardFlip from './ProjectCardFlip'
import { projects, Project } from '@/lib/projectData'

const filterTags = ['React', 'Vue', 'Unity',]
const PAGE_SIZE = 4

export default function ProjectsSection() {
  const [selectedTags, setSelectedTags] = useState<string[]>([])
  const [showMain, setShowMain] = useState<boolean>(false)
  const [currentPage, setCurrentPage] = useState<number>(1)
  
  const toggleTag = (tag: string) => {
    setSelectedTags((prev) => {
      const newTags = prev.includes(tag)
        ? prev.filter((t) => t !== tag)
        : [...prev, tag]

      return [...newTags]
    })
  }

  const byTag =
    selectedTags.length === 0
      ? projects
      : projects.filter((project) =>
          selectedTags.every((tag) => project.tags.includes(tag))
        )

  useEffect(() => {
    setCurrentPage(1)
  }, [selectedTags, showMain])

  const filteredProjects = showMain
    ? byTag.filter((p: Project) => p.importance === 'main')
    : byTag

  const totalPages = Math.max(1, Math.ceil(filteredProjects.length / PAGE_SIZE))
  const start = (currentPage - 1) * PAGE_SIZE
  const paginatedProjects = filteredProjects.slice(start, start + PAGE_SIZE)

  const buttonClass = (active: boolean) =>
    `px-4 py-2 rounded-full border transition text-sm ${
      active
        ? 'bg-[var(--color-primary)] text-black'
        : 'border-[var(--color-primary)] text-[var(--color-text)] hover:bg-[var(--color-primary)] hover:text-black'
    }`

  return (
    <SectionWrapper id="projects">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-4 text-center"
      >
        <h2 className="text-4xl font-bold text-[var(--color-primary)] mb-2">🚀 Projects</h2>
      </motion.div>
        <p className="text-sm text-gray-400 mb-5">
          <span className="text-[var(--color-primary)] font-semibold"> 💡 카드를 클릭하면 더 많은 정보를 확인할 수 있어요!</span>
        </p>


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
   
        <button
          type="button"
          aria-pressed={showMain}
          onClick={() => setShowMain((v) => !v)}
          className={`relative inline-flex h-8 w-16 items-center rounded-full transition
            ${showMain ? 'bg-[var(--color-primary)]' : 'bg-white/20'}`}
          title={showMain ? '주 프로젝트만 보기' : '전체 보기'}
        >
          <span
            className={`inline-block h-6 w-6 transform rounded-full bg-white transition
              ${showMain ? 'translate-x-8' : 'translate-x-2'}`}
          />
          <span className="sr-only">주 프로젝트만 보기 토글</span>
        </button>
        <span className="text-sm text-gray-300">{showMain ? '전체 프로젝트 보기' : '주 프로젝트만 보기'}</span>
      </div>
      
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto"
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
          {paginatedProjects.map((project) => (
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

      <div className="mt-8 flex items-center justify-center gap-2">
        <button
          onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
          disabled={currentPage === 1}
          className="px-3 py-2 text-sm border border-white/30 rounded disabled:opacity-40 hover:bg-white/10"
        >
          ◀ Prev
        </button>

        {/* 페이지 인디케이터 */}
        <div className="flex items-center gap-1">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
            <button
              key={p}
              onClick={() => setCurrentPage(p)}
              className={`h-8 w-8 rounded-full text-sm transition
                ${p === currentPage ? 'bg-[var(--color-primary)] text-black' : 'border border-white/30 hover:bg-white/10'}`}
            >
              {p}
            </button>
          ))}
        </div>

        <button
          onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
          disabled={currentPage === totalPages}
          className="px-3 py-2 text-sm border border-white/30 rounded disabled:opacity-40 hover:bg-white/10"
        >
          Next ▶
        </button>
      </div>
    </SectionWrapper>
  )
}