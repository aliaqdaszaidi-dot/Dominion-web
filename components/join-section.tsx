import { Download, UserPlus, Gamepad2, ArrowRight } from "lucide-react"

const steps = [
  {
    icon: Download,
    step: "01",
    title: "Download the Client",
    description:
      "Install the SAMP Mobile Client on your device to access the server.",
  },
  {
    icon: UserPlus,
    step: "02",
    title: "Create Your Character",
    description:
      "Choose your backstory, appearance, and starting faction to begin your journey.",
  },
  {
    icon: Gamepad2,
    step: "03",
    title: "Enter the World",
    description:
      "Connect to the server and start writing your legend in the realm of Legendary RP.",
  },
]

export function JoinSection() {
  return (
    <section id="join" className="relative py-24 md:py-32">
      <div className="absolute inset-0 bg-secondary/50" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <p className="font-serif text-sm font-bold tracking-[0.3em] text-primary">
            BEGIN YOUR JOURNEY
          </p>
          <h2 className="mt-3 font-serif text-4xl font-bold tracking-wide text-foreground md:text-5xl">
            <span className="text-balance">How to Join</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground leading-relaxed">
            Getting started is easy. Follow these simple steps and you will be in the game within minutes.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((item, index) => (
            <div key={item.title} className="relative text-center">
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full border-2 border-primary bg-primary/10">
                <item.icon className="h-7 w-7 text-primary" />
              </div>
              <p className="mb-2 font-serif text-xs font-bold tracking-[0.3em] text-primary">
                STEP {item.step}
              </p>
              <h3 className="mb-3 font-serif text-xl font-bold tracking-wide text-foreground">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
              {index < steps.length - 1 && (
                <ArrowRight className="absolute -right-4 top-8 hidden h-6 w-6 text-primary/40 md:block" />
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-center gap-6 rounded-sm border border-border bg-card p-10 text-center">
          <h3 className="font-serif text-2xl font-bold tracking-wide text-foreground">
            Ready to Begin?
          </h3>
          <p className="max-w-md text-muted-foreground leading-relaxed">
            Connect directly to the server using the address below or click the button to launch automatically.
          </p>
          <div className="flex items-center gap-3 rounded-sm border border-border bg-background px-6 py-3">
            <span className="font-mono text-sm text-muted-foreground">Server IP:</span>
            <span className="font-mono text-sm font-bold text-primary">148.113.4.178:7777</span>
          </div>
          <a
            href="samp://148.113.4.178:7777"
            className="inline-flex items-center gap-2 rounded-sm border border-primary bg-primary px-10 py-4 font-serif text-sm font-bold tracking-widest text-primary-foreground transition-all hover:bg-primary/90"
          >
            CONNECT NOW
            <ArrowRight className="h-4 w-4" />
          </a>
          <p className="text-xs text-muted-foreground">
            Requires SAMP Mobile Client
          </p>
        </div>
      </div>
    </section>
  )
}
