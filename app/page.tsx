"use client"

import { useRef } from "react"
import Link from "next/link"
import { motion, useScroll, useTransform, useInView } from "framer-motion"
import { Magnetic } from "@/components/ui/magnetic"
import { ArrowDown, ArrowRight } from "@/components/ui/icons"

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null)
  
  // Track scroll only for the Hero container, not the entire page
  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  })

  // Fade out and translate up relatively quickly as we scroll down the hero section
  const opacity1 = useTransform(heroScroll, [0, 0.5], [1, 0])
  const scale1 = useTransform(heroScroll, [0, 0.5], [1, 0.95])
  const y1 = useTransform(heroScroll, [0, 0.5], [0, -50])
  const filter1 = useTransform(heroScroll, [0, 0.5], ["blur(0px)", "blur(10px)"])

  const identityLines = [
    "I build by thinking first.",
    "I see systems before screens.",
    "I move through places to reset perspective.",
    "I use AI to remove friction, not add spectacle.",
    "I design for people long before metrics.",
  ]

  return (
    <main className="relative bg-background text-foreground">
      {/* SECTION 1: THE OPENING SCENE */}
      <section ref={heroRef} className="relative h-[150vh]">
        <div className="sticky top-0 h-screen flex flex-col items-center justify-center px-4 overflow-hidden bg-black text-[oklch(0.95_0_0)]">
          
          {/* Cinematic Background Image */}
          <motion.div 
            className="absolute inset-0 w-full h-full"
            style={{ scale: useTransform(heroScroll, [0, 1], [1, 1.1]), opacity: useTransform(heroScroll, [0, 0.5], [0.5, 0]) }}
          >
            <img src="/ladakh.jpg" alt="Cinematic background" className="w-full h-full object-cover filter grayscale contrast-125" />
          </motion.div>
          
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent pointer-events-none" />
          <motion.div 
            style={{ opacity: opacity1, scale: scale1, y: y1, filter: filter1 }}
            className="relative z-10 text-center max-w-3xl mt-24"
          >
            <h1 className="font-serif text-4xl md:text-7xl leading-tight text-balance">
              I didn't set out to build products.
              <br />
              <span className="opacity-50">I was trying to make sense of things.</span>
            </h1>
            
            <motion.p 
              className="mt-12 font-sans text-[10px] uppercase tracking-[0.4em] text-background/60"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 1 }}
            >
              Sunil Venkatesh — Systems Thinker & Product Designer
            </motion.p>
            
            <motion.div 
               className="mt-32 flex flex-col items-center gap-2 text-background/30 mx-auto w-fit"
               animate={{ y: [0, 8, 0] }}
               transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <span className="text-[10px] uppercase tracking-[0.2em] font-sans">Scroll</span>
              <ArrowDown className="opacity-50" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: IDENTITY AS A GALLERY */}
      <section className="min-h-screen bg-foreground text-background flex flex-col justify-center px-4 py-32 z-10 relative overflow-hidden">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="space-y-24 order-2 lg:order-1">
            {identityLines.map((line, index) => (
              <IdentityLine key={index} text={line} index={index} />
            ))}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.8 }}
            >
              <p className="font-sans text-sm text-background/50 leading-relaxed uppercase tracking-widest pl-8 border-l border-background/20 mt-12">
                I don't fit into a single title.
                <br />
                And I don't try to.
              </p>
            </motion.div>
          </div>

          <div className="hidden lg:block relative h-[70vh] rounded-2xl overflow-hidden glass opacity-60 mix-blend-luminosity order-1 lg:order-2">
            <motion.img 
               src="/alps.jpg"
               className="w-full h-full object-cover"
               initial={{ scale: 1.1, objectPosition: "center 20%" }}
               whileInView={{ scale: 1, objectPosition: "center 80%" }}
               transition={{ duration: 20, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
             />
             <div className="absolute inset-0 bg-gradient-to-tr from-foreground/80 via-transparent to-transparent" />
          </div>
        </div>
      </section>

      {/* SECTION 3: THE PHILOSOPHY (PARALLAX) */}
      <section className="min-h-screen relative flex flex-col justify-center px-4 py-32 overflow-hidden bg-background">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background z-10" />
          <motion.div
            initial={{ opacity: 0, scale: 1.1 }}
            whileInView={{ opacity: 0.15, scale: 1 }}
            viewport={{ margin: "-200px" }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="w-full h-full"
          >
            <img src="/spiti.jpg" className="w-full h-full object-cover grayscale mix-blend-multiply dark:mix-blend-screen" />
          </motion.div>
        </div>

        <div className="max-w-3xl mx-auto relative z-10">
          <motion.p 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-4xl md:text-6xl leading-tight text-foreground mb-24 text-balance"
          >
            I've worked in noise.
            <br />
            I've worked in silence.
            <br />
            <span className="text-foreground/30 italic">Both taught me the same lesson.</span>
          </motion.p>

          <div className="space-y-32">
            <PhilosophyBlock 
              text={<>Most products shout.<br />Very few are clear.</>} 
            />

            <div className="text-center text-foreground/20 text-4xl font-light">
              &mdash;
            </div>

            <PhilosophyBlock 
              text={<>My work lives in that quieter place —<br />where complexity disappears<br />and what remains feels obvious.</>} 
            />
          </div>
        </div>
      </section>

      {/* SECTION 3.5: SOCIAL PROOF TO TESTIMONIALS */}
      <section className="py-32 bg-background overflow-hidden relative">
        <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-background to-transparent z-10" />
        
        <div className="border-y border-border/10 py-16">
          <p className="font-sans text-xs uppercase tracking-[0.4em] opacity-40 mb-16 text-center">Those Who Noticed</p>
          <div className="flex whitespace-nowrap opacity-80">
            <motion.div 
              className="flex gap-24 items-center px-8"
              animate={{ x: [0, -2000] }}
              transition={{ repeat: Infinity, ease: "linear", duration: 40 }}
            >
               {[...Array(2)].map((_, index) => (
                 <div key={index} className="flex gap-24 items-center">
                   <div className="flex items-center gap-6 group">
                     <span className="font-serif text-2xl md:text-3xl italic font-light text-foreground group-hover:text-primary transition-colors">"Turned our chaos into a system."</span>
                     <span className="font-sans text-[10px] uppercase tracking-widest opacity-40">— Series B Operator</span>
                   </div>
                   <span className="font-sans text-xs opacity-20">&bull;</span>
                   <div className="flex items-center gap-6 group">
                     <span className="font-serif text-2xl md:text-3xl italic font-light text-foreground group-hover:text-primary transition-colors">"It finally feels obvious."</span>
                     <span className="font-sans text-[10px] uppercase tracking-widest opacity-40">— Travel Agency Founder</span>
                   </div>
                   <span className="font-sans text-xs opacity-20">&bull;</span>
                   <div className="flex items-center gap-6 group">
                     <span className="font-serif text-2xl md:text-3xl italic font-light text-foreground group-hover:text-primary transition-colors">"We don't need training to use it."</span>
                     <span className="font-sans text-[10px] uppercase tracking-widest opacity-40">— Enterprise Team Lead</span>
                   </div>
                   <span className="font-sans text-xs opacity-20">&bull;</span>
                 </div>
               ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 4: THE BRIDGE - Cinematic Zoom Card */}
      <section className="min-h-screen relative flex flex-col justify-center px-4 py-32 bg-background z-20">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, y: 100 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-5xl mx-auto w-full glass rounded-3xl p-12 md:p-32 text-center space-y-16 surface-elevated relative overflow-hidden group"
        >
          {/* Subtle hover gradient inside the card */}
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
          
          <div className="relative z-10 space-y-16">
            <h2 className="font-serif text-4xl md:text-6xl leading-tight text-foreground/90 font-light">
              AI systems. Products. Interfaces.
              <br />
              <span className="text-foreground/40 italic text-3xl md:text-5xl block mt-6">The work speaks quieter than this page.</span>
            </h2>
            
            <div className="flex justify-center">
              <Magnetic strength={0.3}>
                <Link
                  href="/work"
                  className="group inline-flex items-center gap-6 font-sans uppercase tracking-[0.2em] text-foreground hover:text-primary transition-colors text-xs border border-foreground/10 px-8 py-4 rounded-full bg-background/50 hover:bg-background"
                >
                  <span>Enter the Archive</span>
                  <ArrowRight className="group-hover:translate-x-1" />
                </Link>
              </Magnetic>
            </div>
          </div>
        </motion.div>
      </section>

      {/* SECTION 5: THE INVITATION */}
      <section className="h-screen flex flex-col items-center justify-center px-4 relative overflow-hidden bg-background">
        <div className="relative z-10 text-center max-w-2xl space-y-12">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ margin: "-200px" }}
            className="font-serif text-3xl md:text-4xl leading-relaxed text-foreground text-balance"
          >
            If this way of thinking feels familiar,
            <br />
            you're already in the right place.
          </motion.p>

          <div className="flex justify-center">
            <Magnetic strength={0.3}>
              <Link
                href="/about"
                className="group inline-flex items-center gap-2 font-sans uppercase tracking-[0.2em] text-foreground/60 hover:text-foreground transition-colors text-xs"
              >
                <span>Continue the timeline</span>
                <ArrowRight className="group-hover:translate-x-1" />
              </Link>
            </Magnetic>
          </div>
        </div>
      </section>

      {/* Global Footer handles the bottom now */}
    </main>
  )
}

function IdentityLine({ text, index }: { text: string; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-20% 0px -20% 0px" })

  const sizes = [
    "text-5xl md:text-7xl",
    "text-4xl md:text-6xl",
    "text-3xl md:text-5xl",
    "text-2xl md:text-4xl",
    "text-xl md:text-3xl"
  ]
  const sizeClass = sizes[index] || sizes[sizes.length - 1]
  const direction = index % 2 === 0 ? -40 : 40

  return (
    <div className="relative overflow-hidden py-2" ref={ref}>
      <motion.div
        className="absolute left-0 top-1/2 h-[1px] bg-background/20 z-0 origin-left"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: isInView ? 1 : 0 }}
        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1], delay: index * 0.1 }}
      />
      <motion.p
        className={`font-serif ${sizeClass} leading-tight font-light text-balance relative z-10 inline-block bg-foreground pr-8`}
        initial={{ opacity: 0, x: direction, filter: "blur(8px)" }}
        animate={{ 
          opacity: isInView ? 1 : 0.1,
          x: isInView ? 0 : direction,
          filter: isInView ? "blur(0px)" : "blur(4px)"
        }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: index * 0.1 + 0.2 }}
      >
        {text}
      </motion.p>
    </div>
  )
}

function PhilosophyBlock({ text }: { text: React.ReactNode }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] })
  const y = useTransform(scrollYProgress, [0, 1], [30, -30])

  return (
    <motion.div
      ref={ref}
      style={{ y }}
      className="line-accent pl-8"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 1 }}
    >
      <p className="font-serif text-3xl md:text-5xl leading-tight text-foreground text-balance">
        {text}
      </p>
    </motion.div>
  )
}
