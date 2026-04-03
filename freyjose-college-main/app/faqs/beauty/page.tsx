import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Beauty & Cosmetology Course FAQs | FREYJOSE Technical College',
  description: 'Learn about Beauty & Cosmetology programs at FREYJOSE. Get answers about curriculum, certification, and career paths in the beauty industry.',
  keywords: [
    'beauty cosmetology FAQs',
    'makeup course Kenya',
    'hairdressing training Ngong',
    'beauty therapy certification',
  ],
  alternates: {
    canonical: 'https://freyjose.ac.ke/faqs/beauty',
  },
  openGraph: {
    title: 'Beauty & Cosmetology FAQs | FREYJOSE Technical College',
    description: 'Discover our Beauty & Cosmetology programs, courses, and career opportunities in the beauty industry.',
    url: 'https://freyjose.ac.ke/faqs/beauty',
    siteName: 'FREYJOSE Technical College',
    type: 'website',
  },
};

export default function BeautyFAQPage() {
  const faqs = [
    {
      question: 'What is included in the Beauty & Cosmetology curriculum?',
      answer:
        'Our program covers makeup artistry, hairdressing, skincare, nail care, spa therapies, salon management, and customer service. Students learn both traditional and modern beauty techniques.',
    },
    {
      question: 'Are the courses certified and recognized?',
      answer:
        'Yes, FREYJOSE Beauty & Cosmetology courses are recognized by KNEC. Upon completion, students receive certificates that are valued in the beauty industry nationwide.',
    },
    {
      question: 'What are career options after the Beauty & Cosmetology course?',
      answer:
        'Graduates work as makeup artists, hairdressers, beauty therapists, salon managers, or start their own salons/studios. The beauty industry in Kenya is growing rapidly with excellent opportunities.',
    },
    {
      question: 'Do you use professional-grade products and equipment?',
      answer:
        'Yes, our salons are fully equipped with professional-grade beauty products, tools, and equipment from leading brands. Students train on the same tools they will use in professional salons.',
    },
    {
      question: 'Is there hands-on training with clients?',
      answer:
        'Absolutely. Students work with real clients in our on-campus salon, gaining practical experience while providing affordable services to the public.',
    },
    {
      question: 'Can students specialize in specific beauty areas?',
      answer:
        'Yes, advanced levels offer specializations in makeup artistry, hairdressing, nail art, spa therapy, and salon management depending on student interest.',
    },
    {
      question: 'How long is the Beauty & Cosmetology program?',
      answer:
        'Level 3: 12 months, Level 4: 12 months, Level 5: 18 months, Level 6: 24 months. The length depends on the certification level chosen.',
    },
    {
      question: 'What are the entry requirements?',
      answer:
        'Students need a KCSE or O-Level certificate. No prior beauty experience is required as we train from the basics.',
    },
  ];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="mb-12">
            <a
              href="/faqs"
              className="mb-4 inline-block text-blue-700 hover:underline"
            >
              ← Back to FAQs
            </a>
            <h1 className="mb-4 text-4xl font-bold text-slate-900">
              Beauty & Cosmetology FAQs
            </h1>
            <p className="text-lg text-slate-600">
              Questions about our Beauty & Cosmetology training programs
            </p>
          </div>

          <div className="space-y-8">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm"
              >
                <h2 className="mb-3 text-lg font-semibold text-slate-900">
                  {faq.question}
                </h2>
                <p className="text-slate-700 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-lg bg-blue-700 p-8 text-center text-white">
            <h2 className="mb-3 text-xl font-bold">Start your beauty career today!</h2>
            <p className="mb-4 text-blue-100">
              Join FREYJOSE Beauty & Cosmetology and transform your passion into a profession.
            </p>
            <a
              href="/admission/new-applications"
              className="inline-block rounded-lg bg-white px-6 py-2 font-semibold text-blue-700 transition-colors hover:bg-blue-50"
            >
              Apply Now
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
