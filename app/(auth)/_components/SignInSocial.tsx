'use client'

import { Button } from '@/components/ui/button'
import React from 'react'
import { signIn } from '@/lib/auth-client'
import { toast } from 'sonner'

export default function SignInSocial ({
  provider,
  children
}: {
  provider: 'google' | 'github'
  children: React.ReactNode
}) {
  return (
    <Button
      onClick={async () =>
        await signIn.social({
          provider,
          callbackURL: '/dashboard',
          fetchOptions: {
            onResponse: () => {
              toast.success(`You have successfully signed in via ${provider}`)
            }
          }
        })
      }
      variant='outline'
      type='button'
    >
      {children}
    </Button>
  )
}
