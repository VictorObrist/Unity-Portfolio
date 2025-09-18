import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    title: "Neon Runner",
    description:
      "A fast-paced cyberpunk endless runner with stunning neon visuals and electronic soundtrack. Built with Unity and C#.",
    image: "../public/cyberpunk-neon-runner-game-screenshot.jpg",
    technologies: ["Unity", "C#", "Shader Graph"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Mystic Realms",
    description:
      "An open-world fantasy RPG featuring dynamic weather systems, complex NPC interactions, and epic boss battles.",
    image: "/fantasy-rpg-game-screenshot-with-magic.jpg",
    technologies: ["Unreal Engine", "Blueprint", "C++"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Space Colony Builder",
    description:
      "A strategic simulation game where players build and manage colonies across different planets in the galaxy.",
    image: "/space-colony-building-strategy-game.jpg",
    technologies: ["Godot", "GDScript", "SQLite"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Puzzle Dimension",
    description:
      "A mind-bending puzzle platformer that plays with gravity and dimensional shifts to create unique gameplay mechanics.",
    image: "/dimensional-puzzle-platformer-game.jpg",
    technologies: ["Unity", "C#", "Physics2D"],
    liveUrl: "#",
    githubUrl: "#",
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-balance">
            My <span className="text-primary">Projects</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="aspect-video overflow-hidden rounded-t-lg">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed">{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-accent/20 text-accent-foreground rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <Button size="sm" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
