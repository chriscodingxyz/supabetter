'use client'

import { Button } from '@/components/ui/button'
import { authClient } from '@/lib/auth-client'

export default function SignOutClientButton () {
  return (
    <Button
      onClick={async () => {
        await authClient.signOut({
          fetchOptions: {
            onSuccess: () => {
              window.location.href = '/sign-in'
            }
          }
        })
      }}
    >
      Sign out via client
    </Button>
  )
}
