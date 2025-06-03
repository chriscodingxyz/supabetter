import React from "react";
import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Container,
  Preview,
  Section,
  Text,
  Tailwind,
} from "@react-email/components";

export default function ContactFormTemplate({
  name,
  message,
  senderEmail,
}: {
  name: string;
  message: string;
  senderEmail: string;
}) {
  return (
    <Html>
      <Head />
      <Preview>Supabetter: Contact form message</Preview>
      <Tailwind>
        <Body className="bg-gray-100 text-black">
          <Container>
            <Section className="bg-white borderBlack my-10 px-10 py-4 rounded-md">
              <Heading className="leading-tight text-green-500">
                You received the following message from the contact form
              </Heading>
              <Text>From: {name}</Text>
              <Text>{message}</Text>
              <Hr />
              <Text>The sender's email is: {senderEmail}</Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
