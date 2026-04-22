import Link from "next/link";
import { Button } from "@/components/ui/button";
import FadeUp from "@/components/shared/FadeUp";

export const metadata = {
  title: "Energy Saving Tips to Improve Your EPC Rating | EPC Solutions",
  description:
    "Practical energy saving tips to improve your EPC rating, lower household bills, and make your home more efficient.",
};

const quickWins = [
  "Switch old bulbs to LED lighting",
  "Install draught-proofing around doors and windows",
  "Use a smart thermostat or heating controls",
  "Bleed radiators and keep heating systems maintained",
];

const biggerUpgrades = [
  "Upgrade loft insulation",
  "Improve wall insulation where appropriate",
  "Replace older boilers with more efficient systems",
  "Upgrade glazing where cost-effective",
  "Consider solar panels or low-carbon heating solutions",
];

export default function EnergySavingTipsPage() {
  return (
    <main className="bg-white">
      <section className="relative overflow-hidden bg-gradient-to-br from-[#8cbc24]/10 via-white to-[#13a9c2]/10 py-14 md:py-20">
        <div className="wrapper">
          <FadeUp delay={0}>
            <div className="max-w-3xl">
              <span className="mb-4 inline-flex rounded-full bg-[#8cbc24]/15 px-4 py-1 text-sm font-medium text-[#5f8f12]">
                Energy Advice
              </span>
              <h1 className="h1-bold mb-5 text-gray-900">
                Energy Saving Tips to Improve Your{" "}
                <span className="text-[#8cbc24]">EPC Rating</span>
              </h1>
              <p className="p-regular-20 max-w-2xl text-gray-700">
                Small changes can improve comfort and reduce bills, while larger upgrades
                may help raise your EPC rating over time.
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      <section className="wrapper py-12">
        <div className="grid gap-8 lg:grid-cols-2">
          <FadeUp delay={0.1}>
            <div className="rounded-2xl bg-green-50 p-6 shadow-sm">
              <h2 className="mb-4 text-2xl font-semibold text-gray-900">Quick wins</h2>
              <p className="mb-5 text-gray-700">
                These are lower-cost improvements that can make a noticeable difference.
              </p>
              <ul className="space-y-3">
                {quickWins.map((item, index) => (
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
              <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                Bigger upgrades
              </h2>
              <p className="mb-5 text-gray-700">
                These improvements may involve more cost upfront but can have a larger
                impact on energy efficiency.
              </p>
              <ul className="space-y-3">
                {biggerUpgrades.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="mt-1 text-[#13a9c2]">•</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeUp>
        </div>
      </section>

      <section className="wrapper pb-12">
        <FadeUp delay={0.3}>
          <div className="rounded-2xl bg-gray-50 p-6 shadow-sm">
            <h2 className="mb-6 text-2xl font-semibold text-gray-900">
              Focus on the areas that matter most
            </h2>

            <div className="grid gap-4 md:grid-cols-3">
              {[
                {
                  title: "Insulation",
                  text: "Reducing heat loss through the roof, walls, and floors is often one of the most effective improvements.",
                },
                {
                  title: "Heating",
                  text: "Efficient boilers, controls, and regular servicing can improve performance and lower waste.",
                },
                {
                  title: "Lighting & habits",
                  text: "Low-energy lighting and day-to-day energy habits can still make a useful difference.",
                },
              ].map((item, index) => (
                <div key={index} className="rounded-xl bg-white p-5 shadow-sm ring-1 ring-gray-100">
                  <h3 className="mb-2 text-lg font-semibold text-gray-900">{item.title}</h3>
                  <p className="text-gray-700">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </FadeUp>
      </section>

      <section className="wrapper pb-12">
        <div className="grid gap-8 md:grid-cols-2">
          <FadeUp delay={0.4}>
            <div className="rounded-2xl bg-amber-50 p-6 shadow-sm">
              <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                A simple reminder
              </h2>
              <p className="text-gray-700">
                Not every upgrade suits every property. The most effective next step
                depends on the age, layout, and construction of your home.
              </p>
            </div>
          </FadeUp>

          <FadeUp delay={0.5}>
            <div className="rounded-2xl bg-white p-6 shadow-md ring-1 ring-gray-100">
              <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                Want tailored advice?
              </h2>
              <p className="mb-5 text-gray-700">
                An EPC assessment can help identify which improvements may be most relevant
                for your property.
              </p>
              <Button className="button bg-[#8cbc24] text-white hover:bg-[#7ca822]">
                <Link href="/contact">Request a Quote</Link>
              </Button>
            </div>
          </FadeUp>
        </div>
      </section>
    </main>
  );
}