import Image from "next/image"
import ContactForm from "@/components/contact-form"

export default function Contact() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center">
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
        <div className="absolute top-1/4 right-10 w-32 h-32 bg-amber-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-10 w-40 h-40 bg-amber-600/10 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 z-10 text-white">
          <div className="max-w-3xl fade-in">
            <h1 className="font-display text-5xl md:text-7xl font-bold mb-4 leading-tight">Contact Us</h1>
            <p className="text-xl md:text-2xl text-amber-100">Get in touch with our team</p>
          </div>
        </div>
      </section>

      {/* Contact Content Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="fade-in">
              <h2 className="font-display text-3xl font-bold mb-6 text-gray-900">Visit Us</h2>

              <div className="space-y-6">
                <ContactInfo title="Location" info="Lavington Mall - Mezzanine, The Whisky Shop" />

                <ContactInfo title="Address" info="Off James Gichuru Road, Nairobi" />

                <ContactInfo title="Hours" info="Open 8 AM – Closes 5:30 PM" />

                <ContactInfo title="Phone" info="+254 790 487 000" />
              </div>

              {/* Map */}
              <div className="mt-8 h-64 bg-amber-100 rounded-lg overflow-hidden shadow-md fade-in">
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

            {/* Contact Form */}
            <div className="fade-in">
              <h2 className="font-display text-3xl font-bold mb-6 text-gray-900">Send Us a Message</h2>
              <ContactForm />
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
      <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      <p className="text-gray-700">{info}</p>
    </div>
  )
}
