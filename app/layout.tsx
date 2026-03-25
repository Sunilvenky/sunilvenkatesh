import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono, Crimson_Text } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Navigation } from "@/components/navigation"
import "./globals.css"

import { SmoothScrollProvider } from "@/components/smooth-scroll-provider"
import { NoiseOverlay } from "@/components/ui/noise-overlay"
import { Footer } from "@/components/footer"

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" })
const crimsonText = Crimson_Text({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  variable: "--font-serif",
})

export const metadata: Metadata = {
  title: "Sunil Venkatesh | Perspective & Systems",
  description: "Building systems with empathy. Traveling for perspective. Designing for humans.",
  openGraph: {
    images: [{
      url: "/og-image.jpg",
      width: 1200,
      height: 630,
      alt: "Sunil Venkatesh | Systems Thinker & Product Designer"
    }]
  },
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geist.variable} ${crimsonText.variable}`} suppressHydrationWarning>
      <body className={`font-sans antialiased selection:bg-primary/20`} suppressHydrationWarning>
        <SmoothScrollProvider>
          {children}
          <Footer />
          <Navigation />
          <Analytics />
        </SmoothScrollProvider>
        <NoiseOverlay />
      </body>
    </html>
  )
}


