import Link from "next/link"
import { Facebook, Instagram, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-emerald-900 text-white py-12">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Maripipi Island</h3>
            <p className="text-emerald-100">
              Discover the hidden paradise of the Philippines. Experience pristine beaches, crystal clear waters, and
              breathtaking views.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-emerald-100 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/destinations/sambawan" className="text-emerald-100 hover:text-white transition-colors">
                  Sambawan
                </Link>
              </li>
              <li>
                <Link href="/destinations/viga" className="text-emerald-100 hover:text-white transition-colors">
                  Viga
                </Link>
              </li>
              <li>
                <Link href="/destinations/napo" className="text-emerald-100 hover:text-white transition-colors">
                  Napo
                </Link>
              </li>
              <li>
                <Link href="/destinations/candol" className="text-emerald-100 hover:text-white transition-colors">
                  Candol
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <Link href="#" className="text-emerald-100 hover:text-white transition-colors">
                <Facebook className="h-6 w-6" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-emerald-100 hover:text-white transition-colors">
                <Instagram className="h-6 w-6" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-emerald-100 hover:text-white transition-colors">
                <Twitter className="h-6 w-6" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-emerald-800 mt-8 pt-8 text-center text-emerald-200">
          <p>Submitted by Dreina Elaine C. Rosario, BSTM 3 BRAVO | Submitted to Mr. Ernaldo Du</p>
          <p className="text-sm mt-2">
            &copy; {new Date().getFullYear()} Maripipi Island Tourism. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
