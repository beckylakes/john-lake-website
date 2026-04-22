import Link from "next/link";
import { Button } from "@/components/ui/button";
import FadeUp from "@/components/shared/FadeUp";

export const metadata = {
  title: "How to Prepare for an EPC Visit | EPC Solutions",
  description:
    "Learn how to prepare for your EPC assessment, what to have ready, and how to make the visit smooth and efficient.",
};

const checklist = [
  "Make sure all rooms can be accessed easily",
  "Provide access to the loft if applicable",
  "Ensure the boiler, hot water tank, and meters are accessible",
  "Have any documents ready for insulation, glazing, or heating upgrades",
  "Make sure someone can be present to provide access and answer basic questions",
];

const documents = [
  "Boiler installation or service paperwork",
  "Proof of double glazing replacement",
  "Loft or wall insulation certificates",
  "Renewable energy installation paperwork",
];

export default function PrepareForVisitPage() {
  return (
    <main className="bg-white">
      <section className="relative overflow-hidden bg-gradient-to-br from-[#13a9c2]/10 via-white to-[#8cbc24]/10 py-14 md:py-20">
        <div className="wrapper">
          <FadeUp delay={0}>
            <div className="max-w-3xl">
              <span className="mb-4 inline-flex rounded-full bg-[#8cbc24]/15 px-4 py-1 text-sm font-medium text-[#5f8f12]">
                EPC Guide
              </span>
              <h1 className="h1-bold mb-5 text-gray-900">
                How to Prepare for Your <span className="text-[#8cbc24]">EPC Visit</span>
              </h1>
              <p className="p-regular-20 max-w-2xl text-gray-700">
                A little preparation can help your assessment run smoothly and make sure
                your property is recorded as accurately as possible.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button className="button bg-[#8cbc24] text-white hover:bg-[#7ca822]">
                  <Link href="/contact">Book an Assessment</Link>
                </Button>
                <Button
                  variant="outline"
                  className="button border-gray-300 text-gray-900 hover:bg-gray-50"
                >
                  <Link href="/faq">Read FAQs</Link>
                </Button>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      <section className="wrapper py-12">
        <div className="grid gap-8 lg:grid-cols-3">
          <FadeUp delay={0.1} className="lg:col-span-2">
            <div className="rounded-2xl bg-amber-50 p-6 shadow-sm">
              <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                Before the assessor arrives
              </h2>
              <p className="mb-5 text-gray-700">
                Most EPC visits are straightforward, but a few simple checks beforehand
                can save time and help the assessor gather the right information.
              </p>

              <ul className="space-y-3">
                {checklist.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="mt-1 inline-flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[#8cbc24] text-sm font-bold text-white">
                      ✓
                    </span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeUp>

          <FadeUp delay={0.2}>
            <div className="rounded-2xl bg-[#13a9c2]/10 p-6 shadow-sm">
              <h3 className="mb-3 text-xl font-semibold text-gray-900">
                Typical visit time
              </h3>
              <p className="mb-4 text-gray-700">
                Most domestic EPC assessments take around:
              </p>
              <div className="rounded-xl bg-white p-4 text-center shadow-sm">
                <p className="text-3xl font-bold text-[#13a9c2]">30–60 mins</p>
                <p className="mt-2 text-sm text-gray-600">
                  depending on the size and layout of the property
                </p>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      <section className="wrapper pb-12">
        <div className="grid gap-8 md:grid-cols-2">
          <FadeUp delay={0.3}>
            <div className="rounded-2xl bg-gray-50 p-6 shadow-sm">
              <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                Helpful documents to have ready
              </h2>
              <p className="mb-5 text-gray-700">
                If you have evidence of improvements, it may help support a more accurate
                assessment.
              </p>

              <ul className="space-y-3">
                {documents.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="mt-1 text-[#8cbc24]">•</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeUp>

          <FadeUp delay={0.4}>
            <div className="rounded-2xl bg-green-50 p-6 shadow-sm">
              <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                On the day
              </h2>
              <p className="mb-4 text-gray-700">
                The assessor will inspect key energy features of the property, such as:
              </p>
              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  "Room sizes",
                  "Windows and glazing",
                  "Heating system",
                  "Insulation",
                  "Hot water setup",
                  "General construction details",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="rounded-xl border border-gray-200 bg-white p-4 text-sm text-gray-700"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      <FadeUp delay={0.5}>
        <section className="wrapper pb-16">
          <div className="rounded-2xl bg-gray-900 px-6 py-10 text-white md:px-10">
            <h2 className="mb-3 text-2xl font-semibold">
              Ready to arrange your EPC assessment?
            </h2>
            <p className="mb-6 max-w-2xl text-white/85">
              John provides straightforward domestic energy assessments across the Midlands,
              with clear advice and fast turnaround times.
            </p>
            <Button className="button bg-[#8cbc24] text-white hover:bg-[#7ca822]">
              <Link href="/contact">Get a Quote</Link>
            </Button>
          </div>
        </section>
      </FadeUp>
    </main>
  );
}