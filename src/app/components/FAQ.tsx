"use client"

import { useState } from "react"
import { FiChevronDown, FiChevronUp } from "react-icons/fi"

type FAQItem = {
  question: string
  answer: string
}

const faqItems: FAQItem[] = [
  {
    question: "What is the Ascendance vehicle?",
    answer: "The Ascendance is a half-motorcycle, half-car 3-wheeled vehicle designed for urban mobility, combining agility, efficiency, and safety.",
  },
  {
    question: "How can I reserve an Ascendance vehicle?",
    answer: "You can reserve your vehicle online through our website by submitting your details and paying a reservation fee.",
  },
  {
    question: "Can I personalize my vehicle?",
    answer: "Yes! You can select colors, accessories, and add-ons through our online configurator to make your vehicle truly yours.",
  },
  {
    question: "What are the main specifications?",
    answer: "It features a compact 3-wheel design, electric motor, modern safety features, seating for 1-2 passengers, and a small cargo area suitable for urban use.",
  },
  {
    question: "How do I charge the vehicle?",
    answer: "The vehicle comes with a standard home charger. You can also use public charging stations. Our app provides station locations and charging information.",
  },
  {
    question: "How long does it take to charge?",
    answer: "Charging times depend on the outlet type. Using a standard home outlet, expect up to 50 km range added overnight.",
  },
  {
    question: "How do I maintain my vehicle?",
    answer: "Maintenance is minimal due to the electric motor. Regular inspections and battery checks are recommended. Our service centers handle full maintenance.",
  },
  {
    question: "Where can I get support?",
    answer: "You can contact Ascendance customer support via email, phone, or through the website chat for any questions or assistance.",
  },
  {
    question: "Can I test drive before buying?",
    answer: "Yes, test drives are available at select locations. Contact our support team to schedule a session.",
  },
  {
    question: "What are the purchasing options?",
    answer: "You can buy the vehicle outright, finance it, or explore subscription options depending on availability and location.",
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="max-w-5xl mx-auto my-16 px-4">
      <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqItems.map((item, index) => (
          <div key={index} className="border border-base-300 rounded-lg overflow-hidden">
            <button
              className="w-full flex justify-between items-center px-4 py-3 bg-base-200 hover:bg-base-300 focus:outline-none"
              onClick={() => toggleIndex(index)}
            >
              <span className="text-left font-medium">{item.question}</span>
              {openIndex === index ? <FiChevronUp /> : <FiChevronDown />}
            </button>
            {openIndex === index && (
              <div className="px-4 py-3 bg-base-100 text-base-content/80">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
