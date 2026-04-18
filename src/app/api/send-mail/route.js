import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const body = await req.json();

    const { name, email, phone, message } = body;

    try {
      //  Admin mail
      const adminMail = await resend.emails.send({
        from: "onboarding@resend.dev",
        to: "saravananvimal0608@gmail.com",
        reply_to: email,
        subject: "New Contact Form Message From Billing System",
        html: `
      <h2>New Contact Request</h2>
      <p><b>Name:</b> ${name}</p>
      <p><b>Email:</b> ${email}</p>
      <p><b>Phone:</b> ${phone}</p>
      <p><b>Message:</b> ${message}</p>
    `,
      });

      console.log("Admin Mail:", adminMail);

      // Auto reply
      const userMail = await resend.emails.send({
        from: "onboarding@resend.dev",
        to: email,
        subject: "Thanks for contacting us",
        html: `
      <p>Hi ${name},</p>
      <p>Thanks for contacting us. We received your message and will get back to you soon.</p>
      <p>Team Cotechies</p>
    `,
      });

      console.log("User Mail:", userMail);

      return Response.json({ success: true });
    } catch (error) {
      console.error("MAIL ERROR:", error);
      return Response.json({ success: false, error: error.message });
    }


  } catch (error) {
    return Response.json({ success: false, error: error.message });
  }
}
