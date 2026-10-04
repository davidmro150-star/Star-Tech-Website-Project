"use client";

import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";




import productsData from "../../../../../api/productsData";
import ProductFilter from "../../../../../components/desktop/ProductFilter";
import PowerHero from "../../../../../components/power/PowerHero";
import PowerNavbar from "../../../../../components/power/PowerNavbar";
import PowerProducts from "../../../../../components/power/PowerProducts";
import Container from "../../../../../components/Container";



function PowerPageContent() {
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
  // GET ALL POWER PRODUCTS
  // ============================================
  const powerProducts = productsData.filter(
    (product) =>
      String(product.category || "").toLowerCase() === "power"
  );

  // ============================================
  // SELECTED SUBCATEGORY
  // ============================================
  const selectedSubcategory =
    searchParams.get("subcategory");

  // ============================================
  // FILTER PRODUCTS
  // ============================================
  const filteredProducts = powerProducts.filter((product) => {
    const subcategory = String(
      product.subcategory || ""
    ).toLowerCase();

    const categoryPath = String(
      product.categoryPath || ""
    ).toLowerCase();

    const title = String(
      product.title || ""
    ).toLowerCase();

    const subtitle = String(
      product.subtitle || ""
    ).toLowerCase();

    const description = String(
      product.description || ""
    ).toLowerCase();

    const information = String(
      product.information || ""
    ).toLowerCase();

    const size = String(
      product.size || ""
    ).toLowerCase();

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

      // ----------------------------
      // UPS
      // ----------------------------
      if (wanted === "ups") {
        matched =
          subcategory === "ups" ||
          categoryPath.includes("power/ups");
      }

      // ----------------------------
      // 650VA UPS
      // ----------------------------
      else if (wanted === "650va ups") {
        matched = searchableText.includes("650va");
      }

      // ----------------------------
      // 850VA UPS
      // ----------------------------
      else if (wanted === "850va ups") {
        matched = searchableText.includes("850va");
      }

      // ----------------------------
      // 1200VA UPS
      // ----------------------------
      else if (wanted === "1200va ups") {
        matched = searchableText.includes("1200va");
      }

      // ----------------------------
      // IPS
      // ----------------------------
      else if (wanted === "ips") {
        matched =
          subcategory === "ips" ||
          categoryPath.includes("power/ips");
      }

      // ----------------------------
      // POWER SUPPLY
      // ----------------------------
      else if (wanted === "power supply") {
        matched =
          subcategory === "power supply" ||
          categoryPath.includes("power/power-supply");
      }

      // ----------------------------
      // 550W
      // ----------------------------
      else if (wanted === "550w") {
        matched = searchableText.includes("550w");
      }

      // ----------------------------
      // 650W
      // ----------------------------
      else if (wanted === "650w") {
        matched = searchableText.includes("650w");
      }

      // ----------------------------
      // 850W
      // ----------------------------
      else if (wanted === "850w") {
        matched = searchableText.includes("850w");
      }

      // ----------------------------
      // POWER STRIP
      // ----------------------------
      else if (wanted === "power strip") {
        matched =
          subcategory === "power strip" ||
          categoryPath.includes("power/power-strip") ||
          searchableText.includes("power strip");
      }

      // ----------------------------
      // FALLBACK
      // ----------------------------
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
        {/* HERO */}
        <PowerHero />

        {/* CATEGORY NAVBAR */}
        <PowerNavbar />

        {/* FILTER + PRODUCTS */}
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
            {/* TITLE */}
            <div className="mb-5">
              <h1 className="text-center text-2xl font-bold text-gray-900">
                {selectedSubcategory || "Power Products"}
              </h1>

              <p className="mt-1 text-center text-sm text-gray-500">
                Showing {productsToShow.length} of{" "}
                {filteredProducts.length} products
              </p>
            </div>

            {/* PRODUCTS */}
            <PowerProducts products={productsToShow} />
          </div>
        </div>
      </div>
    </Container>
    </main>
  );
}

export default function PowerPage() {
  return (
    <Suspense
      fallback={
        <main className="min-h-screen bg-gray-50">
          <div className="mx-auto max-w-7xl px-4 py-10">
            <p className="text-center text-gray-500">
              Loading power products...
            </p>
          </div>
        </main>
      }
    >
      <PowerPageContent />
    </Suspense>
  );
}