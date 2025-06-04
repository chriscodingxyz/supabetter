import Link from 'next/link'
import { MetallicText } from '@/components/typography/MetallicText'
import { ThemeToggle } from '@/components/theme/ThemeToggle'
import { Button } from '../ui/button'
import { SITE_NAME } from '@/lib/constants'

import { UserRoundCheckIcon } from '../ui/user-round-check'
import { FingerprintIcon } from '../ui/fingerprint'
import { auth } from '@/lib/auth'
import { headers } from 'next/headers'
import { Avatar, AvatarImage, AvatarFallback } from '../ui/avatar'
import Image from 'next/image'
import IconSupabetterLogo from '@/components/icons/svg/IconSupabetterLogo'

export default async function Header () {
  const session = await auth.api.getSession({
    headers: await headers()
  })

  console.log('🍒 serverclient Header: session', session)

  // const { data: session } = authClient.useSession()

  // const [isScrolled, setIsScrolled] = useState(false)

  // useEffect(() => {
  //   const handleScroll = () => {
  //     setIsScrolled(window.scrollY > 10)
  //   }

  //   window.addEventListener('scroll', handleScroll)
  //   handleScroll() // Check initial scroll position

  //   return () => window.removeEventListener('scroll', handleScroll)
  // }, [])

  return (
    // <header className='top-0 left-0 sticky z-50 w-full backdrop-blur-xl'>
    <header
      // className={`top-0 left-0 fixed z-50 w-full transition-colors duration-200 ${
      //   isScrolled
      //     ? 'bg-background/50 backdrop-blur-sm border-b border-border'
      //     : 'bg-transparent'
      // }`}
      className={`top-0 left-0 fixed z-100 w-full backdrop-blur-sm`}
    >
      <div className='flex h-[50px] items-center justify-between px-4'>
        <div className='flex items-center gap-2'>
          <IconSupabetterLogo className='size-7 text-foreground' />
          <Link href='/' className='text-lg font-bold tracking-tight'>
            <MetallicText>{SITE_NAME}</MetallicText>
          </Link>
          {/* <nav className='hidden sm:flex items-center space-x-4 text-sm font-medium'>
            <a href={GITHUB_URL} target='_blank' rel='noopener noreferrer'>
              <Button title='GitHub' variant='ghost' size='icon'>
                <GithubIcon />
              </Button>
            </a>
          </nav> */}
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
