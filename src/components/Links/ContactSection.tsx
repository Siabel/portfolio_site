'use client'

import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import SectionWrapper from '@/components/Common/SectionWrapper'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

export default function ContactSection() {
  const formRef = useRef<HTMLFormElement>(null)
  const [loading, setLoading] = useState(false)
  const [toastOpen, setToastOpen] = useState(false)
  const [toastMessage, setToastMessage] = useState('')
  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    if (!formRef.current) return

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formRef.current!,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
      )
      .then(() => {
        console.log('PublicKey:', process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY)

        setToastMessage('✉️ 메시지가 성공적으로 전송되었습니다!')
        setToastOpen(true)
        formRef.current?.reset()
        setTimeout(() => setToastOpen(false), 3000)
      })
      .catch((error) => {
        console.error('이메일 전송 실패:', error)
        setToastMessage('❌ 메시지 전송에 실패했습니다. 잠시 후 다시 시도해주세요.')
        setToastOpen(true)
        setTimeout(() => setToastOpen(false), 3000)
      })
      .finally(() => {
        setLoading(false)
      })
  }

  return (
    <SectionWrapper id="contact">+
      <motion.h2
        className="text-4xl font-bold mb-10 text-center text-[var(--color-primary)]"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        📮 Contact
      </motion.h2>

        <div className="flex flex-col md:flex-row gap-8 max-w-6xl mx-auto items-start">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="w-full flex justify-center"
          >
            <Image
              src="/contact.png"
              alt="Contact"
              width={400}
              height={400}
              className="rounded-xl shadow-xl object-contain w-full h-auto"
            />
          </motion.div>

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
        </form>
      </div>

      <AnimatePresence>
        {toastOpen && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.4 }}
            className="fixed bottom-6 right-6 bg-[var(--color-primary)] text-black px-6 py-3 rounded-xl shadow-lg z-[9999] font-medium"
          >
            {toastMessage}
          </motion.div>
        )}
      </AnimatePresence>
    </SectionWrapper>
  )
}