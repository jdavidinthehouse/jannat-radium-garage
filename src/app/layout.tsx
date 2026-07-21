import type { Metadata } from "next"
import "./globals.css"
import { playfair, inter, manrope } from "@/lib/fonts"
import Navbar from "@/components/layout/navbar"
import Footer from "@/components/layout/footer"
import MouseGlow from "@/components/mouse-glow"
import WhatsAppButton from "@/components/whatsapp-button"

export const metadata: Metadata = {
  title: "Jannat Radium Garage | Premium Customized Gifts",
  description:
    "Premium personalized name plates, acrylic products, card holders, wooden gifts, pens, number plates and more. Based in Vangani, Thane, Mumbai.",
  keywords: [
    "customized gifts",
    "name plates",
    "acrylic products",
    "card holders",
    "wooden gifts",
    "premium pens",
    "number plates",
    "Jannat Radium Garage",
    "Thane",
    "Mumbai",
  ],
  openGraph: {
    title: "Jannat Radium Garage | Premium Customized Gifts",
    description:
      "Premium personalized name plates, acrylic products, card holders, wooden gifts, pens, number plates and more.",
    type: "website",
    locale: "en_IN",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} ${manrope.variable}`}
    >
      <body className="min-h-screen bg-background text-white antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <MouseGlow />
        <WhatsAppButton />
      </body>
    </html>
  )
}
