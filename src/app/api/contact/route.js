import { NextResponse } from 'next/server';
import { sendEmail, getAdminEmailTemplate, getUserThankYouTemplate } from '@/lib/email';

export async function POST(request) {
  try {
    const { name, email, phone, message, projectType, subject } = await request.json();

    // Validate required fields
    if (!name || !email) {
      return NextResponse.json(
        { error: 'Name and email are required' },
        { status: 400 }
      );
    }

    // Set default message if not provided
    const finalMessage = message || projectType
      ? `Enquiry for ${projectType || 'General Inquiry'}`
      : 'Enquiry from website form';

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    const adminEmail = process.env.NEXT_PUBLIC_TO_EMAIL || process.env.NEXT_PUBLIC_FROM_EMAIL || 'codeshorts007@gmail.com';
    const formData = { name, email, phone, message: finalMessage, projectType, subject };

    // Send email to admin with inquiry details
    const adminEmailHtml = getAdminEmailTemplate(formData);
    const adminEmailText = `
New Contact Form Submission - SLJ Solutions

Name: ${name}
Email: ${email}
Phone: ${phone || 'Not provided'}
Project Type: ${projectType || 'Not specified'}

Message:
${finalMessage}

---
Received on: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}
    `;

    // Customize subject based on request type
    const emailSubject = subject === 'Brochure Download Request'
      ? `📥 Brochure Downloaded by ${name} - SLJ Solutions`
      : `🏠 New Enquiry from ${name} - SLJ Solutions`;

    await sendEmail({
      to: adminEmail,
      subject: emailSubject,
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





