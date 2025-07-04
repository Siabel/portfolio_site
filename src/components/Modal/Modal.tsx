'use client'

import * as Dialog from '@radix-ui/react-dialog'

export default function Modal({
  triggerText,
  children,
  preventFlip = false,
}: {
  triggerText: string
  children: React.ReactNode
  preventFlip?: boolean
}) {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button
          onClick={(e) => preventFlip && e.stopPropagation()}
          className="px-3 py-2 text-sm border border-[var(--color-primary)] rounded hover:bg-[var(--color-primary)] hover:text-black transition hover:cursor-pointer"
        >
          {triggerText}
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50 z-40 backdrop-blur-sm" />
        <Dialog.Content
          onClick={(e) => e.stopPropagation()}
          className="fixed top-1/2 left-1/2 w-[100vw] h-[80vh] max-w-5xl overflow-auto -translate-x-1/2 -translate-y-1/2 z-50 bg-[#121212] p-6 rounded-xl shadow-xl text-white"
        >
          <Dialog.Title className="sr-only">프로젝트 상세 보기</Dialog.Title>
          <Dialog.Description className="sr-only">
            이 모달은 프로젝트의 이미지 슬라이드 또는 README 내용을 보여줍니다.
          </Dialog.Description>
          {children}
          <Dialog.Close className="absolute top-4 right-4 text-white text-xl hover:text-[var(--color-primary)] hover:cursor-pointer">
            ✕
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}