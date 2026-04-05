'use client'

import { FormEvent, useState } from 'react'
import { ArrowRight, BellRing, CheckCircle2, Loader2 } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

type NewsletterState = {
  status: 'idle' | 'loading' | 'success' | 'error'
  message: string
}

export function NewsletterSection() {
  const [email, setEmail] = useState('')
  const [state, setState] = useState<NewsletterState>({ status: 'idle', message: '' })

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (!email.trim()) {
      setState({ status: 'error', message: 'Enter your email address to subscribe.' })
      return
    }

    setState({ status: 'loading', message: '' })

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: email.trim() }),
      })

      const data = (await response.json()) as { message?: string }

      if (!response.ok) {
        throw new Error(data.message || 'Unable to subscribe right now.')
      }

      setState({
        status: 'success',
        message:
          data.message || 'You have been added to the FREYJOSE updates list. Expect intake, scholarship, and event news.',
      })
      setEmail('')
    } catch (error) {
      setState({
        status: 'error',
        message:
          error instanceof Error
            ? error.message
            : 'Subscription failed. Please try again or contact info@freyjose.ac.ke.',
      })
    }
  }

  return (
    <section className="bg-[#0b1a2f] py-16 text-white sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-[28px] border border-white/10 bg-[radial-gradient(circle_at_top_left,_rgba(196,167,106,0.18),_transparent_35%),linear-gradient(135deg,#102543_0%,#0b1a2f_55%,#122f56_100%)] p-6 shadow-2xl sm:p-10 lg:p-12">
          <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#c4a76a]/35 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#d8c08f]">
                <BellRing size={14} />
                FREYJOSE Updates
              </div>
              <h2 className="max-w-2xl text-3xl font-bold leading-tight text-white sm:text-4xl">
                Subscribe for new intakes, open days, fee updates, and campus news.
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
                Subscribers are added to the FREYJOSE admissions updates list so the college can send announcements on courses, intakes, graduation dates, and student opportunities.
              </p>
              <div className="mt-6 grid gap-3 text-sm text-slate-200 sm:grid-cols-3">
                <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">New intake alerts</div>
                <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">Scholarship and fee notices</div>
                <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">Open day and event reminders</div>
              </div>
            </div>

            <div className="rounded-[24px] border border-white/10 bg-white/5 p-5 backdrop-blur sm:p-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <label className="block text-sm font-medium text-slate-200" htmlFor="newsletter-email">
                  Email address
                </label>
                <Input
                  id="newsletter-email"
                  type="email"
                  placeholder="info@freyjose.ac.ke"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  className="h-12 border-white/15 bg-white/95 text-slate-900 placeholder:text-slate-500"
                />
                <Button
                  type="submit"
                  disabled={state.status === 'loading'}
                  className="h-12 w-full rounded-xl bg-[#c4a76a] text-[#0b1a2f] hover:bg-[#d6bc86]"
                >
                  {state.status === 'loading' ? (
                    <>
                      <Loader2 size={16} className="mr-2 animate-spin" />
                      Subscribing...
                    </>
                  ) : (
                    <>
                      Subscribe Now
                      <ArrowRight size={16} className="ml-2" />
                    </>
                  )}
                </Button>
              </form>

              {state.status !== 'idle' && (
                <div
                  className={`mt-4 rounded-2xl border px-4 py-3 text-sm ${
                    state.status === 'success'
                      ? 'border-emerald-400/30 bg-emerald-400/10 text-emerald-100'
                      : 'border-red-400/30 bg-red-400/10 text-red-100'
                  }`}
                >
                  <div className="flex items-start gap-2">
                    {state.status === 'success' && <CheckCircle2 size={16} className="mt-0.5" />}
                    <span>{state.message}</span>
                  </div>
                </div>
              )}

              <p className="mt-4 text-xs leading-6 text-slate-400">
                Need a faster response? Email info@freyjose.ac.ke or call 0715 505 526.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
