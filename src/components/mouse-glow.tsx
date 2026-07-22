"use client"

import { useEffect, useRef } from "react"

export default function MouseGlow() {
  const glowRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!glowRef.current) return
      const x = e.clientX
      const y = e.clientY
      glowRef.current.style.transform = `translate(${x - 150}px, ${y - 150}px)`
    }

    window.addEventListener("mousemove", handleMouseMove, { passive: true })
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <div
      ref={glowRef}
      className="pointer-events-none fixed top-0 left-0 z-[9999] hidden h-[300px] w-[300px]  opacity-[0.08] blur-[100px] transition-opacity duration-500 lg:block"
      style={{
        background:
          "radial-gradient(circle, #D8A441 0%, #F59E0B 40%, transparent 70%)",
      }}
    />
  )
}
