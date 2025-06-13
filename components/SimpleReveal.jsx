"use client"

import { useEffect, useRef } from "react"

export default function SimpleReveal({ children, className = "", delay = 0, threshold = 0.1 }) {
  const ref = useRef(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    // Set initial opacity to ensure elements are visible if JS fails
    element.style.opacity = "0.01"

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Add small delay if specified
          setTimeout(() => {
            element.classList.add("revealed")
          }, delay)
          observer.unobserve(element)
        }
      },
      { threshold },
    )

    observer.observe(element)

    // Force reveal if already in viewport
    if (element.getBoundingClientRect().top < window.innerHeight) {
      setTimeout(() => {
        element.classList.add("revealed")
      }, delay)
    }

    return () => {
      if (element) observer.unobserve(element)
    }
  }, [delay, threshold])

  return (
    <div ref={ref} className={`reveal-element ${className}`}>
      {children}
    </div>
  )
}
