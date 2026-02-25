import Image from "next/image"
import { MessageCircle, Crown, Map, Clock } from "lucide-react"

const stats = [
  { icon: Crown, value: "12", label: "Active Factions" },
  { icon: Map, value: "3", label: "Massive Regions" },
  { icon: MessageCircle, value: "10K+", label: "Discord Members" },
  { icon: Clock, value: "2+", label: "Years Running" },
]

const testimonials = [
  {
    name: "Sir Aldric",
    role: "Knight of the Iron Crown",
    quote:
      "The depth of roleplay here is unmatched. Every session feels like a chapter in an epic saga.",
  },
  {
    name: "Lady Elara",
    role: "Merchant Guild Leader",
    quote:
      "The economy system is incredibly detailed. Running a trading empire has never been more satisfying.",
  },
  {
    name: "Theron the Bold",
    role: "Faction Commander",
    quote:
      "Leading my faction into battle with custom siege mechanics is an experience you will not find anywhere else.",
  },
]

export function CommunitySection() {
  return (
    <section id="community" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <p className="font-serif text-sm font-bold tracking-[0.3em] text-primary">
            OUR COMMUNITY
          </p>
          <h2 className="mt-3 font-serif text-4xl font-bold tracking-wide text-foreground md:text-5xl">
            <span className="text-balance">Legends Among Us</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground leading-relaxed">
            Join a thriving community of dedicated roleplayers who bring this world to life every day.
          </p>
        </div>

        <div className="mb-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center rounded-sm border border-border bg-card p-8 text-center"
            >
              <stat.icon className="mb-3 h-8 w-8 text-primary" />
              <p className="font-serif text-4xl font-bold text-foreground">
                {stat.value}
              </p>
              <p className="mt-1 text-xs tracking-widest text-muted-foreground">
                {stat.label.toUpperCase()}
              </p>
            </div>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="rounded-sm border border-border bg-card p-8"
            >
              <div className="mb-4 flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg
                    key={i}
                    className="h-4 w-4 fill-primary text-primary"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="mb-6 text-sm leading-relaxed text-muted-foreground italic">
                {`"${testimonial.quote}"`}
              </p>
              <div>
                <p className="font-serif font-bold text-foreground">
                  {testimonial.name}
                </p>
                <p className="text-xs text-primary">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
