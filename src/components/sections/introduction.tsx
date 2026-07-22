"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function Introduction() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const els = sectionRef.current?.querySelectorAll(".intro-item")
      if (!els || !els.length) return

      gsap.fromTo(
        els,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
            toggleActions: "restart none restart reset",
          },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="bg-[#0A0A0A] pt-[50px] pb-[70px]">
      <div className="mx-auto max-w-[1200px] px-6 text-center">
        <p className="intro-item text-xs font-semibold uppercase tracking-[8px] text-[#D8A441] mb-8">
          Premium Personalization Since 2020
        </p>

        <h1 className="intro-item font-serif text-[48px] md:text-[64px] lg:text-[84px] font-bold leading-[1.15]">
          <span className="text-white">Premium </span>
          <span className="text-[#D8A441]">Customized Gifts</span>
        </h1>

        <p className="intro-item mx-auto mt-8 max-w-[1100px] text-[17px] md:text-[20px] lg:text-[24px] text-[rgba(255,255,255,0.72)] leading-relaxed">
          Personalized Name Plates &bull; Acrylic Products &bull; Premium Card
          Holders &bull; Wooden Gifts &bull; Pens &bull; Number Plates &bull;
          Visiting Cards &bull; Flex Printing &bull; Star Printing &bull; Vinyl
          Printing &bull; Sunboard Sheet Printing &amp; More.
        </p>
      </div>
    </section>
  )
}
