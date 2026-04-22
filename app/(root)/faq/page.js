import Link from "next/link";
import { Button } from "@/components/ui/button";
import FAQAccordion from "@/components/shared/FAQAccordion";
import FadeUp from "@/components/shared/FadeUp";

export const metadata = {
  title: "FAQs | EPC Solutions",
  description:
    "Find answers to common questions about EPC assessments, booking, pricing, coverage areas, and domestic energy certificates.",
};

export default function FAQPage() {
  const faqs = [
    {
      question: "What is an Energy Performance Certificate (EPC)?",
      answer:
        "An EPC provides an energy efficiency rating for a property, from A (most efficient) to G (least efficient). It is required when a property is built, sold, or rented.",
    },
    {
      question: "How long is an EPC valid for?",
      answer: "An EPC is valid for 10 years from the date of issue.",
    },
    {
      question: "Do you offer services for commercial properties?",
      answer: "Yes EPC assessments for commercial properties are available. Please reach out for more details and special pricing.",
    },
    {
      question: "How much does an EPC assessment cost?",
      answer:
        "The cost of an EPC assessment varies depending on the size and type of property. Please get in touch for a detailed quote.",
    },
    {
      question: "How long does an EPC assessment take?",
      answer:
        "The assessment typically takes around 1 to 2 hours, depending on the size and complexity of the property.",
    },
    {
      question: "How can I book an appointment?",
      answer:
        "You can book an appointment by contacting John via phone, email, or through the website contact form.",
    },
    {
      question: "What areas do you serve?",
      answer:
        "John serves the West Midlands, Worcestershire, Warwickshire, and surrounding areas. Please get in touch to confirm if your location is covered.",
    },
    {
      question: "What qualifications do your assessors have?",
      answer:
        "Our assessors are ABBE Level 3 fully qualified and accredited Domestic Energy Assessors.",
    },
  ];

  return (
    <main className="bg-white">
      <section className="relative overflow-hidden bg-gradient-to-br from-[#13a9c2]/10 via-white to-[#8cbc24]/10 py-14 md:py-20">
        <div className="wrapper">
          <FadeUp delay={0}>
            <div className="max-w-3xl">
              <span className="mb-4 inline-flex rounded-full bg-[#13a9c2]/15 px-4 py-1 text-sm font-medium text-[#0b8093]">
                FAQs
              </span>
              <h1 className="h1-bold mb-5 text-gray-900">
                Frequently Asked Questions{" "}
                <span className="text-[#8cbc24]">about EPC Solutions</span>
              </h1>
              <p className="p-regular-20 max-w-2xl text-gray-700">
                This page answers the most common questions about our services.
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      <section className="wrapper py-12">
        <div className="grid gap-8 lg:grid-cols-3">
          <FadeUp delay={0.1} className="lg:col-span-2">
            <FAQAccordion faqs={faqs} />
          </FadeUp>

          <div className="space-y-6">
            <FadeUp delay={0.2}>
              <div className="rounded-2xl bg-amber-50 p-6 shadow-sm">
                <h2 className="mb-3 text-xl font-semibold text-gray-900">
                  Need a quote?
                </h2>
                <p className="mb-4 text-gray-700">
                  EPC pricing depends on the size and type of property.
                </p>
                <Button className="button bg-[#8cbc24] text-white hover:bg-[#7ca822]">
                  <Link href="/contact">Request a Quote</Link>
                </Button>
              </div>
            </FadeUp>

            <FadeUp delay={0.3}>
              <div className="rounded-2xl bg-[#13a9c2]/10 p-6 shadow-sm">
                <h2 className="mb-3 text-xl font-semibold text-gray-900">
                  Locations covered
                </h2>
                <p className="text-gray-700">
                  John serves the West Midlands, Worcestershire, Warwickshire, and surrounding areas.
                </p>
              </div>
            </FadeUp>

            <FadeUp delay={0.4}>
              <div className="rounded-2xl bg-green-50 p-6 shadow-sm">
                <h2 className="mb-3 text-xl font-semibold text-gray-900">
                  Domestic & Commercial Services
                </h2>
                <p className="text-gray-700">
                  EPC assessments for both domestic and commercial properties are available.
                </p>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      <FadeUp delay={0.5}>
        <section className="wrapper pb-16">
          <div className="rounded-2xl bg-gray-900 px-6 py-10 text-white md:px-10">
            <h2 className="mb-3 text-2xl font-semibold">
              Still have a question?
            </h2>
            <p className="mb-6 max-w-2xl text-white/85">
              If you can’t find the answer you need, get in touch and we’ll be happy to help.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button className="button bg-[#8cbc24] text-white hover:bg-[#7ca822]">
                <Link href="/contact">Contact Us</Link>
              </Button>
              <Button
                variant="outline"
                className="button border-white text-black hover:bg-white/10"
              >
                <Link href="/services">View Services</Link>
              </Button>
            </div>
          </div>
        </section>
      </FadeUp>
    </main>
  );
}