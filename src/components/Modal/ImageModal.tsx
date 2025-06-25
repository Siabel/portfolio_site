'use client'

import { title } from 'process'
import { useState } from 'react'

interface ImageModalProps {
  images: string[]
  title: string
}

export default function ImageModal({ images }: ImageModalProps) {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((current - 1 + images.length) % images.length)
  const next = () => setCurrent((current + 1) % images.length)

  return (
    <div className="relative w-full max-w-lg mx-auto">
      <img
        src={`/project/${title}/${images[current]}`}
        alt={`slide-${current}`}
        className="rounded-md max-h-[400px] w-full object-contain"
      />
      <button
        onClick={prev}
        className="absolute left-0 top-`1/2 -translate-y-1/2 px-3 py-1 text-lg text-white hover:text-[var(--color-primary)]"
      >
        ◀
      </button>
      <button
        onClick={next}
        className="absolute right-0 top-1/2 -translate-y-1/2 px-3 py-1 text-lg text-white hover:text-[var(--color-primary)]"
      >
        ▶
      </button>
    </div>
  )
}