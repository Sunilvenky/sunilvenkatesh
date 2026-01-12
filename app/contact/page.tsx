"use client"

import Link from "next/link"

export default function Contact() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="border-b border-border/50 py-6 px-4 sticky top-0 bg-background/95 backdrop-blur z-10">
        <div className="max-w-3xl mx-auto">
          <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
            ← home
          </Link>
        </div>
      </header>

      {/* Main content */}
      <section className="py-24 md:py-32 px-4">
        <div className="max-w-3xl mx-auto space-y-24">
          {/* Opening */}
          <div className="space-y-6">
            <h1 className="font-serif text-4xl md:text-5xl leading-tight">If you've read this far,</h1>
            <p className="text-xl text-foreground/70 font-serif">we probably already think the same way.</p>
          </div>

          {/* Direct contact */}
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-widest text-muted-foreground">Reach me directly</p>
            <p className="font-serif text-3xl text-foreground">+91 8095218947</p>
            <p className="text-muted-foreground">Call or WhatsApp</p>
          </div>

          {/* We can talk about - tightened */}
          <div className="space-y-8">
            <p className="text-sm uppercase tracking-widest text-muted-foreground">We can talk about</p>
            <div className="space-y-4 text-foreground text-lg">
              <p>Design, AI, or products worth building</p>
              <p>Collaborations that don't feel forced</p>
              <p>Or just a thought you don't know where to put yet</p>
            </div>
          </div>

          {/* Final note */}
          <div className="space-y-6 pt-12 border-t border-border/30">
            <p className="font-serif text-xl text-foreground/80">
              No pitches. No rush. No pretending.
            </p>
            <p className="text-muted-foreground">
              Just conversations that feel real and work that feels worth doing.
            </p>
          </div>
        </div>
      </section>

      {/* Space for bottom nav */}
      <div className="h-24" />
    </main>
  )
}
