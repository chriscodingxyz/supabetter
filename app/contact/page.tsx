import { ContactForm } from '@/components/forms/ContactForm'
import { MetallicText } from '@/components/typography/MetallicText'

export default function ContactPage () {
  return (
    <div>
      <MetallicText>Contact</MetallicText>

      <ContactForm className='container max-w-[420px] ' />
    </div>
  )
}
