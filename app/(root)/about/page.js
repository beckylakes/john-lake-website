"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        {/* Animated title */}
        <FadeUp delay={0}>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Your local Energy Expert:{" "}
            <span className="text-[#8cbc24]">John Lake</span>
          </h1>
        </FadeUp>

        {/* Profile + Background section */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <FadeUp delay={0.1}>
            <div className="relative h-80 md:h-full rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
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
            <div className="bg-amber-100/20 p-3 rounded-lg hover:bg-amber-100/30 transition-colors duration-300">
              <h2 className="text-2xl font-semibold mb-4">Professional Background</h2>
              <p className="mb-4">
                Fully accredited Domestic Energy and SAP 10 Assessor (DEA, OCDEA) and Retrofit Assessor
                servicing clients such as architects, developers, & planning consultants across the Midlands.
              </p>
              <p className="mb-4">
                Provides modern, solution-based approach working with latest methodologies, aiming to help
                clients meet planning policies and regulations.
              </p>
              <p>
                John strives to meet compliance and understands that there is no one size fits all solution
                – adapting your approach is key for success.
              </p>
            </div>
          </FadeUp>
        </div>

        {/* Qualifications + Mission Statement */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <FadeUp delay={0.3}>
            <div className="bg-gray-100 p-6 rounded-lg hover:shadow-md transition-all duration-300">
              <h3 className="text-xl font-semibold mb-4">Qualifications</h3>
              <ul className="space-y-3">
                {[
                  "Domestic Energy Assessor (DEA) - Level 3",
                  "SAP 10 Assessor (OCDEA)",
                  "Retrofit Assessor - PAS 2035 Certified",
                  "Enhanced DBS Checked",
                  "Public Liability Insurance (£1m)",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start opacity-0 animate-slideIn" style={{ animationDelay: `${0.4 + idx * 0.05}s` }}>
                    <svg className="h-5 w-5 text-green-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeUp>
          <FadeUp delay={0.4}>
            <div className="bg-green-50 p-6 rounded-lg flex flex-col items-center justify-center text-center hover:shadow-md transition-all duration-300">
              <h3 className="text-xl font-semibold mb-4">Mission Statement</h3>
              <p className="text-lg">
                "I'm committed to helping homeowners and professionals navigate energy efficiency requirements
                with clarity and confidence."
              </p>
            </div>
          </FadeUp>
        </div>

        {/* Why Choose Me section */}
        <FadeUp delay={0.5}>
          <div className="bg-[#13a9c2]/10 p-6 rounded-lg mb-12 hover:bg-[#13a9c2]/20 transition-colors duration-300">
            <h2 className="text-2xl font-semibold mb-4">Why Choose Me?</h2>
            <div className="grid md:grid-cols-2 gap-6">
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
                  <h3 className="text-lg font-medium mb-2 group-hover:text-[#13a9c2] transition-colors duration-200">
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

// ===== Helper Component for fade‑up animation =====
const FadeUp = ({ children, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // animate only once
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" } // trigger slightly before entering
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${delay}s` }}
    >
      {children}
    </div>
  );
};