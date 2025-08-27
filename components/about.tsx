"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, Target, Lightbulb } from "lucide-react"

export function About() {
  const values = [
    {
      icon: Heart,
      title: "Passion-Driven",
      description: "I love what I do and it shows in every line of code I write.",
    },
    {
      icon: Target,
      title: "Results-Focused",
      description: "Every project is an opportunity to deliver measurable business value.",
    },
    {
      icon: Lightbulb,
      title: "Innovation-Minded",
      description: "Always exploring new technologies and approaches to solve problems.",
    },
  ]

  const skills = [
    "React",
    "TypeScript",
    "Next.js",
    "Vite",
    "Tailwind CSS",
    "Node.js",
    "Express",
    "PostgreSQL",
    "MongoDB",
    "GraphQL",
    "AWS",
    "Docker",
    "Git",
    "Jest",
    "Cypress",
  ]

  return (
    <section id="about" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-sora font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground mb-4">About Me</h2>
          <p className="font-inter text-lg text-muted-foreground max-w-2xl mx-auto">
            Get to know the person behind the code and the values that drive my work.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Photo and Story */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="relative">
              <div className="w-64 h-64 mx-auto lg:mx-0 rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-purple-500/20">
                <img src="/Akshay.jpg" alt="Mandaviya Akshay" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                <span className="text-2xl">👋</span>
              </div>
            </div>

            <div className="space-y-4 font-inter text-muted-foreground leading-relaxed">
              <p>
                Hi! I'm Akshay, a passionate full-stack developer with over 3 years of experience building modern web
                applications. I specialize in React ecosystem and love creating user experiences that are both beautiful
                and functional.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or
                sharing my knowledge through technical writing and community involvement.
              </p>
            </div>
          </motion.div>

          {/* Values and Skills */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Values */}
            <div>
              <h3 className="font-sora font-bold text-2xl text-foreground mb-6">My Values</h3>
              <div className="space-y-4">
                {values.map((value, index) => (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <Card className="bg-card border-border hover:border-primary/50 transition-colors duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className="p-2 rounded-lg bg-primary/10">
                            <value.icon className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <h4 className="font-sora font-semibold text-card-foreground mb-2">{value.title}</h4>
                            <p className="font-inter text-sm text-muted-foreground">{value.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Skills */}
            <div>
              <h3 className="font-sora font-bold text-2xl text-foreground mb-6">Technical Skills</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    <Badge
                      variant="secondary"
                      className="font-inter text-sm px-3 py-1 hover:bg-primary/10 hover:text-primary transition-colors duration-200"
                    >
                      {skill}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
