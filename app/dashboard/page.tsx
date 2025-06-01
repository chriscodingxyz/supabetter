import React from 'react'
import { auth } from '@/lib/auth'
import { headers } from 'next/headers'
import { redirect } from 'next/navigation'
// import { HoloTicket } from '@/components/HoloTicket'
import SessionStats from '@/components/SessionStats'
import SpinnerActionButton from '@/components/buttons/SpinnerActionButton'
import { signOutAction } from '@/actions/better-actions'
import { Button } from '@/components/ui/button'
import { authClient } from '@/lib/auth-client'
import SignOutClientButton from './SignOutClientButton'

export default async function DashboardPage () {
  const session = await auth.api.getSession({
    headers: await headers()
  })

  if (!session) {
    console.log('🍒 User is not logged in')
    return redirect('/sign-in?message=redireting from dashboard')
  }

  return (
    <div className='flex-center-col gap-6 py-6 min-h-screen'>
      {/* Session Data Section */}
      <div className='w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-6'>
        {/* Session User */}
        <div>
          <h2 className=' text-sm text-primary mb-3 tracking-wider'>
            SESSION_USER
          </h2>
          <div className='bg-muted/30 rounded-md p-3 overflow-auto max-h-40'>
            <pre className='text-[10px] font-mono text-muted-foreground leading-relaxed'>
              <code>{JSON.stringify(session.user, null, 2)}</code>
            </pre>
          </div>
        </div>

        {/* Session Session */}
        <div>
          <h2 className=' text-sm text-primary mb-3 tracking-wider'>
            SESSION_DATA
          </h2>
          <div className='bg-muted/30 rounded-md p-3 overflow-auto max-h-40'>
            <pre className='text-[10px] font-mono text-muted-foreground leading-relaxed'>
              <code>{JSON.stringify(session.session, null, 2)}</code>
            </pre>
          </div>
        </div>
      </div>

      {/* Session Stats */}
      {session.session && (
        <div className='w-full max-w-6xl'>
          <SessionStats
            createdAt={new Date(session.session.createdAt).toISOString()}
            expiresAt={new Date(session.session.expiresAt).toISOString()}
          />
        </div>
      )}

      {/* Sign Out Button */}
      <SpinnerActionButton action={signOutAction}>Sign out</SpinnerActionButton>

      <SignOutClientButton />

      {/* <HoloTicket
        ticketImage='/holoticket/front2.png'
        holographicImage='/holoticket/back2.png'
      /> */}
    </div>
  )
}
