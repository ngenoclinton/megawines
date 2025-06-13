import Image from "next/image"
import ContactForm from "@/components/contact-form"
import { MapPin, Clock, Phone, ExternalLink } from "lucide-react"
import SimpleReveal from "@/components/SimpleReveal"

export default function Contact() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="MegaWines store interior"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 hero-gradient"></div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-1/4 right-10 w-32 h-32 bg-orange-500/10 rounded-full blur-3xl float"></div>
        <div className="absolute bottom-1/4 left-10 w-40 h-40 bg-orange-600/10 rounded-full blur-3xl float-delayed"></div>

        <div className="container mx-auto px-4 z-10 text-white">
          <div className="max-w-4xl">
            <div className="text-reveal mb-4">
              <h1 className="text-reveal-inner font-display text-5xl md:text-7xl font-bold leading-tight hero-title">
                Contact Us
              </h1>
            </div>
            <div className="text-reveal">
              <p className="text-reveal-inner text-xl md:text-2xl text-orange-100 hero-subtitle">
                Get in touch with our team
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Content Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
            {/* Contact Information */}
            <SimpleReveal>
              <h2 className="font-display text-4xl font-bold text-gray-900 mb-8">Visit Us</h2>

              <div className="space-y-8">
                <SimpleReveal delay={100}>
                  <ContactInfo
                    icon={<MapPin className="w-6 h-6" />}
                    title="Location"
                    info="Lavington Mall - Mezzanine, The Whisky Shop"
                  />
                </SimpleReveal>

                <SimpleReveal delay={200}>
                  <ContactInfo
                    icon={<MapPin className="w-6 h-6" />}
                    title="Address"
                    info="Off James Gichuru Road, Nairobi"
                  />
                </SimpleReveal>

                <SimpleReveal delay={300}>
                  <ContactInfo icon={<Clock className="w-6 h-6" />} title="Hours" info="Open 8 AM – Closes 5:30 PM" />
                </SimpleReveal>

                <SimpleReveal delay={400}>
                  <ContactInfo icon={<Phone className="w-6 h-6" />} title="Phone" info="+254 790 487 000" />
                </SimpleReveal>
              </div>

              {/* Shop Online Link */}
              <SimpleReveal delay={500}>
                <div className="p-6 bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl border border-orange-200 mt-8">
                  <h3 className="font-semibold text-lg mb-3 font-display">Shop Online</h3>
                  <p className="text-gray-700 mb-4">
                    Browse our complete collection of premium wines and spirits online.
                  </p>
                  <a
                    href="https://thewhiskyshop.co.ke/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-orange-700 font-semibold hover:text-orange-600 transition-colors group"
                  >
                    <span>Visit The Whisky Shop</span>
                    <ExternalLink className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </SimpleReveal>

              {/* Map */}
              <SimpleReveal delay={600}>
                <div className="h-64 bg-orange-100 rounded-2xl overflow-hidden shadow-lg mt-8">
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
              </SimpleReveal>
            </SimpleReveal>

            {/* Contact Form */}
            <SimpleReveal>
              <h2 className="font-display text-4xl font-bold text-gray-900 mb-8">Send Us a Message</h2>
              <ContactForm />
            </SimpleReveal>
          </div>
        </div>
      </section>

      {/* Additional Contact Section */}
      <section className="py-20 bg-gradient-to-b from-orange-50 to-orange-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <SimpleReveal>
              <h2 className="font-display text-4xl font-bold text-gray-900 mb-4">Multiple Ways to Connect</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Whether you're looking for a specific product or planning an event, we're here to help
              </p>
            </SimpleReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <SimpleReveal delay={100}>
              <div className="text-center">
                <div className="w-16 h-16 bronze-gradient rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg hover-lift">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-display text-xl font-semibold text-gray-900 mb-2">Call Us</h3>
                <p className="text-gray-600">Speak directly with our team</p>
                <p className="text-orange-700 font-semibold mt-2">+254 790 487 000</p>
              </div>
            </SimpleReveal>

            <SimpleReveal delay={200}>
              <div className="text-center">
                <div className="w-16 h-16 bronze-gradient rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg hover-lift">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-display text-xl font-semibold text-gray-900 mb-2">Visit Store</h3>
                <p className="text-gray-600">Experience our collection in person</p>
                <p className="text-orange-700 font-semibold mt-2">Lavington Mall</p>
              </div>
            </SimpleReveal>

            <SimpleReveal delay={300}>
              <div className="text-center">
                <div className="w-16 h-16 bronze-gradient rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg hover-lift">
                  <ExternalLink className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-display text-xl font-semibold text-gray-900 mb-2">Shop Online</h3>
                <p className="text-gray-600">Browse our complete catalog</p>
                <a
                  href="https://thewhiskyshop.co.ke/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange-700 font-semibold mt-2 inline-block hover:text-orange-600 transition-colors"
                >
                  thewhiskyshop.co.ke
                </a>
              </div>
            </SimpleReveal>
          </div>
        </div>
      </section>
    </div>
  )
}

function ContactInfo({ icon, title, info }) {
  return (
    <div className="flex items-start space-x-4">
      <div className="w-12 h-12 bronze-gradient rounded-full flex items-center justify-center text-white shadow-lg hover-lift">
        {icon}
      </div>
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-1">{title}</h3>
        <p className="text-gray-700">{info}</p>
      </div>
    </div>
  )
}
