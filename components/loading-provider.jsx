"use client"

import { usePathname, useSearchParams } from "next/navigation"
import { createContext, useContext, useEffect, useState } from "react"

const LoadingContext = createContext({
  isLoading: false,
  setIsLoading: () => {},
})

export const useLoading = () => useContext(LoadingContext)

export default function LoadingProvider({ children }) {
  const [isLoading, setIsLoading] = useState(false)
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    const handleStart = () => setIsLoading(true)
    const handleComplete = () => {
      setIsLoading(false)

      // Add fade-in effect to elements with the fade-in class
      setTimeout(() => {
        const fadeElements = document.querySelectorAll(".fade-in")
        fadeElements.forEach((element) => {
          element.classList.add("visible")
        })
      }, 100)
    }

    // Initialize observer for fade-in elements
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible")
          }
        })
      },
      { threshold: 0.1 },
    )

    // Observe all fade-in elements
    document.querySelectorAll(".fade-in").forEach((element) => {
      observer.observe(element)
    })

    // Set initial loading state
    setIsLoading(true)
    setTimeout(handleComplete, 500)

    return () => {
      observer.disconnect()
    }
  }, [pathname, searchParams])

  return (
    <LoadingContext.Provider value={{ isLoading, setIsLoading }}>
      {isLoading && (
        <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-80 z-50">
          <div className="puffer-loader">
            <div className="w-16 h-16 border-4 border-amber-700 rounded-full border-t-transparent"></div>
          </div>
        </div>
      )}
      {children}
    </LoadingContext.Provider>
  )
}
