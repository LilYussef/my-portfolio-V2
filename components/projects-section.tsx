"use client"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { ExternalLink, Github, Filter } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const allProjects = [
  {
    id: 1,
    title: "Insurance Platform",
    description:
      "A sleek, dark-themed UI featuring smooth animations, dynamic pricing, and responsive design built with static data and localStorage.",
    image: "/Images/Yhelix Insurance.png",
    technologies: ["Tailwind CSS", "Next.js", "Framer Motion", "shadcn/ui"],
    category: "Frontend",
    github: "https://github.com/LilYussef/InsuranceSite",
    live: "https://yhelixinsurance.netlify.app/",
    featured: false,
  },
  {
    id: 2,
    title: "Secure Messaging Site",
    description:
      "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
    image: "/Images/SY TEAM.png",
    technologies: ["React", "TypeScript", "Vite", "Tailwind CSS"],
    category: "Frontend",
    github: "https://github.com/LilYussef/securemessaging",
    live: "https://securemessaging.netlify.app/",
    featured: false,
  },
  {
    id: 3,
    title: "Analytics Dashboard",
    description:
      "A comprehensive analytics dashboard with real-time data visualization, custom reports, and export functionality.",
    image: "/images/SaaS Analytics Dashboard.png",
    technologies: ["Next.js", "Firebase", "Tailwind CSS"],
    category: "Full-Stack",
    github: "https://github.com",
    live: "https://example.com",
    featured: true,
  },
  {
    id: 4,
    title: "Cyber Security AI",
    description:
      "A RESTful API for a social media platform with user authentication, post management, and real-time messaging capabilities.",
    image: "/images/PhishGuard AI.png",
    technologies: ["Next.js", "N8N", "WebHook", "Tailwind CSS"],
    category: "Full-Stack",
    github: "https://github.com",
    live: "https://example.com",
    featured: true,
  },
  {
    id: 5,
    title: "Cryptocurrency Tracker",
    description: "A crypto portfolio tracker with real-time price updates, news integration, and advanced charting capabilities.",
    image: "/images/CryptoTracker.png",
    technologies: ["Next.js", "Node.js", "CoinGecko API", "Chart.js"],
    category: "Frontend",
    featured: true,
  },
  {
    id: 6,
    title: "VR Online Classroom",
    description:
      "A VR classroom project built with Unity that provides an interactive learning experience with a built-in LMS for students and lecturers.",
    image: "/images/VR.jpg",
    technologies: ["C#", "Firebase", "Unity Engine", "Meta Quest 3s"],
    category: "Game Development",
    github: "https://github.com/LilYussef/VR-Classroom-Using-Unity-Engine",
    featured: false,
  }
]

const categories = ["All", "Frontend", "Backend", "Full-Stack", "CyberSecurity"]

export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [showAllProjects, setShowAllProjects] = useState(false)

  const baseFilteredProjects =
    activeCategory === "All" ? allProjects : allProjects.filter((project) => project.category === activeCategory)
  const filteredProjects = showAllProjects ? baseFilteredProjects : baseFilteredProjects.slice(0, 6)

  return (
    <section id="projects" className="py-20 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Here are selected projects that showcase my expertise, focusing on performance, scalability, and security.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          <Filter className="w-5 h-5 text-gray-400 mt-2" />
          {categories.map((category) => (
            <Button
              key={category}
              onClick={() => setActiveCategory(category)}
              variant={activeCategory === category ? "default" : "outline"}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                activeCategory === category
                  ? "bg-gradient-to-r from-purple-600 to-cyan-600 text-white"
                  : "border-gray-600 text-gray-400 hover:text-white hover:border-gray-400"
              }`}
            >
              {category}
            </Button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              onHoverStart={() => setHoveredProject(project.id)}
              onHoverEnd={() => setHoveredProject(null)}
              className="group relative bg-[#2a2a2a]/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl overflow-hidden hover:border-purple-500/50 transition-all duration-500"
              style={{
                transform: hoveredProject === project.id ? "translateY(-10px)" : "translateY(0)",
              }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60" />

                {/* Overlay Links */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/50">
                  <div className={project.id === 6 ? "flex items-center justify-center" : "flex space-x-4"}>
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-3 bg-gray-800/80 backdrop-blur-sm rounded-full text-white hover:bg-gray-700/80 transition-colors duration-200"
                    >
                      <Github className="w-5 h-5" />
                    </motion.a>
                    {project.id !== 6 && (
                      <motion.a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-3 bg-purple-600/80 backdrop-blur-sm rounded-full text-white hover:bg-purple-700/80 transition-colors duration-200"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </motion.a>
                    )}
                  </div>
                </div>

                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-gradient-to-r from-purple-600 to-cyan-600 text-white text-xs font-medium rounded-full">
                      In Progress
                    </span>
                  </div>
                )}
                
              </div>

              {/* Project Info */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-purple-400 font-medium">{project.category}</span>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors duration-200">
                  {project.title}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed mb-4">{project.description}</p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-700/50 text-gray-300 text-xs rounded-full border border-gray-600/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          {baseFilteredProjects.length > 6 && (
            <Button
              onClick={() => setShowAllProjects(!showAllProjects)}
              variant="outline"
              size="lg"
              className="border-gray-600 text-gray-300 hover:bg-gray-800 px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 bg-transparent mr-4"
            >
              {showAllProjects ? "Show Less" : `View All Projects (${baseFilteredProjects.length - 6} more)`}
            </Button>
          )}
          
        </motion.div>
      </div>
    </section>
  )
}
