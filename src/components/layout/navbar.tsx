"use client"

import { useState, useEffect, useRef } from "react"
import { Menu, X } from "lucide-react"
import Image from "next/image"

const navLinks = [
  { href: "#", label: "Home" },
  { href: "#products", label: "Products" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const headerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => { document.body.style.overflow = "" }
  }, [mobileOpen])

  return (
    <header
      ref={headerRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled
          ? "glass shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
          : "bg-gradient-to-b from-black/60 to-transparent"
      }`}
    >
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-12 transition-all duration-700 ${
          scrolled ? "h-16" : "h-24"
        }`}
      >
        <a href="#" className="flex items-center gap-4 group">
          <Image
            src="/images/logo.png"
            alt="Jannat Radium Garage"
            width={56}
            height={56}
            className={`transition-all duration-700 ${scrolled ? "h-9 w-auto" : "h-12 w-auto"}`}
          />
          <span className={`font-heading font-semibold tracking-wide transition-all duration-700 ${
            scrolled ? "text-base" : "text-xl"
          }`}>
            <span className="gold-text">Jannat</span>
            <span className="text-white/80"> Radium Garage</span>
          </span>
        </a>

        <nav className="hidden items-center gap-16 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group relative text-sm tracking-widest text-white/60 transition-all duration-500 hover:text-white uppercase"
            >
              {link.label}
              <span className="absolute -bottom-1.5 left-0 h-[1.5px] w-0 bg-gradient-to-r from-[#D8A441] to-[#F59E0B] transition-all duration-500 group-hover:w-full" />
              <span className="absolute -bottom-1.5 left-0 h-[1.5px] w-0 bg-gradient-to-r from-[#D8A441] to-[#F59E0B] transition-all duration-700 delay-75 group-hover:w-full opacity-30" />
            </a>
          ))}
        </nav>

        <button
          onClick={() => setMobileOpen(true)}
          className="md:hidden text-white/70 hover:text-white transition-colors"
          aria-label="Open menu"
        >
          <Menu size={28} />
        </button>
      </div>

      <div
        className={`fixed inset-0 z-60 bg-black/98 backdrop-blur-2xl transition-all duration-700 ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        } md:hidden`}
      >
        <div className="flex h-20 items-center justify-between px-6">
          <Image
            src="/images/logo.png"
            alt="Jannat Radium Garage"
            width={40}
            height={40}
            className="h-9 w-auto"
          />
          <button
            onClick={() => setMobileOpen(false)}
            className="text-white/70 hover:text-white transition-colors"
            aria-label="Close menu"
          >
            <X size={28} />
          </button>
        </div>
        <nav className="flex flex-col items-center justify-center gap-12 pt-20">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-3xl tracking-widest text-white/60 transition-all duration-500 hover:gold-text uppercase font-heading"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
