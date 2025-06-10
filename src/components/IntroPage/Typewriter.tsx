'use client'

import { useEffect, useState } from 'react'

interface Props {
  lines: string[]
  speed?: number
  delayBetween?: number
}

export default function MultiLineTypewriter({
  lines,
  speed = 60,
  delayBetween = 300,
}: Props) {
  const [currentLine, setCurrentLine] = useState(0)
  const [displayLines, setDisplayLines] = useState<string[]>([''])
  const [charIndex, setCharIndex] = useState(0)

  useEffect(() => {
    if (currentLine >= lines.length) return

    const currentText = lines[currentLine]
    if (charIndex < currentText.length) {
      const timeout = setTimeout(() => {
        setDisplayLines((prev) => {
          const updated = [...prev]
          updated[currentLine] = updated[currentLine] + currentText.charAt(charIndex)
          return updated
        })
        setCharIndex((prev) => prev + 1)
      }, speed)
      return () => clearTimeout(timeout)
    } else {
      if (currentLine < lines.length - 1) {
        const delay = setTimeout(() => {
          setCurrentLine((prev) => prev + 1)
          setDisplayLines((prev) => [...prev, ''])
          setCharIndex(0)
        }, delayBetween)
        return () => clearTimeout(delay)
      }
    }
  }, [charIndex, currentLine, lines, speed, delayBetween])

  return (
    <div className="inline-block text-start" aria-live="polite">
      {displayLines.map((line, i) => (
        <div key={i}>{line}</div>
      ))}
    </div>
  )
}