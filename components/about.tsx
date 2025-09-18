"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Download, Gamepad2, Code, Palette } from "lucide-react"

export function About() {
  const handleDownloadCV = () => {
    // In a real app, this would download the actual CV file
    const link = document.createElement("a")
    link.href = "/cv.pdf" // You would replace this with your actual CV file path
    link.download = "Game_Developer_CV.pdf"
    link.click()
  }

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-balance">
            About <span className="text-primary">Me</span>
          </h2>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="w-64 h-64 mx-auto lg:mx-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center">
                <img
                  src="/professional-game-developer-portrait.jpg"
                  alt="Game Developer Portrait"
                  className="w-48 h-48 rounded-full object-cover"
                />
              </div>
            </div>

            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                {
                  "I'm a passionate game developer with over 5 years of experience creating engaging and innovative gaming experiences. From indie mobile games to AAA console titles, I bring creativity and technical expertise to every project."
                }
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                {
                  "My expertise spans multiple game engines, programming languages, and design principles. I believe in creating games that not only entertain but also inspire and connect people."
                }
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-8">
                <Card className="text-center p-4">
                  <CardContent className="pt-4">
                    <Gamepad2 className="w-8 h-8 text-primary mx-auto mb-2" />
                    <h3 className="font-semibold">Game Design</h3>
                  </CardContent>
                </Card>
                <Card className="text-center p-4">
                  <CardContent className="pt-4">
                    <Code className="w-8 h-8 text-primary mx-auto mb-2" />
                    <h3 className="font-semibold">Programming</h3>
                  </CardContent>
                </Card>
                <Card className="text-center p-4">
                  <CardContent className="pt-4">
                    <Palette className="w-8 h-8 text-primary mx-auto mb-2" />
                    <h3 className="font-semibold">Art Direction</h3>
                  </CardContent>
                </Card>
              </div>

              <Button onClick={handleDownloadCV} size="lg" className="w-full sm:w-auto">
                <Download className="w-5 h-5 mr-2" />
                Download CV
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
