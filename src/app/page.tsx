import { HeroSection } from "./components/HeroSession";
import ContactForm from "./components/ContactForm";

export default function Home() {
  return (
    <div className="">
        <HeroSection />
        <ContactForm
        title="Preorder Your Vehicle"
        description="Be the first to experience our 3-wheel electric vehicle. Leave your details below."
      />
    </div>
  );
}

