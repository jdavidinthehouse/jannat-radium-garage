"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Image from "next/image"
import { Button } from "@/components/ui/button"

gsap.registerPlugin(ScrollTrigger)

const products = [
  {
    name: "Wooden Box with Watch",
    description: "Premium wooden gift box with elegant timepiece",
    image: "/images/Wooden-Box-With-Watch.png",
  },
  {
    name: "Customized Kada",
    description: "Personalized premium kada for special occasions",
    image: "/images/Customized-Kada.png",
  },
  {
    name: "Premium Card Holder",
    description: "Luxury card holder with precision craftsmanship",
    image: "/images/Card-Holder-2.png",
  },
  {
    name: "Wooden Pen Set",
    description: "Elegant wooden pen with matching box",
    image: "/images/Woden-pen-with-Woden-Box.png",
  },
  {
    name: "Imported Premium Pen",
    description: "Sophisticated imported writing instrument",
    image: "/images/Imported-pen.png",
  },
  {
    name: "Premium Pendant",
    description: "Handcrafted personalized pendant gift",
    image: "/images/Pendent.png",
  },
  {
    name: "Acrylic Number Plate",
    description: "Modern acrylic number plate with premium finish",
    image: "/images/Acrylic-Number-plate.png",
  },
  {
    name: "Name Plate",
    description: "Elegant personalized name plate for home or office",
    image: "/images/Name-PLate.png",
  },
]

export default function FeaturedProducts() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gridRef.current?.querySelectorAll(".product-card")
      if (!cards || !cards.length) return

      cards.forEach((card, i) => {
        gsap.fromTo(
          card,
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            delay: i * 0.06,
            ease: "power4.out",
            scrollTrigger: {
              trigger: card as HTMLElement,
              start: "top 90%",
              toggleActions: "restart none restart reset",
            },
          }
        )
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="relative py-28 md:py-36">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#D8A441]/[0.015] to-transparent pointer-events-none" />
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="mb-16 text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-[#D8A441]">
            Our Collection
          </p>
          <h2 className="text-4xl font-bold md:text-5xl lg:text-6xl font-heading">
            Best{" "}
            <span className="gold-text">Products</span>
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-white/30 text-sm">
            Discover our selection of premium personalized gifts
          </p>
        </div>

        <div
          ref={gridRef}
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          {products.map((product) => (
            <div
              key={product.name}
              className="product-card group relative flex flex-col overflow-hidden  bg-[#1C1C1C] border border-white/5 transition-all duration-700 hover:border-[#D8A441]/20 hover:shadow-[0_0_50px_rgba(216,164,65,0.1)] hover:-translate-y-2"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-[#161616]">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain p-5 transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1C] via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-40" />
                <div className="absolute inset-0  ring-0 transition-all duration-700 group-hover:ring-1 group-hover:ring-[#D8A441]/20" />
              </div>
              <div className="flex flex-1 flex-col justify-between p-4 pt-3">
                <div>
                  <h3 className="text-sm font-semibold tracking-tight font-heading">
                    {product.name}
                  </h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-white/35 line-clamp-2">
                    {product.description}
                  </p>
                </div>
                <a
                  href={`https://wa.me/918898210320?text=Hi%2C%20I%27m%20interested%20in%20${encodeURIComponent(product.name)}.%20Please%20share%20details.`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="ghost"
                    size="sm"
                    className="mt-3 w-full text-[#D8A441] hover:text-[#D8A441] font-manrope tracking-wider text-xs uppercase border border-[#D8A441]/10 hover:border-[#D8A441]/30 hover:bg-[#D8A441]/5 transition-all duration-500"
                  >
                    Enquire
                  </Button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
