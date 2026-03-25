"use client"

import Link from "next/link"
import { PageHeader } from "@/components/ui/page-header"
import { SectionReveal } from "@/components/ui/section-reveal"
import { SectionCTA } from "@/components/ui/section-cta"
import { ArrowRight } from "@/components/ui/icons"

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
      <PageHeader 
        title="Notes" 
        subtitle="Observations that didn't fit anywhere else."
      />

      {/* Featured Note */}
      <section className="py-12 mb-16 max-w-5xl mx-auto px-4">
        <SectionReveal>
          <p className="font-sans text-xs uppercase tracking-[0.4em] opacity-40 mb-12 text-center md:text-left">Featured Essay</p>
          <Link href={`/notes/1`} className="group block relative overflow-hidden rounded-3xl glass p-8 md:p-16 surface-elevated transform-gpu transition-all duration-700 hover:-translate-y-2">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            
            <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                 <div className="flex items-center gap-4 text-xs font-sans uppercase tracking-widest text-primary/80">
                   <span>{notes[0].date}</span>
                   <span>&bull;</span>
                   <span>{notes[0].readTime}</span>
                 </div>
                 <h2 className="font-serif text-4xl md:text-6xl font-light leading-tight group-hover:text-primary transition-colors duration-500 text-balance">
                    {notes[0].title}
                 </h2>
              </div>
              <div className="space-y-8 md:border-l md:border-primary/20 md:pl-12">
                <p className="text-foreground/70 leading-relaxed text-xl md:text-2xl text-balance">
                  {notes[0].excerpt}
                </p>
                <div className="flex items-center gap-4 text-xs font-sans uppercase tracking-[0.2em] text-foreground/50 group-hover:text-foreground transition-colors">
                  <span>Read Full Essay</span>
                  <ArrowRight className="group-hover:translate-x-2" />
                </div>
              </div>
            </div>
          </Link>
        </SectionReveal>
      </section>

      {/* Archive Notes list */}
      <section className="py-12 mb-32 max-w-5xl mx-auto px-4">
        <p className="font-sans text-xs uppercase tracking-[0.4em] opacity-40 mb-12 text-center md:text-left">Archive</p>
        <div className="flex flex-col">
          {notes.slice(1).map((note, index) => (
            <SectionReveal delay={index * 0.05} key={note.id}>
              <Link href={`/notes/${note.id}`} className="group block border-t border-border/10 hover:bg-card/20 transition-colors duration-500 relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <article className="flex flex-col md:flex-row items-start md:items-baseline gap-6 md:gap-16 py-12 px-6 transform-gpu transition-all duration-500 group-hover:translate-x-4">
                  
                  <span className="font-serif text-3xl md:text-4xl opacity-20 group-hover:opacity-40 group-hover:text-primary transition-colors duration-500 shrink-0">
                    {String(index + 2).padStart(2, '0')}
                  </span>
                  
                  <div className="space-y-4 flex-grow">
                    <div className="flex items-baseline justify-between gap-4">
                      <h2 className="font-serif text-2xl md:text-3xl font-light group-hover:text-primary transition-colors">
                        {note.title}
                      </h2>
                      <span className="text-sm text-muted-foreground flex-shrink-0 hidden md:block">{note.readTime}</span>
                    </div>
                    <p className="text-foreground/70 leading-relaxed text-lg text-balance line-clamp-2 md:line-clamp-none">
                      {note.excerpt}
                    </p>
                    <div className="flex justify-between items-center pt-4">
                      <p className="text-xs uppercase tracking-widest text-muted-foreground">{note.date}</p>
                      <span className="text-sm text-muted-foreground md:hidden">{note.readTime}</span>
                    </div>
                  </div>
                </article>
              </Link>
            </SectionReveal>
          ))}
          <div className="border-t border-border/10" />
        </div>
      </section>

      {/* Footer thought */}
      <SectionCTA 
        message="More observations accumulate. Slowly." 
        buttonText="Return Home"
        href="/"
      />
    </main>
  )
}
