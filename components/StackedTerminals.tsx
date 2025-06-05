'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Terminal, Key, Database, Copy, Check } from 'lucide-react'
import { TextScramble } from './ui/text-scramble'

export function StackedTerminals() {
  const [copiedCommand, setCopiedCommand] = useState<string | null>(null)
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0)

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    setCopiedCommand(text)
    setTimeout(() => setCopiedCommand(null), 2000)
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
          command: "cp .env.example .env",
          output: null,
          isEnvFile: false
        },
        {
          label: "Set environment variables",
          command: "# Add your credentials to .env",
          output: [
            "BETTER_AUTH_SECRET=your_secret_here",
            "BETTER_AUTH_URL=http://localhost:3002",
            "NEXT_PUBLIC_APP_URL=http://localhost:3002",
            "",
            "# Social auth (optional)",
            "GOOGLE_CLIENT_ID=your_google_id",
            "GOOGLE_CLIENT_SECRET=your_google_secret",
            "GITHUB_CLIENT_ID=your_github_id",
            "GITHUB_CLIENT_SECRET=your_github_secret"
          ],
          isEnvFile: true
        }
      ]
    },
    {
      title: "Database & Launch",
      icon: <Database className="w-4 h-4" />,
      commands: [
        {
          label: "Generate database",
          command: "pnpm drizzle:generate",
          output: [
            "🔧 Generating SQL migration...",
            "✓ Migration created at /drizzle/0001_init.sql"
          ],
          isEnvFile: false
        },
        {
          label: "Push to database",
          command: "pnpm drizzle:push",
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
            "> next dev -p 3002",
            "",
            "▲ Next.js 15.2.4",
            "- Local: http://localhost:3002",
            "✓ Ready in 2.1s"
          ],
          isEnvFile: false
        }
      ]
    }
  ]

  return (
    <div className="relative w-full min-h-[600px]">
      <div className="space-y-3">
        {setupSteps.map((step, index) => {
          const isExpanded = expandedIndex === index
          
          return (
            <motion.div
              key={index}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                delay: index * 0.1,
                layout: { type: "spring", stiffness: 300, damping: 30 }
              }}
              className="relative"
            >
              <motion.div
                className={`
                  relative rounded-xl border bg-card/50 backdrop-blur-sm overflow-hidden cursor-pointer
                  transition-all duration-300
                  ${isExpanded 
                    ? 'border-primary/50 bg-card/80' 
                    : 'border-border/50 hover:border-border hover:bg-card/60'
                  }
                `}
                onClick={() => setExpandedIndex(isExpanded ? null : index)}
                whileHover={{ scale: isExpanded ? 1 : 1.01 }}
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              >
                {/* Terminal Header */}
                <div className="flex items-center justify-between p-4">
                  <div className="flex items-center gap-3">
                    <div className="flex gap-1.5 opacity-50">
                      <div className="w-2 h-2 rounded-full bg-red-500" />
                      <div className="w-2 h-2 rounded-full bg-yellow-500" />
                      <div className="w-2 h-2 rounded-full bg-green-500" />
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      {step.icon}
                      <span className="text-sm font-medium">{step.title}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <span>Step {index + 1}</span>
                    <motion.div
                      animate={{ rotate: isExpanded ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <path d="M3 5L6 8L9 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </motion.div>
                  </div>
                </div>

                {/* Terminal Content */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-4 pb-4 space-y-4">
                        {step.commands.map((cmd, cmdIndex) => (
                          <motion.div
                            key={cmdIndex}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: cmdIndex * 0.1 }}
                            className="space-y-1.5"
                          >
                            <div className="text-[10px] text-muted-foreground">
                              {cmd.label}
                            </div>
                            
                            <div
                              onClick={(e) => {
                                e.stopPropagation()
                                copyToClipboard(cmd.command)
                              }}
                              className="group relative flex items-center gap-2 px-3 py-2 bg-muted/50 hover:bg-muted/70 rounded-lg border border-border cursor-pointer transition-all"
                            >
                              <span className="text-emerald-600 dark:text-emerald-400 font-mono text-xs">$</span>
                              <TextScramble className="flex-1 font-mono text-xs text-foreground">{cmd.command}</TextScramble>
                              <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                                {copiedCommand === cmd.command ? (
                                  <Check className="w-4 h-4 text-emerald-500" />
                                ) : (
                                  <Copy className="w-4 h-4 text-muted-foreground" />
                                )}
                              </div>
                            </div>
                            
                            {cmd.output && (
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
                  )}
                </AnimatePresence>
              </motion.div>
            </motion.div>
          )
        })}
      </div>

      {/* Quick navigation hint */}
      <div className="mt-6 text-center text-xs text-muted-foreground">
        Click any step to expand • All commands are click-to-copy
      </div>
    </div>
  )
}
