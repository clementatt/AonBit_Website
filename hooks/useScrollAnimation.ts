'use client'

import { useEffect, useRef, useState } from 'react'

interface UseScrollAnimationOptions {
  threshold?: number
  rootMargin?: string
  triggerOnce?: boolean
}

export function useScrollAnimation(options: UseScrollAnimationOptions = {}) {
  const { threshold = 0.1, rootMargin = '0px', triggerOnce = true } = options
  // 服务端渲染时默认为 true，客户端初始为 false（等待 IntersectionObserver 触发）
  const [isVisible, setIsVisible] = useState(true) // 初始为 true 避免服务端渲染问题
  const elementRef = useRef<HTMLDivElement>(null)
  const hasMounted = useRef(false)

  useEffect(() => {
    // 确保只在客户端运行
    if (typeof window === 'undefined') return
    
    // 标记已挂载
    if (!hasMounted.current) {
      hasMounted.current = true
      // 客户端首次渲染时，如果元素在视口中，立即显示
      setIsVisible(false)
    }
    
    const element = elementRef.current
    if (!element) return

    // 检查 IntersectionObserver 是否可用
    if (typeof IntersectionObserver === 'undefined') {
      setIsVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (triggerOnce) {
            observer.unobserve(element)
          }
        } else if (!triggerOnce) {
          setIsVisible(false)
        }
      },
      {
        threshold,
        rootMargin,
      }
    )

    observer.observe(element)

    return () => {
      observer.unobserve(element)
    }
  }, [threshold, rootMargin, triggerOnce])

  return { elementRef, isVisible }
}

