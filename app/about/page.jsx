import Image from "next/image"
import Link from "next/link"
import { ExternalLink, Award, Users, MapPin, Calendar, Trophy, Star } from "lucide-react"
import SimpleReveal from "@/components/SimpleReveal"

export default function About() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/logo-bronze.png"
            alt="Fine wine cellar"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 hero-gradient"></div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-1/3 right-10 w-32 h-32 bg-orange-500/10 rounded-full blur-3xl float"></div>
        <div className="absolute bottom-1/3 left-10 w-40 h-40 bg-orange-600/10 rounded-full blur-3xl float-delayed"></div>

        <div className="container mx-auto px-4 z-10 text-white">
          <div className="max-w-4xl">
            <div className="text-reveal mb-4">
              <h1 className="text-reveal-inner font-display text-5xl md:text-7xl font-bold leading-tight hero-title">
                About Us
              </h1>
            </div>
            <div className="text-reveal">
              <p className="text-reveal-inner text-xl md:text-2xl text-orange-100 hero-subtitle">
                Our journey of bringing fine alcohol to Kenya
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Content Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <SimpleReveal>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Established 25 years ago in 2000, Mega Wines is a distinguished importer of fine alcohol in Kenya. The
                word Mega means "Large", and this is by no means an understatement. Totalling eight state-of-the-art
                liquor shops and the magnificent Anuba Lounge, we have carefully expanded our value chain to serve
                Kenya's major cities – Nairobi and Mombasa.
              </p>
            </SimpleReveal>

            <SimpleReveal delay={100}>
              <div className="my-12 p-8 bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl border border-orange-200 shadow-lg hover-lift">
                <div className="flex flex-col md:flex-row items-center gap-6">
                  <div className="w-full md:w-1/3 flex justify-center">
                    <Image
                      src="/images/whisky-shop-logo.png"
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
                      className="text-orange-700 hover:text-orange-800 font-medium flex items-center gap-2 group"
                    >
                      <span>For inspiration, visit our partners at The Whisky Shop</span>
                      <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            </SimpleReveal>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-b from-orange-50 to-orange-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <SimpleReveal>
              <h2 className="font-display text-4xl font-bold text-gray-900 mb-4">Our Achievements</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                A quarter-century of excellence in the fine alcohol industry
              </p>
            </SimpleReveal>
          </div>

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
                <p className="text-gray-600 font-medium">State-of-the-art Stores</p>
              </div>
            </SimpleReveal>

            <SimpleReveal delay={300}>
              <div className="text-center">
                <div className="w-20 h-20 bronze-gradient rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg hover-lift">
                  <MapPin className="w-10 h-10 text-white" />
                </div>
                <h3 className="font-display text-4xl font-bold text-gray-900 mb-2">2</h3>
                <p className="text-gray-600 font-medium">Major Cities Served</p>
              </div>
            </SimpleReveal>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <SimpleReveal>
              <h2 className="font-display text-4xl font-bold text-gray-900 mb-4">Our Premium Spaces</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Step inside our carefully designed locations that reflect our commitment to excellence
              </p>
            </SimpleReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <SimpleReveal delay={100}>
              <div className="gallery-item">
                <Image
                  src="https://galleria.co.ke/storage/2022/04/DSC_9418.jpg"
                  alt="MegaWines store interior"
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover"
                />
                <div className="gallery-overlay">
                  <h3 className="font-semibold text-xl mb-2">Store Interior</h3>
                  <p className="text-sm opacity-90">Modern and sophisticated design</p>
                </div>
              </div>
            </SimpleReveal>

            <SimpleReveal delay={200}>
              <div className="gallery-item">
                <Image
                  src="https://galleria.co.ke/storage/2022/04/DSC_9479.jpg"
                  alt="Wine tasting event"
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover"
                />
                <div className="gallery-overlay">
                  <h3 className="font-semibold text-xl mb-2">Wine Tasting</h3>
                  <p className="text-sm opacity-90">Exclusive tasting events</p>
                </div>
              </div>
            </SimpleReveal>

            <SimpleReveal delay={300}>
              <div className="gallery-item">
                <Image
                  src="https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img,w_420/https://galleria.co.ke/storage/2022/04/DSC_9357-420x420.jpg"
                  alt="Premium spirits collection"
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover"
                />
                <div className="gallery-overlay">
                  <h3 className="font-semibold text-xl mb-2">Premium Collection</h3>
                  <p className="text-sm opacity-90">Rare and exclusive spirits</p>
                </div>
              </div>
            </SimpleReveal>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-gradient-to-b from-orange-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <SimpleReveal>
              <h2 className="font-display text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                From humble beginnings to becoming Kenya's premier alcohol importer
              </p>
            </SimpleReveal>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-12">
              <SimpleReveal delay={100}>
                <TimelineItem
                  year="2000"
                  title="The Beginning"
                  description="MegaWines was established as a small wine import business in Nairobi."
                  icon={<Calendar className="w-6 h-6" />}
                />
              </SimpleReveal>

              <SimpleReveal delay={200}>
                <TimelineItem
                  year="2005"
                  title="First Expansion"
                  description="Opened our second location and expanded our product range to include premium spirits."
                  icon={<Trophy className="w-6 h-6" />}
                />
              </SimpleReveal>

              <SimpleReveal delay={300}>
                <TimelineItem
                  year="2010"
                  title="Coastal Presence"
                  description="Expanded to Mombasa, bringing our selection to Kenya's coastal region."
                  icon={<MapPin className="w-6 h-6" />}
                />
              </SimpleReveal>

              <SimpleReveal delay={400}>
                <TimelineItem
                  year="2015"
                  title="Anuba Lounge"
                  description="Launched the magnificent Anuba Lounge, offering a premium tasting experience."
                  icon={<Star className="w-6 h-6" />}
                />
              </SimpleReveal>

              <SimpleReveal delay={500}>
                <TimelineItem
                  year="2025"
                  title="Today"
                  description="Eight state-of-the-art liquor shops across Nairobi and Mombasa, serving all of Kenya."
                  icon={<Award className="w-6 h-6" />}
                />
              </SimpleReveal>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

function TimelineItem({ year, title, description, icon }) {
  return (
    <div className="flex">
      <div className="flex flex-col items-center mr-6">
        <div className="w-16 h-16 rounded-full bronze-gradient flex items-center justify-center text-white shadow-lg hover-lift">
          {icon}
        </div>
        <div className="h-full w-0.5 bg-orange-300 mt-4"></div>
      </div>
      <div className="pb-8 flex-1">
        <span className="text-orange-700 font-bold text-lg">{year}</span>
        <h3 className="text-2xl font-bold mb-2 text-gray-900 font-display">{title}</h3>
        <p className="text-gray-700 leading-relaxed">{description}</p>
      </div>
    </div>
  )
}
