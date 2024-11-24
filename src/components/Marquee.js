export default function Marquee() {
  return (
    <div className="relative w-full bg-gradient-to-r from-[#161823] via-[#b71c1c] to-[#161823] text-white py-3 rounded-xl shadow-[0_-16px_24px_0_rgba(255,255,255,0.25)_inset]">
      <div className="flex whitespace-nowrap overflow-hidden">
        <div className="animate-marquee inline-block text-lg font-medium">
          No more guesses, click &quot;New Word&quot; to play again! &nbsp;
        </div>
        <div className="animate-marquee inline-block text-lg font-medium">
          No more guesses, click &quot;New Word&quot; to play again! &nbsp;
        </div>
      </div>
    </div>
  )
}
