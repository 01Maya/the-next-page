'use client'

import { useState, useEffect, useRef } from 'react'
import { ChevronLeft, ChevronRight, Check } from 'lucide-react'
import { useScrollObserver } from '@/hooks/use-scroll-observer'

export function AboutSection() {
  const [currentPage, setCurrentPage] = useState(0)
  const [isFlipping, setIsFlipping] = useState(false)
  const { ref: sectionRef, isVisible } = useScrollObserver()
  const pageRefs = useRef<HTMLDivElement[]>([])
  const startXRef = useRef(0)

  useEffect(() => {
    if (!isVisible || !pageRefs.current[currentPage]) return

    const page = pageRefs.current[currentPage]
    const elements = page.querySelectorAll('[data-animate]')

    elements.forEach((el) => {
      setTimeout(() => {
        el.classList.add('active')
      }, 100)
    })
  }, [isVisible, currentPage])

  const handlePageChange = (direction: 'next' | 'prev') => {
    if (isFlipping) return
    setIsFlipping(true)

    if (direction === 'next' && currentPage < 2) {
      setCurrentPage(currentPage + 1)
    } else if (direction === 'prev' && currentPage > 0) {
      setCurrentPage(currentPage - 1)
    }

    setTimeout(() => setIsFlipping(false), 700)
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    startXRef.current = e.touches[0].clientX
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    const endX = e.changedTouches[0].clientX
    const diff = startXRef.current - endX

    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        handlePageChange('next')
      } else {
        handlePageChange('prev')
      }
    }
  }

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative w-full py-20 md:py-32 px-4 md:px-8 lg:px-12 bg-gradient-to-b from-background via-card to-muted"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-caveat text-4xl md:text-5xl lg:text-6xl text-coffee mb-4">
            Our Story
          </h2>
          <p className="font-playfair text-accent text-base md:text-lg">
            An interactive journey through our bookstore
          </p>
        </div>

        {/* Interactive Book */}
        <div className="perspective flex justify-center items-center min-h-[300px] md:min-h-96">
          <div className="relative w-full max-w-4xl px-4 md:px-0">
            {/* Book Container */}
            <div 
              className="book-shadow page-shadow rounded-lg overflow-hidden bg-white paper-texture transition-all duration-700 cursor-pointer mx-auto max-w-sm md:max-w-4xl hover:shadow-2xl hover:scale-[1.02] hover:rotate-1"
              style={{
                transform: isFlipping ? 'perspective(1000px) rotateY(45deg)' : 'perspective(1000px) rotateY(0deg)',
              }}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
<div
  ref={(el) => {
    if (el) pageRefs.current[0] = el
  }}
  className={`transition-all duration-700 p-6 md:p-8 lg:p-12 min-h-[400px] md:min-h-[500px] flex flex-col md:flex-row gap-6 md:gap-8 ${
    currentPage === 0 ? 'opacity-100 scale-100' : 'opacity-0 scale-95 hidden'
  }`}
>
  {/* Left Page: Vision */}
  <div className="w-full md:w-1/2 md:border-r md:border-muted md:pr-8">
    <h3
      data-animate
      className="font-caveat text-2xl md:text-3xl lg:text-4xl text-coffee mb-4 md:mb-6 scroll-fade-in"
    >
      Our Vision
    </h3>

    <ul className="space-y-3 md:space-y-4">
      {[
        'Create a sanctuary for book lovers',
        'Foster community through literature',
        'Preserve the magic of physical books',
        'Inspire lifelong learning',
      ].map((item, i) => (
        <li
          key={i}
          data-animate
          className="flex items-start gap-2 md:gap-3 scroll-fade-in hover:bg-muted/30 p-2 rounded-lg transition-colors duration-300 cursor-pointer"
          style={{ transitionDelay: `${i * 100}ms` }}
        >
          <Check className="text-accent mt-0.5 md:mt-1 flex-shrink-0 animate-bounce-soft hover:scale-110 transition-transform" size={18} />
          <span className="font-playfair text-navy text-sm md:text-base">{item}</span>
        </li>
      ))}
    </ul>
  </div>

  {/* Right Page: Mission */}
  <div className="w-full md:w-1/2 md:pl-8">
    <h3
      data-animate
      className="font-caveat text-2xl md:text-3xl lg:text-4xl text-coffee mb-4 md:mb-6 scroll-fade-in stagger-2"
    >
      Our Mission
    </h3>

    <ul className="space-y-3 md:space-y-4">
      {[
        'Curate exceptional reading experiences',
        'Support independent authors & publishers',
        'Build meaningful reader connections',
        'Celebrate stories that transform lives',
      ].map((item, i) => (
        <li
          key={i}
          data-animate
          className="flex items-start gap-2 md:gap-3 scroll-fade-in hover:bg-muted/30 p-2 rounded-lg transition-colors duration-300 cursor-pointer"
          style={{ transitionDelay: `${(i + 4) * 100}ms` }}
        >
          <Check className="text-accent mt-0.5 md:mt-1 flex-shrink-0 animate-bounce-soft hover:scale-110 transition-transform" size={18} />
          <span className="font-playfair text-navy text-sm md:text-base">{item}</span>
        </li>
      ))}
    </ul>
  </div>
</div>

              {/* Page 2: Owner's Letter */}
              <div
                ref={(el) => {
                  if (el) pageRefs.current[1] = el
                }}
                className={`transition-all duration-700 p-6 md:p-8 lg:p-12 min-h-[400px] md:h-[500px] flex flex-col justify-between ${
                  currentPage === 1 ? 'opacity-100 scale-100' : 'opacity-0 scale-95 hidden'
                }`}
              >
                <div>
                  <h3
                    data-animate
                    className="font-caveat text-2xl md:text-3xl lg:text-4xl text-coffee mb-4 md:mb-6 scroll-fade-in"
                  >
                    From Our Owner's Desk
                  </h3>
                  <p
                    data-animate
                    className="font-playfair text-navy mb-3 md:mb-4 leading-relaxed scroll-fade-in stagger-1 text-sm md:text-base"
                  >
                    Dear Reader,
                  </p>
                  <p
                    data-animate
                    className="font-playfair text-navy leading-relaxed scroll-fade-in stagger-2 text-sm md:text-base"
                  >
                    Every book in our store has a story, just like every person who walks through our doors. This bookstore isn't just a business—it's a passion project born from a belief that books have the power to change lives, create connections, and transform hearts.
                  </p>
                </div>

                <div className="border-t border-muted pt-4 md:pt-6">
                  <p
                    data-animate
                    className="font-caveat text-xl md:text-2xl text-coffee mb-2 scroll-fade-in stagger-3"
                  >
                    With love and endless gratitude,
                  </p>
                  <svg
                    viewBox="0 0 200 100"
                    className="w-24 h-12 md:w-32 md:h-16 text-coffee"
                    data-animate
                  >
                    <path
                      d="M 20 50 Q 50 30, 80 50 T 180 50"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                  </svg>
                  <p className="font-playfair text-navy font-medium text-sm md:text-base">
                    Sarah Mitchell, Founder
                  </p>
                </div>
              </div>

              {/* Page 3: Staff */}
              <div
                ref={(el) => {
                  if (el) pageRefs.current[2] = el
                }}
                className={`transition-all duration-700 p-6 md:p-8 lg:p-12 min-h-[400px] md:h-[500px] flex flex-col ${
                  currentPage === 2 ? 'opacity-100 scale-100' : 'opacity-0 scale-95 hidden'
                }`}
              >
                <h3
                  data-animate
                  className="font-caveat text-3xl md:text-4xl lg:text-5xl text-coffee mb-6 md:mb-8 text-center scroll-fade-in"
                >
                  Our Team
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 flex-1">
                  {[
                    { name: 'Emma', role: 'Senior Bookseller', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face' },
                    { name: 'James', role: 'Curator', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face' },
                    { name: 'Lily', role: 'Book Enthusiast', image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face' },
                  ].map((member, i) => (
                    <div
                      key={i}
                      data-animate
                      className="flex flex-col items-center text-center scroll-slide-right group cursor-pointer"
                      style={{ transitionDelay: `${i * 150}ms` }}
                    >
                      <div className="relative">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-lg mb-3 shadow-lg object-cover transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl"
                        />
                        <div className="absolute inset-0 bg-coffee/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                      <h4 className="font-caveat text-xl md:text-2xl text-coffee">{member.name}</h4>
                      <p className="font-playfair text-xs md:text-sm text-navy">{member.role}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Page Indicators */}
            <div className="flex justify-center gap-3 mt-6 md:mt-8">
              {[0, 1, 2].map((i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i)}
                  className={`w-4 h-4 md:w-3 md:h-3 rounded-full transition-all duration-300 touch-manipulation hover:scale-125 ${
                    currentPage === i
                      ? 'bg-coffee w-6 md:w-8 shadow-lg'
                      : 'bg-muted hover:bg-accent hover:shadow-md'
                  }`}
                  aria-label={`Go to page ${i + 1}`}
                />
              ))}
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-between items-center mt-6 md:mt-8 px-4">
              <button
                onClick={() => handlePageChange('prev')}
                disabled={currentPage === 0}
                className={`p-3 md:p-4 rounded-lg transition-all duration-300 touch-manipulation ${
                  currentPage === 0
                    ? 'bg-muted text-gray-300 cursor-not-allowed'
                    : 'bg-coffee text-cream hover-lift hover:bg-navy active:scale-95'
                }`}
                aria-label="Previous page"
              >
                <ChevronLeft size={20} className="md:w-6 md:h-6" />
              </button>

              <button
                onClick={() => handlePageChange('next')}
                disabled={currentPage === 2}
                className={`p-3 md:p-4 rounded-lg transition-all duration-300 touch-manipulation ${
                  currentPage === 2
                    ? 'bg-muted text-gray-300 cursor-not-allowed'
                    : 'bg-coffee text-cream hover-lift hover:bg-navy active:scale-95'
                }`}
                aria-label="Next page"
              >
                <ChevronRight size={20} className="md:w-6 md:h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
