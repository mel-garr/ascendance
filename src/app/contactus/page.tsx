// app/builder/page.tsx
import ContactForm from "../components/ContactForm"

export default function BuilderPage() {
  return (
    <div className="max-w-7xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-6">Builder</h1>
      <ContactForm
        title="Get in Touch"
        description="We’d love to hear from you! Please fill out the form below."
      />
    </div>
  )
}
