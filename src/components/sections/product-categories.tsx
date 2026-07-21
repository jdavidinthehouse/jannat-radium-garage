"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  DoorOpen,
  Wallet,
  Trees,
  Pen,
  Car,
  Box,
} from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

const categories = [
  {
    title: "Name Plates",
    description: "Elegant personalized name plates for homes and offices",
    image: "/images/Name-PLate.png",
    icon: DoorOpen,
  },
  {
    title: "Card Holders",
    description: "Premium card holders crafted with precision",
    image: "/images/Card Holder.png",
    icon: Wallet,
  },
  {
    title: "Wooden Gifts",
    description: "Luxury wooden gift boxes and accessories",
    image: "/images/Wooden-Box-With-Watch.png",
    icon: Trees,
  },
  {
    title: "Premium Pens",
    description: "Sophisticated writing instruments",
    image: "/images/Imported-pen.png",
    icon: Pen,
  },
  {
    title: "Number Plates",
    description: "Custom radium number plates for vehicles",
    image: "/images/Acrylic-Number-plate.png",
    icon: Car,
  },
  {
    title: "Acrylic Products",
    description: "Modern acrylic gifts and corporate souvenirs",
    image: "/images/Acrylic-Number-Plate-2.png",
    icon: Box,
  },
]

export default function ProductCategories() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gridRef.current?.querySelectorAll(".category-card")
      if (!cards || !cards.length) return

      cards.forEach((card, i) => {
        gsap.fromTo(
          card,
          { y: 80, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            delay: i * 0.08,
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
    <section
      id="products"
      ref={sectionRef}
      className="relative py-28 md:py-36"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="mb-16 text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-[#D8A441]">
            Product Range
          </p>
          <h2 className="text-4xl font-bold md:text-5xl lg:text-6xl font-heading">
            Explore Our{" "}
            <span className="gold-text">Categories</span>
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-white/30 text-sm">
            Each product is crafted with premium materials and attention to
            detail
          </p>
        </div>

        <div
          ref={gridRef}
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {categories.map((cat) => {
            const Icon = cat.icon
            return (
              <div
                key={cat.title}
                className="category-card group relative overflow-hidden rounded-2xl bg-[#161616] border border-white/5 transition-all duration-700 hover:border-[#D8A441]/20 hover:shadow-[0_0_60px_rgba(216,164,65,0.06)] hover:-translate-y-1"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={cat.image}
                    alt={cat.title}
                    fill
                    className="object-contain p-8 transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#161616] via-transparent to-transparent opacity-70" />
                </div>
                <div className="relative p-6 pt-0 -mt-10">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#D8A441]/20 to-[#F59E0B]/10 text-[#D8A441] shadow-[0_0_20px_rgba(216,164,65,0.1)] backdrop-blur-sm border border-[#D8A441]/10">
                    <Icon size={22} />
                  </div>
                  <h3 className="text-xl font-semibold tracking-tight font-heading">
                    {cat.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/35">
                    {cat.description}
                  </p>
                  <a
                    href={`https://wa.me/918898210320?text=Hi%2C%20I%27m%20interested%20in%20${encodeURIComponent(cat.title)}.%20Please%20share%20details.`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      variant="ghost"
                      size="sm"
                      className="mt-3 text-[#D8A441] hover:text-[#D8A441] font-manrope tracking-wider text-xs uppercase border border-[#D8A441]/10 hover:border-[#D8A441]/30 hover:bg-[#D8A441]/5 transition-all duration-500"
                    >
                      Enquire Now
                    </Button>
                  </a>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
