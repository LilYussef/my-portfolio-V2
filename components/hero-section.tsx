"use client"

import { motion } from "framer-motion"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  const scrollToAbout = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" })
  }

  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })
  }

  const scrollToProjects = () => {
    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 sm:px-6 lg:px-8"
    >
      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.1)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
      </div>

      <div className="max-w-7xl mx-auto text-center relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6 sm:space-y-8 py-24"
        >
          {/* Greeting */}
          

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold leading-tight"
          >
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent leading-4">
              Yussef Ahmed
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-gray-300 font-light px-4"
          >
            FullStack Developer & Penteration Tester
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed px-4"
          >
            I build secure, high performance digital solutions by combining advanced full-stack development with a security first mindset. Specializing in modern web technologies and penetration testing.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4"
          >
            <Button
              onClick={scrollToContact}
              size="lg"
              className="w-full sm:w-auto bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"
            >
              Get In Touch
            </Button>
            <Button
              onClick={scrollToProjects}
              variant="outline"
              size="lg"
              className="w-full sm:w-auto border-gray-600 text-gray-300 hover:bg-gray-700 px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 bg-transparent"
            >
              View My Work
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="flex justify-center space-x-4 sm:space-x-6 pt-6 sm:pt-8 px-4"
          >
            {[
              { icon: Github, href: "https://github.com/LilYussef", label: "GitHub" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/yussef-ahmed-3bb294343/", label: "LinkedIn" },
              { icon: Mail, href: "mailto:yussefhilmey@outlook.com", label: "Email" },
            ].map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 rounded-full bg-gray-700/50 backdrop-blur-sm border border-gray-600/50 text-gray-400 hover:text-white hover:bg-gray-600/50 transition-all duration-300"
              >
                <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                <span className="sr-only">{label}</span>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.button
            onClick={scrollToAbout}
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            className="p-2 rounded-full border border-gray-600 text-gray-400 hover:text-white hover:border-gray-400 transition-colors duration-300"
          >
            <ArrowDown className="w-5 h-5 sm:w-6 sm:h-6" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
