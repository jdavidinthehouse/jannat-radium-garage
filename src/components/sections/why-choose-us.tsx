"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import {
  Sparkles,
  Shield,
  Truck,
  BadgePercent,
  Smile,
  Palette,
} from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

const reasons = [
  {
    icon: Palette,
    title: "Personalized Designs",
    description:
      "Every product is customized to your unique preferences and requirements.",
  },
  {
    icon: Shield,
    title: "Premium Quality",
    description:
      "We use only the finest materials to ensure lasting quality and elegance.",
  },
  {
    icon: Truck,
    title: "Fast Delivery",
    description:
      "Timely delivery guaranteed across Thane, Mumbai and all over India.",
  },
  {
    icon: BadgePercent,
    title: "Affordable Pricing",
    description:
      "Luxury craftsmanship at prices that offer exceptional value.",
  },
  {
    icon: Smile,
    title: "Customer Satisfaction",
    description:
      "Your happiness is our priority. We go the extra mile for every client.",
  },
  {
    icon: Sparkles,
    title: "Attention to Detail",
    description:
      "Every product is hand-finished with meticulous attention to detail.",
  },
]

export default function WhyChooseUs() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gridRef.current?.querySelectorAll(".reason-card")
      if (!cards) return

      cards.forEach((card, i) => {
        gsap.fromTo(
          card,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            delay: i * 0.1,
            ease: "power4.out",
            scrollTrigger: {
              trigger: card as HTMLElement,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        )
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section className="relative py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="mb-16 text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-[#D8A441]">
            Why Jannat
          </p>
          <h2 className="text-4xl font-bold md:text-5xl lg:text-6xl font-heading">
            Why Choose{" "}
            <span className="gold-text">Us</span>
          </h2>
        </div>

        <div
          ref={gridRef}
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {reasons.map((reason) => {
            const Icon = reason.icon
            return (
              <div
                key={reason.title}
                className="reason-card group rounded-2xl bg-[#161616] border border-white/5 p-8 transition-all duration-700 hover:border-[#D8A441]/20 hover:shadow-[0_0_50px_rgba(216,164,65,0.06)] hover:-translate-y-1"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-[#D8A441]/20 to-[#F59E0B]/10 text-[#D8A441] transition-all duration-500 group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(216,164,65,0.25)]">
                  <Icon size={26} />
                </div>
                <h3 className="text-lg font-semibold font-heading">
                  {reason.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/35">
                  {reason.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
