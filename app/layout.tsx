import type React from "react"
import type { Metadata } from "next"
import { Sora, Inter, JetBrains_Mono } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const sora = Sora({ subsets: ["latin"], display: "swap", variable: "--font-sora" })
const inter = Inter({ subsets: ["latin"], display: "swap", variable: "--font-inter" })
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], display: "swap", variable: "--font-jetbrains-mono" })

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
  // 👇 Add your icons here
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    shortcut: ["/favicon.ico"],
    other: [
      { rel: "mask-icon", url: "/safari-pinned-tab.png", color: "#0f172a" }, // optional
    ],
  },
  manifest: "/site.webmanifest",            // optional
  themeColor: [{ media: "(prefers-color-scheme: light)", color: "#ffffff" },
               { media: "(prefers-color-scheme: dark)",  color: "#0b1220" }],
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
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
