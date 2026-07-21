"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Image from "next/image"
import { Button } from "@/components/ui/button"

gsap.registerPlugin(ScrollTrigger)

const products = [
  {
    name: "Name Plate",
    description: "Elegant personalized name plate for home or office",
    image: "/images/Name-PLate.png",
  },
  {
    name: "Card Holder",
    description: "Premium card holder with precision craftsmanship",
    image: "/images/Card Holder.png",
  },
  {
    name: "Premium Card Holder",
    description: "Luxury card holder with refined detailing",
    image: "/images/Card-Holder-2.png",
  },
  {
    name: "Wooden Box with Watch",
    description: "Premium wooden gift box with elegant timepiece",
    image: "/images/Wooden-Box-With-Watch.png",
  },
  {
    name: "Wooden Pen Set",
    description: "Elegant wooden pen with matching presentation box",
    image: "/images/Woden-pen-with-Woden-Box.png",
  },
  {
    name: "Imported Premium Pen",
    description: "Sophisticated imported writing instrument",
    image: "/images/Imported-pen.png",
  },
  {
    name: "Number Plate",
    description: "Custom radium number plate with premium finish",
    image: "/images/Acrylic-Number-plate.png",
  },
  {
    name: "Acrylic Gift",
    description: "Modern acrylic product for corporate gifting",
    image: "/images/Acrylic-Number-Plate-2.png",
  },
  {
    name: "Customized Kada",
    description: "Personalized premium bracelet for special occasions",
    image: "/images/Customized-Kada.png",
  },
  {
    name: "Premium Pendant",
    description: "Handcrafted personalized pendant gift",
    image: "/images/Pendent.png",
  },
]

export default function Products() {
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
            delay: i * 0.05,
            ease: "power4.out",
            scrollTrigger: {
              trigger: card as HTMLElement,
              start: "top 90%",
              toggleActions: "play none none none",
            },
          }
        )
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="products" ref={sectionRef} className="relative py-28 md:py-36">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#D8A441]/[0.015] to-transparent pointer-events-none" />
      <div className="mx-auto max-w-[1600px] px-[60px] lg:px-[80px]">
        <div className="mb-16 text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-[#D8A441]">
            Premium Collection
          </p>
          <h2 className="text-4xl font-bold md:text-5xl lg:text-6xl font-heading">
            Our{" "}
            <span className="gold-text">Products</span>
          </h2>
        </div>

        <div
          ref={gridRef}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5"
        >
          {products.map((product) => (
            <div
              key={product.name}
              className="product-card group relative flex flex-col overflow-hidden rounded-2xl bg-[#1C1C1C] border border-white/[0.04] transition-all duration-700 hover:border-[#D8A441]/20 hover:shadow-[0_0_60px_rgba(216,164,65,0.1)] hover:-translate-y-2"
            >
              <div className="relative aspect-[1/1] overflow-hidden bg-[#161616]">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain p-4 transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1C] via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-40" />
                <div className="absolute inset-0 rounded-2xl ring-0 transition-all duration-700 group-hover:ring-[0.5px] group-hover:ring-[#D8A441]/25" />
              </div>
              <div className="flex flex-1 flex-col justify-between p-4 pt-2.5">
                <div>
                  <h3 className="text-base font-semibold tracking-tight font-heading">
                    {product.name}
                  </h3>
                  <p className="mt-1 text-sm leading-snug text-white/35 line-clamp-2">
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
                    size="default"
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
