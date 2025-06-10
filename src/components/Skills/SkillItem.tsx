'use client'

interface SkillItemProps {
  name: string
  color: string
}

export default function SkillItem({ name, color }: SkillItemProps) {
  return (
    <li
      className="px-4 py-2 rounded-full text-sm border transition duration-200"
      style={{
        backgroundColor: `${color}50`,
        borderColor: color,
        color: '#FFFFFF',
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.backgroundColor = `${color}E6` // 약 90%
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.backgroundColor = `${color}80`
      }}
    >
      {name}
    </li>
  )
}