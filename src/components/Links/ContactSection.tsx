'use client'

import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import SectionWrapper from '@/components/Common/SectionWrapper'

export default function ContactSection() {
  const formRef = useRef<HTMLFormElement>(null)
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    if (!formRef.current) return

    emailjs
      .sendForm(
        'service_h2zi80e', // ← 본인의 service ID
        'template_sewjztd', // ← 본인의 template ID
        formRef.current,
        'EQN7MMpR4TamZ_KiJ' // ← 본인의 public key
      )
      .then(
        () => {
          setSent(true)
          setLoading(false)
        },
        (error) => {
          console.error('이메일 전송 실패:', error)
          setLoading(false)
        }
      )
  }

  return (
    <SectionWrapper id="contact">
      <h2 className="text-3xl font-bold mb-6 text-[var(--color-primary)]">📮 Contact</h2>

      <form
        ref={formRef}
        onSubmit={sendEmail}
        className="flex flex-col gap-4 w-full max-w-md"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="p-3 bg-[#1e1e1e] border border-gray-700 rounded"
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="p-3 bg-[#1e1e1e] border border-gray-700 rounded"
        />

        <input
          type="text"
          name="title"
          placeholder="Title"
          required
          className="p-3 bg-[#1e1e1e] border border-gray-700 rounded"
        />

        <textarea
          name="message"
          rows={6}
          placeholder="Your Message"
          required
          className="p-3 bg-[#1e1e1e] border border-gray-700 rounded"
        />

        <button
          type="submit"
          disabled={loading}
          className="bg-[var(--color-primary)] text-black font-semibold py-3 px-6 rounded hover:opacity-90 transition"
        >
          {loading ? 'Sending...' : 'Send'}
        </button>

        {sent && (
          <p className="text-green-400 font-medium mt-2">Message sent successfully!</p>
        )}
      </form>
    </SectionWrapper>
  )
}