'use client'

export default function Keyboard({ onGuess, guessedLetters, disabled }) {
  return (
    <div className="grid grid-cols-6 gap-4">
      {Array.from('ABCDEFGHIJKLMNOPQRSTUVWXYZ').map((letter) => (
        <button
          key={letter}
          onClick={() => onGuess(letter)}
          disabled={disabled || guessedLetters.includes(letter)}
          className="p-4 border rounded hover:bg-gray-100 disabled:opacity-10 disabled:cursor-not-allowed"
        >
          {letter}
        </button>
      ))}
    </div>
  )
}
