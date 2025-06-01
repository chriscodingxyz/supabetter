// import { EmailTemplate } from '@/components/email/EmailTemplate'
// import { Resend } from 'resend'
// import { NextRequest } from 'next/server'
// import * as React from 'react'

// const resend = new Resend(process.env.RESEND_API_KEY)

// export async function POST (request: NextRequest) {
//   try {
//     const { firstName, email, message } = await request.json()

//     const { data, error } = await resend.emails.send({
//       from: 'onboarding@resend.dev',
//       to: [email],
//       subject: 'Hello!',
//       react: React.createElement(EmailTemplate, { firstName, message })
//     })

//     if (error) {
//       return Response.json({ error }, { status: 500 })
//     }

//     return Response.json(data)
//   } catch (error) {
//     return Response.json({ error }, { status: 500 })
//   }
// }

import { EmailTemplate } from '@/components/email/EmailTemplate'
import { Resend } from 'resend'
import * as React from 'react'
import logger from '@/utils/logger'

const resend = new Resend(process.env.RESEND_API_KEY)

// export async function POST () {
//   try {
//     const { data, error } = await resend.emails.send({
//       from: 'Acme <onboarding@resend.dev>',
//       to: ['cherrydub@gmail.com'],
//       subject: 'Hello world',
//       react: React.createElement(EmailTemplate, { firstName: 'John' })
//     })

//     if (error) {
//       return Response.json({ error }, { status: 500 })
//     }

//     return Response.json(data)
//   } catch (error) {
//     return Response.json({ error }, { status: 500 })
//   }
// }

export async function GET () {
  try {
    const { data, error } = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ['cherrydub@gmail.com'],
      subject: 'Test Email from Browser',
      react: React.createElement(EmailTemplate, { name: 'John' })
    })

    if (error) {
      logger.error('If error:', error)
      return Response.json({ error }, { status: 500 })
    }

    return Response.json({
      message: 'Email sent successfully!',
      id: data?.id
    })
  } catch (error) {
    logger.error('Catch error:', error)
    return Response.json({ error }, { status: 500 })
  }
}
