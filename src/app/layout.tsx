import type { Metadata } from "next"
import "./globals.css"
import { roboto, bodoniModa, teko } from "@/lib/fonts"
import Footer from "@/components/layout/footer"

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
    <html lang="en" className={`${roboto.variable} ${bodoniModa.variable} ${teko.variable}`}>
      <body className="min-h-screen bg-background text-white antialiased">
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
