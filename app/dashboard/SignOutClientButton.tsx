'use client'

import { Button } from '@/components/ui/button'
import { authClient } from '@/lib/auth-client'
import { useRouter } from 'next/navigation'

export default function SignOutClientButton () {
  const router = useRouter()
  return (
    <Button
      onClick={async () => {
        await authClient.signOut({
          fetchOptions: {
            onSuccess: () => {
              // window.location.href = '/sign-in'
              router.refresh()
              router.push('/sign-in?toast=info:Signed out via client')
            }
          }
        })
      }}
    >
      Sign out via client
    </Button>
  )
}
