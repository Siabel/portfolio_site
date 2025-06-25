'use client'

interface Props {
  title: string
  duration: string
  summary: string
  tags: string[]
  github: string
  notion: string
}

export default function ProjectCardBack({ title, duration, summary, tags, github, notion }: Props) {
  return (
    <div className="w-full h-full rounded-xl bg-white/10 backdrop-blur-md p-4 flex flex-col justify-between shadow-md text-white">
      <div>
        <h3 className="text-lg font-semibold text-[var(--color-primary)]">{title}</h3>
        <p className="text-sm text-gray-400">{duration}</p>
        <p className="text-sm mt-2 leading-relaxed">{summary}</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2 py-1 bg-[var(--color-secondary)] text-black rounded"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="flex gap-3 mt-4">
        <a
          href={github}
          onClick={(e) => e.stopPropagation()}
          target="_blank"
          className="px-3 py-2 text-sm border border-[var(--color-primary)] rounded hover:bg-[var(--color-primary)] hover:text-black transition"
        >
          GitHub
        </a>
        <a
          href={notion}
          onClick={(e) => e.stopPropagation()}
          target="_blank"
          className="px-3 py-2 text-sm border border-[var(--color-primary)] rounded hover:bg-[var(--color-primary)] hover:text-black transition"
        >
          Notion
        </a>
      </div>
    </div>
  )
}