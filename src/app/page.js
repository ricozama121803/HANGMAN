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
import { useHangmanGame } from '@/hooks/useHangmanGame'
import WordDisplay from '@/components/WordDisplay'
import GameControls from '@/components/GameControls'

export default function HangmanGame() {
  const {
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
  } = useHangmanGame()

  if (!word) return null

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-4 sm:p-8 font-mono">
      <h1 className="text-2xl sm:text-4xl font-bold mb-4 sm:mb-8">Hangman Game</h1>
      
      <WordDisplay word={word} rotations={rotations} />

      {remainingGuesses <= 0 ? (
        <Marquee />
      ) : (
        <div className="mb-4 text-sm sm:text-base">
          Remaining Guesses: {remainingGuesses}
        </div>
      )}
      
      <div className="w-full max-w-md px-2 sm:px-0">
        <Keyboard 
          onGuess={handleGuess} 
          guessedLetters={guessedLetters}
          disabled={remainingGuesses <= 0} 
        />
      </div>

      <GameControls 
        onNewWord={handleNewWord}
        onShowHint={() => setShowHint(true)}
      />

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
