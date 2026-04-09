import type { Metadata } from 'next'
import Link from 'next/link'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'How to Apply | Freyjose Technical College Ngong, Kenya',
  description:
    'Learn how to apply to Freyjose Technical College in Ngong, Kajiado. View admission process, requirements, and start your online application.',
  keywords: [
    'how to apply Freyjose',
    'Freyjose admission process',
    'technical college application Kenya',
    'admission requirements Ngong',
    'courses for school leavers Kenya',
  ],
  alternates: {
    canonical: 'https://freyjose.ac.ke/admission',
  },
  openGraph: {
    title: 'How to Apply | Freyjose Technical College',
    description:
      'Get the full admission guide, requirements, and application steps for Freyjose Technical College in Ngong.',
    url: 'https://freyjose.ac.ke/admission',
    siteName: 'FREYJOSE Technical Training College',
    type: 'website',
  },
}

const admissionLinks = [
  {
    title: 'New Applications',
    description: 'Start your online admission form for ICT, Business, Beauty, Driving & Mechanical, or Hospitality.',
    href: '/admission/new-applications',
  },
  {
    title: 'Admission Process',
    description: 'Understand every step from course selection to document verification and enrollment.',
    href: '/admission/process',
  },
  {
    title: 'Admission Requirements',
    description: 'Review required documents, qualifications, and contacts for successful admission.',
    href: '/admission/requirements',
  },
]

export default function AdmissionPage() {
  return (
    <main className="w-full">
      <Navbar />

      <section className="w-full bg-gradient-to-b from-red-50 to-white pt-36 pb-16 sm:pt-40 sm:pb-20 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-red-700 mb-4">How to Apply at Freyjose</h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Join Freyjose Technical College in Ngong, Kajiado County. We offer practical diploma and certificate programmes
            for school leavers in ICT, Beauty, Business, Driving & Mechanical, and Hospitality.
          </p>
        </div>
      </section>

      <section className="w-full bg-white py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-red-700 mb-6">Admission Links</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {admissionLinks.map((item) => (
              <Card key={item.href} className="p-6 border-red-100">
                <h3 className="text-xl font-semibold text-red-800 mb-2">{item.title}</h3>
                <p className="text-gray-700 mb-4">{item.description}</p>
                <Link href={item.href} className="text-red-700 font-semibold hover:text-red-800">
                  Open page
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-red-700 py-14 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Start Your Application Today</h2>
          <p className="text-red-100 mb-6">
            Intake is ongoing. Apply online or contact admissions at info@freyjose.ac.ke.
          </p>
          <Link href="/admission/new-applications">
            <Button className="bg-white text-red-700 hover:bg-red-50 font-semibold px-8 py-3">
              Apply Online
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
