import Collection from "@/components/shared/Collection";
import CountyLocationForm from "@/components/shared/CountyLocationForm";
import FadeUp from "@/components/shared/FadeUp";
import { Button } from "@/components/ui/button";
import { services } from "@/constants";
import Link from "next/link";


export default function Home() {
  return (
    <div>
      <section className="relative overflow-hidden py-3 md:py-5">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute left-0 top-0 z-1 h-full w-full object-cover"
        >
          <source src="/assets/videos/background.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="absolute inset-0 bg-black/30"></div>

        <div className="relative z-10 wrapper grid grid-cols-1 gap-3 text-white md:grid-cols-2">
            <div className="flex flex-col justify-center gap-8">
              <h1 className="h1-bold text-white">
                EPC & Sustainability Solutions for{" "}
                <span className="text-[#8cbc24]">the Midlands</span>
              </h1>
              <p className="p-regular-20 text-white md:p-regular-24">
                Certified domestic energy assessments and sustainability advice to
                improve your home's efficiency, reduce bills, and lower carbon
                emissions.
              </p>
              <div className="flex flex-col gap-2 sm:flex-row">
                <Button
                  size="lg"
                  variant="outline"
                  className="button border-white text-black hover:bg-white/40"
                >
                  <Link href="/contact">Contact</Link>
                </Button>
                <Button
                  size="lg"
                  className="button bg-[#8cbc24] text-white hover:bg-[#7ca822]"
                >
                  <Link href="/services">Services</Link>
                </Button>
              </div>
            </div>
        </div>
      </section>


<section className="m-6">
  <Collection services={services} />
</section>

      {/* <section className="m-6">
        <FadeUp delay={0.2}>
          <>
            <h2 className="mb-3 text-center text-2xl font-bold">Get A Quote</h2>
            <CountyLocationForm />
          </>
        </FadeUp>
      </section> */}
    </div>
  );
}