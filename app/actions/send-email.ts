"use server"

import { sendContactEmail } from "@/lib/resend"

export async function handleContactForm(formData: FormData) {
  try {
    // Extract form data
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      subject: formData.get("subject") as string,
      message: formData.get("message") as string,
    }

    // Validate required fields
    if (!data.name || !data.email || !data.subject || !data.message) {
      return {
        success: false,
        message: "Please fill in all required fields.",
      }
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(data.email)) {
      return {
        success: false,
        message: "Please enter a valid email address.",
      }
    }

    // Validate message length
    if (data.message.length < 10) {
      return {
        success: false,
        message: "Please provide a more detailed message (at least 10 characters).",
      }
    }

    // Send email
    const result = await sendContactEmail(data)

    if (result.success) {
      return {
        success: true,
        message: "Thank you for your message! I'll get back to you soon. 📧",
      }
    } else {
      return {
        success: false,
        message: "Sorry, there was an issue sending your message. Please try again or contact me directly.",
      }
    }
  } catch (error) {
    console.error("Contact form submission error:", error)
    return {
      success: false,
      message: "An unexpected error occurred. Please try again later.",
    }
  }
}
