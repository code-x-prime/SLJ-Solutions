import { NextResponse } from 'next/server';
import { sendEmail, getAdminEmailTemplate, getUserThankYouTemplate } from '@/lib/email';

export async function POST(request) {
  try {
    const { name, email, phone, message, projectType, subject } = await request.json();

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    const adminEmail = process.env.NEXT_PUBLIC_TO_EMAIL || process.env.NEXT_PUBLIC_FROM_EMAIL || 'codeshorts007@gmail.com';
    const formData = { name, email, phone, message, projectType, subject };

    // Send email to admin with inquiry details
    const adminEmailHtml = getAdminEmailTemplate(formData);
    const adminEmailText = `
New Contact Form Submission - SLJ Solutions

Name: ${name}
Email: ${email}
Phone: ${phone || 'Not provided'}
Project Type: ${projectType || 'Not specified'}

Message:
${message}

---
Received on: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}
    `;

    await sendEmail({
      to: adminEmail,
      subject: `🏠 New Enquiry from ${name} - SLJ Solutions`,
      text: adminEmailText,
      html: adminEmailHtml,
    });

    // Send thank you email to user
    const userEmailHtml = getUserThankYouTemplate({ name });
    const userEmailText = `
Dear ${name},

Thank you for reaching out to SLJ Solutions!

We have successfully received your enquiry and our team will review it shortly. We typically respond within 24-48 hours.

If you need immediate assistance, please call us at +91 99535 51248.

Best regards,
SLJ Solutions Team

---
C-15/1, Street No. 7, Krishna Nagar, New Delhi - 110092
Email: sales@sljsolutions.com
Phone: +91 99535 51248
    `;

    await sendEmail({
      to: email,
      subject: '✅ Thank You for Contacting SLJ Solutions!',
      text: userEmailText,
      html: userEmailHtml,
    });

    // Also log to console for debugging
    console.log('📧 Enquiry submitted:', { name, email, phone, projectType, message });

    return NextResponse.json({
      success: true,
      message: 'Thank you! Your enquiry has been submitted successfully. Please check your email for confirmation.'
    });

  } catch (error) {
    console.error('Contact form error:', error);
    console.error('Error message:', error.message);

    return NextResponse.json(
      {
        error: 'Failed to send message. Please try again or call us directly.',
        details: process.env.NODE_ENV === 'development' ? error.message : undefined
      },
      { status: 500 }
    );
  }
}



