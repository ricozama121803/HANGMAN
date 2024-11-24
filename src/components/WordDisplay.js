import Letter from "./Letter"

export default function WordDisplay({ word, rotations }) {
    return (
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
    )
  }
  