"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { services } from "../../../constants/index";
import FadeUp from "@/components/shared/FadeUp";

export default function ContactFormContent() {
  const searchParams = useSearchParams();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    customService: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  useEffect(() => {
    const serviceParam = searchParams.get("service");
    if (serviceParam) {
      const serviceTitles = services.map((s) => s.title);
      if (serviceTitles.includes(serviceParam)) {
        setFormData((prev) => ({
          ...prev,
          service: serviceParam,
          customService: "",
        }));
      } else {
        setFormData((prev) => ({
          ...prev,
          service: "Other",
          customService: serviceParam,
        }));
      }
    }
  }, [searchParams]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleServiceChange = (e) => {
    const value = e.target.value;
    setFormData((prev) => ({
      ...prev,
      service: value,
      customService: "",
    }));
  };

  const handleCustomServiceChange = (e) => {
    setFormData((prev) => ({ ...prev, customService: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const finalService =
      formData.service === "Other" && formData.customService.trim()
        ? formData.customService
        : formData.service;

    const payload = {
      ...formData,
      service: finalService,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        setSubmitStatus("success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "",
          customService: "",
          message: "",
        });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass =
    "w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-900 outline-none transition focus:border-[#13a9c2] focus:ring-2 focus:ring-[#13a9c2]/20";
  const labelClass = "mb-2 block text-sm font-medium text-gray-800";

  return (
    <main className="bg-white">
      <section className="relative overflow-hidden bg-gradient-to-br from-[#13a9c2]/10 via-white to-[#8cbc24]/10 py-14 md:py-20">
        <div className="wrapper">
          <FadeUp delay={0}>
            <div className="max-w-3xl">
              <span className="mb-4 inline-flex rounded-full bg-[#13a9c2]/15 px-4 py-1 text-sm font-medium text-[#0b8093]">
                Contact
              </span>
              <h1 className="h1-bold mb-5 text-gray-900">
                Get in touch with <span className="text-[#8cbc24]">John</span>
              </h1>
              <p className="p-regular-20 max-w-2xl text-gray-700">
                Request a quote, ask a question, or book an assessment. 
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      <section className="wrapper py-12">
        <div className="grid gap-8 lg:grid-cols-2">
          <FadeUp delay={0.1}>
            <div className="space-y-6">
              <div>
                <h2 className="mb-3 text-2xl font-semibold text-gray-900">
                  Contact details
                </h2>
                <p className="max-w-xl text-gray-700">
                  For bookings or quotes, use the contact form or reach out directly
                  by phone or email.
                </p>
              </div>

              <div className="space-y-4">
                <div className="rounded-2xl bg-amber-50 p-5 shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-white p-3 shadow-sm">
                      <svg
                        className="h-5 w-5 text-[#8cbc24]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Phone</h3>
                      <a
                        href="tel:+447710418206"
                        className="mt-1 inline-block text-gray-700 underline transition hover:text-[#8cbc24]"
                      >
                        +44 7710 418206
                      </a>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl bg-[#13a9c2]/10 p-5 shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-white p-3 shadow-sm">
                      <svg
                        className="h-5 w-5 text-[#13a9c2]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Email</h3>
                      <a
                        href="mailto:studlakes5@gmail.com"
                        className="mt-1 inline-block text-gray-700 underline transition hover:text-[#13a9c2]"
                      >
                        studlakes5@gmail.com
                      </a>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl bg-green-50 p-5 shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-white p-3 shadow-sm">
                      <svg
                        className="h-5 w-5 text-[#8cbc24]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Coverage area</h3>
                      <p className="mt-1 text-gray-700">
                        Most of the West Midlands, Worcestershire, Warwickshire, and surrounding areas.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FadeUp>

          <FadeUp delay={0.2}>
            <div className="rounded-3xl bg-gray-50 p-6 shadow-md ring-1 ring-gray-100 md:p-8">
              <div className="mb-6">
                <h2 className="text-2xl font-semibold text-gray-900">
                  Send a message
                </h2>
                <p className="mt-2 text-gray-600">
                  Fill in the form below and we’ll get back to you shortly.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="sm:col-span-2">
                    <label htmlFor="name" className={labelClass}>
                      Full name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={inputClass}
                      placeholder="Your name"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className={labelClass}>
                      Email address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={inputClass}
                      placeholder="you@example.com"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className={labelClass}>
                      Phone number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={inputClass}
                      placeholder="Optional"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className={labelClass}>
                    Service interested in *
                  </label>
                  <select
                    id="service"
                    value={formData.service}
                    onChange={handleServiceChange}
                    className={inputClass}
                    required
                  >
                    <option value="">Select a service</option>
                    {services.map((service, idx) => (
                      <option key={idx} value={service.title}>
                        {service.title}
                      </option>
                    ))}
                    <option value="Other">Other</option>
                  </select>
                </div>

                {formData.service === "Other" && (
                  <div>
                    <label htmlFor="customService" className={labelClass}>
                      Please specify your service *
                    </label>
                    <input
                      type="text"
                      id="customService"
                      value={formData.customService}
                      onChange={handleCustomServiceChange}
                      className={inputClass}
                      placeholder="e.g. Planning advice"
                      required
                    />
                  </div>
                )}

                <div>
                  <label htmlFor="message" className={labelClass}>
                    Message *
                  </label>
                  <textarea
                    id="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    className={`${inputClass} resize-none`}
                    placeholder="Give some details about your property or what you need help with..."
                    required
                  />
                </div>

                {submitStatus === "success" && (
                  <div className="rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700">
                    ✓ Message sent successfully. We’ll get back to you soon.
                  </div>
                )}

                {submitStatus === "error" && (
                  <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                    ❌ Failed to send your message. Please try again or contact using phone or email
                    directly.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex min-w-[160px] items-center justify-center rounded-xl bg-[#8cbc24] px-6 py-3 font-medium text-white transition hover:bg-[#7ca822] disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>
          </FadeUp>
        </div>
      </section>
    </main>
  );
}