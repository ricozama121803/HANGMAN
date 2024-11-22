'use client'
import { motion } from 'framer-motion'

export default function Celebration() {
  return (
    <motion.div
      className="fixed inset-0 pointer-events-none"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {[...Array(50)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-yellow-500 rounded-full"
          initial={{
            top: '50%',
            left: '50%',
          }}
          animate={{
            top: Math.random() * 100 + '%',
            left: Math.random() * 100 + '%',
            scale: [1, 0],
          }}
          transition={{
            duration: 1,
            repeat: 3,
            delay: Math.random() * 0.2,
          }}
        />
      ))}
    </motion.div>
  )
}
