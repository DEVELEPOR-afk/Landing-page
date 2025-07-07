
import { sendEmail } from './emailService';

// Mock API handler for testing
export const handleSendTestEmail = async (emailData: { to: string; subject: string; message: string }) => {
  try {
    const result = await sendEmail({
      to: emailData.to,
      subject: emailData.subject,
      message: emailData.message,
      isFinancialReport: false
    });
    
    return { success: true, data: result };
  } catch (error) {
    console.error('Mock API Error:', error);
    return { success: false, error: error instanceof Error ? error.message : 'Unknown error' };
  }
};

export const handleSendFinancialReport = async (formData: any, userEmail: string) => {
  try {
    const result = await sendEmail({
      to: userEmail,
      subject: `Your Personal Financial Report - ${formData.fullName}`,
      message: `Your comprehensive financial plan has been generated based on your inputs. This report includes personalized recommendations, budget analysis, and actionable steps to achieve your financial goals.`,
      isFinancialReport: true,
      userDetails: formData
    });
    
    return { success: true, data: result };
  } catch (error) {
    console.error('Financial Report Email Error:', error);
    return { success: false, error: error instanceof Error ? error.message : 'Unknown error' };
  }
};
