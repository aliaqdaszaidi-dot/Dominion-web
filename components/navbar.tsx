"use client"

import { useState } from "react"
import { Menu, X, Shield } from "lucide-react"

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Features", href: "#features" },
  { label: "How to Join", href: "#join" },
  { label: "Community", href: "#community" },
  { label: "Factions", href: "#factions" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-lg">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#home" className="flex items-center gap-3">
          <Shield className="h-8 w-8 text-primary" />
          <span className="font-serif text-xl font-bold tracking-wider text-foreground">
            LEGENDARY RP
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium tracking-wide text-muted-foreground transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <a
            href="#join"
            className="rounded-sm border border-primary bg-primary px-6 py-2.5 font-serif text-sm font-bold tracking-wider text-primary-foreground transition-all hover:bg-primary/90"
          >
            JOIN NOW
          </a>
        </div>

        <button
          className="text-foreground md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-border/50 bg-background/95 backdrop-blur-lg md:hidden">
          <div className="flex flex-col gap-1 px-6 py-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="rounded-sm px-3 py-3 text-sm font-medium tracking-wide text-muted-foreground transition-colors hover:bg-secondary hover:text-primary"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#join"
              onClick={() => setIsOpen(false)}
              className="mt-3 rounded-sm border border-primary bg-primary px-6 py-3 text-center font-serif text-sm font-bold tracking-wider text-primary-foreground"
            >
              JOIN NOW
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
