import type { Metadata } from "next"
import "./globals.css"
import { roboto, bodoniModa, teko } from "@/lib/fonts"
import Footer from "@/components/layout/footer"

const siteUrl = "https://jannatradiumgarage.com"

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
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
  icons: {
    icon: "/images/logo.png",
    apple: "/images/logo.png",
  },
  openGraph: {
    title: "Jannat Radium Garage | Premium Customized Gifts",
    description:
      "Premium personalized name plates, acrylic products, card holders, wooden gifts, pens, number plates and more.",
    url: siteUrl,
    siteName: "Jannat Radium Garage",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Jannat Radium Garage",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jannat Radium Garage | Premium Customized Gifts",
    description:
      "Premium personalized name plates, acrylic products, card holders, wooden gifts, pens, number plates and more.",
    images: ["/og-image.png"],
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
