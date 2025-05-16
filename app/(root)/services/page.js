import Collection from "@/components/shared/Collection";
import { services } from "@/constants";

export default function ServicesPage() {
  return (
    <section className="m-6">
      <Collection services={services} />
    </section>
  );
}
