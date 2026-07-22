"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"

interface SectionGlowProps {
  containerRef: React.RefObject<HTMLDivElement | null>
  className?: string
}

export default function SectionGlow({ containerRef, className = "" }: SectionGlowProps) {
  const glowRef = useRef<HTMLDivElement>(null)
  const tweensRef = useRef<gsap.core.Tween[]>([])

  useEffect(() => {
    const container = containerRef.current
    const glow = glowRef.current
    if (!container || !glow) return

    let mouseX = 0
    let mouseY = 0
    let currentX = 0
    let currentY = 0
    let active = true

    const handleMouseEnter = () => {
      tweensRef.current.push(gsap.to(glow, { opacity: 1, duration: 0.5, ease: "power2.out" }))
    }

    const handleMouseLeave = () => {
      tweensRef.current.push(gsap.to(glow, { opacity: 0, duration: 0.5, ease: "power2.out" }))
    }

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect()
      mouseX = e.clientX - rect.left
      mouseY = e.clientY - rect.top
    }

    container.addEventListener("mouseenter", handleMouseEnter)
    container.addEventListener("mouseleave", handleMouseLeave)
    container.addEventListener("mousemove", handleMouseMove)

    const updateGlow = () => {
      if (!active) return
      currentX += (mouseX - currentX) * 0.08
      currentY += (mouseY - currentY) * 0.08
      glow.style.transform = `translate(${currentX - 175}px, ${currentY - 175}px)`
    }

    gsap.ticker.add(updateGlow)

    return () => {
      active = false
      container.removeEventListener("mouseenter", handleMouseEnter)
      container.removeEventListener("mouseleave", handleMouseLeave)
      container.removeEventListener("mousemove", handleMouseMove)
      gsap.ticker.remove(updateGlow)
      tweensRef.current.forEach((t) => t.kill())
      tweensRef.current = []
    }
  }, [containerRef])

  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}>
      <div
        ref={glowRef}
        className="absolute top-0 left-0 w-[350px] h-[350px]  opacity-0"
        style={{
          background:
            "radial-gradient(circle, rgba(216,164,65,0.10) 0%, rgba(216,164,65,0.03) 35%, transparent 65%)",
          willChange: "transform",
          filter: "blur(80px)",
        }}
      />
    </div>
  )
}
