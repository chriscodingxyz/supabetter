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

  logger.info('viaSignInPage: Session:', session)

  if (session?.user) {
    logger.info('viaSignInPage: User is already logged in, redirecting')
    return redirect('/dashboard')
  }

  return (
    <div className='flex-center-col min-h-screen'>
      <SignIn />
    </div>
  )
}
