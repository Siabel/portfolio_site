'use client'

import { useState } from 'react'

interface ImageModalProps {
  images: string[]
  title: string
}

export default function ImageModal({ images, title }: ImageModalProps) {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((current - 1 + images.length) % images.length)
  const next = () => setCurrent((current + 1) % images.length)

  return (
    <div className="w-full max-w-3xl mx-auto h-[60vh] flex flex-col justify-between">
      {/* 제목 */}
      <h2 className="text-xl font-semibold text-white text-center mb-4">{title} 이미지</h2>

      {/* 이미지 */}
      <div className="flex-1 flex justify-center items-center relative">
        <img
          src={`/project/${title}/${images[current]}`}
          alt={`slide-${current}`}
          className="rounded-md max-h-full max-w-full object-contain"
        />
      </div>

      {/* 설명 */}
      <p className="text-sm text-gray-400 text-center my-2">
        {current + 1} / {images.length}
      </p>

      {/* 화살표 */}
      <div className="flex justify-center items-center gap-10 mb-2">
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