'use client'

import React, { useState, useEffect } from 'react'
import { Supabase, Nextjs } from '@/components/icons/svg/TechStack'

interface SessionStatsProps {
  createdAt: string
  expiresAt: string
}

const calculateTimeLeft = (expiresAt: string) => {
  const difference = +new Date(expiresAt) - +new Date()
  let timeLeft = {}

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60)
    }
  }
  return timeLeft
}

const formatDateTime = (dateString: string) => {
  const date = new Date(dateString)
  return {
    date: date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    }),
    time: date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    })
  }
}

const SessionStats: React.FC<SessionStatsProps> = ({
  createdAt,
  expiresAt
}) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(expiresAt))

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft(expiresAt))
    }, 1000)

    return () => clearTimeout(timer)
  })

  const startTime = formatDateTime(createdAt)
  const isExpired = Object.keys(timeLeft).length === 0

  return (
    <div className='w-full'>
      {/* Header */}
      <div className='text-center mb-4'>
        <h2 className='font-silkscreen text-lg text-destructive mb-2 tracking-wider'>
          SESSION_STATUS
        </h2>
      </div>

      {/* Session Info Grid */}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mb-6'>
        {/* Session Started */}
        <div>
          <div className='flex items-center gap-2 mb-3'>
            <div className='w-2 h-2 bg-chart-4 rounded-full animate-pulse'></div>
            <span className='font-silkscreen text-chart-4 text-xs tracking-wider'>
              SESSION_ACTIVE
            </span>
          </div>
          <div className='pl-4'>
            <p className='text-muted-foreground text-xs mb-1'>Started on</p>
            <div className='font-mono text-foreground text-sm'>
              <span>{startTime.date}</span>
              <span className='text-destructive mx-1'>@</span>
              <span>{startTime.time}</span>
            </div>
          </div>
        </div>

        {/* Countdown Status */}
        <div>
          <div className='flex items-center gap-2 mb-3'>
            <div
              className={`w-2 h-2 rounded-full ${
                isExpired ? 'bg-destructive' : 'bg-destructive/80'
              } ${!isExpired ? 'animate-pulse' : ''}`}
            ></div>
            <span className='font-silkscreen text-destructive text-xs tracking-wider'>
              {isExpired ? 'SESSION_EXPIRED' : 'EXPIRES_IN'}
            </span>
          </div>

          {isExpired ? (
            <div className='pl-4'>
              <span className='font-silkscreen text-destructive text-sm tracking-wider animate-pulse'>
                EXPIRED
              </span>
            </div>
          ) : (
            <div className='pl-4 grid grid-cols-4 gap-3'>
              {Object.entries(timeLeft).map(([unit, value]) => (
                <div key={unit} className='text-center'>
                  <div className='bg-destructive/10 rounded p-2 mb-1'>
                    <div className='font-silkscreen text-lg text-destructive leading-none'>
                      {/* {String(value).padStart(2, '0')} */}FUCK THIS FUCKEN
                      ERROR FFFSA
                    </div>
                  </div>
                  <div className='font-mono text-[10px] text-muted-foreground uppercase tracking-wider'>
                    {unit.slice(0, 3)}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Tech Stack */}
      <div className='flex justify-center items-center gap-6 text-xs'>
        <div className='flex items-center gap-2'>
          <span className='text-muted-foreground'>Better-Auth</span>
        </div>
        <div className='flex items-center gap-2'>
          <Supabase className='w-4 h-4' />
          <span className='text-muted-foreground'>Supabase</span>
        </div>
        <div className='flex items-center gap-2'>
          <Nextjs className='w-4 h-4' />
          <span className='text-muted-foreground'>Next.js</span>
        </div>
      </div>
    </div>
  )
}

export default SessionStats
