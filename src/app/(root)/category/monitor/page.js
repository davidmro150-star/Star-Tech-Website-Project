"use client";

import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

import MonitorHero from "../../../../../components/monitor/MonitorHero";
import MonitorNavbar from "../../../../../components/monitor/MonitorNavbar";
import MonitorProducts from "../../../../../components/monitor/MonitorProducts";
import ProductFilter from "../../../../../components/desktop/ProductFilter";

import productsData from "../../../../../api/productsData";
import Container from "../../../../../components/Container";

function MonitorPageContent() {
  const searchParams = useSearchParams();

  const [price, setPrice] = useState(null);

  const [openSections, setOpenSections] = useState({
    processor: false,
    generation: false,
    ram: false,
    ssd: false,
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

  // ============================================
  // READ FILTERS FROM URL
  // ============================================
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

  // ============================================
  // GET ALL MONITOR PRODUCTS
  // ============================================
  const monitorProducts = productsData.filter(
    (product) =>
      String(product.category || "").toLowerCase() === "monitor"
  );

  // ============================================
  // SELECTED SUBCATEGORY
  // ============================================
  const selectedSubcategory =
    searchParams.get("subcategory");

  // ============================================
  // FILTER PRODUCTS
  // ============================================
  const filteredProducts = monitorProducts.filter((product) => {
    const subcategory = String(
      product.subcategory || ""
    ).toLowerCase();

    const categoryPath = String(
      product.categoryPath || ""
    ).toLowerCase();

    const title = String(product.title || "").toLowerCase();

    const subtitle = String(
      product.subtitle || ""
    ).toLowerCase();

    const description = String(
      product.description || ""
    ).toLowerCase();

    const information = String(
      product.information || ""
    ).toLowerCase();

    const size = String(product.size || "").toLowerCase();

    const stock = Number(product.stock || 0);

    // ============================================
    // SUBCATEGORY
    // ============================================
    if (selectedSubcategory) {
      const wanted = selectedSubcategory.toLowerCase();

      const searchableText = `
        ${subcategory}
        ${categoryPath}
        ${title}
        ${subtitle}
        ${description}
        ${information}
      `.toLowerCase();

      let matched = false;

      if (wanted === "gaming monitor") {
        matched =
          subcategory === "gaming monitor" ||
          categoryPath.includes("monitor/gaming-monitor");
      }

      else if (wanted === "144hz monitor") {
        matched = searchableText.includes("144hz");
      }

      else if (wanted === "165hz monitor") {
        matched = searchableText.includes("165hz");
      }

      else if (wanted === "240hz monitor") {
        matched = searchableText.includes("240hz");
      }

      else if (wanted === "professional monitor") {
        matched =
          subcategory === "professional monitor" ||
          categoryPath.includes("monitor/professional");
      }

      else if (wanted === "4k monitor") {
        matched = searchableText.includes("4k");
      }

      else if (wanted === "color accurate") {
        matched =
          searchableText.includes("color") &&
          searchableText.includes("accurate");
      }

      else if (wanted === "curved monitor") {
        matched = searchableText.includes("curved");
      }

      else if (wanted === "portable monitor") {
        matched = searchableText.includes("portable");
      }

      else {
        matched = searchableText.includes(wanted);
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
      Number(product.price || 0) > Number(price)
    ) {
      return false;
    }

    // ============================================
    // STOCK
    // ============================================
    if (selected.stock.length > 0) {
      const wantedStock = selected.stock
        .join(" ")
        .toLowerCase();

      if (
        wantedStock.includes("in stock") &&
        stock <= 0
      ) {
        return false;
      }

      if (
        wantedStock.includes("out of stock") &&
        stock > 0
      ) {
        return false;
      }
    }

    // ============================================
    // SIZE
    // ============================================
    if (selected.size.length > 0) {
      const matched = selected.size.some((item) =>
        size.includes(String(item).toLowerCase())
      );

      if (!matched) {
        return false;
      }
    }

    return true;
  });

  const productsToShow = filteredProducts.slice(0, 24);

  return (
    <main className="bg-[#f2f4f8]">
      <Container>
         <div className="mx-auto bg-[#fff] px-4 py-6">

        <MonitorHero />

        <MonitorNavbar />

        <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-[260px_1fr]">

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

          <div className="min-w-0">

            <div className="mb-5">
              <h1 className="text-center text-2xl font-bold text-gray-900">
                {selectedSubcategory || "Monitor Products"}
              </h1>

              <p className="mt-1 text-center text-sm text-gray-500">
                Showing {productsToShow.length} of{" "}
                {filteredProducts.length} products
              </p>
            </div>

            <MonitorProducts products={productsToShow} />

          </div>
        </div>
      </div>
     </Container>
    </main>
  );
}

export default function MonitorPage() {
  return (
    <Suspense
      fallback={
        <main className="min-h-screen bg-gray-50">
          <div className="mx-auto max-w-7xl px-4 py-10">
            <p className="text-center text-gray-500">
              Loading monitor products...
            </p>
          </div>
        </main>
      }
    >
      <MonitorPageContent />
    </Suspense>
  );
}