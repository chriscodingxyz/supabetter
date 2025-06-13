'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Terminal, Key, Database, Copy, Check } from 'lucide-react'
import { TextScramble } from './ui/text-scramble'

export function ShuffleTerminals() {
  const [copiedCommand, setCopiedCommand] = useState<string | null>(null)
  const [activeOrder, setActiveOrder] = useState([0, 1, 2])
  const [clickedCommands, setClickedCommands] = useState<Set<string>>(new Set())

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    setCopiedCommand(text)
    setClickedCommands(prev => new Set([...prev, text]))
    setTimeout(() => setCopiedCommand(null), 2000)
  }

  const bringToFront = (index: number) => {
    setActiveOrder(() => {
      // Always maintain sequential order starting from the clicked index
      const newOrder = []
      
      // Start from the clicked index and wrap around
      for (let i = 0; i < setupSteps.length; i++) {
        newOrder.push((index + i) % setupSteps.length)
      }
      
      return newOrder
    })
  }

  const setupSteps = [
    {
      title: "Clone & Install",
      icon: <Terminal className="w-4 h-4" />,
      commands: [
        {
          label: "Clone the repository",
          command: "git clone https://github.com/chriscodingxyz/supabetter.git",
          output: null,
          isEnvFile: false
        },
        {
          label: "Navigate to project",
          command: "cd supabetter",
          output: null,
          isEnvFile: false
        },
        {
          label: "Install dependencies",
          command: "pnpm install",
          output: [
            "📦 Installing dependencies...",
            "✓ next@15.2.4",
            "✓ better-auth@1.2.5",
            "✓ drizzle-orm + postgres",
            "✓ @shadcn/ui components",
            "✨ Done in 12.3s"
          ],
          isEnvFile: false
        }
      ]
    },
    {
      title: "Env Setup",
      icon: <Key className="w-4 h-4" />,
      commands: [
        {
          label: "Copy environment file",
          command: "cp envExample.txt .env",
          output: null,
          isEnvFile: false
        },
        {
          label: "Set environment variables",
          command: "# Update .env with your values",
          output: [
            "BETTER_AUTH_SECRET=your_secret_here",
            "BETTER_AUTH_URL=http://localhost:3000",
            "SUPABASE_URL=https://your-project.supabase.co",
            "SUPABASE_SERVICE_ROLE_KEY=your_service_role_key",
            "DATABASE_URL=postgresql://postgres.your-project:[PASSWORD]@aws-0-region.pooler.supabase.com:6543/postgres"
          ],
          isEnvFile: true,
          showByDefault: true
        }
      ]
    },
    {
      title: "Database & Launch",
      icon: <Database className="w-4 h-4" />,
      commands: [
        {
          label: "Generate database",
          command: "pnpm drizzle-kit generate",
          output: [
            "🔧 Generating SQL migration...",
            "✓ Migration created at /drizzle/0001_init.sql"
          ],
          isEnvFile: false
        },
        {
          label: "Push to database",
          command: "pnpm drizzle-kit push",
          output: [
            "🚀 Pushing to database...",
            "✓ Tables created successfully",
            "✓ Database synced with schema"
          ],
          isEnvFile: false
        },
        {
          label: "Start development server",
          command: "pnpm dev",
          output: [
            "> supabetter@0.1.0 dev",
            "> next dev --turbopack",
            "",
            "⚡ Turbopack enabled",
            "▲ Next.js 15.2.4",
            "- Local: http://localhost:3000",
            "✓ Ready in 2.1s"
          ],
          isEnvFile: false
        }
      ]
    }
  ]

  return (
    <div className="relative w-full h-[600px] flex items-center justify-center">
      <div className="relative w-full max-w-3xl min-h-[450px] h-auto">
        <AnimatePresence>
          {activeOrder.map((stepIndex, orderIndex) => {
            const step = setupSteps[stepIndex]
            const isActive = orderIndex === 0
            const zIndex = activeOrder.length - orderIndex
            
            return (
              <motion.div
                key={stepIndex}
                layout
                initial={{ 
                  scale: 0.9,
                  opacity: 0,
                  x: -100,
                  y: 100
                }}
                animate={{ 
                  x: -orderIndex * 30, 
                  y: -orderIndex * 48, 
                  scale: 1 - (orderIndex * 0.1), 
                  opacity: 1
                }}
                exit={{ 
                  scale: 0.8,
                  opacity: 0,
                  x: 200
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 30
                }}
                className="absolute inset-0"
                style={{ 
                  zIndex
                }}
              >
                <motion.div
                  className={`
                    h-auto flex flex-col rounded-xl border bg-card overflow-hidden
                    transition-all duration-300
                    ${isActive 
                      ? 'border-primary/10 shadow-2xl shadow-primary/10' 
                      : 'border-primary/10 shadow-xl hover:shadow-2xl hover:-translate-y-2 cursor-pointer'
                    }
                  `}
                  style={{
                    width: `${100 - (orderIndex * 10)}%`, 
                    marginLeft: 'auto' 
                  }}
                  onClick={() => !isActive && bringToFront(stepIndex)}
                >
                  {/* Terminal Header */}
                  <div className="flex items-center justify-between px-4 py-2 border-b border-border/50">
                    <div className="flex items-center gap-3">
                      <div className="flex gap-1.5 opacity-50">
                        <div className="w-2 h-2 rounded-full bg-red-500" />
                        <div className="w-2 h-2 rounded-full bg-yellow-500" />
                        <div className="w-2 h-2 rounded-full bg-green-500" />
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        {step.icon}
                        <span className={`text-sm font-medium ${isActive ? 'text-foreground' : ''}`}>
                          #{stepIndex + 1} {step.title}
                        </span>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      {isActive ? (
                        <span className="text-[10px] bg-primary/20 text-primary px-2 py-0.5 rounded">Active</span>
                      ) : (
                        <span className="text-[10px] text-muted-foreground">Click to view</span>
                      )}
                    </div>
                  </div>

                  {/* Terminal Content */}
                  <div className="p-4 space-y-3">
                    {step.commands.map((cmd, cmdIndex) => (
                      <motion.div
                        key={cmdIndex}
                        initial={isActive ? { opacity: 0, x: -10 } : {}}
                        animate={isActive ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: isActive ? cmdIndex * 0.1 : 0 }}
                        className="space-y-1.5"
                      >
                        <div className="text-[10px] text-muted-foreground">
                          {cmd.label}
                        </div>
                        
                        <div
                          onClick={(e) => {
                            if (isActive) {
                              e.stopPropagation()
                              if (cmd.isEnvFile && cmd.output) {
                                // Copy the actual .env content
                                copyToClipboard(cmd.output.join('\n'))
                              } else {
                                copyToClipboard(cmd.command)
                              }
                            }
                          }}
                          className={`
                            group relative flex items-center gap-2 px-3 py-2 
                            bg-muted/50 rounded-lg border border-border transition-all
                            ${isActive ? 'hover:bg-muted/70 cursor-pointer' : 'cursor-pointer'}
                          `}
                        >
                          <span className="text-emerald-600 dark:text-emerald-400 font-mono text-xs">$</span>
                          <TextScramble className="flex-1 font-mono text-xs text-foreground">{cmd.command}</TextScramble>
                          {isActive && (
                            <div className="transition-opacity">
                              {copiedCommand === cmd.command ? (
                                <Check className="w-4 h-4 text-emerald-500" />
                              ) : (
                                <Copy className="w-4 h-4 text-muted-foreground" />
                              )}
                            </div>
                          )}
                        </div>
                        
                        {cmd.output && isActive && (clickedCommands.has(cmd.command) || (cmd as any).showByDefault) && (
                          <div className="ml-4 pl-3 border-l-2 border-muted-foreground/20 space-y-1">
                            {cmd.output.map((line, lineIndex) => (
                              <div
                                key={lineIndex}
                                className="text-[10px] text-muted-foreground"
                              >
                                {cmd.isEnvFile ? (
                                  <div className="flex items-start gap-2 font-mono">
                                    <span className="text-purple-600 dark:text-purple-400">{line.split('=')[0]}</span>
                                    {line.includes('=') && (
                                      <>
                                        <span className="text-muted-foreground">=</span>
                                        <span className="text-emerald-600 dark:text-emerald-400">{line.split('=')[1]}</span>
                                      </>
                                    )}
                                  </div>
                                ) : line.includes("✓") ? (
                                  <span className="text-emerald-600 dark:text-emerald-400">{line}</span>
                                ) : line.includes("📦") || line.includes("🔧") || line.includes("🚀") ? (
                                  <span className="text-yellow-600 dark:text-yellow-400">{line}</span>
                                ) : line.includes("▲") || line.includes(">") ? (
                                  <span className="text-foreground">{line}</span>
                                ) : line.startsWith("#") ? (
                                  <span className="text-foreground/80 font-medium">{line}</span>
                                ) : (
                                  line
                                )}
                              </div>
                            ))}
                          </div>
                        )}
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            )
          })}
        </AnimatePresence>
      </div>

      {/* Navigation dots */}
      <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
        {setupSteps.map((_, index) => {
          const position = activeOrder.indexOf(index)
          return (
            <button
              key={index}
              onClick={() => bringToFront(index)}
              className={`
                w-2 h-2 rounded-full transition-all duration-300
                ${position === 0 
                  ? 'w-8 bg-primary' 
                  : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                }
              `}
              aria-label={`Go to step ${index + 1}`}
            />
          )
        })}
      </div>
    </div>
  )
}
