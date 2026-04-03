import { NextResponse } from 'next/server'
import { getRelevantKnowledge, type KnowledgeItem } from '@/lib/assistant-knowledge'

type ChatRole = 'user' | 'assistant'

type ChatMessage = {
  role: ChatRole
  content: string
}

type AssistantRequest = {
  messages?: ChatMessage[]
}

function formatRecentConversation(messages: ChatMessage[]): string {
  return messages
    .slice(-6)
    .map((message) => `${message.role === 'user' ? 'User' : 'Assistant'}: ${message.content}`)
    .join('\n')
}

function resolveQuestion(question: string, messages: ChatMessage[]): string {
  const normalizedQuestion = question.trim()
  const lowerQuestion = normalizedQuestion.toLowerCase()
  const previousUserMessage = [...messages]
    .slice(0, -1)
    .reverse()
    .find((message) => message.role === 'user' && message.content.trim())

  if (!previousUserMessage) {
    return normalizedQuestion
  }

  const isFollowUp =
    normalizedQuestion.split(/\s+/).length <= 6 ||
    /(what about|how about|and fees|and requirements|tell me more|more about|what next|can i|do i|how long|how much|where exactly|who is|and what|also)/.test(
      lowerQuestion
    )

  if (!isFollowUp) {
    return normalizedQuestion
  }

  return `${previousUserMessage.content.trim()}\nFollow-up question: ${normalizedQuestion}`
}

function findKnowledge(relevant: KnowledgeItem[], id: string): KnowledgeItem | undefined {
  return relevant.find((item) => item.id === id)
}

function matchesPattern(text: string, pattern: RegExp): boolean {
  return pattern.test(text)
}

function buildFallbackAnswer(question: string, relevant: KnowledgeItem[]): string {
  const q = question.toLowerCase()
  const knowledgeSnippets = relevant.map((item) => `${item.title}: ${item.content}`)

  if (q.includes('hello') || q.includes('hi') || q.includes('hey')) {
    return 'Hi there. I am your FREYJOSE assistant and I am happy to help. You can ask me about admissions, courses, fees guidance, campus location, or contact details. What would you like to start with?'
  }

  if (matchesPattern(q, /\bmission\b|\bvision\b|\bmotto\b|\bvalue\b|\bvalues\b/)) {
    return findKnowledge(relevant, 'mission-vision')?.content || 'FREYJOSE focuses on practical, student-centered technical education. If you want, I can also share the college motto and core values.'
  }

  if (q.includes('principal') || q.includes('management') || q.includes('leader') || q.includes('leadership')) {
    return findKnowledge(relevant, 'management')?.content || 'FREYJOSE has a structured leadership team that oversees academics, administration, student affairs, and finance.'
  }

  if (q.includes('requirement') || q.includes('qualification') || q.includes('kcse') || q.includes('kcpe') || q.includes('document')) {
    return findKnowledge(relevant, 'requirements')?.content || 'Entry depends on the level of study, and you will usually need academic documents plus identification. Tell me the course level you want and I will narrow it down.'
  }

  if (q.includes('fee') || q.includes('cost') || q.includes('price') || q.includes('payment') || q.includes('scholarship') || q.includes('financial')) {
    return findKnowledge(relevant, 'fees-support')?.content || 'Fees vary by program, payment plans are available, and the application fee is KSH 1,000.'
  }

  if (q.includes('admission') || q.includes('apply') || q.includes('application')) {
    return 'You can apply through the New Applications page under Admission. The process includes choosing a course, submitting your application, document verification, possible interview, fee payment, and confirmation plus induction. If you want, I can walk you through the application step by step.'
  }

  if (q.includes('course') || q.includes('program')) {
    return 'FREYJOSE offers programs across Beauty, ICT, Business, Driving/Mechanical, and Hospitality. You can view the full list on the Courses Offered page. If you tell me your interest area, I can suggest suitable options.'
  }

  if (q.includes('class') || q.includes('schedule') || q.includes('duration') || q.includes('evening') || q.includes('morning') || q.includes('afternoon')) {
    return findKnowledge(relevant, 'schedules')?.content || 'Programs generally run from 3 to 12 months, and the college mentions flexible class schedules including morning, afternoon, and evening options.'
  }

  if (q.includes('support') || q.includes('counsel') || q.includes('guidance') || q.includes('class size') || q.includes('environment')) {
    return findKnowledge(relevant, 'student-support')?.content || 'FREYJOSE mentions student support services including counseling, academic support, and career guidance.'
  }

  if (q.includes('campus') || q.includes('facility') || q.includes('student life') || q.includes('club') || q.includes('sports')) {
    return findKnowledge(relevant, 'campus-life')?.content || 'Campus life includes clubs, support services, sports, and practical learning facilities.'
  }

  if (q.includes('event') || q.includes('open day') || q.includes('workshop') || q.includes('showcase')) {
    return findKnowledge(relevant, 'events')?.content || 'The site lists open days, graduation events, showcases, and monthly workshops.'
  }

  if (q.includes('graduation') || q.includes('graduate') || q.includes('gown') || q.includes('ceremony')) {
    return findKnowledge(relevant, 'graduation')?.content || 'Graduation information is available on the site, including ceremony details and the steps students need to complete before graduating.'
  }

  if (q.includes('international') || q.includes('foreign') || q.includes('visa')) {
    return findKnowledge(relevant, 'international-students')?.content || 'International students are welcome, though visa and document requirements may depend on your country.'
  }

  if (q.includes('contact') || q.includes('phone') || q.includes('email') || q.includes('call') || q.includes('whatsapp')) {
    return 'You can reach the college at +254 715 505 526. The listed email is info@freyjose.ac.ke, and location is Ngong Town, Kajiado County. Office hours are Mon-Fri 8:00 AM to 6:00 PM and Sat 9:00 AM to 1:00 PM.'
  }

  if (knowledgeSnippets.length > 0) {
    const topSnippets = knowledgeSnippets.slice(0, 3)
    return `Great question. Here is a quick FREYJOSE summary:\n\n- ${topSnippets.join('\n- ')}\n\nIf you want, I can now help with applications, requirements, courses, fees guidance, student life, graduation, or contacts.`
  }

  return 'I am here to help with FREYJOSE information, including admissions, courses, requirements, and contacts. Ask me anything and I will keep it simple and clear.'
}

async function askRemoteModel(question: string, context: string, messages: ChatMessage[]): Promise<string | null> {
  const apiKey = process.env.OPENAI_API_KEY
  const model = process.env.AI_AGENT_MODEL || 'gpt-4o-mini'

  if (!apiKey) {
    return null
  }

  const controller = new AbortController()
  const timeoutId = setTimeout(() => controller.abort(), 10000)

  try {
    const recentConversation = formatRecentConversation(messages)

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model,
        temperature: 0.2,
        messages: [
          {
            role: 'system',
            content:
              'You are the FREYJOSE website assistant. Be warm, conversational, and practical like a helpful admissions desk assistant. Only answer using provided context and recent conversation. If the answer is not in context, say you are not sure and suggest contacting admissions at +254 715 505 526. Keep answers concise, avoid robotic wording, and end with one short helpful follow-up question when appropriate. When the user asks a follow-up, use the recent conversation to keep continuity.',
          },
          {
            role: 'user',
            content: `Context:\n${context}\n\nRecent conversation:\n${recentConversation || 'None'}\n\nQuestion: ${question}`,
          },
        ],
      }),
      signal: controller.signal,
    })

    if (!response.ok) {
      return null
    }

    const data = (await response.json()) as {
      choices?: Array<{ message?: { content?: string } }>
    }

    const content = data.choices?.[0]?.message?.content?.trim()
    return content || null
  } catch {
    return null
  } finally {
    clearTimeout(timeoutId)
  }
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as AssistantRequest
    const messages = Array.isArray(body.messages) ? body.messages : []
    const latestUserMessage = [...messages].reverse().find((msg) => msg.role === 'user')

    if (!latestUserMessage?.content?.trim()) {
      return NextResponse.json({ error: 'A user question is required.' }, { status: 400 })
    }

    const question = latestUserMessage.content.trim()
    const resolvedQuestion = resolveQuestion(question, messages)
    const relevant = getRelevantKnowledge(resolvedQuestion)
    const snippets = relevant.map((item) => `${item.title}: ${item.content}`)
    const context = snippets.join('\n\n')

    const remoteReply = await askRemoteModel(resolvedQuestion, context, messages)
    const answer = remoteReply ?? buildFallbackAnswer(resolvedQuestion, relevant)

    return NextResponse.json({
      answer,
      sources: relevant.map((item) => item.title),
      mode: remoteReply ? 'model' : 'fallback',
    })
  } catch {
    return NextResponse.json(
      { error: 'Unable to process your request right now. Please try again shortly.' },
      { status: 500 }
    )
  }
}
