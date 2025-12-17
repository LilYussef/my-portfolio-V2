"use server"

import { sendEmail } from "@/lib/email"

export async function submitContactForm(formData: FormData) {
  try {
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      subject: formData.get("subject") as string,
      message: formData.get("message") as string,
    }

    // Basic validation
    if (!data.name || !data.email || !data.subject || !data.message) {
      return {
        success: false,
        message: "Please fill in all required fields.",
      }
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(data.email)) {
      return {
        success: false,
        message: "Please enter a valid email address.",
      }
    }

    // Send email
    const result = await sendEmail(data)

    if (result.success) {
      return {
        success: true,
        message: "Thank you for your message! I'll get back to you soon.",
      }
    } else {
      return {
        success: false,
        message: result.message,
      }
    }
  } catch (error) {
    console.error("Contact form error:", error)
    return {
      success: false,
      message: "Something went wrong. Please try again later.",
    }
  }
}
