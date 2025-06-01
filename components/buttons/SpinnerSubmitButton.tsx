'use client'

import { useFormStatus } from 'react-dom'
import { Button } from '@/components/ui/button'
import { Loader2 } from 'lucide-react'
import { cn } from '@/lib/utils'

export function SpinnerSubmitButton ({
  className,
  children,
  spinner = true,
  loadingText = '...',
  size,
  props
}: {
  className?: string
  children: React.ReactNode
  spinner?: boolean
  loadingText?: string
  size?: 'xs' | 'sm' | 'default' | 'lg' | 'icon'
  props?: React.ButtonHTMLAttributes<HTMLButtonElement>
}) {
  const { pending } = useFormStatus()

  return (
    <Button
      className={cn('cursor-pointer', className)}
      type='submit'
      disabled={pending}
      aria-disabled={pending}
      size={size}
      {...props}
    >
      {pending ? (
        <>{spinner ? <Loader2 className='animate-spin' /> : loadingText}</>
      ) : (
        children
      )}
    </Button>
  )
}
