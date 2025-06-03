// 'use server'

// import logger from '@/utils/logger'
// import React from 'react'
// import { Resend } from 'resend'
// const resend = new Resend(process.env.RESEND_API_KEY)

// export async function sendEmailAction ({
//   to,
//   subject,
//   meta
// }: {
//   to: string
//   subject: string
//   meta: {
//     description: string
//     link: string
//   }
// }) {
//   const mailOptions = {
//     from: 'Acme <onboarding@resend.dev>',
//     to,
//     subject,
//     meta,
//     link: meta.link
//   }

//   const { data, error: resendError } = await resend.emails.send({
//     from: 'Cdub <cherrydub@gmail.com>',
//     to,
//     subject,
//     react: React.createElement('hello', { meta })
//   })

//   if (resendError) {
//     logger.error('Error sending email:', resendError)
//     return { success: false, error: resendError }
//   }

//   logger.success('Email sent successfully:', data)

//   return { success: true }
// }
