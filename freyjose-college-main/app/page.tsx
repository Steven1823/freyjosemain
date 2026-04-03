import { Navbar } from '@/components/navbar'
import { HeroSlider } from '@/components/hero-slider'
import { InfoStrip } from '@/components/info-strip'
import { PartnersStrip } from '@/components/partners-strip'
import { MissionVisionSection } from '@/components/mission-vision-section'
import { ComprehensiveCoursesSection } from '@/components/comprehensive-courses-section'
import { AboutSection } from '@/components/about-section'
import { StudentLifeSection } from '@/components/student-life-section'
import { NewsSection } from '@/components/news-section'
import { ContactSection } from '@/components/contact-section'
import { CampusPhotosSection } from '@/components/campus-photos-section'
import { TestimonialsSection } from '@/components/testimonials-section'
import { Footer } from '@/components/footer'

export default function Page() {
  return (
    <main className="w-full">
      <Navbar />
      <HeroSlider />
      <section className="w-full bg-white py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4">
            Freyjose Technical College in Ngong, Kenya
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Freyjose Technical College is a modern technical college in Ngong, Kajiado County, Kenya, offering
            practical and career-focused training for students finishing secondary school. If you are looking for
            courses for school leavers, we provide flexible certificate programmes and diploma pathways designed to
            build real workplace skills.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Our popular courses include ICT and Computer Studies, Business and Accounting, Beauty and Cosmetology,
            Driving and Mechanical, and Hospitality and Catering. Explore our programmes, compare your options,
            and apply to start your future with confidence.
          </p>
        </div>
      </section>
      <NewsSection />
      <TestimonialsSection />
      <InfoStrip />
      <PartnersStrip />
      <MissionVisionSection />
      <ComprehensiveCoursesSection />
      <AboutSection />
      <CampusPhotosSection />
      <StudentLifeSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
