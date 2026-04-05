'use client'

import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { CheckCircle, BookOpen, Briefcase, Award, ArrowRight } from 'lucide-react'

type Course = {
  id: number
  name: string
  category: string
  duration: string
  desc: string
  requirements: string[]
  examBody: string
  careers: string[]
  modules: string[]
}

const courses: Course[] = [
  { id: 1, name: 'Beauty Therapy', category: 'Beauty', duration: '6 months', desc: 'Skincare, facials, waxing, and therapeutic treatments for the modern beauty professional.', requirements: ['KCSE Grade D or equivalent', 'KCPE Certificate holders may qualify', 'Age 16+'], examBody: 'KNEC / CDACC', careers: ['Beauty Therapist', 'Spa Technician', 'Salon Owner', 'Beauty Product Rep'], modules: ['Skincare & Facials', 'Body Treatments', 'Waxing & Threading', 'Salon Business Management'] },
  { id: 2, name: 'Hair Styling & Design', category: 'Beauty', duration: '6 months', desc: 'Master cutting, coloring, and styling techniques used in top Kenyan salons.', requirements: ['KCSE Grade D or equivalent', 'KCPE Certificate acceptable', 'Age 16+'], examBody: 'KNEC / CDACC', careers: ['Hairdresser', 'Salon Manager', 'Hair Colorist', 'Hair Product Consultant'], modules: ['Hair Cutting Techniques', 'Coloring & Highlighting', 'Styling & Dressing', 'Salon Management'] },
  { id: 3, name: 'Makeup Artistry', category: 'Beauty', duration: '3 months', desc: 'Bridal, fashion, and editorial makeup skills with hands-on practical sessions.', requirements: ['KCSE Grade D or KCPE Certificate', 'No prior experience needed'], examBody: 'CDACC', careers: ['Makeup Artist', 'Bridal Makeup Specialist', 'Film & TV Makeup', 'Cosmetology Instructor'], modules: ['Foundation & Contouring', 'Eye Makeup', 'Bridal Makeup', 'Special Effects Makeup'] },
  { id: 4, name: 'Web Development', category: 'ICT', duration: '12 months', desc: 'Build websites and web apps using HTML, CSS, JavaScript, and modern frameworks.', requirements: ['KCSE Grade D+ or equivalent', 'Basic computer literacy preferred'], examBody: 'KNEC', careers: ['Web Developer', 'Frontend Developer', 'Freelance Developer', 'UI/UX Designer'], modules: ['HTML & CSS', 'JavaScript', 'React / Next.js', 'Backend & Databases', 'Deployment'] },
  { id: 5, name: 'Mobile App Development', category: 'ICT', duration: '12 months', desc: 'Develop Android and iOS apps from scratch with real-world project experience.', requirements: ['KCSE Grade D+ or equivalent', 'Basic computer literacy'], examBody: 'KNEC', careers: ['Mobile App Developer', 'Android Developer', 'Freelance App Developer', 'Tech Entrepreneur'], modules: ['Android Development', 'Flutter Basics', 'UI Design', 'App Publishing & Monetization'] },
  { id: 6, name: 'Graphic Design', category: 'ICT', duration: '6 months', desc: 'Create compelling visuals for print and digital using industry-standard tools.', requirements: ['KCSE Grade D or equivalent', 'Creative interest recommended'], examBody: 'KNEC / CDACC', careers: ['Graphic Designer', 'Brand Designer', 'Print Production Artist', 'Social Media Designer'], modules: ['Adobe Photoshop', 'Adobe Illustrator', 'Logo & Brand Design', 'Print & Digital Media'] },
  { id: 7, name: 'Digital Marketing', category: 'ICT', duration: '3 months', desc: 'SEO, social media, Google Ads, and analytics to grow businesses online.', requirements: ['KCSE Grade D or equivalent', 'Basic smartphone/internet usage'], examBody: 'CDACC / NITA', careers: ['Digital Marketer', 'Social Media Manager', 'SEO Specialist', 'Content Creator'], modules: ['Social Media Marketing', 'Google Ads', 'SEO & Content', 'Email Marketing & Analytics'] },
  { id: 8, name: 'Data Analysis', category: 'ICT', duration: '6 months', desc: 'Turn raw data into insights using Excel, Python, and data visualization tools.', requirements: ['KCSE Grade D+ or equivalent', 'Basic numeracy skills'], examBody: 'KNEC', careers: ['Data Analyst', 'Business Intelligence Analyst', 'Research Analyst'], modules: ['Microsoft Excel Advanced', 'Python Basics', 'Data Visualization', 'Business Reporting'] },
  { id: 9, name: 'Business Management', category: 'Business', duration: '9 months', desc: 'Leadership, operations, and strategy skills for running a successful business.', requirements: ['KCSE Grade C- or equivalent', 'Adult learners with work experience welcome'], examBody: 'KNEC', careers: ['Business Manager', 'Operations Manager', 'SME Owner', 'Project Manager'], modules: ['Management Principles', 'Human Resource', 'Marketing', 'Financial Management', 'Business Law'] },
  { id: 10, name: 'Entrepreneurship', category: 'Business', duration: '6 months', desc: 'From idea to income — business planning, funding, and startup execution.', requirements: ['KCSE Grade D or equivalent', 'Business idea or interest required'], examBody: 'CDACC / NITA', careers: ['Business Owner', 'SME Founder', 'Franchise Operator', 'Business Consultant'], modules: ['Business Idea Generation', 'Business Plan Writing', 'Accessing Funding', 'Sales & Marketing'] },
  { id: 11, name: 'Accounting Essentials (ATD)', category: 'Business', duration: '9 months', desc: 'Bookkeeping, payroll, and financial statements aligned with KNEC standards.', requirements: ['KCSE Grade C- or equivalent', 'Mathematics at KCSE preferred'], examBody: 'KNEC / KASNEB', careers: ['Accounts Assistant', 'Bookkeeper', 'Payroll Clerk', 'Tax Assistant'], modules: ['Financial Accounting', 'Cost Accounting', 'Taxation Basics', 'Computerised Accounting'] },
  { id: 12, name: 'HGV Driving License', category: 'Driving/Mechanical', duration: '4 weeks', desc: 'Earn your Class C/E heavy goods vehicle license with certified instructors.', requirements: ['Valid Class B driving license', 'KCPE Certificate minimum', 'Age 21+', 'Medical fitness certificate'], examBody: 'NTSA Kenya', careers: ['HGV Driver', 'Long Distance Truck Driver', 'Bus Driver', 'Logistics Driver'], modules: ['HGV Theory & Regulations', 'Vehicle Inspection', 'Practical Driving', 'NTSA Exam Prep'] },
  { id: 13, name: 'Motor Vehicle Mechanics', category: 'Driving/Mechanical', duration: '12 months', desc: 'Engine diagnostics, servicing, and repairs for petrol, diesel, and hybrid vehicles.', requirements: ['KCSE Grade D or equivalent', 'Hands-on aptitude recommended'], examBody: 'KNEC / NITA', careers: ['Motor Vehicle Mechanic', 'Garage Technician', 'Fleet Maintenance Tech', 'Automotive Entrepreneur'], modules: ['Engine Systems', 'Electrical Systems', 'Transmission & Brakes', 'Diagnostics & Fault Finding'] },
  { id: 14, name: 'Welding & Fabrication', category: 'Driving/Mechanical', duration: '6 months', desc: 'Arc, MIG and TIG welding with structural fabrication projects in our workshop.', requirements: ['KCSE Grade D or equivalent', 'Physical fitness for workshop environment'], examBody: 'KNEC / NITA', careers: ['Welder', 'Metal Fabricator', 'Structural Welder', 'Pipeline Welder'], modules: ['Arc Welding', 'MIG/TIG Welding', 'Metal Cutting', 'Structural Fabrication Projects'] },
  { id: 15, name: 'Hotel Management', category: 'Hospitality', duration: '9 months', desc: 'Front desk, housekeeping, guest services, and hospitality operations management.', requirements: ['KCSE Grade C- or equivalent', 'Customer-facing personality preferred'], examBody: 'KNEC', careers: ['Hotel Manager', 'Front Office Manager', 'Reservations Officer', 'Hospitality Entrepreneur'], modules: ['Front Office Operations', 'Housekeeping Management', 'Food & Beverage', 'Revenue Management'] },
  { id: 16, name: 'Professional Cooking', category: 'Hospitality', duration: '12 months', desc: 'Culinary arts from local cuisine to international dishes with hotel kitchen practice.', requirements: ['KCSE Grade D or equivalent', 'Passion for food and cooking'], examBody: 'KNEC', careers: ['Professional Chef', 'Sous Chef', 'Restaurant Owner', 'Catering Manager'], modules: ['Food Preparation Techniques', 'Kenyan Cuisine', 'International Cuisine', 'Pastry & Baking', 'Kitchen Management'] },
  { id: 17, name: 'Event Planning', category: 'Hospitality', duration: '6 months', desc: 'Coordinate weddings, corporate events, and functions end-to-end professionally.', requirements: ['KCSE Grade D or equivalent', 'Strong organizational skills'], examBody: 'KNEC / CDACC', careers: ['Event Planner', 'Wedding Coordinator', 'Corporate Events Manager', 'Conference Organizer'], modules: ['Event Conceptualization', 'Vendor Management', 'Budget & Finance', 'Marketing Events'] },
  { id: 18, name: 'Customer Service Excellence', category: 'Hospitality', duration: '3 months', desc: 'Communication, conflict resolution, and service standards for hospitality professionals.', requirements: ['KCSE Grade D or equivalent', 'Good communication skills'], examBody: 'CDACC / NITA', careers: ['Customer Service Rep', 'Call Centre Agent', 'Client Relations Officer', 'Service Supervisor'], modules: ['Communication Skills', 'Handling Complaints', 'Service Standards', 'CRM Tools'] },
]

const categories = ['All', 'Beauty', 'ICT', 'Business', 'Driving/Mechanical', 'Hospitality']

export function CoursesSection() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null)

  const filteredCourses = courses.filter((course) => {
    const matchesSearch = course.name.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === 'All' || course.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <section id="courses" className="w-full py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-6 mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-purple-600 text-balance">
            Our Academic Programs
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto text-balance">
            Explore our comprehensive schools offering specialized industry-recognized courses designed to develop professional expertise.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            <div className="p-4 bg-purple-50 rounded-lg">
              <h3 className="font-semibold text-purple-700">School of Engineering</h3>
              <p className="text-sm text-gray-600">Mechanical, Electrical, Welding</p>
            </div>
            <div className="p-4 bg-purple-50 rounded-lg">
              <h3 className="font-semibold text-purple-700">School of Business</h3>
              <p className="text-sm text-gray-600">Management, Accounting, Marketing</p>
            </div>
            <div className="p-4 bg-purple-50 rounded-lg">
              <h3 className="font-semibold text-purple-700">School of Technology</h3>
              <p className="text-sm text-gray-600">IT, Web Development, Design</p>
            </div>
            <div className="p-4 bg-purple-50 rounded-lg">
              <h3 className="font-semibold text-purple-700">School of Hospitality</h3>
              <p className="text-sm text-gray-600">Hotel Mgmt, Cooking, Events</p>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <div className="flex flex-col gap-4">
            <Input
              placeholder="Search courses..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="text-base"
            />

            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Badge
                  key={category}
                  variant={selectedCategory === category ? 'default' : 'outline'}
                  className="cursor-pointer py-2 px-3 text-sm font-medium hover:bg-primary/10 transition-colors"
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Badge>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCourses.map((course) => (
              <Card
                key={course.id}
                className="p-6 hover:shadow-xl hover:-translate-y-1 transition-all border-border flex flex-col rounded-2xl"
              >
                <div className="mb-3">
                  <Badge
                    variant="secondary"
                    className="bg-purple-100 text-purple-600 hover:bg-purple-200"
                  >
                    {course.category}
                  </Badge>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{course.name}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-3 flex-1">{course.desc}</p>
                <div className="mt-auto pt-4 border-t border-border space-y-3">
                  <span className="text-sm text-muted-foreground block">
                    ⏱ <span className="font-medium text-foreground">{course.duration}</span>
                  </span>
                  <div className="flex flex-col sm:flex-row gap-2 w-full">
                    <Button
                      variant="outline"
                      className="bg-transparent text-purple-700 border-purple-300 hover:bg-purple-50 hover:border-purple-600 rounded-xl w-full sm:w-auto"
                      size="sm"
                      onClick={() => setSelectedCourse(course)}
                    >
                      Learn More <ArrowRight className="ml-1" size={15} />
                    </Button>
                    <a href="/admission/new-applications" className="w-full sm:w-auto">
                      <Button className="bg-purple-600 hover:bg-purple-700 text-white rounded-xl w-full" size="sm">
                        Enroll →
                      </Button>
                    </a>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {filteredCourses.length === 0 && (
            <div className="text-center py-12">
              <p className="text-lg text-muted-foreground">No courses found matching your criteria.</p>
            </div>
          )}
        </div>
      </div>

      {/* Course Detail Modal */}
      <Dialog open={!!selectedCourse} onOpenChange={() => setSelectedCourse(null)}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto mx-3 sm:mx-auto rounded-2xl">
          {selectedCourse && (
            <>
              <DialogHeader>
                <div className="flex items-center gap-3 mb-2">
                  <Badge className="bg-purple-100 text-purple-600">{selectedCourse.category}</Badge>
                  <span className="text-sm text-muted-foreground">⏱ {selectedCourse.duration}</span>
                </div>
                <DialogTitle className="text-2xl font-bold text-purple-600">{selectedCourse.name}</DialogTitle>
                <p className="text-gray-600 mt-2">{selectedCourse.desc}</p>
              </DialogHeader>

              <div className="space-y-5 mt-4">
                {/* Entry Requirements */}
                <div className="p-4 bg-blue-50 rounded-xl">
                  <h4 className="font-bold text-blue-700 mb-3 flex items-center gap-2">
                    <CheckCircle size={18} /> Entry Requirements
                  </h4>
                  <ul className="space-y-2">
                    {selectedCourse.requirements.map((req, i) => (
                      <li key={i} className="text-sm text-gray-700 flex items-start gap-2">
                        <span className="text-blue-500 font-bold mt-0.5">•</span>{req}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Modules */}
                <div className="p-4 bg-purple-50 rounded-xl">
                  <h4 className="font-bold text-purple-700 mb-3 flex items-center gap-2">
                    <BookOpen size={18} /> What You Will Learn
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {selectedCourse.modules.map((mod, i) => (
                      <div key={i} className="text-sm text-gray-700 flex items-start gap-2">
                        <span className="text-purple-500 font-bold mt-0.5">✓</span>{mod}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Exam Body */}
                <div className="p-4 bg-yellow-50 rounded-xl flex items-center gap-3">
                  <Award className="text-yellow-600 shrink-0" size={22} />
                  <div>
                    <p className="text-sm font-bold text-yellow-800">Examination Body</p>
                    <p className="text-sm text-gray-700">{selectedCourse.examBody}</p>
                  </div>
                </div>

                {/* Career Outcomes */}
                <div className="p-4 bg-green-50 rounded-xl">
                  <h4 className="font-bold text-green-700 mb-3 flex items-center gap-2">
                    <Briefcase size={18} /> Career Outcomes
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedCourse.careers.map((career, i) => (
                      <span key={i} className="text-sm bg-green-100 text-green-800 px-3 py-1 rounded-full">{career}</span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <a href="/admission/new-applications" className="flex-1">
                    <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold" size="lg">
                      Apply for This Course
                    </Button>
                  </a>
                  <a href="tel:+254715505526" className="flex-1">
                    <Button variant="outline" className="w-full border-purple-600 text-purple-600 hover:bg-purple-50" size="lg">
                      Call to Inquire
                    </Button>
                  </a>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}
