'use client'
import { motion } from 'framer-motion'

export default function Letter({ rotateX, letter, size = 'h-16 w-16' }) {
  return (
    <div className={`relative ${size}`}>
      <motion.div
        className="absolute inset-0 flex items-center justify-center border-2 border-gray-800 bg-white text-sm sm:text-base"
        initial={{ rotateX: 0 }}
        animate={{ rotateX }}
        transition={{ duration: 0.6, type: "spring" }}
        style={{
          transformStyle: 'preserve-3d',
          backfaceVisibility: 'hidden',
        }}
      >
        ?
      </motion.div>
      <motion.div
        className="absolute inset-0 flex items-center justify-center border-2 border-green-600 bg-green-600 text-white text-sm sm:text-base"
        initial={{ rotateX: 180 }}
        animate={{ rotateX: 180 - rotateX }}
        transition={{ duration: 0.6, type: "spring" }}
        style={{
          transformStyle: 'preserve-3d',
          backfaceVisibility: 'hidden',
        }}
      >
        {letter}
      </motion.div>
    </div>
  )
}
