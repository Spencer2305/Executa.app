# Mailchimp Integration Setup

## Required Environment Variables

Add these to your Netlify environment variables:

### 1. MAILCHIMP_API_KEY
- Go to https://mailchimp.com/
- Login to your account
- Go to Account → Extras → API keys
- Create a new API key
- Copy the key (starts with something like "abc123def456-us21")

### 2. MAILCHIMP_SERVER_PREFIX
- This is the part after the dash in your API key
- Example: if your API key is "abc123def456-us21", then server prefix is "us21"

### 3. MAILCHIMP_LIST_ID
- Go to your Mailchimp dashboard
- Click on "Audience" → "All contacts"
- Click "Settings" → "Audience name and defaults"
- Copy the "Audience ID" (looks like "abc123def4")

## How to Add to Netlify

1. Go to your Netlify dashboard
2. Select your site
3. Go to "Site settings" → "Environment variables"
4. Add these 3 variables:
   - `MAILCHIMP_API_KEY` = your_api_key_here
   - `MAILCHIMP_SERVER_PREFIX` = your_server_prefix_here (e.g., "us21")
   - `MAILCHIMP_LIST_ID` = your_list_id_here

5. Redeploy your site

## What Happens Now

When someone signs up for the waitlist:
- ✅ They get added to your Mailchimp list automatically
- ✅ Their name is split into first/last name
- ✅ Company information is stored in Mailchimp
- ✅ They get tagged as "Waitlist" and "Executa-AI"
- ✅ If they already exist, no duplicate is created

## Testing

You can test locally by adding these variables to your `.env.local` file:
```
MAILCHIMP_API_KEY=your_api_key_here
MAILCHIMP_SERVER_PREFIX=us21
MAILCHIMP_LIST_ID=your_list_id_here
``` 