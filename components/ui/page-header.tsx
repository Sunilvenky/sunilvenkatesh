"use client"

import { motion } from "framer-motion"

export function PageHeader({ 
  title, 
  subtitle, 
  label,
  className = "" 
}: { 
  title: string; 
  subtitle?: string; 
  label?: string;
  className?: string;
}) {
  return (
    <section className={`pt-48 pb-16 px-8 ${className}`}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-4"
        >
          {label && (
            <p className="text-[10px] uppercase tracking-[0.5em] opacity-40 font-sans mb-8">
              {label}
            </p>
          )}
          <h1 className="font-serif text-6xl md:text-9xl font-light leading-none relative">
            {title.split("").map((char, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.03, ease: [0.22, 1, 0.36, 1] }}
                className="inline-block"
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </h1>
          
          <motion.div 
            className="h-[1px] bg-foreground/10 absolute left-8 right-8 md:max-w-7xl md:mx-auto mt-12 origin-left"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
          />

          {subtitle && (
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="text-xl md:text-2xl text-foreground/60 leading-relaxed max-w-3xl pt-16"
            >
              {subtitle}
            </motion.p>
          )}
        </motion.div>
      </div>
    </section>
  )
}
