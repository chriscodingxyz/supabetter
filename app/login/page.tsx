import React from 'react'
import { auth } from '@/lib/auth'
import { headers } from 'next/headers'
import { redirect } from 'next/navigation'
import Link from 'next/link'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { signInEmailAction } from '@/actions/better-actions'

export default async function LoginPage () {
  const isUserLoggedIn = await auth.api.getSession({
    headers: await headers()
  })

  if (isUserLoggedIn) {
    console.log('🍒 User is already logged in')
    return redirect('/dashboard?message=already logged in')
  }

  return (
    <div className='flex-center-col min-h-screen gap-8 '>
      <form action={signInEmailAction} className='flex flex-col gap-4'>
        <h1 className='text-4xl font-bold'>Login</h1>
        <Input placeholder='Email' name='email' required />
        <Input
          placeholder='Password'
          name='password'
          type='password'
          required
        />
        <Button className='cursor-pointer' type='submit'>
          Login
        </Button>
      </form>

      <Link className='text-xs' href='/sign-up'>
        Don't have an account?{' '}
        <span className='font-bold underline hover:no-underline'>Sign up</span>
      </Link>
    </div>
  )
}
