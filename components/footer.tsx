"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Magnetic } from "@/components/ui/magnetic"
import { SectionReveal } from "@/components/ui/section-reveal"
import { ArrowRight } from "@/components/ui/icons"

export function Footer() {
  const pathname = usePathname()

  let message = "Let's build<br />something obvious."
  
  if (pathname === '/work') {
    message = "Seen enough?<br />Let's talk."
  } else if (pathname === '/notes') {
    message = "Thoughts become<br />things. Eventually."
  } else if (pathname === '/about') {
    message = "The timeline<br />continues here."
  } else if (pathname === '/travel') {
    message = "Ready for the<br />next expedition."
  } else if (pathname?.startsWith('/work/')) {
    message = "Every system<br />has a story."
  }

  return (
    <footer className="bg-background pt-48 pb-32 px-8 relative z-[101] w-full overflow-hidden">
      <SectionReveal>
        <div className="max-w-7xl mx-auto px-4 md:px-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-24 relative pt-16 mt-8">
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-foreground/20 to-transparent" />
          <div className="space-y-16 pl-0 md:pl-20">
            <p className="font-serif text-3xl md:text-5xl text-foreground/90 leading-[0.8] tracking-tighter" dangerouslySetInnerHTML={{ __html: message }} />

          <div className="pt-4">
            <Magnetic strength={0.2}>
              <Link 
                href="/contact" 
                className="inline-flex items-center gap-6 text-xs uppercase tracking-[0.3em] text-foreground hover:text-primary transition-colors border-b border-foreground/20 pb-4"
              >
                <span>Start a conversation</span>
                <ArrowRight className="text-2xl" />
              </Link>
            </Magnetic>
          </div>
        </div>
        
        <div className="flex flex-col md:items-end gap-16 text-sm text-foreground/60 w-full md:w-auto">
          <nav className="grid grid-cols-2 gap-x-12 gap-y-6 md:flex md:flex-wrap md:gap-12 font-sans uppercase tracking-[0.2em] text-[10px]">
            <Link href="/" className="hover:text-primary transition-colors border-b border-transparent hover:border-primary pb-1">Index</Link>
            <Link href="/about" className="hover:text-primary transition-colors border-b border-transparent hover:border-primary pb-1">About</Link>
            <Link href="/work" className="hover:text-primary transition-colors border-b border-transparent hover:border-primary pb-1">Work</Link>
            <Link href="/travel" className="hover:text-primary transition-colors border-b border-transparent hover:border-primary pb-1">Travel</Link>
            <Link href="/notes" className="hover:text-primary transition-colors border-b border-transparent hover:border-primary pb-1">Notes</Link>
          </nav>
          
          <div className="flex flex-col md:items-end gap-4">
            <div className="flex items-center gap-4">
              <span className="w-2 h-2 rounded-full bg-foreground/40 animate-pulse" />
              <p className="font-serif italic text-xl opacity-60">Studio available for partnerships</p>
            </div>
            <p className="font-sans text-[10px] uppercase tracking-[0.4em] opacity-30 mt-4">
              © {new Date().getFullYear()} Sunil Venkatesh
            </p>
          </div>
        </div>
      </div>
      </SectionReveal>
    </footer>
  )
}

