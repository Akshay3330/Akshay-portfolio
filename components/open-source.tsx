"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github, Star, GitFork, ExternalLink } from "lucide-react"

export function OpenSource() {
  const projects = [
    {
      name: "react-performance-toolkit",
      description: "A collection of React performance optimization utilities and hooks.",
      stars: 1247,
      forks: 89,
      language: "TypeScript",
      url: "https://github.com/mandaviya-akshay/react-performance-toolkit",
    },
    {
      name: "vite-plugin-bundle-analyzer",
      description: "Vite plugin for analyzing and visualizing bundle composition.",
      stars: 892,
      forks: 45,
      language: "JavaScript",
      url: "https://github.com/mandaviya-akshay/vite-plugin-bundle-analyzer",
    },
    {
      name: "tailwind-design-tokens",
      description: "Design token system for Tailwind CSS with automatic theme generation.",
      stars: 634,
      forks: 32,
      language: "TypeScript",
      url: "https://github.com/mandaviya-akshay/tailwind-design-tokens",
    },
  ]

  const articles = [
    {
      title: "Building Performant React Applications",
      description: "A comprehensive guide to React performance optimization techniques.",
      readTime: "12 min read",
      url: "https://blog.example.com/react-performance",
    },
    {
      title: "Modern CSS Architecture with Tailwind",
      description: "Best practices for scalable CSS architecture using Tailwind CSS.",
      readTime: "8 min read",
      url: "https://blog.example.com/css-architecture",
    },
    {
      title: "TypeScript Tips for React Developers",
      description: "Advanced TypeScript patterns and techniques for React applications.",
      readTime: "15 min read",
      url: "https://blog.example.com/typescript-react",
    },
  ]

  return (
    <section id="open-source" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-sora font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground mb-4">
            Open Source & Writing
          </h2>
          <p className="font-inter text-lg text-muted-foreground max-w-2xl mx-auto">
            Contributing to the developer community through open-source projects and technical writing.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Open Source Projects */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center space-x-3 mb-8">
              <Github className="h-6 w-6 text-primary" />
              <h3 className="font-sora font-bold text-2xl text-foreground">Open Source Projects</h3>
            </div>

            <div className="space-y-6">
              {projects.map((project, index) => (
                <motion.div
                  key={project.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Card className="bg-card border-border hover:border-primary/50 transition-all duration-300 group">
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between">
                        <CardTitle className="font-sora text-lg text-card-foreground group-hover:text-primary transition-colors duration-200">
                          {project.name}
                        </CardTitle>
                        <Button variant="ghost" size="sm" onClick={() => window.open(project.url, "_blank")}>
                          <ExternalLink className="h-4 w-4" />
                        </Button>
                      </div>
                      <CardDescription className="font-inter text-muted-foreground">
                        {project.description}
                      </CardDescription>
                    </CardHeader>

                    <CardContent className="pt-0">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                          <div className="flex items-center space-x-1">
                            <Star className="h-4 w-4" />
                            <span className="font-inter">{project.stars}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <GitFork className="h-4 w-4" />
                            <span className="font-inter">{project.forks}</span>
                          </div>
                        </div>
                        <Badge variant="outline" className="font-inter text-xs">
                          {project.language}
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Technical Writing */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center space-x-3 mb-8">
              <ExternalLink className="h-6 w-6 text-primary" />
              <h3 className="font-sora font-bold text-2xl text-foreground">Technical Writing</h3>
            </div>

            <div className="space-y-6">
              {articles.map((article, index) => (
                <motion.div
                  key={article.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Card
                    className="bg-card border-border hover:border-primary/50 transition-all duration-300 group cursor-pointer"
                    onClick={() => window.open(article.url, "_blank")}
                  >
                    <CardHeader>
                      <CardTitle className="font-sora text-lg text-card-foreground group-hover:text-primary transition-colors duration-200">
                        {article.title}
                      </CardTitle>
                      <CardDescription className="font-inter text-muted-foreground">
                        {article.description}
                      </CardDescription>
                      <div className="flex items-center justify-between pt-2">
                        <Badge variant="secondary" className="font-inter text-xs">
                          {article.readTime}
                        </Badge>
                        <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors duration-200" />
                      </div>
                    </CardHeader>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
