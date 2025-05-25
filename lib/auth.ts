// import 'server-only'

import { betterAuth } from 'better-auth'
import { drizzleAdapter } from 'better-auth/adapters/drizzle'
import { db } from '@/db'
import * as schema from '@/db/schemas/auth-schema'
import { nextCookies } from 'better-auth/next-js'

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: 'pg',
    schema
  }),
  emailAndPassword: {
    enabled: true
  },
  session: {
    expiresIn: 60 * 60 * 24 * 7, // 7 days
    updateAge: 60 * 60 * 24 * 1 // 1 day (every 1 day the session expiration is updated)
    // cookieCache: {
    //   enabled: true,
    //   maxAge: 5 * 60 // Cache duration in seconds
    // }
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
