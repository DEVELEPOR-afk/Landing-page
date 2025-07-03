import { Resend } from 'resend';

// Initialize Resend with API key
// Using direct API key for reliability
const RESEND_API_KEY = 're_ReAutDQh_BdhWgRQD5iRt8rdTMxSuzKNo';
const resend = new Resend(RESEND_API_KEY);

// Direct API call to Resend for better reliability
async function sendEmailDirectly(options) {
  try {
    console.log('Sending email directly via Resend API to:', options.to);
    
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${RESEND_API_KEY}`
      },
      body: JSON.stringify(options)
    });
    
    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Resend API error (${response.status}): ${errorText}`);
    }
    
    const data = await response.json();
    console.log('Direct API response:', data);
    return { success: true, data };
  } catch (error) {
    console.error('Direct API error:', error);
    return { success: false, error: error.message };
  }
}

/**
 * Send a welcome email to a user who has registered
 * @param {string} email - User's email address
 * @param {string} name - User's name
 * @returns {Promise} - Result of email sending
 */
export async function sendWelcomeEmail(email, name) {
  try {
    console.log(`Sending welcome email to ${email} with name ${name}`);
    
    // Validate email format
    if (!email || !email.includes('@') || !email.includes('.')) {
      console.error(`Invalid email format: ${email}`);
      return { success: false, error: 'Invalid email format' };
    }
    
    // Create email content
    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #f0f0f0; border-radius: 5px;">
        <h2 style="color: #333; text-align: center;">Welcome to Trading Mentorship!</h2>
        <p>Hello ${name},</p>
        <p>Thank you for registering with Trading Mentorship! We're excited to have you on board.</p>
        <p>Your account has been successfully created and we look forward to helping you achieve your trading goals.</p>
        <div style="margin: 30px 0; text-align: center;">
          <a href="https://your-landing-page.com/dashboard" style="background-color: #0070f3; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; font-weight: bold;">Visit Dashboard</a>
        </div>
        <p>Best regards,<br>The Trading Mentorship Team</p>
      </div>
    `;
    
    // First try using the SDK
    try {
      console.log('Attempting to send email via Resend SDK');
      const data = await resend.emails.send({
        from: 'Trading Mentorship <onboarding@resend.dev>',
        to: email,
        subject: 'Welcome to Trading Mentorship!',
        html: emailHtml
      });
      
      console.log('Email sent successfully via SDK:', data);
      return { success: true, data, method: 'sdk' };
    } catch (sdkError) {
      console.error('SDK email sending failed, trying direct API:', sdkError.message);
      
      // If SDK fails, try direct API approach
      const directResult = await sendEmailDirectly({
        from: 'Trading Mentorship <onboarding@resend.dev>',
        to: email,
        subject: 'Welcome to Trading Mentorship!',
        html: emailHtml,
        text: `Hello ${name},\n\nThank you for registering with Trading Mentorship! We're excited to have you on board.\n\nYour account has been successfully created and we look forward to helping you achieve your trading goals.\n\nBest regards,\nThe Trading Mentorship Team`
      });
      
      if (directResult.success) {
        console.log('Email sent successfully via direct API:', directResult.data);
        return { success: true, data: directResult.data, method: 'direct' };
      } else {
        throw new Error(`Direct API error: ${directResult.error}`);
      }
    }
  } catch (error) {
    console.error('Failed to send email:', error);
    return { success: false, error: error.message };
  }
}

/**
 * Send a notification to admin about new registration
 * @param {string} name - User's name
 * @param {string} email - User's email
 * @param {string} experience - User's experience level
 * @returns {Promise} - Result of email sending
 */
export async function sendAdminNotification(name, email, experience) {
  try {
    console.log('Sending admin notification to zero.ff069@gmail.com');
    
    // Create email content
    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #f0f0f0; border-radius: 5px;">
        <h2 style="color: #333; text-align: center;">New User Registration</h2>
        <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Name:</td>
            <td style="padding: 10px; border-bottom: 1px solid #eee;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Email:</td>
            <td style="padding: 10px; border-bottom: 1px solid #eee;">${email}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Experience:</td>
            <td style="padding: 10px; border-bottom: 1px solid #eee;">${experience}</td>
          </tr>
        </table>
      </div>
    `;
    
    // Plain text version
    const textContent = `
New User Registration\n\nName: ${name}\nEmail: ${email}\nExperience: ${experience}`;
    
    // Try direct API approach first for admin notifications
    try {
      console.log('Sending admin notification via direct API');
      const directResult = await sendEmailDirectly({
        from: 'Trading Mentorship <onboarding@resend.dev>',
        to: 'zero.ff069@gmail.com',
        subject: `New Registration: ${name}`,
        html: emailHtml,
        text: textContent
      });
      
      if (directResult.success) {
        console.log('Admin notification sent successfully via direct API:', directResult.data);
        return { success: true, data: directResult.data, method: 'direct' };
      } else {
        throw new Error(`Direct API error: ${directResult.error}`);
      }
    } catch (directError) {
      console.error('Direct API failed for admin notification, trying SDK:', directError.message);
      
      // Fall back to SDK if direct API fails
      const data = await resend.emails.send({
        from: 'Trading Mentorship <onboarding@resend.dev>',
        to: 'zero.ff069@gmail.com',
        subject: `New Registration: ${name}`,
        html: emailHtml
      });
      
      console.log('Admin notification sent successfully via SDK:', data);
      return { success: true, data, method: 'sdk' };
    }
  } catch (error) {
    console.error('Failed to send admin notification:', error);
    return { success: false, error: error.message };
  }
}
