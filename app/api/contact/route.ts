import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message, website } = body;

    // Honeypot check — bots fill this in, real users don't
    if (website) {
      return NextResponse.json({ success: true }); // silently discard
    }

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    await resend.emails.send({
      from: "Cliqology Contact <scott@mail.cliqology.com>",
      to: [process.env.CONTACT_EMAIL as string],
      replyTo: email,
      subject: `[Cliqology] ${subject}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px;">
          <h2 style="color: #18181b;">New message from Cliqology</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <hr style="border: 1px solid #e4e4e7; margin: 16px 0;" />
          <p style="white-space: pre-wrap;">${message}</p>
        </div>
      `,
    });

    await resend.emails.send({
      from: "Scott Hoffman <scott@mail.cliqology.com>",
      to: [email],
      replyTo: "scott@cliqology.com",
      subject: "Got your message, talk soon",
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; background-color: #F5F5F0;">
          <!-- Header bar -->
          <div style="background-color: #005778; padding: 28px 40px; border-radius: 8px 8px 0 0;">
            <span style="font-size: 22px; font-weight: 700; letter-spacing: -0.5px;">
              <span style="color: #005778; background-color: #F5F5F0; padding: 2px 6px; border-radius: 3px; margin-right: 2px;">Cliq</span><span style="color: #008E97; font-weight: 700;">ology</span>
            </span>
          </div>

          <!-- Body -->
          <div style="background-color: #ffffff; padding: 40px;">
            <p style="font-size: 16px; color: #005778; line-height: 1.6; margin: 0 0 16px;">
              Hi ${name},
            </p>
            <p style="font-size: 16px; color: #3f3f46; line-height: 1.6; margin: 0 0 16px;">
              Thanks for reaching out — I got your message and I appreciate you taking the time to write.
            </p>
            <p style="font-size: 16px; color: #3f3f46; line-height: 1.6; margin: 0 0 32px;">
              I'll get back to you within 48 hours. If something is time-sensitive, feel free to reply to this email directly.
            </p>

            <!-- Divider -->
            <hr style="border: none; border-top: 2px solid #F5F5F0; margin: 0 0 24px;" />

            <p style="font-size: 16px; color: #3f3f46; line-height: 1.6; margin: 0 0 4px;">
              Talk soon,
            </p>
            <p style="font-size: 16px; font-weight: 700; color: #005778; margin: 0 0 2px;">Scott Hoffman</p>
            <p style="font-size: 14px; color: #008E97; margin: 0 0 32px;">Cliqology.com</p>

            <!-- CTA -->
            <a href="https://www.cliqology.com" style="display: inline-block; background-color: #FC4C02; color: #ffffff; font-size: 14px; font-weight: 600; text-decoration: none; padding: 12px 24px; border-radius: 6px;">
              Explore Cliqology →
            </a>
          </div>

          <!-- Footer -->
          <div style="padding: 20px 40px; border-radius: 0 0 8px 8px;">
            <p style="font-size: 12px; color: #71717a; line-height: 1.6; margin: 0;">
              You're receiving this because you submitted the contact form at Cliqology.com.
            </p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email send error:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again." },
      { status: 500 }
    );
  }
}
