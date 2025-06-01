// import React from 'react'
// import { auth } from '@/lib/auth'
// import { headers } from 'next/headers'
// import { redirect } from 'next/navigation'
// import Link from 'next/link'
// import { Input } from '@/components/ui/input'
// // import { Button } from '@/components/ui/button'
// import { signInEmailAction } from '@/actions/better-actions'
// import { MetallicText } from '@/components/typography/MetallicText'
// import { SpinnerSubmitButton } from '@/components/buttons/SpinnerSubmitButton'

// export default async function LoginPage () {
//   const session = await auth.api.getSession({
//     headers: await headers()
//   })

//   if (session?.user) {
//     console.log('🍒 User is already logged in')
//     return redirect('/dashboard?message=already logged in')
//   }

//   return (
//     <div className='flex-center-col min-h-screen gap-8 '>
//       <form action={signInEmailAction} className='flex flex-col gap-4'>
//         <MetallicText className='text-4xl font-bold'>Login</MetallicText>
//         <div className='space-y-2'>
//           <Input
//             placeholder='Email'
//             name='email'
//             required
//             type='email'
//             autoComplete='email'
//           />
//           <Input
//             placeholder='Password'
//             name='password'
//             type='password'
//             required
//             autoComplete='current-password'
//           />
//         </div>
//         <SpinnerSubmitButton>Login</SpinnerSubmitButton>
//       </form>

//       <Link className='text-xs' href='/sign-up'>
//         Don't have an account?{' '}
//         <span className='font-bold underline hover:no-underline'>Sign up</span>
//       </Link>
//     </div>
//   )
// }
