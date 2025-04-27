"use client"

import type React from "react"

import { Inter } from "next/font/google"
import { AnimatePresence } from "framer-motion"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import "./globals.css"
const inter = Inter({ subsets: ["latin"] })

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
          <Navbar />
          <AnimatePresence mode="wait">{children}</AnimatePresence>
          <Footer />
      </body>
    </html>
  )
}
