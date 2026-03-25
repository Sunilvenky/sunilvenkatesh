"use client"

import { useRef, useState, useEffect } from "react"
import Link from "next/link"
import { motion, useScroll, useTransform, useInView } from "framer-motion"
import { Magnetic } from "@/components/ui/magnetic"
import { ArrowRight } from "@/components/ui/icons"

export default function About() {
  const [activeBg, setActiveBg] = useState("oklch(0.98 0.001 270)")
  const [activeAct, setActiveAct] = useState("I")
  
  const acts = ["I", "II", "III", "IV", "V"]

  return (
    <main 
      style={{ backgroundColor: activeBg }}
      className="min-h-screen transition-colors duration-1000 ease-out relative"
    >
      {/* Act Navigation Dots */}
      <div className="fixed right-10 top-1/2 -translate-y-1/2 z-50 hidden xl:flex flex-col gap-8 mix-blend-difference items-center justify-center">
        {/* Connecting line */}
        <div className="absolute top-2 bottom-2 w-[1px] bg-white/10 right-[3px] -z-10" />
        
        {acts.map((actIndex) => (
          <div 
            key={actIndex}
            className="group relative flex items-center justify-end w-24 cursor-default"
          >
            <span className="absolute right-4 pr-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-sans text-xs uppercase tracking-widest text-white whitespace-nowrap">
              Act {actIndex}
            </span>
            <div 
              className={`w-2 h-2 rounded-full transition-all duration-500 relative z-10 ${
                activeAct === actIndex ? "bg-white scale-150" : "bg-white/30 group-hover:scale-125 group-hover:bg-white/80"
              }`}
            />
          </div>
        ))}
      </div>

      <div className="relative z-10">
        {/* ACT I: ORDER */}
        <ActScene 
          act="I" 
          title="Order" 
          textColor="text-[oklch(0.15_0_0)]"
          mutedColor="text-[oklch(0.15_0_0)]/40"
          bg="oklch(0.98 0.001 270)"
          setBg={setActiveBg}
          setActiveAct={setActiveAct}
        >
          <p>There was a time when everything looked right.</p>
          <p>Graduation done. Career moving.</p>
          <p>Life, on paper, making sense.</p>
          <p className="pt-8 font-serif italic text-2xl">Inside, it wasn't.</p>
          <p className="pt-12">Some losses don't break you loudly. They rearrange you quietly.</p>
          <p className="pt-8">I didn't fall apart. I drifted.</p>
          <p className="pt-8">Into distractions that looked harmless. Into noise that felt productive. Into habits that kept me occupied enough to not feel.</p>
          <p className="pt-12 opacity-40 italic">For a long time, I mistook movement for progress.</p>
        </ActScene>

        {/* ACT II: NOISE */}
        <ActScene 
          act="II" 
          title={<>Noise, Escape,<br />Control</>} 
          textColor="text-[oklch(0.98_0_0)]"
          mutedColor="text-[oklch(0.98_0_0)]/40"
          bg="oklch(0.12 0 0)"
          setBg={setActiveBg}
          setActiveAct={setActiveAct}
        >
          <p>Music became refuge before it became identity.</p>
          <p className="pt-8">I became a DJ. Then an event manager.</p>
          <p className="pt-12">Clubs. Concerts. Festivals. Crowds moving in unison. Lights flashing. Adrenaline doing its job.</p>
          <p className="pt-8">From the outside, it looked alive. From the inside, it was survival.</p>
          <p className="pt-12 italic text-3xl font-serif">A quieter curiosity refused to die.</p>
          <p className="pt-8">How things work. How systems think. How technology shapes behavior.</p>
          <p className="pt-4">That curiosity didn't demand attention. It waited. It saved me.</p>
        </ActScene>

        {/* ACT III: THE PIVOT */}
        <ActScene 
          act="III" 
          title="The Pivot" 
          textColor="text-[oklch(0.15_0_0)]"
          mutedColor="text-[oklch(0.15_0_0)]/40"
          bg="oklch(0.98 0.001 270)"
          setBg={setActiveBg}
          setActiveAct={setActiveAct}
        >
          <p>I walked away and stepped into software engineering.</p>
          <p className="pt-8">Code was clean. Logical. Predictable.</p>
          <p className="pt-8">For the first time in a while, my mind had structure.</p>
          <p className="pt-12">I learned deeply. Built systems. Worked with people far sharper than me. Spent years inside a top tech environment doing meaningful work.</p>
          <p className="pt-12 italic opacity-60">But stability doesn't automatically bring clarity. Something still felt unfinished.</p>
        </ActScene>

        {/* ACT IV: BREAKING THE PATTERN */}
        <ActScene 
          act="IV" 
          title={<>Breaking the<br />Pattern</>} 
          textColor="text-[oklch(0.98_0_0)]"
          mutedColor="text-[oklch(0.98_0_0)]/40"
          bg="oklch(0.15 0 0)"
          setBg={setActiveBg}
          setActiveAct={setActiveAct}
        >
          <p>The real shift didn't happen in an office.</p>
          <p className="pt-8">It happened when I stopped running long enough to listen.</p>
          <p className="pt-12 text-2xl leading-relaxed">I realized I didn't need more milestones. I needed space. So I chose uncertainty.</p>
          <p className="pt-8">Not luxury travel. Honest travel.</p>
          <p className="pt-8">Long roads. Unknown places. Missed plans. Minimal belongings. Time alone with my thoughts.</p>
          <p className="pt-12 text-4xl font-serif">Wholeness didn't arrive as motivation. It arrived as acceptance.</p>
        </ActScene>

        {/* ACT V: INTEGRATION */}
        <ActScene 
          act="V" 
          title="Integration" 
          textColor="text-[oklch(0.15_0_0)]"
          mutedColor="text-[oklch(0.15_0_0)]/30"
          bg="oklch(0.98 0.001 270)"
          setBg={setActiveBg}
          setActiveAct={setActiveAct}
        >
          <p>Moving through unfamiliar places taught me something permanent.</p>
          <p className="pt-8">You don't need to own much to live fully. You don't need to be busy to be valuable. And you don't need to escape your past.</p>
          <p className="pt-12 font-serif text-4xl">You need to integrate it.</p>
        </ActScene>
      </div>

      <section className="min-h-screen flex flex-col justify-center px-4 py-32 z-10 relative">
        <div className="max-w-3xl mx-auto space-y-16 text-balance">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-5xl md:text-8xl font-light text-[oklch(0.15_0_0)]"
          >
            This Space
          </motion.h2>

          <div className="space-y-8 text-xl text-[oklch(0.15_0_0)]/80 leading-relaxed max-w-2xl">
            <p>This isn't a highlight reel. It's a living record of how clarity forms when you stop pretending to have everything figured out.</p>
            <p className="pt-12 text-2xl italic font-serif text-[oklch(0.15_0_0)]">
              I've been many things. A DJ. An event manager. An engineer.
            </p>
            <p>Becoming a traveler, builder, and conscious creator has been the most honest version so far.</p>
          </div>

          <div className="pt-24 flex justify-center">
            <Magnetic strength={0.3}>
              <Link
                href="/work"
                className="group inline-flex items-center gap-6 font-serif text-foreground text-3xl md:text-5xl hover:text-primary transition-colors border-b border-foreground/10 pb-4"
              >
                <span>Explore the work</span>
                <ArrowRight className="group-hover:translate-x-4 h-8 w-8 md:h-12 md:w-12" />
              </Link>
            </Magnetic>
          </div>
        </div>
      </section>
    </main>
  )
}

function ActScene({ 
  act, 
  title, 
  textColor, 
  mutedColor, 
  bg,
  setBg,
  setActiveAct,
  children 
}: { 
  act: string; 
  title: React.ReactNode; 
  textColor: string; 
  mutedColor: string;
  bg: string;
  setBg: (color: string) => void;
  setActiveAct: (act: string) => void;
  children: React.ReactNode 
}) {
  const ref = useRef<HTMLElement>(null)
  
  // Use a negative margin to trigger when the element reaches the middle of the screen
  const isInView = useInView(ref, { margin: "-40% 0px -40% 0px" })

  useEffect(() => {
    if (isInView) {
      setBg(bg)
      setActiveAct(act)
    }
  }, [isInView, bg, setBg, setActiveAct, act])

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 0.45, 0.55, 1], [20, 0, 0, -20])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  return (
    <section ref={ref} className="min-h-screen flex flex-col justify-center px-8 md:px-24 py-32 relative">
      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-24 items-start text-balance">
        <motion.div style={{ y, opacity }} className="sticky top-32">
          <p className={`text-[10px] font-sans uppercase tracking-[0.4em] mb-6 ${mutedColor}`}>Act {act}</p>
          <h2 className={`font-serif text-5xl md:text-7xl font-light leading-[0.8] ${textColor}`}>
            {title}
          </h2>
        </motion.div>

        <motion.div 
          style={{ opacity }}
          className={`space-y-12 text-lg md:text-xl leading-relaxed ${textColor} font-sans font-light max-w-3xl`}
        >
          {children}
        </motion.div>
      </div>
    </section>
  )
}
