import { Roboto, Bodoni_Moda } from "next/font/google"

export const roboto = Roboto({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-roboto",
  display: "swap",
})

export const bodoniModa = Bodoni_Moda({
  weight: ["700"],
  subsets: ["latin"],
  variable: "--font-bodoni",
  display: "swap",
})
