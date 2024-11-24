'use client'
import { useState, useEffect } from 'react'
import { getRandomWord } from '@/data/wordData'

export function useHangmanGame() {
  const [word, setWord] = useState('')
  const [guessedLetters, setGuessedLetters] = useState([])
  const [remainingGuesses, setRemainingGuesses] = useState(6)
  const [rotations, setRotations] = useState([])
  const [isComplete, setIsComplete] = useState(false)
  const [showSpinWheel, setShowSpinWheel] = useState(true)
  const [showHint, setShowHint] = useState(false)

  const getInitialGuesses = (wordLength) => {
    if (wordLength <= 5) return 4
    if (wordLength <= 8) return 6
    return 8
  }

  useEffect(() => {
    initializeGame()
  }, [])

  const initializeGame = () => {
    const initialWord = getRandomWord()
    setWord(initialWord)
    setRemainingGuesses(getInitialGuesses(initialWord.length))
    setRotations(new Array(initialWord.length).fill(0))
  }

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

  return {
    word,
    guessedLetters,
    remainingGuesses,
    rotations,
    isComplete,
    showSpinWheel,
    showHint,
    handleNewWord,
    handleGuess,
    setShowHint,
    setShowSpinWheel
  }
}
