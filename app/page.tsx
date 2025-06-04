import { MetallicText } from '@/components/typography/MetallicText'

import {
  Github,
  Zap,
  Shield,
  Database,
  Palette,
  Code,
  Rocket
} from 'lucide-react'
import {
  Nextjs,
  TypeScript,
  DrizzleORM,
  Supabase,
  TailwindCSS,
  Shadcnui
} from '@/components/icons/svg/TechStack'
import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import { ContactForm } from '@/components/forms/ContactForm'
import { ShadowButton } from '@/components/buttons/ShadowButton'
// import ContactForm from './contact/ContactForm'

export default function Home () {
  const featuresData = [
    {
      icon: <Zap />,
      title: 'Lightning Fast',
      description:
        'Built on Next.js 14 with App Router for blazing performance',
      color: 'text-blue-400'
    },
    {
      icon: <Shield />,
      title: 'Secure Auth',
      description:
        'Better-Auth integration with social logins and session management',
      color: 'text-purple-400'
    },
    {
      icon: <Database />,
      title: 'Type-Safe DB',
      description:
        'Drizzle ORM with Supabase for bulletproof database operations',
      color: 'text-red-400'
    },
    {
      icon: <Palette />,
      title: 'Beautiful UI',
      description:
        'ShadCN components with Tailwind CSS for stunning interfaces',
      color: 'text-yellow-400'
    },
    {
      icon: <Code />,
      title: 'TypeScript',
      description: 'Full type safety across your entire application stack',
      color: 'text-indigo-400'
    },
    {
      icon: <Rocket />,
      title: 'Deploy Ready',
      description: 'Optimized for Vercel, Netlify, and other modern platforms',
      color: 'text-pink-400'
    }
  ]

  return (
    <div className='bg-background relative flex flex-col'>
      {/* Glowing gradient effect - optimized for mobile */}
      <div className='fixed inset-0 pointer-events-none overflow-hidden select-none'>
        {/* <div
          className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[40rem] sm:max-w-[60rem] aspect-square bg-gradient-to-r from-red-500/20 via-purple-500/25 to-blue-500/20 blur-[120px] sm:blur-[160px] rounded-[50%] motion-safe:animate-pulse-slow'
          style={{ willChange: 'transform' }}
        ></div> */}
      </div>

      {/* Hero Section */}
      <section className='min-h-[calc(100dvh-60px)] relative flex items-center overflow-hidden'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12 w-full relative z-10'>
          <div className='flex flex-col gap-6 sm:gap-8'>
            {/* Main two-column content */}
            <div className='grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 lg:gap-12 items-center'>
              {/* Left Section - SKIP THE SETUP */}
              <div className='lg:col-span-6 relative'>
                <div className='relative text-left'>
                  <MetallicText className='relative z-10 text-4xl sm:text-5xl lg:text-7xl xl:text-8xl font-extrabold tracking-tighter px-2 transform-gpu'>
                    <div>SKIP</div>
                    <div>THE</div>
                    <div>SETUP</div>
                  </MetallicText>
                  <Image
                    src='/mercury.png'
                    alt='Mercury Figure'
                    width={100}
                    height={200}
                    className='border border-primary absolute z-0 top-1/2 left-[20%] sm:left-[25%] -translate-x-1/2 -translate-y-1/2 h-[180px] sm:h-[280px] lg:h-[300px] w-auto opacity-40 grayscale select-none transform-gpu'
                  />
                </div>
              </div>


              {/* Right Section - START THE BUILD */}
              <div className='lg:col-span-6 relative'>
                <div className='relative text-right'>
                  <Link href='/build'>
                    <MetallicText className='relative z-10 text-4xl sm:text-5xl lg:text-7xl xl:text-8xl font-extrabold tracking-tighter px-2 transform-gpu'>
                      <div>START</div>
                      <div>THE</div>
                      <div>BUILD</div>
                    </MetallicText>
                  </Link>
                  <Image
                    src='/cryptoadz.gif'
                    alt='Cryptoadz GIF Animation'
                    width={150}
                    height={150}
                    className='absolute z-0 top-1/2 right-[20%] sm:right-[25%] translate-x-1/2 -translate-y-1/2 w-28 h-28 sm:w-40 sm:h-40 lg:w-48 lg:h-48 opacity-40'
                    unoptimized
                  />
                </div>
              </div>
            </div>
            {/* tech stack icons section */}
            {/* <div className='flex flex-wrap justify-center gap-2'>
              <div className='inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-zinc-100 dark:bg-zinc-800/50'>
                <Nextjs className='w-3.5 h-3.5' />
                <span className='text-xs font-semibold text-zinc-600 dark:text-zinc-400'>
                  Next.js
                </span>
              </div>
              <div className='inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-blue-50 dark:bg-blue-900/20'>
                <TypeScript className='w-3.5 h-3.5 text-blue-500' />
                <span className='text-xs font-semibold text-blue-600 dark:text-blue-400'>
                  TypeScript
                </span>
              </div>
              <div className='inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-900/20'>
                <DrizzleORM className='w-3.5 h-3.5 text-emerald-500' />
                <span className='text-xs font-semibold text-emerald-600 dark:text-emerald-400'>
                  Drizzle
                </span>
              </div>
              <div className='inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-green-50 dark:bg-green-900/20'>
                <Supabase className='w-3.5 h-3.5 text-green-500' />
                <span className='text-xs font-semibold text-green-600 dark:text-green-400'>
                  Supabase
                </span>
              </div>
              <div className='inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-sky-50 dark:bg-sky-900/20'>
                <TailwindCSS className='w-3.5 h-3.5 text-sky-500' />
                <span className='text-xs font-semibold text-sky-600 dark:text-sky-400'>
                  Tailwind
                </span>
              </div>
              <div className='inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-violet-50 dark:bg-violet-900/20'>
                <Shadcnui className='w-3.5 h-3.5 text-violet-500' />
                <span className='text-xs font-semibold text-violet-600 dark:text-violet-400'>
                  shadcn/ui
                </span>
              </div>
            </div> */}
          </div>
        </div>
      </section>

      {/* Features Section */}
      {/* <section className='w-full bg-background/50 backdrop-blur-sm'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20'>
          <div className='space-y-12'>
            <div className='flex flex-wrap justify-center gap-2'>
              <div className='inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-zinc-100 dark:bg-zinc-800/50'>
                <Nextjs className='w-3.5 h-3.5' />
                <span className='text-xs font-semibold text-zinc-600 dark:text-zinc-400'>
                  Next.js
                </span>
              </div>
              <div className='inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-blue-50 dark:bg-blue-900/20'>
                <TypeScript className='w-3.5 h-3.5 text-blue-500' />
                <span className='text-xs font-semibold text-blue-600 dark:text-blue-400'>
                  TypeScript
                </span>
              </div>
              <div className='inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-900/20'>
                <DrizzleORM className='w-3.5 h-3.5 text-emerald-500' />
                <span className='text-xs font-semibold text-emerald-600 dark:text-emerald-400'>
                  Drizzle
                </span>
              </div>
              <div className='inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-green-50 dark:bg-green-900/20'>
                <Supabase className='w-3.5 h-3.5 text-green-500' />
                <span className='text-xs font-semibold text-green-600 dark:text-green-400'>
                  Supabase
                </span>
              </div>
              <div className='inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-sky-50 dark:bg-sky-900/20'>
                <TailwindCSS className='w-3.5 h-3.5 text-sky-500' />
                <span className='text-xs font-semibold text-sky-600 dark:text-sky-400'>
                  Tailwind
                </span>
              </div>
              <div className='inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-violet-50 dark:bg-violet-900/20'>
                <Shadcnui className='w-3.5 h-3.5 text-violet-500' />
                <span className='text-xs font-semibold text-violet-600 dark:text-violet-400'>
                  shadcn/ui
                </span>
              </div>
            </div>

            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4'>
              {featuresData.map((feature, index) => (
                <div
                  key={index}
                  className='group text-center space-y-2 cursor-default'
                >
                  <div className='flex justify-center'>
                    {React.cloneElement(feature.icon, {
                      className:
                        'h-5 w-5 text-foreground/40 group-hover:text-foreground/60 transition-colors duration-300'
                    })}
                  </div>
                  <div className='text-xs font-medium text-foreground/60 group-hover:text-foreground/80 transition-colors duration-300 uppercase tracking-wider'>
                    {feature.title}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section> */}
    </div>
  )
}
