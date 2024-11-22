'use client'
import { motion } from 'framer-motion'

export default function Judge({ isComplete, remainingGuesses }) {
  const getExpression = () => {
    if (isComplete) return "🎉"
    if (remainingGuesses > 4) return "😊"
    if (remainingGuesses > 2) return "😟"
    return "😰"
  }

  return (
    <motion.div 
      className="fixed bottom-8 right-8 text-6xl"
      animate={{
        rotate: isComplete ? [0, 14, -14, 0] : 0,
        scale: isComplete ? [1, 1.2, 1] : 1
      }}
      transition={{
        duration: 0.5,
        repeat: isComplete ? Infinity : 0,
        repeatType: "reverse"
      }}
    >
      {getExpression()}
    </motion.div>
  )
}
