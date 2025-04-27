"use client"

import { ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"

import DestinationCarousel from "@/components/destination-carousel"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center">
        <Image
          src="/images/hero-background.jpg"
          alt="Tropical beach view of Maripipi Island"
          fill
          priority
          className="object-cover brightness-[0.85]"
        />
        <div className="absolute inset-0 bg-black/30" />

        <div className="container relative z-10 px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-3xl mx-auto text-center text-white"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Discover the Hidden Paradise of Maripipi Island</h1>
            <p className="text-lg md:text-xl mb-8 text-white/90">
              Experience pristine beaches, crystal clear waters, and breathtaking views
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Button
                asChild
                size="lg"
                className="rounded-full bg-white text-emerald-800 hover:bg-white/90 hover:scale-105 transition-all"
              >
                <Link href="#destinations">
                  Start Exploring <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-emerald-800">Welcome to Maripipi Island</h2>
              <p className="text-gray-700 mb-4">
                Nestled in the heart of the Philippines, Maripipi Island is a hidden gem waiting to be discovered. With
                its pristine beaches, lush landscapes, and vibrant marine life, it offers an unforgettable escape from
                the hustle and bustle of city life.
              </p>
              <p className="text-gray-700 mb-6">
                Whether you&apos;re seeking adventure, relaxation, or a cultural experience, Maripipi has something for
                everyone. Explore our top destinations and start planning your perfect island getaway today.
              </p>
              <Button
                asChild
                variant="outline"
                className="rounded-full border-emerald-600 text-emerald-700 hover:bg-emerald-50"
              >
                <Link href="#destinations">Explore Destinations</Link>
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl"
            >
              <Image src="/images/about-image.jpg" alt="Scenic view of Maripipi Island" fill className="object-cover" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 bg-gray-50 w-full container">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-emerald-800">Experience Maripipi</h2>
            <p className="text-gray-700 max-w-2xl mx-auto mb-8">
              Watch this video to get a glimpse of the beauty and charm of Maripipi Island.
            </p>
            <div className="relative w-full max-w-4xl mx-auto aspect-video rounded-xl overflow-hidden shadow-xl">
              <iframe 
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/Yn1lSV43exU?si=jHoxzBF6L2f2fTKj" 
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                allowFullScreen
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Destinations Section */}
      <section id="destinations" className="py-20 bg-emerald-50">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-emerald-800">Featured Destinations</h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Explore the most beautiful spots Maripipi Island has to offer. Each destination provides a unique
              experience you won&apos;t forget.
            </p>
          </motion.div>

          <DestinationCarousel />
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-emerald-800 to-teal-700 text-white">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready for Your Island Adventure?</h2>
            <p className="text-xl mb-8 text-white/90">
              Plan your visit to Maripipi Island and create memories that will last a lifetime.
            </p>
            <Button
              asChild
              size="lg"
              className="rounded-full bg-white text-emerald-800 hover:bg-white/90 hover:scale-105 transition-all"
            >
              <Link href="/destinations/sambawan">
                Start Planning <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
