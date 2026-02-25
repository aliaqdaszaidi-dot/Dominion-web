import { Shield } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border bg-background py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-1">
            <div className="flex items-center gap-3">
              <Shield className="h-7 w-7 text-primary" />
              <span className="font-serif text-lg font-bold tracking-wider text-foreground">
                LEGENDARY RP
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              The most immersive medieval roleplay experience. Forge your legend today.
            </p>
          </div>

          <div>
            <h4 className="mb-4 font-serif text-sm font-bold tracking-wider text-foreground">
              NAVIGATION
            </h4>
            <ul className="flex flex-col gap-3">
              {["Home", "Features", "How to Join", "Community", "Factions"].map(
                (link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase().replace(/ /g, "-").replace("how-to-join", "join")}`}
                      className="text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      {link}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-serif text-sm font-bold tracking-wider text-foreground">
              CONNECT
            </h4>
            <ul className="flex flex-col gap-3">
              <li>
                <a
                  href="#"
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  Discord Server
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  YouTube Channel
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  Twitter / X
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-serif text-sm font-bold tracking-wider text-foreground">
              SERVER INFO
            </h4>
            <div className="flex flex-col gap-3 text-sm">
              <div>
                <p className="text-muted-foreground">Server IP</p>
                <p className="font-mono font-bold text-primary">148.113.4.178:7777</p>
              </div>
              <div>
                <p className="text-muted-foreground">Platform</p>
                <p className="font-medium text-foreground">SAMP Mobile</p>
              </div>
              <div>
                <p className="text-muted-foreground">Status</p>
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-green-500" />
                  <span className="font-medium text-green-500">Online</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8 text-center">
          <p className="text-xs text-muted-foreground">
            {'© 2026 Legendary Roleplay. All rights reserved. Not affiliated with Rockstar Games or Take-Two Interactive.'}
          </p>
        </div>
      </div>
    </footer>
  )
}
