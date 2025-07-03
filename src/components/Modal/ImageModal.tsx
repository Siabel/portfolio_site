'use client'

import { useState } from 'react'

interface ImageModalProps {
  title: string
  images: string[]
  descriptions?: string[]
}

export default function ImageModal({ title, images, descriptions }: ImageModalProps) {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((current - 1 + images.length) % images.length)
  const next = () => setCurrent((current + 1) % images.length)

  return (
    <div className="relative flex flex-col h-full w-full justify-between items-center">

      {/* 이미지 영역 */}
      <div className="flex-1 flex items-center justify-center w-full">
        <img
          src={`/project/${title}/${images[current]}`}
          alt={`slide-${current}`}
          className="rounded-md max-h-[70vh] object-contain"
        />
      </div>

      {/* 이미지 설명 */}
      {descriptions?.[current] && (
        <p className="text-base text-white font-medium leading-relaxed text-center mt-4 mb-4 px-6">
          {descriptions[current]}
        </p>
      )}

      {/* 화살표 */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-between px-10">
        <button
          onClick={prev}
          className="text-2xl text-white hover:text-[var(--color-primary)]"
        >
          ◀
        </button>
        <button
          onClick={next}
          className="text-2xl text-white hover:text-[var(--color-primary)]"
        >
          ▶
        </button>
      </div>
    </div>
  )
}