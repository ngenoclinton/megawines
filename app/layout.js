import "./globals.css"
import Header from "../components/header"
import Footer from "../components/footer"
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
          <AnimationProvider>
            <Header />
            <main className="min-h-screen">{children}</main>
            <Footer />
          </AnimationProvider>
      </body>
    </html>
  )
}
