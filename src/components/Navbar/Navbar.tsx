'use client'

import { useEffect, useState } from 'react'

const navItems = [
  { label: 'Intro', id: 'intro' },
  { label: 'Career', id: 'career' },
  { label: 'Skills', id: 'skills' },
  { label: 'Projects', id: 'projects' },
  { label: 'Links', id: 'links' },
  { label: 'Contact', id: 'contact' },
]

export default function Navbar() {
  const [activeId, setActiveId] = useState<string>('intro')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        }
      },
      { threshold: 0.5 }
    )

    navItems.forEach((item) => {
      const el = document.getElementById(item.id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  const handleClick = (id: string) => {
    const section = document.getElementById(id)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header className="fixed top-0 left-0 w-full z-[9999] bg-background/90 backdrop-blur-md border-b border-neutral-800 shadow-md">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="text-xl font-bold text-primary">Siabel Portfolio</div>

        <ul className="flex gap-6 list-none">
          {navItems.map((item) => (
            <li
              key={item.id}
              onClick={() => handleClick(item.id)}
              className={`text-sm font-medium cursor-pointer transition ${
                activeId === item.id
                  ? 'text-primary underline underline-offset-4'
                  : 'text-white hover:text-primary'
              }`}
            >
              {item.label}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}