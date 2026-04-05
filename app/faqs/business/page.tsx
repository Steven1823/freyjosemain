import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Business & Accounting Course FAQs | FREYJOSE Technical College',
  description: 'Find answers to questions about Business & Accounting programs at FREYJOSE. Learn about curriculum, career prospects, and finance options.',
  keywords: [
    'business accounting FAQs',
    'accounting course Kenya',
    'business management training',
    'bookkeeping course Ngong',
  ],
  alternates: {
    canonical: 'https://freyjose.ac.ke/faqs/business',
  },
  openGraph: {
    title: 'Business & Accounting FAQs | FREYJOSE Technical College',
    description: 'Learn about Business & Accounting programs, curriculum, and career paths at FREYJOSE.',
    url: 'https://freyjose.ac.ke/faqs/business',
    siteName: 'FREYJOSE Technical College',
    type: 'website',
  },
};

export default function BusinessFAQPage() {
  const faqs = [
    {
      question: 'What skills will I learn in the Business & Accounting course?',
      answer:
        'You will learn bookkeeping, financial reporting, auditing, taxation, business management, entrepreneurship, and use of accounting software like QuickBooks and SAGE.',
    },
    {
      question: 'Are the courses accredited and recognized?',
      answer:
        'Yes, our Business & Accounting programs are recognized by Kenya\'s KNEC and align with KASNEB standards. Graduates are recognized for professional accounting qualifications.',
    },
    {
      question: 'What are the job opportunities after completing this course?',
      answer:
        'Graduates work as bookkeepers, accounting assistants, junior accountants, business analysts, finance officers, and small business owners. Our partners include banks, insurance companies, and retail businesses.',
    },
    {
      question: 'Do you teach software like Excel and accounting systems?',
      answer:
        'Yes, students learn advanced Excel skills, QuickBooks, SAGE 50, Tally ERP, and other modern accounting software used in the industry.',
    },
    {
      question: 'Can I progress to professional accounting qualifications?',
      answer:
        'Yes, FREYJOSE Business & Accounting provides a pathway to KASNEB (CPA), ACCA, and other professional accounting certifications.',
    },
    {
      question: 'Is there practical work experience included?',
      answer:
        'Absolutely. All Business & Accounting courses include internship placement with real businesses where you apply classroom knowledge to actual financial operations.',
    },
    {
      question: 'How long is the Business & Accounting program?',
      answer:
        'Programs range from 12-24 months depending on the level: Level 3 (12 months), Level 4 (12 months), Level 5+ (18-24 months).',
    },
    {
      question: 'What are the admission requirements?',
      answer:
        'You need a KCSE or O-Level certificate with passes in Mathematics and English. No prior accounting experience is necessary.',
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
              Business & Accounting FAQs
            </h1>
            <p className="text-lg text-slate-600">
              Questions about our Business Management and Accounting programs
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
            <h2 className="mb-3 text-xl font-bold">Ready to advance your career?</h2>
            <p className="mb-4 text-blue-100">
              Join our Business & Accounting program today.
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
