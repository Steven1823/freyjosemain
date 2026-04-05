'use client'

import React, { useState } from "react"
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { CheckCircle, ChevronRight, GraduationCap, ClipboardList, Send, CreditCard, Bell } from 'lucide-react'
import Link from 'next/link'

export default function NewApplicationsPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const subject = `New Application - ${formData.course || 'Program Inquiry'} - ${formData.name}`
    const body = [
      'New student application from Freyjose website:',
      '',
      `Full Name: ${formData.name}`,
      `Email: ${formData.email}`,
      `Phone: ${formData.phone || 'Not provided'}`,
      `Selected Program: ${formData.course}`,
      '',
      'Career Goals / Message:',
      formData.message,
    ].join('\n')

    window.location.href = `mailto:info@freyjose.ac.ke?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    alert('Your email app will open now so you can send your application to info@freyjose.ac.ke.')
    setFormData({ name: '', email: '', phone: '', course: '', message: '' })
  }

  const applicationSteps = [
    {
      step: 1,
      icon: <GraduationCap size={28} />,
      title: 'Explore Programs',
      desc: 'Take some time to explore the various programs offered at Freyjose College. Our college caters to a wide range of disciplines, including Business Studies, Beauty Therapy, Hairdressing & Salon Management, ICT & Computer Science, Driving & Mechanical, and Hospitality & Tourism.',
    },
    {
      step: 2,
      icon: <ClipboardList size={28} />,
      title: 'Check Requirements',
      desc: 'Review the admission requirements for your chosen program. These may include specific academic qualifications, entry exams, or interviews. Ensure that you meet all the criteria to maximise your chances of successful admission.',
    },
    {
      step: 3,
      icon: <Send size={28} />,
      title: 'Submit Application',
      desc: 'Complete the online application form and submit all the required documents. Our admissions team will review your application and get back to you promptly. We encourage early applications to secure your place in your preferred program.',
    },
    {
      step: 4,
      icon: <CreditCard size={28} />,
      title: 'Application Fee',
      desc: 'Pay the application fee of KSH 1,000 as specified in the application process. This fee covers the administrative costs associated with processing your application. Details regarding payment methods will be provided in the application portal.',
    },
    {
      step: 5,
      icon: <Bell size={28} />,
      title: 'Notification',
      desc: 'Once your application has been reviewed, you will receive a formal notification of the admission decision. Successful applicants will be provided with further instructions on the enrollment process.',
    },
  ]

  const feeDetails = [
    {
      title: 'Tuition Fees',
      desc: 'The tuition fees for each program are clearly outlined in our fee structure. These fees cover all aspects of academic instruction, access to facilities, and student support services.',
    },
    {
      title: 'Payment Options',
      desc: 'We accept fee payments through various methods, including bank transfers, mobile money (M-Pesa), and other online payment platforms. Students can choose the option that suits them best based on their location and convenience.',
    },
    {
      title: 'Instalment Plans',
      desc: 'We understand the financial commitments of pursuing higher education. Freyjose College offers flexible instalment plans to help ease the payment process. Students can discuss available options with our finance department.',
    },
    {
      title: 'Scholarships & Financial Aid',
      desc: 'Freyjose College is committed to providing equal opportunities for all students. We offer scholarships and financial aid programs for academically talented and financially challenged students. Eligible candidates can apply during the admission process.',
    },
  ]

  const internationalDetails = [
    {
      title: 'Student Visas',
      desc: "Our international students' office will assist you with the student visa application process and any related documentation. We are here to guide you through the required steps to ensure a seamless visa application.",
    },
    {
      title: 'Orientation Program',
      desc: 'Freyjose College hosts an orientation program for international students upon arrival. This program introduces students to college life, the local culture, and the various support services available to them.',
    },
    {
      title: 'Accommodation Assistance',
      desc: 'If you require accommodation during your studies, we can assist you in finding suitable housing options. Our student services team will help you settle into your new home away from home.',
    },
    {
      title: 'Cultural Integration',
      desc: 'Freyjose College fosters a multicultural environment, celebrating the diversity of our international students. Our campus is a place where you can connect with peers from different backgrounds and cultures, and we encourage participation in cultural exchange programs and events.',
    },
  ]

  return (
    <main className="w-full">
      <Navbar />

      {/* Hero / Banner */}
      <section className="w-full bg-gradient-to-br from-purple-700 to-red-600 pt-44 pb-20 sm:pt-48 sm:pb-20 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-purple-200 text-sm mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight size={14} />
            <Link href="/admission" className="hover:text-white transition-colors">Admission</Link>
            <ChevronRight size={14} />
            <span className="text-white font-medium">How To Apply</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Apply to Freyjose Technical College in Ngong</h1>
          <p className="text-lg text-purple-100">Study ICT, Beauty, Business, Driving, or Hospitality. Your journey to a skilled career begins here in Ngong, Kajiado, Kenya.</p>
        </div>
      </section>

      {/* Course Intro */}
      <section className="w-full bg-purple-50 py-10 border-b border-purple-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gray-700 text-sm md:text-base leading-relaxed">
            <strong>Apply now to FREYJOSE Technical College in Ngong, Kajiado County, Kenya.</strong> Enroll in certificate programmes and diploma courses in ICT & Computer Studies, Beauty & Cosmetology, Business & Accounting, Driving & Mechanical, or Hospitality & Catering. We accept new students throughout the year with flexible intake dates designed for school leavers seeking practical vocational training.
          </p>
        </div>
      </section>

      {/* Quick Application Box (Top) */}
      <section className="w-full bg-white py-12 border-b border-purple-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="p-6 md:p-8 bg-gradient-to-br from-white to-purple-50 border-2 border-purple-200 shadow-sm">
            <h2 className="text-2xl md:text-3xl font-bold text-purple-700 mb-2">Quick Application Box</h2>
            <p className="text-gray-600 mb-6">
              Apply in under 2 minutes. Your application is sent directly to <strong>info@freyjose.ac.ke</strong> by email, not WhatsApp.
            </p>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  placeholder="Full Name *"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="border-2 border-purple-100"
                />
                <Input
                  type="email"
                  placeholder="Email Address *"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="border-2 border-purple-100"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  type="tel"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="border-2 border-purple-100"
                />
                <select
                  value={formData.course}
                  onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                  required
                  className="px-4 py-2 border-2 border-purple-100 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-300"
                >
                  <option value="">Select Program *</option>
                  <option value="ATD">Accounting Technicians Diploma (ATD)</option>
                  <option value="CPA">Certified Public Accountants (CPA)</option>
                  <option value="Business">Business Management Diploma</option>
                  <option value="Beauty">Cosmetology & Beauty Therapy</option>
                  <option value="Hairdressing">Hairdressing & Salon Management</option>
                  <option value="ICT">ICT & Computer Science</option>
                  <option value="Driving">Driving & Mechanical</option>
                  <option value="Hospitality">Hospitality & Tourism</option>
                </select>
              </div>
              <Textarea
                placeholder="Tell us your career goal and preferred intake..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="min-h-24 resize-none border-2 border-purple-100"
                required
              />
              <Button
                type="submit"
                className="w-full md:w-auto bg-red-600 hover:bg-red-700 text-white font-bold text-base md:text-lg px-8 py-3 rounded-lg"
              >
                Send Application to Email
              </Button>
            </form>
          </Card>
        </div>
      </section>

      {/* Welcome Message */}
      <section className="w-full bg-white py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-purple-700 mb-6">How To Apply</h2>
          <div className="space-y-5 text-gray-700 text-base leading-relaxed">
            <p>
              We are delighted that you decided to join us to pursue a course that will lead you to your dream career.
              We have established a tradition of excellence and high academic standards and will work endlessly to
              retain our position as your ideal training destination.
            </p>
            <p>
              Our College is dedicated to providing our students with a well-rounded training experience coupled with
              character, education, and exposure to technologies in order to prepare students who are confident,
              caring, and responsible citizens with the capacity to compete globally.
            </p>
            <p>
              To parents — we assure you that Freyjose College is a vibrant and engaging community of lecturers and
              students. We believe that your involvement is integral to the academic success of your son or daughter.
              To this end, we encourage you to visit the College, meet your child&apos;s lecturers, and have a feel of what
              Freyjose College offers.
            </p>
          </div>
        </div>
      </section>

      {/* The Application Process */}
      <section className="w-full bg-gray-50 py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-purple-700 mb-10 text-center">The Application Process</h2>
          <div className="space-y-6">
            {applicationSteps.map((item) => (
              <Card key={item.step} className="p-6 border-l-4 border-red-500 bg-white shadow-sm flex gap-5 items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                  {item.step}
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-red-500">{item.icon}</span>
                    <h3 className="text-xl font-semibold text-red-600">{item.title}</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="w-full bg-white py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-purple-700 mb-8 text-center">Submit Your Application</h2>
          <Card className="p-8 bg-white border-2 border-purple-200">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  placeholder="Full Name *"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="border-2 border-purple-100"
                />
                <Input
                  type="email"
                  placeholder="Email Address *"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="border-2 border-purple-100"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  type="tel"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="border-2 border-purple-100"
                />
                <select
                  value={formData.course}
                  onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                  required
                  className="px-4 py-2 border-2 border-purple-100 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-300"
                >
                  <option value="">Select Program *</option>
                  <option value="ATD">Accounting Technicians Diploma (ATD)</option>
                  <option value="CPA">Certified Public Accountants (CPA)</option>
                  <option value="Business">Business Management Diploma</option>
                  <option value="Beauty">Cosmetology & Beauty Therapy</option>
                  <option value="Hairdressing">Hairdressing & Salon Management</option>
                  <option value="ICT">ICT & Computer Science</option>
                  <option value="Driving">Driving & Mechanical</option>
                  <option value="Hospitality">Hospitality & Tourism</option>
                </select>
              </div>
              <Textarea
                placeholder="Tell us why you want to join Freyjose College and your career goals..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="min-h-32 resize-none border-2 border-purple-100"
                required
              />
              <Button
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 text-white font-bold text-lg py-4 rounded-lg"
              >
                Submit Application
              </Button>
            </form>
          </Card>
        </div>
      </section>

      {/* Fee Payment */}
      <section className="w-full bg-purple-50 py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-purple-700 mb-4">Fee Payment</h2>
          <p className="text-gray-600 mb-10 leading-relaxed">
            At Freyjose College, we offer competitive and transparent fee structures to ensure affordability and
            accessibility for all students. Our fee payment process is seamless, and we provide various payment
            options for your convenience.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {feeDetails.map((item, idx) => (
              <Card key={idx} className="p-6 bg-white border-t-4 border-purple-500 shadow-sm">
                <h3 className="text-lg font-bold text-purple-700 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{item.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* International Students */}
      <section className="w-full bg-white py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-red-600 mb-4">International Students</h2>
          <p className="text-gray-600 mb-10 leading-relaxed">
            At Freyjose College, we welcome students from all over the world to join our diverse learning community.
            For international students seeking to study with us, we provide the necessary support to make your
            transition smooth and enjoyable.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {internationalDetails.map((item, idx) => (
              <div key={idx} className="flex gap-4 items-start">
                <CheckCircle className="text-red-500 flex-shrink-0 mt-1" size={22} />
                <div>
                  <h3 className="font-bold text-gray-800 mb-1">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full bg-gradient-to-br from-purple-700 to-red-600 py-16 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h3 className="text-3xl font-bold text-white mb-4">Ready to Take the Next Step?</h3>
          <p className="text-purple-100 text-lg mb-8">
            Submit your application above by email or call us today. Application fee is KSH 1,000.
          </p>
          <a href="tel:+254715505526">
            <Button className="px-10 py-4 bg-white text-purple-700 hover:bg-purple-50 font-bold text-lg rounded-full shadow-lg">
              Call Us: +254 715 505 526
            </Button>
          </a>
        </div>
      </section>

      <Footer />
    </main>
  )
}
