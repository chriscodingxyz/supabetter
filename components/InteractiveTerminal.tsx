'use client'

import { useState } from 'react'
import { Terminal, Key, Database, Copy, Check } from 'lucide-react'
import { TextScramble } from './ui/text-scramble'

export function InteractiveTerminal() {
  const [copiedCommand, setCopiedCommand] = useState<string | null>(null)
  const [activeTab, setActiveTab] = useState(0)

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
      title: "Environment Setup",
      icon: <Key className="w-4 h-4" />,
      commands: [
        {
          label: "Copy environment file",
          command: "cp envExample.txt .env",
          output: null
        },
        {
          label: "Edit environment variables",
          command: "code .env",
          output: null
        }
      ],
      envExample: {
        auth: [
          { key: "BETTER_AUTH_SECRET", value: "your_secret_here", comment: "# Generate: openssl rand -base64 32" },
          { key: "BETTER_AUTH_URL", value: "http://localhost:3000", comment: "" }
        ],
        supabase: [
          { key: "SUPABASE_URL", value: "https://[project].supabase.co", comment: "" },
          { key: "SUPABASE_SERVICE_ROLE_KEY", value: "eyJ...", comment: "" },
          { key: "DATABASE_URL", value: "postgresql://...", comment: "" }
        ]
      }
    },
    {
      title: "Database & Launch",
      icon: <Database className="w-4 h-4" />,
      commands: [
        {
          label: "Push database schema",
          command: "pnpm drizzle-kit push",
          output: ["✓ Schema pushed to Supabase"]
        },
        {
          label: "Start development server",
          command: "pnpm dev",
          output: [
            "▲ Next.js 15.2.4 (turbo)",
            "- Local: http://localhost:3000",
            "✓ Ready in 1.2s"
          ]
        }
      ]
    }
  ]

  return (
    <div className='relative rounded-2xl overflow-hidden bg-background border border-border shadow-2xl'>
      {/* Terminal Tabs */}
      <div className='flex items-center justify-between px-3 py-2 bg-muted/30 border-b border-border'>
        <div className='flex items-center gap-2'>
          {setupSteps.map((step, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-medium transition-all ${
                index < activeTab
                  ? 'bg-green-500/10 text-green-700 dark:text-green-400 border border-green-500/20 hover:bg-green-500/15 hover:border-green-500/30'
                  : activeTab === index
                  ? 'bg-primary/10 text-primary border-2 border-primary/40 shadow-sm'
                  : 'text-muted-foreground bg-muted/30 border border-transparent hover:text-foreground hover:bg-muted/50'
              }`}
            >
              {
                index < activeTab ? <Check className="w-3.5 h-3.5 text-green-600 dark:text-green-500" /> : step.icon
              }
              <span>{`${index + 1}. ${step.title}`}</span>
            </button>
          ))}
        </div>
        <div className='flex gap-1.5'>
          <div className='w-3 h-3 rounded-full bg-red-500/80 hover:bg-red-500 transition-colors' />
          <div className='w-3 h-3 rounded-full bg-yellow-500/80 hover:bg-yellow-500 transition-colors' />
          <div className='w-3 h-3 rounded-full bg-green-500/80 hover:bg-green-500 transition-colors' />
        </div>
      </div>
      
      {/* Terminal Content */}
      <div className='p-4 space-y-3' style={{ minHeight: '360px' }}>
        {activeTab === 0 && (
          <div className='space-y-4'>
            {setupSteps[0].commands.map((cmd, index) => (
              <div key={index} className='space-y-1.5'>
                <div className='text-[10px] text-muted-foreground'>{cmd.label}</div>
                <div
                  onClick={() => copyToClipboard(cmd.command)}
                  className='group relative flex items-center gap-2 px-3 py-2 bg-muted/50 hover:bg-muted/70 rounded-lg border border-border cursor-pointer transition-all'
                >
                  <span className='text-emerald-600 dark:text-emerald-400 font-mono text-xs'>$</span>
                  <TextScramble className='flex-1 font-mono text-xs text-foreground'>{cmd.command}</TextScramble>
                  <div className='opacity-0 group-hover:opacity-100 transition-opacity'>
                    {copiedCommand === cmd.command ? (
                      <Check className='w-4 h-4 text-emerald-500' />
                    ) : (
                      <Copy className='w-4 h-4 text-muted-foreground' />
                    )}
                  </div>
                </div>
                {cmd.output && (
                  <div className='ml-4 pl-3 border-l-2 border-muted-foreground/20 space-y-1'>
                    {cmd.output.map((line, i) => (
                      <div key={i} className='text-[10px] text-muted-foreground'>
                        {line.includes('✓') ? (
                          <span className='text-emerald-600 dark:text-emerald-400'>{line}</span>
                        ) : (
                          line
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {activeTab === 1 && (
          <div className='space-y-4'>
            {setupSteps[1].commands.map((cmd, index) => (
              <div key={index} className='space-y-1.5'>
                <div className='text-[10px] text-muted-foreground'>{cmd.label}</div>
                <div
                  onClick={() => copyToClipboard(cmd.command)}
                  className='group relative flex items-center gap-2 px-3 py-2 bg-muted/50 hover:bg-muted/70 rounded-lg border border-border cursor-pointer transition-all'
                >
                  <span className='text-emerald-600 dark:text-emerald-400 font-mono text-xs'>$</span>
                  <TextScramble className='flex-1 font-mono text-xs text-foreground'>{cmd.command}</TextScramble>
                  <div className='opacity-0 group-hover:opacity-100 transition-opacity'>
                    {copiedCommand === cmd.command ? (
                      <Check className='w-4 h-4 text-emerald-500' />
                    ) : (
                      <Copy className='w-4 h-4 text-muted-foreground' />
                    )}
                  </div>
                </div>
              </div>
            ))}
            
            {/* .env example */}
            <div className='mt-4 p-3 bg-muted/30 rounded-lg border border-border'>
              <div className='font-mono text-[10px] space-y-1.5'>
                <div className='text-foreground/80 font-medium text-xs'># Authentication (required)</div>
                {setupSteps[1].envExample?.auth.map((env, i) => (
                  <div key={i} className='flex items-start gap-2'>
                    <span className='text-purple-600 dark:text-purple-400'>{env.key}</span>
                    <span className='text-muted-foreground'>=</span>
                    <span className='text-emerald-600 dark:text-emerald-400'>{env.value}</span>
                    {env.comment && <span className='text-muted-foreground text-[10px] ml-2'>{env.comment}</span>}
                  </div>
                ))}
                
                <div className='text-foreground/80 font-medium text-xs pt-2'># Supabase (required)</div>
                {setupSteps[1].envExample?.supabase.map((env, i) => (
                  <div key={i} className='flex items-start gap-2'>
                    <span className='text-purple-600 dark:text-purple-400'>{env.key}</span>
                    <span className='text-muted-foreground'>=</span>
                    <span className='text-amber-600 dark:text-yellow-400'>{env.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Supabase setup reminder */}
            <div className='mt-3 p-2.5 bg-amber-500/10 border border-amber-500/20 rounded-lg text-[10px] text-amber-700 dark:text-amber-300 flex items-start gap-2'>
              <div className='text-[10px] space-y-1 text-yellow-800 dark:text-amber-200'>
                <div className='font-semibold flex items-center gap-2'>
                  <span className='w-1.5 h-1.5 rounded-full bg-yellow-500 dark:bg-amber-400 animate-pulse'></span>
                  ⚠️ Get your Supabase credentials:
                </div>
                <div className='ml-4 text-yellow-700 dark:text-amber-300'>
                  Visit supabase.com to create a project
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 2 && (
          <div className='space-y-4'>
            {setupSteps[2].commands.map((cmd, index) => (
              <div key={index} className='space-y-1.5'>
                <div className='text-[10px] text-muted-foreground'>{cmd.label}</div>
                <div
                  onClick={() => copyToClipboard(cmd.command)}
                  className='group relative flex items-center gap-2 px-3 py-2 bg-muted/50 hover:bg-muted/70 rounded-lg border border-border cursor-pointer transition-all'
                >
                  <span className='text-emerald-600 dark:text-emerald-400 font-mono text-xs'>$</span>
                  <TextScramble className='flex-1 font-mono text-xs text-foreground'>{cmd.command}</TextScramble>
                  <div className='opacity-0 group-hover:opacity-100 transition-opacity'>
                    {copiedCommand === cmd.command ? (
                      <Check className='w-4 h-4 text-emerald-500' />
                    ) : (
                      <Copy className='w-4 h-4 text-muted-foreground' />
                    )}
                  </div>
                </div>
                {cmd.output && (
                  <div className='ml-4 pl-3 border-l-2 border-muted-foreground/20 space-y-1'>
                    {cmd.output.map((line, i) => (
                      <div key={i} className={`text-[10px] ${
                        line.includes('✓') ? 'text-emerald-600 dark:text-emerald-400' :
                        line.includes('▲') ? 'text-blue-600 dark:text-blue-400 font-medium' :
                        'text-muted-foreground'
                      }`}>
                        {line}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <div className='mt-4 p-3 bg-gradient-to-r from-emerald-500/10 to-blue-500/10 rounded-lg border border-emerald-500/20'>
              <div className='text-xs font-medium text-foreground mb-2'>🎉 You're all set!</div>
              <div className='text-[11px] text-muted-foreground'>
                Your Supabetter app is now running. Open your browser and start building!
              </div>
            </div>
          </div>
        )}
      </div>

    </div>
  )
}
