"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { Menu, X, Github, Linkedin, Mail } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <h1 className="text-xl font-bold text-foreground">{"<Developer />"}</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#about"
              className="relative px-3 py-2 text-muted-foreground hover:text-foreground transition-all duration-300 hover:bg-muted/50 rounded-md hover:scale-105"
            >
              About
            </a>
            <a
              href="#projects"
              className="relative px-3 py-2 text-muted-foreground hover:text-foreground transition-all duration-300 hover:bg-muted/50 rounded-md hover:scale-105"
            >
              Projects
            </a>
            <a
              href="#tech-stack"
              className="relative px-3 py-2 text-muted-foreground hover:text-foreground transition-all duration-300 hover:bg-muted/50 rounded-md hover:scale-105"
            >
              Tech Stack
            </a>
            <a
              href="#contact"
              className="relative px-3 py-2 text-muted-foreground hover:text-foreground transition-all duration-300 hover:bg-muted/50 rounded-md hover:scale-105"
            >
              Contact
            </a>
          </nav>

          {/* Social Links & Theme Toggle */}
          <div className="hidden md:flex items-center space-x-2">
            <ThemeToggle />
            <Button variant="ghost" size="icon" className="text-foreground hover:text-foreground hover:bg-muted">
              <Github className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-foreground hover:text-foreground hover:bg-muted">
              <Linkedin className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-foreground hover:text-foreground hover:bg-muted">
              <Mail className="h-5 w-5" />
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-2 md:hidden">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-foreground hover:text-foreground hover:bg-muted"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <a
                href="#about"
                className="px-3 py-2 text-muted-foreground hover:text-foreground transition-all duration-300 hover:bg-muted/50 rounded-md"
              >
                About
              </a>
              <a
                href="#projects"
                className="px-3 py-2 text-muted-foreground hover:text-foreground transition-all duration-300 hover:bg-muted/50 rounded-md"
              >
                Projects
              </a>
              <a
                href="#tech-stack"
                className="px-3 py-2 text-muted-foreground hover:text-foreground transition-all duration-300 hover:bg-muted/50 rounded-md"
              >
                Tech Stack
              </a>
              <a
                href="#contact"
                className="px-3 py-2 text-muted-foreground hover:text-foreground transition-all duration-300 hover:bg-muted/50 rounded-md"
              >
                Contact
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
