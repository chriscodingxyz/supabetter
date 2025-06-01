// import * as React from 'react'

// type EmailTemplateProps = {
//   firstName: string
//   message: string
// }

// export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
//   firstName,
//   message
// }) => (
//   <div>
//     <h1>Welcome, {firstName}!</h1>
//     <p>{message}</p>
//   </div>
// )

import * as React from 'react'
import { Button, Heading, Html, Body, Head } from '@react-email/components'

type EmailTemplateProps = {
  name: string
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name
}) => (
  <Html>
    <Head>
      <Heading>Welcome, {name}!</Heading>
    </Head>
    <Body>
      <p>Thank you for signing up to our service.</p>
      <p>Best regards, The SupaBetter Team</p>
      <p>SupaBetter</p>
      <Button href='https://supabetter.com'>Visit SupaBetter</Button>
    </Body>
  </Html>
)
