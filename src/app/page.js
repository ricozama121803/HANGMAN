'use client'
import { useState, useEffect } from 'react'
import { useTrail } from '@react-spring/web'
import Letter from '@/components/Letter'
import Keyboard from '@/components/Keyboard'
import Celebration from '@/components/Celebration'
import Judge from '@/components/Judge'
import SpinWheel from '@/components/SpinWheel'
import HintModal from '@/components/HintModal'
import { getRandomWord } from '@/data/wordData'
import Marquee from '@/components/Marquee'


const getInitialGuesses = (wordLength) => {
  if (wordLength <= 5) return 4
  if (wordLength <= 8) return 6
  return 8
}

export default function HangmanGame() {
  const [word, setWord] = useState('')
  const [guessedLetters, setGuessedLetters] = useState([])
  const [remainingGuesses, setRemainingGuesses] = useState(6)
  const [rotations, setRotations] = useState([])
  const [isComplete, setIsComplete] = useState(false)
  const [showSpinWheel, setShowSpinWheel] = useState(true)
  const [showHint, setShowHint] = useState(false)
  
  useEffect(() => {
    const initialWord = getRandomWord()
    setWord(initialWord)
    setRemainingGuesses(getInitialGuesses(initialWord.length))
    setRotations(new Array(initialWord.length).fill(0))
  }, [])

  const handleNewWord = () => {
    const newWord = getRandomWord()
    setWord(newWord)
    setGuessedLetters([])
    setRemainingGuesses(getInitialGuesses(newWord.length))
    setRotations(new Array(newWord.length).fill(0))
    setIsComplete(false)
    setShowSpinWheel(true)
  }

  const handleGuess = (letter) => {
    if (guessedLetters.includes(letter)) return
    
    const newGuessedLetters = [...guessedLetters, letter]
    setGuessedLetters(newGuessedLetters)
    
    const newRotations = [...rotations]
    word.split('').forEach((char, index) => {
      if (char === letter) {
        newRotations[index] = 180
      }
    })
    setRotations(newRotations)

    if (newRotations.every(r => r === 180)) {
      setIsComplete(true)
    }

    if (!word.includes(letter)) {
      setRemainingGuesses(prev => prev - 1)
    }
  }

  if (!word) return null

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-4 sm:p-8 font-mono">
      <h1 className="text-2xl sm:text-4xl font-bold mb-4 sm:mb-8">Hangman Game</h1>
      
      <div className="flex flex-row justify-center gap-1 sm:gap-2 mb-4 sm:mb-8">
        {word.split('').map((letter, i) => (
          <Letter
            key={i}
            rotateX={rotations[i]}
            letter={letter}
            size={word.length > 6 ? 'h-8 w-8 sm:h-12 sm:w-12' : 'h-12 w-12 sm:h-16 sm:w-16'}
          />
        ))}
      </div>

      {remainingGuesses <= 0 ? (
        <Marquee />
      ) : (
        <div className="mb-4 text-sm sm:text-base">
          Remaining Guesses: {remainingGuesses}
        </div>
      )}
      
      <div className="w-full max-w-md px-2 sm:px-0">
        <Keyboard onGuess={handleGuess} guessedLetters={guessedLetters} />
      </div>

      <div className="flex gap-4">
        <button 
          onClick={handleNewWord}
          className="mt-6 sm:mt-8 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 active:bg-blue-700 transition-colors text-sm sm:text-base"
        >
          New Word
        </button>

        <button 
          onClick={() => setShowHint(true)}
          className="mt-6 sm:mt-8 px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 active:bg-purple-700 transition-colors text-sm sm:text-base"
        >
          Show Hint
        </button>
      </div>

      {showSpinWheel && (
        <SpinWheel 
          word={word} 
          onHintRevealed={() => setShowSpinWheel(false)} 
        />
      )}

      {showHint && (
        <HintModal 
          word={word}
          onClose={() => setShowHint(false)}
        />
      )}

      {isComplete && <Celebration />}
      <Judge isComplete={isComplete} remainingGuesses={remainingGuesses} />
    </main>
  )

}
