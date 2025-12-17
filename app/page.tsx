"use client"

import { useEffect, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Navigation from "@/components/navigation"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import ProjectsSection from "@/components/projects-section"
import ServicesSection from "@/components/services-section"
import TestimonialsSection from "@/components/testimonials-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"

export default function Portfolio() {
  const [mounted, setMounted] = useState(false)
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="bg-[#212121] text-white overflow-x-hidden">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 z-50 origin-left"
        style={{ scaleX: scrollYProgress }}
      />

      <Navigation />

      {/* Animated Background */}
      <motion.div className="fixed inset-0 opacity-20 pointer-events-none" style={{ opacity }}>
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-cyan-900/20" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </motion.div>

      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ServicesSection />
        <TestimonialsSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  )
}
