import { NextResponse } from 'next/server';
import Registration from '@/models/register.model';
import { connectDB } from '@/lib/mongodb';
import { resend } from '@/lib/resend.js'; 
// import { sendWelcomeEmail, sendAdminNotification } from '@/lib/directEmailService';

// Log that we're using Direct Email Service for reliable email delivery
console.log('Using Direct Email Service for reliable email delivery to multiple users');

function createAdminEmailHTML(data) {
  const { name, email, phone, company, projectType, message } = data;
  
  return `
    <html>
      <head>
        <style>
          body { font-family: 'Georgia', serif; margin: 0; padding: 0; color: #333; background-color: #f9f9f9; }
          .container { max-width: 650px; margin: 0 auto; background-color: #ffffff; box-shadow: 0 4px 10px rgba(0,0,0,0.1); }
          .header { background-color: #2c3e50; padding: 25px; text-align: center; }
          .logo { font-family: 'Times New Roman', serif; color: #ffffff; font-size: 28px; letter-spacing: 1px; font-weight: bold; }
          .content { padding: 30px 40px; }
          h1 { color: #2c3e50; font-size: 26px; margin-bottom: 25px; font-weight: normal; border-bottom: 1px solid #e0e0e0; padding-bottom: 15px; }
          .divider { border-top: 1px solid #e0e0e0; margin: 25px 0; }
          .field { margin: 15px 0; font-size: 16px; line-height: 1.6; }
          .field strong { display: inline-block; min-width: 100px; color: #2c3e50; }
          .message { background-color: #f9f9f9; padding: 20px; border-left: 4px solid #2c3e50; margin-top: 10px; line-height: 1.6; }
          .footer { background-color: #f5f5f5; padding: 20px; text-align: center; color: #777; font-size: 14px; font-style: italic; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <div class="logo">GROWMINT</div>
          </div>
          <div class="content">
            <h1>New Contact Form Submission</h1>
            <div class="field"><strong>Name:</strong> ${name}</div>
            <div class="field"><strong>Email:</strong> ${email}</div>
            <div class="field"><strong>Phone:</strong> ${phone || 'Not provided'}</div>
            <div class="field"><strong>Company:</strong> ${company || 'Not provided'}</div>
            <div class="field"><strong>Project:</strong> ${projectType || 'Not provided'}</div>
            <div class="field"><strong>Message:</strong></div>
            <div class="message">${message}</div>
          </div>
          <div class="footer">
            This email was sent from the GrowMint website contact form.<br>
            &copy; ${new Date().getFullYear()} GrowMint. All rights reserved.
          </div>
        </div>
      </body>
    </html>
  `;
}

// Create confirmation email for the user
function createUserEmailHTML(data) {
  const { name } = data;
  
  return `
    <html>
      <head>
        <style>
          body { font-family: 'Georgia', serif; margin: 0; padding: 0; color: #333; background-color: #f9f9f9; }
          .container { max-width: 650px; margin: 0 auto; background-color: #ffffff; box-shadow: 0 4px 10px rgba(0,0,0,0.1); }
          .header { background-color: #2c3e50; padding: 25px; text-align: center; }
          .logo { font-family: 'Times New Roman', serif; color: #ffffff; font-size: 28px; letter-spacing: 1px; font-weight: bold; }
          .content { padding: 30px 40px; }
          h1 { color: #2c3e50; font-size: 26px; margin-bottom: 25px; font-weight: normal; border-bottom: 1px solid #e0e0e0; padding-bottom: 15px; }
          .divider { border-top: 1px solid #e0e0e0; margin: 25px 0; }
          p { margin: 15px 0; font-size: 16px; line-height: 1.8; color: #444; }
          .signature { margin-top: 30px; }
          .footer { background-color: #f5f5f5; padding: 20px; text-align: center; color: #777; font-size: 14px; font-style: italic; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <div class="logo">GROWMINT</div>
          </div>
          <div class="content">
            <h1>Thank You for Contacting GrowMint</h1>
            <p>Dear ${name},</p>
            <p>Thank you for reaching out to GrowMint. We have received your message and appreciate your interest in our services.</p>
            <p>Our team of experts is reviewing your request and will get back to you as soon as possible with a personalized response. We typically respond within 24-48 business hours.</p>
            <p>If you have any urgent questions in the meantime, please don't hesitate to contact us directly.</p>
            <div class="signature">
              <p>Warm regards,</p>
              <p><strong>The GrowMint Team</strong></p>
            </div>
          </div>
          <div class="footer">
            This is an automated confirmation email. Please do not reply to this message.<br>
            &copy; ${new Date().getFullYear()} GrowMint. All rights reserved.
          </div>
        </div>
      </body>
    </html>
  `;
}

export async function POST(request) {
  try {
    // Connect to the database
    await connectDB();
    
    // Parse the request body
    const body = await request.json();
    console.log('Received registration data:', body);
    
    // Validate required fields
    if (!body.name || !body.email || !body.experience) {
      return NextResponse.json(
        { 
          success: false, 
          message: 'Missing required fields'
        },
        { status: 400 }
      );
    }
    
    // Create a new registration entry
    const registration = new Registration({
      name: body.name,
      email: body.email,
      experience: body.experience,
      goals: body.goal || '',  
      discord: body.discord || ''
    });
    
    // Save to MongoDB
    await registration.save();
    console.log('Registration saved to database successfully');

     // After successful DB save, try to send emails
     const emailResults = { admin: null, user: null, errors: [] };
    
    // Send welcome email to the user
    try {
      console.log('Registration data for email:', { 
        email: body.email, 
        name: body.name, 
        experience: body.experience 
      });
      
      // Ensure email is a string and properly formatted
      if (typeof body.email !== 'string' || !body.email.includes('@')) {
        console.error('Invalid email format in registration data:', body.email);
      } else {
        console.log('Attempting to send welcome email to:', body.email);
        const emailResult = await resend.emails.send({
          from: "Growmint <business@growmint.net>",
          to: body.email,
          subject: "Thank You for Contacting GrowMint",
          html: createUserEmailHTML(body)
          // Removed BCC to admin as requested
        });
        
        if (emailResult.success) {
          console.log('Welcome email sent successfully to:', body.email);
        } else {
          console.error(`Failed to send welcome email to ${body.email}:`, emailResult.error);
        }
      }
      
      // Send notification to admin
      // const notificationResult = await sendAdminNotification(
      //   body.name,
      //   body.email,
      //   body.experience
      // );
      
      if (notificationResult.success) {
        console.log('Admin notification sent successfully');
      } else {
        console.error('Failed to send admin notification:', notificationResult.error);
      }
    } catch (emailError) {
      // Log the error but don't fail the registration process
      console.error('Error in email sending process:', emailError);
    }
    

     // Try to send admin notification email
     try {
      console.log('Sending admin notification email to admin@growmint.net');
      const adminEmailResult = await resend.emails.send({
        from: "Growmint Contact <business@growmint.net>",
        to: "admin@growmint.net",
        subject: "New Contact Form Submission",
        html: createAdminEmailHTML(contactData),
      });
      
      console.log('Admin email response:', JSON.stringify(adminEmailResult));
      emailResults.admin = adminEmailResult.data?.id || 'No ID returned';
    } catch (adminError) {
      console.error('Error sending admin email:', adminError);
      emailResults.errors.push(`Admin email: ${adminError.message}`);
    }
    
    // Try to send user confirmation email
    try {
      // In development, send to business@growmint.net but include user info in the subject
      // In production, send to the actual user
      const recipientEmail = contactData.email;
      const emailSubject = "Thank You for Contacting GrowMint";
      
      console.log(`Sending confirmation email to ${recipientEmail}`);
      
      const userEmailResult = await resend.emails.send({
        from: "Growmint <business@growmint.net>",
        to: recipientEmail,
        subject: emailSubject,
        html: createUserEmailHTML(contactData)
        // Removed BCC to admin as requested
      });
      
      console.log('User email response:', JSON.stringify(userEmailResult));
      emailResults.user = userEmailResult.data?.id || 'No ID returned';
    } catch (userError) {
      console.error('Error sending user email:', userError);
      emailResults.errors.push(`User email: ${userError.message}`);
    }

    // Return success response
    return NextResponse.json(
      { 
        success: true, 
        message: 'Registration successful', 
        data: registration 
      },
      { status: 201 }
    );
    
  } catch (error) {
    console.error('Registration error:', error);
    
    // Return detailed error for debugging
    return NextResponse.json(
      { 
        success: false, 
        message: 'Registration failed', 
        error: error.message
      },
      { status: 500 }
    );
  }
}
