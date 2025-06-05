'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Terminal, Key, Database, Copy, Check, ChevronLeft, ChevronRight } from 'lucide-react'
import { TextScramble } from './ui/text-scramble'
import { Button } from './ui/button'

export function FloatingTerminals() {
  const [copiedCommand, setCopiedCommand] = useState<string | null>(null)
  const [activeIndex, setActiveIndex] = useState(0)

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    setCopiedCommand(text)
    setTimeout(() => setCopiedCommand(null), 2000)
  }

  const setupSteps = [
    {
      title: "Clone & Install",
      icon: <Terminal className="w-5 h-5" />,
      commands: [
        {
          label: "Clone the repository",
          command: "git clone https://github.com/chriscodingxyz/supabetter.git",
          output: null
        },
        {
          label: "Navigate to project",
          command: "cd supabetter",
          output: null
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
          ]
        }
      ]
    },
    {
      title: "Env Setup",
      icon: <Key className="w-5 h-5" />,
      commands: [
        {
          label: "Copy environment file",
          command: "cp .env.example .env",
          output: null
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
      icon: <Database className="w-5 h-5" />,
      commands: [
        {
          label: "Generate database",
          command: "pnpm drizzle:generate",
          output: [
            "🔧 Generating SQL migration...",
            "✓ Migration created at /drizzle/0001_init.sql"
          ]
        },
        {
          label: "Push to database",
          command: "pnpm drizzle:push",
          output: [
            "🚀 Pushing to database...",
            "✓ Tables created successfully",
            "✓ Database synced with schema"
          ]
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
          ]
        }
      ]
    }
  ]

  const nextTerminal = () => {
    setActiveIndex((prev) => (prev + 1) % setupSteps.length)
  }

  const prevTerminal = () => {
    setActiveIndex((prev) => (prev - 1 + setupSteps.length) % setupSteps.length)
  }

  return (
    <div className="relative w-full h-[600px] perspective-1000">
      {/* Navigation */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 z-20 flex items-center gap-4">
        <Button
          variant="ghost"
          size="icon"
          onClick={prevTerminal}
          className="rounded-full bg-background/80 backdrop-blur-sm border"
        >
          <ChevronLeft className="w-4 h-4" />
        </Button>
        
        <div className="flex gap-2">
          {setupSteps.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === activeIndex
                  ? 'bg-primary w-8'
                  : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
              }`}
            />
          ))}
        </div>
        
        <Button
          variant="ghost"
          size="icon"
          onClick={nextTerminal}
          className="rounded-full bg-background/80 backdrop-blur-sm border"
        >
          <ChevronRight className="w-4 h-4" />
        </Button>
      </div>

      {/* Floating Terminals */}
      <div className="relative w-full h-full flex items-center justify-center">
        <AnimatePresence mode="wait">
          {setupSteps.map((step, index) => {
            const isActive = index === activeIndex
            const offset = index - activeIndex
            
            return (
              <motion.div
                key={index}
                initial={{ 
                  opacity: 0,
                  scale: 0.8,
                  rotateY: offset * 45,
                  z: -Math.abs(offset) * 100
                }}
                animate={{ 
                  opacity: isActive ? 1 : 0.3,
                  scale: isActive ? 1 : 0.85,
                  rotateY: offset * 45,
                  z: -Math.abs(offset) * 100,
                  x: offset * 150,
                  filter: isActive ? 'blur(0px)' : 'blur(2px)'
                }}
                exit={{ 
                  opacity: 0,
                  scale: 0.8
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 30
                }}
                className={`absolute max-w-4xl w-full ${
                  isActive ? 'pointer-events-auto z-10' : 'pointer-events-none'
                }`}
                style={{
                  transformStyle: 'preserve-3d',
                  transform: `translateZ(${-Math.abs(offset) * 100}px)`
                }}
              >
                <motion.div
                  className={`relative rounded-2xl border border-border/50 bg-card/80 backdrop-blur-md p-8 shadow-2xl`}
                  whileHover={isActive ? { scale: 1.02 } : {}}
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                >
                  {/* Terminal Header */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500/50" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                      <div className="w-3 h-3 rounded-full bg-green-500/50" />
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      {step.icon}
                      <span className="text-sm font-medium">{step.title}</span>
                    </div>
                  </div>

                  {/* Terminal Content */}
                  <div className="space-y-4">
                    {step.commands.map((cmd, cmdIndex) => (
                      <div key={cmdIndex} className="space-y-2">
                        <div className="text-xs text-muted-foreground uppercase tracking-wider">
                          {cmd.label}
                        </div>
                        
                        <div className="relative group">
                          <div className="bg-black/60 backdrop-blur rounded-lg p-4 font-mono text-sm border border-white/10">
                            <div className="flex items-center justify-between">
                              <code className="text-green-400">
                                $ <TextScramble className="inline">{cmd.command}</TextScramble>
                              </code>
                              <button
                                onClick={() => copyToClipboard(cmd.command)}
                                className="opacity-0 group-hover:opacity-100 transition-opacity"
                              >
                                {copiedCommand === cmd.command ? (
                                  <Check className="w-4 h-4 text-green-500" />
                                ) : (
                                  <Copy className="w-4 h-4 text-muted-foreground hover:text-foreground" />
                                )}
                              </button>
                            </div>
                            
                            {cmd.output && (
                              <div className="mt-3 space-y-1">
                                {cmd.output.map((line, lineIndex) => (
                                  <div
                                    key={lineIndex}
                                    className={
                                      cmd.isEnvFile
                                        ? "text-blue-400 text-xs"
                                        : line.includes("✓")
                                        ? "text-green-400/80 text-xs"
                                        : line.includes("📦") || line.includes("🔧") || line.includes("🚀")
                                        ? "text-yellow-400/80 text-xs"
                                        : line.includes("▲")
                                        ? "text-white text-xs"
                                        : "text-gray-400 text-xs"
                                    }
                                  >
                                    {line}
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Step Indicator */}
                  <div className="mt-6 flex items-center justify-between text-xs text-muted-foreground">
                    <span>Step {index + 1} of {setupSteps.length}</span>
                    <span className="flex items-center gap-1">
                      {isActive && (
                        <motion.span
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="text-primary"
                        >
                          Active
                        </motion.span>
                      )}
                    </span>
                  </div>
                </motion.div>
              </motion.div>
            )
          })}
        </AnimatePresence>
      </div>

      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-background" />
      </div>
    </div>
  )
}
