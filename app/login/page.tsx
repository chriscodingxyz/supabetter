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
    <div>
      <form
        action={signInEmailAction}
        // action={async (formData: FormData) => {
        //   'use server'

        //   const email = formData.get('email') as string
        //   const password = formData.get('password') as string

        //   try {
        //     await auth.api.signInEmail({
        //       body: {
        //         email,
        //         password
        //       }
        //     })
        //   } catch (error: unknown) {
        //     console.error('ERROR======>>>>', (error as Error)?.message)
        //     redirect('/?message=woops')
        //   }

        //   return redirect('/dashboard?message=success')
        // }}
      >
        <Input placeholder='Email' name='email' />
        <Input placeholder='Password' name='password' />
        <Button type='submit'>Login</Button>
      </form>

      <Link href='/sign-up'>Sign Up</Link>
    </div>
  )
}
