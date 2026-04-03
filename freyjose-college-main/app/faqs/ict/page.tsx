import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ICT Course FAQs | FREYJOSE Technical College',
  description: 'Answers to frequently asked questions about ICT programs at FREYJOSE. Learn about curriculum, duration, career prospects, and admission requirements.',
  keywords: [
    'ICT FAQs',
    'information technology course',
    'computer programming Kenya',
    'networking course',
    'web development Ngong',
  ],
  alternates: {
    canonical: 'https://freyjose.ac.ke/faqs/ict',
  },
  openGraph: {
    title: 'ICT Course FAQs | FREYJOSE Technical College',
    description: 'Find answers about ICT programs at FREYJOSE including curriculum, duration, and career prospects.',
    url: 'https://freyjose.ac.ke/faqs/ict',
    siteName: 'FREYJOSE Technical College',
    type: 'website',
  },
};

export default function ICTFAQPage() {
  const faqs = [
    {
      question: 'What topics are covered in the ICT course?',
      answer:
        'Our ICT program covers programming languages (Python, Java, JavaScript), web development, database management, networking, cybersecurity, and software development practices. Students gain hands-on experience with industry-standard tools.',
    },
    {
      question: 'What are the career prospects after completing ICT?',
      answer:
        'Graduates work as software developers, web developers, system administrators, IT support specialists, database administrators, and cybersecurity analysts. FREYJOSE has partnerships with tech companies for job placement.',
    },
    {
      question: 'Do you teach Python and other programming languages?',
      answer:
        'Yes, our curriculum includes Python, Java, JavaScript, HTML/CSS, and SQL. We focus on practical coding skills through projects and real-world applications.',
    },
    {
      question: 'Is there a practicum or internship component?',
      answer:
        'Yes, all ICT courses include practical laboratory sessions and industry internships. Students work on real projects with partner organizations.',
    },
    {
      question: 'What are the computer lab facilities like?',
      answer:
        'FREYJOSE has modern computer labs with up-to-date hardware and software. Each student has access to computers, IDEs, and development tools needed for hands-on learning.',
    },
    {
      question: 'Can I specialize within ICT?',
      answer:
        'Yes, advanced ICT levels allow specialization in web development, mobile app development, networking, cybersecurity, or business systems.',
    },
    {
      question: 'What are the entry requirements for ICT?',
      answer:
        'You need a Kenya Certificate of Secondary Education (KCSE) or O-Level certificate. Prior computer knowledge is helpful but not required.',
    },
    {
      question: 'How long is the ICT program?',
      answer:
        'Level 3 ICT: 12 months, Level 4: 12 months, Level 5: 18 months, Level 6: 24 months. Duration varies based on the certification level you choose.',
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
          {/* Header */}
          <div className="mb-12">
            <a
              href="/faqs"
              className="mb-4 inline-block text-blue-700 hover:underline"
            >
              ← Back to FAQs
            </a>
            <h1 className="mb-4 text-4xl font-bold text-slate-900">
              ICT Course FAQs
            </h1>
            <p className="text-lg text-slate-600">
              Questions about our Information & Communication Technology programs
            </p>
          </div>

          {/* FAQ Items */}
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

          {/* CTA */}
          <div className="mt-12 rounded-lg bg-blue-700 p-8 text-center text-white">
            <h2 className="mb-3 text-xl font-bold">Interested in ICT?</h2>
            <p className="mb-4 text-blue-100">
              Start your tech career at FREYJOSE. Apply now!
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
