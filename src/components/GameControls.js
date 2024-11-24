export default function GameControls({ onNewWord, onShowHint }) {
    return (
      <div className="flex gap-4">
        <button
          onClick={onNewWord}
          className="mt-6 sm:mt-8 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 active:bg-blue-700 transition-colors text-sm sm:text-base"
        >
          New Word
        </button>
        <button
          onClick={onShowHint}
          className="mt-6 sm:mt-8 px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 active:bg-purple-700 transition-colors text-sm sm:text-base"
        >
          Show Hint
        </button>
      </div>
    )
  }
  