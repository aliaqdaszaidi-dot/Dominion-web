"use client"

import { ChevronDown } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  return (
    <section id="home" className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <Image
        src="/images/hero-bg.jpg"
        alt=""
        fill
        className="object-cover"
        priority
        quality={90}
      />
      <div className="absolute inset-0 bg-background/70" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-background/60" />

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5">
          <span className="h-2 w-2 rounded-full bg-green-500" />
          <span className="text-xs font-medium tracking-widest text-primary">
            SERVER ONLINE
          </span>
        </div>

        <h1 className="font-serif text-5xl font-bold leading-tight tracking-wide text-foreground md:text-7xl lg:text-8xl">
          <span className="text-balance">FORGE YOUR</span>
          <br />
          <span className="text-primary">LEGEND</span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
          Enter a living, breathing medieval world. Build your faction, forge alliances, wage wars, and write your own story in the most immersive roleplay experience.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#join"
            className="animate-pulse-glow rounded-sm border border-primary bg-primary px-10 py-4 font-serif text-sm font-bold tracking-widest text-primary-foreground transition-all hover:bg-primary/90"
          >
            ENTER THE KINGDOM
          </a>
          <a
            href="#features"
            className="rounded-sm border border-border bg-secondary px-10 py-4 font-serif text-sm font-bold tracking-widest text-foreground transition-all hover:border-primary/50 hover:text-primary"
          >
            EXPLORE
          </a>
        </div>

        <div className="mt-16 flex items-center justify-center gap-12 text-center">
          <div>
            <p className="font-serif text-3xl font-bold text-primary">500+</p>
            <p className="text-xs tracking-wider text-muted-foreground">ACTIVE PLAYERS</p>
          </div>
          <div className="h-8 w-px bg-border" />
          <div>
            <p className="font-serif text-3xl font-bold text-primary">24/7</p>
            <p className="text-xs tracking-wider text-muted-foreground">UPTIME</p>
          </div>
          <div className="h-8 w-px bg-border" />
          <div>
            <p className="font-serif text-3xl font-bold text-primary">50+</p>
            <p className="text-xs tracking-wider text-muted-foreground">CUSTOM JOBS</p>
          </div>
        </div>
      </div>

      <a
        href="#features"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-muted-foreground transition-colors hover:text-primary"
        aria-label="Scroll to features"
      >
        <ChevronDown className="h-8 w-8" />
      </a>
    </section>
  )
}
