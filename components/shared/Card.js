// components/Card.js
import Link from "next/link";

const Card = ({ service }) => {
  return (
    <div className="group relative flex min-h-[360px] w-full max-w-[400px] flex-col overflow-hidden rounded-xl bg-white shadow-md transition-all hover:shadow-lg md:min-h-[438px]">
      {/* ... same as before ... */}
      <div className="flex min-h-[230px] flex-col gap-3 p-5 md:gap-4">
        {/* Price Badge */}
        <div className="flex gap-2">
          <span className="p-semibold-14 w-max rounded-full bg-green-100 px-4 py-1 text-green-600 text-center items-center justify-center flex">
            {service.price}
          </span>
        </div>

        <h3 className="p-medium-16 md:p-medium-20 line-clamp-2 flex-1 text-black">
          {service.title}
        </h3>

        <p className="p-medium-16 text-grey-500">
          {service.description}
        </p>

        <ul className="mt-2 space-y-2">
          {service.features.map((feature, i) => {
            if (feature.includes("SPECIAL RATES")) {
              return (
                <li key={i} className="flex items-start">
                  <span className="text-yellow-500 text-2xl mr-2 animate-spin [animation-duration:3s]">★</span>
                  <span className="p-medium-14 text-gray-600 font-extrabold">{feature}</span>
                </li>
              );
            } else {
              return (
                <li key={i} className="flex items-start">
                  <span className="text-[#8cbc24] mr-2">✓</span>
                  <span className="p-medium-14 text-gray-600">{feature}</span>
                </li>
              );
            }
          })}
        </ul>

        <div className="mt-auto pt-4">
          <Link
            href={`/contact?service=${encodeURIComponent(service.title)}`}
            className="p-medium-16 text-[#8cbc24] hover:underline hover:font-bold"
          >
            Book Now →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;