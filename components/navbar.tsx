'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const NAV_LINKS = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#books', label: 'Books' },
  { href: '#testimonials', label: 'Testimonials' },
  { href: '#visit', label: 'Visit Store' },
  { href: '#contact', label: 'Contact' },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      // Update active section based on scroll position
      const sections = NAV_LINKS.map(link => link.href.slice(1))
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setIsOpen(false)
    const section = href.slice(1)
    setActiveSection(section)
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass-effect bg-white/40' : 'glass-effect bg-white/20'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a
            href="#home"
            onClick={() => handleNavClick('#home')}
            className="font-caveat text-3xl md:text-4xl text-coffee hover:text-accent transition-colors"
          >
            the next page
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                onClick={() => handleNavClick(href)}
                className={`relative text-sm font-medium transition-all duration-300 ${activeSection === href.slice(1)
                    ? 'text-coffee'
                    : 'text-navy hover:text-coffee'
                  }`}
              >
                {label}
                {activeSection === href.slice(1) && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-accent animate-slide-in-right" />
                )}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-coffee hover:text-accent transition-colors p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-muted animate-slide-in-down">
            <div className="px-4 py-4 space-y-3">
              {NAV_LINKS.map(({ href, label }) => (
                <a
                  key={href}
                  href={href}
                  onClick={() => handleNavClick(href)}
                  className={`block py-2 px-3 rounded-lg transition-all duration-300 ${activeSection === href.slice(1)
                      ? 'bg-muted text-coffee font-medium'
                      : 'text-navy hover:bg-muted/50'
                    }`}
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
