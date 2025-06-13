'use client'
import { ExternalLink, Wine } from "lucide-react"
import SimpleReveal from "@/components/SimpleReveal"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <SimpleReveal>
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bronze-gradient rounded-full flex items-center justify-center mr-3">
                <Wine className="w-6 h-6 text-white" />
              </div>
              <span className="font-display text-xl font-bold text-orange-400">MegaWines</span>
            </div>
            <p className="text-gray-300 mb-4">
              Distinguished importer of fine alcohol in Kenya for over 25 years. Visit our online store for premium
              wines and spirits.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-orange-400 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-orange-400 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-2.08v5.73a3.87 3.87 0 01-3.14 3.78 3.86 3.86 0 01-4.25-2.05v-.01a3.88 3.88 0 01-.78-2.36c0-2.13 1.74-3.87 3.87-3.87.47 0 .92.08 1.34.23V1.13a6.3 6.3 0 00-1.34-.14C5.94.99 2.5 4.43 2.5 8.93s3.44 7.94 7.94 7.94a7.94 7.94 0 007.94-7.94c0-.47-.04-.93-.11-1.38l-2.68 2.68z" />
                </svg>
              </a>
            </div>
          </SimpleReveal>

          {/* Quick Links */}
          <SimpleReveal delay={100}>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-300 hover:text-orange-400 transition-colors">
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-orange-400 transition-colors">
                  Information
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-orange-400 transition-colors">
                  Cart
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-orange-400 transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <a
                  href="https://thewhiskyshop.co.ke/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-orange-400 transition-colors flex items-center"
                >
                  Shop Online <ExternalLink className="ml-1 w-3 h-3" />
                </a>
              </li>
            </ul>
          </SimpleReveal>

          {/* Contact Info */}
          <SimpleReveal delay={200}>
            <h3 className="font-semibold text-lg mb-4">Contact Info</h3>
            <div className="text-gray-300 space-y-2">
              <p>Lavington Mall - Mezzanine</p>
              <p>Off James Gichuru Road, Nairobi</p>
              <p>Phone: +254 790 487 000</p>
              <p>Hours: 8 AM - 5:30 PM</p>
            </div>
          </SimpleReveal>
        </div>

        <SimpleReveal delay={300}>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              Powered by <span className="text-orange-400 font-medium">iRob Technologies</span>
            </p>
          </div>
        </SimpleReveal>
      </div>
    </footer>
  )
}
