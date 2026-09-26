"use client";

import { Suspense, useMemo } from "react";
import { useSearchParams } from "next/navigation";

import productsData from "../../../../../api/productsData";

import SoftwareHero from "../../../../../components/software/SoftwareHero";
import SoftwareNavbar from "../../../../../components/software/SoftwareNavbar";
import SoftwareProductFilter from "../../../../../components/software/SoftwareProductFilter";
import SoftwareProducts from "../../../../../components/software/SoftwareProducts";

function SoftwareContent() {
  const searchParams = useSearchParams();

  // =========================================================
  // SUBCATEGORY
  // =========================================================

  const subcategory =
    searchParams.get("subcategory") || "";

  // =========================================================
  // OTHER FILTERS
  // =========================================================

  const selectedBrands =
    searchParams.get("brand")
      ? searchParams.get("brand").split(",")
      : [];

  const selectedCategories =
    searchParams.get("category")
      ? searchParams.get("category").split(",")
      : [];

  const selectedSizes =
    searchParams.get("size")
      ? searchParams.get("size").split(",")
      : [];

  const selectedRam =
    searchParams.get("ram")
      ? searchParams.get("ram").split(",")
      : [];

  const selectedSsd =
    searchParams.get("ssd")
      ? searchParams.get("ssd").split(",")
      : [];

  const selectedProcessors =
    searchParams.get("processor")
      ? searchParams.get("processor").split(",")
      : [];

  // =========================================================
  // DEFAULT PRICE = 10,000
  // =========================================================

  const maxPrice =
    Number(searchParams.get("maxPrice")) || 10000;

  // =========================================================
  // ALL SOFTWARE PRODUCTS
  // =========================================================

  const softwareProducts = useMemo(() => {
    return productsData.filter(
      (product) =>
        product.category?.toLowerCase() ===
        "software"
    );
  }, []);

  // =========================================================
  // NAVBAR FILTER
  // =========================================================

  const navbarProducts = useMemo(() => {

    // ALL SOFTWARE
    if (!subcategory) {
      return softwareProducts;
    }

    return softwareProducts.filter(
      (product) =>
        product.subcategory
          ?.toLowerCase() ===
        subcategory.toLowerCase()
    );

  }, [
    softwareProducts,
    subcategory,
  ]);

  // =========================================================
  // ALL FILTERS
  // =========================================================

  const filteredProducts = useMemo(() => {

    return navbarProducts.filter(
      (product) => {

        // BRAND
        const matchesBrand =
          selectedBrands.length === 0 ||
          selectedBrands.includes(
            product.brand
          );

        // CATEGORY
        const matchesCategory =
          selectedCategories.length === 0 ||
          selectedCategories.includes(
            product.subcategory
          );

        // SIZE
        const matchesSize =
          selectedSizes.length === 0 ||
          selectedSizes.includes(
            product.size
          );

        // RAM
        const matchesRam =
          selectedRam.length === 0 ||
          selectedRam.includes(
            product.ram
          );

        // SSD
        const matchesSsd =
          selectedSsd.length === 0 ||
          selectedSsd.includes(
            product.ssd
          );

        // PROCESSOR
        const matchesProcessor =
          selectedProcessors.length === 0 ||
          selectedProcessors.includes(
            product.processor
          );

        // PRICE
        const productPrice =
          Number(product.price || 0);

        const matchesPrice =
          productPrice <= maxPrice;

        return (
          matchesBrand &&
          matchesCategory &&
          matchesSize &&
          matchesRam &&
          matchesSsd &&
          matchesProcessor &&
          matchesPrice
        );
      }
    );

  }, [
    navbarProducts,
    selectedBrands,
    selectedCategories,
    selectedSizes,
    selectedRam,
    selectedSsd,
    selectedProcessors,
    maxPrice,
  ]);

  // =========================================================
  // TITLE
  // =========================================================

  const titleMap = {
    "operating system":
      "Operating System",

    windows:
      "Windows",

    "windows server":
      "Windows Server",

    "office software":
      "Office Software",

    "microsoft office":
      "Microsoft Office",

    "microsoft 365":
      "Microsoft 365",

    antivirus:
      "Antivirus",

    "design software":
      "Design Software",

    "security software":
      "Security Software",

    "development software":
      "Development Software",
  };

  const title =
    titleMap[
      subcategory.toLowerCase()
    ] || "Software";

  // =========================================================
  // RETURN
  // =========================================================

  return (
    <>
      {/* HERO */}

      <SoftwareHero />

      {/* SOFTWARE NAVBAR */}

      <SoftwareNavbar />

      {/* CONTENT */}

      <section className="bg-white">

        <div className="mx-auto max-w-[1400px] px-4">

          <div className="grid grid-cols-1 gap-6 py-6 lg:grid-cols-[250px_1fr]">

            {/* FILTER */}

            <aside>
              <SoftwareProductFilter
                products={softwareProducts}
              />
            </aside>

            {/* PRODUCTS */}

            <main>
              <SoftwareProducts
                products={filteredProducts}
                title={title}
              />
            </main>

          </div>

        </div>

      </section>
    </>
  );
}

// =========================================================
// PAGE
// =========================================================

export default function SoftwarePage() {
  return (
    <Suspense
      fallback={
        <div className="py-20 text-center">
          Loading Software...
        </div>
      }
    >
      <SoftwareContent />
    </Suspense>
  );
}