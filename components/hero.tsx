"use client"

import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"

export function Hero() {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-muted to-card overflow-hidden">
      {/* Background gaming elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 border-2 border-primary rotate-45"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 border-2 border-accent rotate-12"></div>
        <div className="absolute top-1/2 left-10 w-16 h-16 bg-primary/20 rounded-full"></div>
        <div className="absolute top-1/3 right-1/4 w-20 h-20 bg-accent/20 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 text-center z-10">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <p className="text-lg md:text-xl text-accent mb-2">Hello, I'm</p>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Victor Obrist</h2>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance">
            <span className="text-foreground">Game</span> <span className="text-primary">Developer</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 text-pretty">
            {"Crafting immersive experiences and bringing digital worlds to life"}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={scrollToProjects} className="text-lg px-8 py-6">
              View My Work
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="text-lg px-8 py-6"
            >
              Get In Touch
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-muted-foreground" />
      </div>
    </section>
  )
}
