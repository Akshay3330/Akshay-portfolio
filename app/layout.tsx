import type React from "react"
import type { Metadata } from "next"
import { Sora } from "next/font/google"
import { Inter } from "next/font/google"
import { JetBrains_Mono } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const sora = Sora({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sora",
})

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains-mono",
})

export const metadata: Metadata = {
  title: "Mandaviya Akshay - React Developer",
  description:
    "I build fast, elegant React apps. Full-stack developer specializing in React, TypeScript, and modern web technologies.",
  generator: "v0.app",
  keywords: ["React Developer", "Frontend Developer", "TypeScript", "Vite", "Tailwind CSS"],
  authors: [{ name: "Mandaviya Akshay" }],
  openGraph: {
    title: "Mandaviya Akshay - React Developer",
    description: "I build fast, elegant React apps.",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-sans ${sora.variable} ${inter.variable} ${jetbrainsMono.variable}`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
