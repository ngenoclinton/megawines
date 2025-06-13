import "./globals.css"
import Header from "../components/header"
import Footer from "../components/Footer"
import AnimationProvider from "@/components/AnimationProvider"
import Script from "next/script"
// import LoadingProvider from "@/components/loading-provider"

export const metadata = {
  title: "MegaWines - Fine Alcohol Importer in Kenya",
  description:
    "Established 25 years ago, MegaWines is a distinguished importer of fine alcohol in Kenya with locations in Nairobi and Mombasa.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        {/* <LoadingProvider> */}
          <AnimationProvider>
            <Header />
            <main className="min-h-screen">{children}</main>
            <Footer />
          </AnimationProvider>
        {/* </LoadingProvider> */}

        {/* Add a small script to ensure animations work */}
        <Script id="animation-fix">
          {`
            document.addEventListener('DOMContentLoaded', function() {
              setTimeout(function() {
                document.querySelectorAll('.reveal-element, .reveal-left, .reveal-right, .reveal-scale, .reveal-fade, .text-reveal').forEach(function(el) {
                  if (el.getBoundingClientRect().top < window.innerHeight) {
                    el.classList.add('revealed');
                  }
                });
              }, 300);
            });
          `}
        </Script>
      </body>
    </html>
  )
}
