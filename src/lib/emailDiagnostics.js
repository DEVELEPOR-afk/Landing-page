import { Resend } from 'resend';

// Initialize Resend with API key
const API_KEY = 're_ReAutDQh_BdhWgRQD5iRt8rdTMxSuzKNo';
const resend = new Resend(API_KEY);

/**
 * Run diagnostics on Resend email configuration
 * @returns {Promise<object>} Diagnostic results
 */
export async function runEmailDiagnostics() {
  const results = {
    apiKeyValid: false,
    canSendTestEmail: false,
    errors: []
  };

  try {
    // Step 1: Check if API key is valid by making a simple API call
    try {
      // We'll try to get domains, which is a simple API call that should work with any valid API key
      const domains = await resend.domains.list();
      results.apiKeyValid = true;
      console.log('API key is valid. Domains:', domains);
    } catch (error) {
      results.apiKeyValid = false;
      results.errors.push({
        step: 'API Key Validation',
        error: error.message,
        details: error
      });
      console.error('API key validation failed:', error);
    }

    // Step 2: Try to send a test email to the admin
    if (results.apiKeyValid) {
      try {
        const testEmail = await resend.emails.send({
          from: 'onboarding@resend.dev',
          to: 'zero.ff069@gmail.com',
          subject: 'Resend Email Diagnostics Test',
          text: `This is a test email sent at ${new Date().toISOString()} to verify Resend email sending functionality.`
        });
        
        results.canSendTestEmail = true;
        results.testEmailId = testEmail.id;
        console.log('Test email sent successfully:', testEmail);
      } catch (error) {
        results.canSendTestEmail = false;
        results.errors.push({
          step: 'Test Email',
          error: error.message,
          details: error
        });
        console.error('Failed to send test email:', error);
      }
    }

    return results;
  } catch (error) {
    results.errors.push({
      step: 'General',
      error: error.message,
      details: error
    });
    console.error('Email diagnostics failed:', error);
    return results;
  }
}

/**
 * Check if an email address is valid and can potentially receive emails
 * @param {string} email - Email address to validate
 * @returns {object} Validation results
 */
export function validateEmailAddress(email) {
  if (!email) {
    return { 
      valid: false, 
      reason: 'Email is empty' 
    };
  }

  // Basic format validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { 
      valid: false, 
      reason: 'Email format is invalid' 
    };
  }

  // Check for common disposable email domains
  const disposableDomains = [
    'tempmail.com', 'temp-mail.org', 'guerrillamail.com', 
    'mailinator.com', 'yopmail.com', 'sharklasers.com'
  ];
  
  const domain = email.split('@')[1].toLowerCase();
  if (disposableDomains.includes(domain)) {
    return { 
      valid: true, 
      warning: 'Email domain appears to be a disposable email service' 
    };
  }

  return { valid: true };
}
