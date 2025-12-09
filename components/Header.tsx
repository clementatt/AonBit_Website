'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  // 服务端渲染时默认为 true，避免初始状态不可见
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    // 只在客户端运行
    if (typeof window !== 'undefined') {
      setIsVisible(true)
    }
  }, [])

  const navItems = [
    { href: '/', label: 'トップ' },
    { href: '/business', label: '事業内容' },
    { href: '/company', label: '会社情報' },
    { href: '/recruit', label: '採用情報' },
    { href: '/contact', label: 'お問い合わせ' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div
            className="flex-shrink-0"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'none' : 'translateY(-10px)',
              transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
            }}
          >
            <Link href="/" className="group relative inline-block">
              <span className="relative z-10 text-2xl font-black text-white px-3 py-1 block">
                AONBIT
              </span>
            </Link>
          </div>

          <nav className="hidden md:flex items-center space-x-12">
            {navItems.map((item, index) => (
              <div
                key={item.href}
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'none' : 'translateY(-10px)',
                  transition: `opacity 0.6s ease-out ${index * 0.1}s, transform 0.6s ease-out ${index * 0.1}s`,
                }}
              >
                <Link
                  href={item.href}
                  className="relative text-white text-sm font-medium tracking-wider uppercase group block"
                >
                  <span className="relative z-10 block px-3 py-2">{item.label}</span>
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-amber-400 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                </Link>
              </div>
            ))}
          </nav>

          <button
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gray-300 hover:bg-white/10 transition-colors duration-300 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="メニューを開く"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'none' : 'translateY(-10px)',
              transition: 'opacity 0.6s ease-out 0.5s, transform 0.6s ease-out 0.5s',
            }}
          >
            {isMenuOpen ? (
              <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isMenuOpen ? 'opacity-100 max-h-96' : 'opacity-0 max-h-0'
          }`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black border-t border-gray-800">
            {navItems.map((item, index) => (
              <div
                key={item.href}
                style={{
                  opacity: isMenuOpen ? 1 : 0,
                  transform: isMenuOpen ? 'none' : 'translateY(20px)',
                  transition: `opacity 0.3s ease-out ${index * 0.05}s, transform 0.3s ease-out ${index * 0.05}s`,
                }}
              >
                <Link
                  href={item.href}
                  className="relative text-white block text-base font-medium tracking-wider uppercase overflow-hidden group"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="relative z-10 block px-3 py-3">{item.label}</span>
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-amber-400 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </header>
  )
}
