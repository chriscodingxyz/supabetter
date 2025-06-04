// 'use client'

// import React from 'react'

// // Define theme types for better TypeScript support
// export type GradientThemeKey =
//   | 'silver'
//   | 'gold'
//   | 'bronze'
//   | 'chrome'
//   | 'rainbow'
//   | 'blue-steel'
//   | 'fire'
// export type MetallicTheme = GradientThemeKey | 'custom'

// // Props interface with new theme options
// interface MetallicTextProps {
//   children: React.ReactNode
//   className?: string
//   theme?: MetallicTheme
//   customGradient?: string
//   animationDuration?: number
//   textShadowColor?: string
//   textShadowBlur?: number
//   dropShadowColor?: string
//   dropShadowBlur?: number
// }

// // Predefined gradient themes
// const gradientThemes: Record<GradientThemeKey, string> = {
//   silver:
//     'linear-gradient(135deg, #e6e6e6 0%, #d9d9d9 10%, #c4c4c4 20%, #b3b3b3 30%, #a6a6a6 40%, #939393 50%, #7c7c7c 60%, #8c8c8c 70%, #999999 80%, #b3b3b3 90%, #d9d9d9 100%)',
//   gold: 'linear-gradient(135deg, #f9d566 0%, #f2c14e 10%, #edb235 20%, #e6a01e 30%, #e09914 40%, #d49212 50%, #c78a15 60%, #b37e21 70%, #b38728 80%, #d2ac47 90%, #f9d566 100%)',
//   bronze:
//     'linear-gradient(135deg, #cd9d78 0%, #b78256 10%, #a57149 20%, #955e3a 30%, #8d5734 40%, #80502e 50%, #704627 60%, #7a4e2d 70%, #8c5836 80%, #a06841 90%, #cd9d78 100%)',
//   chrome:
//     'linear-gradient(135deg, #ffffff 0%, #f3f3f3 10%, #ededed 20%, #e8e8e8 30%, #dddddd 40%, #c5c5c5 50%, #b4b4b4 60%, #c7c7c7 70%, #dadada 80%, #f1f1f1 90%, #ffffff 100%)',
//   rainbow:
//     'linear-gradient(135deg, #ff0000 0%, #ff8000 14%, #ffff00 28%, #00ff00 42%, #00ffff 56%, #0000ff 70%, #8000ff 84%, #ff00ff 100%)',
//   'blue-steel':
//     'linear-gradient(135deg, #b3c5d7 0%, #95a8c1 10%, #8293ab 20%, #6f7e95 30%, #5d6c83 40%, #4c5a71 50%, #3c4961 60%, #4c5a71 70%, #5d6c83 80%, #8293ab 90%, #b3c5d7 100%)',
//   fire: 'linear-gradient(135deg, #ff4500 0%, #ff6b00 10%, #ff8c00 20%, #ffa500 30%, #ffb84d 40%, #ffcc66 50%, #ffdd80 60%, #ffaa33 70%, #ff7700 80%, #ff5500 90%, #ff2200 100%)'
// }

// export const MetallicText: React.FC<MetallicTextProps> = ({
//   children,
//   className = '',
//   theme = 'silver',
//   customGradient,
//   animationDuration = 5,
//   textShadowColor = 'rgba(150, 150, 150, 0.3)',
//   textShadowBlur = 3,
//   dropShadowColor = 'rgba(192, 192, 192, 0.6)',
//   dropShadowBlur = 2
// }) => {
//   // Determine which gradient to use
//   const gradientBackground =
//     theme === 'custom' && customGradient
//       ? customGradient
//       : theme !== 'custom'
//       ? gradientThemes[theme]
//       : gradientThemes.silver

//   return (
//     <span
//       className={`relative inline-block ${className}`}
//       style={{
//         backgroundImage: gradientBackground,
//         backgroundSize: '200% 200%',
//         backgroundPosition: '0% 50%',
//         animation: `gradient-shift ${animationDuration}s ease infinite`,
//         WebkitBackgroundClip: 'text',
//         WebkitTextFillColor: 'transparent',
//         textShadow: `0px 0px ${textShadowBlur}px ${textShadowColor}`,
//         filter: `drop-shadow(0 0 ${dropShadowBlur}px ${dropShadowColor})`
//       }}
//     >
//       {children}
//       <style jsx>{`
//         @keyframes gradient-shift {
//           0% {
//             background-position: 0% 50%;
//           }
//           50% {
//             background-position: 100% 50%;
//           }
//           100% {
//             background-position: 0% 50%;
//           }
//         }
//       `}</style>
//     </span>
//   )
// }


'use client'

import React from 'react'

// Define theme types for better TypeScript support
export type GradientThemeKey =
  | 'silver'
  | 'gold'
  | 'bronze'
  | 'chrome'
  | 'rainbow'
  | 'blue-steel'
  | 'fire'
  | 'plasma'
  | 'ocean'
  | 'cosmic'
  | 'aurora'
  | 'neon'
  | 'vintage'
  | 'emerald'
  | 'sunset'
export type MetallicTheme = GradientThemeKey | 'custom'

// Props interface with new theme options
interface MetallicTextProps {
  children: React.ReactNode
  className?: string
  theme?: MetallicTheme
  customGradient?: string
  animationDuration?: number
  textShadowColor?: string
  textShadowBlur?: number
  dropShadowColor?: string
  dropShadowBlur?: number
}

// Predefined gradient themes
const gradientThemes: Record<GradientThemeKey, string> = {
  silver:
    'linear-gradient(135deg, #e6e6e6 0%, #d9d9d9 10%, #c4c4c4 20%, #b3b3b3 30%, #a6a6a6 40%, #939393 50%, #7c7c7c 60%, #8c8c8c 70%, #999999 80%, #b3b3b3 90%, #d9d9d9 100%)',
  gold: 'linear-gradient(135deg, #f9d566 0%, #f2c14e 10%, #edb235 20%, #e6a01e 30%, #e09914 40%, #d49212 50%, #c78a15 60%, #b37e21 70%, #b38728 80%, #d2ac47 90%, #f9d566 100%)',
  bronze:
    'linear-gradient(135deg, #cd9d78 0%, #b78256 10%, #a57149 20%, #955e3a 30%, #8d5734 40%, #80502e 50%, #704627 60%, #7a4e2d 70%, #8c5836 80%, #a06841 90%, #cd9d78 100%)',
  chrome:
    'linear-gradient(135deg, #ffffff 0%, #f3f3f3 10%, #ededed 20%, #e8e8e8 30%, #dddddd 40%, #c5c5c5 50%, #b4b4b4 60%, #c7c7c7 70%, #dadada 80%, #f1f1f1 90%, #ffffff 100%)',
  rainbow:
    'linear-gradient(135deg, #ff0000 0%, #ff8000 14%, #ffff00 28%, #00ff00 42%, #00ffff 56%, #0000ff 70%, #8000ff 84%, #ff00ff 100%)',
  'blue-steel':
    'linear-gradient(135deg, #b3c5d7 0%, #95a8c1 10%, #8293ab 20%, #6f7e95 30%, #5d6c83 40%, #4c5a71 50%, #3c4961 60%, #4c5a71 70%, #5d6c83 80%, #8293ab 90%, #b3c5d7 100%)',
  fire: 'linear-gradient(135deg, #ff4500 0%, #ff6b00 10%, #ff8c00 20%, #ffa500 30%, #ffb84d 40%, #ffcc66 50%, #ffdd80 60%, #ffaa33 70%, #ff7700 80%, #ff5500 90%, #ff2200 100%)',
  plasma: 'linear-gradient(135deg, #ff006e 0%, #ff2d92 10%, #ff4fb3 20%, #ff6bd0 30%, #ff85ea 40%, #ff9eff 50%, #d580ff 60%, #aa6cff 70%, #7f58ff 80%, #5544ff 90%, #2d30ff 100%)',
  ocean: 'linear-gradient(135deg, #006994 0%, #0086b3 10%, #00a3d4 20%, #00bfff 30%, #1ac6ff 40%, #33ccff 50%, #4dd2ff 60%, #66d9ff 70%, #80dfff 80%, #9ae6ff 90%, #b3ecff 100%)',
  cosmic: 'linear-gradient(135deg, #0f0c29 0%, #24243e 10%, #302b63 20%, #5b51d8 30%, #7c53d8 40%, #a855f7 50%, #c084fc 60%, #e879f9 70%, #f0abfc 80%, #fbbf24 90%, #fde047 100%)',
  aurora: 'linear-gradient(135deg, #00ffa1 0%, #00ffcd 10%, #00fff9 20%, #00e1ff 30%, #00b3ff 40%, #0085ff 50%, #0057ff 60%, #2d39ff 70%, #5b1bff 80%, #8b00ff 90%, #bb00ff 100%)',
  neon: 'linear-gradient(135deg, #ff00ff 0%, #ff0080 10%, #ff0040 20%, #ff4000 30%, #ff8000 40%, #ffbf00 50%, #ffff00 60%, #80ff00 70%, #00ff00 80%, #00ff80 90%, #00ffff 100%)',
  vintage: 'linear-gradient(135deg, #8b4513 0%, #a0522d 10%, #cd853f 20%, #daa520 30%, #b8860b 40%, #d2b48c 50%, #deb887 60%, #f5deb3 70%, #ffe4b5 80%, #fff8dc 90%, #fffacd 100%)',
  emerald: 'linear-gradient(135deg, #064e3b 0%, #065f46 10%, #047857 20%, #059669 30%, #10b981 40%, #34d399 50%, #6ee7b7 60%, #9deccd 70%, #a7f3d0 80%, #c6f6d5 90%, #d1fae5 100%)',
  sunset: 'linear-gradient(135deg, #7c2d12 0%, #dc2626 10%, #ea580c 20%, #f97316 30%, #f59e0b 40%, #eab308 50%, #facc15 60%, #fde047 70%, #fef08a 80%, #fef3c7 90%, #fffbeb 100%)'
}

export const MetallicText: React.FC<MetallicTextProps> = ({
  children,
  className = '',
  theme = 'silver',
  customGradient,
  animationDuration = 5,
  textShadowColor = 'rgba(150, 150, 150, 0.3)',
  textShadowBlur = 3,
  dropShadowColor = 'rgba(192, 192, 192, 0.6)',
  dropShadowBlur = 2
}) => {
  // Determine which gradient to use
  const gradientBackground =
    theme === 'custom' && customGradient
      ? customGradient
      : theme !== 'custom'
      ? gradientThemes[theme]
      : gradientThemes.silver

  return (
    <span
      className={`relative inline-block ${className}`}
      style={{
        backgroundImage: gradientBackground,
        backgroundSize: '200% 200%',
        backgroundPosition: '0% 50%',
        animation: `gradient-shift ${animationDuration}s ease infinite`,
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        textShadow: `0px 0px ${textShadowBlur}px ${textShadowColor}`,
        filter: `drop-shadow(0 0 ${dropShadowBlur}px ${dropShadowColor})`
      }}
    >
      {children}
      <style jsx>{`
        @keyframes gradient-shift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
    </span>
  )
}