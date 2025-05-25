import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn (...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// export function loggy (name: string) {
//   const callerLine = new Error().stack?.split('\n')[2]?.trim() || 'Unknown'
//   const match = callerLine.match(/at\s+(.*?)\s+\((.*?\.\w+):/)
//   const callerName = match?.[1] || 'Unknown'
//   let filePath = match?.[2] || 'Unknown'

//   // Clean up Webpack prefix and normalize path
//   filePath = filePath
//     .replace('webpack-internal:///(rsc)/./', '') // Remove Webpack noise
//     .replace(/^.*?\.\//, '') // Remove any remaining prefix up to './'

//   // Convert to alias-like format (e.g., '@/components/layout/Header.tsx')
//   const cleanFilePath = `@/${filePath}`

//   console.log(
//     `✅🍒📝 ${name} called from: ${callerName} ${cleanFilePath} 🍒📝✅`
//   )
// }

export async function tryCatch<T> (
  promise: Promise<T>
): Promise<[T | null, unknown | null]> {
  try {
    const data = await promise
    return [data, null]
  } catch (error) {
    return [null, error]
  }
}
