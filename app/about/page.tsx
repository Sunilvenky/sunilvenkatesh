"use client"

import type React from "react"

import { useEffect, useState } from "react"
import Link from "next/link"

export default function About() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  interface ActSectionProps {
    actNumber: string
    title: string
    bgColor: string
    textColor: string
    children: React.ReactNode
  }

  const ActSection = ({ actNumber, title, bgColor, textColor, children }: ActSectionProps) => (
    <section style={{ backgroundColor: bgColor }} className="min-h-screen flex flex-col justify-center px-4 py-20">
      <div className="max-w-2xl mx-auto">
        <p className={`text-xs font-light uppercase tracking-widest ${textColor} mb-6 opacity-60`}>Act {actNumber}</p>
        <h2 style={{ color: textColor }} className="font-serif text-5xl md:text-6xl font-light mb-12 leading-tight">
          {title}
        </h2>

        <div style={{ color: textColor }} className="space-y-6 text-lg leading-relaxed">
          {children}
        </div>
      </div>
    </section>
  )

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

      {/* ACT I: ORDER */}
      <ActSection actNumber="I" title="Order" bgColor="oklch(0.95 0.003 270)" textColor="oklch(0.2 0 0)">
        <p>There was a time when everything looked right.</p>
        <p>Graduation done.</p>
        <p>Career moving.</p>
        <p>Life, on paper, making sense.</p>
        <p className="pt-4">Inside, it wasn't.</p>

        <p className="pt-8">Some losses don't break you loudly.</p>
        <p>They rearrange you quietly.</p>

        <p className="pt-8">I didn't fall apart.</p>
        <p>I drifted.</p>

        <p className="pt-8">Into distractions that looked harmless.</p>
        <p>Into noise that felt productive.</p>
        <p>Into habits that kept me occupied enough to not feel.</p>

        <p className="pt-8">Music got louder.</p>
        <p>Nights stretched longer.</p>
        <p>Purpose blurred at the edges.</p>

        <p className="pt-8">I showed up everywhere.</p>
        <p>I just wasn't fully there.</p>

        <p className="pt-8 italic">For a long time, I mistook movement for progress.</p>
      </ActSection>

      {/* ACT II: NOISE, ESCAPE, CONTROL */}
      <ActSection actNumber="II" title="Noise, Escape, Control" bgColor="oklch(0.1 0 0)" textColor="oklch(0.95 0 0)">
        <p>Music became refuge before it became identity.</p>

        <p className="pt-8">I became a DJ.</p>
        <p>Then an event manager.</p>

        <p className="pt-8">Clubs. Concerts. Festivals.</p>
        <p>Crowds moving in unison.</p>
        <p>Lights flashing.</p>
        <p>Adrenaline doing its job.</p>

        <p className="pt-8">From the outside, it looked alive.</p>

        <p className="pt-4">From the inside, it was survival.</p>

        <p className="pt-8">Those years taught me something valuable.</p>
        <p>How energy shifts a room.</p>
        <p>How emotion spreads.</p>
        <p>How chaos is managed.</p>
        <p>How people respond under pressure.</p>

        <p className="pt-8">They also taught me how easily you can disappear</p>
        <p>while keeping everyone else entertained.</p>

        <p className="pt-12 italic">Somewhere between late nights and loud speakers,</p>
        <p className="italic">a quieter curiosity refused to die.</p>

        <p className="pt-8">How things work.</p>
        <p>How systems think.</p>
        <p>How technology shapes behavior.</p>

        <p className="pt-8">That curiosity didn't demand attention.</p>
        <p>It waited.</p>

        <p className="pt-4">It saved me.</p>
      </ActSection>

      {/* ACT III: THE PIVOT */}
      <ActSection actNumber="III" title="The Pivot" bgColor="oklch(0.98 0.001 270)" textColor="oklch(0.15 0 0)">
        <p>I walked away and stepped into software engineering.</p>

        <p className="pt-8">Code was clean.</p>
        <p>Logical.</p>
        <p>Predictable.</p>

        <p className="pt-8">For the first time in a while, my mind had structure.</p>

        <p className="pt-8">I learned deeply.</p>
        <p>Built systems.</p>
        <p>Worked with people far sharper than me.</p>
        <p>Spent years inside a top tech environment doing meaningful work.</p>

        <p className="pt-8">On paper, I had arrived.</p>

        <p className="pt-8 italic">But stability doesn't automatically bring clarity.</p>

        <p className="pt-8">Something still felt unfinished.</p>
      </ActSection>

      {/* ACT IV: BREAKING THE PATTERN */}
      <ActSection actNumber="IV" title="Breaking the Pattern" bgColor="oklch(0.18 0 0)" textColor="oklch(0.93 0 0)">
        <p>The real shift didn't happen in an office.</p>

        <p className="pt-8">It happened when I stopped running long enough to listen.</p>

        <p className="pt-8">I realized I didn't need more milestones.</p>
        <p>I needed space.</p>

        <p className="pt-8">So I chose uncertainty.</p>

        <p className="pt-8">Not luxury travel.</p>
        <p>Honest travel.</p>

        <p className="pt-8">Long roads.</p>
        <p>Unknown places.</p>
        <p>Missed plans.</p>
        <p>Minimal belongings.</p>

        <p className="pt-8">Time alone with my thoughts.</p>

        <p className="pt-12">Travel stripped things away.</p>
        <p>Titles. Labels. Noise.</p>

        <p className="pt-8">What remained was simple.</p>
        <p>And real.</p>

        <p className="pt-8">Wholeness didn't arrive as motivation.</p>
        <p className="italic">It arrived as acceptance.</p>
      </ActSection>

      {/* ACT V: INTEGRATION */}
      <ActSection actNumber="V" title="Integration" bgColor="oklch(0.96 0.002 270)" textColor="oklch(0.15 0 0)">
        <p>Moving through unfamiliar places taught me something permanent.</p>

        <p className="pt-8">You don't need to own much to live fully.</p>
        <p>You don't need to be busy to be valuable.</p>
        <p>And you don't need to escape your past.</p>

        <p className="pt-8">You need to integrate it.</p>

        <p className="pt-12 font-serif text-lg">Today, I work at the intersection of:</p>

        <ul className="space-y-2 ml-4 border-l-2 border-primary pl-6 mt-6">
          <li className="font-sans">AI engineering and software systems</li>
          <li className="font-sans">Web and product building</li>
          <li className="font-sans">Marketing, storytelling, and growth</li>
          <li className="font-sans">Design sensibility and user experience</li>
        </ul>

        <p className="pt-12">I don't just build products.</p>
        <p>I build systems with empathy.</p>

        <p className="pt-8">I don't just travel.</p>
        <p>I observe. Adapt. Simplify.</p>

        <p className="pt-8">I don't chase balance anymore.</p>
        <p>I practice alignment.</p>
      </ActSection>

      {/* THIS SPACE */}
      <section
        style={{ backgroundColor: "oklch(0.95 0.003 270)" }}
        className="min-h-screen flex flex-col justify-center px-4 py-20"
      >
        <div className="max-w-2xl mx-auto">
          <h2 className="font-serif text-5xl md:text-6xl font-light text-foreground mb-12">This Space</h2>

          <div className="space-y-6 text-lg text-foreground leading-relaxed">
            <p>This isn't a highlight reel.</p>

            <p className="pt-4">It's a living record of how clarity forms</p>
            <p>when you stop pretending to have everything figured out.</p>

            <p className="pt-8">Here, I share:</p>

            <ul className="space-y-2 ml-4 border-l-2 border-primary pl-6 mt-6">
              <li className="font-sans">What I build</li>
              <li className="font-sans">What I learn</li>
              <li className="font-sans">Where I go</li>
              <li className="font-sans">And how perspective keeps evolving</li>
            </ul>

            <p className="pt-12">I've been many things.</p>
            <p>A DJ.</p>
            <p>An event manager.</p>
            <p>An engineer.</p>

            <p className="pt-8">Becoming a traveler, builder, and conscious creator</p>
            <p>has been the most honest version so far.</p>

            <p className="pt-8">I don't know where this path ends.</p>

            <p className="pt-4 italic">For the first time, I'm not trying to control that.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="min-h-[70vh] bg-background flex flex-col justify-center px-4 py-20">
        <div className="max-w-2xl mx-auto text-center">
          <p className="font-serif text-3xl md:text-4xl text-foreground mb-12 leading-relaxed">
            Ready to see what this way of thinking produces?
          </p>
          <p className="text-muted-foreground mb-12">
            Each project carries part of the story.
          </p>
          <Link
            href="/work"
            className="inline-block text-foreground hover:text-primary transition-colors"
          >
            → Explore the work
          </Link>
        </div>
      </section>

      {/* Space for bottom nav */}
      <div className="h-24" />
    </main>
  )
}
