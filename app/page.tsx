import { MetallicText } from '@/components/typography/MetallicText'
import { Button } from '@/components/ui/button'
import { ScrollArea } from '@/components/ui/scroll-area'

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
        'Built on Next.js 15 with App Router for blazing performance',
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
    <div className='bg-background relative min-h-[calc(100dvh-60px)]'>
      {/* Subtle gradient background */}
      <div className='fixed inset-0 pointer-events-none overflow-hidden'>
        <div className='absolute inset-0 bg-gradient-to-br from-zinc-50 via-transparent to-zinc-50/20 dark:from-zinc-950 dark:via-transparent dark:to-zinc-950/40' />
        <div className='absolute top-0 right-0 w-[40%] h-[40%] bg-gradient-radial from-primary/5 to-transparent blur-3xl' />
        <div className='absolute bottom-0 left-0 w-[40%] h-[40%] bg-gradient-radial from-primary/3 to-transparent blur-3xl' />
      </div>

      {/* Hero Section with Golden Ratio spacing */}
      <section className='relative'>
        <div className='mx-auto max-w-7xl px-6 lg:px-8'>
          {/* Main content grid using golden ratio (1:1.618) */}
          <div className='grid lg:grid-cols-[1fr_1.618fr] gap-8 lg:gap-16 py-16 lg:py-24 items-center min-h-[calc(100vh-60px-8rem)]'>
            
            {/* Left: Primary content */}
            <div className='relative order-1 lg:order-1'>
              <div className='space-y-6'>
                {/* Badge */}
                <div className='inline-flex items-center px-3 py-1 text-xs font-medium bg-primary/5 text-primary rounded-full border border-primary/10'>
                  <Rocket className='w-3 h-3 mr-1.5' />
                  Launch faster than ever
                </div>
                
                {/* Title with tighter spacing */}
                <div className='space-y-4'>
                  <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight'>
                    <span className='block text-foreground/90'>Skip the setup.</span>
                    <span className='block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent'>
                      Start the build.
                    </span>
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
                  <Link href='https://github.com' target='_blank'>
                    <ShadowButton variant='secondary' size='sm' className='w-full sm:w-auto text-sm'>
                      <Github className='w-4 h-4 mr-2' />
                      View on GitHub
                    </ShadowButton>
                  </Link>
                </div>

                {/* Tech stack pills - compact */}
                <div className='flex flex-wrap gap-2 pt-4'>
                  <div className='inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700/50'>
                    <Nextjs className='w-3.5 h-3.5' />
                    <span className='text-xs font-medium'>Next.js</span>
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
                    <DrizzleORM className='w-3.5 h-3.5 text-green-500' />
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

            {/* Right: Visual element */}
            <div className='relative order-2 lg:order-2 hidden md:block'>
              <div className='relative mx-auto max-w-lg lg:max-w-none'>
                {/* Code showcase with golden ratio proportions */}
                <div className='relative aspect-[4/3] md:aspect-[1.618/1] rounded-2xl overflow-hidden bg-gradient-to-br from-zinc-900 to-zinc-950 dark:from-zinc-900 dark:to-black border border-zinc-800'>
                  {/* Terminal/Code Editor */}
                  <div className='h-full flex flex-col'>
                    {/* Terminal header */}
                    <div className='flex items-center justify-between px-4 py-3 bg-zinc-800/50 border-b border-zinc-700/50'>
                      <div className='flex items-center gap-2'>
                        <div className='flex gap-1.5'>
                          <div className='w-3 h-3 rounded-full bg-red-500' />
                          <div className='w-3 h-3 rounded-full bg-yellow-500' />
                          <div className='w-3 h-3 rounded-full bg-green-500' />
                        </div>
                        <span className='text-xs text-zinc-400 font-mono ml-2'>~/supabetter</span>
                      </div>
                      <div className='flex gap-3 text-xs text-zinc-500'>
                        <span>⚡ Fast</span>
                        <span>🔒 Secure</span>
                        <span>🎨 Beautiful</span>
                      </div>
                    </div>
                    
                    {/* Code content with explicit height for ScrollArea */}
                    <ScrollArea className='flex-1' style={{ height: 'calc(100% - 52px)' }}>
                      <div className='p-4 pr-3'>
                        <div className='font-mono text-xs space-y-3'>
                          {/* Clone command */}
                          <div className='flex items-center gap-2'>
                            <span className='text-emerald-400'>$</span>
                            <span className='text-zinc-300'>git clone https://github.com/chriscodingxyz/supabetter.git</span>
                          </div>
                          
                          <div className='flex items-center gap-2'>
                            <span className='text-emerald-400'>$</span>
                            <span className='text-zinc-300'>cd supabetter</span>
                          </div>

                          {/* Install dependencies */}
                          <div className='flex items-center gap-2'>
                            <span className='text-emerald-400'>$</span>
                            <span className='text-zinc-300'>pnpm install</span>
                            <span className='animate-pulse'>▊</span>
                          </div>
                          
                          {/* Output */}
                          <div className='text-zinc-500 text-[11px] space-y-1 ml-4'>
                            <div>📦 Installing dependencies...</div>
                            <div>✓ next@15.2.4</div>
                            <div>✓ better-auth@1.2.5</div>
                            <div>✓ drizzle-orm + postgres</div>
                            <div>✓ @shadcn/ui components</div>
                            <div className='text-emerald-400'>✨ Done!</div>
                          </div>

                          {/* Env setup */}
                          <div className='mt-4'>
                            <div className='text-zinc-500 text-[11px]'>// Setup environment variables</div>
                            <div className='flex items-center gap-2'>
                              <span className='text-emerald-400'>$</span>
                              <span className='text-zinc-300'>cp envExample.txt .env</span>
                            </div>
                            <div className='flex items-center gap-2 mt-2'>
                              <span className='text-emerald-400'>$</span>
                              <span className='text-zinc-300'>code .env</span>
                            </div>
                          </div>

                          {/* .env file content */}
                          <div className='mt-4 p-3 bg-zinc-800/50 rounded-lg border border-zinc-700/30'>
                            <div className='text-[11px] space-y-2 font-mono'>
                              <div className='text-zinc-500'># Authentication (required)</div>
                              <div>
                                <span className='text-purple-400'>BETTER_AUTH_SECRET</span>=
                                <span className='text-emerald-400'>your_secret_here</span>
                                <span className='text-zinc-500 ml-2'># Generate: openssl rand -base64 32</span>
                              </div>
                              <div>
                                <span className='text-purple-400'>BETTER_AUTH_URL</span>=
                                <span className='text-blue-400'>http://localhost:3000</span>
                              </div>
                              
                              <div className='text-zinc-500 mt-3'># Supabase (required) - Get from: supabase.com</div>
                              <div>
                                <span className='text-purple-400'>SUPABASE_URL</span>=
                                <span className='text-yellow-400'>https://[project].supabase.co</span>
                              </div>
                              <div>
                                <span className='text-purple-400'>SUPABASE_SERVICE_ROLE_KEY</span>=
                                <span className='text-yellow-400'>eyJ...</span>
                              </div>
                              <div>
                                <span className='text-purple-400'>DATABASE_URL</span>=
                                <span className='text-yellow-400'>postgresql://...</span>
                              </div>
                              
                              <div className='text-zinc-500 mt-3'># Social Auth (optional)</div>
                              <div>
                                <span className='text-purple-400'>GOOGLE_CLIENT_ID</span>=
                                <span className='text-zinc-600'>from console.cloud.google.com</span>
                              </div>
                              <div>
                                <span className='text-purple-400'>GOOGLE_CLIENT_SECRET</span>=
                                <span className='text-zinc-600'>from console.cloud.google.com</span>
                              </div>
                              <div>
                                <span className='text-purple-400'>GITHUB_CLIENT_ID</span>=
                                <span className='text-zinc-600'>from github.com/settings/apps</span>
                              </div>
                              <div>
                                <span className='text-purple-400'>GITHUB_CLIENT_SECRET</span>=
                                <span className='text-zinc-600'>from github.com/settings/apps</span>
                              </div>
                              
                              <div className='text-zinc-500 mt-3'># Email (optional) - Get from: resend.com</div>
                              <div>
                                <span className='text-purple-400'>RESEND_API_KEY</span>=
                                <span className='text-zinc-600'>re_...</span>
                              </div>
                            </div>
                          </div>

                          {/* Supabase setup reminder */}
                          <div className='mt-4 p-3 bg-yellow-500/10 rounded-lg border border-yellow-500/20'>
                            <div className='text-[11px] space-y-1 text-yellow-200'>
                              <div className='font-semibold'>⚠️ Supabase Setup Required:</div>
                              <div>1. Create project at supabase.com</div>
                              <div>2. Get SUPABASE_URL & service_role key</div>
                              <div>3. Get DATABASE_URL from Connect → ORMs → Drizzle</div>
                              <div>4. Update .env with all credentials</div>
                            </div>
                          </div>

                          {/* Database setup */}
                          <div className='mt-4'>
                            <div className='text-zinc-500 text-[11px]'>// Push database schema</div>
                            <div className='flex items-center gap-2'>
                              <span className='text-emerald-400'>$</span>
                              <span className='text-zinc-300'>pnpm drizzle-kit push</span>
                            </div>
                            <div className='text-zinc-500 text-[11px] ml-4 mt-1'>✓ Schema pushed to Supabase</div>
                          </div>

                          {/* Run dev server */}
                          <div className='mt-4'>
                            <div className='flex items-center gap-2'>
                              <span className='text-emerald-400'>$</span>
                              <span className='text-zinc-300'>pnpm dev</span>
                            </div>
                            <div className='text-zinc-500 text-[11px] ml-4 mt-1'>
                              <div className='text-blue-400'>▲ Next.js 15.2.4 (turbo)</div>
                              <div>- Local: http://localhost:3000</div>
                              <div className='text-emerald-400'>✓ Ready in 1.2s</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </ScrollArea>
                  </div>

                  {/* Floating accent */}
                  <div className='absolute -bottom-20 -right-20 w-40 h-40 bg-gradient-to-br from-primary/20 to-primary/5 rounded-full blur-3xl' />
                </div>

                {/* Stats badges */}
                <div className='absolute -bottom-6 left-1/2 -translate-x-1/2 flex gap-3'>
                  <div className='px-3 py-1.5 bg-zinc-900 dark:bg-zinc-800 rounded-full border border-zinc-700 flex items-center gap-2 shadow-lg'>
                    <Zap className='w-3 h-3 text-yellow-400' />
                    <span className='text-xs font-medium text-zinc-300'>Setup in 30s</span>
                  </div>
                  <div className='px-3 py-1.5 bg-zinc-900 dark:bg-zinc-800 rounded-full border border-zinc-700 flex items-center gap-2 shadow-lg'>
                    <Code className='w-3 h-3 text-blue-400' />
                    <span className='text-xs font-medium text-zinc-300'>TypeScript</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile terminal - simple version for small screens */}
          <div className='md:hidden mt-8 mb-16'>
            <div className='bg-zinc-900 dark:bg-zinc-950 rounded-xl p-4 border border-zinc-800'>
              <div className='font-mono text-xs space-y-2'>
                <div className='flex items-center gap-2'>
                  <span className='text-emerald-400'>$</span>
                  <span className='text-zinc-300'>git clone https://github.com/chriscodingxyz/supabetter.git</span>
                </div>
                <div className='text-zinc-500 text-[10px] ml-4'>
                  ✨ Ready in 30 seconds!
                </div>
              </div>
            </div>
          </div>

          {/* Feature grid - using golden ratio spacing */}
          <div className='border-t border-border/50 pt-16 pb-24'>
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
      </section>
    </div>
  )
}
