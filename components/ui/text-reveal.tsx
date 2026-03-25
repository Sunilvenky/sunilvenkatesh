"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

interface TextRevealProps {
  text: string
  className?: string
  delay?: number
}

export function TextReveal({ text, className = "", delay = 0 }: TextRevealProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-10% 0px -10% 0px" })
  const words = text.split(" ")

  return (
    <div ref={ref} className={`flex flex-wrap gap-x-[0.3em] ${className}`}>
      {words.map((word, i) => (
        <span key={i} className="overflow-hidden inline-flex">
          <motion.span
            className="inline-block origin-bottom"
            initial={{ y: "120%", opacity: 0, rotate: 5 }}
            animate={isInView ? { y: 0, opacity: 1, rotate: 0 } : { y: "120%", opacity: 0, rotate: 5 }}
            transition={{
              duration: 1.2,
              delay: delay + i * 0.03,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </div>
  )
}
