import Image from 'next/image'

const partners = [
  {
    name: 'KNEC',
    full: 'Kenya National Examinations Council',
    website: 'https://www.knec.ac.ke/',
    logo: '/images/partners/knec.png',
  },
  {
    name: 'CDACC',
    full: 'Curriculum Development, Assessment & Certification Council',
    website: 'https://cdacc.go.ke/',
    logo: '/images/partners/cdacc.png',
  },
  {
    name: 'Ministry of Education',
    full: 'Ministry of Education, Kenya',
    website: 'https://www.education.go.ke/',
    logo: '/images/partners/education.png',
  },
  {
    name: 'KASNEB',
    full: 'Accounting Certification Body',
    website: 'https://www.kasneb.or.ke/',
    logo: '/images/partners/kasneb.png',
  },
  {
    name: 'NITA',
    full: 'National Industrial Training Authority',
    website: 'https://www.nita.go.ke/',
    logo: '/images/partners/nita.png',
  },
  {
    name: 'NTSA',
    full: 'National Transport & Safety Authority',
    website: 'https://ntsa.go.ke/',
    logo: '/images/partners/ntsa.png',
  },
]

export function PartnersStrip() {
  return (
    <section className="bg-blue-900 py-5 overflow-hidden">
      <div className="text-center mb-3">
        <span className="text-white/60 text-xs uppercase tracking-widest font-semibold">
          Accredited &amp; Recognised By
        </span>
      </div>
      <div className="relative flex overflow-hidden">
        <div className="flex animate-marquee gap-8 sm:gap-12 whitespace-nowrap">
          {[...partners, ...partners].map((partner, i) => (
            <a
              key={i}
              href={partner.website}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 shrink-0 rounded-2xl border border-white/15 bg-white/5 px-3 py-2.5 transition-colors hover:bg-white/10"
              aria-label={`${partner.name} official website`}
            >
              <div className="h-12 w-12 sm:h-14 sm:w-14 shrink-0 rounded-xl bg-white p-2 shadow-sm ring-1 ring-slate-200">
                <Image
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  width={56}
                  height={56}
                  className="h-full w-full object-contain"
                />
              </div>
              <div>
                <p className="text-white font-bold text-sm leading-none">{partner.name}</p>
                <p className="hidden sm:block text-blue-100/80 text-xs leading-none mt-1">{partner.full}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
