
"use client";

import {
  ChevronDown,
  ChevronUp,
  Check,
} from "lucide-react";

export default function LaptopFilter({
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

  const toggleOption = (section, value) => {
    setSelected((prev) => {
      const current = prev[section];

      return {
        ...prev,
        [section]: current.includes(value)
          ? current.filter((item) => item !== value)
          : [...current, value],
      };
    });
  };

  const filters = {
    processor: [
      "Intel Core i3",
      "Intel Core i5",
      "Intel Core i7",
      "Intel Core i9",
      "AMD Ryzen 3",
      "AMD Ryzen 5",
      "AMD Ryzen 7",
      "AMD Ryzen 9",
      "Apple M1",
      "Apple M2",
      "Apple M3",
    ],

    generation: [
      "12th Gen",
      "13th Gen",
      "14th Gen",
      "7000 Series",
      "8000 Series",
      "M1",
      "M2",
      "M3",
    ],

    ram: [
      "8GB DDR4",
      "8GB LPDDR5",
      "16GB DDR4",
      "16GB DDR5",
      "16GB Unified Memory",
      "18GB Unified Memory",
      "32GB DDR5",
      "36GB Unified Memory",
    ],

    ssd: [
      "256GB NVMe SSD",
      "256GB SSD",
      "512GB NVMe SSD",
      "512GB SSD",
      "1TB NVMe SSD",
      "1TB SSD",
    ],

    graphicsCard: [
      "Intel UHD Graphics",
      "Intel Iris Xe Graphics",
      "AMD Radeon Graphics",
      "Apple 7-Core GPU",
      "Apple 8-Core GPU",
      "Apple 10-Core GPU",
      "Apple 18-Core GPU",
      "Apple 19-Core GPU",
      "Apple 40-Core GPU",
      "NVIDIA GeForce RTX 4050 6GB",
      "NVIDIA GeForce RTX 4060 8GB",
      "NVIDIA GeForce RTX 4070 8GB",
    ],

    stock: [
      "In Stock",
      "Out of Stock",
    ],

    size: [
      "13.3 inch",
      "13.6 inch",
      "14 inch",
      "14.2 inch",
      "15.3 inch",
      "15.6 inch",
      "16 inch",
      "16.1 inch",
      "16.2 inch",
    ],
  };

  const renderSection = (key, title) => {
    const isOpen = openSections[key];

    return (
      <div className="border-b border-gray-200 py-4">
        <button
          type="button"
          onClick={() => toggleSection(key)}
          className="flex w-full items-center justify-between text-left"
        >
          <span className="text-sm font-semibold text-gray-900">
            {title}
          </span>

          {isOpen ? (
            <ChevronUp size={17} />
          ) : (
            <ChevronDown size={17} />
          )}
        </button>

        {isOpen && (
          <div className="mt-3 space-y-2">
            {filters[key].map((option) => {
              const checked = selected[key].includes(option);

              return (
                <button
                  key={option}
                  type="button"
                  onClick={() => toggleOption(key, option)}
                  className="flex w-full items-center gap-2 text-left text-sm text-gray-600"
                >
                  <span
                    className={`flex h - 4 w - 4 items - center justify - center border ${
  checked
    ? "border-[#0b5d3b] bg-[#0b5d3b] text-white"
    : "border-gray-300 bg-white"
} `}
                  >
                    {checked && <Check size={12} />}
                  </span>

                  {option}
                </button>
              );
            })}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="border border-gray-200 bg-white p-4">
      <div className="flex items-center justify-between border-b border-gray-200 pb-4">
        <h2 className="text-lg font-bold text-gray-900">
          Filter
        </h2>

        <button
          type="button"
          onClick={() => {
            setPrice(null);

            setSelected({
              processor: [],
              generation: [],
              ram: [],
              ssd: [],
              graphicsCard: [],
              stock: [],
              size: [],
            });
          }}
          className="text-xs font-medium text-[#0b5d3b] hover:underline"
        >
          Clear All
        </button>
      </div>

      <div className="border-b border-gray-200 py-4">
        <p className="mb-3 text-sm font-semibold text-gray-900">
          Maximum Price
        </p>

        <div className="space-y-3">
          <input
            type="range"
            min="30000"
            max="400000"
            step="5000"
            value={price || 400000}
            onChange={(e) => setPrice(e.target.value)}
            className="w-full accent-[#0b5d3b]"
          />

          <div className="flex justify-between text-xs text-gray-500">
            <span>৳30,000</span>
            <span>
              ৳{Number(price || 400000).toLocaleString()}
            </span>
          </div>
        </div>
      </div>

      {renderSection("processor", "Processor")}
      {renderSection("generation", "Generation")}
      {renderSection("ram", "RAM")}
      {renderSection("ssd", "SSD")}
      {renderSection("graphicsCard", "Graphics Card")}
      {renderSection("stock", "Stock")}
      {renderSection("size", "Display Size")}
    </div>
  );
}

