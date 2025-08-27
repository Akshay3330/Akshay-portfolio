"use client"
import { useState, useEffect } from "react"
import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { Projects } from "@/components/projects"
import { Services } from "@/components/services"
import { Process } from "@/components/process"
import { About } from "@/components/about"
import { OpenSource } from "@/components/open-source"
import { Contact } from "@/components/contact"

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Hero />
        {/* <Projects /> */}
        <Services />
        <Process />
        <About />
        {/* <OpenSource /> */}
        <Contact />
      </main>
    </div>
  )
}
