'use client'

import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import SectionWrapper from '@/components/Common/SectionWrapper'
import { motion } from 'framer-motion'

export default function ContactSection() {
  const formRef = useRef<HTMLFormElement>(null)
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    if (!formRef.current) return

    emailjs.sendForm(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
      formRef.current,
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
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
      <motion.h2
        className="text-4xl font-bold mb-10 text-center text-[var(--color-primary)]"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        📮 Contact
      </motion.h2>

      <form
        ref={formRef}
        onSubmit={sendEmail}
        className="flex flex-col gap-4 w-full max-w-md mx-auto"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="p-3 bg-white/5 text-white placeholder-white/40 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="p-3 bg-white/5 text-white placeholder-white/40 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
        />

        <input
          type="text"
          name="title"
          placeholder="Title"
          required
          className="p-3 bg-white/5 text-white placeholder-white/40 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
        />

        <textarea
          name="message"
          rows={6}
          placeholder="Your Message"
          required
          className="p-3 bg-white/5 text-white placeholder-white/40 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
        />

        <button
          type="submit"
          disabled={loading}
          className={`bg-[var(--color-primary)] text-black font-semibold py-3 px-6 rounded transition ${
            loading ? 'opacity-60 cursor-not-allowed' : 'hover:opacity-90'
          }`}
        >
          {loading ? 'Sending...' : 'Send'}
        </button>

        {sent && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-green-400 font-medium mt-2 text-center"
          >
            Message sent successfully!
          </motion.p>
        )}
      </form>
    </SectionWrapper>
  )
}
