'use client'

import { useState, useEffect, useRef } from 'react'

interface TicketDetails {
  date: string
  name: string
  company: string
  ticketType: string
}

interface HoloTicketProps {
  ticketImage: string
  holographicImage?: string
  ticketDetails?: TicketDetails
  width?: number
  height?: number
  showDebug?: boolean
}

export const HoloTicket = ({
  ticketImage,
  holographicImage = '/ticketholoexample.png',
  ticketDetails = {
    date: 'October 10 2025',
    name: 'Your Name',
    company: 'Your Company',
    ticketType: 'Early Bird'
  },
  width = 800,
  height = 280,
  showDebug = false
}: HoloTicketProps) => {
  const [mousePosition, setMousePosition] = useState<{ x: number; y: number }>({
    x: 50,
    y: 50
  })
  const [isHovering, setIsHovering] = useState<boolean>(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect()
      const x = ((e.clientX - rect.left) / rect.width) * 100
      const y = ((e.clientY - rect.top) / rect.height) * 100

      setMousePosition({ x, y })

      // Set CSS variables on the container
      container.style.setProperty('--mouse-x', x.toString())
      container.style.setProperty('--mouse-y', y.toString())
    }

    const handleMouseEnter = () => {
      setIsHovering(true)
    }

    const handleMouseLeave = () => {
      setIsHovering(false)
    }

    container.addEventListener('mousemove', handleMouseMove)
    container.addEventListener('mouseenter', handleMouseEnter)
    container.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      container.removeEventListener('mousemove', handleMouseMove)
      container.removeEventListener('mouseenter', handleMouseEnter)
      container.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  return (
    <div
      className='flex z-10 justify-center items-center m-0 select-none'
      style={{ perspective: '1500px' }}
    >
      {showDebug && (
        <div className='fixed top-4 left-4 z-50 p-2 text-white bg-black bg-opacity-50 rounded'>
          <label className='flex items-center space-x-2'>
            <input type='checkbox' className='form-checkbox' />
            <span>Debug Mode</span>
          </label>
          <div>
            X: {mousePosition.x.toFixed(2)}%, Y: {mousePosition.y.toFixed(2)}%
          </div>
          <div>Hovering: {isHovering ? 'Yes' : 'No'}</div>
        </div>
      )}

      <div
        ref={containerRef}
        className='overflow-hidden relative z-10 w-full rounded-xl border transition-transform duration-200 ease-out border-white/20'
        style={{
          width: `${width}px`,
          transformStyle: 'preserve-3d',
          perspective: '1500px',
          transform: isHovering
            ? `rotateY(calc((var(--mouse-x, 50) - 50) * 0.2deg)) rotateX(calc((50 - var(--mouse-y, 50)) * 0.2deg)) scale(1)`
            : 'none',
          isolation: 'isolate'
        }}
      >
        {/* Holographic overlay - only visible on hover */}
        <div
          className='z-10 transition-opacity duration-300 ease-in-out'
          style={{
            mixBlendMode: 'color-dodge',
            perspective: '1500px',
            opacity: isHovering ? 0.5 : 0
          }}
        >
          {/* Background image */}
          <div
            className='absolute inset-0 bg-center bg-cover'
            style={{
              backgroundImage: `url(${holographicImage})`,
              height: `${height}px`,
              width: '100%',
              position: 'absolute',
              transform: 'translateY(var(--z)) rotate3d(1, 0, 0, var(--deg))',
              opacity: isHovering ? 0.2 : 0
            }}
          />

          {/* Gradient overlay */}
          <div
            className='scale-150'
            style={{
              mixBlendMode: 'hue',
              background:
                'linear-gradient(135deg, rgb(255, 119, 115) 2%, rgb(255, 237, 95) 12.9661%, rgb(168, 255, 95) 23.5922%, rgb(131, 255, 247) 39.1029%, rgb(119, 221, 223) 48.545%, rgb(120, 148, 255) 59.1618%, rgb(209, 124, 242) 62.9954%, rgb(255, 119, 115) 76.7431%)',
              height: `${height}px`,
              width: '100%',
              position: 'absolute',
              transform: 'translateY(var(--z)) rotate3d(1, 0, 0, var(--deg))',
              opacity: isHovering ? 0.2 : 0
            }}
          />

          {/* Shine overlay */}
          <div
            style={{
              mixBlendMode: 'plus-lighter',
              background:
                'linear-gradient(315deg, rgb(19, 20, 21) 0%, rgb(143, 163, 163) 6.03181%, rgb(162, 163, 163) 9.74451%, rgb(20, 20, 20) 25.0721%, rgb(143, 163, 163) 33.5357%, rgb(164, 166, 166) 35.2988%, rgb(37, 37, 38) 41.503%, rgb(161, 161, 161) 52.393%, rgb(124, 125, 125) 61.1346%, rgb(19, 20, 21) 66.269%, rgb(166, 166, 166) 74.4633%, rgb(163, 163, 163) 79.8987%, rgb(19, 20, 21) 85.7299%, rgb(161, 161, 161) 89.8948%, rgb(19, 20, 21) 100%)',
              height: `${height}px`,
              width: '100%',
              position: 'absolute',
              transform: 'translateY(var(--z)) rotate3d(1, 0, 0, var(--deg))',
              opacity: isHovering ? 0.5 : 0
            }}
          />

          {/* Glow effect - follows mouse */}
          <div
            className='blur-xl'
            style={
              {
                mixBlendMode: 'overlay',
                background:
                  'radial-gradient(50% 50% at 50% 50%, rgb(255, 255, 255) 0%, rgba(255, 255, 255, 0.5) 43.6638%, rgba(255, 255, 255, 0.11) 80.5409%, rgba(255, 255, 255, 0) 100%)',
                '--walk-amount': '500px',
                '--walk-x': `calc((var(--mouse-x) - 50) * var(--walk-amount) / 100)`,
                '--walk-y': `calc((var(--mouse-y) - 50) * var(--walk-amount) / 100)`,
                transform: 'translate(var(--walk-x), var(--walk-y))',
                height: `${height}px`,
                width: '100%',
                position: 'absolute',
                opacity: isHovering ? 0.5 : 0
              } as React.CSSProperties
            }
          />
        </div>

        {/* Ticket image */}
        <div
          className='relative'
          style={{
            mixBlendMode: isHovering ? 'overlay' : 'normal',
            filter: isHovering ? 'contrast(1.05)' : 'none'
          }}
        >
          <img
            src={ticketImage}
            width={width}
            height={height}
            alt='Event Ticket'
            className='w-full'
          />
        </div>

        {/* Ticket details (optional) */}
        {ticketDetails && (
          <div className='absolute bottom-0 left-1/2 z-40 pb-4 pl-6 font-mono text-left text-white uppercase'>
            <div className='flex flex-col gap-2'>
              <p>📅 {ticketDetails.date}</p>
              <div>
                <p>{ticketDetails.name}</p>
                <p>{ticketDetails.company}</p>
              </div>
              <p className='font-black uppercase'>{ticketDetails.ticketType}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
