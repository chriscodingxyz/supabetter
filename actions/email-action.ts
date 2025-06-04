'use server'

import logger from '@/utils/logger'
import React from 'react'
import { Resend } from 'resend'
import ContactFormTemplate from '@/lib/resend/ContactFormTemplate'
import { ContactFormSchemaZ } from '@/lib/types'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendContactEmailAction (formData: FormData) {
  const parseResult = ContactFormSchemaZ.safeParse(
    Object.fromEntries(formData.entries())
  )

  if (!parseResult.success) {
    logger.error('Validation error:', parseResult.error)
    return { success: false, error: parseResult.error.errors }
  }

  const { name, senderEmail, message } = parseResult.data

  const { data, error } = await resend.emails.send({
    from: 'Acme <onboarding@resend.dev>',
    to: ['cherrydub@gmail.com'],
    subject: 'Hello world',
    react: React.createElement(ContactFormTemplate, {
      name,
      message,
      senderEmail
    })
  })

  if (error) {
    logger.error('Error sending email via email-action:', error)
    return { success: false, error }
  }

  logger.success('Email sent successfully via email-action:', data)

  return { success: true }
}
