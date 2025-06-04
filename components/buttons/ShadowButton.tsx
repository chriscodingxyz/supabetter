import React from 'react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface ShadowButtonProps extends React.ComponentProps<typeof Button> {
  shadowOffset?: number
  borderWidth?: number
}

export const ShadowButton = React.forwardRef<
  HTMLButtonElement,
  ShadowButtonProps
>(
  (
    { className, children, shadowOffset = 4, borderWidth = 2, ...props },
    ref
  ) => {
    return (
      <div className='relative group inline-block'>
        {/* Shadow element */}
        <div
          className='absolute inset-0 bg-primary transition-opacity duration-200 group-hover:opacity-80'
          style={{
            transform: `translate(${shadowOffset}px, ${shadowOffset}px)`,
            zIndex: 0
          }}
        />

        {/* Button element */}
        <Button
          className={cn(
            'relative z-10',
            'bg-background hover:bg-background text-primary',
            'border-primary rounded-none',
            'transition-transform duration-200 ease-out',
            'group-hover:translate-x-1 group-hover:translate-y-1',
            'font-medium',
            className
          )}
          style={{
            borderWidth: `${borderWidth}px`,
            borderStyle: 'solid'
          }}
          ref={ref}
          {...props}
        >
          {children}
        </Button>
      </div>
    )
  }
)

ShadowButton.displayName = 'ShadowButton'