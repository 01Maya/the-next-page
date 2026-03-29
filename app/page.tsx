import { Navbar } from '@/components/navbar'
import { HeroSection } from '@/components/sections/hero'
import { AboutSection } from '@/components/sections/about'
import { BooksSection } from '@/components/sections/books'
import { TestimonialsSection } from '@/components/sections/testimonials'
import { VisitStoreSection } from '@/components/sections/visit-store'
import { FooterSection } from '@/components/sections/footer'

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <BooksSection />
      <TestimonialsSection />
      <VisitStoreSection />
      <FooterSection />
    </main>
  )
}
