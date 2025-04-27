"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeft, Clock, DollarSign, MapPin, Backpack, Compass } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

import { getDestination } from "@/lib/destinations"
import { notFound } from "next/navigation"

export default function DestinationPageClient({ params }: { params: { destination: string } }) {
  const destination = getDestination(params.destination)

  if (!destination) {
    notFound()
  }

  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative h-[60vh] w-full flex items-center justify-center">
        <Image
          src={destination.heroImage || "/placeholder.svg"}
          alt={`View of ${destination.name}`}
          fill
          priority
          className="object-cover brightness-[0.8]"
        />
        <div className="absolute inset-0 bg-black/40" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container relative z-10 px-4 md:px-6 text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">{destination.name}</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">{destination.description}</p>
        </motion.div>
      </section>

      {/* Back Button */}
      <div className="container px-4 md:px-6 mt-8">
        <Button asChild variant="ghost" className="mb-6">
          <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
          </Link>
        </Button>
      </div>

      {/* Details Section */}
      <section className="py-12">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4 text-emerald-600">
                    <DollarSign className="h-6 w-6 mr-2" />
                    <h3 className="text-xl font-semibold">Entrance Fee</h3>
                  </div>
                  <p className="text-gray-700">{destination.entranceFee}</p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4 text-emerald-600">
                    <Compass className="h-6 w-6 mr-2" />
                    <h3 className="text-xl font-semibold">Things to Do</h3>
                  </div>
                  <ul className="text-gray-700 space-y-2">
                    {destination.thingsToDo.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <span className="mr-2">•</span> {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4 text-emerald-600">
                    <Backpack className="h-6 w-6 mr-2" />
                    <h3 className="text-xl font-semibold">What to Bring</h3>
                  </div>
                  <ul className="text-gray-700 space-y-2">
                    {destination.whatToBring.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <span className="mr-2">•</span> {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Getting There Section */}
      <section className="py-12 bg-emerald-50">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <div className="flex items-center mb-6 text-emerald-800">
              <MapPin className="h-6 w-6 mr-2" />
              <h2 className="text-2xl md:text-3xl font-bold">Getting There</h2>
            </div>

            <Card>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Clock className="h-5 w-5 mr-3 text-emerald-600 mt-0.5" />
                    <div>
                      <h3 className="font-medium text-gray-900">Travel Time</h3>
                      <p className="text-gray-700">{destination.travelTime}</p>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-medium text-gray-900 mb-2">Directions</h3>
                    <p className="text-gray-700">{destination.directions}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-12">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-emerald-800">Gallery</h2>
            <p className="text-gray-700 mt-2">Explore the beauty of {destination.name} through our gallery</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {destination.gallery.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.03 }}
                className="relative h-64 rounded-xl overflow-hidden shadow-md"
              >
                <Image src={image.src || "/placeholder.svg"} alt={image.alt} fill className="object-cover" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
