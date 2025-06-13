"use client"

import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import LoadingSpinner from "./LoadingSpinner"

export default function LoadingProvider({ children }) {
  const [loading, setLoading] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setLoading(true)
    const timer = setTimeout(() => {
      setLoading(false)

      // Force reveal animations after loading (only in browser)
      if (typeof window !== "undefined") {
        setTimeout(() => {
          const elements = document.querySelectorAll(
            ".reveal-element, .reveal-left, .reveal-right, .reveal-scale, .reveal-fade, .text-reveal",
          )
          elements.forEach((el) => {
            if (el.getBoundingClientRect().top < window.innerHeight) {
              el.classList.add("revealed")
            }
          })
        }, 100)
      }
    }, 1000)

    return () => clearTimeout(timer)
  }, [pathname])

  return (
    <>
      {loading && <LoadingSpinner />}
      <div
        className={loading ? "opacity-0" : "opacity-100 transition-opacity duration-500"}
        style={{ minHeight: "100vh" }}
      >
        {children}
      </div>
    </>
  )
}
