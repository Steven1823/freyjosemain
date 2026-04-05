import { promises as fs } from 'node:fs'
import path from 'node:path'

import { NextResponse } from 'next/server'

type NewsletterRequest = {
  email?: string
}

type SubscriberRecord = {
  email: string
  subscribedAt: string
  source: 'website'
}

const subscriberFile = path.join(process.cwd(), 'data', 'newsletter-subscribers.json')

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

async function ensureSubscriberFile() {
  await fs.mkdir(path.dirname(subscriberFile), { recursive: true })

  try {
    await fs.access(subscriberFile)
  } catch {
    await fs.writeFile(subscriberFile, '[]', 'utf8')
  }
}

async function saveSubscriber(email: string) {
  await ensureSubscriberFile()

  const raw = await fs.readFile(subscriberFile, 'utf8')
  const subscribers = JSON.parse(raw) as SubscriberRecord[]
  const normalizedEmail = email.toLowerCase()

  const exists = subscribers.some((entry) => entry.email.toLowerCase() === normalizedEmail)
  if (exists) {
    return false
  }

  subscribers.push({
    email: normalizedEmail,
    subscribedAt: new Date().toISOString(),
    source: 'website',
  })

  await fs.writeFile(subscriberFile, JSON.stringify(subscribers, null, 2), 'utf8')
  return true
}

async function syncToBrevo(email: string) {
  const apiKey = process.env.BREVO_API_KEY
  const rawListId = process.env.BREVO_LIST_ID

  if (!apiKey || !rawListId) {
    return
  }

  const listId = Number(rawListId)
  if (!Number.isFinite(listId)) {
    return
  }

  await fetch('https://api.brevo.com/v3/contacts', {
    method: 'POST',
    headers: {
      accept: 'application/json',
      'api-key': apiKey,
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      email,
      listIds: [listId],
      updateEnabled: true,
    }),
  })
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as NewsletterRequest
    const email = body.email?.trim().toLowerCase()

    if (!email || !isValidEmail(email)) {
      return NextResponse.json(
        { message: 'Enter a valid email address to subscribe.' },
        { status: 400 }
      )
    }

    const isNewSubscriber = await saveSubscriber(email)
    await syncToBrevo(email)

    return NextResponse.json({
      message: isNewSubscriber
        ? 'You are subscribed. Your email has been added to the FREYJOSE admissions updates list.'
        : 'This email is already subscribed to FREYJOSE updates.',
    })
  } catch {
    return NextResponse.json(
      { message: 'Unable to save your subscription right now. Please try again shortly.' },
      { status: 500 }
    )
  }
}
