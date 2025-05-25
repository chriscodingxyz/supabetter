const isDev = process.env.NODE_ENV !== 'production'

// Define colors with explicit TypeScript type (based on log level)
const colors: { [key: string]: string } = {
  INFO: '\x1b[34m', // Blue
  ERROR: '\x1b[31m', // Red
  WARN: '\x1b[33m', // Yellow
  DEBUG: '\x1b[35m', // Purple
  SUCCESS: '\x1b[32m' // Green
}
const reset = '\x1b[0m'

// Main logging function
function logger (level = 'info', ...args: unknown[]): void {
  try {
    // Build log data
    const logData = {
      timestamp: new Date().toISOString(),
      level: level.toUpperCase(),
      details: args // Store all arguments as an array
    }

    // Development: Boxed, color-coded output with open right side
    if (isDev) {
      const color = colors[logData.level] || colors.INFO
      const border = '═'.repeat(50)
      const emoji =
        { INFO: '🧿', ERROR: '❌', WARN: '⚠️', DEBUG: '🐞', SUCCESS: '✅' }[
          logData.level
        ] || '🧿'

      console.log(`${color}╔${border}`)
      console.log(`${color}║ ${emoji} ${logData.level}`)
      args.forEach(arg => {
        const displayValue =
          arg == null
            ? String(arg)
            : typeof arg === 'object'
            ? JSON.stringify(arg, null, 2)
            : String(arg)
        const paddingLength = Math.max(0, 47 - displayValue.length)
        console.log(`${color}║ 💬 ${displayValue}${' '.repeat(paddingLength)}`)
      })
      console.log(`${color}║ ⏰ ${logData.timestamp}`)
      console.log(`${color}╚${border}${reset}`)
    } else {
      // Production: JSON output with all arguments in an array
      console.log(JSON.stringify(logData))
    }
  } catch (error: unknown) {
    console.error('Logging error:', {
      level,
      args,
      error: (error as Error)?.message
    })
  }
}

// Convenience methods
logger.info = (...args: unknown[]): void => logger('info', ...args)
logger.error = (...args: unknown[]): void => logger('error', ...args)
logger.warn = (...args: unknown[]): void => logger('warn', ...args)
logger.debug = (...args: unknown[]): void => logger('debug', ...args)
logger.success = (...args: unknown[]): void => logger('success', ...args)

export default logger
