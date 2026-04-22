import Link from "next/link";
import { Button } from "@/components/ui/button";
import FadeUp from "@/components/shared/FadeUp";

export const metadata = {
  title: "What to Expect During an EPC Assessment | EPC Solutions",
  description:
    "Find out what happens during an EPC assessment, how long it takes, and what the assessor will check.",
};

const steps = [
  {
    title: "1. Arrival and property access",
    desc: "The assessor will arrive at the property and begin by confirming access to all main areas, including any loft space or utility areas where relevant.",
  },
  {
    title: "2. Measuring and recording",
    desc: "Rooms, extensions, and key property features are measured and recorded to build an accurate picture of the home.",
  },
  {
    title: "3. Review of energy features",
    desc: "Heating systems, hot water, lighting, windows, and insulation levels are reviewed as part of the EPC assessment.",
  },
  {
    title: "4. Photographs and notes",
    desc: "Photos may be taken for evidence and compliance records. These help support the final assessment.",
  },
  {
    title: "5. Certificate issued",
    desc: "After the visit, the information is processed and the EPC is produced, usually within 24–48 hours.",
  },
];

export default function WhatToExpectPage() {
  return (
    <main className="bg-white">
      <section className="relative overflow-hidden bg-gradient-to-br from-[#13a9c2]/10 via-white to-[#8cbc24]/10 py-14 md:py-20">
        <div className="wrapper">
          <FadeUp delay={0}>
            <div className="max-w-3xl">
              <span className="mb-4 inline-flex rounded-full bg-[#13a9c2]/15 px-4 py-1 text-sm font-medium text-[#0b8093]">
                Assessment Guide
              </span>
              <h1 className="h1-bold mb-5 text-gray-900">
                What to Expect During an{" "}
                <span className="text-[#13a9c2]">EPC Assessment</span>
              </h1>
              <p className="p-regular-20 max-w-2xl text-gray-700">
                If you have never booked an EPC before, here’s a simple breakdown of
                what happens during the visit and what the assessor will be looking at.
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      <section className="wrapper py-12">
        <div className="grid gap-6 md:grid-cols-3">
          <FadeUp delay={0.1}>
            <div className="rounded-2xl bg-white p-6 shadow-md ring-1 ring-gray-100">
              <p className="text-sm font-medium text-gray-500">Typical duration</p>
              <p className="mt-2 text-3xl font-bold text-[#13a9c2]">30–60 mins</p>
            </div>
          </FadeUp>

          <FadeUp delay={0.2}>
            <div className="rounded-2xl bg-white p-6 shadow-md ring-1 ring-gray-100">
              <p className="text-sm font-medium text-gray-500">Property access needed</p>
              <p className="mt-2 text-3xl font-bold text-[#8cbc24]">Yes</p>
            </div>
          </FadeUp>

          <FadeUp delay={0.3}>
            <div className="rounded-2xl bg-white p-6 shadow-md ring-1 ring-gray-100">
              <p className="text-sm font-medium text-gray-500">Certificate turnaround</p>
              <p className="mt-2 text-3xl font-bold text-gray-900">24–48 hrs</p>
            </div>
          </FadeUp>
        </div>
      </section>

      <section className="wrapper pb-12">
        <FadeUp delay={0.4}>
          <div className="grid gap-6">
            {steps.map((step, index) => (
              <div
                key={index}
                className="rounded-2xl border border-gray-100 bg-gray-50 p-6 shadow-sm transition-all duration-200 hover:shadow-md"
              >
                <h2 className="mb-2 text-xl font-semibold text-gray-900">{step.title}</h2>
                <p className="text-gray-700">{step.desc}</p>
              </div>
            ))}
          </div>
        </FadeUp>
      </section>

      <section className="wrapper pb-12">
        <div className="grid gap-8 md:grid-cols-2">
          <FadeUp delay={0.5}>
            <div className="rounded-2xl bg-amber-50 p-6 shadow-sm">
              <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                What the assessor may look at
              </h2>
              <ul className="space-y-3 text-gray-700">
                {[
                  "Property size and layout",
                  "Age and construction type",
                  "Boiler and heating controls",
                  "Loft and wall insulation where visible",
                  "Windows and glazing",
                  "Low-energy lighting",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="mt-1 text-[#8cbc24]">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeUp>

          <FadeUp delay={0.6}>
            <div className="rounded-2xl bg-[#13a9c2]/10 p-6 shadow-sm">
              <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                Good to know
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  An EPC visit is non-invasive and generally very straightforward.
                </p>
                <p>
                  The assessor does not carry out repair work or disruption-heavy checks.
                </p>
                <p>
                  The aim is to record the existing energy-related features of the property
                  accurately and produce a compliant certificate.
                </p>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      <FadeUp delay={0.7}>
        <section className="wrapper pb-16">
          <div className="rounded-2xl bg-gray-900 px-6 py-10 text-white md:px-10">
            <h2 className="mb-3 text-2xl font-semibold">
              Need an EPC for your property?
            </h2>
            <p className="mb-6 max-w-2xl text-white/85">
              Book your assessment today and get fast, professional service across the Midlands.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Button className="button bg-[#8cbc24] hover:bg-[#7ca822]">
                <Link href="/contact" className="text-white">
                  Book Now
                </Link>
              </Button>

              <Button
                variant="outline"
                className="button border-white hover:bg-white/10"
              >
                <Link href="/services" className="text-black">
                  View Services
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </FadeUp>
    </main>
  );
}