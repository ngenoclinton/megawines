import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ExternalLink, Award, Users, Star, MapPin, Clock, Phone } from "lucide-react"
import SimpleReveal from "@/components/SimpleReveal"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/logo-bronze.png"
            alt="Premium wine and spirits collection"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 hero-gradient"></div>
        </div>

        {/* Floating decorative elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-orange-400/10 rounded-full blur-3xl float"></div>
        <div className="absolute bottom-32 right-16 w-40 h-40 bg-orange-500/10 rounded-full blur-3xl float-delayed"></div>
        <div className="absolute top-1/3 right-20 w-24 h-24 bg-orange-300/15 rounded-full blur-2xl float"></div>

        <div className="container mx-auto px-4 z-10 text-white text-center">
          <div className="max-w-5xl mx-auto">
            <div className="text-reveal mb-6">
              <h1 className="text-reveal-inner font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-tight hero-title">
                Welcome to{" "}
                <span className="bg-gradient-to-r from-orange-300 via-orange-400 to-orange-500 bg-clip-text text-transparent">
                  MegaWines
                </span>
              </h1>
            </div>

            <div className="text-reveal mb-4">
              <p className="text-reveal-inner text-xl md:text-3xl font-serif text-orange-100 hero-subtitle">
                Kenya's Premier Fine Alcohol Importer
              </p>
            </div>

            <div className="text-reveal mb-12">
              <p className="text-reveal-inner text-lg md:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed hero-description">
                Celebrating 25 years of excellence in importing the world's finest wines and spirits. Eight premium
                locations serving Nairobi and Mombasa with unparalleled quality and sophistication.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center hero-buttons">
              <Link
                href="https://thewhiskyshop.co.ke/"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-full hover:from-orange-400 hover:to-orange-500 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 btn-primary"
              >
                <span>Shop Premium Collection</span>
                <ExternalLink className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/about"
                className="group inline-flex items-center px-8 py-4 border-2 border-orange-400 text-orange-100 font-semibold rounded-full hover:bg-orange-400 hover:text-gray-900 transition-all duration-300"
              >
                <span>Our Story</span>
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-orange-300 animate-bounce">
          <div className="w-6 h-10 border-2 border-orange-300 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-orange-300 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-b from-orange-50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <SimpleReveal delay={100}>
              <div className="text-center">
                <div className="w-20 h-20 bronze-gradient rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg hover-lift">
                  <Award className="w-10 h-10 text-white" />
                </div>
                <h3 className="font-display text-4xl font-bold text-gray-900 mb-2">25+</h3>
                <p className="text-gray-600 font-medium">Years of Excellence</p>
              </div>
            </SimpleReveal>

            <SimpleReveal delay={200}>
              <div className="text-center">
                <div className="w-20 h-20 bronze-gradient rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg hover-lift">
                  <Users className="w-10 h-10 text-white" />
                </div>
                <h3 className="font-display text-4xl font-bold text-gray-900 mb-2">8</h3>
                <p className="text-gray-600 font-medium">Premium Locations</p>
              </div>
            </SimpleReveal>

            <SimpleReveal delay={300}>
              <div className="text-center">
                <div className="w-20 h-20 bronze-gradient rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg hover-lift">
                  <Star className="w-10 h-10 text-white" />
                </div>
                <h3 className="font-display text-4xl font-bold text-gray-900 mb-2">1000+</h3>
                <p className="text-gray-600 font-medium">Premium Products</p>
              </div>
            </SimpleReveal>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <SimpleReveal className="lg:pr-8">
              <div className="text-reveal mb-6">
                <h2 className="text-reveal-inner font-display text-5xl font-bold text-gray-900">
                  A Legacy of <span className="text-orange-600">Excellence</span>
                </h2>
              </div>
              <SimpleReveal delay={100}>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Since 2000, MegaWines has been Kenya's distinguished importer of fine alcohol. The word "Mega" means
                  "Large", and this is by no means an understatement.
                </p>
              </SimpleReveal>
              <SimpleReveal delay={200}>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  With eight state-of-the-art liquor shops and the magnificent Anuba Lounge, we have carefully expanded
                  our value chain to serve Kenya's major cities with unparalleled quality and service.
                </p>
              </SimpleReveal>
              <SimpleReveal delay={300}>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/about"
                    className="inline-flex items-center text-orange-700 font-semibold hover:text-orange-600 transition-colors group"
                  >
                    <span>Read Our Story</span>
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                    href="https://thewhiskyshop.co.ke/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-orange-700 font-semibold hover:text-orange-600 transition-colors group"
                  >
                    <span>Visit Our Shop</span>
                    <ExternalLink className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </SimpleReveal>
            </SimpleReveal>
            <SimpleReveal>
              <div className="relative hover-lift">
                <Image
                  src="/placeholder.svg?height=500&width=600"
                  alt="MegaWines premium store interior"
                  width={600}
                  height={500}
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bronze-gradient rounded-2xl flex items-center justify-center shadow-lg">
                  <Award className="w-12 h-12 text-white" />
                </div>
              </div>
            </SimpleReveal>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-24 bg-gradient-to-b from-orange-50 to-orange-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <SimpleReveal>
              <h2 className="font-display text-5xl font-bold text-gray-900 mb-4">Our Premium Spaces</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Experience luxury and sophistication at our carefully curated locations
              </p>
            </SimpleReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <SimpleReveal delay={100}>
              <div className="gallery-item">
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  alt="Premium wine collection display"
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover"
                />
                <div className="gallery-overlay">
                  <h3 className="font-semibold text-xl mb-2">Wine Collection</h3>
                  <p className="text-sm opacity-90">Curated selection from around the world</p>
                </div>
              </div>
            </SimpleReveal>

            <SimpleReveal delay={200}>
              <div className="gallery-item">
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  alt="Whisky and spirits section"
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover"
                />
                <div className="gallery-overlay">
                  <h3 className="font-semibold text-xl mb-2">Premium Spirits</h3>
                  <p className="text-sm opacity-90">The finest whisky and spirits collection</p>
                </div>
              </div>
            </SimpleReveal>

            <SimpleReveal delay={300}>
              <div className="gallery-item">
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  alt="Anuba Lounge interior"
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover"
                />
                <div className="gallery-overlay">
                  <h3 className="font-semibold text-xl mb-2">Anuba Lounge</h3>
                  <p className="text-sm opacity-90">Experience luxury in our premium lounge</p>
                </div>
              </div>
            </SimpleReveal>
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          {/* <div className="text-center mb-16">
            <SimpleReveal>
              <h2 className="font-display text-5xl font-bold text-gray-900 mb-4">Visit Our Locations</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Experience premium service at our flagship stores in Kenya's major cities
              </p>
            </SimpleReveal>
          </div> */}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Nairobi Location */}
            {/* <SimpleReveal delay={100}>
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-8 shadow-lg hover-lift">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bronze-gradient rounded-full flex items-center justify-center mr-4">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-display text-3xl font-semibold text-gray-900">Nairobi</h3>
                </div>
                <div className="space-y-4 text-gray-700">
                  <p className="flex items-center text-lg">
                    <MapPin className="w-5 h-5 mr-3 text-orange-600" />
                    Lavington Mall - Mezzanine, The Whisky Shop
                  </p>
                  <p className="flex items-center text-lg">
                    <MapPin className="w-5 h-5 mr-3 text-orange-600" />
                    Off James Gichuru Road, Nairobi
                  </p>
                  <p className="flex items-center text-lg">
                    <Clock className="w-5 h-5 mr-3 text-orange-600" />
                    Open 8 AM – Closes 5:30 PM
                  </p>
                  <p className="flex items-center text-lg">
                    <Phone className="w-5 h-5 mr-3 text-orange-600" />
                    +254 790 487 000
                  </p>
                </div>
                <Link
                  href="/contact"
                  className="inline-flex items-center mt-6 text-orange-700 font-semibold hover:text-orange-600 transition-colors group"
                >
                  <span>Get Directions</span>
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </SimpleReveal> */}

            {/* Mombasa Location */}
            {/* <SimpleReveal delay={200}>
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-8 shadow-lg hover-lift">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bronze-gradient rounded-full flex items-center justify-center mr-4">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-display text-3xl font-semibold text-gray-900">Mombasa</h3>
                </div>
                <div className="space-y-4 text-gray-700">
                  <p className="text-lg">Multiple premium locations serving the coastal region</p>
                  <p className="text-lg">Bringing the same excellence and quality to Kenya's coast</p>
                  <p className="text-lg">Contact us for specific store locations and operating hours</p>
                </div>
                <Link
                  href="/contact"
                  className="inline-flex items-center mt-6 text-orange-700 font-semibold hover:text-orange-600 transition-colors group"
                >
                  <span>Contact for Details</span>
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </SimpleReveal> */}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bronze-gradient">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <SimpleReveal>
              <h2 className="font-display text-5xl font-bold text-white mb-6">Experience Premium Quality</h2>
              <p className="text-xl text-orange-100 leading-relaxed mb-12">
                Discover our extensive collection of fine wines and premium spirits. Visit our stores or explore our
                online catalog for the ultimate luxury experience.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link
                  href="https://thewhiskyshop.co.ke/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-8 py-4 bg-white text-orange-700 font-semibold rounded-full hover:bg-orange-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 btn-primary"
                >
                  <span>Shop Online Now</span>
                  <ExternalLink className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-orange-700 transition-all duration-300"
                >
                  <span>Visit Our Stores</span>
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </div>
            </SimpleReveal>
          </div>
        </div>
      </section>
    </div>
  )
}
