import { motion } from 'framer-motion'

interface Props {
  title: string
  date: string
  direction: 'left' | 'right'
}

export default function CareerItem({ title, date, direction }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, x: direction === 'left' ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: false, amount: 0.1 }}
      className={`relative w-full md:w-1/2 p-4 ${direction === 'left' ? 'pr-8 text-right' : 'pl-8 text-left'}`}
    >
      <div className="bg-white/5 border-l-4 border-primary p-4 rounded-lg shadow">
        <h3 className="text-lg font-semibold text-[var(--color-primary)]">{title}</h3>
        <p className="text-sm text-gray-400">{date}</p>
      </div>
    </motion.div>
  )
}