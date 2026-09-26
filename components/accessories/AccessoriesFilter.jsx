"use client";

import { useMemo } from "react";

export default function AccessoriesFilter({
  products = [],
  price,
  setPrice,
  selectedBrands = [],
  setSelectedBrands,
  selectedCategories = [],
  setSelectedCategories,
  selectedRating = 0,
  setSelectedRating,
}) {
  // =========================================================
  // CATEGORY CHECKBOXES
  // =========================================================
  const categories = useMemo(() => {
    return [
      ...new Set(
        products
          .map((product) => product.subcategory)
          .filter(Boolean)
      ),
    ].sort();
  }, [products]);

  // =========================================================
  // BRAND CHECKBOXES
  // =========================================================
  const brands = useMemo(() => {
    return [
      ...new Set(
        products
          .map((product) => product.brand)
          .filter(
            (brand) =>
              typeof brand === "string" &&
              brand.trim() !== ""
          )
      ),
    ].sort();
  }, [products]);

  // =========================================================
  // MAX PRICE
  // =========================================================
  const maxPrice = useMemo(() => {
    if (!products.length) {
      return 2500;
    }

    const prices = products
      .map((product) => Number(product.price))
      .filter((price) => !Number.isNaN(price));

    if (!prices.length) {
      return 2500;
    }

    return Math.max(...prices);
  }, [products]);

  // =========================================================
  // INCREASE PRICE
  // =========================================================
  const increasePrice = () => {
    setPrice((prev) =>
      Math.min(Number(prev) + 500, maxPrice)
    );
  };

  // =========================================================
  // DECREASE PRICE
  // =========================================================
  const decreasePrice = () => {
    setPrice((prev) =>
      Math.max(Number(prev) - 500, 0)
    );
  };

  // =========================================================
  // CATEGORY CHECKBOX
  // =========================================================
  const handleCategoryChange = (category) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(
        selectedCategories.filter(
          (item) => item !== category
        )
      );
    } else {
      setSelectedCategories([
        ...selectedCategories,
        category,
      ]);
    }
  };

  // =========================================================
  // BRAND CHECKBOX
  // =========================================================
  const handleBrandChange = (brand) => {
    if (selectedBrands.includes(brand)) {
      setSelectedBrands(
        selectedBrands.filter(
          (item) => item !== brand
        )
      );
    } else {
      setSelectedBrands([
        ...selectedBrands,
        brand,
      ]);
    }
  };

  // =========================================================
  // CLEAR ALL
  // =========================================================
  const clearAll = () => {
    setPrice(2500);
    setSelectedCategories([]);
    setSelectedBrands([]);
    setSelectedRating(0);
  };

  return (
    <aside className="w-full rounded-lg border border-gray-200 bg-white p-4">

      {/* =====================================================
          FILTER HEADER
      ====================================================== */}
      <div className="mb-5 flex items-center justify-between">
        <h3 className="font-jost text-lg font-semibold text-[#074e37]">
          Filter
        </h3>

        <button
          type="button"
          onClick={clearAll}
          className="text-xs font-medium text-[#86bc42] hover:underline"
        >
          Clear All
        </button>
      </div>

      {/* =====================================================
          PRICE
      ====================================================== */}
      <div className="border-b border-gray-200 pb-5">
        <h4 className="mb-3 text-sm font-semibold text-gray-800">
          Price
        </h4>

        <div className="flex items-center gap-2">

          {/* MINUS */}
          <button
            type="button"
            onClick={decreasePrice}
            disabled={price <= 0}
            className="flex h-9 w-9 items-center justify-center rounded-md border border-gray-300 text-lg font-semibold text-gray-700 transition hover:border-[#074e37] hover:text-[#074e37] disabled:cursor-not-allowed disabled:opacity-40"
          >
            −
          </button>

          {/* CURRENT PRICE */}
          <div className="flex-1 rounded-md border border-gray-300 px-2 py-2 text-center">
            <span className="text-sm font-semibold text-[#074e37]">
              ৳{Number(price).toLocaleString()}
            </span>
          </div>

          {/* PLUS */}
          <button
            type="button"
            onClick={increasePrice}
            disabled={price >= maxPrice}
            className="flex h-9 w-9 items-center justify-center rounded-md border border-gray-300 text-lg font-semibold text-gray-700 transition hover:border-[#074e37] hover:text-[#074e37] disabled:cursor-not-allowed disabled:opacity-40"
          >
            +
          </button>

        </div>

        <div className="mt-2 flex justify-between text-xs text-gray-400">
          <span>৳0</span>

          <span>
            ৳{maxPrice.toLocaleString()}
          </span>
        </div>
      </div>

      {/* =====================================================
          CATEGORY
      ====================================================== */}
      <div className="border-b border-gray-200 py-5">
        <h4 className="mb-3 text-sm font-semibold text-gray-800">
          Category
        </h4>

        <div className="space-y-2">
          {categories.length > 0 ? (
            categories.map((category) => (
              <label
                key={category}
                className="flex cursor-pointer items-center gap-2 text-sm text-gray-600"
              >
                <input
                  type="checkbox"
                  checked={selectedCategories.includes(
                    category
                  )}
                  onChange={() =>
                    handleCategoryChange(category)
                  }
                  className="h-4 w-4 accent-[#074e37]"
                />

                <span>{category}</span>
              </label>
            ))
          ) : (
            <p className="text-xs text-gray-400">
              No categories found
            </p>
          )}
        </div>
      </div>

      {/* =====================================================
          BRAND
      ====================================================== */}
      <div className="border-b border-gray-200 py-5">
        <h4 className="mb-3 text-sm font-semibold text-gray-800">
          Brand
        </h4>

        <div className="space-y-2">
          {brands.length > 0 ? (
            brands.map((brand) => (
              <label
                key={brand}
                className="flex cursor-pointer items-center gap-2 text-sm text-gray-600"
              >
                <input
                  type="checkbox"
                  checked={selectedBrands.includes(brand)}
                  onChange={() =>
                    handleBrandChange(brand)
                  }
                  className="h-4 w-4 accent-[#074e37]"
                />

                <span>{brand}</span>
              </label>
            ))
          ) : (
            <p className="text-xs text-gray-400">
              No brands found
            </p>
          )}
        </div>
      </div>

      {/* =====================================================
          RATING
      ====================================================== */}
      <div className="pt-5">
        <h4 className="mb-3 text-sm font-semibold text-gray-800">
          Rating
        </h4>

        <div className="space-y-2">
          {[5, 4, 3, 2, 1].map((rating) => (
            <label
              key={rating}
              className="flex cursor-pointer items-center gap-2 text-sm"
            >
              <input
                type="radio"
                name="accessories-rating"
                checked={selectedRating === rating}
                onChange={() =>
                  setSelectedRating(rating)
                }
                className="h-4 w-4 accent-[#074e37]"
              />

              <span className="text-[#86bc42]">
                {"★".repeat(rating)}
              </span>

              <span className="text-gray-500">
                & up
              </span>
            </label>
          ))}
        </div>

        {selectedRating > 0 && (
          <button
            type="button"
            onClick={() => setSelectedRating(0)}
            className="mt-3 text-xs text-gray-500 hover:text-[#074e37]"
          >
            Clear Rating
          </button>
        )}
      </div>

    </aside>
  );
}