import type { Metadata } from 'next'
import {
  Geist,
  Geist_Mono,
  Inter,
  Fira_Code,
  Silkscreen,
  JetBrains_Mono
} from 'next/font/google'

import './globals.css'
import { ThemeProvider } from '@/components/theme/ThemeProvider'
import ViewportIndicator from '@/components/layout/ViewPortIndicator'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import SonnerWrapper from '@/components/SonnerWrapper'
import { SITE_NAME } from '@/lib/constants'
import NavProgress from '@/components/layout/NavProgress'

const silkscreen = Silkscreen({
  variable: '--font-silkscreen',
  subsets: ['latin'],
  weight: '400'
})

const geistSans = Geist({
  variable: '--font-sans',
  subsets: ['latin']
})

const geistMono = Geist_Mono({
  variable: '--font-mono',
  subsets: ['latin']
})

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin']
})

const firaCode = Fira_Code({
  variable: '--font-fira-code',
  subsets: ['latin']
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono'
})

export const metadata: Metadata = {
  title: SITE_NAME,
  description: '2025 template'
}

export default function RootLayout ({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} ${firaCode.variable} ${silkscreen.variable} ${jetbrainsMono.variable} antialiased font-geist flex flex-col min-h-[100dvh]`}
      >
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          <SonnerWrapper>
            <NavProgress>
              <Header />
              <main className='flex-1'>
                {children}
              </main>
              <Footer />
              {process.env.NODE_ENV === 'development' && <ViewportIndicator />}
            </NavProgress>
          </SonnerWrapper>
        </ThemeProvider>
      </body>
    </html>
  )
}
