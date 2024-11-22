'use client'
import { motion } from 'framer-motion'
import { getHint } from '@/data/wordData'

export default function HintModal({ word, onClose }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50 p-4">
      <motion.div 
        className="bg-white p-8 rounded-xl shadow-2xl max-w-sm"
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: "spring", bounce: 0.5 }}
      >
        <h3 className="text-2xl font-bold mb-4 text-purple-600">Your Hint:</h3>
        <p className="text-gray-700 text-lg">{getHint(word)}</p>
        <button
          onClick={onClose}
          className="mt-6 px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors"
        >
          Got it!
        </button>
      </motion.div>
    </div>
  )
}
