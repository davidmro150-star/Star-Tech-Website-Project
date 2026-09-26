"use client";

import { useMemo } from "react";

export default function SecurityProductFilter({
  products = [],
  filters,
  setFilters,
}) {
  // =========================
  // UNIQUE BRANDS
  // =========================
  const brands = useMemo(() => {
    const uniqueBrands = [
      ...new Set(
        products
          .map((product) => product.brand)
          .filter(
            (brand) =>
              brand &&
              String(brand).trim() !== ""
          )
      ),
    ];

    return uniqueBrands.sort();
  }, [products]);

  // =========================
  // MAX PRICE
  // =========================
  const maxPrice = useMemo(() => {
    const prices = products
      .map((product) => Number(product.price || 0))
      .filter((price) => price > 0);

    return prices.length > 0
      ? Math.max(...prices)
      : 100000;
  }, [products]);

  // =========================
  // CURRENT PRICE
  // =========================
  const currentPrice =
    filters.price !== null
      ? Number(filters.price)
      : 5000;

  // =========================
  // PRICE - DECREASE
  // =========================
  const decreasePrice = () => {
    setFilters((prev) => {
      const price =
        prev.price !== null
          ? Number(prev.price)
          : 5000;

      const newPrice = Math.max(
        0,
        price - 500
      );

      return {
        ...prev,
        price: newPrice,
      };
    });
  };

  // =========================
  // PRICE - INCREASE
  // =========================
  const increasePrice = () => {
    setFilters((prev) => {
      const price =
        prev.price !== null
          ? Number(prev.price)
          : 5000;

      const newPrice = Math.min(
        maxPrice,
        price + 500
      );

      return {
        ...prev,
        price: newPrice,
      };
    });
  };

  // =========================
  // BRAND CHECKBOX
  // =========================
  const handleBrandChange = (brand) => {
    setFilters((prev) => {
      const currentBrands = prev.brand || [];

      const alreadySelected =
        currentBrands.includes(brand);

      if (alreadySelected) {
        return {
          ...prev,
          brand: currentBrands.filter(
            (item) => item !== brand
          ),
        };
      }

      return {
        ...prev,
        brand: [
          ...currentBrands,
          brand,
        ],
      };
    });
  };

  // =========================
  // CLEAR ALL
  // =========================
  const clearFilters = () => {
    setFilters({
      price: null,
      brand: [],
      rating: null,
      processor: [],
      ram: [],
      storage: [],
    });
  };

  // =========================
  // CHECK ACTIVE FILTER
  // =========================
  const hasFilters =
    filters.price !== null ||
    filters.brand.length > 0 ||
    filters.rating !== null;

  return (
    <aside className="w-full bg-white">

      {/* =========================
          FILTER HEADER
      ========================= */}
      <div className="flex items-center justify-between border-b border-gray-200 pb-4">
        <h3 className="text-lg font-semibold text-gray-900">
          Filters
        </h3>

        {hasFilters && (
          <button
            type="button"
            onClick={clearFilters}
            className="text-sm font-medium text-green-700 transition hover:text-green-800"
          >
            Clear All
          </button>
        )}
      </div>

      {/* =========================
          PRICE
      ========================= */}
      <div className="border-b border-gray-200 py-5">
        <h4 className="mb-4 text-sm font-semibold text-gray-900">
          Price
        </h4>

        <div className="flex items-center gap-2">

          {/* MINUS */}
          <button
            type="button"
            onClick={decreasePrice}
            disabled={currentPrice <= 0}
            className="flex h-9 w-9 shrink-0 items-center justify-center border border-gray-300 bg-white text-xl font-medium text-gray-700 transition hover:border-green-700 hover:text-green-700 disabled:cursor-not-allowed disabled:opacity-40"
          >
            −
          </button>

          {/* PRICE */}
          <div className="flex h-9 min-w-0 flex-1 items-center justify-center border border-gray-300 bg-white px-2 text-sm font-medium text-gray-800">
            ৳{currentPrice.toLocaleString()}
          </div>

          {/* PLUS */}
          <button
            type="button"
            onClick={increasePrice}
            disabled={currentPrice >= maxPrice}
            className="flex h-9 w-9 shrink-0 items-center justify-center border border-gray-300 bg-white text-xl font-medium text-gray-700 transition hover:border-green-700 hover:text-green-700 disabled:cursor-not-allowed disabled:opacity-40"
          >
            +
          </button>

        </div>

        <p className="mt-2 text-xs text-gray-500">
          Maximum price: ৳
          {Number(maxPrice).toLocaleString()}
        </p>
      </div>

      {/* =========================
          BRAND
      ========================= */}
      <div className="border-b border-gray-200 py-5">
        <h4 className="mb-4 text-sm font-semibold text-gray-900">
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
                  checked={filters.brand.includes(
                    brand
                  )}
                  onChange={() =>
                    handleBrandChange(brand)
                  }
                  className="h-4 w-4 cursor-pointer accent-green-700"
                />

                <span className="text-sm text-gray-700">
                  {brand}
                </span>
              </label>
            ))}

          </div>
        ) : (
          <p className="text-sm text-gray-500">
            No brands available
          </p>
        )}
      </div>

      {/* =========================
          CUSTOMER RATING
      ========================= */}
      <div className="py-5">
        <h4 className="mb-4 text-sm font-semibold text-gray-900">
          Customer Rating
        </h4>

        <div className="space-y-3">

          {[4, 3, 2].map((rating) => (
            <label
              key={rating}
              className="flex cursor-pointer items-center gap-3"
            >
              <input
                type="radio"
                name="security-rating"
                checked={
                  filters.rating === rating
                }
                onChange={() =>
                  setFilters((prev) => ({
                    ...prev,
                    rating,
                  }))
                }
                className="h-4 w-4 cursor-pointer accent-green-700"
              />

              <span className="text-sm text-gray-700">
                <span className="text-yellow-500">
                  {"★".repeat(rating)}
                </span>

                <span className="ml-1">
                  & Up
                </span>
              </span>
            </label>
          ))}

        </div>

        {/* CLEAR RATING */}
        {filters.rating !== null && (
          <button
            type="button"
            onClick={() =>
              setFilters((prev) => ({
                ...prev,
                rating: null,
              }))
            }
            className="mt-3 text-xs font-medium text-green-700 transition hover:text-green-800"
          >
            Clear Rating
          </button>
        )}
      </div>

    </aside>
  );
}