'use client'
import Title from './Title'

export default function CardWrapper({ children }) {
  return (
    <div className="relative flex flex-col gap-4 p-4 w-[100vw] max-w-[600px] h-[100vh] bg-[#161823] shadow-[0_-16px_24px_0_rgba(255,255,255,0.25)_inset] overflow-hidden"
      style={{
        backgroundImage: `
          radial-gradient(at 88% 40%, hsla(240, 15%, 9%, 1) 0px, transparent 85%),
          radial-gradient(at 49% 30%, hsla(240, 15%, 9%, 1) 0px, transparent 85%),
          radial-gradient(at 14% 26%, hsla(240, 15%, 9%, 1) 0px, transparent 85%),
          radial-gradient(at 0% 64%, hsl(189, 99%, 26%) 0px, transparent 85%),
          radial-gradient(at 41% 94%, hsl(189, 97%, 36%) 0px, transparent 85%),
          radial-gradient(at 100% 99%, hsl(188, 94%, 13%) 0px, transparent 85%)
        `
      }}>
      {/* Border animation */}
      <div className="absolute -z-10 inset-0 overflow-hidden rounded-2xl">
        <div className="absolute inset-[-1px] bg-gradient-to-b from-white/50 to-white/5 rounded-2xl">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-40 bg-gradient-to-b from-transparent via-[#00D1FF] to-transparent animate-[spin_8s_linear_infinite]" />
        </div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <i key={i}
             className={`absolute w-1 h-1 bg-white rounded-full animate-floating opacity-${Math.random() > 0.5 ? '100' : '70'}`}
             style={{
               left: `${Math.random() * 100}%`,
               bottom: '-10px',
               animationDuration: `${2 + Math.random()}s`,
               animationDelay: `${Math.random()}s`
             }}
          />
        ))}
      </div>

      <Title />

      <hr className="w-full h-[0.5px] bg-[#2a2c3d] border-0" />

      {/* Content container */}
      <div className="relative z-10 flex flex-col gap-4 flex-1">
        {children}
      </div>
    </div>
  )
}
