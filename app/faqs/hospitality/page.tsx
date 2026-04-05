import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hospitality Course FAQs | FREYJOSE Technical College',
  description: 'Learn about Hospitality programs at FREYJOSE. Get answers about hotel management, culinary arts, and customer service training.',
  keywords: [
    'hospitality FAQs',
    'hotel management Kenya',
    'culinary arts course',
    'hospitality training Ngong',
    'chef training certificate',
  ],
  alternates: {
    canonical: 'https://freyjose.ac.ke/faqs/hospitality',
  },
  openGraph: {
    title: 'Hospitality Course FAQs | FREYJOSE Technical College',
    description: 'Explore our Hospitality programs including hotel management, culinary arts, and customer service.',
    url: 'https://freyjose.ac.ke/faqs/hospitality',
    siteName: 'FREYJOSE Technical College',
    type: 'website',
  },
};

export default function HospitalityFAQPage() {
  const faqs = [
    {
      question: 'What does the Hospitality course cover?',
      answer:
        'Our Hospitality program covers hotel operations, food and beverage service, culinary arts, customer service excellence, event management, housekeeping, and hospitality management.',
    },
    {
      question: 'Is chef training included?',
      answer:
        'Yes, culinary arts and food preparation are core components. Students learn professional cooking techniques, menu planning, food safety, and kitchen management.',
    },
    {
      question: 'What are the job opportunities in hospitality?',
      answer:
        'Graduates work as chefs, hotel managers, restaurant managers, food and beverage supervisors, event coordinators, and hospitality trainers. The hotel industry in Kenya offers excellent career growth.',
    },
    {
      question: 'What training facilities do you have?',
      answer:
        'FREYJOSE has a fully equipped commercial kitchen, training restaurant, hotel simulation rooms, and beverage bars where students learn practical skills.',
    },
    {
      question: 'Is there practical training with real customers?',
      answer:
        'Yes, students operate our on-campus training restaurant where they serve real guests, gaining authentic experience in hospitality service.',
    },
    {
      question: 'Are the qualifications internationally recognized?',
      answer:
        'Our Hospitality qualifications are recognized by KNEC and valued internationally, especially with advanced certifications like IATA and international culinary standards.',
    },
    {
      question: 'How long is the Hospitality program?',
      answer:
        'Level 3: 12 months, Level 4: 12 months, Level 5: 18 months, Level 6: 24 months. Duration depends on the certification level and specialization.',
    },
    {
      question: 'What are the entry requirements?',
      answer:
        'Students need a KCSE or O-Level certificate with passes in Mathematics and English. No prior hospitality experience is required.',
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
              Hospitality Course FAQs
            </h1>
            <p className="text-lg text-slate-600">
              Questions about our Hotel Management and Culinary Arts programs
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
            <h2 className="mb-3 text-xl font-bold">Pursue your passion for hospitality!</h2>
            <p className="mb-4 text-blue-100">
              Start your hospitality career at FREYJOSE today.
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
