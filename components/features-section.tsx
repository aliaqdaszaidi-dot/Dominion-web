"use client"

import {
  Sword,
  Castle,
  Users,
  ShieldCheck,
  Compass,
  Gem,
} from "lucide-react"

const features = [
  {
    icon: Sword,
    title: "Epic Combat System",
    description:
      "Experience realistic sword fighting, archery, and siege warfare with our custom-built combat mechanics.",
  },
  {
    icon: Castle,
    title: "Build Your Kingdom",
    description:
      "Claim land, construct fortresses, and develop thriving settlements that grow with your faction's power.",
  },
  {
    icon: Users,
    title: "Deep Faction System",
    description:
      "Join or create factions with unique ranks, territories, and political dynamics that shape the world.",
  },
  {
    icon: ShieldCheck,
    title: "Custom Economy",
    description:
      "Trade goods, manage resources, and build wealth through crafting, farming, and strategic commerce.",
  },
  {
    icon: Compass,
    title: "Vast Open World",
    description:
      "Explore sprawling landscapes with hidden dungeons, ancient ruins, and dangerous wilderness zones.",
  },
  {
    icon: Gem,
    title: "Unique Progression",
    description:
      "Level up skills, unlock rare abilities, and earn legendary titles that establish your reputation.",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <p className="font-serif text-sm font-bold tracking-[0.3em] text-primary">
            WHAT AWAITS YOU
          </p>
          <h2 className="mt-3 font-serif text-4xl font-bold tracking-wide text-foreground md:text-5xl">
            <span className="text-balance">A World Like No Other</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground leading-relaxed">
            Every detail has been crafted to deliver the most immersive medieval roleplay experience ever created.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-sm border border-border bg-card p-8 transition-all hover:border-primary/50 hover:bg-card/80"
            >
              <div className="mb-5 inline-flex rounded-sm border border-primary/20 bg-primary/10 p-3">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-3 font-serif text-lg font-bold tracking-wide text-foreground">
                {feature.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
