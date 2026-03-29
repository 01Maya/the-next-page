'use client'

import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react'
import { useScrollObserver } from '@/hooks/use-scroll-observer'

const TESTIMONIALS = [
  {
    id: 1,
    name: 'Sarah Chen',
    role: 'Book Blogger',
    rating: 5,
    text: 'This bookstore is a hidden gem! The ambiance is absolutely magical, and the staff knows literature inside and out. I found my new favorite author here!',
    initials: 'SC',
  },
  {
    id: 2,
    name: 'Marcus Johnson',
    role: 'Teacher',
    rating: 5,
    text: 'The perfect place to discover books for my classroom. The collection is thoughtfully curated, and every visit feels like an adventure. Highly recommended!',
    initials: 'MJ',
  },
  {
    id: 3,
    name: 'Emma Williams',
    role: 'Student',
    rating: 5,
    text: 'I spent hours here just browsing. The vintage aesthetic makes you feel like you\'re in a different era. The staff is so helpful and passionate about books!',
    initials: 'EW',
  },
  {
    id: 4,
    name: 'David Park',
    role: 'Writer',
    rating: 5,
    text: 'A sanctuary for anyone who loves stories. The reading corners are perfect for finding inspiration, and the community events are wonderful.',
    initials: 'DP',
  },
  {
    id: 5,
    name: 'Lisa Anderson',
    role: 'Librarian',
    rating: 5,
    text: 'Finally found a bookstore that understands the true value of literature. The organization, the atmosphere, everything is perfect!',
    initials: 'LA',
  },
]

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const { ref: sectionRef, isVisible } = useScrollObserver()

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [])

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length)
  }

  const getVisibleTestimonials = () => {
    const testimonials = []
    for (let i = 0; i < 3; i++) {
      testimonials.push(TESTIMONIALS[(currentIndex + i) % TESTIMONIALS.length])
    }
    return testimonials
  }

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className="relative w-full py-20 md:py-32 px-4 md:px-8 lg:px-12 bg-gradient-to-b from-card via-background to-muted overflow-hidden"
    >
      {/* Corkboard texture */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full paper-texture" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="font-caveat text-5xl md:text-6xl text-coffee mb-4 animate-slide-in-up">
            Reader Reviews
          </h2>
          <p className="font-playfair text-accent text-lg animate-slide-in-up" style={{ animationDelay: '0.2s' }}>
            What our visitors are saying
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative">
          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12">
            {getVisibleTestimonials().map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`${index !== 1 ? 'hidden md:block' : 'block'} transition-all duration-500 transform ${
                  isVisible ? 'animate-fade-in-up' : ''
                }`}
                style={{
                  animationDelay: `${index * 100}ms`,
                  transformOrigin: 'center',
                }}
              >
                {/* Sticky Note Style Card */}
                <div
                  className={`relative p-6 rounded-sm shadow-xl hover-lift transition-all duration-300 rotate-${
                    [-2, 1, -1][index]
                  } bg-white border-2 border-muted`}
                  style={{
                    transform: `rotate(${[-2, 1, -1][index]}deg)`,
                    backgroundColor: `${
                      ['#FFF9E6', '#E6F7FF', '#F0E6FF'][index % 3]
                    }`,
                  }}
                >
                  {/* Pin Decoration */}
                  <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-accent rounded-full shadow-md" />

                  {/* Quote Icon */}
                  <div className="mb-4">
                    <Quote className="text-accent opacity-50" size={32} />
                  </div>

                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star
                        key={i}
                        size={18}
                        className="fill-accent text-accent animate-bounce-soft"
                        style={{ animationDelay: `${i * 100}ms` }}
                      />
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <p className="font-playfair text-navy text-sm mb-6 leading-relaxed italic">
                    "{testimonial.text}"
                  </p>

                  {/* Author */}
                  <div className="border-t border-muted pt-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent to-coffee flex items-center justify-center text-cream font-bold text-xs">
                        {testimonial.initials}
                      </div>
                      <div>
                        <h4 className="font-caveat text-lg text-coffee font-bold">
                          {testimonial.name}
                        </h4>
                        <p className="font-sans text-xs text-navy opacity-75">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Carousel for small screens */}
          <div className="md:hidden mb-8">
            <div className="relative p-6 rounded-sm shadow-xl bg-white border-2 border-muted">
              <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-accent rounded-full shadow-md" />

              <div className="mb-4">
                <Quote className="text-accent opacity-50" size={32} />
              </div>

              <div className="flex gap-1 mb-4">
                {Array.from({ length: TESTIMONIALS[currentIndex].rating }).map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className="fill-accent text-accent"
                  />
                ))}
              </div>

              <p className="font-playfair text-navy text-sm mb-6 leading-relaxed italic">
                "{TESTIMONIALS[currentIndex].text}"
              </p>

              <div className="border-t border-muted pt-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent to-coffee flex items-center justify-center text-cream font-bold text-xs">
                    {TESTIMONIALS[currentIndex].initials}
                  </div>
                  <div>
                    <h4 className="font-caveat text-lg text-coffee font-bold">
                      {TESTIMONIALS[currentIndex].name}
                    </h4>
                    <p className="font-sans text-xs text-navy opacity-75">
                      {TESTIMONIALS[currentIndex].role}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center items-center gap-4">
            <button
              onClick={handlePrev}
              className="p-3 rounded-full bg-coffee text-cream hover-lift transition-all hover:bg-navy"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    i === currentIndex
                      ? 'bg-coffee w-8'
                      : 'bg-muted hover:bg-accent'
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="p-3 rounded-full bg-coffee text-cream hover-lift transition-all hover:bg-navy"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
