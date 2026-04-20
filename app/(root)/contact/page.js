import { Suspense } from "react";
import ContactFormContent from "./ContactFormContent";

export default function ContactPage() {
  return (
    <Suspense fallback={<div className="container mx-auto px-4 py-12 text-center">Loading contact form...</div>}>
      <ContactFormContent />
    </Suspense>
  );
}