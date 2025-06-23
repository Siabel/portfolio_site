'use client'

import * as Tooltip from '@radix-ui/react-tooltip'

interface SkillItemProps {
  name: string
  color: string
  description?: string
}

export default function SkillItem({ name, color, description }: SkillItemProps) {
  return (
    <Tooltip.Provider delayDuration={150}>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>
         <li
          className={`px-4 py-2 rounded-full text-sm transition duration-200 transform hover:scale-105 
            border-2 border-transparent hover:border-white`}
          style={{
            backgroundColor: `${color}50`,
            color: '#FFFFFF',
          }}
          onMouseEnter={(e) => {
            const el = e.currentTarget as HTMLElement
            el.style.backgroundColor = `${color}E6`
            el.style.boxShadow = `0 0 12px ${color}AA`
          }}
          onMouseLeave={(e) => {
            const el = e.currentTarget as HTMLElement
            el.style.backgroundColor = `${color}80`
            el.style.boxShadow = `0 0 0 transparent`
          }}
        >
          {name}
        </li>

        </Tooltip.Trigger>

        {description && (
          <Tooltip.Portal>
            <Tooltip.Content
              side="top"
              sideOffset={8}
              className="whitespace-pre-line px-3 py-2 text-sm rounded-md shadow-xl backdrop-blur-md border border-white/30 bg-white/10 text-white z-50"
            >
              {description}
              <Tooltip.Arrow className="fill-white/30" />
            </Tooltip.Content>
          </Tooltip.Portal>
        )}
      </Tooltip.Root>
    </Tooltip.Provider>
  )
}