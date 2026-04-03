import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FAQs | Freyjose Technical College in Ngong, Kenya',
  description: 'Answers about Freyjose Technical College courses, admission process, fees, location in Ngong, and support services for students.',
};

export default function FAQPage() {
  const faqs = [
    {
      question: 'What is the admission process at FREYJOSE?',
      answer:
        'The admission process involves submitting your O-Level certificate and completed application form to our admissions office. Upon acceptance, you will receive a confirmation letter and payment schedule. You can apply online or visit our campus in Ngong.',
    },
    {
      question: 'What courses does FREYJOSE offer?',
      answer:
        'FREYJOSE offers a wide range of technical and vocational courses across five main departments: ICT, Business & Accounting, Beauty & Cosmetology, Hospitality, and Driving & Mechanical Engineering. Each course is designed to provide practical skills for employment.',
    },
    {
      question: 'How much does it cost to study at FREYJOSE?',
      answer:
        'Course fees vary depending on the program level (Level 3, 4, 5, or 6 certification). We offer flexible payment plans and student financing options. Contact our admissions office at +254715505526 or info@freyjose.ac.ke for detailed fee information.',
    },
    {
      question: 'Are there scholarships or financial aid available?',
      answer:
        'Yes, FREYJOSE offers scholarships based on academic merit and financial need. We also have bursary programs and payment plans to help students manage their fees. Contact our student welfare office for more information.',
    },
    {
      question: 'What are the teaching methods used at FREYJOSE?',
      answer:
        'We use a blend of theoretical and practical teaching methods. Our courses emphasize hands-on learning in state-of-the-art facilities, industry partnerships, and real-world projects to ensure students gain relevant skills.',
    },
    {
      question: 'Can international students apply to FREYJOSE?',
      answer:
        'Yes, international students are welcome. You will need to provide equivalent qualifications to O-Level, valid passport, and visa documentation. Contact info@freyjose.ac.ke for specific requirements.',
    },
    {
      question: 'What is the duration of courses?',
      answer:
        'Course durations vary: Level 3 (12 months), Level 4 (12 months), Level 5 (12-18 months), and Level 6 (18-24 months). Some programs offer accelerated options.',
    },
    {
      question: 'Does FREYJOSE provide accommodation?',
      answer:
        'Information about on-campus or recommended student accommodation is available through our student services office. Contact us at +254715505526 for accommodation options.',
    },
    {
      question: 'What qualifications will I receive after completing a course?',
      answer:
         'Upon successful completion, you will receive a FREYJOSE certificate recognized by Kenya education and skills authorities. Our programs align with national technical and vocational education framework standards.',
    },
    {
      question: 'Are there internship or placement opportunities?',
      answer:
        'Yes, FREYJOSE has partnerships with leading organizations across all sectors. We provide internship placements and assist graduates with job placement through our career services office.',
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
          <div className="mb-12 text-center">
            <h1 className="mb-4 text-4xl font-bold text-slate-900 sm:text-5xl">
              Frequently Asked Questions
            </h1>
            <p className="text-lg text-slate-600">
              Find answers to common questions about FREYJOSE Technical College
            </p>
            <p className="mt-4 text-slate-700 max-w-3xl mx-auto">
              Freyjose Technical College is located in Ngong, Kajiado County, Kenya. We offer practical certificate and diploma programmes in ICT, Beauty & Cosmetology, Business & Accounting, Driving & Mechanical, and Hospitality.
            </p>
          </div>

          {/* FAQ Items */}
          <div className="space-y-8">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <h2 className="mb-3 text-lg font-semibold text-slate-900">
                  {faq.question}
                </h2>
                <p className="text-slate-700 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-16 rounded-lg bg-blue-700 p-8 text-center text-white">
            <h2 className="mb-4 text-2xl font-bold">Didn't find your answer?</h2>
            <p className="mb-6 text-blue-100">
              Contact our admissions team directly for personalized assistance.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
              <a
                href="tel:+254715505526"
                className="inline-block rounded-lg bg-white px-6 py-3 font-semibold text-blue-700 transition-colors hover:bg-blue-50"
              >
                Call: +254715505526
              </a>
              <a
                href="mailto:info@freyjose.ac.ke"
                className="inline-block rounded-lg bg-white px-6 py-3 font-semibold text-blue-700 transition-colors hover:bg-blue-50"
              >
                Email: info@freyjose.ac.ke
              </a>
            </div>
          </div>

          {/* Department-specific FAQs link */}
          <div className="mt-12 text-center">
            <h3 className="mb-4 text-xl font-semibold text-slate-900">
              Department-Specific Questions?
            </h3>
            <p className="mb-6 text-slate-600">
              Visit specific department FAQ pages for in-depth information.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                { name: 'ICT', href: '/faqs/ict' },
                { name: 'Business & Accounting', href: '/faqs/business' },
                { name: 'Beauty & Cosmetology', href: '/faqs/beauty' },
                { name: 'Hospitality', href: '/faqs/hospitality' },
                { name: 'Driving & Mechanical', href: '/faqs/driving' },
              ].map((dept) => (
                <a
                  key={dept.href}
                  href={dept.href}
                  className="rounded-lg bg-slate-100 px-4 py-2 font-medium text-slate-700 transition-colors hover:bg-slate-200"
                >
                  {dept.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
