'use client'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useState } from 'react'
import Image from 'next/image'
import { CircleUserRound, Loader2, X } from 'lucide-react'
import { signIn, signUp } from '@/lib/auth-client'
import { toast } from 'sonner'
import Link from 'next/link'
import { MetallicText } from '@/components/typography/MetallicText'
import { cn } from '@/lib/utils'
import logger from '@/utils/logger'
import { redirect } from 'next/navigation'

export default function SignUp () {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [image, setImage] = useState<File | null>(null)
  const [imagePreview, setImagePreview] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setImage(file)
      const reader = new FileReader()
      reader.onloadend = () => {
        setImagePreview(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <Card className=' rounded-md rounded-t-none w-full sm:w-[420px]'>
      <CardHeader>
        <CardTitle>
          <MetallicText className='text-4xl font-bold'>Sign Up</MetallicText>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className='grid gap-4'>
          <div className='grid gap-2'>
            <Label htmlFor='name'>Name</Label>
            <Input
              id='name'
              placeholder='John Doe'
              required
              onChange={e => {
                setName(e.target.value)
              }}
              value={name}
            />
          </div>
          <div className='grid gap-2'>
            <Label htmlFor='email'>Email</Label>
            <Input
              id='email'
              type='email'
              placeholder='john@example.com'
              required
              onChange={e => {
                setEmail(e.target.value)
              }}
              value={email}
            />
          </div>
          <div className='grid gap-2'>
            <Label htmlFor='password'>Password</Label>
            <Input
              id='password'
              type='password'
              value={password}
              onChange={e => setPassword(e.target.value)}
              autoComplete='new-password'
              placeholder='password'
            />
          </div>
          <div className='grid gap-2'>
            <Label htmlFor='image'>Profile Image (optional)</Label>
            <div className='flex items-end gap-4'>
              {imagePreview && (
                <div className='relative w-16 h-16 rounded-sm overflow-hidden'>
                  <Image
                    src={imagePreview}
                    alt='Profile preview'
                    layout='fill'
                    objectFit='cover'
                  />
                </div>
              )}
              <div className='flex items-center gap-2 w-full'>
                <Input
                  id='image'
                  type='file'
                  accept='image/*'
                  onChange={handleImageChange}
                  className='w-full'
                />
                {imagePreview && (
                  <X
                    className='cursor-pointer'
                    onClick={() => {
                      setImage(null)
                      setImagePreview(null)
                    }}
                  />
                )}
              </div>
            </div>
          </div>
          <Button
            type='submit'
            className='w-full'
            disabled={loading}
            onClick={async () => {
              await signUp.email({
                email,
                password,
                name,
                // TODO: The imagetoBase64 might have issues if we then want to allow user to use Google Sign In
                image: image ? await convertImageToBase64(image) : '',
                // ok so sign-in seems stupid place..BUT if this fails (verification token timed out)
                // then it will  redirect to sign-in page, with the error
                // otherwise sign-in will already have a redirect within it
                callbackURL: '/sign-in', // A URL to redirect to after the user verifies their email (optional)
                fetchOptions: {
                  onResponse: () => {
                    setLoading(false)
                  },
                  onRequest: () => {
                    setLoading(true)
                  },
                  onError: ctx => {
                    logger.error('Error signing up:', ctx.error)
                    toast.error(ctx.error.message)
                  },
                  onSuccess: ctx => {
                    // this is on success of 'sign-up', before the email verification, but this should
                    // still redirect to sign-in page
                    logger.info('Success signing up:', ctx)
                    // toast.info(
                    //   'Please check your email for a verification link'
                    // )
                    redirect(
                      '/sign-in?toast=Please check your email for a verification link'
                    )
                  }
                  // Before we make user validate email address, we'll use this for now. This way we get fresh session cookie in header
                  // onSuccess: async () => {
                  //   toast.success('You have successfully signed up')
                  //   window.location.href = '/dashboard'
                  // }
                }
              })
            }}
          >
            {loading ? (
              <Loader2 size={16} className='animate-spin' />
            ) : (
              <p className='flex items-center gap-2'>
                <CircleUserRound size={16} /> Create an account
              </p>
            )}
          </Button>
        </div>

        <p className='text-center text-xs text-neutral-500 pt-3'>or</p>

        {/* Social Sign Up */}

        <div className='text-center py-2' />
        <div
          className={cn(
            'w-full gap-2 flex items-center',
            'justify-between flex-col'
          )}
        >
          <Button
            variant='outline'
            className={cn('w-full gap-2')}
            disabled={loading}
            onClick={async () => {
              await signIn.social(
                {
                  provider: 'google',
                  callbackURL: '/dashboard'
                },
                {
                  onRequest: ctx => {
                    setLoading(true)
                  },
                  onResponse: ctx => {
                    setLoading(false)
                  },
                  onSuccess: ctx => {
                    toast.info('Redirecting to Google')
                  }
                }
              )
            }}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='0.98em'
              height='1em'
              viewBox='0 0 256 262'
            >
              <path
                fill='#4285F4'
                d='M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622l38.755 30.023l2.685.268c24.659-22.774 38.875-56.282 38.875-96.027'
              ></path>
              <path
                fill='#34A853'
                d='M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055c-34.523 0-63.824-22.773-74.269-54.25l-1.531.13l-40.298 31.187l-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1'
              ></path>
              <path
                fill='#FBBC05'
                d='M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82c0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602z'
              ></path>
              <path
                fill='#EB4335'
                d='M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0C79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251'
              ></path>
            </svg>
            Continue with Google
          </Button>
          <Button
            variant='outline'
            className={cn('w-full gap-2')}
            disabled={loading}
            onClick={async () => {
              await signIn.social(
                {
                  provider: 'github',
                  callbackURL: '/dashboard'
                },
                {
                  onRequest: ctx => {
                    setLoading(true)
                  },
                  onResponse: ctx => {
                    setLoading(false)
                  },
                  onSuccess: ctx => {
                    toast.info('Redirecting to Github')
                  }
                }
              )
            }}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='1em'
              height='1em'
              viewBox='0 0 24 24'
            >
              <path
                fill='currentColor'
                d='M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2'
              ></path>
            </svg>
            Continue with Github
          </Button>
        </div>
      </CardContent>
      <CardFooter>
        <div className='flex justify-center w-full border-t py-4'>
          <p className='text-center text-xs text-neutral-500'>
            Already have an account?{' '}
            <Link href='/sign-in' className='text-primary'>
              Sign In
            </Link>
          </p>
        </div>
      </CardFooter>
    </Card>
  )
}

async function convertImageToBase64 (file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onloadend = () => resolve(reader.result as string)
    reader.onerror = reject
    reader.readAsDataURL(file)
  })
}
