"use client";

import { ChevronDown } from "lucide-react";

export default function OfficeEquipmentFilter({
  price,
  setPrice,
  openSections,
  setOpenSections,
  selected,
  setSelected,
}) {
  const toggleSection = (section) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const toggleValue = (section, value) => {
    setSelected((prev) => {
      const current = prev[section] || [];

      if (current.includes(value)) {
        return {
          ...prev,
          [section]: current.filter(
            (item) => item !== value
          ),
        };
      }

      return {
        ...prev,
        [section]: [...current, value],
      };
    });
  };

  const stockOptions = [
    "In Stock",
    "Out of Stock",
  ];

  const sizeOptions = [
    "Small",
    "Medium",
    "Large",
    "Standard",
  ];

  return (
    <aside className="border border-gray-200 bg-white">

      {/* ==============================
          FILTER HEADER
      ============================== */}

      <div className="border-b border-gray-200 px-5 py-4">
        <h2 className="text-lg font-semibold text-gray-900">
          FILTERS
        </h2>
      </div>

      {/* ==============================
          PRICE
      ============================== */}

      <div className="border-b border-gray-200">

        <button
          type="button"
          onClick={() =>
            toggleSection("price")
          }
          className="flex w-full items-center justify-between px-5 py-4 text-left"
        >
          <span className="font-medium text-gray-800">
            Price Range
          </span>

          <ChevronDown
            size={18}
            className={`transition-transform ${openSections.price
                ? "rotate-180"
                : ""
              }`}
          />
        </button>

        {openSections.price && (
          <div className="px-5 pb-5">

            <input
              type="range"
              min="0"
              max="100000"
              step="1000"
              value={
                price === null
                  ? 100000
                  : price
              }
              onChange={(e) => {
                const value =
                  Number(e.target.value);

                setPrice(
                  value >= 100000
                    ? null
                    : value
                );
              }}
              className="w-full"
            />

            <div className="mt-3 flex items-center justify-between text-sm">

              <span className="text-gray-500">
                Price
              </span>

              <span className="font-semibold text-gray-900">
                {price === null
                  ? "Up to ৳100,000+"
                  : `Up to ৳${Number(
                    price
                  ).toLocaleString()}`}
              </span>

            </div>

          </div>
        )}

      </div>

      {/* ==============================
          STOCK
      ============================== */}

      <div className="border-b border-gray-200">

        <button
          type="button"
          onClick={() =>
            toggleSection("stock")
          }
          className="flex w-full items-center justify-between px-5 py-4 text-left"
        >
          <span className="font-medium text-gray-800">
            Stock
          </span>

          <ChevronDown
            size={18}
            className={`transition-transform ${openSections.stock
                ? "rotate-180"
                : ""
              }`}
          />
        </button>

        {openSections.stock && (
          <div className="space-y-3 px-5 pb-5">

            {stockOptions.map((item) => (
              <label
                key={item}
                className="flex cursor-pointer items-center gap-3 text-sm text-gray-700"
              >

                <input
                  type="checkbox"
                  checked={
                    selected.stock?.includes(
                      item
                    ) || false
                  }
                  onChange={() =>
                    toggleValue(
                      "stock",
                      item
                    )
                  }
                  className="h-4 w-4"
                />

                <span>{item}</span>

              </label>
            ))}

          </div>
        )}

      </div>

      {/* ==============================
          SIZE
      ============================== */}

      <div>

        <button
          type="button"
          onClick={() =>
            toggleSection("size")
          }
          className="flex w-full items-center justify-between px-5 py-4 text-left"
        >
          <span className="font-medium text-gray-800">
            Size
          </span>

          <ChevronDown
            size={18}
            className={`transition-transform ${openSections.size
                ? "rotate-180"
                : ""
              }`}
          />
        </button>

        {openSections.size && (
          <div className="space-y-3 px-5 pb-5">

            {sizeOptions.map((item) => (
              <label
                key={item}
                className="flex cursor-pointer items-center gap-3 text-sm text-gray-700"
              >

                <input
                  type="checkbox"
                  checked={
                    selected.size?.includes(
                      item
                    ) || false
                  }
                  onChange={() =>
                    toggleValue(
                      "size",
                      item
                    )
                  }
                  className="h-4 w-4"
                />

                <span>{item}</span>

              </label>
            ))}

          </div>
        )}

      </div>

    </aside>
  );
}