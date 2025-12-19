import nodemailer from 'nodemailer';

// Create reusable transporter
const createTransporter = () => {
  return nodemailer.createTransport({
    host: process.env.NEXT_PUBLIC_SMTP_HOST,
    port: parseInt(process.env.NEXT_PUBLIC_SMTP_PORT || '587'),
    secure: false,
    auth: {
      user: process.env.NEXT_PUBLIC_SMTP_USER,
      pass: process.env.NEXT_PUBLIC_SMTP_PASSWORD,
    },
  });
};

// Send email function
export const sendEmail = async ({ to, subject, text, html }) => {
  const transporter = createTransporter();

  const mailOptions = {
    from: `"SLJ Solutions" <${process.env.NEXT_PUBLIC_FROM_EMAIL}>`,
    to,
    subject,
    text,
    html,
  };

  const info = await transporter.sendMail(mailOptions);
  return info;
};

// Admin Email Template - When someone submits enquiry
export const getAdminEmailTemplate = (formData) => {
  const { name, email, phone, message, projectType, subject } = formData;

  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Enquiry - SLJ Solutions</title>
</head>
<body style="margin: 0; padding: 0; background-color: #f5f5f5; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f5f5f5; padding: 40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 0; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.1);">
          
          <!-- Header -->
          <tr>
            <td style="background-color: #0a0a0a; padding: 30px 40px; text-align: center;">
              <h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: 700;">
                <span style="color: #ED2028;">SLJ</span> Solutions
              </h1>
              <p style="margin: 8px 0 0; color: #888888; font-size: 12px; text-transform: uppercase; letter-spacing: 2px;">
                New Enquiry Received
              </p>
            </td>
          </tr>
          
          <!-- Red Accent Line -->
          <tr>
            <td style="background-color: #ED2028; height: 4px;"></td>
          </tr>
          
          <!-- Content -->
          <tr>
            <td style="padding: 40px;">
              <h2 style="margin: 0 0 20px; color: #0a0a0a; font-size: 22px; font-weight: 600;">
                📬 New Contact Form Submission
              </h2>
              
              <p style="color: #666666; font-size: 14px; line-height: 1.6; margin: 0 0 30px;">
                You have received a new enquiry from the SLJ Solutions website. Here are the details:
              </p>
              
              <!-- Details Table -->
              <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #fafafa; border-left: 3px solid #ED2028;">
                <tr>
                  <td style="padding: 20px;">
                    <table width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="padding: 10px 0; border-bottom: 1px solid #eeeeee;">
                          <strong style="color: #ED2028; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Name</strong><br>
                          <span style="color: #333333; font-size: 16px;">${name}</span>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding: 10px 0; border-bottom: 1px solid #eeeeee;">
                          <strong style="color: #ED2028; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Email</strong><br>
                          <a href="mailto:${email}" style="color: #333333; font-size: 16px; text-decoration: none;">${email}</a>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding: 10px 0; border-bottom: 1px solid #eeeeee;">
                          <strong style="color: #ED2028; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Phone</strong><br>
                          <a href="tel:${phone}" style="color: #333333; font-size: 16px; text-decoration: none;">${phone || 'Not provided'}</a>
                        </td>
                      </tr>
                      ${projectType ? `
                      <tr>
                        <td style="padding: 10px 0; border-bottom: 1px solid #eeeeee;">
                          <strong style="color: #ED2028; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Project Type</strong><br>
                          <span style="color: #333333; font-size: 16px;">${projectType}</span>
                        </td>
                      </tr>
                      ` : ''}
                      <tr>
                        <td style="padding: 10px 0;">
                          <strong style="color: #ED2028; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Message</strong><br>
                          <span style="color: #333333; font-size: 14px; line-height: 1.6; display: block; margin-top: 8px;">${message}</span>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
              
              <!-- Action Button -->
              <div style="text-align: center; margin-top: 30px;">
                <a href="mailto:${email}?subject=Re: Your Enquiry to SLJ Solutions" 
                   style="display: inline-block; background-color: #ED2028; color: #ffffff; text-decoration: none; padding: 14px 32px; font-size: 14px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px;">
                  Reply to ${name}
                </a>
              </div>
              
              <p style="color: #999999; font-size: 12px; margin-top: 30px; text-align: center;">
                Received on ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}
              </p>
            </td>
          </tr>
          
          <!-- Footer -->
          <tr>
            <td style="background-color: #0a0a0a; padding: 25px 40px; text-align: center;">
              <p style="margin: 0 0 8px;">
                <a href="https://sljsolutions.com" style="color: #ED2028; font-size: 13px; text-decoration: none;">www.sljsolutions.com</a>
              </p>
              <p style="margin: 0; color: #888888; font-size: 12px;">
                © ${new Date().getFullYear()} SLJ Solutions. All rights reserved.
              </p>
              <p style="margin: 8px 0 0; color: #666666; font-size: 11px;">
                C-15/1, Street No. 7, Krishna Nagar, New Delhi - 110092
              </p>
            </td>
          </tr>
          
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `;
};

// User Thank You Email Template
export const getUserThankYouTemplate = ({ name }) => {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Thank You - SLJ Solutions</title>
</head>
<body style="margin: 0; padding: 0; background-color: #f5f5f5; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f5f5f5; padding: 40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 0; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.1);">
          
          <!-- Header -->
          <tr>
            <td style="background-color: #0a0a0a; padding: 40px; text-align: center;">
              <h1 style="margin: 0; color: #ffffff; font-size: 32px; font-weight: 700;">
                <span style="color: #ED2028;">SLJ</span> Solutions
              </h1>
              <p style="margin: 10px 0 0; color: #888888; font-size: 12px; text-transform: uppercase; letter-spacing: 3px;">
                One Solution For All Needs
              </p>
            </td>
          </tr>
          
          <!-- Red Accent Line -->
          <tr>
            <td style="background-color: #ED2028; height: 4px;"></td>
          </tr>
          
          <!-- Main Content -->
          <tr>
            <td style="padding: 50px 40px;">
              <!-- Thank You Icon -->
              <div style="text-align: center; margin-bottom: 30px;">
                <div style="display: inline-block; width: 80px; height: 80px; background-color: #ED2028; border-radius: 50%; line-height: 80px; font-size: 36px;">
                  ✓
                </div>
              </div>
              
              <h2 style="margin: 0 0 20px; color: #0a0a0a; font-size: 28px; font-weight: 700; text-align: center;">
                Thank You, ${name}!
              </h2>
              
              <p style="color: #666666; font-size: 16px; line-height: 1.8; margin: 0 0 25px; text-align: center;">
                We have successfully received your enquiry and our team will review it shortly.
              </p>
              
              <div style="background-color: #fafafa; border-left: 4px solid #ED2028; padding: 20px 25px; margin: 30px 0;">
                <p style="margin: 0; color: #333333; font-size: 14px; line-height: 1.7;">
                  <strong>What happens next?</strong><br><br>
                  Our design experts will carefully review your requirements and get back to you within <strong style="color: #ED2028;">24-48 hours</strong> with a personalized response.
                </p>
              </div>
              
              <!-- Why Choose Us -->
              <h3 style="color: #0a0a0a; font-size: 18px; margin: 35px 0 20px; text-align: center;">
                Why Choose SLJ Solutions?
              </h3>
              
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td width="33%" style="padding: 15px; text-align: center; vertical-align: top;">
                    <div style="font-size: 28px; margin-bottom: 10px;">🏆</div>
                    <strong style="color: #333333; font-size: 13px;">15+ Years</strong><br>
                    <span style="color: #888888; font-size: 12px;">Experience</span>
                  </td>
                  <td width="33%" style="padding: 15px; text-align: center; vertical-align: top;">
                    <div style="font-size: 28px; margin-bottom: 10px;">✨</div>
                    <strong style="color: #333333; font-size: 13px;">500+</strong><br>
                    <span style="color: #888888; font-size: 12px;">Projects Done</span>
                  </td>
                  <td width="33%" style="padding: 15px; text-align: center; vertical-align: top;">
                    <div style="font-size: 28px; margin-bottom: 10px;">💯</div>
                    <strong style="color: #333333; font-size: 13px;">100%</strong><br>
                    <span style="color: #888888; font-size: 12px;">Satisfaction</span>
                  </td>
                </tr>
              </table>
              
              <!-- Contact Info -->
              <div style="background-color: #0a0a0a; padding: 25px; margin-top: 35px; text-align: center;">
                <p style="margin: 0 0 15px; color: #ffffff; font-size: 14px; font-weight: 600;">
                  Need immediate assistance?
                </p>
                <a href="tel:+919953551248" style="display: inline-block; color: #ED2028; font-size: 20px; font-weight: 700; text-decoration: none;">
                  📞 +91 99535 51248
                </a>
                <div style="margin-top: 20px;">
                  <a href="https://sljsolutions.com" style="display: inline-block; background-color: #ED2028; color: #ffffff; text-decoration: none; padding: 12px 28px; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px;">
                    Visit Our Website
                  </a>
                </div>
              </div>
            </td>
          </tr>
          
          <!-- Services Preview -->
          <tr>
            <td style="background-color: #fafafa; padding: 30px 40px;">
              <h3 style="margin: 0 0 20px; color: #0a0a0a; font-size: 16px; text-align: center; text-transform: uppercase; letter-spacing: 2px;">
                Our Services
              </h3>
              <p style="margin: 0; color: #666666; font-size: 13px; text-align: center; line-height: 2;">
                Turnkey Construction • Office Interiors • Residential Design • Modular Kitchens<br>
                IKEA Furnishing • Terrace Gardens • Wall Murals • Sculptures
              </p>
            </td>
          </tr>
          
          <!-- Footer -->
          <tr>
            <td style="background-color: #0a0a0a; padding: 30px 40px; text-align: center;">
              <p style="margin: 0 0 10px; color: #ffffff; font-size: 14px; font-weight: 600;">
                <span style="color: #ED2028;">SLJ</span> Solutions
              </p>
              <p style="margin: 0 0 10px;">
                <a href="https://sljsolutions.com" style="color: #ED2028; font-size: 13px; text-decoration: none;">www.sljsolutions.com</a>
              </p>
              <p style="margin: 0 0 15px; color: #888888; font-size: 12px;">
                C-15/1, Street No. 7, Near Gandhi Park,<br>
                New Govind Pura, Krishna Nagar, New Delhi - 110092
              </p>
              <p style="margin: 0; color: #666666; font-size: 11px;">
                📧 sales@sljsolutions.com | 📞 +91 99535 51248
              </p>
              <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #333333;">
                <p style="margin: 0; color: #555555; font-size: 11px;">
                  © ${new Date().getFullYear()} SLJ Solutions. All rights reserved.
                </p>
              </div>
            </td>
          </tr>
          
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `;
};

