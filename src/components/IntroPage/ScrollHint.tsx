'use client'

export default function ScrollHint() {
  return (
    <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-10">
      <div className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-1 animate-bounce">
        <div className="w-1 h-1 bg-primary rounded-full" />
      </div>
    </div>
  )
}