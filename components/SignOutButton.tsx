'use client'

import React, { useTransition, ReactNode } from 'react'
import { Button } from '@/components/ui/button'
import { signOutAction } from '@/actions/better-actions'
import { Loader2 } from 'lucide-react'

export default function SignOutButton ({ children }: { children: ReactNode }) {
  const [isPending, startTransition] = useTransition()

  const handleSignOut = () => {
    startTransition(async () => {
      await signOutAction()
      // No need to manually set isPending back to false, useTransition handles it.
      // Also, signOutAction will likely redirect, so the component might unmount.
    })
  }

  return (
    <Button
      onClick={handleSignOut}
      disabled={isPending}
      className='relative' // For positioning the spinner overlay
      variant='outline' // Example variant, adjust as needed
    >
      {/* Span to hold the original content. Made invisible but occupies space when pending. */}
      <span className={isPending ? 'opacity-0' : 'opacity-100'}>
        {children}
      </span>

      {isPending && (
        <span className='absolute inset-0 flex items-center justify-center'>
          <Loader2 className='h-5 w-5 animate-spin' />{' '}
          {/* Adjusted size slightly */}
        </span>
      )}
    </Button>
  )
}
