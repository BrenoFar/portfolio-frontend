import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function TechStack() {
  const technologies = {
    backend: [
      { name: "Spring Boot", level: "Expert" },
      { name: "Nest.js", level: "Advanced" },
      { name: "PostgreSQL", level: "Expert" },
      { name: "DDD Principles", level: "Expert" },
      { name: "SOA Architecture", level: "Expert" },
      { name: "REST APIs", level: "Expert" },
      { name: "Microservices", level: "Advanced" },
    ],
    frontend: [
      { name: "React.js", level: "Expert" },
      { name: "Next.js", level: "Advanced" },
      { name: "TypeScript", level: "Advanced" },
      { name: "Tailwind CSS", level: "Advanced" },
      { name: "State Management", level: "Advanced" },
      { name: "Responsive Design", level: "Expert" },
    ],
    tools: [
      { name: "Git", level: "Expert" },
      { name: "Docker", level: "Advanced" },
      { name: "AWS", level: "Intermediate" },
      { name: "CI/CD", level: "Advanced" },
      { name: "Testing", level: "Advanced" },
      { name: "Agile", level: "Expert" },
    ],
  }

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Expert":
        return "bg-primary text-primary-foreground"
      case "Advanced":
        return "bg-accent text-accent-foreground"
      case "Intermediate":
        return "bg-secondary text-secondary-foreground"
      default:
        return "bg-muted text-muted-foreground"
    }
  }

  return (
    <section id="tech-stack" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Technology Stack</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A comprehensive overview of the technologies and methodologies I use to build robust, scalable
              applications
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Backend Development</CardTitle>
                <CardDescription>Server-side technologies and architectural patterns</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {technologies.backend.map((tech) => (
                    <Badge key={tech.name} className={getLevelColor(tech.level)}>
                      {tech.name}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Frontend Development</CardTitle>
                <CardDescription>Modern UI frameworks and user experience technologies</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {technologies.frontend.map((tech) => (
                    <Badge key={tech.name} className={getLevelColor(tech.level)}>
                      {tech.name}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Tools & DevOps</CardTitle>
                <CardDescription>Development tools and deployment technologies</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {technologies.tools.map((tech) => (
                    <Badge key={tech.name} className={getLevelColor(tech.level)}>
                      {tech.name}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
