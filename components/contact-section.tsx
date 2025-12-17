"use client"

import { useState, useRef, FormEvent } from "react"
import { motion, useInView } from "framer-motion"
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import emailjs from "@emailjs/browser"

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null
    message: string
  }>({ type: null, message: "" })

  const sectionRef = useRef<HTMLDivElement | null>(null)
  const formRef = useRef<HTMLFormElement | null>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (!formRef.current) return

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY

    if (!serviceId || !templateId || !publicKey) {
      setSubmitStatus({
        type: "error",
        message: "Email service is not configured. Please try again later.",
      })
      return
    }

    setIsSubmitting(true)
    setSubmitStatus({ type: null, message: "" })

    try {
      const result = await emailjs.sendForm(serviceId, templateId, formRef.current, publicKey)

      if (result.status === 200) {
        setSubmitStatus({
          type: "success",
          message: "Message sent successfully!",
        })
        // Reset the form after successful send
        formRef.current.reset()
      } else {
        setSubmitStatus({
          type: "error",
          message: "Failed to send message. Please try again later.",
        })
      }
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "Something went wrong. Please try again later.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "yussefhilmey@outlook.com",
      href: "mailto:yussefhilmey@outlook.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+20 (109) 579-8212",
      href: "tel:+201095798212",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Alexandria, Egypt",
      href: "https://maps.app.goo.gl/8z6UxkGzyF1Gg3ww6?g_st=ac",
    },
]

  return (
    <section id="contact" className="py-20 lg:py-32 relative bg-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={sectionRef}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Ready to start your next project? I'd love to hear from you. Send me a message and I'll respond as soon as
            possible.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-[#2a2a2a]/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 relative overflow-hidden">
              {/* Background Decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-600/10 to-cyan-600/10 rounded-full blur-3xl" />

              {/* Status Message */}
              {submitStatus.type && (
                <motion.div
                  initial={{ opacity: 0, y: -10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  className={`mb-6 p-4 rounded-xl flex items-start gap-3 ${
                    submitStatus.type === "success"
                      ? "bg-green-900/20 border border-green-700/50"
                      : "bg-red-900/20 border border-red-700/50"
                  }`}
                >
                  {submitStatus.type === "success" ? (
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  ) : (
                    <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                  )}
                  <div>
                    <p
                      className={`text-sm font-medium ${
                        submitStatus.type === "success" ? "text-green-300" : "text-red-300"
                      }`}
                    >
                      {submitStatus.type === "success" ? "Message Sent!" : "Error"}
                    </p>
                    <p
                      className={`text-sm mt-1 ${submitStatus.type === "success" ? "text-green-200" : "text-red-200"}`}
                    >
                      {submitStatus.message}
                    </p>
                  </div>
                </motion.div>
              )}

              <form
                id="contact-form"
                ref={formRef}
                onSubmit={onSubmit}
                className="space-y-6 relative z-10"
              >
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      disabled={isSubmitting}
                      className="bg-gray-700/50 border-gray-600 text-white placeholder-gray-400 focus:border-purple-500 focus:ring-purple-500 disabled:opacity-50 transition-all duration-200"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      disabled={isSubmitting}
                      className="bg-gray-700/50 border-gray-600 text-white placeholder-gray-400 focus:border-purple-500 focus:ring-purple-500 disabled:opacity-50 transition-all duration-200"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                    Subject *
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    disabled={isSubmitting}
                    className="bg-gray-700/50 border-gray-600 text-white placeholder-gray-400 focus:border-purple-500 focus:ring-purple-500 disabled:opacity-50 transition-all duration-200"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    disabled={isSubmitting}
                    className="bg-gray-700/50 border-gray-600 text-white placeholder-gray-400 focus:border-purple-500 focus:ring-purple-500 resize-none disabled:opacity-50 transition-all duration-200"
                    placeholder="Tell me about your project, ideas, or just say hello..."
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white py-3 rounded-full transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none disabled:hover:scale-100"
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center">
                      <Loader2 className="w-5 h-5 animate-spin mr-2" />
                      Sending Message...
                    </div>
                  ) : (
                    <div className="flex items-center justify-center">
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </div>
                  )}
                </Button>

                <p className="text-xs text-gray-500 text-center">I'll get back to you within 24-48 hours</p>
              </form>
            </div>
          </motion.div>

          {/* Contact Info & Map - keeping the existing code */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Contact Information */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>

              {contactInfo.map((info, index) => {
                const Icon = info.icon
                return (
                  <motion.a
                    key={info.label}
                    href={info.href}
                    target={info.href.startsWith("http") ? "_blank" : undefined}
                    rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                    whileHover={{ x: 10 }}
                    className="flex items-center space-x-4 p-4 bg-gray-700/30 backdrop-blur-sm border border-gray-600/50 rounded-xl hover:border-purple-500/50 transition-all duration-300 group"
                  >
                    <div className="p-3 bg-gradient-to-br from-purple-600/20 to-cyan-600/20 rounded-lg group-hover:from-purple-600/30 group-hover:to-cyan-600/30 transition-all duration-300">
                      <Icon className="w-6 h-6 text-purple-400 group-hover:text-purple-300 transition-colors duration-300" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">{info.label}</p>
                      <p className="text-white font-medium">{info.value}</p>
                    </div>
                  </motion.a>
                )
              })}
            </div>

            {/* Interactive Map */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="relative h-64 bg-gray-700/50 backdrop-blur-sm border border-gray-600/50 rounded-2xl overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-cyan-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Map Placeholder with Animation */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-purple-400 mx-auto mb-4 animate-bounce" />
                  <p className="text-white font-medium mb-2">Alexandria, Egypt</p>
                  <p className="text-gray-400 text-sm">Available for remote work worldwide</p>
                </div>
              </div>

              {/* Animated Grid Overlay */}
              <div className="absolute inset-0 opacity-20">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.1)_1px,transparent_1px)] bg-[size:20px_20px]" />
              </div>
            </motion.div>

            {/* Availability Status */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1 }}
              className="p-6 bg-gradient-to-r from-green-900/20 to-emerald-900/20 border border-green-800/50 rounded-xl"
            >
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                <div>
                  <p className="text-white font-medium">Available for new projects</p>
                  <p className="text-gray-400 text-sm">Usually responds within 24 hours</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
