"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

function randomRange(min: number, max: number) {
  return Math.random() * (max - min) + min
}

const particles = Array.from({ length: 8 }, () => ({
  width: randomRange(2, 6),
  height: randomRange(2, 6),
  left: randomRange(10, 90),
  top: randomRange(20, 80),
}))

export default function Hero() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const glowRef = useRef<HTMLDivElement>(null)
  const particlesRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.3 })

      tl.fromTo(
        imageRef.current,
        { scale: 1.15 },
        { scale: 1, duration: 2.5, ease: "power3.out" }
      )

      const heroItems = contentRef.current?.querySelectorAll(".hero-item")
      if (!heroItems || !heroItems.length) return

      tl.fromTo(
        heroItems,
        { x: -40, opacity: 0 },
        { x: 0, opacity: 1, duration: 1, stagger: 0.15, ease: "power4.out" },
        "-=1.2"
      )

      if (glowRef.current) {
        gsap.fromTo(
          glowRef.current,
          { opacity: 0, scale: 0.5 },
          { opacity: 0.6, scale: 1, duration: 2, ease: "power3.out", delay: 0.5 }
        )
      }

      if (particlesRef.current) {
        const dots = particlesRef.current.querySelectorAll(".particle")
        dots.forEach((dot, i) => {
          gsap.fromTo(
            dot,
            { opacity: 0, scale: 0 },
            {
              opacity: i % 2 === 0 ? 0.6 : 0.3,
              scale: 1,
              duration: 1.5,
              delay: 1 + i * 0.2,
              ease: "power3.out",
            }
          )
          gsap.to(dot, {
            y: gsap.utils.random(-30, -60),
            x: gsap.utils.random(-15, 15),
            duration: gsap.utils.random(4, 7),
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            delay: 1.5 + i * 0.2,
          })
        })
      }

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom top",
        onUpdate: (self) => {
          if (imageRef.current) {
            imageRef.current.style.transform = `translateY(${self.progress * 40}px)`
          }
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const scrollToProducts = () => {
    document.getElementById("products")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section
      ref={sectionRef}
      className="relative flex h-screen min-h-[700px] w-full items-center justify-center overflow-hidden"
    >
      <div ref={imageRef} className="absolute inset-0 will-change-transform">
        <Image
          src="/images/hero-image.png"
          alt="Premium Customized Gifts"
          fill
          className="object-cover"
          preload
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A]/85 via-[#0A0A0A]/30 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/80 via-transparent to-transparent" />

      <div
        ref={glowRef}
        className="absolute left-[5%] top-1/3 -translate-y-1/2 w-[500px] h-[500px] rounded-full pointer-events-none opacity-0"
        style={{
          background:
            "radial-gradient(circle, rgba(216,164,65,0.12) 0%, rgba(245,158,11,0.06) 30%, transparent 65%)",
        }}
      />

      <div
        ref={particlesRef}
        className="absolute inset-0 pointer-events-none overflow-hidden"
      >
        {particles.map((p, i) => (
          <div
            key={i}
            className="particle absolute rounded-full bg-[#D8A441]"
            style={{
              width: p.width + "px",
              height: p.height + "px",
              left: p.left + "%",
              top: p.top + "%",
              opacity: 0,
              boxShadow: "0 0 6px rgba(216,164,65,0.3)",
            }}
          />
        ))}
      </div>

      <div
        ref={contentRef}
        className="relative z-10 mx-auto w-full max-w-7xl px-6 lg:px-12"
      >
        <div className="max-w-lg">
          <p className="hero-item mb-5 inline-block rounded-full border border-[#D8A441]/25 bg-[#D8A441]/8 px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.25em] text-[#D8A441] backdrop-blur-sm">
            Premium Personalization Since 2020
          </p>
          <h1 className="hero-item text-3xl font-bold leading-tight tracking-tight md:text-4xl lg:text-5xl font-heading">
            Premium
            <br />
            <span className="gold-text">
              Customized Gifts
            </span>
          </h1>
          <p className="hero-item mt-4 max-w-[480px] text-sm leading-relaxed text-white/45 md:text-base">
            Personalized Name Plates, Acrylic Products, Premium Card Holders,
            Wooden Gifts, Pens, Number Plates & More.
          </p>
          <div className="hero-item mt-8 flex flex-wrap gap-4">
            <Button
              variant="gold"
              size="lg"
              className="font-manrope tracking-wider"
              onClick={scrollToProducts}
            >
              Explore Products
            </Button>
            <a
              href="https://wa.me/918898210320?text=Hi%20Jannat%20Radium%20Garage%2C%20I%27d%20like%20to%20enquire%20about%20your%20premium%20products."
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="outline"
                size="lg"
                className="font-manrope tracking-wider"
              >
                Contact on WhatsApp
              </Button>
            </a>
          </div>
        </div>
      </div>

      <button
        onClick={scrollToProducts}
        className="absolute bottom-10 left-1/2 z-10 -translate-x-1/2 animate-bounce text-white/20 transition-all duration-500 hover:text-[#D8A441]"
        aria-label="Scroll down"
      >
        <ArrowDown size={24} />
      </button>
    </section>
  )
}
