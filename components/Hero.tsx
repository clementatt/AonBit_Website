'use client'

import { useEffect, useState, useRef } from 'react'

interface Slide {
  title1: string
  title2: string
  subtitle: string
}

const slides: Slide[] = [
  {
    title1: '企業が本当に求める価値を',
    title2: '実現できる社会',
    subtitle: 'A society where the value that companies truly seek can be realized',
  },
  {
    title1: 'True Value.',
    title2: 'Real Impact.',
    subtitle: '企業が本当に求める価値を実現できる社会を目指して',
  },
  {
    title1: '想像を超えた価値を、最適なソリューションで実現する',
    title2: '',
    subtitle: '想像を超えた価値を、最適なソリューションで実現する',
  },
]

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [gradient1Transform, setGradient1Transform] = useState({ x: 0, scaleX: 1 })
  const [gradient2Transform, setGradient2Transform] = useState({ x: 0, scaleY: 1 })
  const [pathOffset1, setPathOffset1] = useState(0)
  const [pathOffset2, setPathOffset2] = useState(0)
  const animationFrameRef = useRef<number>()
  const autoPlayRef = useRef<NodeJS.Timeout>()

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight
      const scrollY = window.scrollY
      const progress = Math.min((scrollY / windowHeight) * 100, 100)
      setScrollProgress(progress)
    }

    const animate = () => {
      // 渐变背景形状的连续移动动画
      setGradient1Transform((prev) => ({
        x: prev.x + 0.1,
        scaleX: 1 + Math.sin(Date.now() / 3000) * 0.001,
      }))
      setGradient2Transform((prev) => ({
        x: prev.x + 0.15,
        scaleY: 1 + Math.cos(Date.now() / 2500) * 0.001,
      }))

      // SVG 路径动画
      setPathOffset1((prev) => (prev + 0.01) % 1)
      setPathOffset2((prev) => (prev + 0.008) % 1)

      animationFrameRef.current = requestAnimationFrame(animate)
    }

    window.addEventListener('scroll', handleScroll)
    animationFrameRef.current = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [])

  // 自动播放轮播
  useEffect(() => {
    autoPlayRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000) // 每5秒切换一次

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current)
      }
    }
  }, [])

  // 键盘导航支持
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        setCurrentSlide((prev) => {
          const next = (prev - 1 + slides.length) % slides.length
          if (autoPlayRef.current) {
            clearInterval(autoPlayRef.current)
          }
          autoPlayRef.current = setInterval(() => {
            setCurrentSlide((p) => (p + 1) % slides.length)
          }, 5000)
          return next
        })
      } else if (e.key === 'ArrowRight') {
        setCurrentSlide((prev) => {
          const next = (prev + 1) % slides.length
          if (autoPlayRef.current) {
            clearInterval(autoPlayRef.current)
          }
          autoPlayRef.current = setInterval(() => {
            setCurrentSlide((p) => (p + 1) % slides.length)
          }, 5000)
          return next
        })
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
    // 重置自动播放
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current)
    }
    autoPlayRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => {
      const next = (prev + 1) % slides.length
      // 重置自动播放
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current)
      }
      autoPlayRef.current = setInterval(() => {
        setCurrentSlide((p) => (p + 1) % slides.length)
      }, 5000)
      return next
    })
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => {
      const next = (prev - 1 + slides.length) % slides.length
      // 重置自动播放
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current)
      }
      autoPlayRef.current = setInterval(() => {
        setCurrentSlide((p) => (p + 1) % slides.length)
      }, 5000)
      return next
    })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background AONBIT Text */}
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
            transform: `translateX(${gradient1Transform.x}px) scaleX(${gradient1Transform.scaleX})`,
            transition: 'transform 0.1s ease-out',
          }}
        ></div>
        <div
          className="absolute top-1/4 -left-40 w-[600px] h-[800px] opacity-12"
          style={{
            background:
              'linear-gradient(45deg, rgba(255, 255, 255, 0.06) 0%, rgba(255, 255, 255, 0.02) 60%, transparent 100%)',
            clipPath: 'polygon(0% 0%, 70% 0%, 100% 100%, 30% 100%)',
            filter: 'blur(50px)',
            transform: `translateX(${gradient2Transform.x}px) scaleY(${gradient2Transform.scaleY})`,
            transition: 'transform 0.1s ease-out',
          }}
        ></div>

        {/* SVG 路径动画 */}
        <div className="absolute inset-0">
          <svg className="w-full h-full" viewBox="0 0 1200 800" fill="none">
            <path
              d="M-200,800 L400,0 L600,0 L0,800 Z"
              fill="url(#diagonalGradient1)"
              opacity="0.06"
              style={{
                transform: `translateX(${pathOffset1 * 10}px)`,
                transformOrigin: '50% 50%',
              }}
            />
            <path
              d="M800,0 L1400,800 L1200,800 L600,0 Z"
              fill="url(#diagonalGradient2)"
              opacity="0.044"
              style={{
                transform: `translateX(${pathOffset2 * 15}px)`,
                transformOrigin: '50% 50%',
              }}
            />
            <path
              d="M-100,200 Q300,100 600,300 Q900,500 1300,200"
              stroke="url(#pathGradient1)"
              strokeWidth="2"
              fill="none"
              opacity="0.15"
              pathLength="1"
              strokeDashoffset={pathOffset1}
              strokeDasharray="0.034 1"
            />
            <path
              d="M-200,600 Q200,400 500,650 Q800,900 1200,600"
              stroke="url(#pathGradient2)"
              strokeWidth="1.5"
              fill="none"
              opacity="0.1"
              pathLength="1"
              strokeDashoffset={pathOffset2}
              strokeDasharray="0.875 1"
            />
            <path
              d="M0,0 Q200,200 400,100 Q600,0 800,150 Q1000,300 1200,200"
              stroke="rgba(255,255,255,0.08)"
              strokeWidth="1"
              fill="none"
              opacity="0.01"
              pathLength="1"
              strokeDashoffset={pathOffset1 * 0.5}
              strokeDasharray="0.97 1"
            />
            <defs>
              <linearGradient id="diagonalGradient1" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(255,255,255,0)" />
                <stop offset="30%" stopColor="rgba(255,255,255,0.1)" />
                <stop offset="70%" stopColor="rgba(255,255,255,0.1)" />
                <stop offset="100%" stopColor="rgba(255,255,255,0)" />
              </linearGradient>
              <linearGradient id="diagonalGradient2" x1="100%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="rgba(255,255,255,0)" />
                <stop offset="40%" stopColor="rgba(255,255,255,0.08)" />
                <stop offset="60%" stopColor="rgba(255,255,255,0.08)" />
                <stop offset="100%" stopColor="rgba(255,255,255,0)" />
              </linearGradient>
              <linearGradient id="pathGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(255,255,255,0)" />
                <stop offset="50%" stopColor="rgba(255,255,255,0.2)" />
                <stop offset="100%" stopColor="rgba(255,255,255,0)" />
              </linearGradient>
              <linearGradient id="pathGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(255,255,255,0)" />
                <stop offset="50%" stopColor="rgba(255,255,255,0.15)" />
                <stop offset="100%" stopColor="rgba(255,255,255,0)" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      {/* Main Content - 轮播内容 */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center relative">
          {slides.map((slide, index) => {
            const isActive = index === currentSlide
            const isFirstSlide = index === 0
            const isSecondSlide = index === 1

            return (
              <div
                key={index}
                className={`transition-all duration-1000 ${
                  isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 pointer-events-none'
                } ${isActive ? 'relative' : 'absolute inset-0 flex items-center justify-center'}`}
              >
                <div>
                  {isFirstSlide ? (
                    <>
                      <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-tight mb-8 text-white">
                        {slide.title1}
                        <br />
                        {slide.title2}
                      </h1>
                      <p className="text-lg md:text-xl text-gray-300 font-light">
                        {slide.subtitle}
                      </p>
                    </>
                  ) : isSecondSlide ? (
                    <>
                      <h1 className="text-6xl md:text-8xl font-black leading-none mb-4">
                        <span className="text-white">{slide.title1}</span>
                      </h1>
                      <h2 className="text-5xl md:text-7xl font-black leading-none mb-8">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-gray-100">
                          {slide.title2}
                        </span>
                      </h2>
                      <p className="text-xl md:text-2xl text-gray-300 mb-12 font-light">
                        {slide.subtitle}
                      </p>
                    </>
                  ) : (
                    <>
                      <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-tight mb-12 text-white">
                        {slide.title1}
                      </h1>
                      <p className="text-xl md:text-2xl text-gray-300 font-light">
                        {slide.subtitle}
                      </p>
                    </>
                  )}
                </div>
              </div>
            )
          })}
        </div>

        {/* Page Indicators */}
        <div className="flex gap-2 mt-12 justify-center">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-1 transition-all duration-300 ${
                index === currentSlide
                  ? 'w-12 bg-white'
                  : 'w-4 bg-gray-600 hover:bg-gray-400'
              }`}
              aria-label={`转到第 ${index + 1} 页`}
            />
          ))}
        </div>
      </div>

      {/* Navigation Arrows - 固定在页面两侧 */}
      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-8 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors duration-300 z-20"
        aria-label="上一页"
      >
        <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors duration-300 z-20"
        aria-label="下一页"
      >
        <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

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

