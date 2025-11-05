import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, Database, Server, Palette } from "lucide-react"

export function ProjectShowcase() {
  const projects = [
    {
      id: 1,
      title: "Deska",
      description:
        "A 1v1 designer-client collaboration platform that streamlines graphic design projects through structured workflows. Clients receive a unique project ID to share with designers, who then manage the entire project lifecycle from briefing to completion.",
      technologies: ["Spring Boot", "PostgreSQL", "Next.js", "TypeScript", "Tailwind CSS"],
      backend: "Spring Boot",
      frontend: "Next.js",
      features: [
        "Services Oriented architecture",
        "4-stage workflow: Briefing → Moodboard → Production → Finish",
        "Client approval system for each project stage",
        "Real-time project status tracking and logs",
        "File upload and message system",
        "Unique project ID generation and sharing",
      ],
      icon: <Palette className="h-6 w-6" />,
      color: "border-l-primary",
      hasLogo: true,
    },
    {
      id: 2,
      title: "Task Management System",
      description:
        "A collaborative task management application with real-time updates. Built using Spring Boot with SOA principles for scalable microservices architecture.",
      technologies: ["Spring Boot", "PostgreSQL", "React.js", "WebSocket", "Redis"],
      backend: "Spring Boot",
      frontend: "React.js",
      features: [
        "Service-Oriented Architecture (SOA)",
        "Real-time collaboration with WebSocket",
        "Role-based access control",
        "Project and team management",
        "File attachment system",
        "Advanced filtering and search",
      ],
      icon: <Server className="h-6 w-6" />,
      color: "border-l-accent",
    },
    {
      id: 3,
      title: "Analytics Dashboard",
      description:
        "A powerful analytics dashboard built with Nest.js backend and pure React frontend. Provides real-time data visualization and reporting capabilities.",
      technologies: ["Nest.js", "PostgreSQL", "React.js", "Chart.js", "TypeScript"],
      backend: "Nest.js",
      frontend: "React.js",
      features: [
        "Modular Nest.js architecture",
        "Real-time data processing",
        "Interactive charts and graphs",
        "Custom report generation",
        "Data export functionality",
        "Responsive design system",
      ],
      icon: <Database className="h-6 w-6" />,
      color: "border-l-chart-2",
    },
  ]

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Featured Projects</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A showcase of three distinct projects demonstrating different technology stacks and architectural
              approaches
            </p>
          </div>

          <div className="space-y-12">
            {projects.map((project, index) => (
              <Card key={project.id} className={`border-l-4 ${project.color} hover:shadow-lg transition-shadow`}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="text-primary">{project.icon}</div>
                      <div>
                        <div className="flex items-center gap-4 mb-2">
                          <CardTitle className="text-2xl">{project.title}</CardTitle>
                          {project.hasLogo && (
                            <div className="w-12 h-12 border-2 border-dashed border-muted-foreground/30 rounded-lg flex items-center justify-center text-xs text-muted-foreground">
                              Logo
                            </div>
                          )}
                        </div>
                        <CardDescription className="text-base mt-2">{project.description}</CardDescription>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid lg:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Key Features</h4>
                      <ul className="space-y-2">
                        {project.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start space-x-2">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                            <span className="text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <div className="mb-6">
                        <h4 className="font-semibold text-foreground mb-3">Technology Stack</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech) => (
                            <Badge key={tech} variant="secondary">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="mb-6">
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <span className="font-medium text-foreground">Backend:</span>
                            <p className="text-muted-foreground">{project.backend}</p>
                          </div>
                          <div>
                            <span className="font-medium text-foreground">Frontend:</span>
                            <p className="text-muted-foreground">{project.frontend}</p>
                          </div>
                        </div>
                      </div>

                      <div className="flex space-x-3">
                        <Button size="sm">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Live Demo
                        </Button>
                        <Button variant="outline" size="sm">
                          <Github className="h-4 w-4 mr-2" />
                          Source Code
                        </Button>
                      </div>
                    </div>
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
