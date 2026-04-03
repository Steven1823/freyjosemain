import { Navbar } from '@/components/navbar'
import { CoursesSection } from '@/components/courses-section'
import { Footer } from '@/components/footer'

export default function CoursesPage() {
  return (
    <main className="w-full">
      <Navbar />
      <div className="pt-44 sm:pt-48 md:pt-36">
        <CoursesSection />
      </div>
      <Footer />
    </main>
  )
}
