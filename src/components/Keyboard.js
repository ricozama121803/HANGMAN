'use client'

export default function Keyboard({ onGuess, guessedLetters }) {
  return (
    <div className="grid grid-cols-7 gap-2">
      {Array.from('ABCDEFGHIJKLMNOPQRSTUVWXYZ').map((letter) => (
        <button
          key={letter}
          onClick={() => onGuess(letter)}
          disabled={guessedLetters.includes(letter)}
          className="p-2 border rounded hover:bg-gray-100 disabled:opacity-50"
        >
          {letter}
        </button>
      ))}
    </div>
  )
}
