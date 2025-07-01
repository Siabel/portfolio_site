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
          className="fixed top-1/2 left-1/2 w-[95vw] max-w-5xl max-h-[90vh] overflow-auto -translate-x-1/2 -translate-y-1/2 z-50 bg-[#121212] p-6 rounded-xl shadow-xl text-white"
        >
          <Dialog.Title className="sr-only">프로젝트 상세 보기</Dialog.Title>
          {children}
          <Dialog.Close className="mt-6 text-sm text-right text-gray-400 underline hover:cursor-pointer">
            닫기
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}