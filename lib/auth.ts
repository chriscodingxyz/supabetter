import 'server-only'

import { betterAuth } from 'better-auth'
import { drizzleAdapter } from 'better-auth/adapters/drizzle'
import { db } from '@/db'
import * as schema from '@/db/schemas/auth-schema'
import { nextCookies } from 'better-auth/next-js'
import logger from '@/utils/logger'
import { sendEmailAction } from '@/actions/send-email.action'

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: 'pg',
    schema
  }),
  emailAndPassword: {
    enabled: true,
    autoSignIn: true,
    requireEmailVerification: true,
    // autoSignIn: false, //defaults to true
    async sendResetPassword (data, request) {
      // Send an email to the user with a link to reset their password
    }
  },
  emailVerification: {
    sendOnSignUp: true,
    expiresIn: 60 * 60, // 1 hour

    //TODO: still need to think of a use case, say it auto signs in
    // but a hacker made the account, then this email comes to verify it
    // then the hacker can sign in
    autoSignInAfterVerification: true,
    // autoSignInAfterVerification: false,

    sendVerificationEmail: async ({ user, url, token }, request) => {
      logger.info('1. User:', user)
      logger.info('2. URL before changing:', url)
      logger.info('3. Token:', token)
      logger.info('4. Request:', request)
      // const link = new URL(url)
      await sendEmailAction({
        to: user.email!,
        subject: 'Verify your email address',
        meta: {
          description:
            'Please verify your email address to complete registration.',
          link: String(url)
        }
      })
    }
  },
  account: {
    accountLinking: {
      enabled: false
    }
  },
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!
    },
    github: {
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!
    }
  },
  session: {
    expiresIn: 60 * 60 * 24 * 7, // 7 days
    updateAge: 60 * 60 * 24 * 1, // 1 day (every 1 day the session expiration is updated)
    cookieCache: {
      enabled: true,
      maxAge: 5 * 60 // Cache duration in seconds
    }
  },
  advanced: {
    ipAddress: {
      ipAddressHeaders: [
        'x-forwarded-for', // Common for proxies
        'x-client-ip', // Alternative header
        'cf-connecting-ip', // For Cloudflare
        'true-client-ip' // For other proxies
      ],
      disableIpTracking: false // Ensure IP tracking is enabled
    }
  },
  // user: {
  //   additionalFields: {
  //     membershipType: { type: 'string' },
  //     membershipStartDate: { type: 'date' }
  //     // Remove membershipEndDate from here, as it's in the base Drizzle schema
  //   }
  // }
  plugins: [nextCookies()] // make sure this is the last plugin in the array
})
