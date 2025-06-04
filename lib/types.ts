import { z } from "zod"

export const ContactFormSchemaZ = z.object({
  name: z.string().min(8, "Name must be at least 8 characters long"),
  senderEmail: z.string().email("Valid email is required"),
  message: z.string().min(8, "Message must be at least 8 characters long")
});

export type ContactFormSchemaT = z.infer<typeof ContactFormSchemaZ>;