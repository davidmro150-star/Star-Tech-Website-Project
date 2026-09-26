"use client";

import { useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function SoftwareProductFilter({
  products = [],
}) {
  const router = useRouter();
  const searchParams = useSearchParams();

  // =========================================================
  // DEFAULT PRICE
  // =========================================================

  const currentPrice =
    Number(searchParams.get("maxPrice")) || 10000;

  // =========================================================
  // SELECTED FILTERS
  // =========================================================

  const selectedBrands = searchParams.get("brand")
    ? searchParams.get("brand").split(",")
    : [];

  const selectedCategories = searchParams.get("category")
    ? searchParams.get("category").split(",")
    : [];

  const selectedSizes = searchParams.get("size")
    ? searchParams.get("size").split(",")
    : [];

  const selectedRam = searchParams.get("ram")
    ? searchParams.get("ram").split(",")
    : [];

  const selectedSsd = searchParams.get("ssd")
    ? searchParams.get("ssd").split(",")
    : [];

  const selectedProcessors = searchParams.get("processor")
    ? searchParams.get("processor").split(",")
    : [];

  // =========================================================
  // OPEN / CLOSE
  // =========================================================

  const [openSections, setOpenSections] = useState({
    price: true,
    brand: true,
    category: true,
    size: true,
    ram: true,
    ssd: true,
    processor: true,
  });

  const toggleSection = (section) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  // =========================================================
  // BRANDS
  // =========================================================

  const brands = useMemo(() => {
    return [
      ...new Set(
        products
          .map((product) => product.brand)
          .filter(Boolean)
      ),
    ].sort();
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
    ].sort();
  }, [products]);

  // =========================================================
  // SIZE
  // =========================================================

  const sizes = useMemo(() => {
    return [
      ...new Set(
        products
          .map((product) => product.size)
          .filter(Boolean)
      ),
    ].sort();
  }, [products]);

  // =========================================================
  // RAM
  // =========================================================

  const rams = useMemo(() => {
    return [
      ...new Set(
        products
          .map((product) => product.ram)
          .filter(Boolean)
      ),
    ].sort();
  }, [products]);

  // =========================================================
  // SSD
  // =========================================================

  const ssds = useMemo(() => {
    return [
      ...new Set(
        products
          .map((product) => product.ssd)
          .filter(Boolean)
      ),
    ].sort();
  }, [products]);

  // =========================================================
  // PROCESSOR
  // =========================================================

  const processors = useMemo(() => {
    return [
      ...new Set(
        products
          .map((product) => product.processor)
          .filter(Boolean)
      ),
    ].sort();
  }, [products]);

  // =========================================================
  // UPDATE CHECKBOX
  // =========================================================

  const updateFilter = (
    key,
    value,
    checked
  ) => {
    const params =
      new URLSearchParams(
        searchParams.toString()
      );

    const existing = params.get(key)
      ? params.get(key).split(",")
      : [];

    let updated;

    if (checked) {
      updated = [
        ...new Set([
          ...existing,
          value,
        ]),
      ];
    } else {
      updated = existing.filter(
        (item) => item !== value
      );
    }

    if (updated.length > 0) {
      params.set(
        key,
        updated.join(",")
      );
    } else {
      params.delete(key);
    }

    router.push(
      `/category/software?${params.toString()}`
    );
  };

  // =========================================================
  // INCREASE PRICE
  // =========================================================

  const increasePrice = () => {
    const params =
      new URLSearchParams(
        searchParams.toString()
      );

    const nextPrice =
      currentPrice + 1000;

    params.set(
      "maxPrice",
      nextPrice
    );

    router.push(
      `/category/software?${params.toString()}`
    );
  };

  // =========================================================
  // DECREASE PRICE
  // =========================================================

  const decreasePrice = () => {
    const params =
      new URLSearchParams(
        searchParams.toString()
      );

    const nextPrice = Math.max(
      1000,
      currentPrice - 1000
    );

    params.set(
      "maxPrice",
      nextPrice
    );

    router.push(
      `/category/software?${params.toString()}`
    );
  };

  // =========================================================
  // CLEAR
  // =========================================================

  const clearFilters = () => {
    router.push(
      "/category/software"
    );
  };

  // =========================================================
  // CHECKBOX LIST
  // =========================================================

  const CheckboxList = ({
    items,
    selected,
    filterKey,
  }) => {
    return (
      <div className="space-y-3">

        {items.length > 0 ? (
          items.map((item) => {

            const checked =
              selected.includes(item);

            return (
              <label
                key={item}
                className="flex cursor-pointer items-center gap-3 text-sm text-gray-700"
              >

                <input
                  type="checkbox"
                  checked={checked}
                  onChange={(e) =>
                    updateFilter(
                      filterKey,
                      item,
                      e.target.checked
                    )
                  }
                  className="h-4 w-4 cursor-pointer accent-[#074E37]"
                />

                <span>
                  {item}
                </span>

              </label>
            );
          })
        ) : (
          <p className="text-xs text-gray-400">
            No options available
          </p>
        )}

      </div>
    );
  };

  // =========================================================
  // RETURN
  // =========================================================

  return (
    <aside className="w-full rounded-lg border border-gray-200 bg-white">

      {/* HEADER */}

      <div className="flex items-center justify-between border-b px-4 py-4">

        <h2 className="text-lg font-semibold text-gray-900">
          Filters
        </h2>

        <button
          onClick={clearFilters}
          className="text-xs font-medium text-[#074E37] hover:underline"
        >
          Clear All
        </button>

      </div>

      {/* PRICE */}

      <div className="border-b px-4 py-4">

        <button
          onClick={() =>
            toggleSection("price")
          }
          className="flex w-full items-center justify-between"
        >

          <span className="font-semibold text-gray-900">
            Price
          </span>

          <span className="text-lg">
            {openSections.price
              ? "−"
              : "+"}
          </span>

        </button>

        {openSections.price && (
          <div className="mt-4">

            <div className="flex items-center justify-between rounded-md border border-gray-200">

              <button
                onClick={decreasePrice}
                className="flex h-10 w-10 items-center justify-center text-xl text-gray-700 hover:bg-gray-100"
              >
                −
              </button>

              <span className="text-sm font-medium text-gray-900">
                ৳
                {currentPrice.toLocaleString()}
              </span>

              <button
                onClick={increasePrice}
                className="flex h-10 w-10 items-center justify-center text-xl text-gray-700 hover:bg-gray-100"
              >
                +
              </button>

            </div>

            <p className="mt-2 text-xs text-gray-500">
              Maximum price
            </p>

          </div>
        )}

      </div>

      {/* BRAND */}

      <div className="border-b px-4 py-4">

        <button
          onClick={() =>
            toggleSection("brand")
          }
          className="flex w-full items-center justify-between"
        >

          <span className="font-semibold text-gray-900">
            Brand
          </span>

          <span className="text-lg">
            {openSections.brand
              ? "−"
              : "+"}
          </span>

        </button>

        {openSections.brand && (
          <div className="mt-4">
            <CheckboxList
              items={brands}
              selected={selectedBrands}
              filterKey="brand"
            />
          </div>
        )}

      </div>

      {/* CATEGORY */}

      <div className="border-b px-4 py-4">

        <button
          onClick={() =>
            toggleSection("category")
          }
          className="flex w-full items-center justify-between"
        >

          <span className="font-semibold text-gray-900">
            Category
          </span>

          <span className="text-lg">
            {openSections.category
              ? "−"
              : "+"}
          </span>

        </button>

        {openSections.category && (
          <div className="mt-4">
            <CheckboxList
              items={categories}
              selected={selectedCategories}
              filterKey="category"
            />
          </div>
        )}

      </div>

      {/* SIZE */}

      <div className="border-b px-4 py-4">

        <button
          onClick={() =>
            toggleSection("size")
          }
          className="flex w-full items-center justify-between"
        >

          <span className="font-semibold text-gray-900">
            Size
          </span>

          <span className="text-lg">
            {openSections.size
              ? "−"
              : "+"}
          </span>

        </button>

        {openSections.size && (
          <div className="mt-4">
            <CheckboxList
              items={sizes}
              selected={selectedSizes}
              filterKey="size"
            />
          </div>
        )}

      </div>

      {/* RAM */}

      <div className="border-b px-4 py-4">

        <button
          onClick={() =>
            toggleSection("ram")
          }
          className="flex w-full items-center justify-between"
        >

          <span className="font-semibold text-gray-900">
            RAM
          </span>

          <span className="text-lg">
            {openSections.ram
              ? "−"
              : "+"}
          </span>

        </button>

        {openSections.ram && (
          <div className="mt-4">
            <CheckboxList
              items={rams}
              selected={selectedRam}
              filterKey="ram"
            />
          </div>
        )}

      </div>

      {/* SSD */}

      <div className="border-b px-4 py-4">

        <button
          onClick={() =>
            toggleSection("ssd")
          }
          className="flex w-full items-center justify-between"
        >

          <span className="font-semibold text-gray-900">
            SSD
          </span>

          <span className="text-lg">
            {openSections.ssd
              ? "−"
              : "+"}
          </span>

        </button>

        {openSections.ssd && (
          <div className="mt-4">
            <CheckboxList
              items={ssds}
              selected={selectedSsd}
              filterKey="ssd"
            />
          </div>
        )}

      </div>

      {/* PROCESSOR */}

      <div className="px-4 py-4">

        <button
          onClick={() =>
            toggleSection("processor")
          }
          className="flex w-full items-center justify-between"
        >

          <span className="font-semibold text-gray-900">
            Processor
          </span>

          <span className="text-lg">
            {openSections.processor
              ? "−"
              : "+"
            }
          </span>

        </button>

        {openSections.processor && (
          <div className="mt-4">
            <CheckboxList
              items={processors}
              selected={selectedProcessors}
              filterKey="processor"
            />
          </div>
        )}

      </div>

    </aside>
  );
}