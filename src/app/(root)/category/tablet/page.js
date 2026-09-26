"use client";

import { Suspense, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";

import productsData from "../../../../../api/productsData";

import TabletHero from "../../../../../components/tablet/TabletHero";
import TabletNavbar from "../../../../../components/tablet/TabletNavbar";
import ProductFilter from "../../../../../components/desktop/ProductFilter";
import TabletProducts from "../../../../../components/tablet/TabletProducts";

function TabletPageContent() {
  const searchParams = useSearchParams();

  const selectedSubcategory = searchParams.get("subcategory");

  const [price, setPrice] = useState(null);

  const [openSections, setOpenSections] = useState({
    processor: false,
    generation: false,
    ram: false,
    ssd: false,
    stock: false,
    size: false,
  });

  const [selected, setSelected] = useState({
    processor: [],
    generation: [],
    ram: [],
    ssd: [],
    stock: [],
    size: [],
  });

  // =========================
  // TABLET PRODUCTS
  // =========================
  const tabletProducts = useMemo(() => {
    return productsData.filter((product) => {
      const category = String(
        product.category || ""
      ).toLowerCase();

      const subcategory = String(
        product.subcategory || ""
      ).toLowerCase();

      const categoryPath = String(
        product.categoryPath || ""
      ).toLowerCase();

      return (
        category.includes("tablet") ||
        subcategory.includes("tablet") ||
        categoryPath.includes("tablet")
      );
    });
  }, []);

  // =========================
  // FILTER PRODUCTS
  // =========================
  const filteredProducts = useMemo(() => {
    return tabletProducts.filter((product) => {
      const subcategory = String(
        product.subcategory || ""
      ).toLowerCase();

      const type = String(
        product.type || ""
      ).toLowerCase();

      const brand = String(
        product.brand || ""
      ).toLowerCase();

      const series = String(
        product.series || ""
      ).toLowerCase();

      const categoryPath = String(
        product.categoryPath || ""
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

      const ssd = String(
        product.ssd || ""
      ).toLowerCase();

      const stock = Number(
        product.stock || 0
      );

      const size = String(
        product.size || ""
      ).toLowerCase();

      // =========================
      // PRICE
      // =========================
      if (
        price !== null &&
        Number(product.price || 0) > Number(price)
      ) {
        return false;
      }

      // =========================
      // SUBCATEGORY
      // =========================
      if (selectedSubcategory) {
        const wanted =
          selectedSubcategory.toLowerCase();

        if (wanted === "android tablet") {
          if (type !== "android tablet") {
            return false;
          }
        }

        else if (wanted === "ipad") {
          if (type !== "ipad") {
            return false;
          }
        }

        else if (wanted === "samsung tablet") {
          const matched =
            brand === "samsung" ||
            subcategory === "samsung tablet" ||
            categoryPath.includes("/samsung");

          if (!matched) {
            return false;
          }
        }

        else if (wanted === "xiaomi tablet") {
          const matched =
            brand === "xiaomi" ||
            subcategory === "xiaomi tablet" ||
            categoryPath.includes("/xiaomi");

          if (!matched) {
            return false;
          }
        }

        else if (wanted === "lenovo tablet") {
          const matched =
            brand === "lenovo" ||
            subcategory === "lenovo tablet" ||
            categoryPath.includes("/lenovo");

          if (!matched) {
            return false;
          }
        }

        else if (wanted === "ipad air") {
          const matched =
            series === "ipad air" ||
            categoryPath.includes("/air") ||
            title.includes("ipad air");

          if (!matched) {
            return false;
          }
        }

        else if (wanted === "ipad pro") {
          const matched =
            series === "ipad pro" ||
            categoryPath.includes("/pro") ||
            title.includes("ipad pro");

          if (!matched) {
            return false;
          }
        }

        else if (wanted === "ipad mini") {
          const matched =
            series === "ipad mini" ||
            categoryPath.includes("/mini") ||
            title.includes("ipad mini");

          if (!matched) {
            return false;
          }
        }

        else if (wanted === "tablet accessories") {
          const matched =
            subcategory === "tablet accessories" ||
            categoryPath.includes("accessories");

          if (!matched) {
            return false;
          }
        }
      }

      // =========================
      // PROCESSOR
      // =========================
      if (selected.processor.length > 0) {
        const matched = selected.processor.some(
          (item) =>
            processor.includes(
              item.toLowerCase()
            )
        );

        if (!matched) {
          return false;
        }
      }

      // =========================
      // GENERATION
      // =========================
      if (selected.generation.length > 0) {
        const matched = selected.generation.some(
          (item) =>
            generation.includes(
              item.toLowerCase()
            )
        );

        if (!matched) {
          return false;
        }
      }

      // =========================
      // RAM
      // =========================
      if (selected.ram.length > 0) {
        const matched = selected.ram.some(
          (item) =>
            ram === item.toLowerCase()
        );

        if (!matched) {
          return false;
        }
      }

      // =========================
      // SSD
      // =========================
      if (selected.ssd.length > 0) {
        const matched = selected.ssd.some(
          (item) =>
            ssd === item.toLowerCase()
        );

        if (!matched) {
          return false;
        }
      }

      // =========================
      // STOCK
      // =========================
      if (selected.stock.length > 0) {
        const hasStock = stock > 0;

        const matched = selected.stock.some(
          (item) => {
            if (item === "In Stock") {
              return hasStock;
            }

            if (item === "Out of Stock") {
              return !hasStock;
            }

            return false;
          }
        );

        if (!matched) {
          return false;
        }
      }

      // =========================
      // SIZE
      // =========================
      if (selected.size.length > 0) {
        const matched = selected.size.some(
          (item) =>
            size.includes(
              item.toLowerCase()
            )
        );

        if (!matched) {
          return false;
        }
      }

      return true;
    });
  }, [
    tabletProducts,
    selectedSubcategory,
    price,
    selected,
  ]);

  // =========================
  // SHOW PRODUCTS
  // =========================
  const productsToShow =
    filteredProducts.slice(0, 24);

  return (
    <div className="w-full">

      {/* =========================
          SAME WIDTH AS MAIN NAVBAR
          ========================= */}
      <div className="mx-auto w-full max-w-[1400px] px-3">

        {/* =========================
            HERO
            ========================= */}
        <TabletHero />

        {/* =========================
            TABLET NAVBAR
            ========================= */}
        <TabletNavbar />

        {/* =========================
            FILTER + PRODUCTS
            ========================= */}
        <div className="flex w-full flex-col lg:flex-row">

          {/* FILTER */}
          <aside className="w-full shrink-0 lg:w-64">
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
          <main className="min-w-0 flex-1">
           <TabletProducts
  products={productsToShow}
  title={selectedSubcategory || "Tablet Products"}
/>
          </main>

        </div>
      </div>
    </div>
  );
}

export default function TabletPage() {
  return (
    <Suspense
      fallback={
        <div className="py-20 text-center text-gray-500">
          Loading tablets...
        </div>
      }
    >
      <TabletPageContent />
    </Suspense>
  );
}