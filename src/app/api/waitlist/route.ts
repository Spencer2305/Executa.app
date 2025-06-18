import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Create transporter - you'll need to configure this with your email service
const createTransporter = () => {
  // For Gmail (you'll need to set up App Password)
  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER, // Your Gmail address
      pass: process.env.EMAIL_PASS, // Your Gmail App Password
    },
  });

  // Alternative: For other SMTP services like SendGrid, Mailgun, etc.
  // return nodemailer.createTransport({
  //   host: process.env.SMTP_HOST,
  //   port: 587,
  //   secure: false,
  //   auth: {
  //     user: process.env.SMTP_USER,
  //     pass: process.env.SMTP_PASS,
  //   },
  // });
};

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, company } = body;

    // Validate required fields
    if (!name || !email) {
      return NextResponse.json(
        { error: 'Name and email are required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Create email content for logging
    const emailContent = `
New Waitlist Signup - Executa AI

Name: ${name}
Email: ${email}
Company: ${company || 'Not provided'}

Signed up at: ${new Date().toLocaleString()}

This person has joined the Executa AI waitlist and is interested in early access to your AI assistant platform.
    `.trim();

    // Log the signup (for development, this will be the only action)
    console.log('--- WAITLIST SIGNUP ---');
    console.log(emailContent);
    console.log('--- END ---');

    // TODO: When ready for production, uncomment the email sending code below
    // and set up EMAIL_USER and EMAIL_PASS environment variables
    
    /*
    if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
      const transporter = createTransporter();
      
      // Send notification email
      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: 'info@executasolutions.com',
        subject: `New Waitlist Signup: ${name}`,
        text: emailContent,
      });

      // Send confirmation email to user
      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: email,
        subject: 'Welcome to the Executa AI Waitlist!',
        html: `<p>Hi ${name},</p><p>Thank you for joining our waitlist!</p>`,
      });
    }
    */

    return NextResponse.json({ 
      success: true, 
      message: 'Waitlist signup successful!' 
    });

  } catch (error) {
    console.error('Waitlist signup error:', error);
    return NextResponse.json(
      { error: 'Failed to process waitlist signup' },
      { status: 500 }
    );
  }
} 