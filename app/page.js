import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://galleria.co.ke/storage/2022/04/DSC_9507.jpg"
            alt="Fine wine selection"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 hero-gradient"></div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-1/4 left-10 w-32 h-32 bg-amber-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-10 w-40 h-40 bg-amber-600/10 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 z-10 text-white">
          <div className="max-w-3xl fade-in">
            <h1 className="font-display text-5xl md:text-7xl font-bold mb-4 leading-tight">
              Welcome to{" "}
              <span className="bg-gradient-to-r from-amber-300 to-amber-500 bg-clip-text text-transparent">
                MegaWines
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-6 text-amber-100">
              Kenya's premier importer of fine alcohol for over 25 years
            </p>
            <p className="text-lg mb-8 text-gray-200 max-w-2xl">
              Discover our curated selection of the world's finest wines and spirits at our eight state-of-the-art
              locations across Nairobi and Mombasa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/about"
                className="bg-amber-700 hover:bg-amber-800 text-white px-8 py-3 rounded-md text-lg font-medium transition-colors inline-flex items-center justify-center"
              >
                Discover Our Story
              </Link>
              <Link
                href="https://thewhiskyshop.co.ke/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-transparent border-2 border-amber-400 hover:bg-amber-400 hover:text-gray-900 text-white px-8 py-3 rounded-md text-lg font-medium transition-colors inline-flex items-center justify-center"
              >
                Shop Premium Collection
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="ml-2"
                >
                  <path d="M7 7h10v10"></path>
                  <path d="M7 17 17 7"></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m6 9 6 6 6-6"></path>
          </svg>
        </div>
      </section>

      {/* About Brief Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center fade-in">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Fine Alcohol Importers Since 2000
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              MegaWines brings the world's finest wines and spirits to Kenya, with eight state-of-the-art liquor shops
              and the magnificent Anuba Lounge across Nairobi and Mombasa.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-8 text-center text-gray-900">
            Our Premium Collection
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="relative h-64 overflow-hidden rounded-lg shadow-lg group">
              <Image
                src="https://galleria.co.ke/storage/2022/04/DSC_9479.jpg"
                alt="Premium wine selection"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-xl font-semibold">Fine Wines</h3>
                <p className="text-sm">Curated selection from around the world</p>
              </div>
            </div>
            <div className="relative h-64 overflow-hidden rounded-lg shadow-lg group">
              <Image
                src="https://galleria.co.ke/storage/2022/04/DSC_9357.jpg"
                alt="Premium whisky collection"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-xl font-semibold">Premium Spirits</h3>
                <p className="text-sm">The finest whisky and spirits collection</p>
              </div>
            </div>
            <div className="relative h-64 overflow-hidden rounded-lg shadow-lg group">
              <Image
                src="https://galleria.co.ke/storage/2022/04/DSC_9418.jpg"
                alt="Anuba Lounge interior"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-xl font-semibold">Anuba Lounge</h3>
                <p className="text-sm">Experience luxury in our premium lounge</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900 fade-in">
            Our Locations
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <LocationCard
              city="Nairobi"
              image="https://galleria.co.ke/storage/2022/04/DSC_9349.jpg"
              description="Our flagship stores in Kenya's capital city offer an unparalleled selection of fine wines and spirits."
            />

            <LocationCard
              city="Mombasa"
              image="/placeholder.svg?height=600&width=800"
              description="Visit our coastal locations for a curated collection of premium alcohol with ocean views."
            />
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-amber-700 text-white">
        <div className="container mx-auto px-4 text-center fade-in">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">Experience the MegaWines Difference</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Visit one of our eight state-of-the-art liquor shops or the magnificent Anuba Lounge today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-amber-700 hover:bg-gray-100 px-8 py-3 rounded-md text-lg font-medium transition-colors inline-flex items-center justify-center"
            >
              Find Our Locations
            </Link>
            <Link
              href="https://thewhiskyshop.co.ke/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-amber-700 text-white px-8 py-3 rounded-md text-lg font-medium transition-colors inline-flex items-center justify-center"
            >
              Shop Online
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="ml-2"
              >
                <path d="M7 7h10v10"></path>
                <path d="M7 17 17 7"></path>
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

function LocationCard({ city, image, description }) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg fade-in hover:shadow-xl transition-shadow duration-300">
      <div className="relative h-64">
        <Image src={image || "/placeholder.svg"} alt={`MegaWines ${city} location`} fill className="object-cover" />
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-3 text-gray-900 font-display">{city}</h3>
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  )
}
