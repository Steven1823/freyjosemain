import { Card } from '@/components/ui/card'
import { Phone, MapPin, Clock, Mail } from 'lucide-react'

export function InfoStrip() {
  const info = [
    {
      icon: MapPin,
      label: 'Location',
      value: 'Ngong, Kajiado County, Kenya',
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'info@freyjose.ac.ke',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '0715 505 526 / 0732 010 366',
    },
    {
      icon: Clock,
      label: 'Study Times',
      value: 'Day & Evening Classes',
    },
  ]

  return (
    <section className="w-full bg-slate-900 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {info.map((item, index) => {
            const Icon = item.icon
            return (
              <Card
                key={index}
                className="bg-white/95 border border-white/10 shadow-sm p-4 md:p-6 flex flex-col items-center text-center space-y-1.5"
              >
                <div className="w-10 h-10 md:w-12 md:h-12 bg-slate-100 rounded-full flex items-center justify-center">
                  <Icon className="text-slate-700" size={22} />
                </div>
                <p className="text-xs text-slate-500 font-semibold uppercase tracking-[0.2em]">{item.label}</p>
                <p className="text-xs md:text-base font-medium text-slate-900 leading-tight">{item.value}</p>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
