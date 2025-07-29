import { Resend } from "resend";
import type { H3Event } from "h3";

export default defineEventHandler(async (event: H3Event) => {
  const config = useRuntimeConfig();
  const resend = new Resend("re_E1ikB1Xg_DKoo7d2RNo3zByTgPRgJNuSB");

  try {
    const body = await readBody(event);
    const { email, subject, message, phone, fullname } = body;

    return await resend.emails.send({
      from: "onboarding@resend.dev",
      to: ["ali_aslaniii10@yahoo.com"],
      subject: subject || "New message",
      html: `
        <p><b>Name:</b> ${fullname}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Message:</b> ${message}</p>
      `
    });
  } catch (error) {
    return { error };
  }
});
