// import { NextResponse } from 'next/server'
// import type { NextRequest } from 'next/server'

import { NextRequest } from 'next/server'

// // This is obv better-auth specific
// const SESSION_COOKIE_NAME = 'better-auth.session_token'

// export function middleware (request: NextRequest) {
//   const { pathname } = request.nextUrl

//   // Check if the user is trying to access /login or /sign-up
//   // This check is largely handled by the matcher, but good for explicit logic
//   if (pathname === '/login' || pathname === '/sign-up') {
//     // Check for the presence of the session cookie
//     const sessionCookie = request.cookies.get(SESSION_COOKIE_NAME)

//     if (sessionCookie) {
//       // If the session cookie exists, redirect to the dashboard
//       console.log(
//         `Middleware: User with session cookie trying to access ${pathname}. Redirecting to /dashboard.`
//       )
//       const dashboardUrl = new URL(
//         '/dashboard?toast=Unable to navigate to that page',
//         request.url
//       )
//       return NextResponse.redirect(dashboardUrl)
//     }
//   }

//   return NextResponse.next()
// }

// // Configure the middleware to run only on /login and /sign-up paths
// export const config = {
//   matcher: ['/login', '/sign-up']
// }

export function middleware (request: NextRequest) {}
