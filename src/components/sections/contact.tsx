"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import {
  Phone,
  MapPin,
  Clock,
  Mail,
} from "lucide-react"
import { Button } from "@/components/ui/button"

gsap.registerPlugin(ScrollTrigger)

export default function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const els = contentRef.current?.querySelectorAll(".contact-item")
      if (!els || !els.length) return
      gsap.fromTo(
        els,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          stagger: 0.08,
          ease: "power4.out",
          scrollTrigger: {
            trigger: contentRef.current,
            start: "top 80%",
            toggleActions: "restart none restart reset",
          },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="contact" ref={sectionRef} className="relative py-28 md:py-36">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#D8A441]/[0.02] to-transparent pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="mb-16 text-center">
          <p className="contact-item mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-[#D8A441]">
            Get In Touch
          </p>
          <h2 className="contact-item text-4xl font-bold md:text-5xl lg:text-6xl font-heading">
            Let&apos;s Create{" "}
            <span className="gold-text">Together</span>
          </h2>
        </div>

        <div
          ref={contentRef}
          className="grid gap-8 lg:grid-cols-5"
        >
          <div className="contact-item space-y-6 lg:col-span-2">
            <div className=" bg-[#161616] border border-white/5 p-6 transition-all duration-500 hover:border-[#D8A441]/20 hover:shadow-[0_0_30px_rgba(216,164,65,0.04)]">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center  bg-gradient-to-br from-[#D8A441]/20 to-[#F59E0B]/10 text-[#D8A441]">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8z"/></svg>
                </div>
                <div>
                  <h3 className="text-sm font-semibold font-heading">Phone</h3>
                  <a
                    href="tel:+918898210320"
                    className="mt-1.5 block text-sm text-white/35 transition-colors hover:text-white/80"
                  >
                    +91 88982 10320
                  </a>
                  <a
                    href="https://wa.me/918898210320"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1.5 block text-sm text-white/35 transition-colors hover:text-[#25D366]"
                  >
                    WhatsApp: +91 88982 10320
                  </a>
                </div>
              </div>
            </div>

            <div className=" bg-[#161616] border border-white/5 p-6 transition-all duration-500 hover:border-[#D8A441]/20 hover:shadow-[0_0_30px_rgba(216,164,65,0.04)]">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center  bg-gradient-to-br from-[#D8A441]/20 to-[#F59E0B]/10 text-[#D8A441]">
                  <Mail size={20} />
                </div>
                <div>
                  <h3 className="text-sm font-semibold font-heading">Email</h3>
                  <a
                    href="mailto:graphicjannat@gmail.com"
                    className="mt-1.5 block text-sm text-white/35 transition-colors hover:text-white/80"
                  >
                    graphicjannat@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className=" bg-[#161616] border border-white/5 p-6 transition-all duration-500 hover:border-[#D8A441]/20 hover:shadow-[0_0_30px_rgba(216,164,65,0.04)]">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center  bg-gradient-to-br from-[#D8A441]/20 to-[#F59E0B]/10 text-[#D8A441]">
                  <MapPin size={20} />
                </div>
                <div>
                  <h3 className="text-sm font-semibold font-heading">Address</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-white/35">
                    Opposite HP Petrol Pump, Karjat Kalyan Road, Vangani, Thane,
                    Maharashtra 421-503
                  </p>
                </div>
              </div>
            </div>

            <div className=" bg-[#161616] border border-white/5 p-6 transition-all duration-500 hover:border-[#D8A441]/20 hover:shadow-[0_0_30px_rgba(216,164,65,0.04)]">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center  bg-gradient-to-br from-[#D8A441]/20 to-[#F59E0B]/10 text-[#D8A441]">
                  <Clock size={20} />
                </div>
                <div>
                  <h3 className="text-sm font-semibold font-heading">Working Hours</h3>
                  <p className="mt-1.5 text-sm text-white/35">
                    Monday - Saturday: 09:30 AM - 08:30 PM
                  </p>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/jannat_radium_garage/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Instagram"
                className="flex h-12 w-12 items-center justify-center  bg-[#161616] border border-white/5 text-white/35 transition-all duration-500 hover:border-[#D8A441]/30 hover:text-[#D8A441] hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(216,164,65,0.1)]"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20"/><circle cx="12" cy="12" r="5"/><circle cx="17.5" cy="6.5" r="1.5" fill="currentColor"/></svg>
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=100082855436592"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Facebook"
                className="flex h-12 w-12 items-center justify-center  bg-[#161616] border border-white/5 text-white/35 transition-all duration-500 hover:border-[#D8A441]/30 hover:text-[#D8A441] hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(216,164,65,0.1)]"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3V2z"/></svg>
              </a>
              <a
                href="https://wa.me/918898210320"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat with us on WhatsApp"
                className="flex h-12 w-12 items-center justify-center  bg-[#161616] border border-white/5 text-white/35 transition-all duration-500 hover:border-[#25D366]/30 hover:text-[#25D366] hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(37,211,102,0.1)]"
              >
                <Phone size={20} />
              </a>
            </div>

            <a
              href="https://wa.me/918898210320?text=Hi%20Jannat%20Radium%20Garage%2C%20I%20want%20to%20place%20an%20order."
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="gold"
                size="xl"
                className="w-full tracking-wider uppercase"
              >
                Send Enquiry
              </Button>
            </a>
          </div>

          <div className="contact-item lg:col-span-3">
            <div className="relative h-full min-h-[300px] md:min-h-[450px] overflow-hidden  border border-white/5 bg-[#161616] transition-all duration-500 hover:border-[#D8A441]/20 hover:shadow-[0_0_50px_rgba(216,164,65,0.04)]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.865238544876!2d73.29351867509922!3d19.531500342519856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be75e8b5d6b5e6b%3A0x8b5d6b5e6b5d6b5e!2sVangani%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1"
                width="100%"
                height="100%"
                style={{ minHeight: "450px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Jannat Radium Garage Location"
                className="grayscale invert-[0.85] hue-rotate-180 opacity-70 transition-all duration-700 hover:opacity-100"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
