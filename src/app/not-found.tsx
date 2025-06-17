'use client'

import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center text-white px-4">
      <h1 className="text-5xl font-bold mb-4">404</h1>
      <p className="text-xl mb-6">페이지를 찾을 수 없습니다.</p>
      <Link
        href="/"
        className="px-4 py-2 border border-white rounded hover:bg-white hover:text-black transition"
      >
        홈으로 돌아가기
      </Link>
    </div>
  )
}