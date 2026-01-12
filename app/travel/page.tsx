"use client"

import Link from "next/link"

export default function Travel() {
  const destinations = [
    {
      id: 1,
      place: "Spiti Valley, India",
      dates: "2023",
      theme: "Silence is productive",
      reflection:
        "Three weeks in one of India's most remote valleys. Spiti taught me that silence isn't absence—it's presence.",
    },
    {
      id: 2,
      place: "Ladakh, India",
      dates: "2023",
      theme: "Owning less. Carrying more.",
      reflection:
        "Pangong Lake. Merak villages. Families who own almost nothing and lack nothing. What remains when you stop performing.",
    },
    {
      id: 3,
      place: "Uttarakhand & Panch Kedar",
      dates: "2022",
      theme: "The mountains don't care who you think you are",
      reflection:
        "Five ancient temples. Endless vertical climbs. The Himalayas dismantled every story I told myself about strength.",
    },
    {
      id: 4,
      place: "Europe & The Alps",
      dates: "2022",
      theme: "Order is a form of respect",
      reflection:
        "Short hikes. Marked trails. Clear paths. No drama. No bravado. And somehow, that was the lesson.",
    },
  ]

  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <header className="sticky top-0 z-50 border-b border-border/50 bg-background/95 backdrop-blur py-6 px-4">
        <div className="max-w-4xl mx-auto">
          <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
            ← home
          </Link>
        </div>
      </header>

      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm tracking-widest text-muted-foreground mb-4">Perspective Engine</p>
          <h1 className="font-serif text-5xl md:text-6xl mb-8">Movement</h1>
          <p className="text-lg text-foreground/70 max-w-2xl leading-relaxed">
            Travel stripped me down. These are the places that taught me something permanent.
          </p>
        </div>
      </section>

      {/* Destinations */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto space-y-16">
          {destinations.map((destination) => (
            <Link key={destination.id} href={`/travel/${destination.id}`} className="group block">
              <article className="space-y-4">
                <div className="flex items-baseline justify-between gap-4 flex-wrap">
                  <h2 className="font-serif text-3xl md:text-4xl group-hover:text-primary transition-colors">
                    {destination.place}
                  </h2>
                  <span className="text-sm text-muted-foreground">{destination.dates}</span>
                </div>
                <p className="font-serif text-foreground/60 italic">&ldquo;{destination.theme}&rdquo;</p>
                <p className="text-foreground/70 leading-relaxed max-w-2xl">
                  {destination.reflection}
                </p>
                <span className="inline-block text-sm text-muted-foreground group-hover:text-foreground transition-colors pt-2">
                  Read more →
                </span>
              </article>
            </Link>
          ))}
        </div>
      </section>

      {/* Why this matters */}
      <section className="py-24 px-4 mt-12">
        <div className="max-w-3xl mx-auto">
          <p className="font-serif text-2xl md:text-3xl leading-relaxed text-foreground">
            Travel is how I've learned to observe before judging, to sit with uncertainty, and to understand that 
            clarity doesn't come from running toward something—it comes from running away from nothing.
          </p>
        </div>
      </section>

      {/* Space for bottom nav */}
      <div className="h-24" />
    </main>
  )
}
