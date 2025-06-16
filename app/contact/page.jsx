import Image from "next/image"

export default function Contact() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/logo-chalk.png"
            alt="MegaWines store interior"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 hero-gradient"></div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-1/4 right-10 w-32 h-32 bg-amber-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-10 w-40 h-40 bg-amber-600/10 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 z-10 text-white">
          <div className="max-w-3xl fade-in">
            <h1 className="font-display text-5xl md:text-7xl font-bold mb-4 leading-tight">Contact Us</h1>
            <p className="text-xl md:text-2xl text-amber-100">Visit our locations across Kenya</p>
          </div>
        </div>
      </section>

      {/* Contact Content Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Main Contact Information */}
            <div className="text-center mb-12 fade-in">
              <h2 className="font-display text-3xl font-bold mb-6 text-gray-900">Visit Our Stores</h2>
              <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                Experience our premium collection at any of our eight state-of-the-art locations across Nairobi and
                Mombasa.
              </p>
            </div>

            {/* Contact Cards Grid */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* Primary Location */}
              <div className="bg-gradient-to-br from-amber-50 to-amber-100 p-8 rounded-lg shadow-lg fade-in">
                <h3 className="font-display text-2xl font-bold mb-4 text-gray-900">Flagship Store</h3>
                <div className="space-y-3">
                  <ContactInfo title="Location" info="Lavington Mall - Mezzanine" />
                  <ContactInfo title="Address" info="Off James Gichuru Road, Nairobi" />
                  <ContactInfo title="Phone" info="+254 790 487 000" />
                  <ContactInfo title="Hours" info="8:00 AM - 5:30 PM Daily" />
                </div>
              </div>

              {/* Online Store */}
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-lg shadow-lg fade-in">
                <h3 className="font-display text-2xl font-bold mb-4 text-gray-900">Shop Online</h3>
                <p className="text-gray-700 mb-6">
                  Browse our complete collection from the comfort of your home with convenient delivery options.
                </p>
                <a
                  href="https://thewhiskyshop.co.ke/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-amber-700 text-white px-6 py-3 rounded-lg font-medium hover:bg-amber-800 transition-colors"
                >
                  Visit Online Store
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
                </a>
              </div>
            </div>

            {/* Map Section */}
            <div className="fade-in">
              <h3 className="font-display text-2xl font-bold mb-6 text-center text-gray-900">Find Us</h3>
              <div className="h-96 bg-amber-100 rounded-lg overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8176744026705!2d36.7665!3d-1.2765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMcKwMTYnMzUuNCJTIDM2wrA0NicwMC4wIkU!5e0!3m2!1sen!2sus!4v1623252345678!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  title="MegaWines Location"
                ></iframe>
              </div>
            </div>

            {/* Additional Locations */}
            <div className="mt-16 fade-in">
              <h3 className="font-display text-2xl font-bold mb-8 text-center text-gray-900">All Locations</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <LocationCard city="Nairobi" count="6 Stores" description="Multiple locations across the capital" />
                <LocationCard city="Mombasa" count="2 Stores" description="Premium coastal locations" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

function ContactInfo({ title, info }) {
  return (
    <div>
      <h4 className="text-sm font-semibold text-gray-600 uppercase tracking-wide">{title}</h4>
      <p className="text-gray-900 font-medium">{info}</p>
    </div>
  )
}

function LocationCard({ city, count, description }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
      <h4 className="font-display text-xl font-bold text-gray-900 mb-2">{city}</h4>
      <p className="text-amber-700 font-semibold mb-2">{count}</p>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}
