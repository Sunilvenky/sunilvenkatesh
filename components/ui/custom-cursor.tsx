"use client"

import { useEffect, useState } from "react"
import { motion, useSpring, useMotionValue } from "framer-motion"

export function CustomCursor() {
  const [mounted, setMounted] = useState(false)
  const [isPointer, setIsPointer] = useState(false)
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)

  const springConfig = { damping: 25, stiffness: 250 }
  const x = useSpring(cursorX, springConfig)
  const y = useSpring(cursorY, springConfig)

  useEffect(() => {
    setMounted(true)
    document.body.classList.add("custom-cursor-active")

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)

      const target = e.target as HTMLElement
      setIsPointer(
        window.getComputedStyle(target).cursor === "pointer" ||
          target.tagName === "BUTTON" ||
          target.tagName === "A" ||
          target.closest("button") !== null ||
          target.closest("a") !== null
      )
    }

    window.addEventListener("mousemove", moveCursor)
    return () => {
      window.removeEventListener("mousemove", moveCursor)
      document.body.classList.remove("custom-cursor-active")
    }
  }, [cursorX, cursorY])

  if (!mounted) return null

  return (
    <div className="hidden md:block">
      {/* Small dot */}
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-foreground rounded-full pointer-events-none z-[10000]"
        style={{ x, y, translateX: "-50%", translateY: "-50%" }}
      />
      {/* Outer ring */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 border border-foreground/50 rounded-full pointer-events-none z-[10000]"
        animate={{
          scale: isPointer ? 1.5 : 1,
          backgroundColor: isPointer ? "color-mix(in srgb, var(--color-foreground) 10%, transparent)" : "transparent",
        }}
        transition={{ type: "spring", damping: 20, stiffness: 300, mass: 0.5 }}
        style={{ x, y, translateX: "-50%", translateY: "-50%" }}
      />
    </div>
  )
}
