import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Stack } from "@/components/stack"
import { Projects } from "@/components/projects"
import { Contact } from "@/components/contact"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Stack />
      <Projects />
      <Contact />
    </main>
  )
}
