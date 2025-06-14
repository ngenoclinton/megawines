"use client"

import { createContext, useContext, useEffect, useRef } from "react"

const AnimationContext = createContext()

export function useAnimation() {
  return useContext(AnimationContext)
}

export default function AnimationProvider({ children }) {
  const observerRef = useRef(null)

  useEffect(() => {
    // Ensure we're in the browser
    if (typeof window === "undefined") return

    const timer = setTimeout(() => {
      // Create intersection observer for scroll animations
      observerRef.current = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("revealed")
              // Once revealed, stop observing
              observerRef.current?.unobserve(entry.target)
            }
          })
        },
        {
          threshold: 0.1,
          rootMargin: "0px 0px -50px 0px",
        },
      )

      // Observe all elements with reveal classes
      const allElements = document.querySelectorAll(
        ".reveal-element, .reveal-left, .reveal-right, .reveal-scale, .reveal-fade, .text-reveal",
      )

      allElements.forEach((el) => {
        if (observerRef.current) {
          observerRef.current.observe(el)
        }
      })

      // Force reveal elements in viewport on load
      allElements.forEach((el) => {
        const rect = el.getBoundingClientRect()
        const isInViewport =
          rect.top >= 0 &&
          rect.left >= 0 &&
          rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
          rect.right <= (window.innerWidth || document.documentElement.clientWidth)

        if (isInViewport) {
          el.classList.add("revealed")
        }
      })
    }, 100)

    // Cleanup
    return () => {
      clearTimeout(timer)
      if (observerRef.current) {
        observerRef.current.disconnect()
      }
    }
  }, [])

  // Function to manually trigger animations
  const triggerAnimation = (selector) => {
    if (typeof window === "undefined") return

    const elements = document.querySelectorAll(selector)
    elements.forEach((el) => {
      el.classList.add("revealed")
    })
  }

  return (
    <AnimationContext.Provider value={{ triggerAnimation }}>
      <div className="page-transition">{children}</div>
    </AnimationContext.Provider>
  )
}
