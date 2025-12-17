import nodemailer from "nodemailer"

interface EmailData {
  name: string
  email: string
  subject: string
  message: string
}

export async function sendEmail(data: EmailData) {
  // Create transporter using Gmail (you can change this to your preferred email service)
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER, // Your email
      pass: process.env.EMAIL_APP_PASSWORD, // Your app password
    },
  })

  // Email to you (the recipient)
  const mailOptionsToYou = {
    from: `"${data.name}" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_USER, // Your email where you want to receive messages
    subject: `Portfolio Contact: ${data.subject}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
        <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; border-radius: 10px 10px 0 0; text-align: center;">
          <h1 style="color: white; margin: 0; font-size: 24px;">New Contact Form Submission</h1>
        </div>
        
        <div style="background: white; padding: 30px; border-radius: 0 0 10px 10px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
          <div style="margin-bottom: 20px; padding: 15px; background-color: #f8f9fa; border-left: 4px solid #667eea; border-radius: 4px;">
            <h3 style="margin: 0 0 10px 0; color: #333;">Contact Information</h3>
            <p style="margin: 5px 0; color: #666;"><strong>Name:</strong> ${data.name}</p>
            <p style="margin: 5px 0; color: #666;"><strong>Email:</strong> ${data.email}</p>
            <p style="margin: 5px 0; color: #666;"><strong>Subject:</strong> ${data.subject}</p>
          </div>
          
          <div style="margin-bottom: 20px;">
            <h3 style="color: #333; margin-bottom: 15px;">Message</h3>
            <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; border: 1px solid #e9ecef;">
              <p style="margin: 0; color: #555; line-height: 1.6; white-space: pre-wrap;">${data.message}</p>
            </div>
          </div>
          
          <div style="text-align: center; padding-top: 20px; border-top: 1px solid #eee;">
            <p style="color: #888; font-size: 14px; margin: 0;">
              This message was sent from your portfolio contact form on ${new Date().toLocaleDateString()}
            </p>
          </div>
        </div>
      </div>
    `,
  }

  // Auto-reply email to the sender
  const mailOptionsToSender = {
    from: `"Yussef Ahmed" <${process.env.EMAIL_USER}>`,
    to: data.email,
    subject: "Thank you for contacting me!",
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
        <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; border-radius: 10px 10px 0 0; text-align: center;">
          <h1 style="color: white; margin: 0; font-size: 24px;">Thank You for Reaching Out!</h1>
        </div>
        
        <div style="background: white; padding: 30px; border-radius: 0 0 10px 10px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
          <p style="color: #333; font-size: 16px; line-height: 1.6; margin-bottom: 20px;">
            Hi ${data.name},
          </p>
          
          <p style="color: #555; line-height: 1.6; margin-bottom: 20px;">
            Thank you for contacting me through my portfolio website. I've received your message about "<strong>${data.subject}</strong>" and I appreciate you taking the time to reach out.
          </p>
          
          <p style="color: #555; line-height: 1.6; margin-bottom: 20px;">
            I'll review your message and get back to you as soon as possible, typically within 24-48 hours. If your inquiry is urgent, feel free to reach out to me directly at this email address.
          </p>
          
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; border-left: 4px solid #667eea; margin: 20px 0;">
            <h3 style="margin: 0 0 10px 0; color: #333;">Your Message Summary:</h3>
            <p style="margin: 5px 0; color: #666;"><strong>Subject:</strong> ${data.subject}</p>
            <p style="margin: 5px 0; color: #666;"><strong>Date:</strong> ${new Date().toLocaleDateString()}</p>
          </div>
          
          <p style="color: #555; line-height: 1.6; margin-bottom: 20px;">
            In the meantime, feel free to check out my latest projects on my portfolio or connect with me on social media.
          </p>
          
          <div style="text-align: center; margin: 30px 0;">
            <a href="https://github.com" style="display: inline-block; margin: 0 10px; padding: 10px 20px; background-color: #333; color: white; text-decoration: none; border-radius: 5px;">GitHub</a>
            <a href="https://linkedin.com" style="display: inline-block; margin: 0 10px; padding: 10px 20px; background-color: #0077b5; color: white; text-decoration: none; border-radius: 5px;">LinkedIn</a>
          </div>
          
          <p style="color: #555; line-height: 1.6;">
            Best regards,<br>
            <strong>Yussef Ahmed</strong><br>
            Full-Stack Developer & UI/UX Designer
          </p>
          
          <div style="text-align: center; padding-top: 20px; border-top: 1px solid #eee;">
            <p style="color: #888; font-size: 12px; margin: 0;">
              This is an automated response. Please do not reply to this email directly.
            </p>
          </div>
        </div>
      </div>
    `,
  }

  try {
    // Send both emails
    await Promise.all([transporter.sendMail(mailOptionsToYou), transporter.sendMail(mailOptionsToSender)])

    return { success: true, message: "Emails sent successfully!" }
  } catch (error) {
    console.error("Error sending email:", error)
    return { success: false, message: "Failed to send email. Please try again." }
  }
}
