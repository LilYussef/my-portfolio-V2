import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
}

export async function sendContactEmail(data: ContactFormData) {
  try {
    // Send email to you (the portfolio owner)
    const emailToYou = await resend.emails.send({
      from: "Portfolio Contact <noreply@yourdomain.com>", // You'll need to verify this domain
      to: ["yussefhilmey@outlook.com"],
      subject: `Portfolio Contact: ${data.subject}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>New Contact Form Submission</title>
        </head>
        <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
          
          <div style="background: linear-gradient(135deg, #8B5CF6 0%, #06B6D4 100%); padding: 30px; border-radius: 12px; text-align: center; margin-bottom: 30px;">
            <h1 style="color: white; margin: 0; font-size: 28px; font-weight: 700;">New Contact Form Submission</h1>
            <p style="color: rgba(255,255,255,0.9); margin: 10px 0 0 0; font-size: 16px;">From your portfolio website</p>
          </div>

          <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 30px; margin-bottom: 20px;">
            <h2 style="color: #1e293b; margin: 0 0 20px 0; font-size: 20px; font-weight: 600;">Contact Details</h2>
            
            <div style="margin-bottom: 15px;">
              <strong style="color: #475569; display: inline-block; width: 80px;">Name:</strong>
              <span style="color: #1e293b;">${data.name}</span>
            </div>
            
            <div style="margin-bottom: 15px;">
              <strong style="color: #475569; display: inline-block; width: 80px;">Email:</strong>
              <a href="mailto:${data.email}" style="color: #8B5CF6; text-decoration: none;">${data.email}</a>
            </div>
            
            <div style="margin-bottom: 15px;">
              <strong style="color: #475569; display: inline-block; width: 80px;">Subject:</strong>
              <span style="color: #1e293b;">${data.subject}</span>
            </div>
          </div>

          <div style="background: white; border: 1px solid #e2e8f0; border-radius: 12px; padding: 30px; margin-bottom: 20px;">
            <h2 style="color: #1e293b; margin: 0 0 15px 0; font-size: 20px; font-weight: 600;">Message</h2>
            <div style="background: #f1f5f9; padding: 20px; border-radius: 8px; border-left: 4px solid #8B5CF6;">
              <p style="margin: 0; color: #334155; white-space: pre-wrap; line-height: 1.6;">${data.message}</p>
            </div>
          </div>

          <div style="text-align: center; padding: 20px; background: #f8fafc; border-radius: 12px; border: 1px solid #e2e8f0;">
            <p style="margin: 0; color: #64748b; font-size: 14px;">
              📅 Received on ${new Date().toLocaleDateString("en-US", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
                hour: "2-digit",
                minute: "2-digit",
              })}
            </p>
            <div style="margin-top: 15px;">
              <a href="mailto:${data.email}?subject=Re: ${data.subject}" 
                 style="background: #8B5CF6; color: white; padding: 10px 20px; text-decoration: none; border-radius: 6px; display: inline-block; font-weight: 500;">
                Reply to ${data.name}
              </a>
            </div>
          </div>

        </body>
        </html>
      `,
    })

    // Send auto-reply to the person who contacted you
    const autoReply = await resend.emails.send({
      from: "Yussef Ahmed <yussefhilmey@outlook.com>", // Replace with your verified domain
      to: [data.email],
      subject: "Thank you for contacting me!",
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Thank you for your message</title>
        </head>
        <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
          
          <div style="background: linear-gradient(135deg, #8B5CF6 0%, #06B6D4 100%); padding: 30px; border-radius: 12px; text-align: center; margin-bottom: 30px;">
            <h1 style="color: white; margin: 0; font-size: 28px; font-weight: 700;">Thank You!</h1>
            <p style="color: rgba(255,255,255,0.9); margin: 10px 0 0 0; font-size: 16px;">I've received your message</p>
          </div>

          <div style="background: white; border: 1px solid #e2e8f0; border-radius: 12px; padding: 30px; margin-bottom: 20px;">
            <p style="margin: 0 0 20px 0; font-size: 16px; color: #1e293b;">Hi <strong>${data.name}</strong>,</p>
            
            <p style="margin: 0 0 20px 0; color: #475569; line-height: 1.6;">
              Thank you for reaching out through my portfolio website! I've received your message about "<strong>${data.subject}</strong>" and I really appreciate you taking the time to contact me.
            </p>
            
            <p style="margin: 0 0 20px 0; color: #475569; line-height: 1.6;">
              I'll review your message carefully and get back to you as soon as possible, typically within 24-48 hours. If your inquiry is urgent, feel free to reach out to me directly.
            </p>

            <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 20px; margin: 20px 0;">
              <h3 style="margin: 0 0 10px 0; color: #1e293b; font-size: 16px;">Your Message Summary:</h3>
              <p style="margin: 5px 0; color: #64748b;"><strong>Subject:</strong> ${data.subject}</p>
              <p style="margin: 5px 0; color: #64748b;"><strong>Sent:</strong> ${new Date().toLocaleDateString()}</p>
            </div>
            
            <p style="margin: 20px 0; color: #475569; line-height: 1.6;">
              In the meantime, feel free to check out my latest projects or connect with me on social media:
            </p>

            <div style="text-align: center; margin: 30px 0;">
              <a href="https://github.com/LilYussef" style="display: inline-block; margin: 0 10px; padding: 12px 24px; background-color: #1f2937; color: white; text-decoration: none; border-radius: 8px; font-weight: 500;">GitHub</a>
              <a href="https://www.linkedin.com/in/yussef-ahmed-3bb294343/" style="display: inline-block; margin: 0 10px; padding: 12px 24px; background-color: #0077b5; color: white; text-decoration: none; border-radius: 8px; font-weight: 500;">LinkedIn</a>
            </div>
            
            <p style="margin: 20px 0 0 0; color: #475569; line-height: 1.6;">
              Best regards,<br>
              <strong style="color: #1e293b;">Yussef Ahmed</strong><br>
              <span style="color: #64748b;">Full-Stack Developer & Penteration Tester</span>
            </p>
          </div>

          <div style="text-align: center; padding: 20px; background: #f8fafc; border-radius: 12px; border: 1px solid #e2e8f0;">
            <p style="margin: 0; color: #64748b; font-size: 12px;">
              This is an automated response. Please don't reply to this email directly.
            </p>
          </div>

        </body>
        </html>
      `,
    })

    return {
      success: true,
      message: "Email sent successfully!",
      emailId: emailToYou.data?.id,
    }
  } catch (error) {
    console.error("Error sending email:", error)
    return {
      success: false,
      message: "Failed to send email. Please try again.",
      error: error,
    }
  }
}
