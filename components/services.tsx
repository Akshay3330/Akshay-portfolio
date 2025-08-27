"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, Zap, Layers, BarChart3 } from "lucide-react"

export function Services() {
  const services = [
    {
      icon: Code,
      title: "UI Engineering",
      description: "Building pixel-perfect, responsive interfaces with React, TypeScript, and modern CSS frameworks.",
      features: ["Component Libraries", "Responsive Design", "Cross-browser Compatibility", "Accessibility (WCAG)"],
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Optimizing web applications for speed, efficiency, and exceptional user experience.",
      features: ["Core Web Vitals", "Bundle Optimization", "Lazy Loading", "Caching Strategies"],
    },
    {
      icon: Layers,
      title: "Design Systems",
      description: "Creating scalable design systems and component libraries for consistent user experiences.",
      features: ["Component Documentation", "Design Tokens", "Style Guides", "Storybook Integration"],
    },
    {
      icon: BarChart3,
      title: "Dashboard Development",
      description: "Building interactive dashboards and data visualization tools for business intelligence.",
      features: ["Real-time Data", "Interactive Charts", "Custom Analytics", "Export Functionality"],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  }

  return (
    <section id="services" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-sora font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground mb-4">Services</h2>
          <p className="font-inter text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive web development services to bring your ideas to life with modern technologies and best
            practices.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <Card className="h-full bg-card border-border hover:border-primary/50 transition-all duration-300 group">
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="p-3 rounded-2xl bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                      <service.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="font-sora text-xl text-card-foreground">{service.title}</CardTitle>
                  </div>
                  <CardDescription className="font-inter text-muted-foreground">{service.description}</CardDescription>
                </CardHeader>

                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center space-x-3 font-inter text-sm text-card-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
