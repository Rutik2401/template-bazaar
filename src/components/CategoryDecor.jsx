'use client'

/**
 * Per-category animated decoration shown inside each category card's gradient
 * band. Every category gets a *meaningful* motif:
 *   wedding → rising hearts + bands · engagement → spinning rings + sparkle
 *   birthday → falling confetti + balloon · baras → twinkling stars + bubbles
 *   religious → pulsing aura · funeral → a single steady candle flame + smoke
 *   resume → "writing" lines + shimmer · biodata → floating petals + shimmer
 *   festival → flickering diya flames + sparkles · business → growing bars
 *
 * Elements are translucent white so they read across every accent gradient.
 * The wrapper clips to the band; all motion halts under prefers-reduced-motion
 * (handled globally in globals.css). On hover the whole motif lifts subtly via
 * `group-hover` so each card feels alive when pointed at.
 */

function Layer({ children }) {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-90 transition-opacity duration-300 group-hover:opacity-100">
      {children}
    </div>
  )
}

function Heart({ className = '', style }) {
  return (
    <svg viewBox="0 0 24 24" className={`h-4 w-4 fill-white/75 ${className}`} style={style} aria-hidden>
      <path d="M12 21s-7.4-4.5-9.6-8.9C1 9.1 2.4 6 5.3 6 7.1 6 8.3 7.1 12 10.6 15.7 7.1 16.9 6 18.7 6c2.9 0 4.3 3.1 2.9 6.1C19.4 16.5 12 21 12 21Z" />
    </svg>
  )
}

function Spark({ className = '', style }) {
  return (
    <svg viewBox="0 0 24 24" className={`h-3.5 w-3.5 fill-white/85 ${className}`} style={style} aria-hidden>
      <path d="M12 2l1.7 6.3L20 10l-6.3 1.7L12 18l-1.7-6.3L4 10l6.3-1.7L12 2z" />
    </svg>
  )
}

export default function CategoryDecor({ id }) {
  switch (id) {
    case 'wedding':
      return (
        <Layer>
          <span className="absolute right-7 top-6 h-12 w-12 rounded-full border-2 border-white/45 animate-sway" />
          <span
            className="absolute right-11 top-9 h-12 w-12 rounded-full border-2 border-white/25 animate-sway"
            style={{ animationDelay: '0.4s' }}
          />
          {[0, 0.7, 1.4].map((d, i) => (
            <Heart
              key={i}
              className="absolute bottom-2 animate-rise"
              style={{ left: `${33 + i * 16}%`, animationDelay: `${d}s` }}
            />
          ))}
        </Layer>
      )

    case 'engagement':
      return (
        <Layer>
          <div className="absolute right-9 top-7 h-11 w-16 animate-spin-slow">
            <span className="absolute left-0 h-11 w-11 rounded-full border-[3px] border-white/55" />
            <span className="absolute right-0 h-11 w-11 rounded-full border-[3px] border-white/35" />
          </div>
          <Spark className="absolute right-6 top-5 animate-twinkle" />
          <Spark className="absolute left-[42%] top-10 animate-twinkle" style={{ animationDelay: '0.8s' }} />
        </Layer>
      )

    case 'birthday':
      return (
        <Layer>
          {[
            ['12%', '0s', 'bg-white/80'],
            ['28%', '0.5s', 'bg-white/60'],
            ['46%', '1s', 'bg-white/85'],
            ['64%', '0.3s', 'bg-white/70'],
            ['82%', '0.8s', 'bg-white/60'],
          ].map(([left, delay, bg], i) => (
            <span
              key={i}
              className={`absolute top-0 h-2 w-1.5 rounded-sm ${bg} animate-confetti`}
              style={{ left, animationDelay: delay }}
            />
          ))}
          <span className="absolute right-7 top-6 h-7 w-6 rounded-[50%] bg-white/35 animate-drift" />
        </Layer>
      )

    case 'baras':
      return (
        <Layer>
          <Spark className="absolute left-[22%] top-6 animate-twinkle" />
          <Spark className="absolute right-[26%] top-9 animate-twinkle" style={{ animationDelay: '0.6s' }} />
          <Spark className="absolute right-[14%] top-4 animate-twinkle" style={{ animationDelay: '1.1s' }} />
          <span className="absolute right-10 top-12 h-3 w-3 rounded-full bg-white/45 animate-float" />
          <span
            className="absolute right-16 top-7 h-2 w-2 rounded-full bg-white/35 animate-float"
            style={{ animationDelay: '0.5s' }}
          />
        </Layer>
      )

    case 'religious':
      return (
        <Layer>
          <span className="absolute right-9 top-7 h-12 w-12 rounded-full bg-white/25 animate-pulse-glow" />
          <span
            className="absolute right-7 top-5 h-16 w-16 rounded-full border border-white/30 animate-pulse-glow"
            style={{ animationDelay: '0.6s' }}
          />
          <Spark className="absolute right-12 top-10 animate-twinkle" />
        </Layer>
      )

    case 'funeral':
      return (
        <Layer>
          {/* slow rising smoke */}
          <span
            className="absolute right-[31%] top-4 h-8 w-[3px] rounded-full bg-white/20 animate-rise"
            style={{ animationDuration: '4.5s' }}
          />
          {/* a single, steady flame — dignified, restrained */}
          <span className="absolute right-[31%] top-12 h-4 w-2.5 origin-bottom rounded-full bg-white/75 animate-flicker" />
        </Layer>
      )

    case 'resume':
      return (
        <Layer>
          <div className="absolute right-6 top-7 space-y-2">
            <span className="block h-1.5 w-20 rounded-full bg-white/55" />
            <span className="block h-1.5 w-14 rounded-full bg-white/40" />
            <span className="block h-1.5 w-16 rounded-full bg-white/45" />
            <span className="block h-1.5 w-10 rounded-full bg-white/35" />
          </div>
          <span className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-sweep" />
        </Layer>
      )

    case 'biodata':
      return (
        <Layer>
          {[0, 0.7, 1.4, 2].map((d, i) => (
            <span
              key={i}
              className="absolute bottom-1 h-2.5 w-2 rounded-[50%_50%_50%_0] bg-white/55 animate-rise"
              style={{ left: `${30 + i * 15}%`, animationDelay: `${d}s` }}
            />
          ))}
          <span
            className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-white/18 to-transparent animate-sweep"
            style={{ animationDelay: '0.4s' }}
          />
        </Layer>
      )

    case 'festival':
      return (
        <Layer>
          <span className="absolute right-[26%] top-9 h-4 w-2.5 origin-bottom rounded-full bg-white/80 animate-flicker" />
          <span
            className="absolute right-[42%] top-10 h-3.5 w-2 origin-bottom rounded-full bg-white/65 animate-flicker"
            style={{ animationDelay: '0.5s' }}
          />
          <Spark className="absolute right-[18%] top-5 animate-twinkle" />
          <Spark className="absolute right-[52%] top-5 animate-twinkle" style={{ animationDelay: '0.7s' }} />
        </Layer>
      )

    case 'business':
      return (
        <Layer>
          <div className="absolute bottom-5 right-7 flex h-12 items-end gap-1.5">
            {['40%', '64%', '52%', '82%'].map((h, i) => (
              <span
                key={i}
                className="w-2.5 origin-bottom rounded-sm bg-white/60 animate-bar-grow"
                style={{ height: h, animationDelay: `${i * 0.25}s` }}
              />
            ))}
          </div>
        </Layer>
      )

    case 'anniversary':
      return (
        <Layer>
          <Heart className="absolute right-8 top-7 h-6 w-6 animate-float" />
          <Heart className="absolute right-12 top-10 h-4 w-4 animate-float" style={{ animationDelay: '0.5s' }} />
          {[0, 0.7, 1.4].map((d, i) => (
            <Heart key={i} className="absolute bottom-2 animate-rise" style={{ left: `${34 + i * 16}%`, animationDelay: `${d}s` }} />
          ))}
        </Layer>
      )

    case 'babyshower':
      return (
        <Layer>
          <span className="absolute right-10 top-7 h-4 w-4 rounded-full bg-white/45 animate-float" />
          <span className="absolute right-16 top-11 h-2.5 w-2.5 rounded-full bg-white/35 animate-float" style={{ animationDelay: '0.6s' }} />
          <Spark className="absolute left-[26%] top-6 animate-twinkle" />
          <Spark className="absolute right-[30%] top-9 animate-twinkle" style={{ animationDelay: '0.8s' }} />
        </Layer>
      )

    case 'housewarming':
      return (
        <Layer>
          <span className="absolute right-9 top-7 h-12 w-12 rounded-full bg-white/25 animate-pulse-glow" />
          <span className="absolute right-7 top-5 h-16 w-16 rounded-full border border-white/30 animate-pulse-glow" style={{ animationDelay: '0.6s' }} />
          <Spark className="absolute right-12 top-10 animate-twinkle" />
        </Layer>
      )

    case 'farewell':
      return (
        <Layer>
          {[
            ['16%', '0s', 'bg-white/80'],
            ['34%', '0.5s', 'bg-white/60'],
            ['52%', '1s', 'bg-white/85'],
            ['70%', '0.3s', 'bg-white/70'],
            ['86%', '0.8s', 'bg-white/60'],
          ].map(([left, delay, bg], i) => (
            <span key={i} className={`absolute top-0 h-2 w-1.5 rounded-sm ${bg} animate-confetti`} style={{ left, animationDelay: delay }} />
          ))}
        </Layer>
      )

    case 'congratulations':
      return (
        <Layer>
          {[
            ['18%', '0.2s'],
            ['38%', '0.7s'],
            ['58%', '0s'],
            ['78%', '0.5s'],
          ].map(([left, delay], i) => (
            <span key={i} className="absolute top-0 h-2.5 w-1.5 rounded-sm bg-white/75 animate-confetti" style={{ left, animationDelay: delay }} />
          ))}
          <Spark className="absolute right-9 top-6 animate-twinkle" />
          <Spark className="absolute left-[30%] top-10 animate-twinkle" style={{ animationDelay: '0.7s' }} />
        </Layer>
      )

    case 'political':
      return (
        <Layer>
          <span className="absolute right-9 top-7 h-9 w-12 origin-left rounded-sm bg-white/55 animate-sway" />
          <span className="absolute right-9 top-7 h-9 w-[3px] bg-white/70" />
          <Spark className="absolute left-[30%] top-7 animate-twinkle" />
        </Layer>
      )

    case 'shopopening':
      return (
        <Layer>
          {[
            ['20%', '0s'],
            ['44%', '0.6s'],
            ['68%', '0.3s'],
            ['84%', '0.9s'],
          ].map(([left, delay], i) => (
            <span key={i} className="absolute top-0 h-2.5 w-1.5 rounded-sm bg-white/75 animate-confetti" style={{ left, animationDelay: delay }} />
          ))}
          <span className="absolute right-9 top-8 h-8 w-8 rounded-full border-2 border-white/45 animate-pulse-glow" />
        </Layer>
      )

    case 'certificate':
      return (
        <Layer>
          <span className="absolute right-9 top-7 h-12 w-12 rounded-full border-2 border-white/45 animate-pulse-glow" />
          <span className="absolute right-[18%] top-[58%] h-5 w-2 rotate-[20deg] bg-white/40" />
          <span className="absolute right-[24%] top-[58%] h-5 w-2 -rotate-[20deg] bg-white/40" />
          <span className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-sweep" />
        </Layer>
      )

    case 'jobapplication':
      return (
        <Layer>
          <div className="absolute right-6 top-7 space-y-2">
            <span className="block h-1.5 w-20 rounded-full bg-white/55" />
            <span className="block h-1.5 w-14 rounded-full bg-white/40" />
            <span className="block h-1.5 w-16 rounded-full bg-white/45" />
          </div>
          <span className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-white/18 to-transparent animate-sweep" />
        </Layer>
      )

    case 'eventposter':
      return (
        <Layer>
          <span className="absolute right-9 top-8 h-10 w-10 rounded-full bg-white/25 animate-pulse-glow" />
          <span className="absolute right-7 top-6 h-14 w-14 rounded-full border border-white/30 animate-pulse-glow" style={{ animationDelay: '0.5s' }} />
          <Spark className="absolute left-[28%] top-7 animate-twinkle" />
        </Layer>
      )

    case 'restaurant':
      return (
        <Layer>
          {[0, 0.6, 1.2].map((d, i) => (
            <span key={i} className="absolute h-7 w-[3px] rounded-full bg-white/45 animate-rise" style={{ left: `${40 + i * 8}%`, bottom: '8px', animationDelay: `${d}s`, animationDuration: '3.4s' }} />
          ))}
          <Spark className="absolute right-9 top-7 animate-twinkle" />
        </Layer>
      )

    case 'travel':
      return (
        <Layer>
          <svg viewBox="0 0 24 24" className="absolute right-8 top-7 h-7 w-7 fill-white/75 animate-drift" aria-hidden>
            <path d="M21 16v-2l-8-5V3.5a1.5 1.5 0 0 0-3 0V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L11 19v-5.5L21 16Z" />
          </svg>
          <span className="absolute left-[28%] top-9 h-3 w-7 rounded-full bg-white/35 animate-float" />
          <span className="absolute left-[40%] top-6 h-2.5 w-6 rounded-full bg-white/25 animate-float" style={{ animationDelay: '0.6s' }} />
        </Layer>
      )

    case 'education':
      return (
        <Layer>
          {[0, 0.7, 1.4].map((d, i) => (
            <span key={i} className="absolute bottom-2 h-3 w-3 rotate-45 bg-white/55 animate-rise" style={{ left: `${34 + i * 16}%`, animationDelay: `${d}s` }} />
          ))}
          <Spark className="absolute right-9 top-7 animate-twinkle" />
        </Layer>
      )

    case 'socialmedia':
      return (
        <Layer>
          {[0, 0.6, 1.2].map((d, i) => (
            <Heart key={i} className="absolute bottom-2 animate-rise" style={{ left: `${30 + i * 18}%`, animationDelay: `${d}s` }} />
          ))}
          <Spark className="absolute right-9 top-6 animate-twinkle" />
        </Layer>
      )

    case 'memorial':
      return (
        <Layer>
          <span className="absolute right-[31%] top-4 h-8 w-[3px] rounded-full bg-white/20 animate-rise" style={{ animationDuration: '4.5s' }} />
          <span className="absolute right-[31%] top-12 h-4 w-2.5 origin-bottom rounded-full bg-white/75 animate-flicker" />
        </Layer>
      )

    default:
      return null
  }
}
