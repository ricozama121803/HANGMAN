'use client'
import { useHangmanGame } from '@/hooks/useHangmanGame'
import WordDisplay from '@/components/WordDisplay'
import GameControls from '@/components/GameControls'
import Keyboard from '@/components/Keyboard'
import Celebration from '@/components/Celebration'
import Judge from '@/components/Judge'
import SpinWheel from '@/components/SpinWheel'
import HintModal from '@/components/HintModal'
import Marquee from '@/components/Marquee'
import CardWrapper from '@/components/CardWrapper'

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
    <div className="fixed inset-0 flex items-center justify-center bg-slate-900">
      <div className="relative flex items-center justify-center">
        <CardWrapper>
          {remainingGuesses <= 0 && <Marquee />}
  
          <div className="relative flex flex-col items-center gap-4">
            <WordDisplay word={word} rotations={rotations} />
  
            {remainingGuesses > 0 && (
              <div className="text-sm text-center text-gray-300">
                Remaining Guesses: {remainingGuesses}
              </div>
            )}
          </div>
  
          <div className="mt-auto flex flex-col gap-4">
            <div className="w-full">
              <Keyboard 
                onGuess={handleGuess} 
                guessedLetters={guessedLetters}
                disabled={remainingGuesses <= 0} 
              />
            </div>
  
            <div className="flex justify-center gap-4">
              <GameControls 
                onNewWord={handleNewWord}
                onShowHint={() => setShowHint(true)}
              />
            </div>
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
        </CardWrapper>
      </div>
    </div>
  )
  

  
  
  
}
