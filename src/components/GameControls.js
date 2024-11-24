export default function GameControls({ onNewWord, onShowHint }) {
  return (
    <>
      <button
        onClick={onNewWord}
        className="relative flex items-center justify-center px-6 py-3 overflow-hidden rounded-xl bg-gradient-radial from-purple-500/80 to-violet-600 group"
      >
        <span className="absolute top-0 right-0 w-4 h-4 transition-all duration-500 bg-gradient-radial from-purple-400 to-transparent rounded-tr-xl group-hover:-mt-4 group-hover:-mr-4 group-hover:shadow-black/20" />
        
        <span className="relative flex items-center gap-2 text-white font-medium z-10">
          <svg className="w-5 h-5 transition-all duration-300 group-hover:fill-white" 
               fill="none" 
               stroke="currentColor" 
               viewBox="0 0 24 24">
            <path strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="2.5" 
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" 
            />
          </svg>
          New Word
        </span>
      </button>

      <button
        onClick={onShowHint}
        className="relative flex items-center justify-center px-6 py-3 overflow-hidden rounded-xl bg-gradient-radial from-cyan-500/80 to-blue-600 group"
      >
        <span className="absolute top-0 right-0 w-4 h-4 transition-all duration-500 bg-gradient-radial from-cyan-400 to-transparent rounded-tr-xl group-hover:-mt-4 group-hover:-mr-4 group-hover:shadow-black/20" />
        
        <span className="relative flex items-center gap-2 text-white font-medium z-10">
          <svg className="w-5 h-5 transition-all duration-300 group-hover:fill-white" 
               fill="none" 
               stroke="currentColor" 
               viewBox="0 0 24 24">
            <path strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="2.5" 
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" 
            />
          </svg>
          Show Hint
        </span>
      </button>
    </>
  )
}
