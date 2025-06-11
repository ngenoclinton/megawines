import Image from "next/image"
import Link from "next/link"

export default function About() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://galleria.co.ke/storage/2022/04/DSC_9349.jpg"
            alt="Fine wine cellar"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 hero-gradient"></div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-1/3 right-10 w-32 h-32 bg-amber-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 left-10 w-40 h-40 bg-amber-600/10 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 z-10 text-white">
          <div className="max-w-3xl fade-in">
            <h1 className="font-display text-5xl md:text-7xl font-bold mb-4 leading-tight">About Us</h1>
            <p className="text-xl md:text-2xl text-amber-100">Our journey of bringing fine alcohol to Kenya</p>
          </div>
        </div>
      </section>

      {/* About Content Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto fade-in">
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Established 25 years ago in 2000, Mega Wines is a distinguished importer of fine alcohol in Kenya. The
              word Mega means "Large", and this is by no means an understatement. Totalling eight state-of-the-art
              liquor shops and the magnificent Anuba Lounge, we have carefully expanded our value chain to serve Kenya's
              major cities – Nairobi and Mombasa.
            </p>

            <div className="my-12 p-8 bg-gradient-to-br from-amber-50 to-amber-100 rounded-lg border border-amber-200 shadow-md">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="w-full md:w-1/3 flex justify-center">
                  <Image
                    src="/logo.png"
                    alt="The Whisky Shop Logo"
                    width={150}
                    height={150}
                    className="object-contain"
                  />
                </div>
                <div className="w-full md:w-2/3">
                  <h3 className="text-xl font-semibold mb-3 font-display">Our Partners</h3>
                  <p className="text-gray-700 mb-4">
                    We're proud to work with the finest alcohol retailers and distributors in East Africa.
                  </p>
                  <Link
                    href="https://thewhiskyshop.co.ke/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-amber-700 hover:text-amber-800 font-medium flex items-center gap-2 group"
                  >
                    <span>For inspiration, visit our partners at The Whisky Shop</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="group-hover:translate-x-1 transition-transform"
                    >
                      <path d="M7 7h10v10"></path>
                      <path d="M7 17 17 7"></path>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-8 text-center text-gray-900">
            Our Premium Spaces
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="relative h-64 overflow-hidden rounded-lg shadow-lg">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="MegaWines store interior"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="relative h-64 overflow-hidden rounded-lg shadow-lg">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Wine tasting event"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="relative h-64 overflow-hidden rounded-lg shadow-lg">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Premium spirits collection"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900 fade-in">
            Our Journey
          </h2>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-12">
              <TimelineItem
                year="2000"
                title="The Beginning"
                description="MegaWines was established as a small wine import business in Nairobi."
              />

              <TimelineItem
                year="2005"
                title="First Expansion"
                description="Opened our second location and expanded our product range to include premium spirits."
              />

              <TimelineItem
                year="2010"
                title="Coastal Presence"
                description="Expanded to Mombasa, bringing our selection to Kenya's coastal region."
              />

              <TimelineItem
                year="2015"
                title="Anuba Lounge"
                description="Launched the magnificent Anuba Lounge, offering a premium tasting experience."
              />

              <TimelineItem
                year="2023"
                title="Today"
                description="Eight state-of-the-art liquor shops across Nairobi and Mombasa, serving all of Kenya."
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

function TimelineItem({ year, title, description }) {
  return (
    <div className="flex fade-in">
      <div className="flex flex-col items-center mr-6">
        <div className="w-12 h-12 rounded-full bg-amber-700 flex items-center justify-center text-white font-bold">
          {year.slice(2)}
        </div>
        <div className="h-full w-0.5 bg-amber-700"></div>
      </div>
      <div className="pb-8">
        <span className="text-amber-700 font-bold">{year}</span>
        <h3 className="text-xl font-bold mb-2 text-gray-900 font-display">{title}</h3>
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  )
}
