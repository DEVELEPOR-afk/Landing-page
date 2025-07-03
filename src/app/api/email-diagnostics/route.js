import { NextResponse } from 'next/server';
import { runEmailDiagnostics } from '@/lib/emailDiagnostics';
import { sendWelcomeEmail } from '@/lib/resendService';

export async function GET() {
  try {
    console.log('Running email diagnostics...');
    
    // Run comprehensive diagnostics
    const diagnosticResults = await runEmailDiagnostics();
    
    // Try sending a test welcome email
    let welcomeEmailTest = { attempted: false };
    if (diagnosticResults.apiKeyValid) {
      try {
        welcomeEmailTest.attempted = true;
        const testResult = await sendWelcomeEmail(
          'zero.ff069@gmail.com', 
          'Test User'
        );
        welcomeEmailTest.success = testResult.success;
        welcomeEmailTest.data = testResult.data;
        welcomeEmailTest.error = testResult.error;
      } catch (error) {
        welcomeEmailTest.success = false;
        welcomeEmailTest.error = error.message;
      }
    }
    
    // Return diagnostic results
    return NextResponse.json({
      timestamp: new Date().toISOString(),
      diagnosticResults,
      welcomeEmailTest,
      apiKeyLastFour: 'zKNo', // Last 4 characters of API key for verification
      recommendations: getRecommendations(diagnosticResults, welcomeEmailTest)
    });
  } catch (error) {
    console.error('Email diagnostics API error:', error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}

/**
 * Generate recommendations based on diagnostic results
 */
function getRecommendations(diagnosticResults, welcomeEmailTest) {
  const recommendations = [];
  
  if (!diagnosticResults.apiKeyValid) {
    recommendations.push(
      'Your Resend API key appears to be invalid. Please verify the API key in your Resend dashboard.'
    );
  }
  
  if (diagnosticResults.apiKeyValid && !diagnosticResults.canSendTestEmail) {
    recommendations.push(
      'Your API key is valid, but sending a test email failed. This could be due to rate limits or domain verification issues.'
    );
  }
  
  if (welcomeEmailTest.attempted && !welcomeEmailTest.success) {
    recommendations.push(
      'The welcome email template failed to send. Check the error message for details.'
    );
  }
  
  if (recommendations.length === 0 && diagnosticResults.apiKeyValid && diagnosticResults.canSendTestEmail) {
    recommendations.push(
      'All diagnostics passed successfully. If users are still not receiving emails, they should check their spam folders.'
    );
    recommendations.push(
      'Consider adding your sending domain to Resend for better deliverability.'
    );
  }
  
  return recommendations;
}
