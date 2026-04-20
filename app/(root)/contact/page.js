"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { services } from "../../../constants/index";

export default function ContactPage() {
  const searchParams = useSearchParams();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    customService: "", // only used when service === "Other"
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  // Pre‑fill service field from URL parameter
  useEffect(() => {
    const serviceParam = searchParams.get("service");
    if (serviceParam) {
      const serviceTitles = services.map(s => s.title);
      if (serviceTitles.includes(serviceParam)) {
        // Exact match – select from dropdown
        setFormData(prev => ({ ...prev, service: serviceParam, customService: "" }));
      } else {
        // Not a standard service – use "Other" and fill custom field
        setFormData(prev => ({ ...prev, service: "Other", customService: serviceParam }));
      }
    }
  }, [searchParams]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleServiceChange = (e) => {
    const value = e.target.value;
    setFormData(prev => ({ ...prev, service: value, customService: "" }));
  };

  const handleCustomServiceChange = (e) => {
    setFormData(prev => ({ ...prev, customService: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Prepare final service string for email
    const finalService = formData.service === "Other" && formData.customService.trim()
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

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-green-800">Contact John</h1>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Left column – contact info (unchanged) */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
            <p className="mb-6">
              For bookings or quotes, please use the contact form or reach out
              directly via phone or email.
            </p>

            <div className="space-y-4">
              {/* Phone */}
              <div className="flex items-start">
                <svg className="h-6 w-6 text-green-700 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <div>
                  <h3 className="font-medium">Phone</h3>
                  <a href="tel:+447710418206" className="text-gray-600 hover:text-green-700 underline">+447710418206</a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start">
                <svg className="h-6 w-6 text-green-700 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <div>
                  <h3 className="font-medium">Email</h3>
                  <a href="mailto:studlakes5@gmail.com" className="text-gray-600 hover:text-green-700 underline">studlakes5@gmail.com</a>
                </div>
              </div>

              {/* Coverage Area */}
              <div className="flex items-start">
                <div className="flex-shrink-0 pt-0.5">
                  <svg className="h-6 w-6 text-green-700 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium">Coverage Area</h3>
                  <p className="text-gray-600">
                    All Midlands counties including Birmingham, Coventry,
                    Leicester, Nottingham and surrounding areas
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block mb-1">Name *</label>
                <input type="text" id="name" value={formData.name} onChange={handleChange} className="w-full p-2 border rounded" required />
              </div>

              <div>
                <label htmlFor="email" className="block mb-1">Email *</label>
                <input type="email" id="email" value={formData.email} onChange={handleChange} className="w-full p-2 border rounded" required />
              </div>

              <div>
                <label htmlFor="phone" className="block mb-1">Phone</label>
                <input type="tel" id="phone" value={formData.phone} onChange={handleChange} className="w-full p-2 border rounded" />
              </div>

              {/* Service dropdown */}
              <div>
                <label htmlFor="service" className="block mb-1">Service interested in *</label>
                <select
                  id="service"
                  value={formData.service}
                  onChange={handleServiceChange}
                  className="w-full p-2 border rounded"
                  required
                >
                  <option value="">-- Select a service --</option>
                  {services.map((service, idx) => (
                    <option key={idx} value={service.title}>{service.title}</option>
                  ))}
                  <option value="Other">Other</option>
                </select>
              </div>

              {/* Custom service input (only when "Other" is selected) */}
              {formData.service === "Other" && (
                <div>
                  <label htmlFor="customService" className="block mb-1">Please specify your service</label>
                  <input
                    type="text"
                    id="customService"
                    value={formData.customService}
                    onChange={handleCustomServiceChange}
                    className="w-full p-2 border rounded"
                    required
                    placeholder="e.g., Planning advice, etc."
                  />
                </div>
              )}

              <div>
                <label htmlFor="message" className="block mb-1">Message *</label>
                <textarea id="message" rows="4" value={formData.message} onChange={handleChange} className="w-full p-2 border rounded" required />
              </div>

              {submitStatus === "success" && (
                <p className="text-green-600 text-sm">✓ Message sent successfully! I'll get back to you soon.</p>
              )}
              {submitStatus === "error" && (
                <p className="text-red-600 text-sm">❌ Failed to send. Please try again or contact me directly.</p>
              )}

              <button type="submit" disabled={isSubmitting} className="bg-green-700 text-white px-6 py-2 rounded hover:bg-green-800 transition disabled:opacity-50">
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}