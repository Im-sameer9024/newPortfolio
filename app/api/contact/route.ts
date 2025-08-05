import { NextResponse } from "next/server";
import sgMail from "@sendgrid/mail";

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    // Validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, message: "Please fill in all fields" },
        { status: 400 }
      );
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, message: "Please enter a valid email address" },
        { status: 400 }
      );
    }

    // Configure transporter
    sgMail.setApiKey('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');

    const msg = {
      to: "rskkhan89@gmail.com",
      from: "rskkhan89@gmail.com",
      subject: `New message from ${name} (${email})`,
      text: message,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
           <h2 style="color: #333;">New Contact Form Submission</h2>
           <p><strong>Name:</strong> ${name}</p>
           <p><strong>Email:</strong> ${email}</p>
           <p><strong>Message:</strong></p>
           <p style="white-space: pre-line; background: #f5f5f5; padding: 10px; border-radius: 5px;">${message}</p>
         </div>
       `,
    };

    await sgMail.send(msg);
    // const transporter = nodemailer.createTransport({
    //   host: process.env.MAIL_HOST,
    //   service: "gmail",
    //   port: Number(process.env.MAIL_PORT) || 465, // 587 for TLS, 465 for SSL
    //   secure: true, // true for 465, false for other ports
    //   auth: {
    //     user: process.env.MAIL_USER,
    //     pass: process.env.MAIL_PASS,
    //   },
    // });

    // Verify connection configuration
    // await transporter.verify();

    // Prepare email
    // const mailOptions = {
    //   from: `"${name}" <${process.env.MAIL_USER}>`,
    //   replyTo: email,
    //   to: process.env.MAIL_RECIPIENT, // Send to yourself
    //   subject: `New message from ${name} (${email})`,
    //   text: message,
    //   html: `
    //     <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
    //       <h2 style="color: #333;">New Contact Form Submission</h2>
    //       <p><strong>Name:</strong> ${name}</p>
    //       <p><strong>Email:</strong> ${email}</p>
    //       <p><strong>Message:</strong></p>
    //       <p style="white-space: pre-line; background: #f5f5f5; padding: 10px; border-radius: 5px;">${message}</p>
    //     </div>
    //   `,
    // };

    // Send email
    // await transporter.sendMail(mailOptions);
    console.log("mail send")

    return NextResponse.json(
      { success: true, message: "Message sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Email sending error:", error);
    return NextResponse.json(
      {
        success: false,
        message:
          error instanceof Error ? error.message : "Error sending message",
      },
      { status: 500 }
    );
  }
}
