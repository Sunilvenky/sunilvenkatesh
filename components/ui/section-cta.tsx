"use client"

import Link from "next/link"
import { Magnetic } from "@/components/ui/magnetic"
import { ArrowRight } from "@/components/ui/icons"

export function SectionCTA({ 
  message = "Let's build something obvious.",
  buttonText = "Let's talk",
  href = "/contact"
}: { 
  message?: string;
  buttonText?: string;
  href?: string;
}) {
  return (
    <section className="py-32 md:py-48 px-8 text-center bg-background text-foreground border-t border-border/10">
      <div className="max-w-3xl mx-auto space-y-16">
        <p className="font-serif text-2xl md:text-4xl italic opacity-50 text-balance">
          {message}
        </p>
        <div className="flex justify-center">
          <Magnetic strength={0.3}>
            <Link
              href={href}
              className="group inline-flex items-center gap-6 font-serif text-3xl md:text-5xl hover:text-primary transition-colors border-b border-foreground/10 pb-4 text-balance"
            >
              <span>{buttonText}</span>
              <ArrowRight className="group-hover:translate-x-4 h-8 w-8 md:h-12 md:w-12" />
            </Link>
          </Magnetic>
        </div>
      </div>
    </section>
  )
}
