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

      // Auto reply mail
      const userMail = await resend.emails.send({
        from: "Cotechies <onboarding@resend.dev>",
        to: email,
        subject: "Thanks for contacting us ",
        html: `
  <div style="font-family: Arial, sans-serif; background-color: #f4f6f9; padding: 20px;">
    
    <div style="max-width: 600px; margin: auto; background: #ffffff; border-radius: 10px; overflow: hidden; box-shadow: 0 4px 10px rgba(0,0,0,0.1);">
      
      <!-- Header -->
      <div style="background: linear-gradient(135deg, #0F2027, #203A43, #2C5364); padding: 20px; text-align: center; color: white;">
        <h2 style="margin: 0;">Cotechies</h2>
        <p style="margin: 5px 0 0;">We build smart solutions 💡</p>
      </div>

      <!-- Body -->
      <div style="padding: 25px; color: #333;">
        <h3 style="margin-top: 0;">Hi ${name}, 👋</h3>
        
        <p style="line-height: 1.6;">
          Thanks for contacting us! We've received your message and our team will get back to you shortly.
        </p>

        <div style="margin: 20px 0; padding: 15px; background: #f1f5f9; border-left: 4px solid #2C5364; border-radius: 5px;">
          <p style="margin: 0;">We appreciate your interest in <strong>Cotechies</strong>.</p>
        </div>

        <p style="line-height: 1.6;">
          If your request is urgent, feel free to reply to this email anytime.
        </p>

        <p style="margin-top: 20px;">
          Best Regards,<br/>
          <strong>Team Cotechies </strong>
        </p>
      </div>

      <!-- Footer -->
      <div style="background: #f4f6f9; padding: 15px; text-align: center; font-size: 12px; color: #777;">
        <p style="margin: 0;">© 2026 Cotechies. All rights reserved.</p>
      </div>

    </div>
  </div>
  `,
      });

      return Response.json({ success: true });
    } catch (error) {
      console.error("MAIL ERROR:", error);
      return Response.json({ success: false, error: error.message });
    }
  } catch (error) {
    return Response.json({ success: false, error: error.message });
  }
}
