# Email Setup for Waitlist

## Environment Variables Required

Create a `.env.local` file in the root directory with the following variables:

### Option 1: Gmail (Recommended for development)

```env
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
NODE_ENV=development
```

**Gmail Setup Steps:**
1. Go to your Google Account settings
2. Enable 2-factor authentication
3. Generate an App Password:
   - Go to Security → App passwords
   - Select "Mail" and generate a password
   - Use this password as `EMAIL_PASS`

### Option 2: SendGrid (Recommended for production)

```env
SMTP_HOST=smtp.sendgrid.net
SMTP_USER=apikey
SMTP_PASS=your-sendgrid-api-key
NODE_ENV=production
```

### Option 3: Other SMTP Services

```env
SMTP_HOST=your-smtp-host
SMTP_USER=your-smtp-username
SMTP_PASS=your-smtp-password
NODE_ENV=production
```

## Development Mode

If you don't set up email credentials, the app will work in development mode and log the email content to the console instead of sending actual emails.

## How It Works

1. User fills out the waitlist form at `/waitlist`
2. Form data is sent to `/api/waitlist`
3. Two emails are sent:
   - Notification email to `info@executasolutions.com` with the signup details
   - Welcome email to the user confirming their waitlist signup
4. User is redirected to `/thank-you` page

## Testing

To test the email functionality:
1. Set up your environment variables
2. Navigate to `/waitlist`
3. Fill out the form
4. Check both email addresses for the emails 