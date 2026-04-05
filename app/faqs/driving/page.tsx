import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Driving & Mechanical Engineering Course FAQs | FREYJOSE Technical College',
  description: 'Learn about Driving & Mechanical Engineering programs at FREYJOSE. Get answers about automotive training, licensing, and career prospects.',
  keywords: [
    'driving mechanical FAQs',
    'automotive engineering Kenya',
    'driving school Ngong',
    'mechanic training course',
    'PSV driver training',
  ],
  alternates: {
    canonical: 'https://freyjose.ac.ke/faqs/driving',
  },
  openGraph: {
    title: 'Driving & Mechanical Engineering FAQs | FREYJOSE Technical College',
    description: 'Explore our Driving & Mechanical Engineering programs, PSV training, and automotive maintenance courses.',
    url: 'https://freyjose.ac.ke/faqs/driving',
    siteName: 'FREYJOSE Technical College',
    type: 'website',
  },
};

export default function DrivingFAQPage() {
  const faqs = [
    {
      question: 'What is included in the Driving & Mechanical Engineering course?',
      answer:
        'Our program covers professional driving skills, vehicle mechanics, engine repair, electrical systems, hydraulics, maintenance, PSV training, and automotive safety standards.',
    },
    {
      question: 'Can I get a PSV (Public Service Vehicle) license?',
      answer:
        'Yes, FREYJOSE offers comprehensive PSV driver training accredited by the National Transport and Safety Authority (NTSA). Training includes both theory and practical driving hours.',
    },
    {
      question: 'What vehicles are used for driving training?',
      answer:
        'We use a fleet of different vehicles (cars, minibuses, lorries) appropriate for different license categories. Our instructors are NTSA-certified professional driving trainers.',
    },
    {
      question: 'Is the course recognized by NTSA and other authorities?',
      answer:
        'Yes, our Driving & Mechanical Engineering courses are accredited by KNEC and recognized by NTSA. Certificates are valid for employment and further studies.',
    },
    {
      question: 'What mechanical skills will I learn?',
      answer:
        'Students learn engine maintenance, fault diagnosis, repair techniques, welding, metalwork, brake systems, suspension, and automotive electrical systems.',
    },
    {
      question: 'What are the career opportunities?',
      answer:
        'Graduates work as professional drivers, mechanics, automotive technicians, transport supervisors, fleet managers, or start their own garage businesses.',
    },
    {
      question: 'How much practical driving time is included?',
      answer:
        'FREYJOSE provides extensive practical driving practice. Students complete the required hours for NTSA licensing (72+ hours depending on category) under certified instructors.',
    },
    {
      question: 'How long is the Driving & Mechanical program?',
      answer:
        'Level 3: 12 months, Level 4: 12 months, Level 5: 18 months, Level 6: 24 months. PSV training intensive can be completed in 3-6 months.',
    },
    {
      question: 'What are the entry requirements?',
      answer:
        'For driving courses: You must have a valid Kenyan national ID, be at least 18 years old, and have a KCSE/O-Level certificate. For mechanical level 3+, you need a secondary certificate.',
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
              Driving & Mechanical Engineering FAQs
            </h1>
            <p className="text-lg text-slate-600">
              Questions about our Professional Driving and Automotive Engineering programs
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
            <h2 className="mb-3 text-xl font-bold">Just drive forward!</h2>
            <p className="mb-4 text-blue-100">
              Become a skilled driver or mechanic. Enroll in our Driving & Mechanical Engineering program.
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
