import OpenAI from 'openai';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    // Check if API key is available
    if (!process.env.OPENAI_API_KEY) {
      console.error('OpenAI API key is not configured');
      return NextResponse.json(
        { error: 'OpenAI API key is not configured' },
        { status: 500 }
      );
    }

    // Initialize OpenAI client
    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });

    const { message } = await request.json();

    if (!message) {
      return NextResponse.json(
        { error: 'Message is required' },
        { status: 400 }
      );
    }

    // System prompt to make the AI act as Executa's assistant
    const systemPrompt = `You are an AI assistant for Executa, an AI platform that helps businesses create and deploy AI assistants in 60 seconds. 

Key features of Executa:
- 60-second deployment from upload to live assistant
- Integrates with 50+ software platforms (Gmail, HubSpot, Slack, Salesforce, Shopify, etc.)
- Supports 100+ file formats (PDF, DOC, TXT, etc.)
- Real-time analytics and insights
- Enterprise security and reliability
- Custom branding and deployment options
- No coding required - drag and drop interface

Be helpful, knowledgeable, and enthusiastic about Executa's capabilities. Keep responses concise but informative. If asked about pricing, mention we have Starter (Free), Professional ($29/month), and Enterprise (Custom) plans.`;

    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: systemPrompt
        },
        {
          role: "user",
          content: message
        }
      ],
      max_tokens: 300,
      temperature: 0.7,
    });

    const aiResponse = completion.choices[0]?.message?.content || "I'm sorry, I couldn't process that request.";

    return NextResponse.json({ 
      response: aiResponse 
    });

  } catch (error) {
    console.error('API Route Error:', error);
    
    // Check if it's an OpenAI API error
    if (error instanceof Error) {
      console.error('Error message:', error.message);
      console.error('Error stack:', error.stack);
    }
    
    return NextResponse.json(
      { 
        error: 'Failed to process your request. Please try again.',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}

// Add a GET route for testing
export async function GET() {
  return NextResponse.json({ 
    message: 'Chat API is working',
    hasApiKey: !!process.env.OPENAI_API_KEY
  });
} 