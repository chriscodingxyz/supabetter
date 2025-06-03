'server only'

// lib/email/index.ts - Even simpler
import { Resend, Tag } from 'resend'
import logger from '@/utils/logger'

// TODO: get clarity, suposedly since email stuff in better-auth is called via client
// These functions are good enough and dont need a server action

const resend = new Resend(process.env.RESEND_API_KEY)

// TODO: update the conditionals later

export const authEmails = {
  async sendVerification (
    email: string,
    verificationUrl: string,
    userName?: string
  ) {
    const { data, error } = await resend.emails.send({
      from: process.env.EMAIL_FROM || 'Acme <onboarding@resend.dev>',
      to: email,
      subject: 'Verify your email address',
      html: `
        <div>
          <h2>Hi ${userName || 'there'}!</h2>
          <p>Click this link to verify your email:</p>
          <a href="${verificationUrl}">Verify Email</a>
        </div>
      `,
      tags: [
        { name: 'type', value: 'auth' },
        { name: 'subtype', value: 'verification' }
      ]
    })

    if (error) {
      logger.error('Email error:', error)
      throw error
    }

    return { success: true }
  },

  async sendPasswordReset (email: string, resetUrl: string, userName?: string) {
    const { data, error } = await resend.emails.send({
      from: process.env.EMAIL_FROM || 'Acme <onboarding@resend.dev>',
      to: email,
      subject: 'Reset your password',
      html: `
        <div>
          <h2>Hi ${userName || 'there'}!</h2>
          <p>Click this link to reset your password:</p>
          <a href="${resetUrl}">Reset Password</a>
        </div>
      `,
      tags: [
        { name: 'type', value: 'auth' },
        { name: 'subtype', value: 'password-reset' }
      ]
    })

    if (error) {
      logger.error('Email error:', error)
      throw error
    }

    return { success: true }
  }
}
