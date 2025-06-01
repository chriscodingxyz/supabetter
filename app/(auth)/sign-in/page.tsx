import React from 'react'
import SignIn from '../_components/SignIn'
import { auth } from '@/lib/auth'
import { redirect } from 'next/navigation'
import { headers } from 'next/headers'
import logger from '@/utils/logger'

export default async function SignInPage () {
  const session = await auth.api.getSession({
    headers: await headers()
  })

  if (session?.user) {
    logger.info('User is already logged in')
    return redirect('/dashboard')
  }

  return (
    <div className='flex-center-col min-h-screen'>
      <SignIn />
    </div>
  )
}
