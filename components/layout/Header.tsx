'use client'

import Link from 'next/link'
import { MetallicText } from '@/components/typography/MetallicText'
import { ThemeToggle } from '@/components/theme/ThemeToggle'
import { Button } from '../ui/button'
import { SITE_NAME } from '@/lib/constants'

import { FingerprintIcon } from '../ui/fingerprint'
import { Avatar, AvatarImage, AvatarFallback } from '../ui/avatar'
import IconSupabetterLogo from '@/components/icons/svg/IconSupabetterLogo'
import { useSession } from '@/lib/auth-client'
import logger from '@/utils/logger'
import { useState, useEffect } from 'react'


export default function Header () {
  const {data: session} = useSession()

  logger.info('data via useSession @ Header', session)

  const [isScrolled, setIsScrolled] = useState(false)


  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Check initial scroll position

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`top-0 left-0 fixed z-50 w-full transition-colors duration-200 ${
        isScrolled
          ? 'bg-background/50 backdrop-blur-sm border-b border-border'
          : 'bg-transparent'
      }`}
    >
      <div className='flex h-[50px] items-center justify-between px-4'>
        <div className='flex items-center gap-2'>
          <IconSupabetterLogo className='size-7 text-foreground' />
          <Link href='/' className='text-lg font-bold tracking-tight'>
            <MetallicText>{SITE_NAME}</MetallicText>
          </Link>

        </div>
        <div className='flex items-center '>
          {session?.user ? (
            <Link href='/dashboard'>
              <Avatar className='size-5 hover:scale-150 transition-all duration-200'>
                <AvatarImage src={session?.user.image ?? ''} />
                <AvatarFallback>🍒</AvatarFallback>
              </Avatar>
            </Link>
          ) : (
            <Link href='/sign-in'>
              <Button
                className='cursor-pointer'
                title='Login humanoid'
                variant='outline'
                size='xs'
              >
                Login
                <FingerprintIcon size={20} />
              </Button>
            </Link>
          )}
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
