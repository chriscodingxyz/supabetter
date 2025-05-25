import SignOutButton from '@/components/SignOutButton'
import { MetallicText } from '@/components/typography/MetallicText'

export default function Home () {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen p-8 relative'>
      <div className='flex flex-col items-center gap-8 mb-8'>
        <div className='flex gap-4'>
          <div className='text-7xl md:text-8xl font-extrabold tracking-tighter w-screen text-left container max-w-5xl'>
            <div>F**CK</div>
            <div>THE</div>
            <div>SETUP</div>
          </div>
        </div>

        <div className='flex items-center gap-4'>
          <MetallicText
            theme='rainbow'
            className='text-7xl md:text-8xl font-extrabold tracking-tighter text-right w-screen container max-w-5xl'
          >
            <div>START</div>
            <div>THE</div>
            <div>BUILD</div>
          </MetallicText>
          <SignOutButton>Sign Out</SignOutButton>
        </div>
      </div>
    </div>
  )
}
