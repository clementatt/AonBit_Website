// 滚动动画
document.addEventListener('DOMContentLoaded', function() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px'
  }

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1'
        entry.target.style.transform = 'translateY(0)'
      }
    })
  }, observerOptions)

  // 观察所有需要动画的元素
  document.querySelectorAll('.scroll-animate').forEach(el => {
    const delay = el.dataset.delay || 0
    el.style.opacity = '0'
    el.style.transform = 'translateY(30px)'
    el.style.transition = `opacity 0.8s ease-out ${delay}s, transform 0.8s ease-out ${delay}s`
    observer.observe(el)
  })
})

// Header菜单切换
function toggleMobileMenu() {
  const menu = document.getElementById('mobile-menu')
  const icon = document.getElementById('menu-icon')
  if (menu.classList.contains('hidden') || menu.classList.contains('opacity-0')) {
    menu.classList.remove('hidden', 'opacity-0', 'max-h-0')
    menu.classList.add('opacity-100', 'max-h-96')
    // 切换图标
    if (icon) {
      icon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />'
    }
  } else {
    menu.classList.add('opacity-0', 'max-h-0')
    menu.classList.remove('opacity-100', 'max-h-96')
    // 切换图标
    if (icon) {
      icon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />'
    }
    setTimeout(() => menu.classList.add('hidden'), 300)
  }
}

// 轮播控制函数
let currentSlideIndex = 0
function goToSlide(index) {
  currentSlideIndex = index
  updateSlides()
  resetAutoPlay()
}

function nextSlide() {
  currentSlideIndex = (currentSlideIndex + 1) % 3
  updateSlides()
  resetAutoPlay()
}

function prevSlide() {
  currentSlideIndex = (currentSlideIndex - 1 + 3) % 3
  updateSlides()
  resetAutoPlay()
}

function updateSlides() {
  const slides = document.querySelectorAll('.hero-slide')
  const indicators = document.querySelectorAll('.hero-indicator')
  
  slides.forEach((slide, i) => {
    if (i === currentSlideIndex) {
      slide.classList.add('opacity-100', 'translate-y-0')
      slide.classList.remove('opacity-0', 'translate-y-8', 'pointer-events-none')
    } else {
      slide.classList.remove('opacity-100', 'translate-y-0')
      slide.classList.add('opacity-0', 'translate-y-8', 'pointer-events-none')
    }
  })
  
  indicators.forEach((indicator, i) => {
    if (i === currentSlideIndex) {
      indicator.classList.add('w-12', 'bg-white')
      indicator.classList.remove('w-4', 'bg-gray-600')
    } else {
      indicator.classList.remove('w-12', 'bg-white')
      indicator.classList.add('w-4', 'bg-gray-600')
    }
  })
}

let autoPlayInterval = null
function resetAutoPlay() {
  if (autoPlayInterval) {
    clearInterval(autoPlayInterval)
  }
  autoPlayInterval = setInterval(nextSlide, 5000)
}

// Hero轮播功能
function initHeroCarousel() {
  const heroSection = document.getElementById('hero-section')
  if (!heroSection) return

  // 绑定指示器
  document.querySelectorAll('.hero-indicator').forEach((indicator, index) => {
    indicator.addEventListener('click', () => goToSlide(index))
  })

  // 开始自动播放
  resetAutoPlay()

  // Hero背景动画
  let gradient1Transform = { x: 0, scaleX: 1 }
  let gradient2Transform = { x: 0, scaleY: 1 }
  let pathOffset1 = 0
  let pathOffset2 = 0

  function animateBackground() {
    const gradient1 = document.getElementById('gradient-1')
    const gradient2 = document.getElementById('gradient-2')
    const path1 = document.getElementById('path-1')
    const path2 = document.getElementById('path-2')

    gradient1Transform.x += 0.1
    gradient1Transform.scaleX = 1 + Math.sin(Date.now() / 3000) * 0.001
    gradient2Transform.x += 0.15
    gradient2Transform.scaleY = 1 + Math.cos(Date.now() / 2500) * 0.001
    pathOffset1 = (pathOffset1 + 0.01) % 1
    pathOffset2 = (pathOffset2 + 0.008) % 1

    if (gradient1) {
      gradient1.style.transform = `translateX(${gradient1Transform.x}px) scaleX(${gradient1Transform.scaleX})`
    }
    if (gradient2) {
      gradient2.style.transform = `translateX(${gradient2Transform.x}px) scaleY(${gradient2Transform.scaleY})`
    }
    if (path1) {
      path1.setAttribute('stroke-dashoffset', pathOffset1)
    }
    if (path2) {
      path2.setAttribute('stroke-dashoffset', pathOffset2)
    }

    requestAnimationFrame(animateBackground)
  }

  animateBackground()

  // 滚动进度
  window.addEventListener('scroll', function() {
    const scrollIndicator = document.getElementById('scroll-indicator')
    if (scrollIndicator) {
      const windowHeight = window.innerHeight
      const scrollY = window.scrollY
      const progress = Math.min((scrollY / windowHeight) * 100, 100)
      scrollIndicator.style.transform = `translateY(${progress * 1.5}px)`
    }
  })
}

// 联系表单提交已在contact.html中实现（使用mailto）

// 初始化
document.addEventListener('DOMContentLoaded', function() {
  initHeroCarousel()
  updateSlides() // 初始化轮播显示
})

