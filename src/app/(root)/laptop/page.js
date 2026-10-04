"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

import LaptopHero from "../../../../components/laptop/LaptopHero";
import LaptopNavbar from "../../../../components/laptop/LaptopNavbar";
import LaptopProducts from "../../../../components/laptop/LaptopProducts";
import ProductFilter from "../../../../components/desktop/ProductFilter";

import productsData from "../../../../api/productsData";
import Container from "../../../../components/Container";

export default function LaptopPage() {
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
  // GET ALL LAPTOP PRODUCTS
  // --------------------------------
  const laptopProducts = productsData.filter((product) => {
    const category = String(product.category || "").toLowerCase();
    const subcategory = String(
      product.subcategory || ""
    ).toLowerCase();
    const categoryPath = String(
      product.categoryPath || ""
    ).toLowerCase();

    return (
      category.includes("laptop") ||
      subcategory.includes("laptop") ||
      categoryPath.includes("laptop")
    );
  });

  // --------------------------------
  // SUBCATEGORY FROM URL
  // --------------------------------
  const selectedSubcategory =
    searchParams.get("subcategory");

  // --------------------------------
  // APPLY ALL FILTERS
  // --------------------------------
  const filteredProducts = laptopProducts.filter((product) => {
    // -----------------------------
    // SUBCATEGORY
    // -----------------------------
    if (selectedSubcategory) {
      const productSubcategory = String(
        product.subcategory || ""
      ).toLowerCase();

      const productCategoryPath = String(
        product.categoryPath || ""
      ).toLowerCase();

      const wantedSubcategory =
        selectedSubcategory.toLowerCase();

      const matched =
        productSubcategory.includes(wantedSubcategory) ||
        productCategoryPath.includes(wantedSubcategory);

      if (!matched) {
        return false;
      }
    }

    // -----------------------------
    // PRICE
    // -----------------------------
    if (
      price !== null &&
      Number(product.price || 0) > Number(price)
    ) {
      return false;
    }

    // -----------------------------
    // PROCESSOR
    // -----------------------------
    if (selected.processor.length > 0) {
      const processor = String(
        product.processor || ""
      ).toLowerCase();

      const matched = selected.processor.some((item) =>
        processor.includes(
          String(item).toLowerCase()
        )
      );

      if (!matched) return false;
    }

    // -----------------------------
    // GENERATION
    // -----------------------------
    if (selected.generation.length > 0) {
      const generation = String(
        product.generation || ""
      ).toLowerCase();

      const matched = selected.generation.some((item) =>
        generation.includes(
          String(item).toLowerCase()
        )
      );

      if (!matched) return false;
    }

    // -----------------------------
    // RAM
    // -----------------------------
    if (selected.ram.length > 0) {
      const ram = String(
        product.ram || ""
      ).toLowerCase();

      const matched = selected.ram.some((item) =>
        ram.includes(
          String(item).toLowerCase()
        )
      );

      if (!matched) return false;
    }

    // -----------------------------
    // SSD
    // -----------------------------
    if (selected.ssd.length > 0) {
      const ssd = String(
        product.ssd || ""
      ).toLowerCase();

      const matched = selected.ssd.some((item) =>
        ssd.includes(
          String(item).toLowerCase()
        )
      );

      if (!matched) return false;
    }

    // -----------------------------
    // STOCK
    // -----------------------------
    if (selected.stock.length > 0) {
      const stock = String(
        product.stock || ""
      ).toLowerCase();

      const matched = selected.stock.some((item) =>
        stock.includes(
          String(item).toLowerCase()
        )
      );

      if (!matched) return false;
    }

    // -----------------------------
    // SIZE
    // -----------------------------
    if (selected.size.length > 0) {
      const size = String(
        product.size || ""
      ).toLowerCase();

      const matched = selected.size.some((item) =>
        size.includes(
          String(item).toLowerCase()
        )
      );

      if (!matched) return false;
    }

    return true;
  });

  // --------------------------------
  // MAX 24 PRODUCTS
  // --------------------------------
  const productsToShow = filteredProducts.slice(0, 24);

  return (
    <main className="bg-[#f2f4f8]">
      <Container>
         <div className="mx-auto bg-[#fff] px-4 py-6">

        {/* HERO */}
        <LaptopHero />

        {/* LAPTOP RELATED NAVBAR */}
        <LaptopNavbar />

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
              <h1 className="text-2xl text-center font-bold text-gray-900">
                {selectedSubcategory ||
                  "Laptop Products"}
              </h1>

              <p className="mt-1 text-sm text-gray-500 text-center">
                Showing {productsToShow.length} of{" "}
                {filteredProducts.length} products
              </p>
            </div>

            <LaptopProducts
              products={productsToShow}
            />

          </div>
        </div>
      </div>
     </Container>
    </main>
  );
}