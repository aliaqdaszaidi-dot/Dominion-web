import type { Metadata, Viewport } from "next"
import { Cinzel, Inter } from "next/font/google"
import "./globals.css"

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Legendary Roleplay | Forge Your Legend",
  description:
    "Join the most immersive medieval roleplay experience. Build your faction, forge alliances, and claim your destiny in a living, breathing world.",
}

export const viewport: Viewport = {
  themeColor: "#121212",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${cinzel.variable} ${inter.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
