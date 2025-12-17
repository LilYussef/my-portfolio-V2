"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Code, Palette, Shield, Zap, Globe, Database } from "lucide-react"

const services = [
  {
    icon: Code,
    title: "Frontend Development",
    description:
      "Creating responsive, interactive, and performant user interfaces using modern frameworks like React, Vue, and Next.js.",
    features: ["React & Next.js", "TypeScript", "Responsive Design", "Performance Optimization"],
  },
  {
    icon: Database,
    title: "Backend Development",
    description:
      "Building robust server-side applications, APIs, and database architectures that scale with your business needs.",
    features: ["Node.js & Python", "RESTful APIs", "Database Design", "Cloud Integration"],
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Designing intuitive and beautiful user experiences that engage users and drive conversions.",
    features: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
  },
  {
    icon: Shield,
    title: "CyberSecurity",
    description:
      "Build apps with high level of security and high privacy for your data.",
    features: ["Burb Suite", "Web PenTesting", "Network PenTesting", "Android Bug Hunting"],
  },
  {
    icon: Globe,
    title: "Web Applications",
    description:
      "Building full-stack web applications from concept to deployment with modern technologies and best practices.",
    features: ["Full-Stack Development", "Progressive Web Apps", "Real-time Features", "SEO Optimization"],
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description:
      "Optimizing applications for speed, accessibility, and search engine rankings to maximize user engagement.",
    features: ["Core Web Vitals", "Accessibility", "SEO", "Code Splitting"],
  },
]

export default function ServicesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="services" className="py-20 lg:py-32 relative bg-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            I offer comprehensive digital solutions to help bring your ideas to life. From concept to deployment, I'll
            work with you every step of the way.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                whileHover={{ y: -10 }}
                className="group relative bg-[#2a2a2a]/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-500"
              >
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-cyan-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Icon */}
                <motion.div whileHover={{ scale: 1.1, rotate: 5 }} className="relative mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-600/20 to-cyan-600/20 rounded-2xl flex items-center justify-center group-hover:from-purple-600/30 group-hover:to-cyan-600/30 transition-all duration-300">
                    <Icon className="w-8 h-8 text-purple-400 group-hover:text-purple-300 transition-colors duration-300" />
                  </div>
                </motion.div>

                {/* Content */}
                <div className="relative">
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors duration-300">
                    {service.title}
                  </h3>

                  <p className="text-gray-400 leading-relaxed mb-6">{service.description}</p>

                  {/* Features */}
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <motion.li
                        key={feature}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.4, delay: 0.2 + index * 0.1 + featureIndex * 0.05 }}
                        className="flex items-center text-sm text-gray-300"
                      >
                        <div className="w-1.5 h-1.5 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full mr-3" />
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-600/10 to-cyan-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </motion.div>
            )
          })}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16 p-8 bg-gradient-to-r from-purple-900/20 to-cyan-900/20 rounded-2xl border border-gray-700/50"
        >
          <h3 className="text-2xl font-bold text-white mb-4">Ready to Start Your Project?</h3>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            Let's discuss how I can help bring your vision to life. I'm always excited to work on new challenges and
            create something amazing together.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
            className="px-8 py-3 bg-gradient-to-r from-purple-600 to-cyan-600 text-white rounded-full font-medium hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-purple-500/25"
          >
            Get In Touch
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
