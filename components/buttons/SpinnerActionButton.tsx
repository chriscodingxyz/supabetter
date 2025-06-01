'use client'

import React, { useTransition, ReactNode, ComponentProps } from 'react'
import { Button } from '@/components/ui/button' // Your UI component
import { Loader2 } from 'lucide-react'

// To allow passing all valid Button props like variant, size, className, etc.
// We can get the props type from the Button component itself.
type ButtonProps = ComponentProps<typeof Button>

interface SpinnerActionButtonProps
  extends Omit<ButtonProps, 'onClick' | 'type'> {
  /**
   * The server action to execute when the button is clicked.
   */
  action: () => Promise<unknown> // Or Promise<void> if it doesn't return anything
  children: ReactNode
  /**
   * Optional text to display next to the spinner when pending.
   * If not provided, only the spinner will be shown, centered.
   */
  pendingText?: string
}

export default function SpinnerActionButton ({
  action,
  children,
  pendingText,
  disabled, // Capture disabled from props to combine with isPending
  className,
  ...buttonProps // Collects other Button props like variant, size, etc.
}: SpinnerActionButtonProps) {
  const [isPending, startTransition] = useTransition()

  const handleClick = () => {
    if (isPending) return // Prevent multiple clicks while pending

    startTransition(async () => {
      await action()
      // useTransition handles resetting isPending.
      // If the action redirects, this component will unmount.
    })
  }

  return (
    <Button
      onClick={handleClick}
      disabled={isPending || disabled} // Disable if action is pending or explicitly disabled
      className={`relative ${className || ''}`} // Ensure relative positioning and merge classNames
      type='button' // Explicitly set type to button
      {...buttonProps} // Spread the rest of the Button props (variant, size, etc.)
    >
      {/* Span to hold the original content. Made invisible but occupies space when pending. */}
      <span
        className={isPending ? 'opacity-0' : 'opacity-100 transition-opacity'}
      >
        {children}
      </span>

      {isPending && (
        <span className='absolute inset-0 flex items-center justify-center'>
          <Loader2 className='h-5 w-5 animate-spin' />
          {pendingText && <span className='ml-2'>{pendingText}</span>}
        </span>
      )}
    </Button>
  )
}
