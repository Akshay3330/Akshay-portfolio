"use client"

import { motion } from "framer-motion"
import { GraduationCap, School, Briefcase, Code2 } from "lucide-react"

type Step = {
  icon: any
  title: string
  subtitle?: string
  period?: string
  description: string | string[]
  color: string
}

export function Edu() {
  const steps: Step[] = [
    {
      icon: School,
      title: "Higher Secondary – GSEB",
      subtitle: "Completed HSC",
      period: "2021",
      description:
        "Built a strong base in math & logical thinking; discovered an interest in UI/UX and web technologies.",
      color: "from-sky-500 to-cyan-500",
    },
    {
      icon: GraduationCap,
      title: "Bachelor of Computer Application (BCA)",
      subtitle: "Saurashtra University",
      period: "2021 – 2024",
      description: [
        "Core subjects: DS, OOP, DBMS, OS, Networking, Web Dev.",
        "Focused on React fundamentals, component architecture & clean UI.",
      ],
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Briefcase,
      title: "Front-End Developer",
      subtitle: "NewStar Infotech",
      period: "2024 – Present",
      description: [
        "Crafting responsive, high-performance UIs for ERP & SaaS (NSAlign).",
        "Figma → React conversion with pixel-perfect layouts.",
        "REST API integration, state management, reusable components.",
      ],
      color: "from-emerald-500 to-green-600",
    },
    {
      icon: Code2,
      title: "Key Work Highlights",
      subtitle: "Products & Skills",
      period: "Ongoing",
      description: [
        "ERP UI modules: Tasks, Kanban, Reports, User/Project flows.",
        "Tech stack: React, TypeScript/JS (ES6+), Tailwind/Bootstrap, HTML5/CSS3.",
        "Tools: Git/GitHub, VS Code, DevTools; focus on accessibility & performance.",
      ],
      color: "from-orange-500 to-red-500",
    },
  ]

  return (
    <section id="process" className="py-24 bg-/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-sora font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground mb-4">
            My Study Journey & Experience
          </h2>
          <p className="font-inter text-lg text-muted-foreground max-w-3xl mx-auto">
            From foundation in computer science to building real-world ERP & SaaS interfaces—here’s a quick timeline.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-primary/20 via-primary to-primary/20 hidden lg:block" />

          <div className="space-y-16 lg:space-y-24">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className={`flex flex-col lg:flex-row items-center gap-8 ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Card */}
                <div className="flex-1 text-center lg:text-left">
                  <div className="bg-card border border-border rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className="flex items-center justify-center lg:justify-start gap-3 mb-2">
                      <h3 className="font-sora font-bold text-2xl text-card-foreground">{step.title}</h3>
                      {step.period && (
                        <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary font-medium">
                          {step.period}
                        </span>
                      )}
                    </div>
                    {step.subtitle && (
                      <p className="font-inter text-sm text-muted-foreground mb-3">{step.subtitle}</p>
                    )}

                    {Array.isArray(step.description) ? (
                      <ul className="font-inter text-muted-foreground leading-relaxed list-disc pl-5 space-y-1 text-left">
                        {step.description.map((d) => (
                          <li key={d}>{d}</li>
                        ))}
                      </ul>
                    ) : (
                      <p className="font-inter text-muted-foreground leading-relaxed">{step.description}</p>
                    )}
                  </div>
                </div>

                {/* Icon badge */}
                <div className="relative">
                  <div className={`w-20 h-20 rounded-full bg-gradient-to-r ${step.color} p-0.5`}>
                    <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                      <step.icon className="h-8 w-8 text-foreground" />
                    </div>
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                </div>

                {/* Spacer to keep zig-zag layout */}
                <div className="flex-1 hidden lg:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
