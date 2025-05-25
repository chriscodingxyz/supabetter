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
  fire: 'linear-gradient(135deg, #ff4500 0%, #ff6b00 10%, #ff8c00 20%, #ffa500 30%, #ffb84d 40%, #ffcc66 50%, #ffdd80 60%, #ffaa33 70%, #ff7700 80%, #ff5500 90%, #ff2200 100%)'
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
