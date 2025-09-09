import { Button } from "@/components/ui/button"
import { ArrowDown, Code, Database, Server } from "lucide-react"

export function HeroSection() {
  return (
    <section id="about" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-8">
            <div className="flex items-center space-x-4 text-primary">
              <Code className="h-8 w-8" />
              <Database className="h-8 w-8" />
              <Server className="h-8 w-8" />
            </div>
          </div>

          <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6 text-balance">Breno da Silva Farias</h1>

          <p className="text-lg text-primary font-semibold mb-4">BrenoFarDEV</p>

          <p className="text-xl lg:text-2xl text-muted-foreground mb-8 text-balance">
            Full-Stack Developer crafting robust applications with{" "}
            <span className="text-primary font-semibold">DDD</span> and{" "}
            <span className="text-primary font-semibold">SOA</span> principles
          </p>

          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto text-pretty">
            Specialized in building scalable backend systems with Spring Boot and Nest.js, paired with modern React and
            Next.js frontends. Passionate about clean architecture and PostgreSQL database design.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8">
              View My Projects
            </Button>
          </div>

          <div className="mt-16">
            <ArrowDown className="h-6 w-6 mx-auto text-muted-foreground animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  )
}
