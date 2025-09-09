import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Phone } from "lucide-react"

export function Footer() {
  return (
    <footer id="contact" className="bg-muted/30 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">Let's Build Something Amazing Together</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            I'm always interested in discussing new opportunities, innovative projects, and collaborating with fellow
            developers and teams.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="text-lg px-8">
              <Mail className="h-5 w-5 mr-2" />
              Get In Touch
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 bg-transparent">
              <Phone className="h-5 w-5 mr-2" />
              Schedule a Call
            </Button>
          </div>

          <div className="flex justify-center space-x-6 mb-8">
            <Button variant="ghost" size="icon" className="h-12 w-12">
              <Github className="h-6 w-6" />
            </Button>
            <Button variant="ghost" size="icon" className="h-12 w-12">
              <Linkedin className="h-6 w-6" />
            </Button>
            <Button variant="ghost" size="icon" className="h-12 w-12">
              <Mail className="h-6 w-6" />
            </Button>
          </div>

          <div className="border-t pt-8">
            <p className="text-muted-foreground">
              © 2025 Full-Stack Developer. Built with Next.js, TypeScript, and Tailwind CSS.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
