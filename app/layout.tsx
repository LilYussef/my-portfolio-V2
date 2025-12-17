import type { ReactNode } from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Yussef Ahmed - Full-Stack Developer & Penetration Tester",
  description: "Full-Stack Developer & Penetration Tester.",
  generator: 'Yussef Helmy'
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-[#212121] text-white antialiased`}>{children}</body>
    </html>
  )
}
