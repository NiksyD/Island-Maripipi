import type React from "react"
import type { Metadata } from "next"
import ClientLayout from "./clientLayout"

export const metadata: Metadata = {
  title: "Maripipi Island - Discover the Hidden Paradise",
  description: "Explore the beautiful destinations of Maripipi Island - Sambawan, Viga, Napo, and Candol.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <ClientLayout>{children}</ClientLayout>
}
