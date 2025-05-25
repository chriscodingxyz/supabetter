import React from 'react'
import { Button } from '@/components/ui/button'
import { signOutAction } from '@/actions/better-actions'

export default function SignOutButton ({
  children
}: {
  children: React.ReactNode
}) {
  return <Button onClick={signOutAction}>{children}</Button>
}
