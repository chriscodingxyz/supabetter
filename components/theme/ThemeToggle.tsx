'use client'

import * as React from 'react'
// import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
// import { Lightning } from '@phosphor-icons/react'
import { Button } from '@/components/ui/button'
import { MoonIcon } from '@/components/ui/moon'
import { SunIcon } from '@/components/ui/sun'
import { SunMoonIcon } from '@/components/ui/sun-moon'

export function ThemeToggle () {
  const { resolvedTheme, setTheme } = useTheme()
  const [hasToggled, setHasToggled] = React.useState(false)

  const toggleTheme = () => {
    setHasToggled(true)
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
  }

  return (
    <Button
      size='xs'
      className='cursor-pointer'
      variant='ghost'
      title='Toggle theme'
      onClick={toggleTheme}
    >
      {!hasToggled ? (
        <SunMoonIcon size={32} />
      ) : resolvedTheme === 'dark' ? (
        <MoonIcon size={32} />
      ) : (
        <SunIcon size={32} />
      )}
      <span className='sr-only'>Toggle theme</span>
    </Button>
  )
}
