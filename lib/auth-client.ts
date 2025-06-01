// import { createAuthClient } from 'better-auth/react'
// export const authClient = createAuthClient({
//   // /** The base URL of the server (optional if you're using the same domain) */
//   // baseURL: "http://localhost:3000"
// })

import { createAuthClient } from 'better-auth/react'

export const authClient = createAuthClient({
  baseURL: process.env.BASE_URL!
})

export const { signIn, signOut, signUp, useSession } = authClient
