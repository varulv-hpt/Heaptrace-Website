import { documentEventHandler } from '@sanity/functions'

interface ContactSubmission {
  _id: string
  _type: 'contactSubmission'
  name: string
  email: string
  message: string
  submittedAt: string
  status: string
}

export const handler = documentEventHandler<ContactSubmission>(async ({ event }) => {
  const { data } = event

  // Email details
  const toEmail = 'varulv@heaptrace.com'
  const subject = 'New Contact Submission from Heaptrace Website'
  const body = `
New submission received:
- Name: ${data.name}
- Email: ${data.email}
- Message: ${data.message}
- Submitted At: ${data.submittedAt}
  `

  // Send email via Resend API
  const resendApiKey = process.env.RESEND_API_KEY
  if (!resendApiKey) {
    console.error('RESEND_API_KEY not set')
    throw new Error('Email API key missing')
  }

  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${resendApiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: 'noreply@heaptrace.com',  // Verify this domain in Resend
      to: [toEmail],
      subject,
      text: body,
    }),
  })

  if (!response.ok) {
    console.error('Failed to send email:', await response.text())
    throw new Error('Email send failed')
  }

  console.log(`Email sent for contact submission ${data._id}`)
})