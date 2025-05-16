import CountyLocationForm from "@/components/shared/CountyLocationForm";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-5 md:py-10 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-1"
        >
          <source src="/assets/videos/background.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="absolute inset-0 bg-black/30"></div>

        <div className="relative z-10 wrapper grid grid-cols-1 gap-5 md:grid-cols-2 text-white">
          <div className="flex flex-col justify-center gap-8">
            <h1 className="h1-bold text-white mb-6">
              EPC & Retrofit Solutions for{" "}
              <span className="text-[#8cbc24]">the Midlands</span>
            </h1>
            <p className="p-regular-20 md:p-regular-24 text-white mb-8">
              Certified domestic energy assessments and retrofit advice to
              improve your home's efficiency, reduce bills, and lower carbon
              emissions.
            </p>
            <div className="flex flex-col sm:flex-row gap-2">
              <Button
                size="lg"
                variant="outline"
                className="button border-white text-black hover:bg-white/40"
              >
                Get A Quote
              </Button>
              <Button
                size="lg"
                className="button bg-[#8cbc24] hover:bg-[#7ca822] text-white"
              >
                My Services
              </Button>
              <Button
                size="lg"
                className="button bg-[#8cbc24] hover:bg-[#7ca822] text-white"
              >
                About John
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Location Selector */}
      <section id="locations" className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Areas Covered</h2>
        <CountyLocationForm />
      </section>
    </div>
  );
}
