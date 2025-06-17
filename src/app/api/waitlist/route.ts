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

    // Create email content
    const emailContent = `
New Waitlist Signup - Executa AI

Name: ${name}
Email: ${email}
Company: ${company || 'Not provided'}

Signed up at: ${new Date().toLocaleString()}

This person has joined the Executa AI waitlist and is interested in early access to your AI assistant platform.
    `.trim();

    // For development/testing without email setup
    if (process.env.NODE_ENV === 'development' && !process.env.EMAIL_USER) {
      console.log('--- WAITLIST SIGNUP (Development Mode) ---');
      console.log(emailContent);
      console.log('--- END ---');
      
      return NextResponse.json({ 
        success: true, 
        message: 'Waitlist signup successful (development mode)' 
      });
    }

    // Send email to info@executasolutions.com
    const transporter = createTransporter();
    
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: 'info@executasolutions.com',
      subject: `New Waitlist Signup: ${name}`,
      text: emailContent,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #6366f1; padding-bottom: 10px;">
            New Waitlist Signup - Executa AI
          </h2>
          <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>Company:</strong> ${company || 'Not provided'}</p>
            <p><strong>Signed up at:</strong> ${new Date().toLocaleString()}</p>
          </div>
          <p style="color: #666;">
            This person has joined the Executa AI waitlist and is interested in early access to your AI assistant platform.
          </p>
        </div>
      `,
    });

    // Optionally, send a confirmation email to the user
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Welcome to the Executa AI Waitlist!',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #6366f1;">Welcome to Executa AI!</h2>
          <p>Hi ${name},</p>
          <p>Thank you for joining our waitlist! You're now part of an exclusive group that will get early access to the future of AI assistants.</p>
          
          <div style="background: #f0f9ff; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #0369a1; margin-top: 0;">What's next?</h3>
            <ul style="color: #374151;">
              <li>We'll notify you first when Executa launches</li>
              <li>You'll get exclusive access to beta features</li>
              <li>Priority customer support</li>
              <li>Special launch pricing</li>
            </ul>
          </div>
          
          <p>If you have any questions, feel free to reply to this email or contact us at <a href="mailto:info@executasolutions.com">info@executasolutions.com</a>.</p>
          
          <p>Best regards,<br>The Executa Team</p>
        </div>
      `,
    });

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