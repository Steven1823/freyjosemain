'use client'

import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative w-full bg-gradient-to-br from-white via-background to-primary/5 py-20 md:py-32 overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-6">
          <div className="flex justify-center gap-2">
            <Badge className="bg-accent text-white hover:bg-accent/90">
              Intake In Progress
            </Badge>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary text-balance">
            Transform Your Future with Professional Training
          </h1>

          <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto text-balance">
            FREYJOSE Technical Training College offers internationally recognized courses in Beauty, ICT, Business,
            Driving/Mechanical, and Hospitality. Start your journey to success today.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <Button size="lg" className="text-base">
              Apply Now
            </Button>
            <Button size="lg" variant="outline" className="text-base bg-transparent">
              Explore Courses
            </Button>
          </div>

          <div className="grid grid-cols-3 gap-4 pt-12 max-w-md mx-auto text-center">
            <div>
              <div className="text-3xl font-bold text-primary">5+</div>
              <p className="text-sm text-muted-foreground">Course Categories</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent">500+</div>
              <p className="text-sm text-muted-foreground">Graduates</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">100%</div>
              <p className="text-sm text-muted-foreground">Success Rate</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
