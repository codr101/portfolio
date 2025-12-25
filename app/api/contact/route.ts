import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    // Here you would integrate with an email service
    // Options:
    // 1. Resend (recommended for Next.js)
    // 2. SendGrid
    // 3. Nodemailer with SMTP
    // 4. EmailJS (client-side, but can also be used server-side)

    // For now, we'll use a simple approach with Resend
    // You'll need to install: npm install resend
    // And set RESEND_API_KEY in your .env.local

    // Example with Resend (uncomment and configure):
    /*
    const { Resend } = require('resend');
    const resend = new Resend(process.env.RESEND_API_KEY);
    
    await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: 'k.m.pro.new@gmail.com',
      replyTo: email,
      subject: `Portfolio Contact: ${subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    });
    */

    // For development/testing, we'll just log the email
    console.log("Contact form submission:", {
      name,
      email,
      subject,
      message,
    });

    // In production, replace the above console.log with actual email sending
    // For now, return success so the form works
    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing contact form:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}

