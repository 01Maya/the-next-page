'use client'

import { useState, useEffect, useRef } from 'react'
import { X } from 'lucide-react'
import { useScrollObserver } from '@/hooks/use-scroll-observer'

const BOOKS_DATA = [
  {
    id: 1,
    title: 'The Midnight Library',
    author: 'Matt Haig',
    genre: 'Fiction',
    description: 'A profound novel about infinite possibilities and the chance to explore alternate versions of your life.',
    color: 'bg-blue-600',
    tag: 'Best Seller',
  },
  {
    id: 2,
    title: 'The Silent Patient',
    author: 'Alex Michaelides',
    genre: 'Mystery',
    description: 'A gripping psychological thriller about a woman who stops speaking after a shocking crime.',
    color: 'bg-purple-600',
    tag: 'Award Winner',
  },
  {
    id: 3,
    title: 'Dune',
    author: 'Frank Herbert',
    genre: 'Fantasy',
    description: 'An epic science fiction masterpiece set on a desert planet with intricate political intrigue.',
    color: 'bg-amber-600',
    tag: 'Classic',
  },
  {
    id: 4,
    title: 'Atomic Habits',
    author: 'James Clear',
    genre: 'Self Development',
    description: 'A practical guide to building powerful habits and breaking free from destructive ones.',
    color: 'bg-orange-600',
    tag: 'Best Seller',
  },
  {
    id: 5,
    title: 'Educated',
    author: 'Tara Westover',
    genre: 'Biography',
    description: 'A powerful memoir about a woman\'s journey from an isolated mountain home to Cambridge University.',
    color: 'bg-red-600',
    tag: 'New York Times Bestseller',
  },
  {
    id: 6,
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    genre: 'Fiction',
    description: 'A timeless classic exploring the American Dream and the complexities of wealth and love.',
    color: 'bg-green-600',
    tag: 'Classic',
  },
  {
    id: 7,
    title: 'Sherlock Holmes Complete',
    author: 'Arthur Conan Doyle',
    genre: 'Mystery',
    description: 'A collection of masterful detective stories featuring the world\'s most famous investigator.',
    color: 'bg-slate-600',
    tag: 'Timeless Collection',
  },
  {
    id: 8,
    title: 'The Song of Achilles',
    author: 'Madeline Miller',
    genre: 'Fantasy',
    description: 'A beautiful retelling of the Trojan War from an intimate perspective.',
    color: 'bg-pink-600',
    tag: 'Award Winner',
  },
]

const GENRES = ['All', 'Fiction', 'Mystery', 'Fantasy', 'Science', 'History', 'Self Development', 'Biography', 'Poetry']

export function BooksSection() {
  const [selectedGenre, setSelectedGenre] = useState('All')
  const [selectedBook, setSelectedBook] = useState<typeof BOOKS_DATA[0] | null>(null)
  const { ref: sectionRef, isVisible } = useScrollObserver()
  const booksRef = useRef<HTMLDivElement[]>([])

  useEffect(() => {
    if (!isVisible) return

    booksRef.current.forEach((book, i) => {
      setTimeout(() => {
        book?.classList.add('animate-bounce-soft')
      }, i * 100)
    })
  }, [isVisible])

  const filteredBooks = selectedGenre === 'All' 
    ? BOOKS_DATA 
    : BOOKS_DATA.filter(book => book.genre === selectedGenre)

  return (
    <section
      id="books"
      ref={sectionRef}
      className="relative w-full py-20 md:py-32 px-4 md:px-8 lg:px-12 bg-gradient-to-b from-muted via-background to-card"
    >
      {/* Wooden texture background */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full" style={{
          backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(107, 79, 59, 0.1) 2px, rgba(107, 79, 59, 0.1) 4px)',
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="font-caveat text-5xl md:text-6xl text-coffee mb-4 animate-slide-in-up">
            Our Bookshelf
          </h2>
          <p className="font-playfair text-accent text-lg animate-slide-in-up" style={{ animationDelay: '0.2s' }}>
            Explore our carefully curated collection
          </p>
        </div>

        {/* Genre Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {GENRES.map((genre) => (
            <button
              key={genre}
              onClick={() => {
                setSelectedGenre(genre)
                setSelectedBook(null)
              }}
              className={`px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 ${
                selectedGenre === genre
                  ? 'bg-coffee text-cream shadow-lg scale-105'
                  : 'bg-muted text-navy hover:bg-accent hover:text-navy'
              }`}
            >
              {genre}
            </button>
          ))}
        </div>

        {/* Books Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 mb-12">
          {filteredBooks.map((book, i) => (
            <div
              key={book.id}
              ref={(el) => {
                if (el) booksRef.current[i] = el
              }}
              className="group cursor-pointer perspective animate-fade-in-up"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div
                onClick={() => setSelectedBook(book)}
                className={`relative h-64 md:h-80 rounded-lg overflow-hidden shadow-lg hover-lift transition-all duration-500 ${book.color} hover:shadow-2xl transform hover:-rotate-1`}
              >
                {/* Book Spine */}
                <div className="w-full h-full flex flex-col items-center justify-center p-4 text-cream relative overflow-hidden group-hover:from-opacity-80">
                  <div className="absolute inset-0 opacity-20">
                    <div className="w-full h-full" style={{
                      backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 10px, rgba(255, 255, 255, 0.1) 10px, rgba(255, 255, 255, 0.1) 20px)',
                    }} />
                  </div>

                  {/* Book Content */}
                  <div className="relative z-10 text-center">
                    <h3 className="font-playfair text-xl font-extrabold mb-2 line-clamp-3 group-hover:scale-110 transition-transform text-white">
                      {book.title}
                    </h3>
                    <p className="font-sans text-xs font-bold mb-2 text-white">
                      {book.author}
                    </p>
                    <p className="font-sans text-xs font-bold text-white">
                      {book.genre}
                    </p>
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex flex-col items-center justify-end p-4">
                    <span className="text-cream font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                      View Details
                    </span>
                  </div>
                </div>

                {/* Book Edge Shadow */}
                <div className="absolute right-0 top-0 w-1 h-full bg-black/20 group-hover:w-2 transition-all" />
              </div>
            </div>
          ))}
        </div>

        {/* Book Detail Modal */}
        {selectedBook && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
            <div className="bg-white rounded-lg max-w-2xl w-full animate-fade-in-up page-shadow paper-texture">
              {/* Close Button */}
              <button
                onClick={() => setSelectedBook(null)}
                className="absolute top-6 right-6 p-2 hover:bg-muted rounded-lg transition-all duration-300 z-10"
              >
                <X className="text-coffee" size={24} />
              </button>

              <div className="flex flex-col md:flex-row gap-8 p-8">
                {/* Book Cover */}
                <div className={`flex-shrink-0 w-40 h-56 rounded-lg ${selectedBook.color} book-shadow flex items-center justify-center text-cream p-4`}>
                  <div className="text-center">
                    <p className="font-playfair text-lg font-bold">{selectedBook.title}</p>
                    <p className="font-sans text-sm mt-2">{selectedBook.author}</p>
                  </div>
                </div>

                {/* Book Details */}
                <div className="flex-1">
                  <h2 className="font-caveat text-4xl text-coffee mb-2">
                    {selectedBook.title}
                  </h2>
                  <p className="font-playfair text-accent text-lg mb-4">
                    by {selectedBook.author}
                  </p>

                  <div className="mb-6">
                    <span className="inline-block px-4 py-2 bg-muted text-coffee rounded-lg font-medium">
                      {selectedBook.genre}
                    </span>
                    {selectedBook.tag && (
                      <span className="inline-block ml-2 px-4 py-2 bg-accent text-navy rounded-lg font-medium">
                        {selectedBook.tag}
                      </span>
                    )}
                  </div>

                  <p className="font-playfair text-navy leading-relaxed mb-6">
                    {selectedBook.description}
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <button
                      onClick={() => setSelectedBook(null)}
                      className="w-full px-6 py-3 border-2 border-coffee text-coffee rounded-lg font-medium hover:bg-coffee hover:text-cream transition-all"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
