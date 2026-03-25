"use client"

import { useState } from "react"
import Link from "next/link"
import { PageHeader } from "@/components/ui/page-header"
import { SectionReveal } from "@/components/ui/section-reveal"
import { TextReveal } from "@/components/ui/text-reveal"
import { ArrowUpRight } from "@/components/ui/icons"

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false)
  const [copiedPhone, setCopiedPhone] = useState(false)

  const handleCopy = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text)
    if (type === 'email') {
      setCopiedEmail(true)
      setTimeout(() => setCopiedEmail(false), 2000)
    } else {
      setCopiedPhone(true)
      setTimeout(() => setCopiedPhone(false), 2000)
    }
  }

  return (
    <main className="min-h-screen bg-background text-foreground relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] bg-[radial-gradient(circle_at_top_right,oklch(0.95_0.02_40)_0%,transparent_60%)] pointer-events-none -z-10 opacity-60" />
      
      <PageHeader 
        title="If you've read this far," 
        subtitle="we probably already think the same way."
      />

      {/* Main content */}
      <SectionReveal className="py-12 md:py-24 px-8 mb-32">
        <div className="max-w-3xl mx-auto space-y-24">

          {/* Direct contact & Socials */}
          <div className="grid md:grid-cols-2 gap-16">
            <div className="space-y-8">
              <p className="text-sm uppercase tracking-widest text-muted-foreground">Reach me directly</p>
              
              <div className="space-y-6">
                <div>
                  <button onClick={() => handleCopy("hello@sunilvenkatesh.com", "email")} className="group flex items-center gap-4 hover:opacity-70 transition-opacity text-left">
                    <span className="font-serif text-2xl md:text-3xl text-foreground">hello@sunilvenkatesh.com</span>
                    <span className="text-muted-foreground transition-all duration-300 w-6 flex items-center justify-center">
                      {copiedEmail ? <span className="text-green-600 dark:text-green-400">✓</span> : <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1" />}
                    </span>
                  </button>
                  <p className="text-muted-foreground text-sm mt-2">Preferred for most inquiries</p>
                </div>

                <div>
                  <button onClick={() => handleCopy("+918095218947", "phone")} className="group flex items-center gap-4 hover:opacity-70 transition-opacity text-left">
                    <span className="font-serif text-2xl md:text-3xl text-foreground">+91 8095218947</span>
                    <span className="text-muted-foreground transition-all duration-300 w-6 flex items-center justify-center">
                      {copiedPhone ? <span className="text-green-600 dark:text-green-400">✓</span> : <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1" />}
                    </span>
                  </button>
                  <p className="text-muted-foreground text-sm mt-2">Call or WhatsApp for urgent matters</p>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <p className="text-sm uppercase tracking-widest text-muted-foreground">Digital Presence</p>
              
              <div className="flex flex-col gap-4">
                <a href="https://linkedin.com/in/sunil-venkatesh" target="_blank" className="group flex items-center gap-4 text-xl font-serif text-foreground hover:opacity-70 transition-opacity w-fit">
                  <span>LinkedIn</span>
                  <ArrowUpRight className="text-muted-foreground group-hover:translate-x-1 group-hover:-translate-y-1" />
                </a>
                <a href="https://twitter.com/SunilVenky1" target="_blank" className="group flex items-center gap-4 text-xl font-serif text-foreground hover:opacity-70 transition-opacity w-fit">
                  <span>Twitter / X</span>
                  <ArrowUpRight className="text-muted-foreground group-hover:translate-x-1 group-hover:-translate-y-1" />
                </a>
                <a href="https://aikra.live" target="_blank" className="group flex items-center gap-4 text-xl font-serif text-foreground hover:opacity-70 transition-opacity w-fit mt-4 pt-4 border-t border-border/20">
                  <span>Aikra Studio</span>
                  <ArrowUpRight className="text-muted-foreground group-hover:translate-x-1 group-hover:-translate-y-1" />
                </a>
              </div>
            </div>
          </div>

          {/* We can talk about - tightened */}
          <div className="space-y-8">
            <p className="text-sm uppercase tracking-widest text-muted-foreground">We can talk about</p>
            <div className="space-y-6 text-foreground text-xl md:text-2xl font-serif italic">
              <TextReveal text="Design, AI, or products worth building." delay={0.1} />
              <TextReveal text="Collaborations that don't feel forced." delay={0.2} />
              <TextReveal text="Or just a thought you don't know where to put yet." delay={0.3} />
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
      </SectionReveal>
    </main>
  )
}
