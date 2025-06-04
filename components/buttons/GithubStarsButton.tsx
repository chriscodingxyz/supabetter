'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ShadowButton } from '@/components/buttons/ShadowButton';
import { AnimatedNumber } from '@/components/ui/animated-number';
import { Star, Github } from 'lucide-react';

const MIN_STARS = 500;
const MAX_STARS = 2500;

export function GithubStarsButton() {
  const [starCount, setStarCount] = useState(MIN_STARS);

  useEffect(() => {
    // Initial random number
    setStarCount(Math.floor(Math.random() * (MAX_STARS - MIN_STARS + 1)) + MIN_STARS);

    // Optional: Update periodically to showcase animation
    const intervalId = setInterval(() => {
      setStarCount(Math.floor(Math.random() * (MAX_STARS - MIN_STARS + 1)) + MIN_STARS);
    }, 7000); // Update every 7 seconds

    return () => clearInterval(intervalId); // Cleanup interval on unmount
  }, []);

  return (
    <Link href='https://github.com/chriscodingxyz/supabetter' target='_blank' rel='noopener noreferrer'>
      <ShadowButton variant='secondary' size='sm' className='w-full sm:w-auto text-sm flex items-center gap-1.5'>
        <Star color='gold' fill='gold' className='w-4 h-4' />
        <AnimatedNumber value={starCount} />
        <span className='hidden sm:inline'>Stars on</span>
        <Github className='w-4 h-4' />
      </ShadowButton>
    </Link>
  );
}
