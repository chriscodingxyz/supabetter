import { MetallicText } from '@/components/typography/MetallicText'
import { Button } from '@/components/ui/button'
import { ScrollArea } from '@/components/ui/scroll-area'
import { AnimatedNumber } from '@/components/ui/animated-number'
import { InfiniteSlider } from '@/components/ui/infinite-slider'

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
import { FloatingTerminals } from '@/components/FloatingTerminals'
import { StackedTerminals } from '@/components/StackedTerminals'
import { ShuffleTerminals } from '@/components/ShuffleTerminals'
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
    <div className='relative min-h-screen bg-background'>
      {/* Subtle gradient background */}
      <div className='fixed inset-0 pointer-events-none overflow-hidden'>
        <div className='absolute inset-0 bg-gradient-to-br from-zinc-50 via-transparent to-zinc-50/20 dark:from-zinc-950 dark:via-transparent dark:to-zinc-950/40' />
        <div className='absolute top-0 right-0 w-[40%] h-[40%] bg-gradient-radial from-primary/5 to-transparent blur-3xl' />
        <div className='absolute bottom-0 left-0 w-[40%] h-[40%] bg-gradient-radial from-primary/3 to-transparent blur-3xl' />
      </div>

      {/* Hero Section - Full viewport height with golden ratio grid */}
      <section className='relative min-h-[100vh] flex items-center pt-[50px]'>
        <div className='container px-4 sm:px-6 lg:px-8 mx-auto'>
          <div className='grid lg:grid-cols-[1fr_1.618fr] gap-8 lg:gap-16 items-center'>
            
            {/* Left: Primary content with golden ratio spacing */}
            <div className='relative'>
              <div className='space-y-6 lg:space-y-8'>
                {/* Badge */}
                <div className='inline-flex items-center px-4 py-1.5 text-xs font-medium bg-primary/5 text-primary rounded-full border border-primary/10'>
                  <RocketIcon size={14} className='mr-2' />
                  Launch faster than ever
                </div>
                
                {/* Title with golden ratio typography scale */}
                <div className='space-y-4'>
                  <h1 className='flex flex-col text-5xl sm:text-6xl lg:text-6xl font-bold tracking-tight leading-[1.1] text-nowrap'>
                    <MetallicText>Skip the setup.</MetallicText>
                    <MetallicText >Start the build.</MetallicText>
                  </h1>
                  
                  <p className='text-lg sm:text-xl lg:text-2xl text-muted-foreground max-w-[40ch] leading-normal'>
                    Production-ready Next.js starter with authentication, database, and beautiful UI components. Everything you need to ship fast.
                  </p>
                </div>

                {/* CTA Buttons with golden ratio spacing */}
                <div className='flex flex-col sm:flex-row gap-3 pt-4'>
                  <Link href='/build'>
                    <ShadowButton size='default'>
                      <Rocket className='w-5 h-5 mr-2' />
                      Start Building Now
                    </ShadowButton>
                  </Link>
                  <GithubStarsButton />
                </div>

                {/* Tech stack pills - golden ratio sizing */}
                <div className='flex flex-wrap gap-2 pt-6'>
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
              </div>
            </div>

            {/* Right: Visual element with golden ratio proportions */}
            <div className='relative order-2 lg:order-last hidden md:block'>
              <div className='relative mx-auto max-w-2xl lg:max-w-none'>
                {/* Interactive Terminal Setup */}
                <ShuffleTerminals />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Section with golden ratio spacing */}
      <section className='relative py-8 lg:py-16 border-t border-border/50'>
        <div className='container px-4 sm:px-6 lg:px-8 mx-auto'>
          {/* Feature slider with golden ratio card sizing */}
          <div className='w-screen relative left-1/2 -translate-x-1/2'>
            <div className='relative'>
              {/* Desktop: 2 Rows */}
              <div className="hidden lg:block space-y-6">
                {/* First row - moving left */}
                <InfiniteSlider
                  gap={32}
                  speed={60}
                  speedOnHover={0.1}
                  className='[--gap:32px]'
                >
                  {[...featuresData.slice(0, 4), ...featuresData.slice(0, 4)].map((feature, index) => (
                    <div
                      key={index}
                      className='group relative p-8 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-border transition-all duration-300 min-w-[340px] max-w-[380px]'
                    >
                      <div className='flex items-start gap-5'>
                        <div className={`p-3 rounded-xl bg-gradient-to-br ${
                          index % 4 === 0 ? 'from-blue-500/10 to-blue-600/10' :
                          index % 4 === 1 ? 'from-purple-500/10 to-purple-600/10' :
                          index % 4 === 2 ? 'from-red-500/10 to-red-600/10' :
                          'from-yellow-500/10 to-yellow-600/10'
                        }`}>
                          {React.cloneElement(feature.icon, {
                            className: `h-6 w-6 ${feature.color}`
                          })}
                        </div>
                        <div className='flex-1 space-y-1'>
                          <h3 className='font-semibold text-base leading-tight text-foreground'>
                            {feature.title}
                          </h3>
                          <p className='text-sm leading-relaxed text-muted-foreground'>
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </InfiniteSlider>

                {/* Second row - moving right */}
                <InfiniteSlider
                  gap={32}
                  speed={60}
                  speedOnHover={0.1}
                  reverse={true}
                  className='[--gap:32px]'
                >
                  {[...featuresData.slice(4, 8), ...featuresData.slice(4, 8)].map((feature, index) => (
                    <div
                      key={index}
                      className='group relative p-8 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-border transition-all duration-300 min-w-[340px] max-w-[380px]'
                    >
                      <div className='flex items-start gap-5'>
                        <div className={`p-3 rounded-xl bg-gradient-to-br ${
                          index % 4 === 0 ? 'from-indigo-500/10 to-indigo-600/10' :
                          index % 4 === 1 ? 'from-orange-500/10 to-orange-600/10' :
                          index % 4 === 2 ? 'from-cyan-500/10 to-cyan-600/10' :
                          'from-pink-500/10 to-pink-600/10'
                        }`}>
                          {React.cloneElement(feature.icon, {
                            className: `h-6 w-6 ${feature.color}`
                          })}
                        </div>
                        <div className='flex-1 space-y-1'>
                          <h3 className='font-semibold text-base leading-tight text-foreground'>
                            {feature.title}
                          </h3>
                          <p className='text-sm leading-relaxed text-muted-foreground'>
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </InfiniteSlider>
              </div>

              {/* Mobile & Tablet: 3 Rows */}
              <div className="lg:hidden space-y-4">
                {/* Row 1 - moving left - Features 1-3 */}
                <InfiniteSlider
                  gap={24}
                  speed={80}
                  speedOnHover={0.1}
                  className='[--gap:24px]'
                >
                  {[...featuresData.slice(0, 3), ...featuresData.slice(0, 3)].map((feature, index) => (
                    <div
                      key={index}
                      className='group relative p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-border transition-all duration-300 min-w-[280px] max-w-[320px]'
                    >
                      <div className='flex items-start gap-4'>
                        <div className={`p-2.5 rounded-lg bg-gradient-to-br ${
                          index % 3 === 0 ? 'from-blue-500/10 to-blue-600/10' :
                          index % 3 === 1 ? 'from-purple-500/10 to-purple-600/10' :
                          'from-red-500/10 to-red-600/10'
                        }`}>
                          {React.cloneElement(feature.icon, {
                            className: `h-5 w-5 ${feature.color}`
                          })}
                        </div>
                        <div className='flex-1 space-y-0.5'>
                          <h3 className='font-medium text-sm leading-tight text-foreground'>
                            {feature.title}
                          </h3>
                          <p className='text-xs leading-relaxed text-muted-foreground'>
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </InfiniteSlider>

                {/* Row 2 - moving right - Features 4-6 */}
                <InfiniteSlider
                  gap={24}
                  speed={80}
                  speedOnHover={0.1}
                  reverse={true}
                  className='[--gap:24px]'
                >
                  {[...featuresData.slice(3, 6), ...featuresData.slice(3, 6)].map((feature, index) => (
                    <div
                      key={index}
                      className='group relative p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-border transition-all duration-300 min-w-[280px] max-w-[320px]'
                    >
                      <div className='flex items-start gap-4'>
                        <div className={`p-2.5 rounded-lg bg-gradient-to-br ${
                          index % 3 === 0 ? 'from-yellow-500/10 to-yellow-600/10' :
                          index % 3 === 1 ? 'from-indigo-500/10 to-indigo-600/10' :
                          'from-orange-500/10 to-orange-600/10'
                        }`}>
                          {React.cloneElement(feature.icon, {
                            className: `h-5 w-5 ${feature.color}`
                          })}
                        </div>
                        <div className='flex-1 space-y-0.5'>
                          <h3 className='font-medium text-sm leading-tight text-foreground'>
                            {feature.title}
                          </h3>
                          <p className='text-xs leading-relaxed text-muted-foreground'>
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </InfiniteSlider>

                {/* Row 3 - moving left - Features 7-8 */}
                <InfiniteSlider
                  gap={24}
                  speed={80}
                  speedOnHover={0.1}
                  className='[--gap:24px]'
                >
                  {[...featuresData.slice(6, 8), ...featuresData.slice(6, 8)].map((feature, index) => (
                    <div
                      key={index}
                      className='group relative p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-border transition-all duration-300 min-w-[280px] max-w-[320px]'
                    >
                      <div className='flex items-start gap-4'>
                        <div className={`p-2.5 rounded-lg bg-gradient-to-br ${
                          index % 2 === 0 ? 'from-cyan-500/10 to-cyan-600/10' :
                          'from-pink-500/10 to-pink-600/10'
                        }`}>
                          {React.cloneElement(feature.icon, {
                            className: `h-5 w-5 ${feature.color}`
                          })}
                        </div>
                        <div className='flex-1 space-y-0.5'>
                          <h3 className='font-medium text-sm leading-tight text-foreground'>
                            {feature.title}
                          </h3>
                          <p className='text-xs leading-relaxed text-muted-foreground'>
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </InfiniteSlider>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
