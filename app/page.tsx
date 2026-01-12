"use client"

import { useEffect, useState } from "react"
import Link from "next/link"

export default function Home() {
  const [openingVisible, setOpeningVisible] = useState(false)
  const [identityVisible, setIdentityVisible] = useState(false)
  const [invitationVisible, setInvitationVisible] = useState(false)

  useEffect(() => {
    setOpeningVisible(true)
    const timer1 = setTimeout(() => setIdentityVisible(true), 2500)
    const timer2 = setTimeout(() => setInvitationVisible(true), 6000)
    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
    }
  }, [])

  const identityLines = [
    "I build by thinking first.",
    "I see systems before screens.",
    "I move through places to reset perspective.",
    "I use AI to remove friction, not add spectacle.",
    "I design for people long before metrics.",
  ]

  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* SECTION 1: THE OPENING SILENCE */}
      <section
        className="h-screen flex flex-col items-center justify-center px-4 relative overflow-hidden"
        style={{ backgroundColor: "oklch(0.94 0.003 270)" }}
      >
        <div className="relative z-10 text-center max-w-3xl">
          <p
            className="font-serif text-4xl md:text-6xl leading-relaxed text-foreground"
            style={{
              opacity: openingVisible ? 1 : 0,
              transform: openingVisible ? "translateY(0)" : "translateY(20px)",
              transition: "all 2s cubic-bezier(0.4, 0, 0.2, 1)",
            }}
          >
            I didn't set out to build products.
            <br />I was trying to make sense of things.
          </p>
        </div>
      </section>

      {/* SECTION 2: IDENTITY WITHOUT DECLARATION */}
      <section className="min-h-screen bg-foreground text-background flex flex-col justify-center px-4 py-20">
        <div className="max-w-3xl mx-auto w-full space-y-16">
          {identityLines.map((line, index) => (
            <p
              key={index}
              className="font-serif text-3xl md:text-4xl leading-relaxed font-light"
              style={{
                opacity: identityVisible ? 1 : 0,
                transform: identityVisible ? "translateY(0)" : "translateY(20px)",
                transition: `opacity 0.8s ease-out ${index * 0.2}s, transform 0.8s ease-out ${index * 0.2}s`,
              }}
            >
              {line}
            </p>
          ))}

          {/* Smaller text after pause */}
          <div
            style={{
              opacity: identityVisible ? 1 : 0,
              transform: identityVisible ? "translateY(0)" : "translateY(20px)",
              transition: `opacity 0.8s ease-out 1.4s, transform 0.8s ease-out 1.4s`,
            }}
          >
            <p className="font-sans text-sm text-background/70 leading-relaxed">
              I don't fit into a single title.
              <br />
              And I don't try to.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3: THE PHILOSOPHY */}
      <section className="min-h-screen bg-background flex flex-col justify-center px-4 py-20">
        <div className="max-w-2xl mx-auto">
          <p className="font-serif text-3xl md:text-4xl leading-relaxed text-foreground mb-12">
            I've worked in noise.
            <br />
            I've worked in silence.
            <br />
            <br />
            Both taught me the same lesson.
          </p>

          <div className="space-y-16">
            <div>
              <p className="font-serif text-2xl md:text-3xl leading-relaxed text-foreground">
                Most products shout.
                <br />
                Very few are clear.
              </p>
            </div>

            <div className="text-center text-foreground/30 text-2xl">·</div>

            <div>
              <p className="font-serif text-2xl md:text-3xl leading-relaxed text-foreground">
                My work lives in that quieter place —
                <br />
                where complexity disappears
                <br />
                and what remains feels obvious.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: THE BRIDGE - Cinematic transition */}
      <section className="min-h-[60vh] bg-background flex flex-col justify-center px-4 py-20">
        <div className="max-w-2xl mx-auto text-center">
          <p
            className="font-serif text-2xl md:text-3xl leading-relaxed text-foreground/80 mb-16"
            style={{
              opacity: invitationVisible ? 1 : 0,
              transform: invitationVisible ? "translateY(0)" : "translateY(20px)",
              transition: "all 1.2s cubic-bezier(0.4, 0, 0.2, 1)",
            }}
          >
            AI systems. Products. Interfaces.
            <br />
            <span className="text-foreground/50">The work speaks quieter than this page.</span>
          </p>
          
          <Link
            href="/work"
            className="inline-block font-serif text-foreground hover:text-primary transition-colors text-lg tracking-wide"
            style={{
              opacity: invitationVisible ? 1 : 0,
              transform: invitationVisible ? "translateY(0)" : "translateY(20px)",
              transition: "all 1.2s cubic-bezier(0.4, 0, 0.2, 1) 0.3s",
            }}
          >
            → See how this thinking becomes work
          </Link>
        </div>
      </section>

      {/* SECTION 5: THE INVITATION */}
      <section
        className="h-screen flex flex-col items-center justify-center px-4 relative overflow-hidden"
        style={{ backgroundColor: "oklch(0.94 0.003 270)" }}
      >
        <div className="relative z-10 text-center max-w-2xl">
          <p
            className="font-serif text-3xl md:text-4xl leading-relaxed text-foreground mb-12"
            style={{
              opacity: invitationVisible ? 1 : 0,
              transform: invitationVisible ? "translateY(0)" : "translateY(20px)",
              transition: "all 0.8s ease-out",
            }}
          >
            If this way of thinking feels familiar,
            <br />
            you're already in the right place.
          </p>

          <Link
            href="/about"
            className="inline-block font-serif text-foreground hover:text-primary transition-colors text-sm tracking-wide"
            style={{
              opacity: invitationVisible ? 1 : 0,
              transform: invitationVisible ? "translateY(0)" : "translateY(20px)",
              transition: "all 0.8s ease-out 0.2s",
            }}
          >
            → Continue the timeline
          </Link>
        </div>
      </section>

      {/* Footer - Minimal */}
      <footer className="bg-background border-t border-border/50 py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-muted-foreground">
            <p className="font-serif">© 2026 Sunil Venkatesh</p>
            <nav className="flex gap-8">
              <Link href="/work" className="hover:text-foreground transition-colors">
                Work
              </Link>
              <Link href="/travel" className="hover:text-foreground transition-colors">
                Travel
              </Link>
              <Link href="/contact" className="hover:text-foreground transition-colors">
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </footer>
    </main>
  )
}
