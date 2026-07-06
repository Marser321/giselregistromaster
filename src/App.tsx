import { useEffect, useState } from "react";
import { Hero } from "@/components/sections/Hero";
import { Empathy } from "@/components/sections/Empathy";
import { Vsl } from "@/components/sections/Vsl";
import { Benefits } from "@/components/sections/Benefits";
import { Pillars } from "@/components/sections/Pillars";
import { Authority } from "@/components/sections/Authority";
import { Testimonials } from "@/components/sections/Testimonials";
import { Faq } from "@/components/sections/Faq";
import { FinalCta } from "@/components/sections/FinalCta";
import { Footer } from "@/components/sections/Footer";
import { StickyCta } from "@/components/StickyCta";
import { FormModalProvider } from "@/components/form/FormModalContext";
import { FormModal } from "@/components/form/FormModal";
import { ThankYou } from "@/components/pages/ThankYou";

/**
 * Orden narrativo del copy de la Dra. Gisella (Ser Uno):
 * gancho → identificación → descubrimiento → autoridad → prueba → objeciones → cierre.
 * Las secciones opcionales (Vsl, Benefits, Faq) se auto-ocultan si no hay datos.
 */
export default function App() {
  const [isThankYou, setIsThankYou] = useState(false);

  useEffect(() => {
    if (window.location.pathname === "/gracias" || window.location.pathname === "/gracias/") {
      setIsThankYou(true);
    }
  }, []);

  if (isThankYou) {
    return <ThankYou />;
  }

  return (
    <FormModalProvider>
      <main className="relative min-h-screen overflow-x-hidden">
        <Hero />
        <Empathy />
        <Vsl />
        <Benefits />
        <Pillars />
        <Authority />
        <Testimonials />
        <Faq />
        <FinalCta />
        <Footer />
        <StickyCta />
      </main>
      <FormModal />
    </FormModalProvider>
  );
}
