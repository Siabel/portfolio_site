'use client'

import React from 'react'

interface Props {
  title: string
  detail: string
  tags: string[]
  github?: string
  notion?: string
}

export default function ProjectCardBack({
  title,
  detail,
  tags,
  github,
  notion,
}: Props) {
  return (
    <div className="w-full h-full rounded-xl bg-white/10 backdrop-blur-md p-5 flex flex-col justify-between shadow-md text-white">
      {/* 제목 */}
      <span className="inline-block w-fit bg-[var(--color-primary)] text-black text-base px-4 py-1 rounded-full font-bold mb-2">
        {title}
      </span>
      
      {/* 주요 기능 설명 */}
      <div className="flex-1 overflow-y-auto">
        <h4 className="text-lg font-semibold mb-4 text-white">✨ 구현한 주요 기능</h4>
        <ul className="list-disc list-inside space-y-3 text-[15px] text-gray-200 leading-relaxed whitespace-pre-line">
          {detail.split('\n').map((line, idx) => (
            <li key={idx}>{line}</li>
          ))}
        </ul>
      </div>

      <div className="mt-8">
        {/* 태그 */}
        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2 py-1 bg-yellow-100 text-black rounded shadow-sm"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* 버튼 */}
        <div className="flex gap-3">
          {github && (
            <a
              href={github}
              target="_blank"
              className="px-3 py-2 text-sm border border-[var(--color-primary)] rounded hover:bg-[var(--color-primary)] hover:text-black transition"
            >
              GitHub
            </a>
          )}
          {notion && (
            <a
              href={notion}
              target="_blank"
              className="px-3 py-2 text-sm border border-[var(--color-primary)] rounded hover:bg-[var(--color-primary)] hover:text-black transition"
            >
              Notion
            </a>
          )}
        </div>
      </div>
    </div>
  )
}