'use server'

import { auth } from '@/lib/auth'
import { tryCatch } from '@/lib/utils'
import logger from '@/utils/logger'
import { headers } from 'next/headers'
import { redirect } from 'next/navigation'

// export async function signInEmailAction (formData: FormData) {
//   const email = formData.get('email') as string
//   const password = formData.get('password') as string

//   const [_, error] = await tryCatch(
//     auth.api.signInEmail({
//       body: {
//         email,
//         password
//       },
//       headers: await headers()
//     })
//   )

//   if (error) {
//     const errorObject = error as unknown as Error & {
//       statusCode: number
//       message: string
//     }
//     logger.error('@/actions/better-actions error:', errorObject)
//     return redirect(
//       `/login?toast=error:${
//         errorObject.statusCode + ': ' + errorObject.message
//       }`
//     )
//   }
//   // if no error:
//   return redirect('/dashboard?toast=success:Successfully signed innnn')
// }

// export async function signUpEmailAction (formData: FormData) {
//   const name = formData.get('name') as string
//   const email = formData.get('email') as string
//   const password = formData.get('password') as string

//   const [_, error] = await tryCatch(
//     auth.api.signUpEmail({
//       body: {
//         name,
//         email,
//         password
//       },
//       headers: await headers()
//     })
//   )

//   if (error) {
//     const errorObject = error as unknown as Error & {
//       statusCode: number
//       message: string
//     }
//     logger.error('@/actions/better-actions error:', errorObject)
//     return redirect(
//       `/sign-up?toast=error:${
//         errorObject.statusCode + ': ' + errorObject.message
//       }`
//     )
//   }
//   // if no error:
//   return redirect('/dashboard?toast=success:Successfully signed up')
// }

export async function signOutAction () {
  const [_, error] = await tryCatch(
    auth.api.signOut({
      headers: await headers()
    })
  )

  if (error) {
    const errorObject = error as unknown as Error & {
      statusCode: number
      message: string
    }
    logger.error('@/actions/better-actions error:', errorObject)
    return redirect(`/sign-in?toast=error:${errorObject.message}`)
  }

  // logger.success('@/actions/better-actions success:', 'Signed out')
  // return redirect('/?toast=info:Signed out')
  return redirect('/sign-in')
}
