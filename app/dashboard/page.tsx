import React from 'react'
import { auth } from '@/lib/auth'
import { headers } from 'next/headers'
import { redirect } from 'next/navigation'
import SignOutButton from '@/components/SignOutButton'

export default async function DashboardPage () {
  const session = await auth.api.getSession({
    headers: await headers()
  })

  if (!session) {
    console.log('🍒 User is not logged in')
    return redirect('/login')
  }

  return (
    <div>
      <p>hello name: {session.user.name}</p>
      <p>{JSON.stringify(session.session)}</p>
      <SignOutButton>Sign out</SignOutButton>
    </div>
  )
}
