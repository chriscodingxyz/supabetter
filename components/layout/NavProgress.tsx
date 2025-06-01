'use client'

import { ProgressProvider } from '@bprogress/next/app'
const NavProgress = ({ children }: { children: React.ReactNode }) => {
  return (
    <ProgressProvider
      height='4px'
      color='#70dafa'
      options={{ showSpinner: false }}
      shallowRouting
    >
      {children}
    </ProgressProvider>
  )
}

export default NavProgress
