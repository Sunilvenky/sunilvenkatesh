"use client"

import type React from "react"
import { useRef, useState, useEffect } from "react"
import { motion, useSpring, useMotionValue } from "framer-motion"

interface MagneticProps {
  children: React.ReactNode
  strength?: number
}

export function Magnetic({ children, strength = 0.5 }: MagneticProps) {
  const ref = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const scale = useMotionValue(1)

  const springConfig = { damping: 20, stiffness: 150, mass: 0.1 }
  const springX = useSpring(x, springConfig)
  const springY = useSpring(y, springConfig)
  const springScale = useSpring(scale, { damping: 20, stiffness: 200, mass: 0.1 })

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return
    const { clientX, clientY } = e
    const { left, top, width, height } = ref.current.getBoundingClientRect()
    const centerX = left + width / 2
    const centerY = top + height / 2
    const distanceX = clientX - centerX
    const distanceY = clientY - centerY

    x.set(distanceX * strength)
    y.set(distanceY * strength)
    scale.set(1.05)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
    scale.set(1)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY, scale: springScale }}
    >
      {children}
    </motion.div>
  )
}
