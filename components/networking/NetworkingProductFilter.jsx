"use client";

import { useMemo } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function NetworkingProductFilter({
  products = [],
}) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const currentBrand = searchParams.get("brand");
  const currentPath = searchParams.get("path");

  // ==========================================
  // PRICE
  // ==========================================

  const prices = products
    .map((product) => Number(product.price || 0))
    .filter((price) => price > 0);

  const maxProductPrice =
    prices.length > 0 ? Math.max(...prices) : 0;

  const currentPrice = Number(
    searchParams.get("price") ||2500
  );

  // ==========================================
  // BRANDS
  // ==========================================

  const brands = useMemo(() => {
    const uniqueBrands = [
      ...new Set(
        products
          .map((product) => String(product.brand || "").trim())
          .filter(Boolean)
      ),
    ];

    return uniqueBrands.sort();
  }, [products]);

  // ==========================================
  // RATING
  // ==========================================

  const ratings = [5, 4, 3, 2, 1];

  // ==========================================
  // UPDATE URL
  // ==========================================

  const updateParams = (key, value) => {
    const params = new URLSearchParams(searchParams.toString());

    if (
      value === null ||
      value === "" ||
      value === undefined
    ) {
      params.delete(key);
    } else {
      params.set(key, value);
    }

    const query = params.toString();

    router.push(
      query ? `${pathname}?${query}` : pathname,
      { scroll: false }
    );
  };

  // ==========================================
  // PRICE PLUS
  // ==========================================

  const increasePrice = () => {
    const step = 1000;

    let newPrice = currentPrice + step;

    if (maxProductPrice > 0) {
      newPrice = Math.min(newPrice, maxProductPrice);
    }

    updateParams("price", newPrice);
  };

  // ==========================================
  // PRICE MINUS
  // ==========================================

  const decreasePrice = () => {
    const step = 1000;

    const newPrice = Math.max(
      currentPrice - step,
      0
    );

    if (newPrice === 0) {
      updateParams("price", null);
    } else {
      updateParams("price", newPrice);
    }
  };

  // ==========================================
  // BRAND
  // ==========================================

  const handleBrand = (brand) => {
    if (currentBrand === brand) {
      updateParams("brand", null);
    } else {
      updateParams("brand", brand);
    }
  };

  // ==========================================
  // RATING
  // ==========================================

  const handleRating = (rating) => {
    updateParams("rating", rating);
  };

  // ==========================================
  // CLEAR FILTER
  // ==========================================

  const clearFilters = () => {
    const params = new URLSearchParams();

    if (currentPath) {
      params.set("path", currentPath);
    }

    const query = params.toString();

    router.push(
      query ? `${pathname}?${query}` : pathname,
      { scroll: false }
    );
  };

  // ==========================================
  // UI
  // ==========================================

  return (
    <aside className="w-full rounded-md border border-gray-200 bg-white">

      {/* ======================================
          FILTER HEADER
      ======================================= */}

      <div className="flex items-center justify-between border-b border-gray-200 px-4 py-4">
        <h3 className="font-jost text-lg font-semibold text-[#074e37]">
          Filter
        </h3>

        {(currentBrand ||
          searchParams.get("price") ||
          searchParams.get("rating")) && (
            <button
              type="button"
              onClick={clearFilters}
              className="text-xs font-medium text-[#86bc42] hover:underline"
            >
              Clear All
            </button>
          )}
      </div>

      {/* ======================================
          PRICE
      ======================================= */}

      <div className="border-b border-gray-200 px-4 py-5">

        <h4 className="mb-4 text-sm font-semibold text-gray-800">
          Price
        </h4>

        <div className="flex items-center justify-between rounded-md border border-gray-300">

          {/* MINUS */}

          <button
            type="button"
            onClick={decreasePrice}
            className="flex h-10 w-10 items-center justify-center border-r border-gray-300 text-lg text-gray-700 transition hover:bg-gray-100"
          >
            −
          </button>

          {/* PRICE */}

          <div className="flex-1 text-center text-sm font-medium text-[#074e37]">
            ৳{Number(currentPrice).toLocaleString()}
          </div>

          {/* PLUS */}

          <button
            type="button"
            onClick={increasePrice}
            className="flex h-10 w-10 items-center justify-center border-l border-gray-300 text-lg text-gray-700 transition hover:bg-gray-100"
          >
            +
          </button>

        </div>

        <p className="mt-2 text-xs text-gray-500">
          Maximum: ৳
          {Number(maxProductPrice).toLocaleString()}
        </p>
      </div>

      {/* ======================================
          BRAND
      ======================================= */}

      <div className="border-b border-gray-200 px-4 py-5">

        <h4 className="mb-4 text-sm font-semibold text-gray-800">
          Brand
        </h4>

        {brands.length > 0 ? (
          <div className="space-y-3">

            {brands.map((brand) => (
              <label
                key={brand}
                className="flex cursor-pointer items-center gap-3"
              >
                <input
                  type="checkbox"
                  checked={currentBrand === brand}
                  onChange={() => handleBrand(brand)}
                  className="h-4 w-4 accent-[#074e37]"
                />

                <span className="text-sm text-gray-600">
                  {brand}
                </span>
              </label>
            ))}

          </div>
        ) : (
          <p className="text-xs text-gray-500">
            No brands available
          </p>
        )}

      </div>

      {/* ======================================
          RATING
      ======================================= */}

      <div className="px-4 py-5">

        <h4 className="mb-4 text-sm font-semibold text-gray-800">
          Rating
        </h4>

        <div className="space-y-3">

          {ratings.map((rating) => {
            const selected =
              Number(searchParams.get("rating")) === rating;

            return (
              <label
                key={rating}
                className="flex cursor-pointer items-center gap-3"
              >
                <input
                  type="checkbox"
                  checked={selected}
                  onChange={() =>
                    handleRating(
                      selected ? null : rating
                    )
                  }
                  className="h-4 w-4 accent-[#074e37]"
                />

                <span className="text-sm text-yellow-500">
                  {"★".repeat(rating)}
                  <span className="ml-1 text-gray-500">
                    & above
                  </span>
                </span>
              </label>
            );
          })}

        </div>

      </div>

    </aside>
  );
}