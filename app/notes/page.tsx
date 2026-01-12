"use client"

import Link from "next/link"

export default function Notes() {
  const notes = [
    {
      id: 1,
      title: "The ego is the only thing that can truly hurt",
      date: "January 2026",
      excerpt: "Your depression isn't weakness. It's a choice you keep repeating. And only one thing gets hurt.",
      readTime: "7 min",
    },
    {
      id: 2,
      title: "Joy is not earned. It's remembered.",
      date: "December 2025",
      excerpt: "You were happy as a child for no reason. Then we taught you to earn it. Now you're chasing what you already had.",
      readTime: "6 min",
    },
    {
      id: 3,
      title: "Slowing down to speed up",
      date: "November 2025",
      excerpt: "At 14,000 feet, I learned my entire definition of productivity was broken. The fastest way forward is standing still.",
      readTime: "7 min",
    },
    {
      id: 4,
      title: "Markets teach what ego won't listen to",
      date: "October 2025",
      excerpt: "I lost money as a momentum trader, more as a technical analyst. Then realized the market wasn't the problem. I was.",
      readTime: "6 min",
    },
    {
      id: 5,
      title: "Death is not a destination. It's every breath.",
      date: "September 2025",
      excerpt: "We live like we have forever. But with every exhale, you're already dying. And that's exactly the point.",
      readTime: "7 min",
    },
    {
      id: 6,
      title: "A Short Guide to a Successful Life",
      date: "August 2025",
      excerpt: "(The checklist nobody questions) Society says happiness is a house, car, kids, and burnout. But nobody asks if you're actually full.",
      readTime: "6 min",
    },
    {
      id: 7,
      title: "Why the Mountains (According to Society, I'm Wrong)",
      date: "July 2025",
      excerpt: "People ask why I climb mountains instead of climbing LinkedIn. The mountains have an answer they won't like.",
      readTime: "8 min",
    },
    {
      id: 8,
      title: "Most Goals Are Just Social Imitation",
      date: "June 2025",
      excerpt: "You're running someone else's race very efficiently. And society applauds movement. Very little for stopping to ask: do I actually want this?",
      readTime: "6 min",
    },
  ]

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

      {/* Intro */}
      <section className="py-24 px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-serif text-5xl md:text-6xl mb-6">Notes</h1>
          <p className="text-lg text-muted-foreground">
            Observations that didn't fit anywhere else.
          </p>
        </div>
      </section>

      {/* Notes list */}
      <section className="py-12 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-16">
            {notes.map((note) => (
              <Link key={note.id} href={`/notes/${note.id}`} className="group block">
                <article className="space-y-4">
                  <div className="flex items-baseline justify-between gap-4">
                    <h2 className="font-serif text-2xl md:text-3xl group-hover:text-primary transition-colors">
                      {note.title}
                    </h2>
                    <span className="text-sm text-muted-foreground flex-shrink-0">{note.readTime}</span>
                  </div>
                  <p className="text-foreground/70 leading-relaxed">
                    {note.excerpt}
                  </p>
                  <p className="text-sm text-muted-foreground">{note.date}</p>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Space */}
      <div className="h-32" />

      {/* Footer thought */}
      <section className="py-16 px-4 border-t border-border/30">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-muted-foreground italic">
            More observations accumulate. Slowly.
          </p>
        </div>
      </section>
    </main>
  )
}
