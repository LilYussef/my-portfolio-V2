"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { ArrowUp, Github, Linkedin, Instagram, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const scrollToSection = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" })
  }

  const socialLinks = [
    { icon: Github, href: "https://github.com/LilYussef", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/yussef-ahmed-3bb294343/", label: "LinkedIn" },
    { icon: Instagram, href: "https://www.instagram.com/yussef__helmy/", label: "Instagram" },
    { icon: Mail, href: "mailto:yussefhilmey@outlook.com", label: "Email" },
  ]

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <footer className="relative bg-[#212121] border-t border-gray-700/50">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Yussef Ahmed
              </h3>
              <p className="text-gray-400 leading-relaxed max-w-md">
                Senior Full-Stack Developer and Penetration Tester passionate about building secure, scalable digital solutions. Let’s create systems that are powerful, resilient, and trusted.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-2 bg-gray-700/50 backdrop-blur-sm border border-gray-600/50 rounded-lg text-gray-400 hover:text-white hover:border-purple-500/50 transition-all duration-300"
                  >
                    <Icon className="w-5 h-5" />
                    <span className="sr-only">{label}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Quick Links */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Services */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h4 className="text-white font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Frontend Development</li>
                <li>Backend Development</li>
                <li>UI/UX Design</li>
                <li>Software Development</li>
                <li>Web Applications</li>
                <li>Penetration Testing</li>
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="pt-8 border-t border-gray-800/50 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
        >
          <div className="flex items-center space-x-2 text-gray-400 text-sm">
            <span>© {new Date().getFullYear()} Yussef Ahmed. All Rights Resived</span>
          </div>

          <div className="flex items-center space-x-6 text-sm text-gray-400">
            <a href="/privacy-policy" className="hover:text-white transition-colors duration-200">
              Privacy Policy
            </a>
            <a href="/terms-of-service" className="hover:text-white transition-colors duration-200">
              Terms of Service
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll to Top Button */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{
          opacity: showScrollTop ? 1 : 0,
          scale: showScrollTop ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
        className="fixed bottom-8 right-8 z-50"
      >
        <Button
          onClick={scrollToTop}
          size="icon"
          className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white rounded-full shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
        >
          <ArrowUp className="w-5 h-5" />
        </Button>
      </motion.div>
    </footer>
  )
}
