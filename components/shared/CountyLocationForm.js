"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { counties } from "@/constants/index";

const CountyLocationForm = () => {
  const [selectedCounty, setSelectedCounty] = useState("");
  const router = useRouter();

  const handleLocationClick = (location) => {
    const slug = location.toLowerCase().replace(/\s+/g, "-");
    router.push(`/${slug}`);
  };

  return (
    <div className="p-6 border-2 rounded-xl border-green-700 bg-gray-50 max-w-4xl mx-auto">
      <p className="text-center mb-4">
        Please fill out the following for your quote
      </p>
      <select
        className="w-full p-2 mb-4 border rounded"
        value={selectedCounty}
        onChange={(e) => setSelectedCounty(e.target.value)}
      >
        <option key={""} value={""}>
          Select a county
        </option>
        {Object.keys(counties).map((county) => (
          <option key={county} value={county}>
            {county}
          </option>
        ))}
      </select>

      {selectedCounty && (
        <p className="text-center mb-4">
          You have selected{" "}
          <strong className="text-green-800">{selectedCounty}</strong>. <br />
          Please choose the area nearest to you:
        </p>
      )}

      {selectedCounty && (
        <div className="flex flex-wrap gap-2 justify-center">
          {counties[selectedCounty].map((location) => (
            <button
              key={location}
              className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-green-700 hover:text-white transition"
              onClick={() => handleLocationClick(location)}
            >
              {location}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default CountyLocationForm;
