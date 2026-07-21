"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const stats = [
  { label: "Products & Services", value: 50, suffix: "+" },
  { label: "Years of Experience", value: 5, suffix: "+" },
  { label: "Happy Customers", value: 1000, suffix: "+" },
]

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)
  const statValuesRef = useRef<(HTMLDivElement | null)[]>([])
  const statCardsRef = useRef<(HTMLDivElement | null)[]>([])
  const glowsRef = useRef<(HTMLDivElement | null)[]>([])
  const hasAnimated = useRef(false)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const els = contentRef.current?.querySelectorAll(".about-item")
      if (els && els.length) {
        gsap.fromTo(
          els,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            stagger: 0.12,
            ease: "power4.out",
            scrollTrigger: {
              trigger: contentRef.current,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        )
      }

      statCardsRef.current.forEach((card, i) => {
        if (!card) return
        const valEl = statValuesRef.current[i]
        const glowEl = glowsRef.current[i]
        if (!valEl) return

        gsap.fromTo(
          card,
          { scale: 0.95, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 2.2,
            ease: "power2.out",
            scrollTrigger: {
              trigger: statsRef.current,
              start: "top 60%",
              toggleActions: "play none none none",
              once: true,
              onEnter: () => {
                if (hasAnimated.current) return
                hasAnimated.current = true

                const target = stats[i].value

                if (glowEl) {
                  gsap.to(glowEl, {
                    opacity: 0.6,
                    duration: 0.3,
                    ease: "power2.out",
                  })
                }

                gsap.to(
                  { val: 0 },
                  {
                    val: target,
                    duration: 2.2,
                    ease: "power2.out",
                    onUpdate: function () {
                      valEl.textContent = Math.round(this.targets()[0].val) + stats[i].suffix
                    },
                    onComplete: () => {
                      valEl.textContent = target + stats[i].suffix
                      if (glowEl) {
                        gsap.to(glowEl, {
                          opacity: 0,
                          duration: 0.6,
                          ease: "power2.inOut",
                        })
                      }
                    },
                  }
                )
              },
            },
          }
        )
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="about" ref={sectionRef} className="relative py-28 md:py-36">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#D8A441]/[0.015] to-transparent pointer-events-none" />
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div ref={contentRef} className="mx-auto max-w-4xl">
          <p className="about-item mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-[#D8A441]">
            About Us
          </p>
          <h2 className="about-item text-4xl font-bold md:text-5xl lg:text-6xl font-heading">
            Crafting{" "}
            <span className="gold-text">Premium</span>{" "}
            Gifts Since Our Journey Began
          </h2>

          <div className="about-item mt-12 space-y-7 text-base leading-relaxed text-white/50 md:text-lg">
            <p>
              Jannat Radium Garage in Vangani, Thane, Mumbai is one of the
              leading businesses in personalized gifts and custom products. We
              are known for Car Number Plate Dealers, Radium Car Number Plate
              Dealers, Car Vinyl Wrapping Services, Car Number Plate
              Manufacturers, Car Wrapping Services, Number Plate Manufacturers,
              Car Number Plate Frame Manufacturers, Acrylic Number Plate
              Manufacturers and much more.
            </p>
            <p>
              Located at Opposite HP Petrol Pump, Karjat Kalyan Road, Vangani,
              Thane, Maharashtra, we serve customers both local and from other
              parts of Thane and Mumbai. Our establishment acts as a one-stop
              destination for premium personalized products.
            </p>
            <p>
              Founded and managed by <strong className="text-white/90">Ajay Chourasiya</strong>,
              we believe that customer satisfaction is as important as our
              products and services. This philosophy has helped us build a vast
              base of customers that continues to grow by the day.
            </p>
            <p>
              Our team comprises dedicated individuals who put in a lot of effort
              to achieve the common vision and larger goals of the company. We
              aim to expand our line of products and services and cater to a
              larger client base.
            </p>
          </div>

          <div
            ref={statsRef}
            className="about-item mt-16 grid gap-6 sm:grid-cols-3"
          >
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                ref={(el) => { statCardsRef.current[i] = el }}
                className="relative rounded-2xl bg-[#161616] border border-white/5 p-8 text-center transition-all duration-500 hover:border-[#D8A441]/20 hover:shadow-[0_0_40px_rgba(216,164,65,0.1)] hover:-translate-y-1 cursor-default"
              >
                <div
                  ref={(el) => { glowsRef.current[i] = el }}
                  className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 transition-opacity duration-300"
                  style={{
                    background:
                      "radial-gradient(circle at center, rgba(216,164,65,0.15) 0%, transparent 70%)",
                  }}
                />
                <div
                  ref={(el) => { statValuesRef.current[i] = el }}
                  className="relative text-4xl font-bold gold-text font-heading"
                >
                  0+
                </div>
                <div className="relative mt-3 text-xs uppercase tracking-widest text-white/35">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
