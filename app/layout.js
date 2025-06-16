import "./globals.css"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
// import LoadingProvider from "@/components/LoadingProvider"

export const metadata = {
  title: "MegaWines - Fine Alcohol Importer in Kenya",
  description:
    "Established 25 years ago, MegaWines is a distinguished importer of fine alcohol in Kenya with locations in Nairobi and Mombasa.",
  icons: {
    icon: "/logo-bronze.png",
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        {/* <LoadingProvider> */}
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
        {/* </LoadingProvider> */}
      </body>
    </html>
  )
}
