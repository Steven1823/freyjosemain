'use client'

import { FormEvent, useEffect, useMemo, useRef, useState } from 'react'
import { Bot, Loader2, MessageCircle, Send, X } from 'lucide-react'

type ChatMessage = {
  role: 'user' | 'assistant'
  content: string
}

const starterQuestions = [
  'Guide me on how to apply',
  'Help me choose a course',
  'What are the entry requirements?',
]

function getSuggestedPrompts(messages: ChatMessage[]): string[] {
  const latestUserMessage = [...messages].reverse().find((message) => message.role === 'user')
  const latestPrompt = latestUserMessage?.content.toLowerCase() || ''

  if (latestPrompt.includes('apply') || latestPrompt.includes('admission')) {
    return ['What documents do I need?', 'How much is the application fee?', 'How long does approval take?']
  }

  if (latestPrompt.includes('course') || latestPrompt.includes('program') || latestPrompt.includes('study')) {
    return ['Which ICT courses are available?', 'How long do courses take?', 'What certificates are offered?']
  }

  if (latestPrompt.includes('fee') || latestPrompt.includes('payment') || latestPrompt.includes('cost')) {
    return ['Are payment plans available?', 'How much is the application fee?', 'How do I contact admissions?']
  }

  if (latestPrompt.includes('campus') || latestPrompt.includes('student life')) {
    return ['What facilities are available?', 'Do you offer student support?', 'Where is the college located?']
  }

  return ['How do I apply?', 'What courses are offered?', 'How do I contact admissions?']
}

function localFallback(question: string): string {
  const q = question.toLowerCase()
  if (q.includes('hello') || q.includes('hi') || q.includes('hey')) {
    return 'Hi there. I am your FREYJOSE assistant. You can ask me about admissions, requirements, courses, fees guidance, student life, graduation, or contact details.'
  }
  if (q.includes('admission') || q.includes('apply') || q.includes('application') || q.includes('enroll')) {
    return 'You can apply through the New Applications page under Admission. The process includes choosing a course, submitting your application, document verification, possible interview, fee payment, and confirmation plus induction.'
  }
  if (q.includes('requirement') || q.includes('qualification') || q.includes('kcse') || q.includes('kcpe') || q.includes('document')) {
    return 'Level 6 courses require KCSE C- minus, Level 5 requires KCSE D, and Level 3 accepts a KCPE certificate. Common documents include an ID or passport, academic certificates, a birth certificate copy, and two passport photos.'
  }
  if (q.includes('course') || q.includes('program') || q.includes('study')) {
    return 'FREYJOSE offers programs in Beauty & Cosmetology, ICT & Computer Studies, Business & Accounting, Driving & Mechanical, and Hospitality & Catering. Visit the Courses page for the full list.'
  }
  if (q.includes('fee') || q.includes('cost') || q.includes('price') || q.includes('payment') || q.includes('scholarship') || q.includes('financial')) {
    return 'The application fee is KSH 1,000. Course fees vary by program. FREYJOSE also mentions payment plans and some merit-based support for deserving students.'
  }
  if (q.includes('contact') || q.includes('phone') || q.includes('email') || q.includes('call') || q.includes('whatsapp')) {
    return 'Phone: +254 715 505 526 | Email: info@freyjose.ac.ke | Location: Ngong Town, Kajiado County | Hours: Mon-Fri 8 AM-6 PM, Sat 9 AM-1 PM'
  }
  if (q.includes('location') || q.includes('where') || q.includes('address') || q.includes('ngong')) {
    return 'FREYJOSE is located in Ngong Town, Kajiado County, Kenya. You can also reach us at +254 715 505 526 for directions.'
  }
  if (q.includes('campus') || q.includes('facility') || q.includes('student life') || q.includes('club') || q.includes('sports')) {
    return 'Campus life includes student clubs, an innovation hub, sports and recreation, counseling, career guidance, modern labs, workshops, a library, cafeteria, prayer rooms, lounges, and accessible grounds.'
  }
  if (q.includes('class') || q.includes('schedule') || q.includes('duration') || q.includes('evening') || q.includes('morning') || q.includes('afternoon')) {
    return 'Programs generally run from 3 to 12 months depending on the course, and FREYJOSE mentions flexible morning, afternoon, and evening class options.'
  }
  if (q.includes('principal') || q.includes('management') || q.includes('leader') || q.includes('leadership')) {
    return 'For leadership or governance inquiries, please contact the college office at +254 715 505 526 or info@freyjose.ac.ke.'
  }
  if (q.includes('mission') || q.includes('vision') || q.includes('motto') || q.includes('value')) {
    return 'FREYJOSE says its mission is to unlock student potential through tailored professional and technical education. Its motto is Opportunities through Knowledge, and its values include Respect, Teamwork, Integrity, Customer Focus, and Creativity and Innovativeness.'
  }
  if (q.includes('graduation') || q.includes('graduate') || q.includes('gown') || q.includes('ceremony')) {
    return 'The graduation page says FREYJOSE celebrated over 60 students in its January 24, 2026 ceremony at the Ngong campus. Students graduate after completing their program, clearing fees, registering, collecting a gown, and attending the ceremony.'
  }
  if (q.includes('event') || q.includes('open day') || q.includes('workshop') || q.includes('showcase')) {
    return 'The site lists intake open days every Saturday from 9 AM to 1 PM, graduation celebrations, a Beauty and Cosmetology showcase, and monthly ICT and Business workshops.'
  }
  if (q.includes('international') || q.includes('foreign') || q.includes('visa')) {
    return 'International students are welcome. The site mentions that they may need a valid passport, English proficiency evidence, and depending on country, a student visa.'
  }
  return 'I can help with FREYJOSE admissions, requirements, courses, fees guidance, campus life, graduation, leadership, and contact details. Ask me a specific question and I will keep it simple.'
}

export function AIAssistantFloat() {
  const [open, setOpen] = useState(false)
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const messageEndRef = useRef<HTMLDivElement | null>(null)
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: 'assistant',
      content:
        'Hi there. I am your FREYJOSE assistant. I can guide you on admissions, courses, contacts, and campus information. What would you like help with today?',
    },
  ])

  useEffect(() => {
    if (!open) {
      return
    }

    const previousOverflow = document.body.style.overflow
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false)
      }
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [open])

  useEffect(() => {
    if (!open) {
      return
    }

    messageEndRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' })
  }, [messages, loading, open])

  const canSend = useMemo(() => input.trim().length > 0 && !loading, [input, loading])
  const suggestedPrompts = useMemo(() => getSuggestedPrompts(messages), [messages])
  const closeAssistant = () => setOpen(false)

  const submitQuestion = async (text: string) => {
    const userText = text.trim()
    if (!userText || loading) {
      return
    }

    const nextMessages: ChatMessage[] = [...messages, { role: 'user', content: userText }]
    setMessages(nextMessages)
    setInput('')
    setLoading(true)
    let timeoutId: ReturnType<typeof setTimeout> | null = null

    try {
      const controller = new AbortController()
      timeoutId = setTimeout(() => controller.abort(), 12000)

      const response = await fetch('/api/assistant', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: nextMessages.slice(-8) }),
        signal: controller.signal,
      })

      const data = (await response.json()) as { answer?: string; error?: string }

      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content:
            data.answer ||
            data.error ||
            localFallback(userText),
        },
      ])
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content: localFallback(userText),
        },
      ])
    } finally {
      if (timeoutId) {
        clearTimeout(timeoutId)
      }
      setLoading(false)
    }
  }

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    await submitQuestion(input)
  }

  return (
    <div className="fixed bottom-5 left-4 z-50 hidden sm:block sm:bottom-24 sm:left-auto sm:right-6">
      {open && (
        <>
          <button
            type="button"
            aria-label="Close assistant overlay"
            onClick={closeAssistant}
            className="fixed inset-0 bg-slate-950/40"
          />
          <div className="fixed inset-x-0 bottom-0 top-0 z-50 flex items-end sm:inset-auto sm:bottom-24 sm:right-6 sm:top-auto">
            <div
              role="dialog"
              aria-modal="true"
              aria-label="FREYJOSE AI assistant"
              className="mt-auto flex h-[92dvh] w-full flex-col overflow-hidden rounded-t-3xl border border-slate-200 bg-white shadow-2xl sm:mt-0 sm:h-[560px] sm:w-[min(92vw,380px)] sm:rounded-2xl"
            >
              <div className="flex justify-center bg-white pt-2 sm:hidden">
                <div className="h-1.5 w-12 rounded-full bg-slate-300" />
              </div>

              <div className="flex items-center justify-between bg-slate-900 px-4 py-3 text-white">
                <div className="flex items-center gap-2">
                  <Bot size={18} />
                  <div>
                    <p className="font-semibold text-sm">FREYJOSE AI Assistant</p>
                    <p className="text-[11px] text-slate-300">Ask anything about FREYJOSE</p>
                  </div>
                </div>
                <button
                  type="button"
                  aria-label="Close assistant"
                  onClick={closeAssistant}
                  className="inline-flex items-center gap-1 rounded-md px-2 py-1 text-xs font-medium transition-colors hover:bg-slate-700"
                >
                  <X size={18} />
                  <span>Close</span>
                </button>
              </div>

              <div className="border-b border-slate-100 bg-slate-50 px-3 py-3">
                <div className="mb-2 text-[11px] font-medium text-slate-500 sm:hidden">Tap outside or use Close to exit</div>
                <div className="flex gap-2 overflow-x-auto pb-1">
                  {starterQuestions.map((question) => (
                    <button
                      key={question}
                      type="button"
                      onClick={() => submitQuestion(question)}
                      disabled={loading}
                      className="whitespace-nowrap rounded-full border border-slate-200 bg-white px-2.5 py-1.5 text-xs hover:bg-slate-100 disabled:opacity-60"
                    >
                      {question}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex-1 overflow-y-auto bg-gradient-to-b from-white to-slate-50 px-3 py-3 space-y-3">
                {messages.map((message, index) => (
                  <div
                    key={`${message.role}-${index}`}
                    className={`max-w-[92%] rounded-xl px-3 py-2 text-sm leading-relaxed whitespace-pre-wrap ${
                      message.role === 'user'
                        ? 'ml-auto bg-blue-600 text-white'
                        : 'mr-auto bg-white border border-slate-200 text-slate-800'
                    }`}
                  >
                    {message.content}
                  </div>
                ))}
                {loading && (
                  <div className="mr-auto flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-800">
                    <Loader2 size={14} className="animate-spin" />
                    Thinking...
                  </div>
                )}
                <div ref={messageEndRef} />
              </div>

              <div className="border-t border-slate-200 bg-white px-3 pt-3 pb-[calc(env(safe-area-inset-bottom)+12px)] sm:pb-3">
                <div className="mb-3 flex gap-2 overflow-x-auto">
                  {suggestedPrompts.map((prompt) => (
                    <button
                      key={prompt}
                      type="button"
                      onClick={() => submitQuestion(prompt)}
                      disabled={loading}
                      className="whitespace-nowrap rounded-full bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-700 disabled:opacity-60"
                    >
                      {prompt}
                    </button>
                  ))}
                </div>

                <form onSubmit={onSubmit} className="space-y-3">
                  <div className="flex items-center gap-2">
                    <input
                      value={input}
                      onChange={(event) => setInput(event.target.value)}
                      placeholder="Ask about admissions, courses, fees, graduation..."
                      className="flex-1 rounded-lg border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button
                      type="submit"
                      disabled={!canSend}
                      className="grid h-10 w-10 place-items-center rounded-lg bg-blue-600 text-white disabled:opacity-60 hover:bg-blue-700"
                      aria-label="Send message"
                    >
                      <Send size={16} />
                    </button>
                  </div>
                  <button
                    type="button"
                    onClick={closeAssistant}
                    className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm font-medium text-slate-700 sm:hidden"
                  >
                    Close assistant
                  </button>
                </form>
              </div>
            </div>
          </div>
        </>
      )}

      {!open && (
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="h-14 w-14 rounded-full bg-slate-900 text-white shadow-xl hover:bg-slate-800 grid place-items-center"
          aria-label="Open AI assistant"
        >
          <MessageCircle size={24} />
        </button>
      )}
    </div>
  )
}
