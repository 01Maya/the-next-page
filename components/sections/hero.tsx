'use client'

import { useEffect, useRef } from 'react'
import { ChevronDown } from 'lucide-react'

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const descriptionRef = useRef<HTMLParagraphElement>(null)
  const buttonsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const handleScroll = () => {
      if (!containerRef.current) return
      const scrollY = window.scrollY
      const parallaxElements = containerRef.current.querySelectorAll('[data-parallax]')

      parallaxElements.forEach((element) => {
        const speed = parseFloat(element.getAttribute('data-parallax') || '0.5')
        const yPos = scrollY * speed
        ;(element as HTMLElement).style.transform = `translateY(${yPos}px)`
      })
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    // Trigger animations after mount
    setTimeout(() => {
      if (titleRef.current) {
        titleRef.current.classList.add('animate-typewriter')
      }
      if (subtitleRef.current) {
        subtitleRef.current.classList.add('animate-fade-in-up', 'stagger-1')
      }
      if (descriptionRef.current) {
        descriptionRef.current.classList.add('animate-fade-in-up', 'stagger-2')
      }
      if (buttonsRef.current) {
        buttonsRef.current.classList.add('animate-fade-in-up', 'stagger-3')
      }
    }, 100)
  }, [])

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-background via-muted to-background pt-20 md:pt-24"
    >
      {/* Parallax Background Layers */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Books - Layer 1 */}
        <div
          data-parallax="0.3"
          className="absolute top-10 left-10 w-32 h-40 opacity-20 transform -rotate-12"
        >
          <div className="w-full h-full bg-coffee rounded-lg shadow-xl" />
        </div>

        {/* Floating Books - Layer 2 */}
        <div
          data-parallax="0.4"
          className="absolute top-32 right-12 w-28 h-36 opacity-20 transform rotate-6"
        >
          <div className="w-full h-full bg-navy rounded-lg shadow-xl" />
        </div>

        {/* Floating Books - Layer 3 */}
        <div
          data-parallax="0.25"
          className="absolute bottom-32 left-1/4 w-24 h-32 opacity-20 transform -rotate-6"
        >
          <div className="w-full h-full bg-accent rounded-lg shadow-xl" />
        </div>

        {/* Light Glow Effect */}
        <div className="absolute top-1/4 right-1/3 w-96 h-96 rounded-full bg-accent opacity-5 blur-3xl" />
      </div>

      {/* Animated Dust Particles */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute w-1 h-1 bg-coffee rounded-full animate-float" style={{ left: '10%', top: '20%', animationDelay: '0s' }} />
        <div className="absolute w-1 h-1 bg-coffee rounded-full animate-float" style={{ left: '20%', top: '40%', animationDelay: '0.3s' }} />
        <div className="absolute w-1 h-1 bg-coffee rounded-full animate-float" style={{ left: '30%', top: '30%', animationDelay: '0.6s' }} />
        <div className="absolute w-1 h-1 bg-coffee rounded-full animate-float" style={{ left: '70%', top: '50%', animationDelay: '0.9s' }} />
        <div className="absolute w-1 h-1 bg-coffee rounded-full animate-float" style={{ left: '80%', top: '20%', animationDelay: '1.2s' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 lg:px-12 h-screen flex flex-col items-center justify-center text-center">
        {/* Main Headline */}
        <h1
          ref={titleRef}
          className="font-caveat text-5xl md:text-7xl lg:text-8xl text-coffee mb-6 md:mb-8 animate-slide-in-up"
        >
          Where Stories Come Alive
        </h1>

        {/* Subtitle with Handwriting Style */}
        <p
          ref={subtitleRef}
          className="font-caveat text-3xl md:text-4xl text-accent mb-6 opacity-0 animate-fade-in-up"
        >
          Step into our cozy corner of literary magic
        </p>

        {/* Description */}
        <p
          ref={descriptionRef}
          className="font-playfair text-base md:text-lg text-navy max-w-2xl mb-10 md:mb-12 leading-relaxed opacity-0"
        >
          Discover a sanctuary of carefully curated books, timeless stories, and the warmth of a vintage bookstore experience. Every page turns into an adventure, every visit becomes a memory.
        </p>

        {/* CTA Buttons */}
        <div
          ref={buttonsRef}
          className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center opacity-0"
        >
          <button
            onClick={() => {
              const element = document.getElementById('books')
              element?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="group relative px-8 md:px-10 py-3 md:py-4 bg-coffee text-cream font-medium rounded-lg hover-lift hover-glow overflow-hidden transition-all duration-300"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              Explore Books
              <ChevronDown size={20} className="group-hover:translate-y-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transform -skew-x-12 animate-ripple" />
          </button>

          <button
            onClick={() => {
              const element = document.getElementById('visit')
              element?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="px-8 md:px-10 py-3 md:py-4 border-2 border-coffee text-coffee font-medium rounded-lg hover:bg-coffee hover:text-cream transition-all duration-300 hover-lift"
          >
            Visit Our Store
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="animate-bounce-soft flex flex-col items-center gap-2">
          <span className="text-sm font-medium text-coffee">Scroll to explore</span>
          <ChevronDown size={24} className="text-accent" />
        </div>
      </div>
    </section>
  )
}
