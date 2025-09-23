"use client"

import { useEffect, useState } from "react"
import { ArrowRight, Play } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [offsetY, setOffsetY] = useState(0)

  useEffect(() => {
    setIsVisible(true)

    const handleScroll = () => setOffsetY(window.scrollY * 0.3)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('/images/vehi1.jpg')`,
          transform: `translateY(${offsetY}px)`,
          transition: "transform 0.1s linear",
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className={`transition-all duration-1000 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            The Future of
            <span className="block text-transparent bg-gradient-to-r from-primary to-secondary bg-clip-text">
              Sustainable Mobility
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Experience the revolutionary 3-wheel electric vehicle that combines the agility of a motorcycle with the
            comfort and safety of a car.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="#contact"
              className="btn btn-primary btn-lg flex items-center gap-2 px-8 py-4 text-lg"
            >
              Contact <ArrowRight className="w-5 h-5" />
            </Link>

            <Link
              href="#preorder"
              className="btn btn-outline btn-lg border-white text-white hover:bg-white hover:text-foreground flex items-center gap-2 px-8 py-4 text-lg"
            >
              <Play className="w-5 h-5" /> Preorder Now
            </Link>
          </div>

          {/* 👇 Scroll Indicator placed BELOW the buttons */}
          <div className="mt-12 flex justify-center animate-bounce">
            <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
