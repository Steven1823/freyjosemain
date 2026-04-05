'use client'

import React from "react"

import { useState } from 'react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Phone, Mail, MapPin, MessageSquare } from 'lucide-react'

const courseOptions = [
  'Beauty Therapy',
  'Hairdressing & Salon Management',
  'Cosmetology / Nail Technology',
  'Web Development',
  'ICT & Computer Studies',
  'Graphic Design / Digital Marketing',
  'Business Management',
  'Accounting (ATD / CPA)',
  'Entrepreneurship',
  'Motor Vehicle Mechanics',
  'Welding & Fabrication',
  'HGV Driving License',
  'Hotel Management',
  'Culinary Arts / Cooking',
  'Event Management',
  'Other / Not Sure Yet',
]

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const msg = encodeURIComponent(
      `Hello FREYJOSE College! My name is ${formData.name}.\n` +
      `📱 Phone: ${formData.phone}\n` +
      `📧 Email: ${formData.email}\n` +
      `📚 Interested in: ${formData.course || 'Not specified'}\n` +
      `💬 Message: ${formData.message}`
    )
    window.open(`https://wa.me/254715505526?text=${msg}`, '_blank')
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 5000)
    setFormData({ name: '', email: '', phone: '', course: '', message: '' })
  }

  return (
    <section id="admission" className="w-full py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-6 mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-purple-600 text-balance">
            Admissions & Application Process
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto text-balance">
            Begin your journey with FREYJOSE. Our simple and transparent admission process makes it easy to get started.
          </p>
        </div>

        {/* Admission Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <Card className="p-6 bg-white border-border shadow-sm text-center hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">1</div>
            <h3 className="font-semibold text-foreground mb-2">Choose Course</h3>
            <p className="text-sm text-foreground/70">Select from our wide range of professional programs matching your interests.</p>
          </Card>
          <Card className="p-6 bg-white border-border shadow-sm text-center hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">2</div>
            <h3 className="font-semibold text-foreground mb-2">Submit Application</h3>
            <p className="text-sm text-foreground/70">Complete the application form with your basic information and qualifications.</p>
          </Card>
          <Card className="p-6 bg-white border-border shadow-sm text-center hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">3</div>
            <h3 className="font-semibold text-foreground mb-2">Get Admitted</h3>
            <p className="text-sm text-foreground/70">Receive your admission confirmation and enrollment details via email.</p>
          </Card>
          <Card className="p-6 bg-white border-border shadow-sm text-center hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">4</div>
            <h3 className="font-semibold text-foreground mb-2">Start Learning</h3>
            <p className="text-sm text-foreground/70">Join our classes and begin your transformation with expert instructors.</p>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="space-y-4">
            <Card className="p-5 bg-white border-border shadow-sm">
              <div className="flex gap-4 items-start">
                <div className="w-11 h-11 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="text-purple-600" size={22} />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Call Us</h3>
                  <a href="tel:+254715505526" className="block text-foreground/70 text-sm hover:text-purple-600 transition-colors">0715 505 526</a>
                  <a href="tel:+254732010366" className="block text-foreground/70 text-sm hover:text-purple-600 transition-colors">0732 010 366</a>
                </div>
              </div>
            </Card>

            <Card className="p-5 bg-white border-border shadow-sm">
              <div className="flex gap-4 items-start">
                <div className="w-11 h-11 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="text-purple-600" size={22} />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Email Us</h3>
                  <a href="mailto:info@freyjose.ac.ke" className="text-foreground/70 text-sm hover:text-purple-600 transition-colors break-all">
                    info@freyjose.ac.ke
                  </a>
                </div>
              </div>
            </Card>

            <Card className="p-5 bg-white border-border shadow-sm">
              <div className="flex gap-4 items-start">
                <div className="w-11 h-11 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-purple-600" size={22} />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Find Us</h3>
                  <p className="text-foreground/70 text-sm">Ngong Town, Kajiado County</p>
                  <p className="text-foreground/70 text-sm">Kenya</p>
                  <a
                    href="https://maps.google.com/?q=Ngong+Town+Kajiado+Kenya"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-600 text-xs font-semibold mt-1 inline-block hover:underline"
                  >
                    Get Directions →
                  </a>
                </div>
              </div>
            </Card>

            {/* Google Maps Embed */}
            <div className="rounded-xl overflow-hidden border border-purple-100 shadow-sm">
              <iframe
                title="FREYJOSE College Ngong Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15963.847383977338!2d36.64!3d-1.363!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f094d783cbaeb%3A0x9e7e0dad1f2a7cc2!2sNgong%2C%20Kajiado%20County!5e0!3m2!1sen!2ske!4v1710000000000"
                width="100%"
                height="180"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="block"
              />
            </div>

            <div className="flex gap-3 pt-1">
              <a href="https://wa.me/254715505526" target="_blank" rel="noopener noreferrer" className="flex-1">
                <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                  <MessageSquare size={18} className="mr-2" />
                  WhatsApp
                </Button>
              </a>
              <a href="tel:+254715505526" className="flex-1">
                <Button variant="outline" className="w-full bg-transparent border-purple-600 text-purple-600 hover:bg-purple-50">
                  <Phone size={18} className="mr-2" />
                  Call Now
                </Button>
              </a>
            </div>
          </div>

          <Card className="lg:col-span-2 p-8 bg-white border-border shadow-sm">
            <h3 className="text-2xl font-bold text-purple-600 mb-2">Apply Now</h3>
            <p className="text-sm text-gray-500 mb-6">Fill in your details and we&apos;ll reach out via WhatsApp instantly.</p>

            {submitted && (
              <div className="mb-4 p-4 bg-green-50 border border-green-200 text-green-800 rounded-lg text-sm font-medium">
                ✅ Application sent! Check WhatsApp — we&apos;ll reply shortly.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input
                  placeholder="Your Full Name *"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
                <Input
                  type="tel"
                  placeholder="Phone Number (WhatsApp) *"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                />
              </div>

              <Input
                type="email"
                placeholder="Email Address (optional)"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />

              <select
                value={formData.course}
                onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground"
                required
              >
                <option value="">Select Course You&apos;re Interested In *</option>
                {courseOptions.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>

              <Textarea
                placeholder="Any questions or additional information? (optional)"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="min-h-24 resize-none"
              />

              <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold" size="lg">
                <MessageSquare size={18} className="mr-2" />
                Send Application via WhatsApp
              </Button>
              <p className="text-xs text-gray-400 text-center">
                Clicking submit opens WhatsApp with your details pre-filled. Current intake: March 2026.
              </p>
            </form>
          </Card>
        </div>
      </div>
    </section>
  )
}
