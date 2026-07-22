"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

const navLinks = [
  { href: "#", label: "Home" },
  { href: "#products", label: "Products" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeHash, setActiveHash] = useState("#")

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => { document.body.style.overflow = "" }
  }, [mobileOpen])

  useEffect(() => {
    const header = document.querySelector("header")
    if (header) {
      document.documentElement.style.setProperty("--navbar-height", `${header.offsetHeight}px`)
    }
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-[72px] border-b border-[#D8A441]/20 bg-[rgba(10,10,10,0.85)] backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.3)]">
      <div className="mx-auto flex h-full max-w-7xl items-center justify-center px-6 lg:px-12">
        <nav className="hidden items-center gap-16 md:flex">
          {navLinks.map((link) => {
            const isActive = activeHash === link.href
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setActiveHash(link.href)}
                className={`group relative text-sm tracking-widest uppercase transition-all duration-500 ${
                  isActive
                    ? "text-white"
                    : "text-white/50 hover:text-white"
                }`}
              >
                {link.label}
                <span className={`absolute -bottom-1.5 left-0 h-[1.5px] bg-gradient-to-r from-[#D8A441] to-[#F59E0B] transition-all duration-500 ${
                  isActive ? "w-full" : "w-0 group-hover:w-full"
                }`} />
                {isActive && (
                  <span className="absolute inset-0  bg-[#D8A441]/5 blur-sm" />
                )}
              </a>
            )
          })}
        </nav>

        <button
          onClick={() => setMobileOpen(true)}
          className="absolute right-6 md:hidden text-white/70 hover:text-white transition-colors"
          aria-label="Open menu"
        >
          <Menu size={28} />
        </button>
      </div>

      <div
        className={`fixed inset-0 z-60 bg-[rgba(10,10,10,0.95)] backdrop-blur-2xl transition-all duration-700 ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        } md:hidden`}
      >
        <div className="flex h-[72px] items-center justify-end px-6">
          <button
            onClick={() => setMobileOpen(false)}
            className="text-white/70 hover:text-white transition-colors"
            aria-label="Close menu"
          >
            <X size={28} />
          </button>
        </div>
        <nav className="flex flex-col items-center justify-center gap-12 pt-16">
          {navLinks.map((link) => {
            const isActive = activeHash === link.href
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={() => {
                  setActiveHash(link.href)
                  setMobileOpen(false)
                }}
                className={`text-3xl tracking-widest uppercase font-heading transition-all duration-500 ${
                  isActive
                    ? "gold-text"
                    : "text-white/50 hover:gold-text"
                }`}
              >
                {link.label}
              </a>
            )
          })}
        </nav>
      </div>
    </header>
  )
}
