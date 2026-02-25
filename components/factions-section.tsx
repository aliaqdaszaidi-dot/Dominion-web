import Image from "next/image"

const factions = [
  {
    name: "The Iron Crown",
    motto: "Through Steel, We Rule",
    description:
      "The ruling monarchy and their loyal knights. Masters of diplomacy and military might.",
    members: "120+",
    color: "border-primary",
    accent: "text-primary",
  },
  {
    name: "The Shadow Guild",
    motto: "In Darkness, We Prosper",
    description:
      "A clandestine network of thieves, assassins, and spies who operate from the shadows.",
    members: "85+",
    color: "border-accent",
    accent: "text-accent",
  },
  {
    name: "The Free Merchants",
    motto: "Gold Opens Every Gate",
    description:
      "The wealthiest trading consortium controlling commerce routes across all regions.",
    members: "95+",
    color: "border-primary",
    accent: "text-primary",
  },
  {
    name: "The Wild Clans",
    motto: "Strength in Unity",
    description:
      "Fierce warrior tribes who refuse to kneel, defending the untamed wilderness as their own.",
    members: "70+",
    color: "border-accent",
    accent: "text-accent",
  },
]

export function FactionsSection() {
  return (
    <section id="factions" className="relative py-24 md:py-32">
      <div className="absolute inset-0 bg-secondary/50" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <p className="font-serif text-sm font-bold tracking-[0.3em] text-primary">
            CHOOSE YOUR PATH
          </p>
          <h2 className="mt-3 font-serif text-4xl font-bold tracking-wide text-foreground md:text-5xl">
            <span className="text-balance">The Factions</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground leading-relaxed">
            Align yourself with a faction that matches your playstyle, or carve your own path as an independent.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {factions.map((faction) => (
            <div
              key={faction.name}
              className={`group rounded-sm border-l-4 ${faction.color} border border-border bg-card p-8 transition-all hover:bg-card/80`}
            >
              <div className="mb-2 flex items-center justify-between">
                <h3 className={`font-serif text-xl font-bold tracking-wide ${faction.accent}`}>
                  {faction.name}
                </h3>
                <span className="rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-muted-foreground">
                  {faction.members} Members
                </span>
              </div>
              <p className="mb-3 font-serif text-xs italic tracking-widest text-muted-foreground">
                {`"${faction.motto}"`}
              </p>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {faction.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
