'use client'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Checkbox } from '@/components/ui/checkbox'
import { Badge } from '@/components/ui/badge'
import { useState, useEffect, useRef } from 'react'
import { Loader2, Mail, ArrowLeft } from 'lucide-react'
import { signIn } from '@/lib/auth-client'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { toast } from 'sonner'
import { MetallicText } from '@/components/typography/MetallicText'

export default function SignIn () {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [rememberMe, setRememberMe] = useState(false)
  const [showEmailForm, setShowEmailForm] = useState(false)
  const [lastSignInMethod, setLastSignInMethod] = useState<string | null>(null)
  const emailInputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (showEmailForm && emailInputRef.current) {
      emailInputRef.current.focus()
    }
  }, [showEmailForm])

  useEffect(() => {
    // Get the last sign-in method from localStorage
    const lastMethod = localStorage.getItem('lastSignInMethod')
    setLastSignInMethod(lastMethod)
  }, [])

  const LastUsedClassName =
    'absolute -top-2 -right-2 text-xs px-2 py-1 bg-blue-100 text-blue-800 border border-blue-200'

  return (
    <Card className='w-full sm:w-[420px]'>
      <CardHeader>
        <CardTitle>
          {' '}
          <MetallicText className='text-4xl font-bold'>Sign In</MetallicText>
        </CardTitle>
        <CardDescription>Sign in to your account</CardDescription>
      </CardHeader>
      <CardContent>
        <div className='grid gap-4'>
          {/* Email, Password, Remember Me - Conditionally Rendered */}
          {showEmailForm && (
            <>
              {/* Email */}
              <div className='grid gap-2'>
                <Label htmlFor='email'>Email</Label>
                <Input
                  ref={emailInputRef}
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
              {/* Password */}
              <div className='grid gap-2'>
                <div className='flex items-center'>
                  <Label htmlFor='password'>Password</Label>
                </div>

                <Input
                  id='password'
                  type='password'
                  placeholder='password'
                  autoComplete='password'
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                />
                <Link href='#' className='text-right inline-block text-[10px]'>
                  Forgot your password?
                </Link>
              </div>
              <div className='flex items-center gap-2'>
                <Checkbox
                  id='remember'
                  onClick={() => {
                    setRememberMe(!rememberMe)
                  }}
                  checked={rememberMe}
                />
                <Label htmlFor='remember'>Remember me</Label>
              </div>
            </>
          )}
          {/* Wrapper for all action buttons with gap-2 */}
          <div className='grid gap-2'>
            {/* Submit Button / Initial Email Toggle Button */}
            <div className='relative'>
              <Button
                type={showEmailForm ? 'submit' : 'button'}
                className='w-full'
                disabled={loading && showEmailForm} // Disable only if submitting email form
                onClick={async () => {
                  if (!showEmailForm) {
                    setShowEmailForm(true)
                  } else {
                    if (!email || !password) {
                      toast.error('Please enter both email and password.')
                      return
                    }
                    setLoading(true) // Set loading true for email submission
                    await signIn.email(
                      {
                        email,
                        password,
                        callbackURL: '/dashboard',

                        // TODO: Still have to configure this rememberMe section, also its already a boolean
                        rememberMe: Boolean(rememberMe)
                      },
                      {
                        onRequest: ctx => {
                          // setLoading(true) // Handled above
                        },
                        onResponse: ctx => {
                          setLoading(false)
                        },
                        onSuccess: ctx => {
                          localStorage.setItem('lastSignInMethod', 'email')
                          // toast.success('You have successfully logged in')
                        },
                        onError: ctx => {
                          toast.error(ctx.error.message)
                          setLoading(false) // Ensure loading is false on error
                        }
                      }
                    )
                  }
                }}
              >
                {loading && showEmailForm ? (
                  <Loader2 size={16} className='animate-spin' />
                ) : (
                  <p className='flex items-center gap-2'>
                    <Mail size={16} /> Sign in with Email
                  </p>
                )}
              </Button>
              {lastSignInMethod === 'email' && !showEmailForm && (
                <Badge variant='secondary' className={LastUsedClassName}>
                  Last used
                </Badge>
              )}
            </div>

            {/* Social Sign In Buttons - Conditionally Rendered */}
            {!showEmailForm && (
              <>
                <div className='relative'>
                  <Button
                    variant='outline'
                    className={cn('w-full gap-2')}
                    disabled={loading} // General loading state for social
                    onClick={async () => {
                      localStorage.setItem('lastSignInMethod', 'google') // Set before redirect
                      setLoading(true)
                      await signIn.social(
                        {
                          provider: 'google',
                          callbackURL: '/dashboard'
                        },
                        {
                          onRequest: ctx => {},
                          onResponse: ctx => {
                            setLoading(false)
                          },
                          onSuccess: ctx => {
                            toast.info('Redirecting to Google')
                          },
                          onError: _ => {
                            setLoading(false) // Clear loading on error
                            toast.error('Failed to redirect to Google.')
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
                    Sign in with Google
                  </Button>
                  {lastSignInMethod === 'google' && (
                    <Badge variant='secondary' className={LastUsedClassName}>
                      Last used
                    </Badge>
                  )}
                </div>
                <div className='relative'>
                  <Button
                    variant='outline'
                    className={cn('w-full gap-2')}
                    disabled={loading} // General loading state for social
                    onClick={async () => {
                      localStorage.setItem('lastSignInMethod', 'github') // Set before redirect
                      setLoading(true)
                      await signIn.social(
                        {
                          provider: 'github',
                          callbackURL: '/dashboard'
                        },
                        {
                          onRequest: ctx => {},
                          onResponse: ctx => {
                            setLoading(false)
                          },
                          onSuccess: ctx => {
                            toast.info('Redirecting to Github')
                          },
                          onError: _ => {
                            setLoading(false) // Clear loading on error
                            toast.error('Failed to redirect to Github.')
                          }
                        }
                      )
                    }}
                  >
                    <svg
                      role='img'
                      width='0.98em'
                      height='1em'
                      viewBox='0 0 24 24'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <title>GitHub</title>
                      <path d='M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12'></path>
                    </svg>
                    Sign in with Github
                  </Button>
                  {lastSignInMethod === 'github' && (
                    <Badge variant='secondary' className={LastUsedClassName}>
                      Last used
                    </Badge>
                  )}
                </div>
              </>
            )}

            {/* Back Button - Conditionally Rendered */}
            {showEmailForm && (
              <Button
                variant='outline'
                className='w-full flex items-center gap-2'
                onClick={() => {
                  setShowEmailForm(false)
                  // Optionally clear email/password fields here if desired
                  // setEmail('');
                  // setPassword('');
                }}
              >
                <ArrowLeft size={16} /> Go Back
              </Button>
            )}
          </div>{' '}
          {/* End of button wrapper */}
        </div>
      </CardContent>
      <CardFooter className='text-sm'>
        <div className='flex justify-center w-full border-t py-4'>
          <p className='text-center text-xs text-neutral-500'>
            Don't have an account?{' '}
            <Link href='/sign-up' className='text-primary'>
              Sign up
            </Link>
          </p>
        </div>
      </CardFooter>
    </Card>
  )
}
