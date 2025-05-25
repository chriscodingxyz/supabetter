import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { MetallicText } from '@/components/typography/MetallicText'
import { ThemeToggle } from '@/components/theme/ThemeToggle'
import { GITHUB_URL, SITE_NAME } from '@/lib/constants'
import { auth } from '@/lib/auth'
import { headers } from 'next/headers'

export default async function Header () {
  const session = await auth.api.getSession({
    headers: await headers()
  })

  return (
    <header className='top-0 left-0 sticky z-50 w-full backdrop-blur-xl'>
      <div className='flex h-[50px] items-center justify-between mx-auto max-w-5xl px-4'>
        <div className='flex items-center gap-4'>
          <Link href='/' className='text-lg font-bold tracking-tight'>
            <MetallicText>{SITE_NAME}</MetallicText>
          </Link>
          <nav className='hidden sm:flex items-center space-x-4 text-sm font-medium'>
            <a href={GITHUB_URL} target='_blank' rel='noopener noreferrer'>
              <Button variant='outline'>⭐ on GitHub</Button>
            </a>
          </nav>
        </div>
        <div className='flex items-center'>
          {session?.user ? (
            <Link href='/dashboard'>
              <Button variant='outline'>Dashboard</Button>
            </Link>
          ) : (
            <Link href='/login'>
              <Button variant='outline'>Login</Button>
            </Link>
          )}
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
