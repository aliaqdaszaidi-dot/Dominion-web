import Image from "next/image"

const factions = [
  {
    name: "LSPD",
    motto: "To Protect and Serve",
    description:
      "The Los Santos Police Department. Uphold the law, patrol the streets, and keep the city safe from crime.",
    members: "120+",
    color: "border-primary",
    accent: "text-primary",
  },
  {
    name: "SAPD",
    motto: "Justice Across the State",
    description:
      "The San Andreas Police Department. State-level law enforcement handling highways, investigations, and major operations.",
    members: "85+",
    color: "border-accent",
    accent: "text-accent",
  },
  {
    name: "News",
    motto: "Breaking Stories, Shaping the City",
    description:
      "The Weazel News team. Cover breaking events, interview key figures, and broadcast live from the heart of the action.",
    members: "50+",
    color: "border-primary",
    accent: "text-primary",
  },
  {
    name: "Medics",
    motto: "Every Second Counts",
    description:
      "The Emergency Medical Services. Respond to emergencies, save lives, and operate the hospital and ambulance fleet.",
    members: "70+",
    color: "border-accent",
    accent: "text-accent",
  },
  {
    name: "Mechanics",
    motto: "We Keep the City Moving",
    description:
      "The city's top mechanics. Repair, customize, and tow vehicles for citizens across Los Santos.",
    members: "45+",
    color: "border-primary",
    accent: "text-primary",
  },
  {
    name: "Government",
    motto: "Order Through Leadership",
    description:
      "The Mayor's office and city officials. Manage laws, taxes, city events, and shape the future of San Andreas.",
    members: "30+",
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
            Join a faction that matches your playstyle. Enforce the law, save lives, report the news, or run the city.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
