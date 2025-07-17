'use client'

import { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'

interface SummaryModalProps {
  url: string
}

export default function SummaryModal({ url }: SummaryModalProps) {
  const [content, setContent] = useState('')

  useEffect(() => {
    fetch(url)
      .then((res) => res.text())
      .then(setContent)
      .catch(() => setContent('Summary를 불러오지 못했습니다.'))
  }, [url])

  return (
    <div className="prose prose-invert max-w-none text-white text-sm leading-relaxed">
      <ReactMarkdown>
        {content}
      </ReactMarkdown>
    </div>
  )
}