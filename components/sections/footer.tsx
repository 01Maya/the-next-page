'use client'

import { useState } from 'react'
import { Facebook, Instagram, Twitter, Youtube, Mail } from 'lucide-react'

export function FooterSection() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email.trim()) {
      setSubscribed(true)
      setEmail('')
      setTimeout(() => setSubscribed(false), 3000)
    }
  }

  const socialLinks = [
    { icon: Facebook, label: 'Facebook', href: '#' },
    { icon: Instagram, label: 'Instagram', href: '#' },
    { icon: Twitter, label: 'Twitter', href: '#' },
    { icon: Youtube, label: 'YouTube', href: '#' },
  ]

  const footerLinks = [
    {
      title: 'Quick Links',
      links: ['Home', 'About', 'Books', 'Contact'],
    },
    {
      title: 'Policies',
      links: ['Privacy Policy', 'Terms of Service', 'Return Policy', 'Shipping Info'],
    },
    {
      title: 'Community',
      links: ['Book Club', 'Events', 'Author Visits', 'Reading Groups'],
    },
  ]

  return (
    <footer
      id="contact"
      className="relative w-full bg-gradient-to-br from-navy via-coffee/20 to-navy text-cream overflow-hidden pt-20 pb-8"
    >
      {/* Floating Elements Background - Fixed Positions */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute w-16 h-20 bg-accent/30 rounded-lg animate-float" style={{ left: '5%', top: '15%', animationDelay: '0s' }} />
        <div className="absolute w-16 h-20 bg-accent/30 rounded-lg animate-float" style={{ left: '85%', top: '25%', animationDelay: '0.5s' }} />
        <div className="absolute w-16 h-20 bg-accent/30 rounded-lg animate-float" style={{ left: '15%', top: '70%', animationDelay: '1s' }} />
        <div className="absolute w-1 h-12 bg-accent/30 rounded-full animate-float-slow" style={{ left: '25%', top: '40%', animationDelay: '0s', transform: 'rotate(45deg)' }} />
        <div className="absolute w-1 h-12 bg-accent/30 rounded-full animate-float-slow" style={{ left: '75%', top: '60%', animationDelay: '0.7s', transform: 'rotate(120deg)' }} />
        <div className="absolute w-8 h-20 bg-accent/30 rounded-lg animate-float-slower" style={{ left: '45%', top: '80%', animationDelay: '0s' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12 pb-12 border-b border-cream/20">
          {/* Brand Section */}
          <div className="md:col-span-1">
            <h3 className="font-caveat text-4xl text-accent mb-4">
              the next page
            </h3>
            <p className="font-playfair text-cream/80 text-sm leading-relaxed mb-6">
              Your sanctuary for stories, imagination, and literary magic.
            </p>

            {/* Social Media Icons */}
            <div className="flex gap-4">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  className="group w-10 h-10 rounded-full bg-cream/10 hover:bg-accent hover:text-navy flex items-center justify-center transition-all duration-300 hover-lift"
                  aria-label={label}
                >
                  <Icon size={20} className="group-hover:animate-bounce-soft" />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {footerLinks.map((column) => (
            <div key={column.title}>
              <h4 className="font-caveat text-2xl text-accent mb-4">
                {column.title}
              </h4>
              <ul className="space-y-2">
                {column.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-cream/70 hover:text-accent transition-colors duration-300 font-playfair text-sm link-underline"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Subscription */}
        <div className="mb-12 pb-12 border-b border-cream/20">
          <h3 className="font-caveat text-3xl text-accent mb-4">
            Join Our Book Lovers Community
          </h3>
          <p className="font-playfair text-cream/80 mb-6 text-sm">
            Subscribe to our newsletter for exclusive updates, author recommendations, and special events.
          </p>

          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-4 py-3 rounded-lg bg-cream/10 border border-cream/30 text-cream placeholder-cream/50 focus:outline-none focus:border-accent focus:bg-cream/20 transition-all duration-300 font-playfair"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-accent text-navy font-medium rounded-lg hover-lift hover:bg-cream transition-all duration-300"
            >
              {subscribed ? '✓ Subscribed!' : 'Subscribe'}
            </button>
          </form>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-cream/60 text-sm font-playfair">
          <p>
            © {new Date().getFullYear()} Bookstore. All rights reserved. Made with <span className="text-accent">♥</span> for book lovers.
          </p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-accent transition-colors">
              Accessibility
            </a>
            <a href="#" className="hover:text-accent transition-colors">
              Cookie Settings
            </a>
            <a href="#" className="hover:text-accent transition-colors">
              Sitemap
            </a>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 w-12 h-12 bg-accent text-navy rounded-full flex items-center justify-center shadow-lg hover-lift hover:scale-110 transition-all duration-300 z-40 font-bold"
        aria-label="Back to top"
      >
        ↑
      </button>
    </footer>
  )
}
