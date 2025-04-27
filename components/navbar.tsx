"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet"
import { cn } from "@/lib/utils"
import { getAllDestinations } from "@/lib/destinations"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const destinations = getAllDestinations()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled ? "bg-white/95 backdrop-blur-sm shadow-sm py-3" : "bg-transparent py-5",
      )}
    >
      <div className="container px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <motion.span
              className={cn("text-xl font-bold", isScrolled ? "text-emerald-800" : "text-white")}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              Maripipi Island
            </motion.span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            <Button
              asChild
              variant="ghost"
              className={cn(
                "rounded-full",
                isScrolled ? "text-gray-700 hover:text-emerald-800 hover:bg-emerald-50" : "text-white hover:text-white hover:bg-white/20",
              )}
            >
              <Link href="/">Home</Link>
            </Button>

            {destinations.map((destination) => (
              <Button
                key={destination.slug}
                asChild
                variant="ghost"
                className={cn(
                  "rounded-full",
                  isScrolled ? "text-gray-700 hover:text-emerald-800 hover:bg-emerald-50" : "text-white hover:text-white hover:bg-white/20",
                )}
              >
                <Link href={`/destinations/${destination.slug}`}>{destination.name}</Link>
              </Button>
            ))}
          </nav>

          {/* Mobile Navigation */}
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className={cn("md:hidden", isScrolled ? "text-gray-700" : "text-white")}
              >
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[280px] sm:w-[350px] p-0">
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              <div className="flex flex-col h-full">
                <div className="p-6 border-b">
                  <Link href="/" className="flex items-center">
                    <span className="text-xl font-bold text-emerald-800">Maripipi Island</span>
                  </Link>
                </div>
                <nav className="flex-1 p-6">
                  <div className="flex flex-col space-y-4">
                    <Link 
                      href="/" 
                      className="text-lg font-medium text-gray-700 hover:text-emerald-600 transition-colors py-2"
                    >
                      Home
                    </Link>

                    {destinations.map((destination) => (
                      <Link
                        key={destination.slug}
                        href={`/destinations/${destination.slug}`}
                        className="text-lg font-medium text-gray-700 hover:text-emerald-600 transition-colors py-2"
                      >
                        {destination.name}
                      </Link>
                    ))}
                  </div>
                </nav>
                <div className="p-6 border-t">
                  <p className="text-sm text-gray-500">
                    © {new Date().getFullYear()} Maripipi Island. All rights reserved.
                  </p>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
