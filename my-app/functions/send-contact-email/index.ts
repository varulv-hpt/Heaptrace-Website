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
  console.log(
    "Sanity document event received for contactSubmission, but email sending is now handled by the Next.js /api/contact route.",
  )
})