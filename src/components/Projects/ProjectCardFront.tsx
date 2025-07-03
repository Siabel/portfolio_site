'use client'

import Modal from '@/components/Modal/Modal'
import ReadmeModal from '@/components/Modal/ReadmeModal'
import ImageModal from '@/components/Modal/ImageModal'

interface Props {
  title: string
  duration: string
  summary: string
  thumbnail: string
  readmeUrl?: string
  images?: string[]
  imgDescriptions: string[]
}

export default function ProjectCardFront({
  title,
  duration,
  summary,
  thumbnail,
  readmeUrl,
  images = [],
  imgDescriptions
}: Props) {
  return (
    <div className="w-full h-full rounded-xl bg-white/10 backdrop-blur-md p-4 flex flex-col justify-between shadow-md text-white">
      <div>
        {/* 제목 */}
        <h3 className="text-xl font-bold text-[var(--color-primary)] mb-2">{title}</h3>
        
        <p className="text-xs text-gray-300 mb-2">{duration}</p>

        <p className="text-sm text-gray-200 italic mb-3 line-clamp-2">{summary}</p>

        <img
          src={`/project/${title}/${images?.[0] || thumbnail}`}
          alt={`${title} 대표 이미지`}
          className="rounded-md w-full h-55 object-cover mb-2"
        />
      </div>

      <div className="flex gap-2 justify-start mt-auto">
        {readmeUrl && (
          <Modal triggerText="📄 README" preventFlip>
            <ReadmeModal url={readmeUrl} />
          </Modal>
        )}
        {images?.length > 0 && (
          <Modal triggerText="🖼️ 이미지" preventFlip>
            <ImageModal images={images} title={title} descriptions={imgDescriptions}/>
          </Modal>
        )}
      </div>
    </div>
  )
}