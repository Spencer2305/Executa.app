import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import mailchimp from '@mailchimp/mailchimp_marketing';

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

// Configure Mailchimp
const configureMailchimp = () => {
  if (process.env.MAILCHIMP_API_KEY && process.env.MAILCHIMP_SERVER_PREFIX) {
    mailchimp.setConfig({
      apiKey: process.env.MAILCHIMP_API_KEY,
      server: process.env.MAILCHIMP_SERVER_PREFIX, // e.g., "us21"
    });
    return true;
  }
  return false;
};

// Add contact to Mailchimp list
const addToMailchimp = async (email: string, firstName: string, lastName: string = '', company: string = '') => {
  try {
    const listId = process.env.MAILCHIMP_LIST_ID;
    if (!listId) {
      console.log('❌ Mailchimp list ID not configured');
      return false;
    }

    console.log('🔍 Attempting to add to Mailchimp:', {
      email,
      firstName,
      lastName,
      company,
      listId: listId.substring(0, 5) + '...' // Show partial list ID for debugging
    });

    const memberData = {
      email_address: email,
      status: 'subscribed' as const,
      merge_fields: {
        FNAME: firstName,
        LNAME: lastName,
        COMPANY: company,
      },
      tags: ['Waitlist', 'Executa-AI']
    };

    console.log('📤 Sending to Mailchimp:', memberData);

    const response = await mailchimp.lists.addListMember(listId, memberData);

    console.log('✅ Successfully added to Mailchimp:', email);
    console.log('📊 Mailchimp response status:', response);
    return true;
  } catch (error: any) {
    console.error('❌ Mailchimp error details:', {
      status: error.status,
      title: error.response?.body?.title,
      detail: error.response?.body?.detail,
      errors: error.response?.body?.errors,
      message: error.message,
      fullError: error
    });
    
    // If contact already exists, that's okay
    if (error.status === 400 && error.response?.body?.title === 'Member Exists') {
      console.log('✅ Contact already exists in Mailchimp - that\'s OK');
      return true;
    }
    
    // Log specific error types
    if (error.status === 400) {
      console.error('🚨 Bad Request - Check your List ID and API key permissions');
    } else if (error.status === 401) {
      console.error('🚨 Unauthorized - Check your API key');
    } else if (error.status === 404) {
      console.error('🚨 Not Found - Check your List ID');
    }
    
    return false;
  }
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

    // Add to Mailchimp if configured
    console.log('Checking Mailchimp configuration...');
    console.log('MAILCHIMP_API_KEY exists:', !!process.env.MAILCHIMP_API_KEY);
    console.log('MAILCHIMP_SERVER_PREFIX exists:', !!process.env.MAILCHIMP_SERVER_PREFIX);
    console.log('MAILCHIMP_LIST_ID exists:', !!process.env.MAILCHIMP_LIST_ID);
    
    if (configureMailchimp()) {
      console.log('Adding to Mailchimp...');
      const [firstName, ...lastNameParts] = name.split(' ');
      const lastName = lastNameParts.join(' ');
      
      const mailchimpSuccess = await addToMailchimp(email, firstName, lastName, company);
      if (mailchimpSuccess) {
        console.log('✅ Successfully added to Mailchimp');
      } else {
        console.log('❌ Failed to add to Mailchimp');
      }
    } else {
      console.log('Mailchimp not configured - skipping');
      console.log('Missing variables:', {
        api_key: !process.env.MAILCHIMP_API_KEY,
        server_prefix: !process.env.MAILCHIMP_SERVER_PREFIX,
        list_id: !process.env.MAILCHIMP_LIST_ID
      });
    }

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

// GET endpoint to check configuration
export async function GET() {
  return NextResponse.json({
    message: 'Waitlist API is working',
    mailchimp_configured: configureMailchimp(),
    environment_variables: {
      MAILCHIMP_API_KEY: !!process.env.MAILCHIMP_API_KEY,
      MAILCHIMP_SERVER_PREFIX: !!process.env.MAILCHIMP_SERVER_PREFIX,
      MAILCHIMP_LIST_ID: !!process.env.MAILCHIMP_LIST_ID,
    }
  });
} 