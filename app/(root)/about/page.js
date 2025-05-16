import Image from "next/image";

export default function AboutPage() {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-green-800">Your Local Energy Expert: John Lake</h1>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Picture Section - Add your image here */}
            <div className="relative h-80 md:h-full rounded-lg overflow-hidden shadow-md">
              <Image
                src="/assets/profilepic.jpg" // Update this path
                alt="John Lake - Energy Assessor"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            
            <div className="bg-amber-100/20 p-3 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4">Professional Background</h2>
              <p className="mb-4">
                Fully accredited Domestic Energy Assessor (DEA) and Retrofit Assessor servicing clients such as architects, developers, & planning consultants across the Midlands.
              </p>
              <p className="mb-4">
                Provides modern, solution-based approach working with latest methodologies, aiming to help clients meet planning policies and regulations.
              </p>
              <p>
                While some energy assessors focus on calculations alone, John strives to meet compliance and understands that there is no one size fits all solution - adapting your approach is key for success.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gray-100 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Qualifications</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Domestic Energy Assessor (DEA) - Level 3
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Retrofit Assessor - PAS 2035 Certified
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Enhanced DBS Checked
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Public Liability Insurance (£1m)
                </li>
              </ul>
            </div>

            {/* Optional: Second picture or additional content space */}
            <div className="bg-green-50 p-6 rounded-lg flex items-center justify-center">
              <p className="text-lg">
                "I'm committed to helping homeowners and professionals navigate energy efficiency requirements with clarity and confidence."
              </p>
            </div>
          </div>
  
          <div className="bg-[#13a9c2]/10 p-6 rounded-lg mb-12">
            <h2 className="text-2xl font-semibold mb-4">Why Choose Me?</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-medium mb-2">Local Expertise</h3>
                <p>
                  As a Midlands-based assessor, I understand the specific energy efficiency challenges of properties in our region, from Victorian terraces to modern developments.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">Fast Service</h3>
                <p>
                  I offer same-day bookings where possible and guarantee EPC certificates within 24 hours of assessment.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">Competitive Pricing</h3>
                <p>
                  My rates are transparent and competitive, with discounts available for multiple properties.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">Personal Approach</h3>
                <p>
                  I take time to explain the process and findings, helping you understand how to improve your property's energy efficiency.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}