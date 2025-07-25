'use client'

import Modal from '@/components/Modal/Modal'
import SummaryModal from '@/components/Modal/SummaryModal'
import ImageModal from '@/components/Modal/ImageModal'
import Image from 'next/image'

interface Props {
  title: string
  duration: string
  summary: string
  thumbnail: string
  summaryUrl?: string
  images?: string[]
  imgDescriptions: string[]
}

export default function ProjectCardFront({
  title,
  duration,
  summary,
  thumbnail,
  summaryUrl,
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

        <Image
          src={`/project/${title}/${images?.[0] || thumbnail}`}
          alt={`${title} 대표 이미지`}
          width={800}
          height={220}
          unoptimized
          className="rounded-md w-full h-55 object-cover mb-2"
        />
      </div>

      <div className="flex gap-2 justify-start mt-auto">
        {summaryUrl && (
          <Modal triggerText="📄 SUMMARY" preventFlip>
            <SummaryModal url={summaryUrl} />
          </Modal>
        )}
        {images?.length > 0 && (
          <Modal triggerText="🖼️ IMAGE" preventFlip>
            <ImageModal images={images} title={title} descriptions={imgDescriptions}/>
          </Modal>
        )}
      </div>
    </div>
  )
}