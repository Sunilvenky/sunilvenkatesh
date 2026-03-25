"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { PageHeader } from "@/components/ui/page-header"
import { SectionReveal } from "@/components/ui/section-reveal"
import { SectionCTA } from "@/components/ui/section-cta"

export default function Travel() {
  const destinations = [
    {
      id: 1,
      place: "Spiti Valley",
      country: "India",
      dates: "2023",
      theme: "Silence is productive",
      reflection: "Three weeks in one of India's most remote valleys. Spiti taught me that silence isn't absence—it's presence.",
      image: "/spiti.jpg",
    },
    {
      id: 2,
      place: "Ladakh",
      country: "India",
      dates: "2023",
      theme: "Owning less.",
      reflection: "Pangong Lake. Merak villages. Families who own almost nothing and lack nothing. What remains when you stop performing.",
      image: "/ladakh.jpg",
    },
    {
      id: 3,
      place: "Panch Kedar",
      country: "India",
      dates: "2022",
      theme: "The Mountains",
      reflection: "Five ancient temples. Endless vertical climbs. The Himalayas dismantled every story I told myself about strength.",
      image: "/panch-kedar.jpg",
    },
    {
      id: 4,
      place: "The Alps",
      country: "Europe",
      dates: "2022",
      theme: "Order",
      reflection: "Short hikes. Marked trails. Clear paths. No drama. No bravado. And somehow, that was the lesson.",
      image: "/alps.jpg",
    },
  ]

  return (
    <main className="bg-[oklch(0.12_0_0)] text-[oklch(0.95_0_0)] min-h-screen">
      <PageHeader 
        title="Travel" 
        label="Perspective Engine" 
      />

      {/* Vertical Destinations Stack */}
      <section className="pb-32 px-4 md:px-8">
        <div className="max-w-4xl mx-auto space-y-16">
          {destinations.map((dest, index) => (
            <SectionReveal key={dest.id} delay={index * 0.1} className="relative w-full h-[600px] overflow-hidden rounded-3xl group">
              {/* Background Image & Scrim */}
              <img 
                src={dest.image} 
                alt={dest.place}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20 transition-opacity duration-500 group-hover:opacity-80" />
              
              <div className="relative z-10 p-8 md:p-16 flex flex-col justify-between h-full">
                <div className="flex justify-between items-baseline mb-12">
                  <span className="text-xs uppercase tracking-[0.2em] font-sans glass px-4 py-2 rounded-full border-white/20">{dest.dates}</span>
                  <span className="text-xs uppercase tracking-[0.2em] font-sans glass px-4 py-2 rounded-full border-white/20">{dest.country}</span>
                </div>
                
                <div className="mt-auto max-w-2xl transform-gpu transition-transform duration-700 translate-y-8 group-hover:translate-y-0">
                  <div className="space-y-4 mb-8">
                    <h2 className="font-serif text-5xl md:text-7xl font-light text-white leading-tight">
                      {dest.place}
                    </h2>
                    <p className="font-serif italic text-2xl md:text-3xl text-white/70">&ldquo;{dest.theme}&rdquo;</p>
                  </div>

                  <p className="font-sans font-light text-lg leading-relaxed text-balance text-white/90 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                    {dest.reflection}
                  </p>
                </div>
              </div>
            </SectionReveal>
          ))}
          
          {/* The Final Thought Box */}
          <SectionReveal className="py-32 flex items-center justify-center border-t border-[oklch(0.95_0_0)]/10 mt-32">
            <p className="font-serif text-2xl md:text-4xl leading-relaxed text-center text-balance opacity-80">
              Travel is how I've learned to observe before judging, to sit with uncertainty, and to understand that clarity doesn't come from running toward something.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* CTA */}
      <SectionCTA message="It comes from running away from nothing." />
    </main>
  )
}
