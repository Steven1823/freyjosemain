'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Menu, X, Phone, Mail, ChevronRight, Facebook, Instagram, Linkedin } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false)
  const [admissionDropdownOpen, setAdmissionDropdownOpen] = useState(false)
  const [academicsDropdownOpen, setAcademicsDropdownOpen] = useState(false)
  const [faqsDropdownOpen, setFaqsDropdownOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''

    const onResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false)
      }
    }

    window.addEventListener('resize', onResize)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('resize', onResize)
    }
  }, [isOpen])

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about/vision', hasDropdown: true },
    { label: 'Admission', href: '/admission/new-applications', hasDropdown: true },
    { label: 'Courses Offered', href: '/courses' },
    { label: 'Academics', href: '/academics', hasDropdown: true },
    { label: 'FAQs', href: '/faqs', hasDropdown: true },
    { label: 'Student Life', href: '/student-life' },
    { label: 'Graduation', href: '/graduation' },
    { label: 'Contact Us', href: '/contact' },
  ]

  const aboutDropdownItems = [
    { label: 'Our Vision & Mission', href: '/about/vision' },
    { label: 'Events', href: '/about/events' },
    { label: 'Campus Life', href: '/about/campus-life' },
    { label: 'Graduation', href: '/about/graduation' },
  ]

  const admissionDropdownItems = [
    { label: 'New Applications', href: '/admission/new-applications' },
    { label: 'Admission Process', href: '/admission/process' },
    { label: 'Requirements & FAQs', href: '/admission/requirements' },
  ]

  const academicsDropdownItems = [
    { label: 'Beauty & Cosmetology', href: '/academics/beauty-cosmetology' },
    { label: 'ICT & Computer Studies', href: '/academics/ict' },
    { label: 'Business & Accounting', href: '/academics/business-accounting' },
    { label: 'Driving & Mechanical', href: '/academics/driving-mechanical' },
    { label: 'Hospitality & Catering', href: '/academics/hospitality' },
    { label: 'All Programs', href: '/academics' },
  ]

  const faqsDropdownItems = [
    { label: 'All FAQs', href: '/faqs' },
    { label: 'Beauty FAQs', href: '/faqs/beauty' },
    { label: 'Business FAQs', href: '/faqs/business' },
    { label: 'Driving FAQs', href: '/faqs/driving' },
    { label: 'Hospitality FAQs', href: '/faqs/hospitality' },
    { label: 'ICT FAQs', href: '/faqs/ict' },
  ]

  const topQuickLinks = [
    { label: 'Student Portal', href: '#' },
    { label: 'Staff Portal', href: '#' },
    { label: 'E-Learning', href: '#' },
    { label: 'E-Revision', href: '#' },
  ]

  const topSocialLinks = [
    { label: 'Facebook', href: 'https://www.facebook.com/FreyjoseCollege', icon: Facebook },
    { label: 'Instagram', href: '#', icon: Instagram },
    { label: 'LinkedIn', href: '#', icon: Linkedin },
  ]

  return (
    <>
      {/* Main Navigation - Simple Clean Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-lg border-b-4 border-blue-900">
        {/* Top Utility Bar */}
        <div className="bg-slate-900 text-slate-100 border-b border-slate-700">
          <div className="mx-auto flex max-w-[1600px] items-center justify-between gap-3 px-4 py-2 text-xs sm:px-6">
            <div className="flex min-w-0 items-center gap-3 sm:gap-4">
              <span className="hidden text-white/80 font-medium lg:inline">Any questions?</span>
              <a href="tel:+254715505526" className="inline-flex items-center gap-1.5 hover:text-white transition-colors whitespace-nowrap">
                <Phone size={13} />
                <span>0715 505 526</span>
              </a>
              <a href="mailto:info@freyjose.ac.ke" className="hidden items-center gap-1.5 hover:text-white transition-colors sm:inline-flex whitespace-nowrap">
                <Mail size={13} />
                <span>info@freyjose.ac.ke</span>
              </a>
            </div>

            <div className="hidden lg:flex items-center gap-4 text-white/75">
              {topQuickLinks.map((item) => (
                <a key={item.label} href={item.href} className="hover:text-white transition-colors whitespace-nowrap">
                  {item.label}
                </a>
              ))}
            </div>

            <div className="hidden sm:flex items-center gap-1.5">
              <span className="hidden sm:inline text-[11px] text-white/60 mr-1">Follow us</span>
              {topSocialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                  >
                    <Icon size={13} />
                  </a>
                )
              })}
            </div>
          </div>
        </div>

        {/* Red Announcement Strip */}
        <div className="bg-white text-slate-900 px-4 py-2 text-center text-sm font-medium flex flex-wrap items-center justify-center gap-2 md:gap-4 border-b border-slate-200">
          <span className="text-xs sm:text-sm">
            March 2026 Intake in progress.
            <a href="tel:+254715505526" className="underline ml-1 hover:text-slate-700">0715 505 526</a>
          </span>
          <a
            href="/admission/new-applications"
            className="bg-slate-900 text-white font-medium px-3 py-1 rounded-full text-xs sm:text-sm hover:bg-slate-800 transition-colors shrink-0"
          >
            Apply Now
          </a>
        </div>
        <div className="w-full">
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-3 px-3 lg:px-4 py-3 max-w-[1600px] mx-auto">
            {/* Logo */}
            <a href="/" className="flex items-center flex-shrink-0 group">
              <Image
                src="/images/freyjose-logo.jpg"
                alt="FREYJOSE Technical Training College Logo"
                width={320}
                height={128}
                priority
                className="h-12 lg:h-14 xl:h-16 w-auto"
              />
            </a>

            {/* Navigation Items */}
            <div className="flex min-w-0 flex-1 items-center justify-center gap-1 overflow-hidden">
              {navItems.map((item) => (
                <div key={item.label} className="relative group flex-shrink-0">
                  {item.hasDropdown ? (
                    <button
                      onMouseEnter={() => {
                        if (item.label === 'About Us') setAboutDropdownOpen(true)
                        if (item.label === 'Admission') setAdmissionDropdownOpen(true)
                        if (item.label === 'Academics') setAcademicsDropdownOpen(true)
                        if (item.label === 'FAQs') setFaqsDropdownOpen(true)
                      }}
                      onMouseLeave={() => {
                        if (item.label === 'About Us') setAboutDropdownOpen(false)
                        if (item.label === 'Admission') setAdmissionDropdownOpen(false)
                        if (item.label === 'Academics') setAcademicsDropdownOpen(false)
                        if (item.label === 'FAQs') setFaqsDropdownOpen(false)
                      }}
                      className="rounded-md px-2.5 xl:px-3 py-2 text-[13px] xl:text-sm font-semibold text-blue-900 hover:bg-gray-100 transition-colors whitespace-nowrap"
                    >
                      {item.label}
                    </button>
                  ) : (
                    <a
                      href={item.href}
                      className="block rounded-md px-2.5 xl:px-3 py-2 text-[13px] xl:text-sm font-semibold text-blue-900 hover:bg-gray-100 transition-colors whitespace-nowrap"
                    >
                      {item.label}
                    </a>
                  )}

                  {/* About Us Dropdown */}
                  {item.label === 'About Us' && (
                    <div
                      onMouseEnter={() => setAboutDropdownOpen(true)}
                      onMouseLeave={() => setAboutDropdownOpen(false)}
                      className={`absolute top-full left-0 w-56 bg-blue-500 shadow-lg overflow-hidden transition-all duration-200 ${
                        aboutDropdownOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                      }`}
                    >
                      {aboutDropdownItems.map((subItem) => (
                        <a
                          key={subItem.label}
                          href={subItem.href}
                          className="block px-4 py-3 text-white font-semibold hover:bg-blue-600 transition-colors"
                        >
                          {subItem.label}
                        </a>
                      ))}
                    </div>
                  )}

                  {/* Admission Dropdown */}
                  {item.label === 'Admission' && (
                    <div
                      onMouseEnter={() => setAdmissionDropdownOpen(true)}
                      onMouseLeave={() => setAdmissionDropdownOpen(false)}
                      className={`absolute top-full left-0 w-56 bg-red-600 shadow-lg overflow-hidden transition-all duration-200 ${
                        admissionDropdownOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                      }`}
                    >
                      {admissionDropdownItems.map((subItem) => (
                        <a
                          key={subItem.label}
                          href={subItem.href}
                          className="block px-4 py-3 text-white font-semibold hover:bg-red-700 transition-colors"
                        >
                          {subItem.label}
                        </a>
                      ))}
                    </div>
                  )}

                  {/* Academics Dropdown */}
                  {item.label === 'Academics' && (
                    <div
                      onMouseEnter={() => setAcademicsDropdownOpen(true)}
                      onMouseLeave={() => setAcademicsDropdownOpen(false)}
                      className={`absolute top-full left-0 w-56 bg-purple-600 shadow-lg overflow-hidden transition-all duration-200 ${
                        academicsDropdownOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                      }`}
                    >
                      {academicsDropdownItems.map((subItem) => (
                        <a
                          key={subItem.label}
                          href={subItem.href}
                          className="block px-4 py-3 text-white font-semibold hover:bg-purple-700 transition-colors"
                        >
                          {subItem.label}
                        </a>
                      ))}
                    </div>
                  )}

                  {/* FAQs Dropdown */}
                  {item.label === 'FAQs' && (
                    <div
                      onMouseEnter={() => setFaqsDropdownOpen(true)}
                      onMouseLeave={() => setFaqsDropdownOpen(false)}
                      className={`absolute top-full left-0 w-56 bg-emerald-600 shadow-lg overflow-hidden transition-all duration-200 ${
                        faqsDropdownOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                      }`}
                    >
                      {faqsDropdownItems.map((subItem) => (
                        <a
                          key={subItem.label}
                          href={subItem.href}
                          className="block px-4 py-3 text-white font-semibold hover:bg-emerald-700 transition-colors"
                        >
                          {subItem.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="hidden xl:flex items-center gap-2 ml-auto flex-shrink-0">
              <a
                href="#testimonials"
                className="px-4 py-2 bg-amber-500 text-white rounded font-semibold hover:bg-amber-600 transition-colors text-sm"
              >
                Reviews
              </a>
              <a
                href="tel:+254715505526"
                className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded font-semibold hover:bg-red-700 transition-colors text-sm"
              >
                <Phone size={16} />
                Call Now
              </a>
              <a
                href="/admission/new-applications"
                className="px-4 py-2 bg-blue-700 text-white rounded font-semibold hover:bg-blue-800 transition-colors text-sm"
              >
                Apply Now
              </a>
              <Button
                onClick={() => document.getElementById('admission')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-4 py-2 bg-purple-600 text-white hover:bg-purple-700 font-semibold rounded text-sm"
              >
                Enroll Today
              </Button>
            </div>

            <a
              href="/admission/new-applications"
              className="ml-auto xl:hidden px-3 py-2 bg-blue-700 text-white rounded font-semibold hover:bg-blue-800 transition-colors text-sm whitespace-nowrap"
            >
              Apply Now
            </a>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden flex justify-between items-center h-20 px-4 gap-2">
            {/* Mobile Logo */}
            <a href="/" className="flex items-center gap-2 flex-shrink min-w-0">
              <Image
                src="/images/freyjose-logo.jpg"
                alt="FREYJOSE Technical Training College Logo"
                width={256}
                height={96}
                className="h-14 w-auto drop-shadow-md"
              />
              <div className="flex flex-col leading-tight min-w-0">
                <span className="text-blue-900 font-extrabold text-base tracking-tight truncate">FREYJOSE</span>
                <span className="text-red-600 font-bold text-xs tracking-wide uppercase">Technical College</span>
              </div>
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg hover:bg-gray-100 text-blue-900"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* Mobile Navigation Menu */}
          {isOpen && (
            <div className="md:hidden pb-8 space-y-1 border-t-2 border-blue-900 pt-4 px-4 max-h-[calc(100svh-170px)] overflow-y-auto">
              {navItems.map((item) => (
                <div key={item.label}>
                  {item.hasDropdown ? (
                    <>
                      <button
                        onClick={() => {
                          if (item.label === 'About Us') setAboutDropdownOpen(!aboutDropdownOpen)
                          if (item.label === 'Admission') setAdmissionDropdownOpen(!admissionDropdownOpen)
                          if (item.label === 'Academics') setAcademicsDropdownOpen(!academicsDropdownOpen)
                          if (item.label === 'FAQs') setFaqsDropdownOpen(!faqsDropdownOpen)
                        }}
                        className="w-full text-left px-4 py-3 text-blue-900 font-bold hover:bg-gray-100 rounded transition-colors flex items-center justify-between text-base"
                      >
                        {item.label}
                        <ChevronRight size={16} className={`transition-transform ${
                          (item.label === 'About Us' && aboutDropdownOpen) ||
                          (item.label === 'Admission' && admissionDropdownOpen) ||
                          (item.label === 'Academics' && academicsDropdownOpen) ||
                          (item.label === 'FAQs' && faqsDropdownOpen)
                            ? 'rotate-90'
                            : ''
                        }`} />
                      </button>
                      {item.label === 'About Us' && aboutDropdownOpen && (
                        <div className="mt-1 space-y-1 pl-4">
                          {aboutDropdownItems.map((subItem) => (
                            <a
                              key={subItem.label}
                              href={subItem.href}
                              className="block px-4 py-3 text-white font-semibold bg-blue-500 hover:bg-blue-600 rounded transition-colors text-base"
                              onClick={() => setIsOpen(false)}
                            >
                              {subItem.label}
                            </a>
                          ))}
                        </div>
                      )}
                      {item.label === 'Admission' && admissionDropdownOpen && (
                        <div className="mt-1 space-y-1 pl-4">
                          {admissionDropdownItems.map((subItem) => (
                            <a
                              key={subItem.label}
                              href={subItem.href}
                              className="block px-4 py-3 text-white font-semibold bg-red-600 hover:bg-red-700 rounded transition-colors text-base"
                              onClick={() => setIsOpen(false)}
                            >
                              {subItem.label}
                            </a>
                          ))}
                        </div>
                      )}
                      {item.label === 'Academics' && academicsDropdownOpen && (
                        <div className="mt-1 space-y-1 pl-4">
                          {academicsDropdownItems.map((subItem) => (
                            <a
                              key={subItem.label}
                              href={subItem.href}
                              className="block px-4 py-3 text-white font-semibold bg-purple-600 hover:bg-purple-700 rounded transition-colors text-base"
                              onClick={() => setIsOpen(false)}
                            >
                              {subItem.label}
                            </a>
                          ))}
                        </div>
                      )}
                      {item.label === 'FAQs' && faqsDropdownOpen && (
                        <div className="mt-1 space-y-1 pl-4">
                          {faqsDropdownItems.map((subItem) => (
                            <a
                              key={subItem.label}
                              href={subItem.href}
                              className="block px-4 py-3 text-white font-semibold bg-emerald-600 hover:bg-emerald-700 rounded transition-colors text-base"
                              onClick={() => setIsOpen(false)}
                            >
                              {subItem.label}
                            </a>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <a
                      href={item.href}
                      className="block px-4 py-3 text-blue-900 font-bold hover:bg-gray-100 rounded transition-colors text-base"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </a>
                  )}
                </div>
              ))}
              <div className="flex flex-col gap-3 pt-4 border-t border-gray-200">
                <a
                  href="#testimonials"
                  className="w-full px-4 py-3 bg-amber-500 text-white rounded-lg font-bold text-center hover:bg-amber-600 transition-colors text-base"
                  onClick={() => setIsOpen(false)}
                >
                  ⭐ Read Reviews
                </a>
                <a
                  href="tel:+254715505526"
                  className="w-full px-4 py-3 bg-red-600 text-white rounded-lg font-bold text-center hover:bg-red-700 transition-colors text-base"
                >
                  📞 Call Now: 0715 505 526
                </a>
                <Button
                  onClick={() => {
                    setIsOpen(false)
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                  }}
                  className="w-full bg-purple-600 text-white hover:bg-purple-700 font-bold rounded-lg text-base py-3"
                >
                  Apply Now
                </Button>
              </div>
            </div>
          )}
        </div>

      </nav>
    </>
  )
}
