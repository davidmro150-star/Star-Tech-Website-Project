"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";


import ComponentProducts from "../../../../components/component/ComponentProducts";
import ProductFilter from "../../../../components/desktop/ProductFilter";
import productsData from "../../../../api/productsData";
import ComponentHero from "../../../../components/component/componentHero";
import ComponentNavbar from "../../../../components/component/Navbar";



export default function ComponentPage() {

  
  const searchParams = useSearchParams();

  const [price, setPrice] = useState(null);

  const [openSections, setOpenSections] = useState({
    processor: true,
    generation: true,
    ram: true,
    ssd: true,
    stock: true,
    size: true,
  });

  const [selected, setSelected] = useState({
    processor: [],
    generation: [],
    ram: [],
    ssd: [],
    stock: [],
    size: [],
  });

  // --------------------------------
  // READ FILTERS FROM URL
  // --------------------------------
  useEffect(() => {
    const processor = searchParams.get("processor");
    const generation = searchParams.get("generation");
    const ram = searchParams.get("ram");
    const ssd = searchParams.get("ssd");
    const stock = searchParams.get("stock");
    const size = searchParams.get("size");

    setSelected({
      processor: processor ? [processor] : [],
      generation: generation ? [generation] : [],
      ram: ram ? [ram] : [],
      ssd: ssd ? [ssd] : [],
      stock: stock ? [stock] : [],
      size: size ? [size] : [],
    });

    const urlPrice = searchParams.get("price");

    setPrice(urlPrice ? Number(urlPrice) : null);
  }, [searchParams]);

  // --------------------------------
  // GET ALL COMPONENT PRODUCTS
  // --------------------------------
  const componentProducts = productsData.filter(
    (product) =>
      String(product.category || "").toLowerCase() ===
      "components"
  );

  // --------------------------------
  // SUBCATEGORY FROM URL
  // --------------------------------
  const selectedSubcategory =
    searchParams.get("subcategory");

  // --------------------------------
  // APPLY ALL FILTERS
  // --------------------------------
  const filteredProducts = componentProducts.filter(
    (product) => {
      const subcategory = String(
        product.subcategory || ""
      ).toLowerCase();

      const title = String(
        product.title || ""
      ).toLowerCase();

      const processor = String(
        product.processor || ""
      ).toLowerCase();

      const generation = String(
        product.generation || ""
      ).toLowerCase();

      const ram = String(
        product.ram || ""
      ).toLowerCase();

      const type = String(
        product.type || ""
      ).toLowerCase();

      const graphics = String(
        product.graphics || ""
      ).toLowerCase();

      const ssd = String(
        product.ssd || ""
      ).toLowerCase();

      const stock = String(
        product.stock || ""
      ).toLowerCase();

      const size = String(
        product.size || ""
      ).toLowerCase();

      // ============================================
      // COMPONENT NAVBAR SUBCATEGORY
      // ============================================
      if (selectedSubcategory) {
        const wanted =
          selectedSubcategory.toLowerCase();

        let matched = false;

        // --------------------------------
        // PROCESSOR
        // --------------------------------
        if (
          wanted === "processor" ||
          wanted === "cpu"
        ) {
          matched = subcategory === "cpu";
        }

        // --------------------------------
        // INTEL CPU
        // --------------------------------
        else if (wanted === "intel") {
          matched =
            subcategory === "cpu" &&
            (
              processor.includes("intel") ||
              title.includes("intel")
            );
        }

        // --------------------------------
        // AMD RYZEN CPU
        // --------------------------------
        else if (
          wanted === "amd ryzen" ||
          wanted === "amd"
        ) {
          matched =
            subcategory === "cpu" &&
            (
              processor.includes("amd") ||
              processor.includes("ryzen") ||
              title.includes("amd") ||
              title.includes("ryzen")
            );
        }

        // --------------------------------
        // MOTHERBOARD
        // --------------------------------
        else if (
          wanted === "motherboard"
        ) {
          matched =
            subcategory === "motherboard";
        }

        // --------------------------------
        // INTEL MOTHERBOARD
        // --------------------------------
        else if (
          wanted === "intel motherboard"
        ) {
          matched =
            subcategory === "motherboard" &&
            (
              title.includes("intel") ||
              title.includes("lga") ||
              String(product.socket || "")
                .toLowerCase()
                .includes("lga")
            );
        }

        // --------------------------------
        // AMD MOTHERBOARD
        // --------------------------------
        else if (
          wanted === "amd motherboard"
        ) {
          const socket = String(
            product.socket || ""
          ).toLowerCase();

          matched =
            subcategory === "motherboard" &&
            (
              title.includes("amd") ||
              title.includes("b650") ||
              socket.includes("am4") ||
              socket.includes("am5")
            );
        }

        // --------------------------------
        // RAM
        // --------------------------------
        else if (wanted === "ram") {
          matched =
            subcategory === "ram";
        }

        // --------------------------------
        // DDR4 RAM
        // --------------------------------
        else if (wanted === "ddr4 ram") {
          matched =
            subcategory === "ram" &&
            (
              type.includes("ddr4") ||
              title.includes("ddr4")
            );
        }

        // --------------------------------
        // DDR5 RAM
        // --------------------------------
        else if (wanted === "ddr5 ram") {
          matched =
            subcategory === "ram" &&
            (
              type.includes("ddr5") ||
              title.includes("ddr5")
            );
        }

        // --------------------------------
        // GRAPHICS CARD
        // --------------------------------
        else if (
          wanted === "graphics card"
        ) {
          matched =
            subcategory === "graphics card";
        }

        // --------------------------------
        // NVIDIA
        // --------------------------------
        else if (wanted === "nvidia") {
          matched =
            subcategory === "graphics card" &&
            (
              graphics.includes("nvidia") ||
              graphics.includes("geforce") ||
              title.includes("nvidia") ||
              title.includes("geforce") ||
              title.includes("rtx") ||
              title.includes("gtx")
            );
        }

        // --------------------------------
        // AMD RADEON
        // --------------------------------
        else if (
          wanted === "amd radeon"
        ) {
          matched =
            subcategory === "graphics card" &&
            (
              graphics.includes("amd") ||
              graphics.includes("radeon") ||
              title.includes("amd") ||
              title.includes("radeon") ||
              title.includes("rx")
            );
        }

        // --------------------------------
        // STORAGE
        // --------------------------------
        else if (wanted === "storage") {
          matched =
            subcategory === "ssd" ||
            subcategory === "hdd";
        }

        // --------------------------------
        // SSD
        // --------------------------------
        else if (wanted === "ssd") {
          matched =
            subcategory === "ssd";
        }

        // --------------------------------
        // HDD
        // --------------------------------
        else if (wanted === "hdd") {
          matched =
            subcategory === "hdd";
        }

        // --------------------------------
        // EXTERNAL STORAGE
        // --------------------------------
        else if (
          wanted === "external storage"
        ) {
          matched =
            subcategory === "ssd" &&
            (
              title.includes("external") ||
              type.includes("external") ||
              ssd.includes("external")
            );
        }

        // --------------------------------
        // POWER SUPPLY
        // --------------------------------
        else if (
          wanted === "power supply"
        ) {
          matched =
            subcategory === "power supply";
        }

        // --------------------------------
        // PC CASING
        // --------------------------------
        else if (
          wanted === "pc casing" ||
          wanted === "pc case"
        ) {
          matched =
            subcategory === "pc case";
        }

        // --------------------------------
        // FALLBACK
        // --------------------------------
        else {
          matched =
            subcategory.includes(wanted);
        }

        if (!matched) {
          return false;
        }
      }

      // ============================================
      // PRICE
      // ============================================
      if (
        price !== null &&
        Number(product.price || 0) >
          Number(price)
      ) {
        return false;
      }

      // ============================================
      // PROCESSOR FILTER
      // ============================================
      if (selected.processor.length > 0) {
        const matched =
          selected.processor.some((item) =>
            processor.includes(
              String(item).toLowerCase()
            )
          );

        if (!matched) return false;
      }

      // ============================================
      // GENERATION FILTER
      // ============================================
      if (selected.generation.length > 0) {
        const matched =
          selected.generation.some((item) =>
            generation.includes(
              String(item).toLowerCase()
            )
          );

        if (!matched) return false;
      }

      // ============================================
      // RAM FILTER
      // ============================================
      if (selected.ram.length > 0) {
        const matched =
          selected.ram.some((item) =>
            ram.includes(
              String(item).toLowerCase()
            )
          );

        if (!matched) return false;
      }

      // ============================================
      // SSD FILTER
      // ============================================
      if (selected.ssd.length > 0) {
        const matched =
          selected.ssd.some((item) =>
            ssd.includes(
              String(item).toLowerCase()
            )
          );

        if (!matched) return false;
      }

      // ============================================
      // STOCK FILTER
      // ============================================
      if (selected.stock.length > 0) {
        const matched =
          selected.stock.some((item) =>
            stock.includes(
              String(item).toLowerCase()
            )
          );

        if (!matched) return false;
      }

      // ============================================
      // SIZE FILTER
      // ============================================
      if (selected.size.length > 0) {
        const matched =
          selected.size.some((item) =>
            size.includes(
              String(item).toLowerCase()
            )
          );

        if (!matched) return false;
      }

      return true;
    }
  );

  // --------------------------------
  // MAX 24 PRODUCTS
  // --------------------------------
  const productsToShow =
    filteredProducts.slice(0, 24);

  return (
    <main className="bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 py-6">

        {/* HERO */}
        <ComponentHero />

        {/* COMPONENT RELATED NAVBAR */}
        <ComponentNavbar />

        {/* FILTER + PRODUCTS */}
        <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-[260px_1fr]">

          {/* LEFT FILTER */}
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

          {/* RIGHT PRODUCTS */}
          <div className="min-w-0">

            {/* RESULT TITLE */}
            <div className="mb-5">
              <h1 className="text-center text-2xl font-bold text-gray-900">
                {selectedSubcategory ||
                  "Component Products"}
              </h1>

              <p className="mt-1 text-center text-sm text-gray-500">
                Showing {productsToShow.length} of{" "}
                {filteredProducts.length} products
              </p>
            </div>

            <ComponentProducts
              products={productsToShow}
            />

          </div>
        </div>
      </div>
    </main>
  );
}