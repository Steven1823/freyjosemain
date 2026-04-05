import type { Metadata } from 'next'
import Link from 'next/link'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'About Freyjose Technical College | Ngong, Kajiado, Kenya',
  description:
    'Learn about Freyjose Technical College in Ngong, Kajiado County. Explore our vision, campus life, events, and graduation highlights.',
  keywords: [
    'about Freyjose Technical College',
    'technical college Ngong Kenya',
    'Freyjose mission and vision',
    'college in Kajiado County',
  ],
  alternates: {
    canonical: 'https://freyjose.ac.ke/about',
  },
  openGraph: {
    title: 'About Freyjose Technical College',
    description:
      'Discover the story, vision, leadership, and student experience at Freyjose Technical College in Ngong, Kenya.',
    url: 'https://freyjose.ac.ke/about',
    siteName: 'FREYJOSE Technical Training College',
    type: 'website',
  },
}

const aboutLinks = [
  {
    title: 'Vision & Mission',
    description: 'See our mission, values, and education philosophy for school leavers and career-ready training.',
    href: '/about/vision',
  },
  {
    title: 'Campus Life',
    description: 'Explore student life, learning spaces, and practical training environment.',
    href: '/about/campus-life',
  },
  {
    title: 'College Events',
    description: 'Stay updated on open days, skills expos, and community learning events.',
    href: '/about/events',
  },
  {
    title: 'Graduation Highlights',
    description: 'View graduation moments and success stories from Freyjose graduates.',
    href: '/about/graduation',
  },
]

export default function AboutPage() {
  return (
    <main className="w-full">
      <Navbar />

      <section className="w-full bg-gradient-to-b from-blue-50 to-white pt-44 pb-20 sm:pt-48 sm:pb-20 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">About Freyjose Technical College</h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Freyjose Technical College is a career-focused training institution in Ngong, Kajiado County, Kenya.
            We prepare school leavers with practical skills in ICT, Business, Beauty, Driving & Mechanical, and Hospitality.
          </p>
        </div>
      </section>

      <section className="w-full bg-white py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-6">Explore Freyjose</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {aboutLinks.map((item) => (
              <Card key={item.href} className="p-6 border-blue-100">
                <h3 className="text-xl font-semibold text-blue-900 mb-2">{item.title}</h3>
                <p className="text-gray-700 mb-4">{item.description}</p>
                <Link href={item.href} className="text-blue-700 font-semibold hover:text-blue-800">
                  Read more
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-blue-900 py-14 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready to Join Freyjose in Ngong?</h2>
          <p className="text-blue-100 mb-6">
            Start your application and choose a practical programme designed for employment and entrepreneurship.
          </p>
          <Link href="/admission/new-applications">
            <Button className="bg-white text-blue-900 hover:bg-blue-50 font-semibold px-8 py-3">
              Apply Now
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
