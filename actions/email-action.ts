'use server'

import logger from "@/utils/logger"
import React from "react"
import { Resend } from "resend"
import ContactFormTemplate from "@/lib/resend/ContactFormTemplate"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendEmailAction (formData: FormData) {

const name = formData.get('name') as string
const senderEmail = formData.get('senderEmail') as string
const message = formData.get('message') as string


  const { data, error } = await resend.emails.send({
    from: 'Acme <onboarding@resend.dev>',
    to: ['cherrydub@gmail.com'],
    subject: 'Hello world',
    react: React.createElement(ContactFormTemplate, {
      name: name || 'John Doe',
      message: message || 'Hello world',
      senderEmail: senderEmail || 'testing@gmail.com'
    })
  })

  if (error) {
    logger.error('Error sending email via email-action:', error)
    return { success: false, error }
  }

  logger.success('Email sent successfully via email-action:', data)

  return { success: true }

}
