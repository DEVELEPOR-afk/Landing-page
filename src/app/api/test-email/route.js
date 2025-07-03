import { NextResponse } from 'next/server';
import { sendEmailDirectly } from '@/lib/directEmailService';

export async function GET(request) {
  try {
    // Get recipient email from query parameter or use default test emails
    const { searchParams } = new URL(request.url);
    const email = searchParams.get('email') || 'zeeshanahmed.30.10.2004@gmail.com';
    
    console.log('Sending test email to:', email);
    
    // Send a test email directly to the specified email address
    const result = await sendEmailDirectly({
      from: 'Trading Mentorship <onboarding@resend.dev>',
      to: email,
      subject: 'Test Email from Trading Mentorship',
      text: `This is a test email sent at ${new Date().toISOString()} to verify email delivery.`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #f0f0f0; border-radius: 5px;">
          <h2 style="color: #333; text-align: center;">Test Email</h2>
          <p>Hello there,</p>
          <p>This is a test email to verify that our email delivery system is working correctly.</p>
          <p>If you're seeing this, it means the email was delivered successfully!</p>
          <p>Sent at: ${new Date().toISOString()}</p>
          <p>Best regards,<br>The Trading Mentorship Team</p>
        </div>
      `
    });
    
    return NextResponse.json({
      success: true,
      message: 'Test email sent',
      recipient: email,
      result: result
    });
  } catch (error) {
    console.error('Error sending test email:', error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}

// Handle POST requests to test sending to multiple recipients
export async function POST(request) {
  try {
    // Parse the request body
    const body = await request.json();
    const emails = body.emails || ['zeeshanahmed.30.10.2004@gmail.com', 'zero.ff069@gmail.com'];
    
    console.log('Sending test emails to multiple recipients:', emails);
    
    // Send a test email to multiple recipients
    const result = await sendEmailDirectly({
      from: 'Trading Mentorship <onboarding@resend.dev>',
      to: emails,
      subject: 'Test Email to Multiple Recipients',
      text: `This is a test email sent at ${new Date().toISOString()} to verify multiple recipient email delivery.`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #f0f0f0; border-radius: 5px;">
          <h2 style="color: #333; text-align: center;">Test Email to Multiple Recipients</h2>
          <p>Hello there,</p>
          <p>This is a test email to verify that our system can send emails to multiple recipients.</p>
          <p>If you're seeing this, it means the email was delivered successfully!</p>
          <p>Sent at: ${new Date().toISOString()}</p>
          <p>Best regards,<br>The Trading Mentorship Team</p>
        </div>
      `
    });
    
    return NextResponse.json({
      success: true,
      message: 'Test emails sent to multiple recipients',
      recipients: emails,
      result: result
    });
  } catch (error) {
    console.error('Error sending test emails to multiple recipients:', error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
