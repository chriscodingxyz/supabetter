import { MetallicText } from '@/components/typography/MetallicText'
import { Button } from '@/components/ui/button'
import { ScrollArea } from '@/components/ui/scroll-area'
import { AnimatedNumber } from '@/components/ui/animated-number'

import {
  Github,
  Zap,
  Shield,
  Sparkles,
  LayoutTemplate,
  Key,
  Database,
  Palette,
  Code,
  Rocket,
  Star
} from 'lucide-react'
import {
  Nextjs,
  TypeScript,
  DrizzleORM,
  Supabase,
  TailwindCSS,
  Shadcnui,
  BetterAuth
} from '@/components/icons/svg/TechStack'
import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import { ContactForm } from '@/components/forms/ContactForm';
import { GithubStarsButton } from '@/components/buttons/GithubStarsButton';
import { ShadowButton } from '@/components/buttons/ShadowButton'
import { InteractiveTerminal } from '@/components/InteractiveTerminal'
import { RocketIcon } from '@/components/ui/rocket'

export default function Home() {
  const featuresData = [
    {
      icon: <Zap />,
      title: 'Lightning Fast',
      description: 'Built with Next.js 15 and optimized for performance',
      color: 'text-yellow-400'
    },
    {
      icon: <Shield />,
      title: 'Secure by Default',
      description: 'Better-Auth v1 with secure session management',
      color: 'text-blue-400'
    },
    {
      icon: <Database />,
      title: 'Modern Database',
      description: 'Drizzle ORM with PostgreSQL for type-safe queries',
      color: 'text-green-400'
    },
    {
      icon: <Palette />,
      title: 'Beautiful UI',
      description: 'Shadcn/ui components with Tailwind CSS',
      color: 'text-purple-400'
    },
    {
      icon: <Sparkles />,
      title: 'Full-Stack Ready',
      description: 'Authentication, database, and UI - all configured',
      color: 'text-indigo-400'
    },
    {
      icon: <LayoutTemplate />,
      title: 'Developer Experience',
      description: 'TypeScript, ESLint, and modern tooling included',
      color: 'text-orange-400'
    },
    {
      icon: <Key />,
      title: 'Social Auth',
      description: 'Google and GitHub OAuth preconfigured',
      color: 'text-cyan-400'
    },
    {
      icon: <Rocket />,
      title: 'Deploy Ready',
      description: 'Optimized for Vercel, Netlify, and other modern platforms',
      color: 'text-pink-400'
    }
  ]

  return (
    <div className='bg-background relative min-h-[calc(100dvh-60px)]'>
      {/* Subtle gradient background */}
      <div className='fixed inset-0 pointer-events-none overflow-hidden'>
        <div className='absolute inset-0 bg-gradient-to-br from-zinc-50 via-transparent to-zinc-50/20 dark:from-zinc-950 dark:via-transparent dark:to-zinc-950/40' />
        <div className='absolute top-0 right-0 w-[40%] h-[40%] bg-gradient-radial from-primary/5 to-transparent blur-3xl' />
        <div className='absolute bottom-0 left-0 w-[40%] h-[40%] bg-gradient-radial from-primary/3 to-transparent blur-3xl' />
      </div>

      {/* Hero Section */}
      <section className='py-24 md:py-32 lg:py-40'>
        <div className='container px-4 mx-auto'>
          <div className='grid lg:grid-cols-[1fr_1.618fr] gap-8 lg:gap-16 items-center min-h-[calc(100vh-60px-8rem)]'>
            
            {/* Left: Primary content */}
            <div className='relative order-1 lg:order-1'>
              <div className='space-y-8'>
                {/* Badge */}
                <div className='inline-flex items-center px-3 py-1 text-xs font-medium bg-primary/5 text-primary rounded-full border border-primary/10'>
                  <RocketIcon size={14} className='mr-1.5' />
                  Launch faster than ever
                </div>
                
                {/* Title with tighter spacing */}
                <div className='space-y-4'>
                  <h1 className='flex flex-col text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight'>
                    <MetallicText>Skip the setup.</MetallicText>
                    <MetallicText theme='rainbow'>Start the build.</MetallicText>
                  </h1>
                  
                  <p className='text-lg sm:text-xl text-muted-foreground max-w-xl'>
                    Production-ready Next.js starter with authentication, database, and beautiful UI components. Everything you need to ship fast.
                  </p>
                </div>

                {/* CTA Buttons */}
                <div className='flex flex-row gap-4 pt-2'>
                  <Link href='/build'>
                    <ShadowButton size='sm' className='w-full sm:w-auto'>
                      <Rocket className='w-4 h-4 mr-2' />
                      Start Building
                    </ShadowButton>
                  </Link>
                  <GithubStarsButton />
                </div>

                {/* Tech stack pills - compact */}
                <div className='flex flex-wrap gap-2 pt-4'>
                  <div className='inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700/50'>
                    <Nextjs className='w-3.5 h-3.5' />
                    <span className='text-xs font-medium'>Next.js</span>
                  </div>
                  <div className='inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-50 dark:bg-slate-900/20 border border-slate-200 dark:border-slate-700/50'>
                    <BetterAuth className='w-3.5 h-3.5 text-slate-500' />
                    <span className='text-xs font-medium'>BetterAuth</span>
                  </div>
                  <div className='inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-700/50'>
                    <TypeScript className='w-3.5 h-3.5 text-blue-500' />
                    <span className='text-xs font-medium'>TypeScript</span>
                  </div>
                  <div className='inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-700/50'>
                    <Supabase className='w-3.5 h-3.5 text-emerald-500' />
                    <span className='text-xs font-medium'>Supabase</span>
                  </div>
                  <div className='inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-700/50'>
                    <DrizzleORM className='w-3.5 h-3.5 bg-black text-green-500' />
                    <span className='text-xs font-medium'>Drizzle</span>
                  </div>

                  <div className='inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-sky-50 dark:bg-sky-900/20 border border-sky-200 dark:border-sky-700/50'>
                    <TailwindCSS className='w-3.5 h-3.5 text-sky-500' />
                    <span className='text-xs font-medium'>Tailwind</span>
                  </div>
                  <div className='inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-violet-50 dark:bg-violet-900/20 border border-violet-200 dark:border-violet-700/50'>
                    <Shadcnui className='w-3.5 h-3.5 text-violet-500' />
                    <span className='text-xs font-medium'>shadcn/ui</span>
                  </div>

                </div>

                {/* Mobile terminal - simple version for small screens */}
                <div className='md:hidden mt-8'>
                  <div className='bg-background rounded-xl p-4 border border-border'>
                    <div className='font-mono text-xs space-y-2'>
                      <div className='flex items-center gap-2'>
                        <span className='text-emerald-600 dark:text-emerald-400'>$</span>
                        <span className='text-foreground'>git clone https://github.com/chriscodingxyz/supabetter.git</span>
                      </div>
                      <div className='text-muted-foreground text-[10px] ml-4'>
                        ✨ Ready in 30 seconds!
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Visual element */}
            <div className='relative order-2 lg:order-2 hidden md:block'>
              <div className='relative mx-auto md:max-w-none'>
                {/* Interactive Terminal Setup */}
                <InteractiveTerminal />

                {/* Stats badges */}
                <div className='absolute -bottom-6 left-1/2 -translate-x-1/2 flex gap-3'>
                  <div className='px-3 py-1.5 bg-background border border-border flex items-center gap-2 shadow-lg rounded-full'>
                    <Zap className='w-3 h-3 text-yellow-400' />
                    <span className='text-xs font-medium text-foreground'>Setup in 30s</span>
                  </div>
                  <div className='px-3 py-1.5 bg-background border border-border flex items-center gap-2 shadow-lg rounded-full'>
                    <Code className='w-3 h-3 text-blue-400' />
                    <span className='text-xs font-medium text-foreground'>TypeScript</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature grid - using golden ratio spacing */}
      <div className='border-t border-border/50 pt-16 pb-24'>
        <div className='container px-4 mx-auto'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8'>
            {featuresData.map((feature, index) => (
              <div
                key={index}
                className='group relative p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-border transition-all duration-300'
              >
                <div className='flex items-start gap-4'>
                  <div className={`p-2 rounded-lg bg-gradient-to-br ${
                    index === 0 ? 'from-blue-500/10 to-blue-600/10' :
                    index === 1 ? 'from-purple-500/10 to-purple-600/10' :
                    index === 2 ? 'from-red-500/10 to-red-600/10' :
                    index === 3 ? 'from-yellow-500/10 to-yellow-600/10' :
                    index === 4 ? 'from-indigo-500/10 to-indigo-600/10' :
                    index === 5 ? 'from-orange-500/10 to-orange-600/10' :
                    index === 6 ? 'from-cyan-500/10 to-cyan-600/10' :
                    'from-pink-500/10 to-pink-600/10'
                  }`}>
                    {React.cloneElement(feature.icon, {
                      className: `h-5 w-5 ${feature.color}`
                    })}
                  </div>
                  <div className='flex-1 space-y-1'>
                    <h3 className='font-semibold text-foreground/90'>
                      {feature.title}
                    </h3>
                    <p className='text-sm text-muted-foreground leading-relaxed'>
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
