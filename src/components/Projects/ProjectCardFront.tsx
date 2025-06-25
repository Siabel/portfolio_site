'use client'

import Modal from '@/components/Modal/Modal'
import ReadmeModal from '@/components/Modal/ReadmeModal'
import ImageModal from '@/components/Modal/ImageModal'

interface Props {
  title: string
  duration: string
  summary: string
  description: string
  tags: string[]
  github?: string
  notion?: string
  readmeUrl?: string
  thumbnail: string
  images?: string[]
}

export default function ProjectCardFront({
  title,
  duration,
  summary,
  description,
  tags,
  readmeUrl,
  images = [],
}: Props) {
  return (
    <div className="w-full h-full rounded-xl bg-white/10 backdrop-blur-md p-5 flex flex-col justify-between shadow-md text-white">
      {/* 상단: 프로젝트 제목 */}
      <div>
        <span className="inline-block bg-[var(--color-primary)] text-black text-sm px-4 py-1 rounded-full font-semibold mb-2">
          {title}
        </span>

        <p className="text-sm text-gray-300">{duration}</p>
        <hr className="my-2 border-white/20" />

        {/* 요약 설명 */}
        <p className="text-base font-bold text-white leading-relaxed whitespace-pre-line mb-4">
          {summary}
        </p>

        {/* 주요 역할 설명 */}
        <ul className="text-base text-gray-200 list-disc space-y-3 list-inside mb-4 whitespace-pre-line">
          {description.split('\n').map((line, idx) => (
            <li key={idx}>{line}</li>
          ))}
        </ul>

        {/* 태그 */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2 py-1 bg-yellow-100 text-black rounded shadow-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* 버튼 영역 */}
        <div className="flex gap-3 mt-4">
          {readmeUrl && (
            <Modal triggerText="📄 README" preventFlip>
              <ReadmeModal url={readmeUrl} />
            </Modal>
          )}
            <Modal triggerText="🖼️ 이미지" preventFlip>
              <ImageModal images={images} title={title}/>
            </Modal>
        </div>

    </div>
  )
}