"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useInView } from "framer-motion"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { getAllDestinations } from "@/lib/destinations"

export default function DestinationCarousel() {
  const destinations = getAllDestinations()
  const [activeIndex, setActiveIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true })

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  const nextSlide = () => {
    setActiveIndex((prev) => (prev === destinations.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? destinations.length - 1 : prev - 1))
  }

  const goToSlide = (index: number) => {
    setActiveIndex(index)
  }

  return (
    <div ref={containerRef} className="relative">
      <div className="overflow-hidden">
        <motion.div
          className="flex transition-all duration-500 ease-in-out"
          initial={{ opacity: 0 }}
          animate={{
            opacity: isInView ? 1 : 0,
            x: isMobile ? 0 : `-${activeIndex * 33.333}%`,
          }}
          transition={{ duration: 0.1 }}
          style={{
            width: isMobile ? "100%" : `${destinations.length * 33.333}%`,
            display: "flex",
          }}
        >
          {destinations.map((destination, index) => (
            <motion.div
              key={destination.slug}
              className={cn("px-4", isMobile ? "w-full mb-8" : "w-1/3")}
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: isInView ? 1 : 0,
                y: isInView ? 0 : 20,
              }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              style={{
                display: isMobile ? (index === activeIndex ? "block" : "none") : "block",
                flexShrink: 0,
              }}
            >
              <Card className="overflow-hidden h-full hover:shadow-lg transition-all duration-300 group">
                <div className="relative h-64">
                  <Image
                    src={destination.image || "/placeholder.svg"}
                    alt={destination.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-emerald-800">{destination.name}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{destination.description}</p>
                  <Button asChild className="w-full rounded-full bg-emerald-600 hover:bg-emerald-700">
                    <Link href={`/destinations/${destination.slug}`}>Explore</Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Navigation Arrows */}
      <div className="flex justify-between absolute top-1/2 -translate-y-1/2 left-0 right-0 px-4">
        <Button
          variant="outline"
          size="icon"
          className="rounded-full bg-white/80 backdrop-blur-sm hover:bg-white"
          onClick={prevSlide}
        >
          <ChevronLeft className="h-5 w-5" />
          <span className="sr-only">Previous</span>
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="rounded-full bg-white/80 backdrop-blur-sm hover:bg-white"
          onClick={nextSlide}
        >
          <ChevronRight className="h-5 w-5" />
          <span className="sr-only">Next</span>
        </Button>
      </div>

      {/* Dots Navigation */}
      {isMobile && (
        <div className="flex justify-center mt-4 space-x-2">
          {destinations.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={cn(
                "w-3 h-3 rounded-full transition-all",
                index === activeIndex ? "bg-emerald-600 scale-110" : "bg-gray-300",
              )}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  )
}
