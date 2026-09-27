"use client";

import { useMemo } from "react";

export default function GamingTVFilter({
  products = [],
  price,
  setPrice,
  selectedBrands,
  setSelectedBrands,
  selectedCategories,
  setSelectedCategories,
  selectedRating,
  setSelectedRating,
}) {
  // =========================================================
  // BRANDS
  // =========================================================

  const brands = useMemo(() => {
    return [...new Set(products.map((product) => product.brand).filter(Boolean))];
  }, [products]);

  // =========================================================
  // CATEGORIES
  // =========================================================

  const categories = useMemo(() => {
    return [
      ...new Set(
        products
          .map((product) => product.subcategory)
          .filter(Boolean)
      ),
    ];
  }, [products]);

  // =========================================================
  // PRICE
  // =========================================================

  const decreasePrice = () => {
    setPrice((prev) => Math.max(2500, prev - 2500));
  };

  const increasePrice = () => {
    setPrice((prev) => Math.min(250000, prev + 2500));
  };

  // =========================================================
  // BRAND
  // =========================================================

  const handleBrandChange = (brand) => {
    setSelectedBrands((prev) =>
      prev.includes(brand)
        ? prev.filter((item) => item !== brand)
        : [...prev, brand]
    );
  };

  // =========================================================
  // CATEGORY
  // =========================================================

  const handleCategoryChange = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((item) => item !== category)
        : [...prev, category]
    );
  };

  // =========================================================
  // RATING
  // =========================================================

  const handleRatingChange = (rating) => {
    setSelectedRating((prev) =>
      prev === rating ? null : rating
    );
  };

  // =========================================================
  // CLEAR
  // =========================================================

  const clearFilters = () => {
    setPrice(250000);
    setSelectedBrands([]);
    setSelectedCategories([]);
    setSelectedRating(null);
  };

  return (
    <aside className=" rounded-lg border border-gray-200 bg-white p-5">
      {/* ===================================================== */}
      {/* HEADER */}
      {/* ===================================================== */}

      <div className="mb-6 flex items-center justify-between">
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

      {/* ===================================================== */}
      {/* PRICE */}
      {/* ===================================================== */}

      <div className="border-b border-gray-200 pb-6">
        <h3 className="mb-4 text-sm font-semibold text-gray-900">
          Price
        </h3>

        <div className="flex items-center justify-between gap-2">
          <button
            type="button"
            onClick={decreasePrice}
            className="flex h-9 w-9 items-center justify-center rounded border border-gray-300 text-lg hover:bg-gray-100"
          >
            −
          </button>

          <div className="flex-1 rounded border border-gray-300 px-3 py-2 text-center text-sm font-medium">
            ৳ {price.toLocaleString()}
          </div>

          <button
            type="button"
            onClick={increasePrice}
            className="flex h-9 w-9 items-center justify-center rounded border border-gray-300 text-lg hover:bg-gray-100"
          >
            +
          </button>
        </div>
      </div>

      {/* ===================================================== */}
      {/* BRAND */}
      {/* ===================================================== */}

      {/* ===================================================== */}
      {/* BRAND */}
      {/* ===================================================== */}

      <div className="border-b border-gray-200 py-6">
        <h3 className="mb-4 text-sm font-semibold text-gray-900">
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
                onChange={() => handleBrandChange(brand)}
                className="h-4 w-4 cursor-pointer rounded border-gray-300 accent-[#074e37]"
              />

              <span className="select-none">
                {brand}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* ===================================================== */}
      {/* CATEGORY */}
      {/* ===================================================== */}

      <div className="border-b border-gray-200 py-6">
        <h3 className="mb-4 text-sm font-semibold text-gray-900">
          Category
        </h3>

        <div className="space-y-3">
          {categories.map((category) => (
            <label
              key={category}
              className="flex cursor-pointer items-center gap-3 text-sm text-gray-700"
            >
              <input
                type="checkbox"
                checked={selectedCategories.includes(category)}
                onChange={() => handleCategoryChange(category)}
                className="h-4 w-4 rounded border-gray-300"
              />

              <span>{category}</span>
            </label>
          ))}
        </div>
      </div>

      {/* ===================================================== */}
      {/* RATING */}
      {/* ===================================================== */}

      <div className="pt-6">
        <h3 className="mb-4 text-sm font-semibold text-gray-900">
          Rating
        </h3>

        <div className="space-y-3">
          {[5, 4, 3, 2].map((rating) => (
            <label
              key={rating}
              className="flex cursor-pointer items-center gap-3 text-sm"
            >
              <input
                type="checkbox"
                checked={selectedRating === rating}
                onChange={() => handleRatingChange(rating)}
                className="h-4 w-4 rounded border-gray-300"
              />

              <span className="text-yellow-500">
                {"★".repeat(rating)}
              </span>

              <span className="text-gray-600">
                {rating}+
              </span>
            </label>
          ))}
        </div>
      </div>
    </aside>
  );
}