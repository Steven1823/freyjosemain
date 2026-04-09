'use client'

import React, { useState } from 'react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { ChevronRight, Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react'
import Link from 'next/link'

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
    setForm({ name: '', email: '', phone: '', subject: '', message: '' })
  }

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      lines: ['+254 715 505 526', '+254 722 000 000'],
      color: 'blue',
    },
    {
      icon: Mail,
      title: 'Email',
      lines: ['info@freyjose.ac.ke'],
      color: 'purple',
    },
    {
      icon: MapPin,
      title: 'Location',
      lines: ['Ngong Town, Kajiado County', 'Nairobi Metropolitan, Kenya'],
      color: 'red',
    },
    {
      icon: Clock,
      title: 'Office Hours',
      lines: ['Mon – Fri: 8:00 AM – 6:00 PM', 'Sat: 9:00 AM – 1:00 PM'],
      color: 'green',
    },
  ]

  const colorMap: Record<string, string> = {
    blue: 'bg-blue-100 text-blue-600',
    purple: 'bg-purple-100 text-purple-600',
    red: 'bg-red-100 text-red-600',
    green: 'bg-green-100 text-green-600',
  }

  return (
    <main className="w-full">
      <Navbar />

      {/* Hero */}
      <section className="w-full bg-gradient-to-br from-purple-700 to-red-600 pt-36 pb-16 sm:pt-40 sm:pb-20 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-purple-200 text-sm mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight size={14} />
            <span className="text-white font-medium">Contact Us</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Contact Us</h1>
          <p className="text-lg text-purple-100 max-w-2xl">
            We&apos;re here to help. Reach out to us for admissions enquiries, program information, or any other questions.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="w-full bg-gray-50 py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
            {contactInfo.map((info, i) => {
              const Icon = info.icon
              return (
                <Card key={i} className="p-6 bg-white shadow-sm text-center hover:shadow-md transition-shadow">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4 ${colorMap[info.color]}`}>
                    <Icon size={24} />
                  </div>
                  <h3 className="font-bold text-gray-800 mb-2">{info.title}</h3>
                  {info.lines.map((line, j) => (
                    <p key={j} className="text-gray-600 text-sm">{line}</p>
                  ))}
                </Card>
              )
            })}
          </div>

          {/* Contact Form + WhatsApp */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Form */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-purple-700 mb-6">Send Us a Message</h2>
              {sent ? (
                <Card className="p-8 bg-green-50 border-green-200 text-center">
                  <div className="text-green-600 text-5xl mb-4">✓</div>
                  <h3 className="text-xl font-bold text-green-700 mb-2">Message Sent!</h3>
                  <p className="text-gray-600">Thank you for reaching out. We will get back to you within 24 hours.</p>
                  <Button onClick={() => setSent(false)} variant="outline" className="mt-6">Send Another Message</Button>
                </Card>
              ) : (
                <Card className="p-6 bg-white border-2 border-purple-100 shadow-sm">
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <Input
                        placeholder="Your Full Name *"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        required
                        className="border-purple-100 focus:border-purple-400"
                      />
                      <Input
                        type="email"
                        placeholder="Email Address *"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        required
                        className="border-purple-100 focus:border-purple-400"
                      />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <Input
                        type="tel"
                        placeholder="Phone Number"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="border-purple-100 focus:border-purple-400"
                      />
                      <Input
                        placeholder="Subject *"
                        value={form.subject}
                        onChange={(e) => setForm({ ...form, subject: e.target.value })}
                        required
                        className="border-purple-100 focus:border-purple-400"
                      />
                    </div>
                    <Textarea
                      placeholder="Your message..."
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      required
                      className="min-h-32 resize-none border-purple-100 focus:border-purple-400"
                    />
                    <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 rounded-lg">
                      Send Message
                    </Button>
                  </form>
                </Card>
              )}
            </div>

            {/* Quick Contact */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-purple-700 mb-2">Quick Contact</h2>
              <Card className="p-5 bg-green-50 border-green-200 shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <MessageCircle size={24} className="text-green-600" />
                  <h3 className="font-bold text-green-700">WhatsApp Us</h3>
                </div>
                <p className="text-gray-600 text-sm mb-4">Get a fast response by messaging us on WhatsApp during office hours.</p>
                <a
                  href="https://wa.me/254715505526?text=Hello%2C%20I%20would%20like%20to%20inquire%20about%20FREYJOSE%20College."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="w-full bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg">
                    Chat on WhatsApp
                  </Button>
                </a>
              </Card>

              <Card className="p-5 bg-blue-50 border-blue-200 shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <Phone size={24} className="text-blue-600" />
                  <h3 className="font-bold text-blue-700">Call Us Directly</h3>
                </div>
                <p className="text-gray-600 text-sm mb-4">Speak to our admissions team immediately.</p>
                <a href="tel:+254715505526">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg">
                    +254 715 505 526
                  </Button>
                </a>
              </Card>

              <Card className="p-5 bg-purple-50 border-purple-200 shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <MapPin size={24} className="text-purple-600" />
                  <h3 className="font-bold text-purple-700">Visit Us</h3>
                </div>
                <p className="text-gray-600 text-sm">
                  Ngong Town, Kajiado County<br />
                  Near Ngong Town Market<br />
                  Mon – Fri: 8AM – 6PM
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
