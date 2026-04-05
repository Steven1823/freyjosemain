export type KnowledgeItem = {
  id: string
  title: string
  content: string
  keywords: string[]
}

export const knowledgeBase: KnowledgeItem[] = [
  {
    id: 'college-overview',
    title: 'College Overview',
    content:
      'FREYJOSE Technical Training College is located in Ngong, Kajiado County, Kenya. The college offers professional training in Beauty and Cosmetology, ICT and Computer Studies, Business and Accounting, Driving and Mechanical, and Hospitality and Catering.',
    keywords: ['overview', 'about', 'freyjose', 'college', 'ngong', 'kajiado', 'kenya'],
  },
  {
    id: 'admission',
    title: 'Admissions',
    content:
      'Students can apply through the New Applications page. The admission area also includes process guidance and requirements or FAQs pages. Intake is in progress and applicants can start from the online admission flow.',
    keywords: ['admission', 'apply', 'application', 'intake', 'new applications', 'requirements', 'faq'],
  },
  {
    id: 'admission-process',
    title: 'Admission Process',
    content:
      'The admission process includes researching a course, submitting the application form, document verification, a possible interview, fee payment, and then confirmation plus induction. Document review usually takes 3 to 5 business days.',
    keywords: ['admission process', 'steps', 'apply process', 'document verification', 'interview', 'induction', 'timeline'],
  },
  {
    id: 'requirements',
    title: 'Entry Requirements',
    content:
      'Level 6 courses require KCSE C- minus, Level 5 requires KCSE D, and Level 3 accepts a KCPE certificate. Common documents include a valid ID or passport, birth certificate copy, academic certificates, and two passport photos.',
    keywords: ['requirements', 'qualification', 'entry', 'kcse', 'kcpe', 'documents', 'passport', 'birth certificate'],
  },
  {
    id: 'fees-support',
    title: 'Fees and Financial Support',
    content:
      'The application fee is KSH 1,000. Course fees vary by program. Payment plans are available, and the college mentions merit-based support or sponsorship for deserving students in some cases.',
    keywords: ['fees', 'fee', 'cost', 'price', 'payment plan', 'financial aid', 'scholarship', 'application fee'],
  },
  {
    id: 'courses-categories',
    title: 'Course Categories',
    content:
      'Course categories include Beauty, ICT, Business, Driving and Mechanical, and Hospitality. Programs vary in duration from short 3 month options to longer diploma style programs of up to 12 months depending on the track.',
    keywords: ['courses', 'programs', 'categories', 'beauty', 'ict', 'business', 'driving', 'mechanical', 'hospitality'],
  },
  {
    id: 'courses-samples',
    title: 'Popular Programs',
    content:
      'Examples of programs offered include Beauty Therapy, Hair Styling and Design, Makeup Artistry, Web Development, Mobile App Development, Graphic Design, Data Analysis, Entrepreneurship, Accounting Essentials, Motor Vehicle Mechanics, Welding and Fabrication, Hotel Management, Professional Cooking, Event Planning, and Customer Service Excellence.',
    keywords: ['beauty therapy', 'web development', 'mobile app', 'graphic design', 'data analysis', 'accounting', 'mechanics', 'welding', 'hotel management', 'cooking'],
  },
  {
    id: 'certification',
    title: 'Examination Bodies',
    content:
      'Depending on the program, examination or certification bodies include KNEC, CDACC, NITA, KASNEB, and NTSA Kenya for driving related licensing pathways.',
    keywords: ['certification', 'exam', 'knec', 'cdacc', 'nita', 'kasneb', 'ntsa'],
  },
  {
    id: 'mission-vision',
    title: 'Mission and Values',
    content:
      'FREYJOSE mission is to unlock individual student potential through tailored professional and technical education that meets changing societal skill needs. Its motto is Opportunities through Knowledge. Core values include Respect, Teamwork, Integrity, Customer Focus, and Creativity and Innovativeness.',
    keywords: ['mission', 'vision', 'motto', 'values', 'respect', 'teamwork', 'integrity', 'customer focus', 'creativity'],
  },
  {
    id: 'history',
    title: 'History and Accreditation',
    content:
      'FREYJOSE Technical Training College was established in 2015. The site states that it has trained over 850 students across diploma, certificate, and vocational programs and is staffed by experienced tutors committed to world-class education.',
    keywords: ['history', 'established', '2015', '850 students', 'accredited', 'tutors', 'about'],
  },
  {
    id: 'management',
    title: 'Management and Leadership',
    content:
      'The management page lists leaders including Principal John Kariuki, Vice Principal Academics Dr. Jane Mwangi, Vice Principal Administration Peter Omondi, Head of Academics Sarah Kipchoge, Head of Student Affairs David Mutua, and Finance Officer Grace Wanjiku.',
    keywords: ['management', 'leadership', 'principal', 'vice principal', 'john kariuki', 'jane mwangi', 'student affairs'],
  },
  {
    id: 'contact',
    title: 'Contact Information',
    content:
      'Primary contact phone is +254 715 505 526. Other listed contact numbers on the site include +254 722 000 000, +254 712 345 678, and +254 732 010 366. Email listed on the contact page is info@freyjose.ac.ke. The college location is Ngong Town, Kajiado County.',
    keywords: ['contact', 'phone', 'email', 'location', 'address', 'call', 'whatsapp'],
  },
  {
    id: 'hours',
    title: 'Office Hours',
    content:
      'Office hours are Monday to Friday 8:00 AM to 6:00 PM and Saturday 9:00 AM to 1:00 PM.',
    keywords: ['hours', 'open', 'office hours', 'monday', 'friday', 'saturday', 'time'],
  },
  {
    id: 'site-navigation',
    title: 'Website Navigation',
    content:
      'Main pages include Home, About Us, Admission, Courses Offered, Academics, Student Life, Graduation, and Contact Us. The Courses Offered section now has its own page at /courses.',
    keywords: ['navigation', 'pages', 'home', 'about', 'admission', 'courses', 'academics', 'student life', 'contact'],
  },
  {
    id: 'campus-life',
    title: 'Campus Life and Facilities',
    content:
      'Campus life highlights include student clubs, an innovation hub, sports and recreation, counseling, mentoring, career guidance, modern computer labs, workshop facilities, a library and learning commons, student cafeteria, prayer rooms, student lounges, and accessible grounds.',
    keywords: ['campus life', 'facilities', 'student clubs', 'innovation hub', 'sports', 'counseling', 'library', 'cafeteria'],
  },
  {
    id: 'student-support',
    title: 'Student Support and Learning Environment',
    content:
      'The college says it maintains small class sizes of about 20 to 30 students for personalized attention. Support services mentioned include counseling, academic support, career guidance, library access, sports facilities, and an alumni network after graduation.',
    keywords: ['class size', '20-30 students', 'student support', 'career guidance', 'academic support', 'alumni', 'learning environment'],
  },
  {
    id: 'schedules',
    title: 'Class Schedules and Study Flexibility',
    content:
      'FREYJOSE mentions flexible study schedules including morning, afternoon, and evening classes to support working professionals and other commitments. Program duration generally ranges from 3 to 12 months depending on the course.',
    keywords: ['schedule', 'morning', 'afternoon', 'evening', 'weekend', 'duration', '3-12 months', 'flexible'],
  },
  {
    id: 'international-students',
    title: 'International Students',
    content:
      'International students are welcome. The site mentions that they may need a valid passport, evidence of English proficiency, and depending on country, a student visa.',
    keywords: ['international students', 'visa', 'passport', 'english proficiency', 'foreign students'],
  },
  {
    id: 'events',
    title: 'Events and Open Days',
    content:
      'Upcoming events listed on the site include intake open days every Saturday from 9 AM to 1 PM, graduation celebrations, a Beauty and Cosmetology showcase, and monthly ICT and Business industry workshops.',
    keywords: ['events', 'open day', 'saturday', 'showcase', 'industry workshop', 'monthly sessions'],
  },
  {
    id: 'graduation',
    title: 'Graduation Information',
    content:
      'The graduation page says FREYJOSE held its annual graduation ceremony on January 24, 2026 at the Ngong campus, celebrating over 60 students from five departments. Graduation guidance includes completing the program, clearing fees, registering, collecting a gown, and attending the ceremony.',
    keywords: ['graduation', 'graduates', 'ceremony', 'gown', 'register for graduation', 'january 24 2026', '60+ students'],
  },
    {
      id: 'faq-hub',
      title: 'Frequently Asked Questions',
      content:
        'FREYJOSE maintains comprehensive FAQ sections on the main /faqs page and department-specific FAQ pages at /faqs/ict, /faqs/business, /faqs/beauty, /faqs/hospitality, and /faqs/driving. These pages answer common questions about admissions, course details, fees, career prospects, and department-specific information.',
      keywords: ['faq', 'frequently asked questions', 'questions', 'answers', 'common questions', 'faqs'],
    },
    {
      id: 'course-duration-levels',
      title: 'Course Levels and Duration',
      content:
        'FREYJOSE offers four certification levels: Level 3 (12 months), Level 4 (12 months), Level 5 (18 months), and Level 6 (24 months). All programs provide both theoretical knowledge and practical hands-on experience. Advanced levels may offer specialization options within departments.',
      keywords: ['course duration', 'level 3', 'level 4', 'level 5', 'level 6', 'duration', '12 months', '18 months', '24 months', 'certification level'],
    },
    {
      id: 'ict-department',
      title: 'ICT Department Details',
      content:
        'The ICT department offers training in programming (Python, Java, JavaScript), web development, database management, networking, cybersecurity, and software development. Students work in modern computer labs with professional tools and industry software. Internship and job placement support is available. See /faqs/ict for detailed questions.',
      keywords: ['ict', 'programming', 'python', 'java', 'web development', 'networking', 'cybersecurity', 'software development', 'computer labs'],
    },
    {
      id: 'beauty-department',
      title: 'Beauty & Cosmetology Department',
      content:
        'The Beauty & Cosmetology department trains students in makeup artistry, hairdressing, skincare, nail care, and spa therapy. The college has a fully equipped on-campus salon where students work with real clients. Programs include both Level 3 and advanced professional certifications. See /faqs/beauty for more details.',
      keywords: ['beauty', 'cosmetology', 'makeup', 'hairdressing', 'hair styling', 'skincare', 'spa', 'nail care', 'salon'],
    },
    {
      id: 'business-department',
      title: 'Business & Accounting Department',
      content:
        'The Business & Accounting department covers bookkeeping, financial reporting, taxation, business management, and entrepreneurship. Students learn accounting software like QuickBooks, SAGE, and Excel. Programs provide pathways to professional certifications like KASNEB (CPA) and ACCA. See /faqs/business for specific questions.',
      keywords: ['business', 'accounting', 'bookkeeping', 'financial reporting', 'taxation', 'kasneb', 'acca', 'quickbooks', 'sage'],
    },
    {
      id: 'hospitality-department',
      title: 'Hospitality & Culinary Arts Department',
      content:
        'The Hospitality department offers chef training, hotel management, food and beverage service, event management, and customer service excellence. Students train in a fully equipped commercial kitchen and operate an on-campus restaurant with real guests. Professional cooking certifications are available. See /faqs/hospitality for details.',
      keywords: ['hospitality', 'culinary', 'chef', 'hotel management', 'cooking', 'food service', 'event management', 'restaurant'],
    },
    {
      id: 'driving-department',
      title: 'Driving & Mechanical Engineering Department',
      content:
        'The Driving department offers PSV (Public Service Vehicle) driver training with NTSA certification, professional driving instruction, and vehicle mechanics. Students learn engine repair, maintenance, electrical systems, welding, and metalwork. Training includes 72+ practical driving hours with certified instructors. See /faqs/driving for more.',
      keywords: ['driving', 'psv', 'mechanical', 'ntsa', 'driver training', 'mechanic', 'vehicle repair', 'engine maintenance', 'welding'],
    },
    {
      id: 'job-prospects',
      title: 'Career Prospects and Employment',
      content:
        'FREYJOSE graduates find employment in diverse sectors. ICT graduates work as developers and network specialists; Business graduates as accountants and managers; Beauty graduates in salons and spas; Hospitality graduates in hotels and restaurants; Driving graduates as professional drivers and mechanics. The college has partnerships with major employers and provides career guidance and job placement assistance.',
      keywords: ['career', 'employment', 'job prospects', 'graduates work as', 'placement', 'career guidance', 'salary', 'job opportunities'],
    },
    {
      id: 'facilities-labs',
      title: 'Modern Facilities and Equipment',
      content:
        'FREYJOSE features state-of-the-art facilities including computer labs with professional software, commercial kitchen facilities, on-campus salon for beauty training, training restaurant for hospitality, and driving practice areas. All departments have modern equipment matching industry standards for hands-on practical learning.',
      keywords: ['facilities', 'computer labs', 'equipment', 'workshop', 'kitchen', 'salon', 'modern equipment', 'practical learning'],
    },
    {
      id: 'industry-partnerships',
      title: 'Industry Partnerships and Internships',
      content:
        'FREYJOSE has partnerships with leading organizations across all sectors (tech, finance, beauty, hospitality, transport). These partnerships provide internship opportunities where students gain real-world experience. The college assists with job placement after graduation through its career services.',
      keywords: ['partnerships', 'internship', 'industry partners', 'placement', 'work experience', 'real-world projects'],
    },
    {
      id: 'application-timeline',
      title: 'Application Timeline and Intake Schedule',
      content:
        'FREYJOSE accepts applications on a rolling basis during active intakes. Open days are held every Saturday from 9 AM to 1 PM at the Ngong campus. The March 2026 intake is currently active. Application processing takes 3-5 business days. Students can start classes shortly after fee payment confirmation.',
      keywords: ['application timeline', 'intake', 'open day', 'saturday', 'march 2026', 'when to apply', 'enrollment', '3-5 days'],
    },
    {
      id: 'alumni-success',
      title: 'Alumni Network and Student Success',
      content:
        'FREYJOSE maintains an active alumni network providing ongoing professional development, business networking, and mentorship opportunities. The college reports positive employment outcomes with many alumni starting their own businesses or advancing in their careers. Alumni testimonials highlight practical skills training and industry-ready preparation.',
      keywords: ['alumni', 'alumni network', 'success stories', 'graduates', 'mentorship', 'networking', 'testimonials', 'business'],
    },
]

function tokenize(text: string): string[] {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, ' ')
    .split(/\s+/)
    .filter((token) => token.length > 2)
}

export function getRelevantKnowledge(query: string, limit = 6): KnowledgeItem[] {
  const tokens = new Set(tokenize(query))

  const scored = knowledgeBase
    .map((item) => {
      let score = 0

      for (const keyword of item.keywords) {
        const keyTokens = tokenize(keyword)
        for (const keyToken of keyTokens) {
          if (tokens.has(keyToken)) {
            score += 3
          }
        }
      }

      const contentTokens = tokenize(`${item.title} ${item.content}`)
      for (const token of contentTokens) {
        if (tokens.has(token)) {
          score += 1
        }
      }

      return { item, score }
    })
    .filter((entry) => entry.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((entry) => entry.item)

  return scored.length > 0 ? scored : knowledgeBase.slice(0, Math.min(limit, 2))
}
