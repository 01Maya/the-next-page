'use client'

import { MapPin, Clock, Phone, Coffee } from 'lucide-react'
import { useScrollObserver } from '@/hooks/use-scroll-observer'

export function VisitStoreSection() {
  const { ref: sectionRef, isVisible } = useScrollObserver()

  return (
    <section
      id="visit"
      className="relative w-full py-20 md:py-32 px-4 md:px-8 lg:px-12 bg-gradient-to-b from-muted via-background to-card min-h-screen flex items-center"
    >
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <MapPin
          size={200}
          className="absolute top-10 right-10 text-accent animate-float"
        />
        <Coffee
          size={150}
          className="absolute bottom-20 left-10 text-coffee animate-float-slow"
        />
      </div>

      <div
        ref={sectionRef}
        className="relative z-10 max-w-4xl mx-auto w-full"
      >
        {/* Pinned Notebook Style */}
        <div className={`relative bg-white rounded-lg page-shadow paper-texture transition-all duration-700 ${
          isVisible ? 'animate-slide-in-up' : 'opacity-0'
        }`}>
          {/* Pin decorations */}
          <div className="absolute -top-4 left-12 w-4 h-4 bg-red-500 rounded-full shadow-lg transform -rotate-12" />
          <div className="absolute -top-3 right-16 w-4 h-4 bg-accent rounded-full shadow-lg transform rotate-12" />

          <div className="p-8 md:p-12 lg:p-16">
            {/* Header */}
            <div className="mb-12 text-center">
              <h2 className="font-caveat text-5xl md:text-6xl text-coffee mb-2">
                Visit Our Store
              </h2>
              <p className="font-playfair text-accent text-lg">
                We're waiting for your next visit
              </p>
            </div>

            {/* Content Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-12">
              {/* Left Column - Info */}
              <div className="space-y-8">
                {/* Address */}
                <div
                  className={`group transition-all duration-500 ${
                    isVisible ? 'animate-slide-in-left stagger-1' : 'opacity-0'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <MapPin className="text-accent mt-1 flex-shrink-0 group-hover:animate-pulse-glow" size={28} />
                    <div>
                      <h3 className="font-caveat text-3xl text-coffee mb-2">
                        Our Location
                      </h3>
                      <p className="font-playfair text-navy leading-relaxed">
                        123 Literary Lane<br />
                        Booktown, ST 12345<br />
                        <span className="text-accent font-medium">United States</span>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Hours */}
                <div
                  className={`group transition-all duration-500 ${
                    isVisible ? 'animate-slide-in-left stagger-2' : 'opacity-0'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <Clock className="text-accent mt-1 flex-shrink-0" size={28} />
                    <div>
                      <h3 className="font-caveat text-3xl text-coffee mb-2">
                        Opening Hours
                      </h3>
                      <div className="font-playfair text-navy space-y-1">
                        <p>Monday - Friday: 10 AM - 8 PM</p>
                        <p>Saturday: 10 AM - 10 PM</p>
                        <p>Sunday: 12 PM - 6 PM</p>
                        <p className="text-accent font-medium mt-2">Closed on Public Holidays</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Phone */}
                <div
                  className={`group transition-all duration-500 ${
                    isVisible ? 'animate-slide-in-left stagger-3' : 'opacity-0'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <Phone className="text-accent mt-1 flex-shrink-0" size={28} />
                    <div>
                      <h3 className="font-caveat text-3xl text-coffee mb-2">
                        Get in Touch
                      </h3>
                      <p className="font-playfair text-navy">
                        <a href="tel:+1234567890" className="hover:text-accent transition-colors">
                          +1 (234) 567-890
                        </a>
                      </p>
                      <p className="font-playfair text-navy">
                        <a href="mailto:hello@bookstore.com" className="hover:text-accent transition-colors">
                          hello@bookstore.com
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Map Placeholder */}
              <div
                className={`transition-all duration-500 ${
                  isVisible ? 'animate-slide-in-right stagger-1' : 'opacity-0'
                }`}
              >
                <div className="relative w-full h-80 bg-gradient-to-br from-accent/20 to-coffee/20 rounded-lg overflow-hidden border-2 border-muted group">
                  {/* Map placeholder */}
                  <div className="w-full h-full flex items-center justify-center relative">
                    <div className="absolute inset-0 bg-pattern opacity-10" />
                    
                    {/* Animated Map Pin */}
                    <div className="relative z-10">
                      <div className="animate-bounce-soft">
                        <MapPin size={48} className="text-coffee fill-accent" />
                      </div>
                      <p className="text-center mt-4 font-playfair text-coffee font-medium">
                        123 Literary Lane
                      </p>
                    </div>

                    {/* Pulse effect */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <div className="w-32 h-32 border-2 border-accent/50 rounded-full animate-pulse" />
                    </div>
                  </div>

                  {/* Decorative elements */}
                  <div className="absolute top-4 right-4 flex gap-2">
                    <span className="px-3 py-1 bg-white/80 rounded-full font-sans text-xs text-coffee font-medium">
                      Open Now
                    </span>
                  </div>
                </div>

                {/* Directions Button */}
                <button
                  onClick={() => window.open('https://maps.google.com', '_blank')}
                  className={`w-full mt-6 px-6 py-4 bg-coffee text-cream font-medium rounded-lg hover-lift hover-glow transition-all duration-300 ${
                    isVisible ? 'animate-fade-in-up stagger-4' : 'opacity-0'
                  }`}
                >
                  Get Directions
                </button>
              </div>
            </div>

            {/* Message Section */}
            <div
              className={`border-t border-muted pt-8 transition-all duration-500 ${
                isVisible ? 'animate-fade-in-up stagger-4' : 'opacity-0'
              }`}
            >
              <h3 className="font-caveat text-3xl text-coffee mb-4">
                Why Visit Us?
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  '✓ Cozy and welcoming atmosphere',
                  '✓ Expert book recommendations',
                  '✓ Exclusive author events',
                  '✓ Reading lounge and café',
                  '✓ Rare and vintage books',
                  '✓ Community book clubs',
                ].map((item, i) => (
                  <p
                    key={i}
                    className="font-playfair text-navy flex items-center gap-2"
                  >
                    <span className="text-accent">•</span>
                    {item}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
