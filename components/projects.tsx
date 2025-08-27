"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, TrendingUp } from "lucide-react"
import { projectsData } from "@/data/projects"

export function Projects() {
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
    <section id="projects" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-sora font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground mb-4">
            Featured Projects
          </h2>
          <p className="font-inter text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work, featuring modern web applications built with cutting-edge technologies.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projectsData.map((project, index) => (
            <motion.div key={project.id} variants={cardVariants} whileHover={{ y: -5 }} transition={{ duration: 0.2 }}>
              <Card className="h-full bg-card border-border hover:border-primary/50 transition-all duration-300 group">
                <div className="relative overflow-hidden rounded-t-2xl">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>

                <CardHeader className="pb-4">
                  <CardTitle className="font-sora text-xl text-card-foreground group-hover:text-primary transition-colors duration-200">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="font-inter text-muted-foreground">{project.description}</CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="font-inter text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {project.businessOutcome && (
                    <div className="flex items-center space-x-2 text-sm text-green-600 dark:text-green-400">
                      <TrendingUp className="h-4 w-4" />
                      <span className="font-inter">{project.businessOutcome}</span>
                    </div>
                  )}

                  <div className="flex space-x-3 pt-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 font-inter bg-transparent"
                      onClick={() => window.open(project.githubUrl, "_blank")}
                    >
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </Button>
                    <Button
                      size="sm"
                      className="flex-1 font-inter"
                      onClick={() => window.open(project.liveUrl, "_blank")}
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
