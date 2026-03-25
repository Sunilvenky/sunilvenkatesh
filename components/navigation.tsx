"use client"

import { useState, useRef } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, useScroll, useMotionValueEvent } from "framer-motion"
import { Magnetic } from "@/components/ui/magnetic"

export function Navigation() {
  const pathname = usePathname()
  const [hidden, setHidden] = useState(false)
  const { scrollY } = useScroll()
  const lastScrollY = useRef(0)

  useMotionValueEvent(scrollY, "change", (latest) => {
    const diff = latest - lastScrollY.current
    if (Math.abs(diff) > 10) {
      if (latest > 100 && diff > 0) {
        setHidden(true)
      } else {
        setHidden(false)
      }
      lastScrollY.current = latest
    }
  })

  const links = [
    { href: "/", label: "Index" },
    { href: "/about", label: "About" },
    { href: "/work", label: "Work" },
    { href: "/travel", label: "Travel" },
    { href: "/notes", label: "Notes" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <motion.nav
      variants={{
        visible: { y: 0, opacity: 1, scale: 1 },
        hidden: { 
          y: typeof window !== 'undefined' && window.innerWidth < 768 ? 100 : -100, 
          opacity: 0, 
          scale: 0.95 
        },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="fixed bottom-8 md:top-10 left-1/2 -translate-x-1/2 z-[200] w-[calc(100vw-2rem)] md:w-fit px-2"
      aria-label="Main Navigation"
    >
      <div className="flex items-center justify-center gap-4">
        <div className="bg-[oklch(0.12_0_0)]/90 backdrop-blur-xl border border-[oklch(0.95_0_0)]/10 px-1 md:px-2 py-1.5 md:py-2 rounded-full shadow-2xl overflow-hidden">
          <ul className="flex items-center gap-0 md:gap-1 overflow-x-auto scrollbar-hide max-w-full">
          {links.map((link) => (
            <li key={link.href} className="flex-shrink-0">
              <Magnetic strength={0.2}>
                <Link
                  href={link.href}
                  className={`relative px-3 md:px-6 py-2 block transition-colors font-sans text-[9px] md:text-[10px] uppercase tracking-[0.2em] ${
                    pathname === link.href
                      ? "text-[oklch(0.95_0_0)]"
                      : "text-[oklch(0.95_0_0)]/40 hover:text-[oklch(0.95_0_0)]"
                  }`}
                >
                  {pathname === link.href && (
                    <motion.div
                      layoutId="nav-pill"
                      className="absolute inset-0 bg-[oklch(0.95_0_0)]/10 rounded-full -z-10"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  {link.label}
                </Link>
              </Magnetic>
            </li>
          ))}
          </ul>
        </div>
        
        {/* Availability Badge */}
        <div className="hidden md:flex items-center gap-3 bg-[oklch(0.12_0_0)]/90 backdrop-blur-md border border-[oklch(0.95_0_0)]/5 px-5 py-3 rounded-full shadow-2xl hover:bg-[oklch(0.18_0_0)] transition-all duration-300 transform-gpu hover:scale-105 hover:rotate-1 cursor-pointer">
          <span className="w-1.5 h-1.5 rounded-full bg-white/60 animate-pulse" />
          <span className="text-[10px] uppercase tracking-[0.2em] text-[oklch(0.95_0_0)]/60 font-sans">Available</span>
        </div>
      </div>
    </motion.nav>
  )
}
