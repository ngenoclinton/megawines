import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import LoadingProvider from "@/components/loading-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "MegaWines - Fine Alcohol Importer in Kenya",
  description:
    "Established 25 years ago, MegaWines is a distinguished importer of fine alcohol in Kenya with locations in Nairobi and Mombasa.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <LoadingProvider>
          <Header />
          <main className="min-h-screen pt-20">{children}</main>
          <Footer />
        </LoadingProvider>
      </body>
    </html>
  )
}
