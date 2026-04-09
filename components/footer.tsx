import { Separator } from '@/components/ui/separator'
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react'
import Image from 'next/image'

export function Footer() {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about/vision' },
    { label: 'Our Courses', href: '/#courses' },
    { label: 'Campus Life', href: '/about/campus-life' },
    { label: 'Events', href: '/about/events' },
    { label: 'Apply Now', href: '/admission/new-applications' },
    { label: 'Admission Process', href: '/admission/process' },
    { label: 'Requirements', href: '/admission/requirements' },
  ]

  const socialLinks = [
    { icon: Facebook, href: 'https://www.facebook.com/FreyjoseCollege' },
    { icon: Twitter, href: '#' },
    { icon: Linkedin, href: '#' },
    { icon: Instagram, href: '#' },
  ]

  return (
    <footer className="w-full bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="mb-4 flex items-center gap-3">
                <Image
                  src="/images/freyjose-logo.jpg"
                  alt="FREYJOSE Technical Training College Logo"
                  width={320}
                  height={128}
                  className="h-20 w-auto drop-shadow-md"
                />
                <div className="flex flex-col leading-tight">
                  <span className="text-white font-extrabold text-xl tracking-tight">FREYJOSE</span>
                  <span className="text-red-300 font-bold text-xs tracking-wide uppercase">Technical College</span>
                </div>
              </div>
              <p className="text-white/80 text-sm leading-relaxed">
                Transforming lives through quality technical education and professional development since 2015.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-white/90">Quick Links</h4>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-white/75 hover:text-white transition-colors text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-white/90">Contact Info</h4>
              <div className="space-y-2 text-sm text-white/75">
                <p>Ngong, Kajiado County, Kenya</p>
                <a href="tel:+254715505526" className="hover:text-white transition-colors block">
                  0715 505 526
                </a>
                <a href="tel:+254732010366" className="hover:text-white transition-colors block">
                  0732 010 366
                </a>
                <a href="mailto:info@freyjose.ac.ke" className="hover:text-white transition-colors block">
                  info@freyjose.ac.ke
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-white/90">Follow Us</h4>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon
                  return (
                    <a
                      key={index}
                      href={social.href}
                      className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors text-white"
                    >
                      <Icon size={18} />
                    </a>
                  )
                })}
              </div>
              <div className="mt-4 space-y-2">
                <a href="/admission/new-applications" className="block text-sm font-semibold text-white hover:text-white/80 transition-colors">
                  Apply Now →
                </a>
              </div>
            </div>
          </div>

          <Separator className="my-8 bg-white/10" />

          <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-white/60">
            <p>&copy; {currentYear} FREYJOSE Technical Training College. All rights reserved.</p>
            <div className="flex gap-6 mt-4 sm:mt-0">
              <a href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
