import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    title: "Cubieverse",
    description:
      "A real-world, location-based mobile game where players explore their physical surroundings to find and collect virtual Cubies and other resources",
    image: "cubieverse.webp",
    technologies: ["Unity", "C#", "Shader Graph", "Mobile", "Android", "iOS", "Crypto"],
    liveUrl: "https://medium.com/cubieverse/all"
  },
  {
    title: "Romance Go",
    description:
      "Mix between Dating sim and Tycoon. Meet millions of virtual people. Make friends, lovers and everything in between! Your new romantic life awaits.",
    image: "logo_romance_go.svg",
    technologies: ["Unity", "C#", "Shader Graph", "Mobile", "Android", "iOS"],
    liveUrl: "https://www.romance-go.com",
  },
  {
    title: "2D RPG (WIP)",
    description:
      "2D Adventure RPG pixelart style, with crafting, skills tree and more.",
    image: "2D-RPG.png",
    technologies: ["Unity", "C#", "PC"],
    liveUrl: "#"
    //githubUrl: "#",
  }
  //,
  // {
  //   title: "Puzzle Dimension",
  //   description:
  //     "A mind-bending puzzle platformer that plays with gravity and dimensional shifts to create unique gameplay mechanics.",
  //   image: "dimensional-puzzle-platformer-game.jpg",
  //   technologies: ["Unity", "C#", "Physics2D"],
  //   liveUrl: "#",
  //   githubUrl: "#",
  // },
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
                        className="px-3 py-1 bg-accent/20 rounded-full text-sm font-medium"
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
                    {/* <Button variant="outline" size="sm" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </a>
                    </Button> */}
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
