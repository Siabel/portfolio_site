'use client'

interface Props {
  title: string
  thumbnail: string
}

export default function ProjectCardFront({ title, thumbnail }: Props) {
  return (
    <div className="w-full h-full rounded-xl bg-white/10 backdrop-blur-md p-4 flex flex-col items-center justify-center shadow-md text-white">
      <img
        src={`/project/${thumbnail}`}
        alt={title}
        className="rounded-lg h-32 object-contain mb-4"
      />
      <div className="text-center">
        <h3 className="text-lg font-bold text-[var(--color-primary)]">{title}</h3>
        <p className="text-sm text-gray-400 mt-2">클릭해서 상세 보기</p>
      </div>
    </div>
  )
}