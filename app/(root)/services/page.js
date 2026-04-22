import Collection from "@/components/shared/Collection";
import FadeUp from "@/components/shared/FadeUp";
import { services } from "@/constants";

export default function ServicesPage() {
  return (
    <main className="bg-white">
      <section className="relative overflow-hidden bg-gradient-to-br from-[#13a9c2]/10 via-white to-[#8cbc24]/10 py-14 md:py-20">
        <div className="wrapper">
          <FadeUp delay={0}>
            <div className="max-w-3xl">
              <span className="mb-4 inline-flex rounded-full bg-[#13a9c2]/15 px-4 py-1 text-sm font-medium text-[#0b8093]">
                Services
              </span>
              <h1 className="h1-bold mb-5 text-gray-900">
                EPC & Sustainability <span className="text-[#8cbc24]">Services</span>
              </h1>
              <p className="p-regular-20 max-w-2xl text-gray-700">
                Explore our domestic energy assessment and sustainability services
                across the Midlands.
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      <section className="m-6">
        <FadeUp delay={0.1}>
          <Collection services={services} />
        </FadeUp>
      </section>
    </main>
  );
}