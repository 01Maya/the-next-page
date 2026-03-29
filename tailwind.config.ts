import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-playfair)', 'Georgia', 'serif'],
        script: ['var(--font-caveat)', 'cursive'],
      },
      colors: {
        cream: '#F7F3EA',
        coffee: '#6B4F3B',
        navy: '#1E2A38',
        gold: '#C9A66B',
        beige: '#E8DFC9',
      },
      backgroundColor: {
        cream: '#F7F3EA',
        coffee: '#6B4F3B',
        navy: '#1E2A38',
        gold: '#C9A66B',
        beige: '#E8DFC9',
      },
      textColor: {
        cream: '#F7F3EA',
        coffee: '#6B4F3B',
        navy: '#1E2A38',
        gold: '#C9A66B',
        beige: '#E8DFC9',
      },
      borderColor: {
        cream: '#F7F3EA',
        coffee: '#6B4F3B',
        navy: '#1E2A38',
        gold: '#C9A66B',
        beige: '#E8DFC9',
      },
      boxShadow: {
        'gold-glow': '0 0 20px rgba(201, 166, 107, 0.5)',
        'coffee-shadow': '0 10px 40px rgba(107, 79, 59, 0.1)',
      },
      animation: {
        'typewriter': 'typewriter 2s steps(40, end)',
        'handwriting': 'handwriting 2.5s ease-in-out forwards',
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'slide-in-left': 'slideInLeft 0.6s ease-out forwards',
        'slide-in-right': 'slideInRight 0.6s ease-out forwards',
        'slide-in-down': 'slideInDown 0.5s ease-out forwards',
        'bounce-soft': 'bounce-soft 1.5s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite',
        'tilt': 'tilt 4s ease-in-out infinite',
        'flip-page': 'flip-page 0.8s ease-in-out',
        'page-turn': 'page-turn 0.6s ease-out forwards',
        'parallax-slow': 'parallax-slow 8s ease-out forwards',
        'parallax-slower': 'parallax-slower 10s ease-out forwards',
        'float': 'float 3s ease-in-out infinite',
        'float-slow': 'float-slow 4s ease-in-out infinite',
        'float-slower': 'float-slower 5s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'ripple': 'ripple 0.6s ease-out',
        'scribble': 'scribble 1.5s ease-in-out forwards',
        'highlight-sweep': 'highlight-sweep 2s ease-in-out infinite',
        'rotate-slow': 'rotate-slow 20s linear infinite',
      },
      keyframes: {
        typewriter: {
          from: { width: '0' },
          to: { width: '100%' },
        },
        handwriting: {
          from: { 'stroke-dashoffset': '1000' },
          to: { 'stroke-dashoffset': '0' },
        },
        fadeInUp: {
          from: {
            opacity: '0',
            transform: 'translateY(30px)',
          },
          to: {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        slideInLeft: {
          from: {
            opacity: '0',
            transform: 'translateX(-40px)',
          },
          to: {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
        slideInRight: {
          from: {
            opacity: '0',
            transform: 'translateX(40px)',
          },
          to: {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
        slideInDown: {
          from: {
            opacity: '0',
            transform: 'translateY(-30px)',
          },
          to: {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        'bounce-soft': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%, 100%': {
            boxShadow: '0 0 20px rgba(201, 166, 107, 0.5)',
          },
          '50%': {
            boxShadow: '0 0 30px rgba(201, 166, 107, 0.8)',
          },
        },
        tilt: {
          '0%, 100%': {
            transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg)',
          },
          '50%': {
            transform: 'perspective(1000px) rotateX(5deg) rotateY(5deg)',
          },
        },
        'flip-page': {
          '0%': {
            transform: 'rotateY(0deg)',
            opacity: '1',
          },
          '50%': {
            opacity: '0',
          },
          '100%': {
            transform: 'rotateY(180deg)',
            opacity: '1',
          },
        },
        'page-turn': {
          '0%': {
            transform: 'rotateY(0deg) translateZ(0)',
          },
          '100%': {
            transform: 'rotateY(90deg) translateZ(0)',
          },
        },
        'parallax-slow': {
          '0%': { transform: 'translateY(0px)' },
          '100%': { transform: 'translateY(50px)' },
        },
        'parallax-slower': {
          '0%': { transform: 'translateY(0px)' },
          '100%': { transform: 'translateY(80px)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        'float-slower': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-30px)' },
        },
        'pulse-glow': {
          '0%, 100%': {
            opacity: '0.6',
            boxShadow: '0 0 20px rgba(201, 166, 107, 0.4)',
          },
          '50%': {
            opacity: '1',
            boxShadow: '0 0 40px rgba(201, 166, 107, 0.8)',
          },
        },
        ripple: {
          '0%': {
            transform: 'scale(0)',
            opacity: '1',
          },
          '100%': {
            transform: 'scale(4)',
            opacity: '0',
          },
        },
        scribble: {
          '0%': {
            'stroke-dasharray': '100',
            'stroke-dashoffset': '100',
          },
          '100%': {
            'stroke-dasharray': '100',
            'stroke-dashoffset': '0',
          },
        },
        'highlight-sweep': {
          '0%': { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'rotate-slow': {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
      },
      transitionDuration: {
        '2000': '2000ms',
        '3000': '3000ms',
      },
      rotate: {
        '-2': '-2deg',
        '-1': '-1deg',
        '1': '1deg',
      },
    },
  },
  plugins: [],
}

export default config
