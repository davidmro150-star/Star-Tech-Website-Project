"use client";

import { useMemo } from "react";

export default function ApplianceFilter({
  products = [],
  price = 150000,
  setPrice = () => { },
  selectedBrands = [],
  setSelectedBrands = () => { },
  selectedRating = null,
  setSelectedRating = () => { },
}) {
  const brands = useMemo(() => {
    return [
      ...new Set(
        products
          .map((product) => product.brand)
          .filter(Boolean)
      ),
    ];
  }, [products]);

  const maxPrice = useMemo(() => {
    if (!products.length) return 150000;

    return Math.max(
      ...products.map(
        (product) => Number(product.price) || 0
      )
    );
  }, [products]);

  const increasePrice = () => {
    setPrice((prev) =>
      Math.min(Number(prev || 0) + 1000, maxPrice)
    );
  };

  const decreasePrice = () => {
    setPrice((prev) =>
      Math.max(Number(prev || 0) - 1000, 0)
    );
  };

  const toggleBrand = (brand) => {
    setSelectedBrands((prev) =>
      prev.includes(brand)
        ? prev.filter((item) => item !== brand)
        : [...prev, brand]
    );
  };

  
const clearFilters = () => {
  setPrice(250000);
  setSelectedBrands([]);
  setSelectedRating(null);
};


  return (
    <aside className="w-full lg:w-[250px] lg:shrink-0">
      <div className="rounded-xl border border-gray-200 bg-white p-5">

        
        <div className="mb-6 flex items-center justify-between px-2 py-3">
          <h2 className="text-lg font-semibold text-gray-900">
            Filters
          </h2>

          <button
            onClick={clearFilters}
            className="text-sm font-medium text-red-500 hover:text-red-600"
          >
            Clear
          </button>
        </div>
        

        {/* =====================================================
            PRICE
        ===================================================== */}

        <div className="border-b border-gray-200 pb-6">
          <h3 className="mb-4 text-base font-semibold text-[#074E37]">
            Price
          </h3>

          <div className="flex items-center gap-2">

            <button
              type="button"
              onClick={decreasePrice}
              className="flex h-9 w-9 items-center justify-center rounded-md border border-gray-300 text-lg hover:bg-[#F7F5EE]"
            >
              -
            </button>

            <div className="flex h-9 flex-1 items-center justify-center rounded-md border border-gray-300 text-sm font-medium">
              ৳{Number(price || 0).toLocaleString()}
            </div>

            <button
              type="button"
              onClick={increasePrice}
              className="flex h-9 w-9 items-center justify-center rounded-md border border-gray-300 text-lg hover:bg-[#F7F5EE]"
            >
              +
            </button>

          </div>

          <p className="mt-2 text-xs text-gray-500">
            Maximum: ৳{maxPrice.toLocaleString()}
          </p>
        </div>

        {/* =====================================================
            BRAND
        ===================================================== */}

        <div className="border-b border-gray-200 py-6">
          <h3 className="mb-4 text-base font-semibold text-[#074E37]">
            Brand
          </h3>

          <div className="space-y-3">
            {brands.map((brand) => (
              <label
                key={brand}
                className="flex cursor-pointer items-center gap-3 text-sm text-gray-700"
              >
                <input
                  type="checkbox"
                  checked={selectedBrands.includes(brand)}
                  onChange={() => toggleBrand(brand)}
                  className="h-4 w-4 accent-[#074E37]"
                />

                <span>{brand}</span>
              </label>
            ))}
          </div>
        </div>

        {/* =====================================================
            RATING
        ===================================================== */}

        <div className="pt-6">
          <h3 className="mb-4 text-base font-semibold text-[#074E37]">
            Rating
          </h3>

          <div className="space-y-3">
            {[5, 4, 3, 2, 1].map((rating) => (
              <label
                key={rating}
                className="flex cursor-pointer items-center gap-3 text-sm"
              >
                <input
                  type="radio"
                  name="appliance-rating"
                  checked={selectedRating === rating}
                  onChange={() =>
                    setSelectedRating(rating)
                  }
                  className="h-4 w-4 accent-[#074E37]"
                />

                <span className="text-yellow-500">
                  {"★".repeat(rating)}

                  <span className="text-gray-300">
                    {"★".repeat(5 - rating)}
                  </span>
                </span>

                <span className="text-gray-600">
                  & up
                </span>
              </label>
            ))}
          </div>

          {selectedRating && (
            <button
              type="button"
              onClick={() => setSelectedRating(null)}
              className="mt-4 text-xs font-medium text-[#074E37] underline"
            >
              Clear Rating
            </button>
          )}
        </div>

      </div>
    </aside>
  );
}