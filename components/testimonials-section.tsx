"use client"

import { useState, useRef, useEffect } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CEO, TechStart Inc.",
    company: "TechStart Inc.",
    image: "/placeholder.svg?height=80&width=80",
    content:
      "Alex delivered an exceptional e-commerce platform that exceeded our expectations. The attention to detail, performance optimization, and user experience were outstanding. Our conversion rates increased by 40% after launch.",
    rating: 5,
    project: "E-Commerce Platform",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Product Manager",
    company: "InnovateLab",
    image: "/placeholder.svg?height=80&width=80",
    content:
      "Working with Alex was a game-changer for our startup. He not only built our MVP but also provided valuable insights on user experience and scalability. The project was delivered on time and within budget.",
    rating: 5,
    project: "SaaS Dashboard",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Marketing Director",
    company: "Creative Agency",
    image: "/placeholder.svg?height=80&width=80",
    content:
      "Alex transformed our outdated website into a modern, responsive masterpiece. The new design not only looks amazing but also improved our SEO rankings and user engagement significantly.",
    rating: 5,
    project: "Website Redesign",
  },
  {
    id: 4,
    name: "David Thompson",
    role: "Founder",
    company: "HealthTech Solutions",
    image: "/placeholder.svg?height=80&width=80",
    content:
      "The mobile app Alex developed for us has been a huge success. His expertise in React Native and attention to user experience resulted in a 4.8-star rating on both app stores.",
    rating: 5,
    project: "Mobile App Development",
  },
  {
    id: 5,
    name: "Lisa Wang",
    role: "CTO",
    company: "DataFlow Systems",
    image: "/placeholder.svg?height=80&width=80",
    content:
      "Alex built a complex analytics dashboard that handles millions of data points seamlessly. His technical expertise and problem-solving skills are truly impressive.",
    rating: 5,
    project: "Analytics Platform",
  },
]

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index)
    setIsAutoPlaying(false)
  }

  return (
    <section id="testimonials" className="py-20 lg:py-32 relative">
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
              Client Testimonials
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Don't just take my word for it. Here's what my clients have to say about working with me and the results
            we've achieved together.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Main Testimonial Display */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative bg-[#2a2a2a]/50 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-8 md:p-12 overflow-hidden"
          >
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-600/10 to-cyan-600/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-cyan-600/10 to-purple-600/10 rounded-full blur-2xl" />

            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="relative z-10"
              >
                {/* Quote Icon */}
                <Quote className="w-12 h-12 text-purple-400/50 mb-6" />

                {/* Testimonial Content */}
                <blockquote className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8">
                  "{testimonials[currentIndex].content}"
                </blockquote>

                {/* Rating */}
                <div className="flex items-center mb-6">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Client Info */}
                <div className="flex items-center space-x-4">
                  <Image
                    src={testimonials[currentIndex].image || "/placeholder.svg"}
                    alt={testimonials[currentIndex].name}
                    width={80}
                    height={80}
                    className="w-16 h-16 rounded-full object-cover border-2 border-gray-700"
                  />
                  <div>
                    <h4 className="text-white font-semibold text-lg">{testimonials[currentIndex].name}</h4>
                    <p className="text-gray-400">{testimonials[currentIndex].role}</p>
                    <p className="text-purple-400 text-sm">{testimonials[currentIndex].company}</p>
                  </div>
                  <div className="ml-auto text-right">
                    <p className="text-sm text-gray-500">Project:</p>
                    <p className="text-cyan-400 font-medium">{testimonials[currentIndex].project}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between mt-8">
            <Button
              onClick={prevTestimonial}
              variant="outline"
              size="icon"
              className="border-gray-600 text-gray-400 hover:text-white hover:border-gray-400 rounded-full bg-transparent"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>

            {/* Dots Indicator */}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "bg-gradient-to-r from-purple-500 to-cyan-500 scale-125"
                      : "bg-gray-600 hover:bg-gray-500"
                  }`}
                />
              ))}
            </div>

            <Button
              onClick={nextTestimonial}
              variant="outline"
              size="icon"
              className="border-gray-600 text-gray-400 hover:text-white hover:border-gray-400 rounded-full bg-transparent"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>

          {/* Auto-play Indicator */}
          <div className="text-center mt-4">
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className="text-sm text-gray-500 hover:text-gray-400 transition-colors duration-200"
            >
              {isAutoPlaying ? "Pause" : "Resume"} auto-play
            </button>
          </div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-gray-800/50"
        >
          {[
            { number: "50+", label: "Projects Completed" },
            { number: "30+", label: "Happy Clients" },
            { number: "5", label: "Years Experience" },
            { number: "98%", label: "Client Satisfaction" },
          ].map((stat, index) => (
            <div key={stat.label} className="text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-2"
              >
                {stat.number}
              </motion.div>
              <p className="text-gray-400 text-sm">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
