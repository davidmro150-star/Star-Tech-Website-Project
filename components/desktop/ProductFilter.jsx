"use client";

import { ChevronDown, Minus, Plus } from "lucide-react";

const filterData = {
  processor: [
    "Core i3",
    "Core i5",
    "Core i7",
    "Core i9",
    "Ryzen 5",
    "Ryzen 7",
    "Ryzen 9",
  ],

  generation: [
    "10th Gen",
    "11th Gen",
    "12th Gen",
    "13th Gen",
    "14th Gen",
  ],

  ram: ["8GB", "16GB", "32GB", "64GB"],

  ssd: ["256GB", "512GB", "1TB", "2TB"],

  stock: ["In Stock", "Out of Stock"],

  size: ["Small", "Medium", "Large", "Standard"],
};

const ProductFilter = ({
  price,
  setPrice,
  openSections = {},
  setOpenSections,
  selected = {},
  setSelected,
}) => {
  // ==========================================
  // PRICE
  // ==========================================

  const increasePrice = () => {
    setPrice((prev) => (prev ?? 50000) + 5000);
  };

  const decreasePrice = () => {
    setPrice((prev) =>
      Math.max(0, (prev ?? 50000) - 5000)
    );
  };

  // ==========================================
  // OPEN / CLOSE FILTER SECTION
  // ==========================================

  const toggleSection = (section) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  // ==========================================
  // CHECKBOX
  // ==========================================

  const handleCheckbox = (section, value) => {
    setSelected((prev) => {
      const current = prev[section] || [];

      return {
        ...prev,

        [section]: current.includes(value)
          ? current.filter((item) => item !== value)
          : [...current, value],
      };
    });
  };

  // ==========================================
  // SAFE PRICE VALUE
  // ==========================================

  const currentPrice =
    price == null ? 50000 : Number(price);

  return (
    <aside className="w-full border border-gray-200 bg-white">
      {/* ======================================
          FILTER HEADER
      ====================================== */}

      <div className="border-b border-gray-200 px-5 py-4">
        <h2 className="text-lg font-semibold tracking-wide text-gray-900">
          FILTERS
        </h2>
      </div>

      {/* ======================================
          PRICE RANGE
      ====================================== */}

      <div className="border-b border-gray-200 px-5 py-5">
        <h3 className="mb-4 text-sm font-semibold text-gray-900">
          Price Range
        </h3>

        <div className="flex items-center gap-2">
          {/* MINUS */}

          <button
            type="button"
            onClick={decreasePrice}
            className="flex h-9 w-9 shrink-0 items-center justify-center border border-gray-300 text-gray-700 transition hover:border-[#0b5d3b] hover:text-[#0b5d3b]"
            aria-label="Decrease price"
          >
            <Minus size={16} strokeWidth={2} />
          </button>

          {/* PRICE */}

          <div className="flex h-9 flex-1 items-center justify-center border border-gray-300 text-sm font-medium text-gray-800">
            ৳{currentPrice.toLocaleString()}
          </div>

          {/* PLUS */}

          <button
            type="button"
            onClick={increasePrice}
            className="flex h-9 w-9 shrink-0 items-center justify-center border border-gray-300 text-gray-700 transition hover:border-[#0b5d3b] hover:text-[#0b5d3b]"
            aria-label="Increase price"
          >
            <Plus size={16} strokeWidth={2} />
          </button>
        </div>

        <p className="mt-2 text-xs text-gray-400">
          {price == null
            ? "Select a price to filter products"
            : `Showing products up to ৳${currentPrice.toLocaleString()}`}
        </p>
      </div>

      {/* ======================================
          PROCESSOR
      ====================================== */}

      <FilterSection
        title="Processor"
        section="processor"
        openSections={openSections}
        toggleSection={toggleSection}
      >
        <CheckboxList
          section="processor"
          options={filterData.processor}
          selected={selected.processor || []}
          onChange={handleCheckbox}
        />
      </FilterSection>

      {/* ======================================
          GENERATION
      ====================================== */}

      <FilterSection
        title="Generation"
        section="generation"
        openSections={openSections}
        toggleSection={toggleSection}
      >
        <CheckboxList
          section="generation"
          options={filterData.generation}
          selected={selected.generation || []}
          onChange={handleCheckbox}
        />
      </FilterSection>

      {/* ======================================
          RAM
      ====================================== */}

      <FilterSection
        title="RAM"
        section="ram"
        openSections={openSections}
        toggleSection={toggleSection}
      >
        <CheckboxList
          section="ram"
          options={filterData.ram}
          selected={selected.ram || []}
          onChange={handleCheckbox}
        />
      </FilterSection>

      {/* ======================================
          SSD
      ====================================== */}

      <FilterSection
        title="SSD"
        section="ssd"
        openSections={openSections}
        toggleSection={toggleSection}
      >
        <CheckboxList
          section="ssd"
          options={filterData.ssd}
          selected={selected.ssd || []}
          onChange={handleCheckbox}
        />
      </FilterSection>

      {/* ======================================
          STOCK
      ====================================== */}

      <FilterSection
        title="Stock"
        section="stock"
        openSections={openSections}
        toggleSection={toggleSection}
      >
        <CheckboxList
          section="stock"
          options={filterData.stock}
          selected={selected.stock || []}
          onChange={handleCheckbox}
        />
      </FilterSection>

      {/* ======================================
          SIZE
      ====================================== */}

      <FilterSection
        title="Size"
        section="size"
        openSections={openSections}
        toggleSection={toggleSection}
      >
        <CheckboxList
          section="size"
          options={filterData.size}
          selected={selected.size || []}
          onChange={handleCheckbox}
        />
      </FilterSection>
    </aside>
  );
};

// =====================================================
// FILTER SECTION
// =====================================================

const FilterSection = ({
  title,
  section,
  openSections,
  toggleSection,
  children,
}) => {
  const isOpen = openSections?.[section];

  return (
    <div className="border-b border-gray-200 px-5 py-4">
      <button
        type="button"
        onClick={() => toggleSection(section)}
        className="flex w-full items-center justify-between text-left"
      >
        <h3 className="text-sm font-semibold text-gray-900">
          {title}
        </h3>

        <ChevronDown
          size={17}
          strokeWidth={1.8}
          className={`text-gray-500 transition-transform duration-200 ${isOpen ? "rotate-180" : ""
            }`}
        />
      </button>

      {isOpen && (
        <div className="mt-4 space-y-2.5">
          {children}
        </div>
      )}
    </div>
  );
};

// =====================================================
// CHECKBOX LIST
// =====================================================

const CheckboxList = ({
  section,
  options,
  selected,
  onChange,
}) => {
  return (
    <>
      {options.map((option) => (
        <label
          key={option}
          className="flex cursor-pointer items-center gap-3 text-sm text-gray-600 transition hover:text-[#0b5d3b]"
        >
          <input
            type="checkbox"
            checked={selected.includes(option)}
            onChange={() => onChange(section, option)}
            className="h-4 w-4 cursor-pointer accent-[#0b5d3b]"
          />

          <span>{option}</span>
        </label>
      ))}
    </>
  );
};

export default ProductFilter;