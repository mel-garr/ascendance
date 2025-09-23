"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { FaCheckCircle, FaMotorcycle } from "react-icons/fa"

// Fix: add props type
type ContactFormProps = {
  title?: string
  description?: string
}

export default function ContactForm({ title, description }: ContactFormProps) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    reason: "",
    message: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const router = useRouter()

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 4000)
  }

  const handleBuilder = () => {
    localStorage.setItem("contactForm", JSON.stringify(formData))
    router.push("/builder")
  }

  return (
    <section className="max-w-6xl mx-auto my-16 rounded-2xl shadow-lg overflow-hidden bg-base-100">
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Left Side - Image & Text */}
        <div
          className="p-10 flex flex-col justify-center text-white relative"
          style={{
            backgroundImage: "url('/images/EV1.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative z-10">
            <h2 className="text-4xl font-bold mb-6">{title || "Why Semeta-TRT?"}</h2>
            <p className="mb-4 opacity-90 leading-relaxed">
              {description ||
                `+75% of car journeys are less than 10km, usually with just the driver.  
                Do we really need a 3-ton vehicle for such trips?  
                Electric vehicles should become more affordable as battery prices drop below $100 per kWh.`}
            </p>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="p-10 bg-base-200 flex flex-col justify-center">
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="form-control">
                  <label className="label font-medium">First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    placeholder="John"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="input input-bordered rounded-lg w-full"
                  />
                </div>
                <div className="form-control">
                  <label className="label font-medium">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Doe"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="input input-bordered rounded-lg w-full"
                  />
                </div>
              </div>

              {/* Email */}
              <div className="form-control">
                <label className="label font-medium">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="you@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="input input-bordered rounded-lg w-full"
                />
              </div>

              {/* Phone */}
              <div className="form-control">
                <label className="label font-medium">Phone (optional)</label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="+1 (555) 123-4567"
                  value={formData.phone}
                  onChange={handleChange}
                  className="input input-bordered rounded-lg w-full"
                />
              </div>

              {/* Reason */}
              <div className="form-control">
                <label className="label font-medium">Reason for Contact</label>
                <select
                  name="reason"
                  value={formData.reason}
                  onChange={handleChange}
                  className="select select-bordered rounded-lg w-full"
                  required
                >
                  <option value="" disabled>
                    Select an option
                  </option>
                  <option value="preorder">Preorder Vehicle</option>
                  <option value="support">Customer Support</option>
                  <option value="partnership">Partnership Inquiry</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Message */}
              <div className="form-control">
                <label className="label font-medium">Message</label>
                <textarea
                  name="message"
                  placeholder="Tell us more..."
                  value={formData.message}
                  onChange={handleChange}
                  className="textarea textarea-bordered rounded-lg w-full h-28"
                />
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button type="submit" className="btn btn-primary flex-1">
                  Join Newsletter
                </button>

                {/* Preorder Button */}
                <button
                  type="button"
                  onClick={handleBuilder}
                  className="btn btn-outline flex-1 flex items-center justify-center gap-2"
                >
                  <FaMotorcycle className="text-primary text-xl" />
                  Build
                </button>
              </div>
            </form>
          ) : (
            <div className="flex flex-col items-center justify-center py-16 text-center">
              <FaCheckCircle className="text-green-500 text-6xl mb-4" />
              <h3 className="text-2xl font-bold">Thanks for joining!</h3>
              <p className="text-base-content/70">You’re subscribed to our newsletter.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
