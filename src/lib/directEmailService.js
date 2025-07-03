/**
 * Direct Email Service for sending emails to multiple users
 * Uses Resend.com API directly for maximum reliability
 */

// Resend API key - hardcoded for reliability
const RESEND_API_KEY = 're_ReAutDQh_BdhWgRQD5iRt8rdTMxSuzKNo';

/**
 * Send an email directly using Resend API
 * @param {Object} options - Email options
 * @param {string} options.from - Sender email (use onboarding@resend.dev for reliability)
 * @param {string|string[]} options.to - Recipient email(s)
 * @param {string} options.subject - Email subject
 * @param {string} options.html - HTML content
 * @param {string} options.text - Plain text content
 * @returns {Promise<Object>} - Result of the email sending operation
 */
export async function sendEmailDirectly(options) {
  try {
    console.log(`[Direct Email] Sending email to: ${Array.isArray(options.to) ? options.to.join(', ') : options.to}`);
    
    // Ensure we're using the default Resend domain for better deliverability
    if (!options.from || !options.from.includes('resend.dev')) {
      options.from = 'Trading Mentorship <onboarding@resend.dev>';
      console.log('[Direct Email] Using default Resend domain for better deliverability');
    }
    
    // Make direct API call to Resend
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${RESEND_API_KEY}`
      },
      body: JSON.stringify(options)
    });
    
    // Handle API response
    if (!response.ok) {
      const errorText = await response.text();
      console.error(`[Direct Email] API error (${response.status}):`, errorText);
      throw new Error(`Resend API error (${response.status}): ${errorText}`);
    }
    
    const data = await response.json();
    console.log('[Direct Email] Success:', data);
    return { success: true, data };
  } catch (error) {
    console.error('[Direct Email] Error:', error.message);
    return { success: false, error: error.message };
  }
}

/**
 * Send welcome email to a user who registered
 * @param {string} email - User's email address
 * @param {string} name - User's name
 * @returns {Promise<Object>} - Result of the email sending operation
 */
export async function sendWelcomeEmail(email, name) {
  try {
    console.log(`[Direct Email] Sending welcome email to ${email}`);
    
    // Validate email
    if (!email || !email.includes('@')) {
      console.error(`[Direct Email] Invalid email: ${email}`);
      return { success: false, error: 'Invalid email format' };
    }
    
    // Create email content
    const htmlContent = `
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
    
    const textContent = `
Hello ${name},

Thank you for registering with Trading Mentorship! We're excited to have you on board.

Your account has been successfully created and we look forward to helping you achieve your trading goals.

Best regards,
The Trading Mentorship Team
    `;
    
    // Send email directly via Resend API
    return await sendEmailDirectly({
      from: 'Trading Mentorship <onboarding@resend.dev>',
      to: email,
      subject: 'Welcome to Trading Mentorship!',
      html: htmlContent,
      text: textContent
    });
  } catch (error) {
    console.error('[Direct Email] Welcome email error:', error);
    return { success: false, error: error.message };
  }
}

/**
 * Send notification to admin about new registration
 * @param {string} name - User's name
 * @param {string} email - User's email
 * @param {string} experience - User's experience level
 * @returns {Promise<Object>} - Result of the email sending operation
 */
export async function sendAdminNotification(name, email, experience) {
  try {
    console.log(`[Direct Email] Sending admin notification about ${email}`);
    
    // Create email content
    const htmlContent = `
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
    
    const textContent = `
New User Registration

Name: ${name}
Email: ${email}
Experience: ${experience}
    `;
    
    // Send email directly via Resend API
    return await sendEmailDirectly({
      from: 'Trading Mentorship <onboarding@resend.dev>',
      to: 'zero.ff069@gmail.com',
      subject: `New Registration: ${name}`,
      html: htmlContent,
      text: textContent
    });
  } catch (error) {
    console.error('[Direct Email] Admin notification error:', error);
    return { success: false, error: error.message };
  }
}
