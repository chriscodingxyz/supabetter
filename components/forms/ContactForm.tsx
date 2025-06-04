'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { ContactFormSchemaT, ContactFormSchemaZ } from '@/lib/types'
import { useFormSubmit } from '@/hooks/useFormSubmit'
import { sendContactEmailAction } from '@/actions/email-action'
import { Loader2 } from 'lucide-react'

export function ContactForm ({ className }: { className?: string }) {
  const form = useForm<ContactFormSchemaT>({
    resolver: zodResolver(ContactFormSchemaZ as any),
    defaultValues: {
      name: '',
      senderEmail: '',
      message: ''
    }
  })

  const { handleSubmit, isSubmitting } = useFormSubmit({
    serverAction: sendContactEmailAction,
    reset: form.reset,
    setError: form.setError
  })

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className='space-y-4'>
        <FormField
          control={form.control}
          name='name'
          render={({ field }) => (
            <FormItem>
              {/* <FormLabel>Name</FormLabel> */}
              <FormControl>
                <Input placeholder='Your name' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name='senderEmail'
          render={({ field }) => (
            <FormItem>
              {/* <FormLabel>Email</FormLabel> */}
              <FormControl>
                <Input type='email' placeholder='your@email.com' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name='message'
          render={({ field }) => (
            <FormItem>
              {/* <FormLabel>Message</FormLabel> */}
              <FormControl>
                <Textarea placeholder='Your message' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type='submit' disabled={isSubmitting}>
          {isSubmitting ? (
            <Loader2 className='mr-2 h-4 w-4 animate-spin' />
          ) : null}
          Submit
        </Button>
      </form>
    </Form>
  )
}
