import { Resend } from 'resend'
import type { H3Event } from 'h3'

// Create a new instance of the Resend client using the private API key from environment variables
const resend = new Resend(process.env.NUXT_PRIVATE_RESEND_API_KEY)

// Define an API event handler to handle incoming requests
export default defineEventHandler(async (event: H3Event) => {
  try {
    // Read the body content sent with the request
    const body = await readBody(event)
    const { email, subject, message, phone, fullname } = body

    // Use the Resend client to send an email
    return await resend.emails.send({
      from: 'HR Folio <contact@hrcd.fr>',     // Email sender
      to: ['ali_aslaniii10@yahoo.com'],        // Email recipient(s)
      subject: 'New message from HR Folio',    // Email subject
      html: `
      <p>A new message has been sent via the HR Folio contact form.</p>
      <p>Here are the details of the message:</p>
      <ul>
        <li>Name: ${fullname}</li>
        <li>Email: ${email}</li>
        <li>Phone: ${phone}</li>
        <li>Subject: ${subject}</li>
        <li>Message: ${message}</li>
      </ul>
      `,
    })
  }
  catch (error) {
    // Return the error object if sending email fails
    return { error }
  }
})
