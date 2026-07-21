import Image from "next/image"
import Link from "next/link"

const footerLinks = {
  quick: [
    { href: "#", label: "Home" },
    { href: "#products", label: "Products" },
    { href: "#about", label: "About" },
    { href: "#contact", label: "Contact" },
  ],
  products: [
    { href: "#products", label: "Name Plates" },
    { href: "#products", label: "Card Holders" },
    { href: "#products", label: "Wooden Gifts" },
    { href: "#products", label: "Premium Pens" },
  ],
}

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#0A0A0A]">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-12">
        <div className="grid gap-16 md:grid-cols-3">
          <div>
            <Link href="#" className="flex items-center gap-4">
              <Image
                src="/images/logo.png"
                alt="Jannat Radium Garage"
                width={56}
                height={56}
                className="h-12 w-auto"
              />
              <span className="text-xl font-semibold tracking-wide font-heading">
                <span className="gold-text">Jannat</span>
                <span className="text-white/80"> Radium Garage</span>
              </span>
            </Link>
            <p className="mt-6 text-sm leading-relaxed text-white/30 max-w-xs">
              Premium customized gifts and personalized products. Crafting
              excellence since our establishment in Vangani, Thane, Mumbai.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-10">
            <div>
              <h4 className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-[#D8A441]">
                Quick Links
              </h4>
              <ul className="space-y-4">
                {footerLinks.quick.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-white/30 transition-all duration-500 hover:text-white/80 hover:translate-x-1 inline-block"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-[#D8A441]">
                Products
              </h4>
              <ul className="space-y-4">
                {footerLinks.products.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-white/30 transition-all duration-500 hover:text-white/80 hover:translate-x-1 inline-block"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <h4 className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-[#D8A441]">
              Contact
            </h4>
            <ul className="space-y-4 text-sm text-white/30">
              <li>
                <a
                  href="tel:+918898210320"
                  className="transition-colors duration-500 hover:text-white/80"
                >
                  +91 88982 10320
                </a>
              </li>
              <li>
                <a
                  href="mailto:graphicjannat@gmail.com"
                  className="transition-colors duration-500 hover:text-white/80"
                >
                  graphicjannat@gmail.com
                </a>
              </li>
              <li className="leading-relaxed">
                Opposite HP Petrol Pump, Karjat Kalyan Road, Vangani, Thane,
                Maharashtra 421-503
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-6 border-t border-white/5 pt-8 md:flex-row">
          <p className="text-xs text-white/20">
            &copy; {new Date().getFullYear()} Jannat Radium Garage. All rights
            reserved.
          </p>
          <p className="text-xs text-white/15">
            Crafted with care in Vangani, Thane
          </p>
        </div>
      </div>
    </footer>
  )
}
