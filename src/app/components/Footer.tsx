"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import {
  FaBolt, FaEnvelope, FaPhone, FaMapMarkerAlt,
  FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube
} from "react-icons/fa"

function Footer() {
  const [email, setEmail] = useState("")
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [year, setYear] = useState<number | null>(null)

  useEffect(() => {
    setYear(new Date().getFullYear()) // run only in browser
  }, [])

  const handleNewsletterSignup = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setIsSubscribed(true)
      setTimeout(() => {
        setIsSubscribed(false)
        setEmail("")
      }, 3000)
    }
  }

  const footerLinks = {
    product: [
      { name: "Vehicle Configurator", href: "/builder" },
      { name: "Features", href: "/gallery" },
      { name: "FAQ", href: "/faq" },
      { name: "Contact Us", href: "/contact" },
    ],
    company: [
      { name: "About Us", href: "/about" },
      { name: "Careers", href: "#" },
      { name: "Press", href: "#" },
    ],
    support: [
      { name: "Customer Support", href: "#" },
      { name: "Warranty", href: "#" },
      { name: "Service Centers", href: "#" },
    ],
    legal: [
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "#" },
    ],
  }

  const socialLinks = [
    { name: "Facebook", icon: FaFacebook, href: "#" },
    { name: "Twitter", icon: FaTwitter, href: "#" },
    { name: "Instagram", icon: FaInstagram, href: "#" },
    { name: "LinkedIn", icon: FaLinkedin, href: "#" },
    { name: "YouTube", icon: FaYoutube, href: "#" },
  ]

  return (
    <footer className="bg-base-200 border-t border-base-300">
      <div className="max-w-7xl mx-auto px-6">
        {/* Newsletter */}
        <div className="py-10 border-b border-base-300 flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <h3 className="text-xl font-bold">Stay Updated</h3>
            <p className="text-sm opacity-70">Get the latest news and updates about our 3-wheel EV.</p>
          </div>
          <div>
            {!isSubscribed ? (
              <form onSubmit={handleNewsletterSignup} className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="input input-bordered w-full md:w-64"
                />
                <button type="submit" className="btn btn-primary">Subscribe</button>
              </form>
            ) : (
              <div className="flex items-center gap-2 text-green-600">
                <FaEnvelope />
                <span>Thank you for subscribing!</span>
              </div>
            )}
          </div>
        </div>

        {/* Main Footer */}
        <div className="py-12 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white">
                <FaBolt />
              </div>
              <span className="font-bold text-lg">Ascendance EV</span>
            </Link>
            <p className="text-sm opacity-70">
              Building the future of clean mobility with safe and stylish 3-wheel vehicles.
            </p>
            <div className="mt-4 space-y-2 text-sm opacity-80">
              <div className="flex items-center gap-2"><FaMapMarkerAlt /> <span>1234 Innovation Drive</span></div>
              <div className="flex items-center gap-2"><FaPhone /> <span>+1 (555) 123-4567</span></div>
              <div className="flex items-center gap-2"><FaEnvelope /> <span>hello@ascendanceev.com</span></div>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h4 className="font-semibold mb-3 capitalize">{section}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="hover:text-primary transition-colors text-sm">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="py-6 border-t border-base-300 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm opacity-70">
            © {year ?? ""} Ascendance EV. All rights reserved.
          </p>
          <div className="flex gap-3">
            {socialLinks.map((social) => (
              <Link
                key={social.name}
                href={social.href}
                className="btn btn-circle btn-ghost text-lg"
                aria-label={social.name}
              >
                <social.icon />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
