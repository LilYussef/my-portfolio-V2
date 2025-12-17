"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Code, Palette, Computer, Shield } from "lucide-react"

export default function AboutSection() {
  const [showAllTechnologies, setShowAllTechnologies] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const skills = [
    { name: "Web Development", level: 95, icon: Code },
    { name: "UI/UX Design", level: 98, icon: Palette },
    { name: "Software Development", level: 85, icon: Computer },
    { name: "Cyber Security", level: 88, icon: Shield },
  ]

  const allTechnologies = [
    "React",
    "Next.JS",
    "TypeScript",
    "Node.JS",
    "Python",
    "MySQL",
    "MongoDB",
    "AWS",
    "Docker",
    "Figma",
    "Tailwind CSS",
    "Framer Motion",
    "Vue.JS",
    "Angular",
    "Express.JS",
    "GraphQL",
    "C/C++",
    "Java",
    "Firebase",
    "Supabase",
    "C#",
    "Laravel",
    "PHP",
    "JavaScript",
    "Vite",
    "Sass",
    "Rust",
    "SQLite",
    "Burb Suite",
    "Metasploit",
    "Wireshark",
    "Kali Linux",
    "Nmap",
    "OWASP ZAP",
    "Aircrack-ng",
    "John the Ripper",
    "Hydra",
    "Arpspoof",
    "Sqlmap",
    "DHCPig",
    "Netcat",
    "Tor",
    "Metasploitable 3",
    "TCPDump",
    "Networks"
  ]

  const displayedTechnologies = showAllTechnologies ? allTechnologies : allTechnologies.slice(0, 12)

  return (
    <section id="about" className="py-20 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">About Me</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            I’m a Senior FullStack Developer and Penetration Tester with a strong passion for building secure, scalable, and high performance systems. I combine deep development expertise with a security first mindset, which allows me to design applications that are not only functional and elegant, but also resilient against real world attacks.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Story */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="prose prose-lg prose-invert">
              <p className="text-gray-300 leading-relaxed">
                On the development side, I work across the full stack from crafting clean, responsive front-end interfaces to architecting robust back-end systems and databases. I focus heavily on code quality, maintainability, and performance, following best practices and modern design patterns.
              </p>
              <p className="text-gray-300 leading-relaxed">
                As a Penetration Tester, I specialize in identifying vulnerabilities, analyzing attack surfaces, and simulating real adversary behavior to help organizations understand and reduce their security risks. I’m experienced in web application security, authentication flaws, misconfigurations, and exploitation techniques, always aligning my work with ethical standards and responsible disclosure.
              </p>
              <p className="text-gray-300 leading-relaxed">
                I believe that security should be built in, not bolted on, and my unique blend of development and offensive security skills allows me to bridge the gap between developers and security teams delivering solutions that are both powerful and secure.
              </p>
            </div>

            {/* Technologies */}
            <div className="pt-8">
              <h3 className="text-xl font-semibold mb-4 text-white">Technologies I Love</h3>
              <div className="flex flex-wrap gap-3 mb-4">
                {displayedTechnologies.map((tech, index) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.05 }}
                    className="px-4 py-2 bg-gray-700/50 backdrop-blur-sm border border-gray-600/50 rounded-full text-sm text-gray-300 hover:text-white hover:border-purple-500/50 transition-all duration-300"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>

              {allTechnologies.length > 12 && (
                <motion.button
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  onClick={() => setShowAllTechnologies(!showAllTechnologies)}
                  className="text-purple-400 hover:text-purple-300 text-sm font-medium transition-colors duration-200 flex items-center gap-2"
                >
                  {showAllTechnologies ? "Show Less" : `Show More (${allTechnologies.length - 12} more)`}
                  <motion.span animate={{ rotate: showAllTechnologies ? 180 : 0 }} transition={{ duration: 0.3 }}>
                    ↓
                  </motion.span>
                </motion.button>
              )}
            </div>
          </motion.div>

          {/* Right Column - Skills */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-semibold mb-8 text-white">Skills & Expertise</h3>

            {skills.map((skill, index) => {
              const Icon = skill.icon
              return (
                <div key={skill.name} className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 rounded-lg">
                        <Icon className="w-5 h-5 text-purple-400" />
                      </div>
                      <span className="text-white font-medium">{skill.name}</span>
                    </div>
                    <span className="text-gray-400 text-sm">{skill.level}%</span>
                  </div>

                  <div className="relative h-2 bg-gray-700 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${skill.level}%` } : {}}
                      transition={{ duration: 1.5, delay: 0.6 + index * 0.2, ease: "easeOut" }}
                      className="absolute top-0 left-0 h-full bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-full animate-pulse" />
                  </div>
                </div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
