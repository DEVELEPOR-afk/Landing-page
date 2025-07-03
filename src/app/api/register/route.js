import { NextResponse } from 'next/server';
import Registration from '@/models/register.model';
import { connectDB } from '@/lib/mongodb';
import { sendWelcomeEmail, sendAdminNotification } from '@/lib/directEmailService';

// Log that we're using Direct Email Service for reliable email delivery
console.log('Using Direct Email Service for reliable email delivery to multiple users');

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
        const emailResult = await sendWelcomeEmail(body.email, body.name);
        
        if (emailResult.success) {
          console.log('Welcome email sent successfully to:', body.email);
        } else {
          console.error(`Failed to send welcome email to ${body.email}:`, emailResult.error);
        }
      }
      
      // Send notification to admin
      const notificationResult = await sendAdminNotification(
        body.name,
        body.email,
        body.experience
      );
      
      if (notificationResult.success) {
        console.log('Admin notification sent successfully');
      } else {
        console.error('Failed to send admin notification:', notificationResult.error);
      }
    } catch (emailError) {
      // Log the error but don't fail the registration process
      console.error('Error in email sending process:', emailError);
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

// GET method to check API health and return all registrations
export async function GET() {
  try {
    // Connect to the database
    await connectDB();
    
    // Fetch all registrations from MongoDB
    const registrations = await Registration.find({}).sort({ createdAt: -1 });
    
    return NextResponse.json(
      { 
        success: true, 
        message: 'Registration API is working',
        count: registrations.length,
        data: registrations
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('API health check error:', error);
    return NextResponse.json(
      { success: false, message: 'API health check failed', error: error.message },
      { status: 500 }
    );
  }
}
