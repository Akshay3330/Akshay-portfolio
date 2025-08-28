"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react"

export function Hero() {
  const techStack = [
    { name: "React", color: "bg-blue-500" },
    { name: "Vite", color: "bg-purple-500" },
    { name: "Wordpress", color: "bg-blue-600" },
    { name: "Tailwind", color: "bg-cyan-500" },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-primary/20 to-blue-500/20 rounded-full blur-3xl animate-float"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2, delay: 0.5 }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse-slow"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2, delay: 1 }}
        />
        <motion.div
          className="absolute top-1/2 right-1/3 w-48 h-48 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-2xl animate-float"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2, delay: 1.5 }}
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-8">
          {/* Main Heading with Gradient */}
          <motion.h1
            variants={itemVariants}
            className="font-sora font-bold text-4xl sm:text-6xl lg:text-8xl leading-tight"
          >
            <span className="bg-gradient-to-r from-primary via-blue-600 to-purple-600 bg-clip-text text-transparent">
              Mandaviya Akshay
            </span>
          </motion.h1>

          {/* Value Proposition */}
          <motion.div variants={itemVariants} className="space-y-4">
            <p className="font-inter text-xl sm:text-2xl lg:text-3xl text-foreground font-medium">
              I build fast, elegant React apps.
            </p>
            <p className="font-inter text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
              Full-stack developer crafting exceptional user experiences with modern web technologies and
              performance-first approach.
            </p>
          </motion.div>

          {/* Tech Stack Pills */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-3 sm:gap-4">
            {techStack.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.5 + index * 0.1 }}
                className="flex items-center space-x-2 bg-card border border-border rounded-full px-4 py-2 shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <div className={`w-2 h-2 rounded-full ${tech.color}`} />
                <span className="font-inter text-sm font-medium text-card-foreground">{tech.name}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8"
          >
            {/* <Button
              size="lg"
              className="group font-inter font-medium px-8 py-3 text-base"
              onClick={() => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })}
            >
              View My Work
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
            </Button> */}
            <Button
              variant="outline"
              size="lg"
              className="font-inter font-medium px-8 py-3 text-base bg-transparent"
              onClick={() => window.open("/Akshay-CV.pdf", "_blank")}
            >
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants} className="flex justify-center space-x-6 pt-8">
            {[
              { icon: Github, href: "https://github.com/akshay3330", label: "GitHub" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/akshay-m-b54875215?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", label: "LinkedIn" },
              // { icon: Mail, href: "mailto:akshay@example.com", label: "Email" },
            ].map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2 + index * 0.1 }}
                className="p-3 rounded-full bg-card border border-border hover:border-primary hover:bg-primary/5 transition-all duration-200 group"
                aria-label={social.label}
              >
                <social.icon className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors duration-200" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            className="w-1 h-3 bg-muted-foreground rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
