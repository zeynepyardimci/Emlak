import { useState } from "react";
import { useListing } from "@/context/ListingContext";

const FilterForm = () => {
  const { setFilters } = useListing();
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFilters({
      minPrice: minPrice ? Number(minPrice) : undefined,
      maxPrice: maxPrice ? Number(maxPrice) : undefined,
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-wrap gap-3 items-center justify-between mb-6"
    >
      <input
        type="number"
        placeholder="Min Fiyat"
        value={minPrice}
        onChange={(e) => setMinPrice(e.target.value)}
        className="bg-navbar flex-1 min-w-[120px] px-2 py-1 border-b border-gray-400 focus:outline-none focus:border-black transition-all"
      />
      <input
        type="number"
        placeholder="Max Fiyat"
        value={maxPrice}
        onChange={(e) => setMaxPrice(e.target.value)}
        className="bg-navbar flex-1 min-w-[120px] px-2 py-1 border-b border-gray-400 focus:outline-none focus:border-black transition-all"
      />
      <button
        type="submit"
        className="text-sm text-white bg-green-800 hover:bg-green-700 px-4 py-1 rounded transition-all"
      >
        Filtrele
      </button>
    </form>
  );
};

export default FilterForm;
