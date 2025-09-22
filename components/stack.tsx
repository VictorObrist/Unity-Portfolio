import { Card, CardContent } from "@/components/ui/card"

const technologies = [
  {
    name: "Unity",
    image: "https://skillicons.dev/icons?i=unity"
  },
  {
    name: "C#",
    image: "https://skillicons.dev/icons?i=cs"
  },
  {
    name: "C++",
    image: "https://skillicons.dev/icons?i=cpp"
  },
  // {
  //   name: "JavaScript",
  //   icon: (
  //     <svg viewBox="0 0 24 24" className="w-12 h-12" fill="currentColor">
  //       <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" />
  //     </svg>
  //   ),
  // },
  {
    name: "Blender",
    image: "https://skillicons.dev/icons?i=blender"
  },
  {
    name: "Python",
   image: "https://skillicons.dev/icons?i=python"
  },
]

export function Stack() {
  return (
    <section id="stack" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-balance">
            Tech <span className="text-primary">Stack</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Technologies and tools I use to bring games to life
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {technologies.map((tech) => (
            <Card
              key={tech.name}
              className="group hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
            >
              <CardContent className="p-6 text-center">
                <div className="text-primary group-hover:scale-110 transition-transform duration-300 mb-4 flex justify-center">
                  <img className="w-12 h-12"
                    src={tech.image || "/placeholder.svg"}
                  />
                </div>
                <h3 className="font-semibold text-sm">{tech.name}</h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
