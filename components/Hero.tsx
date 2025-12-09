'use client'

import { useEffect, useState } from 'react'

export default function Hero() {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight
      const scrollY = window.scrollY
      const progress = Math.min((scrollY / windowHeight) * 100, 100)
      setScrollProgress(progress)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background ZENBIT Text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="text-[20vw] font-black text-gray-800 select-none tracking-tighter">
          AONBIT
        </div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute -top-40 right-0 w-[800px] h-[1200px] opacity-15"
          style={{
            background:
              'linear-gradient(145deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.03) 40%, transparent 100%)',
            clipPath: 'polygon(30% 0%, 100% 0%, 70% 100%, 0% 100%)',
            filter: 'blur(60px)',
          }}
        ></div>
        <div
          className="absolute top-1/4 -left-40 w-[600px] h-[800px] opacity-12"
          style={{
            background:
              'linear-gradient(45deg, rgba(255, 255, 255, 0.06) 0%, rgba(255, 255, 255, 0.02) 60%, transparent 100%)',
            clipPath: 'polygon(0% 0%, 70% 0%, 100% 100%, 30% 100%)',
            filter: 'blur(50px)',
          }}
        ></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-6xl md:text-8xl font-black leading-none mb-4">
            <span className="text-white">True Value.</span>
          </h1>
          <h2 className="text-5xl md:text-7xl font-black leading-none mb-8">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-gray-100">
              Real Impact.
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 font-light">
            企業が本当に求める価値を実現できる社会を目指して
          </p>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 right-8 md:right-16 z-20">
        <div className="flex flex-col items-center">
          <div className="writing-mode-vertical-lr text-orientation-mixed">
            <span
              className="text-sm text-gray-400 tracking-widest font-medium"
              style={{ writingMode: 'vertical-lr', textOrientation: 'mixed' }}
            >
              SCROLL
            </span>
          </div>
          <div className="relative mt-6 w-px h-[120px] md:h-[200px] bg-gray-700 overflow-hidden">
            <div
              className="absolute left-0 w-full h-16 bg-gradient-to-b from-transparent via-gray-300 to-transparent"
              style={{ transform: `translateY(${scrollProgress * 1.5}px)` }}
            ></div>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-2">
              <svg className="w-3 h-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

