import { auth } from '@/lib/auth'
import { redirect } from 'next/navigation'
import { headers } from 'next/headers'
import React from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { signUpEmailAction } from '@/actions/better-actions'

export default async function SignUpPage () {
  const isUserLoggedIn = await auth.api.getSession({
    headers: await headers()
  })

  if (isUserLoggedIn) {
    console.log('🍒 User is already logged in')
    return redirect('/dashboard')
  }

  return (
    <div className='flex-center-col min-h-screen'>
      <form action={signUpEmailAction}>
        <Input placeholder='Name' name='name' />
        <Input placeholder='Email' name='email' />
        <Input placeholder='Password' name='password' />
        <Button>Sign Up</Button>
      </form>
    </div>
  )
}
