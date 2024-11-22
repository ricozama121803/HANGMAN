export default function Marquee() {
    return (
      <div className="fixed top-0 left-0 right-0 bg-red-500 text-white py-3 z-50">
        <div className="flex whitespace-nowrap overflow-hidden">
          <div className="animate-marquee inline-block">
            No more guesses, click "New Word" to play again! &nbsp;
          </div>
          <div className="animate-marquee inline-block">
            No more guesses, click "New Word" to play again! &nbsp;
          </div>
        </div>
      </div>
    )
  }
  