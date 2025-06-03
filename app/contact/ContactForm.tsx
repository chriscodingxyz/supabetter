'use client'

import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { sendEmailAction } from "@/actions/email-action"
import { toast } from "sonner"
import { cn, objectToFormData } from "@/lib/utils"
import { useForm } from "react-hook-form"
import { useState } from "react"
import logger from "@/utils/logger"

type FormValues = {
  name: string
  senderEmail: string
  message: string
}

export default function ContactForm({className}: {className?: string}) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  
  const { 
    register, 
    handleSubmit, 
    reset,
    formState: { errors } 
  } = useForm<FormValues>()
  
  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true)
    
    try {
      const formData = objectToFormData(data)


      const {error, success} = await sendEmailAction(formData)
      
      if (error) {
        logger.error('Error sending email:', error)
        toast.error('Something went wrong 1')
      } else {
        toast.success('Email sent successfully!')
        reset() // Only reset on success
      }
    } catch (error) {
      logger.error('Submission error:', error)
      toast.error('Something went wrong 2')
    } finally {
      setIsSubmitting(false)
    }
  }
  
  return (
    <form 
      className={cn("flex flex-col gap-2", className)}
      onSubmit={handleSubmit(onSubmit)}
    >
      <Input 
        placeholder="Name" 
        {...register('name', { required: 'Name is required' })}
      />
      
      <Input 
        placeholder="Email" 
        type="email"
        {...register('senderEmail', { 
          required: 'Email is required',
          pattern: {
            value: /\S+@\S+\.\S+/,
            message: 'Please enter a valid email'
          }
        })}
      />
      
      <Textarea 
        placeholder="Message" 
        {...register('message', { required: 'Message is required' })}
      />
      
      <Button 
        type="submit"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Sending..." : "Submit"}
      </Button>
    </form>
  )
}



// // This one is pretty good, basic handleSubmit with all the logic here

// 'use client'

// import { Input } from "@/components/ui/input"
// import { Textarea } from "@/components/ui/textarea"
// import { Button } from "@/components/ui/button"
// import { sendEmailAction } from "@/actions/email-action"
// import { toast } from "sonner"
// import { cn } from "@/lib/utils"
// import { useRef } from "react"
// import logger from "@/utils/logger"

// export default function ContactForm({className}: {className?: string}) {
//   const formRef = useRef<HTMLFormElement>(null)

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault()
//     // Get form data
//     const formData = new FormData(e.currentTarget)
//     // Call server action
//     const {success, error} = await sendEmailAction(formData)

//     // If error, we reach error:
//     if (error){
//       logger.error('Error sending email via email-action:', error)
//       toast.error('Something went wrong')
//       return
//     }
//     // If no error, we reach success:
//     logger.success('Email sent successfully via email-action:', success)
//     toast.success('Email sent successfully!')
//     formRef.current?.reset()
//   }

//   return (
//     <form 
//       ref={formRef} 
//       className={cn("flex flex-col gap-2", className)}
//       onSubmit={handleSubmit}
//     >
//       <Input placeholder="Name" name="name" required />
//       <Input placeholder="Email" name="senderEmail" required type="email" />
//       <Textarea placeholder="Message" name="message" required />
//       <Button 
//         type="submit"
//       >
//         Submit
//       </Button>
//     </form>
//   )
// }











// 'use client'

// import { Input } from "@/components/ui/input"
// import { Textarea } from "@/components/ui/textarea"
// import { Button } from "@/components/ui/button"
// import { sendEmailAction } from "@/actions/email-action"
// import { toast } from "sonner"
// import { cn } from "@/lib/utils"
// import { useRef } from "react"
// import logger from "@/utils/logger"

// export default function ContactForm({className}: {className?: string}) {
//   const formRef = useRef<HTMLFormElement>(null)

//   return (
//     <form 
//       ref={formRef} 
//       className={cn("flex flex-col gap-2", className)}
//       // Add onSubmit handler to prevent default form behavior
//       onSubmit={(e) => {
//         // This ensures Next.js's form handling won't reset the form
//         // but our formAction will still run because of the button
//         e.preventDefault()
//       }}
//     >
//       <Input placeholder="Name" name="name" required />
//       <Input placeholder="Email" name="email" required type="email" />
//       <Textarea placeholder="Message" name="message" required />
//       <Button 
//         type="button" // Changed from implicit "submit" to "button"
//         onClick={async (e) => {
//           // Get form data manually since we're no longer using form submission
//           const formData = new FormData(formRef.current!)
          
//           // Call the server action manually
//           const {success, error} = await sendEmailAction(formData)

//           if (error){
//             logger.error('Error sending email via email-action:', error)
//             toast.error('Something went wrong')
//             return
//           }

//           logger.success('Email sent successfully via email-action:', success)
//           if (success){
//             toast.success('Email sent successfully!')
//             formRef.current?.reset()
//           } 
//         }}
//       >
//         Submit
//       </Button>
//     </form>
//   )
// }




// 'use client'

// import { Input } from "@/components/ui/input"
// import { Textarea } from "@/components/ui/textarea"
// import { Button } from "@/components/ui/button"
// import { sendEmailAction } from "@/actions/email-action"
// import { toast } from "sonner"
// import { cn } from "@/lib/utils"
// import { useRef } from "react"
// import logger from "@/utils/logger"

// export default function ContactForm({className}: {className?: string}) {
//   const formRef = useRef<HTMLFormElement>(null)


//   return (
//     <form ref={formRef} className={cn("flex flex-col gap-2", className)}>
//       <Input placeholder="Name" name="name" required />
//       <Input placeholder="Email" name="email" required type="email" />
//       <Textarea placeholder="Message" name="message" required />
//       <Button formAction={async (formData) => {
//         const {success, error} = await sendEmailAction(formData)

//         if (error){
//           logger.error('Error sending email via email-action:', error)
//           toast.error('Something went wrong')
//           return
//         }

//         logger.success('Email sent successfully via email-action:', success)
//         if (success){
//           toast.success('Email sent successfully!')
//           formRef.current?.reset()
//         } 
//       }}>Submit</Button>
//     </form>
//   )
// }








// 'use client'

// // import { Form } from "@/components/ui/form"
// import { Input } from "@/components/ui/input"
// import { Textarea } from "@/components/ui/textarea"
// import { Button } from "@/components/ui/button"
// import { sendEmailAction } from "@/actions/email-action"
// import { toast } from "sonner"
// import { cn } from "@/lib/utils"

// export default function ContactForm({className}: {className?: string}) {
//   return (
//     // <Form>
//     <form className={cn("flex flex-col gap-2", className)}>
//       <Input placeholder="Name" name="name" required />
//       <Input placeholder="Email" name="email" required type="email" />
//       <Textarea placeholder="Message" name="message" required />
//       <Button formAction={async (formData) => {
//         const {success, error} = await sendEmailAction(formData)

//         if (error) toast.error('Something went wrong')

//         if (success) toast.success('Email sent successfully!') 
//       }}>Submit</Button>
//     </form>
//     // </Form>
//   )
// }