
"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

import ComponentProducts from "./ComponentProducts";
import ProductFilter from "../Desktop/ProductFilter";

import productsData from "../../api/productsData";

export default function ComponentProductsLayout() {
  const searchParams = useSearchParams();

  // =====================================================
  // PRICE
  // =====================================================

  const [price, setPrice] = useState(null);

  // =====================================================
  // FILTER OPEN / CLOSE
  // =====================================================

  const [openSections, setOpenSections] = useState({
    processor: true,
    generation: true,
    ram: true,
    ssd: true,
    stock: true,
    size: true,
  });

  // =====================================================
  // SELECTED FILTERS
  // =====================================================

  const [selected, setSelected] = useState({
    processor: [],
    generation: [],
    ram: [],
    ssd: [],
    stock: [],
    size: [],
  });

  // =====================================================
  // READ URL FILTERS
  // =====================================================

  useEffect(() => {
    setSelected({
      processor: searchParams.get("processor")
        ? [searchParams.get("processor")]
        : [],

      generation: searchParams.get("generation")
        ? [searchParams.get("generation")]
        : [],

      ram: searchParams.get("ram")
        ? [searchParams.get("ram")]
        : [],

      ssd: searchParams.get("ssd")
        ? [searchParams.get("ssd")]
        : [],

      stock: searchParams.get("stock")
        ? [searchParams.get("stock")]
        : [],

      size: searchParams.get("size")
        ? [searchParams.get("size")]
        : [],
    });

    const urlPrice = searchParams.get("price");

    setPrice(urlPrice ? Number(urlPrice) : null);
  }, [searchParams]);

  // =====================================================
  // COMPONENT PRODUCTS
  // =====================================================

  const componentProducts = productsData.filter(
    (product) => product.category === "Components"
  );

  // =====================================================
  // URL SUBCATEGORY
  // =====================================================

  const selectedSubcategory =
    searchParams.get("subcategory");

  // =====================================================
  // MAIN SUBCATEGORY MAP
  // =====================================================

  const subcategoryMap = {
    Processor: ["CPU"],
    Motherboard: ["Motherboard"],
    RAM: ["RAM"],
    "Graphics Card": ["Graphics Card"],
    Storage: ["SSD", "HDD"],
    "Power Supply": ["Power Supply"],
    "PC Casing": ["PC Case"],
  };

  // =====================================================
  // DEEP CATEGORY MAP
  // =====================================================

  const deepSubcategoryMap = {
    Intel: "intel",
    "AMD Ryzen": "amd",
    "Intel Motherboard": "intel-motherboard",
    "AMD Motherboard": "amd-motherboard",
    "DDR4 RAM": "ddr4",
    "DDR5 RAM": "ddr5",
    NVIDIA: "nvidia",
    "AMD Radeon": "amd-radeon",
    "External Storage": "external-storage",
  };

  // =====================================================
  // FILTER
  // =====================================================

  const filteredProducts = componentProducts.filter(
    (product) => {
      // =================================================
      // CATEGORY FILTER
      // =================================================

      if (selectedSubcategory) {
        const selectedKey =
          deepSubcategoryMap[selectedSubcategory];

        // -----------------------------------------------
        // NORMAL CATEGORY
        // -----------------------------------------------

        if (!selectedKey) {
          const allowedSubcategories =
            subcategoryMap[selectedSubcategory] || [
              selectedSubcategory,
            ];

          const productSubcategory = String(
            product.subcategory || ""
          ).toLowerCase();

          const matched = allowedSubcategories.some(
            (item) =>
              productSubcategory ===
              String(item).toLowerCase()
          );

          if (!matched) {
            return false;
          }
        }

        // -----------------------------------------------
        // INTEL
        // -----------------------------------------------

        if (selectedKey === "intel") {
          const subcategory = String(
            product.subcategory || ""
          ).toLowerCase();

          const processor = String(
            product.processor || ""
          ).toLowerCase();

          const title = String(
            product.title || ""
          ).toLowerCase();

          if (
            !(
              subcategory === "cpu" &&
              (processor.includes("intel") ||
                title.includes("intel"))
            )
          ) {
            return false;
          }
        }

        // -----------------------------------------------
        // AMD RYZEN
        // -----------------------------------------------

        if (selectedKey === "amd") {
          const subcategory = String(
            product.subcategory || ""
          ).toLowerCase();

          const processor = String(
            product.processor || ""
          ).toLowerCase();

          const title = String(
            product.title || ""
          ).toLowerCase();

          if (
            !(
              subcategory === "cpu" &&
              (processor.includes("amd") ||
                processor.includes("ryzen") ||
                title.includes("amd") ||
                title.includes("ryzen"))
            )
          ) {
            return false;
          }
        }

        // -----------------------------------------------
        // INTEL MOTHERBOARD
        // -----------------------------------------------

        if (
          selectedKey === "intel-motherboard"
        ) {
          const subcategory = String(
            product.subcategory || ""
          ).toLowerCase();

          const processor = String(
            product.processor || ""
          ).toLowerCase();

          const socket = String(
            product.socket || ""
          ).toLowerCase();

          const title = String(
            product.title || ""
          ).toLowerCase();

          if (
            !(
              subcategory === "motherboard" &&
              (processor.includes("intel") ||
                socket.includes("lga") ||
                title.includes("intel"))
            )
          ) {
            return false;
          }
        }

        // -----------------------------------------------
        // AMD MOTHERBOARD
        // -----------------------------------------------

        if (
          selectedKey === "amd-motherboard"
        ) {
          const subcategory = String(
            product.subcategory || ""
          ).toLowerCase();

          const processor = String(
            product.processor || ""
          ).toLowerCase();

          const socket = String(
            product.socket || ""
          ).toLowerCase();

          const title = String(
            product.title || ""
          ).toLowerCase();

          if (
            !(
              subcategory === "motherboard" &&
              (processor.includes("amd") ||
                processor.includes("ryzen") ||
                socket.includes("am4") ||
                socket.includes("am5") ||
                title.includes("amd"))
            )
          ) {
            return false;
          }
        }

        // -----------------------------------------------
        // DDR4
        // -----------------------------------------------

        if (selectedKey === "ddr4") {
          const subcategory = String(
            product.subcategory || ""
          ).toLowerCase();

          const type = String(
            product.type || ""
          ).toLowerCase();

          const title = String(
            product.title || ""
          ).toLowerCase();

          if (
            !(
              subcategory === "ram" &&
              (type.includes("ddr4") ||
                title.includes("ddr4"))
            )
          ) {
            return false;
          }
        }

        // -----------------------------------------------
        // DDR5
        // -----------------------------------------------

        if (selectedKey === "ddr5") {
          const subcategory = String(
            product.subcategory || ""
          ).toLowerCase();

          const type = String(
            product.type || ""
          ).toLowerCase();

          const title = String(
            product.title || ""
          ).toLowerCase();

          if (
            !(
              subcategory === "ram" &&
              (type.includes("ddr5") ||
                title.includes("ddr5"))
            )
          ) {
            return false;
          }
        }

        // -----------------------------------------------
        // NVIDIA
        // -----------------------------------------------

        if (selectedKey === "nvidia") {
          const subcategory = String(
            product.subcategory || ""
          ).toLowerCase();

          const graphics = String(
            product.graphics || ""
          ).toLowerCase();

          const title = String(
            product.title || ""
          ).toLowerCase();

          if (
            !(
              subcategory === "graphics card" &&
              (graphics.includes("nvidia") ||
                graphics.includes("geforce") ||
                title.includes("nvidia") ||
                title.includes("geforce") ||
                title.includes("rtx") ||
                title.includes("gtx"))
            )
          ) {
            return false;
          }
        }

        // -----------------------------------------------
        // AMD RADEON
        // -----------------------------------------------

        if (selectedKey === "amd-radeon") {
          const subcategory = String(
            product.subcategory || ""
          ).toLowerCase();

          const graphics = String(
            product.graphics || ""
          ).toLowerCase();

          const title = String(
            product.title || ""
          ).toLowerCase();

          if (
            !(
              subcategory === "graphics card" &&
              (graphics.includes("amd") ||
                graphics.includes("radeon") ||
                title.includes("amd") ||
                title.includes("radeon") ||
                title.includes("rx"))
            )
          ) {
            return false;
          }
        }

        // -----------------------------------------------
        // EXTERNAL STORAGE
        // -----------------------------------------------

        if (
          selectedKey === "external-storage"
        ) {
          const subcategory = String(
            product.subcategory || ""
          ).toLowerCase();

          const title = String(
            product.title || ""
          ).toLowerCase();

          const type = String(
            product.type || ""
          ).toLowerCase();

          if (
            !(
              subcategory.includes("external") ||
              title.includes("external") ||
              type.includes("external")
            )
          ) {
            return false;
          }
        }
      }

      // =================================================
      // PRICE
      // =================================================

      if (
        price !== null &&
        Number(product.price || 0) > Number(price)
      ) {
        return false;
      }

      // =================================================
      // PROCESSOR
      // =================================================

      if (selected.processor.length > 0) {
        const processor = String(
          product.processor || ""
        ).toLowerCase();

        const matched = selected.processor.some(
          (item) =>
            processor.includes(
              String(item).toLowerCase()
            )
        );

        if (!matched) {
          return false;
        }
      }

      // =================================================
      // GENERATION
      // =================================================

      if (selected.generation.length > 0) {
        const generation = String(
          product.generation || ""
        ).toLowerCase();

        const matched = selected.generation.some(
          (item) =>
            generation.includes(
              String(item).toLowerCase()
            )
        );

        if (!matched) {
          return false;
        }
      }

      // =================================================
      // RAM
      // =================================================

      if (selected.ram.length > 0) {
        const ram = String(
          product.ram || ""
        ).toLowerCase();

        const matched = selected.ram.some(
          (item) =>
            ram.includes(
              String(item).toLowerCase()
            )
        );

        if (!matched) {
          return false;
        }
      }

      // =================================================
      // SSD
      // =================================================

      if (selected.ssd.length > 0) {
        const ssd = String(
          product.ssd || ""
        ).toLowerCase();

        const matched = selected.ssd.some(
          (item) =>
            ssd.includes(
              String(item).toLowerCase()
            )
        );

        if (!matched) {
          return false;
        }
      }

      // =================================================
      // STOCK
      // =================================================

      if (selected.stock.length > 0) {
        const stock = String(
          product.stock || ""
        ).toLowerCase();

        const matched = selected.stock.some(
          (item) =>
            stock.includes(
              String(item).toLowerCase()
            )
        );

        if (!matched) {
          return false;
        }
      }

      // =================================================
      // SIZE
      // =================================================

      if (selected.size.length > 0) {
        const size = String(
          product.size || ""
        ).toLowerCase();

        const matched = selected.size.some(
          (item) =>
            size.includes(
              String(item).toLowerCase()
            )
        );

        if (!matched) {
          return false;
        }
      }

      return true;
    }
  );

  // =====================================================
  // SHOW PRODUCTS
  // =====================================================

  const productsToShow =
    filteredProducts.slice(0, 24);

  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-[260px_1fr]">
      {/* FILTER */}
      <aside className="lg:sticky lg:top-4 lg:self-start">
        <ProductFilter
          price={price}
          setPrice={setPrice}
          openSections={openSections}
          setOpenSections={setOpenSections}
          selected={selected}
          setSelected={setSelected}
        />
      </aside>

      {/* PRODUCTS */}
      <div className="min-w-0">
        <ComponentProducts products={productsToShow} />
      </div>
    </div>
  );
}

