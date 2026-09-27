"use client";

import { useMemo } from "react";

export default function GadgetFilter({
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
  // CATEGORIES
  // =========================================================

  const categories = useMemo(() => {
    return [...new Set(products.map((product) => product.subcategory))]
      .filter(Boolean)
      .sort();
  }, [products]);

  // =========================================================
  // BRANDS
  // =========================================================

  const brands = useMemo(() => {
    const detectedBrands = products
      .map((product) => {
        const title = product.title?.toLowerCase() || "";

        const knownBrands = [
          "apple",
          "samsung",
          "sony",
          "jbl",
          "anker",
          "baseus",
          "philips",
          "tp-link",
          "fitbit",
          "xbox",
        ];

        return knownBrands.find((brand) =>
          title.includes(brand.toLowerCase())
        );
      })
      .filter(Boolean);

    return [...new Set(detectedBrands)].sort();
  }, [products]);

  // =========================================================
  // PRICE
  // =========================================================

  const increasePrice = () => {
    setPrice((prev) => Number(prev) + 1000);
  };

  const decreasePrice = () => {
    setPrice((prev) => Math.max(0, Number(prev) - 1000));
  };

  // =========================================================
  // BRAND
  // =========================================================

  const handleBrandChange = (brand) => {
    if (selectedBrands.includes(brand)) {
      setSelectedBrands(
        selectedBrands.filter((item) => item !== brand)
      );
    } else {
      setSelectedBrands([...selectedBrands, brand]);
    }
  };

  // =========================================================
  // CATEGORY
  // =========================================================

  const handleCategoryChange = (category) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(
        selectedCategories.filter((item) => item !== category)
      );
    } else {
      setSelectedCategories([
        ...selectedCategories,
        category,
      ]);
    }
  };

  return (
    
    <aside className="w-full rounded-lg border border-gray-200 bg-white p-5 lg:w-[260px] lg:shrink-0">

      {/* FILTER TITLE */}
      <h3 className="mb-5 text-lg font-semibold text-gray-900">
        Filters
      </h3>
      {/* PRICE */}
      <div className="border-b border-gray-200 pb-5">
        <h3 className="mb-4 text-base font-semibold text-gray-900">
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
            ৳ {Number(price || 0).toLocaleString()}
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

      {/* BRAND */}
      <div className="border-b border-gray-200 py-5">
        <h3 className="mb-3 text-base font-semibold text-gray-900">
          Brand
        </h3>

        <div className="space-y-2">
          {brands.map((brand) => (
            <label
              key={brand}
              className="flex cursor-pointer items-center gap-2 text-sm text-gray-600"
            >
              <input
                type="checkbox"
                checked={selectedBrands.includes(brand)}
                onChange={() => handleBrandChange(brand)}
                className="h-4 w-4 rounded border-gray-300"
              />

              <span className="capitalize">
                {brand}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* CATEGORY */}
      <div className="border-b border-gray-200 py-5">
        <h3 className="mb-3 text-base font-semibold text-gray-900">
          Category
        </h3>

        <div className="space-y-2">
          {categories.map((category) => (
            <label
              key={category}
              className="flex cursor-pointer items-center gap-2 text-sm text-gray-600"
            >
              <input
                type="checkbox"
                checked={selectedCategories.includes(category)}
                onChange={() =>
                  handleCategoryChange(category)
                }
                className="h-4 w-4 rounded border-gray-300"
              />

              <span>{category}</span>
            </label>
          ))}
        </div>
      </div>

      {/* RATING */}
      <div className="pt-5">
        <h3 className="mb-3 text-base font-semibold text-gray-900">
          Rating
        </h3>

        <div className="space-y-2">
          {[5, 4, 3, 2, 1].map((rating) => (
            <label
              key={rating}
              className="flex cursor-pointer items-center gap-2 text-sm text-gray-600"
            >
              <input
                type="radio"
                name="gadget-rating"
                checked={selectedRating === rating}
                onChange={() => setSelectedRating(rating)}
                className="h-4 w-4"
              />

              <span>
                {"★".repeat(rating)}
                {"☆".repeat(5 - rating)}
                {" & up"}
              </span>
            </label>
          ))}

          {selectedRating && (
            <button
              type="button"
              onClick={() => setSelectedRating(null)}
              className="mt-2 text-xs text-red-500 hover:underline"
            >
              Clear rating
            </button>
          )}
        </div>
      </div>

    </aside>
  );
}