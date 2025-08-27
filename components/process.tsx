"use client"

import { motion } from "framer-motion"
import { Search, Palette, Code2, Rocket } from "lucide-react"

export function Process() {
  const steps = [
    {
      icon: Search,
      title: "Discover",
      description:
        "Understanding your goals, target audience, and project requirements through detailed research and analysis.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Palette,
      title: "Design",
      description:
        "Creating wireframes, prototypes, and visual designs that align with your brand and user experience goals.",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Code2,
      title: "Build",
      description: "Developing robust, scalable applications using modern technologies and following best practices.",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Rocket,
      title: "Ship",
      description:
        "Deploying, testing, and optimizing your application for production with ongoing support and maintenance.",
      color: "from-orange-500 to-red-500",
    },
  ]

  return (
    <section id="process" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-sora font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground mb-4">My Process</h2>
          <p className="font-inter text-lg text-muted-foreground max-w-2xl mx-auto">
            A proven methodology that ensures successful project delivery from concept to launch.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-primary/20 via-primary to-primary/20 hidden lg:block" />

          <div className="space-y-16 lg:space-y-24">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`flex flex-col lg:flex-row items-center gap-8 ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Content */}
                <div className="flex-1 text-center lg:text-left">
                  <div className="bg-card border border-border rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
                    <h3 className="font-sora font-bold text-2xl text-card-foreground mb-4">{step.title}</h3>
                    <p className="font-inter text-muted-foreground leading-relaxed">{step.description}</p>
                  </div>
                </div>

                {/* Icon */}
                <div className="relative">
                  <div className={`w-20 h-20 rounded-full bg-gradient-to-r ${step.color} p-0.5`}>
                    <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                      <step.icon className="h-8 w-8 text-foreground" />
                    </div>
                  </div>

                  {/* Step Number */}
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="flex-1 hidden lg:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
