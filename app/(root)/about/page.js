"use client";

import Image from "next/image";
import FadeUp from "@/components/shared/FadeUp";

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mx-auto max-w-4xl">
        <FadeUp delay={0}>
          <h1 className="mb-6 text-4xl font-bold md:text-5xl">
            Your local Energy Expert:{" "}
            <span className="text-[#8cbc24]">John Lake</span>
          </h1>
        </FadeUp>

        <div className="mb-12 grid gap-8 md:grid-cols-2">
          <FadeUp delay={0.1}>
            <div className="relative h-80 overflow-hidden rounded-lg shadow-md transition-shadow duration-300 hover:shadow-xl md:h-full">
              <Image
                src="/assets/profilepic.jpg"
                alt="John Lake - Energy Assessor"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </FadeUp>

          <FadeUp delay={0.2}>
            <div className="rounded-lg bg-amber-100/20 p-3 transition-colors duration-300 hover:bg-amber-100/30">
              <h2 className="mb-4 text-2xl font-semibold">Professional Background</h2>
              <p className="mb-4">
                Fully accredited Domestic Energy and SAP 10 Assessor (DEA, OCDEA)
                and Retrofit Assessor servicing clients such as architects,
                developers, & planning consultants across the Midlands.
              </p>
              <p className="mb-4">
                Provides modern, solution-based approach working with latest
                methodologies, aiming to help clients meet planning policies and
                regulations.
              </p>
              <p>
                John strives to meet compliance and understands that there is no one
                size fits all solution – adapting your approach is key for success.
              </p>
            </div>
          </FadeUp>
        </div>

        <div className="mb-12 grid gap-8 md:grid-cols-2">
          <FadeUp delay={0.3}>
            <div className="rounded-lg bg-gray-100 p-6 transition-all duration-300 hover:shadow-md">
              <h3 className="mb-4 text-xl font-semibold">Qualifications</h3>
              <ul className="space-y-3">
                {[
                  "Domestic Energy Assessor (DEA) - Level 3",
                  "SAP 10 Assessor (OCDEA)",
                  "Retrofit Assessor - PAS 2035 Certified",
                  "Enhanced DBS Checked",
                  "Public Liability Insurance (£1m)",
                ].map((item, idx) => (
                  <li
                    key={idx}
                    className="animate-slideIn flex items-start opacity-0"
                    style={{ animationDelay: `${0.4 + idx * 0.05}s` }}
                  >
                    <svg
                      className="mr-2 h-5 w-5 flex-shrink-0 text-green-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeUp>

          <FadeUp delay={0.4}>
            <div className="flex flex-col items-center justify-center rounded-lg bg-green-50 p-6 text-center transition-all duration-300 hover:shadow-md">
              <h3 className="mb-4 text-xl font-semibold">Mission Statement</h3>
              <p className="text-lg">
                "I'm committed to helping homeowners and professionals navigate
                energy efficiency requirements with clarity and confidence."
              </p>
            </div>
          </FadeUp>
        </div>

        <FadeUp delay={0.5}>
          <div className="mb-12 rounded-lg bg-[#13a9c2]/10 p-6 transition-colors duration-300 hover:bg-[#13a9c2]/20">
            <h2 className="mb-4 text-2xl font-semibold">Why Choose Me?</h2>
            <div className="grid gap-6 md:grid-cols-2">
              {[
                {
                  title: "Local Expertise",
                  desc: "As a Midlands-based assessor, I understand the specific energy efficiency challenges of properties in our region, from Victorian terraces to modern developments.",
                },
                {
                  title: "Fast Service",
                  desc: "I offer same-day bookings where possible and guarantee EPC certificates within 24 hours of assessment (excluding SAP 10 assessments).",
                },
                {
                  title: "Competitive Pricing",
                  desc: "My rates are transparent and competitive, with discounts available for multiple properties.",
                },
                {
                  title: "Personal Approach",
                  desc: "I take time to explain the process and findings, helping you understand how to improve your property's energy efficiency.",
                },
              ].map((item, idx) => (
                <div key={idx} className="group">
                  <h3 className="mb-2 text-lg font-medium transition-colors duration-200 group-hover:text-[#13a9c2]">
                    {item.title}
                  </h3>
                  <p className="text-gray-700">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </FadeUp>
      </div>
    </div>
  );
}