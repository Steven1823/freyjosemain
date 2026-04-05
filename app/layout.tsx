import React from "react"
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { WhatsAppFloat } from '@/components/whatsapp-float'
import { AIAssistantFloat } from '@/components/ai-assistant-float'

import './globals.css'

const _geist = Geist({ subsets: ['latin'] })
const _geistMono = Geist_Mono({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Freyjose Technical College | Skills for School Leavers',
  description:
    'From beauty and ICT to business and hospitality, Freyjose gives school leavers hands-on training for real jobs. Discover your future and explore programmes.',
  applicationName: 'FREYJOSE Technical Training College',
  category: 'education',
  referrer: 'origin-when-cross-origin',
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  keywords: [
    'technical college for school leavers Kenya',
    'courses after high school in Kenya',
    'certificate programmes in Ngong',
    'career-focused technical training',
    'hands-on vocational courses Kenya',
    'ICT and business college Ngong',
    'hospitality and beauty training Kenya',
  ],
  authors: [{ name: 'FREYJOSE Technical Training College' }],
  creator: 'FREYJOSE Technical Training College',
  metadataBase: new URL('https://freyjose.ac.ke'),
  alternates: {
    canonical: 'https://freyjose.ac.ke',
  },
  icons: {
    icon: [
      { url: '/icon.jpg?v=20260327', type: 'image/jpeg' },
    ],
    shortcut: ['/icon.jpg?v=20260327'],
    apple: [
      { url: '/apple-icon.jpg?v=20260327' },
    ],
  },
  openGraph: {
    title: 'Freyjose Technical College | Where Careers Begin',
    description: 'Discover practical, career-ready programmes at Freyjose Technical College in Ngong. The right next step after high school.',
    url: 'https://freyjose.ac.ke',
    siteName: 'FREYJOSE Technical Training College',
    type: 'website',
    locale: 'en_KE',
    images: [
      {
        url: '/icon.jpg?v=20260327',
        width: 800,
        height: 600,
        alt: 'FREYJOSE Technical Training College Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Freyjose Technical College | Where Careers Begin',
    description: 'Discover practical, career-ready programmes at Freyjose Technical College in Ngong. The right next step after high school.',
    images: ['/icon.jpg?v=20260327'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
    },
  },
}

export const viewport: Viewport = {
  themeColor: '#0f2747',
  userScalable: true,
}

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    name: 'FREYJOSE Technical Training College',
    url: 'https://freyjose.ac.ke',
    logo: 'https://freyjose.ac.ke/images/freyjose-logo.jpg',
    description:
      'An accredited technical training college in Ngong, Kajiado County offering career-ready certificate and diploma programs.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Ngong Town',
      addressLocality: 'Ngong',
      addressRegion: 'Kajiado County',
      postalCode: '00208',
      addressCountry: 'KE',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: -1.3557,
      longitude: 36.6498,
    },
    telephone: '+254715505526',
    email: 'info@freyjose.ac.ke',
    sameAs: [
      'https://www.facebook.com/FreyjoseCollege',
      'https://wa.me/254715505526',
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'CollegeOrUniversity',
    name: 'FREYJOSE Technical Training College',
    alternateName: 'Freyjose College',
    url: 'https://freyjose.ac.ke',
    logo: 'https://freyjose.ac.ke/images/freyjose-logo.jpg',
    description:
      'FREYJOSE Technical Training College in Ngong, Kenya offers professional courses in Beauty & Cosmetology, ICT, Business, Driving & Mechanical, and Hospitality.',
    areaServed: 'Kenya',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Ngong',
      addressRegion: 'Kajiado County',
      addressCountry: 'KE',
    },
    telephone: ['+254715505526', '+254732010366'],
    email: 'info@freyjose.ac.ke',
    contactPoint: [
      {
        '@type': 'ContactPoint',
        contactType: 'admissions',
        telephone: '+254715505526',
        email: 'info@freyjose.ac.ke',
        areaServed: 'KE',
        availableLanguage: ['en'],
      },
    ],
    sameAs: ['https://www.facebook.com/FreyjoseCollege'],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Professional Courses',
      itemListElement: [
        { '@type': 'Course', name: 'Beauty & Cosmetology', description: 'Professional beauty and cosmetology training including makeup artistry, hairdressing, and spa therapy', duration: 'P12M to P24M' },
        { '@type': 'Course', name: 'ICT & Computer Studies', description: 'Information and Communication Technology training in programming, web development, networking, and cybersecurity', duration: 'P12M to P24M' },
        { '@type': 'Course', name: 'Business Administration', description: 'Business management and accounting training including bookkeeping, financial reporting, and entrepreneurship', duration: 'P12M to P24M' },
        { '@type': 'Course', name: 'Driving & Mechanical', description: 'Professional driving and mechanical engineering training with NTSA-certified instruction', duration: 'P12M to P24M' },
        { '@type': 'Course', name: 'Hospitality & Catering', description: 'Hotel management and culinary arts training including professional cooking and event management', duration: 'P12M to P24M' },
      ],
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'FREYJOSE Technical Training College',
    image: 'https://freyjose.ac.ke/images/freyjose-logo.jpg',
    description: 'Technical training college in Ngong offering professional certifications',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Ngong Town',
      addressLocality: 'Ngong',
      addressRegion: 'Kajiado County',
      postalCode: '00203',
      addressCountry: 'KE',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: -1.3557,
      longitude: 36.6498,
    },
    telephone: '+254715505526',
    priceRange: 'KSh 10,000 - KSh 50,000',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'FREYJOSE Technical Training College',
    url: 'https://freyjose.ac.ke',
    inLanguage: 'en-KE',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://freyjose.ac.ke/courses?query={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
    hasPart: [
      {
        '@type': 'WebPage',
        name: 'About Freyjose',
        url: 'https://freyjose.ac.ke/about',
      },
      {
        '@type': 'WebPage',
        name: 'How to Apply',
        url: 'https://freyjose.ac.ke/admission',
      },
      {
        '@type': 'WebPage',
        name: 'FAQs',
        url: 'https://freyjose.ac.ke/faqs',
      },
      {
        '@type': 'WebPage',
        name: 'Courses Offered',
        url: 'https://freyjose.ac.ke/courses',
      },
      {
        '@type': 'WebPage',
        name: 'Contact & Location',
        url: 'https://freyjose.ac.ke/contact',
      },
    ],
  },
]

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased">
        {children}
        <WhatsAppFloat />
        <AIAssistantFloat />
      </body>
    </html>
  )
}

