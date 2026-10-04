
"use client";

import { useMemo, useState } from "react";
import {
  useSearchParams,
  usePathname,
} from "next/navigation";

import productsData from "../../../../../api/productsData";

import GadgetHero from "../../../../../components/gadget/GadgetHero";
import GadgetNavbar from "../../../../../components/gadget/GadgetNavbar";
import GadgetFilter from "../../../../../components/gadget/GadgetFilter";
import GadgetProducts from "../../../../../components/gadget/GadgetProducts";
import Container from "../../../../../components/Container";

export default function GadgetPage() {
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const subcategory = searchParams.get("subcategory");

  // =========================================================
  // FILTER STATES
  // =========================================================

  const [price, setPrice] = useState(10000);

  const [selectedBrands, setSelectedBrands] = useState([]);

  const [selectedCategories, setSelectedCategories] =
    useState([]);

  const [selectedRating, setSelectedRating] =
    useState(null);

  // =========================================================
  // GET GADGET PRODUCTS FROM MAIN API
  // =========================================================

  const gadgetProducts = useMemo(() => {
    return productsData.filter(
      (product) =>
        product.category?.toLowerCase() === "gadget"
    );
  }, []);

  // =========================================================
  // FILTER PRODUCTS
  // =========================================================

  const filteredProducts = useMemo(() => {
    let result = [...gadgetProducts];

    // =======================================================
    // NAVBAR / URL FILTER
    // =======================================================

    if (subcategory) {
      const value = decodeURIComponent(subcategory)
        .trim()
        .toLowerCase();

      // Smart Watch = show all smart watches
      if (value === "smart watch") {
        result = result.filter((product) =>
          [
            "Apple Watch",
            "Samsung Watch",
            "Fitness Watch",
          ].includes(product.subcategory)
        );
      }

      // Smart Home = show all smart home products
      else if (value === "smart home") {
        result = result.filter((product) =>
          [
            "Smart Bulb",
            "Smart Plug",
          ].includes(product.subcategory)
        );
      }

      // Specific category
      else {
        result = result.filter(
          (product) =>
            product.subcategory?.toLowerCase() === value
        );
      }
    }

    // =======================================================
    // PRICE FILTER
    // =======================================================

    result = result.filter(
      (product) =>
        Number(product.price || 0) <=
        Number(price || 0)
    );

    // =======================================================
    // CATEGORY CHECKBOX FILTER
    // =======================================================

    if (selectedCategories.length > 0) {
      result = result.filter((product) =>
        selectedCategories.includes(
          product.subcategory
        )
      );
    }

    // =======================================================
    // BRAND FILTER
    // =======================================================

    if (selectedBrands.length > 0) {
      result = result.filter((product) => {
        const title =
          product.title?.toLowerCase() || "";

        return selectedBrands.some((brand) =>
          title.includes(brand.toLowerCase())
        );
      });
    }

    // =======================================================
    // RATING FILTER
    // =======================================================

    if (selectedRating) {
      result = result.filter(
        (product) =>
          Number(product.rating || 0) >=
          Number(selectedRating)
      );
    }

    return result;
  }, [
    gadgetProducts,
    subcategory,
    price,
    selectedCategories,
    selectedBrands,
    selectedRating,
  ]);

  // =========================================================
  // PAGE TITLE
  // =========================================================

  const pageTitle = useMemo(() => {
    // =======================================================
    // 1. QUERY PARAMETER
    //
    // GadgetNavbar uses:
    // /category/gadget?subcategory=Apple%20Watch
    // =======================================================

    if (subcategory) {
      const value = decodeURIComponent(subcategory)
        .trim()
        .toLowerCase();

      const titleMap = {
        "smart watch": "Smart Watch",
        "apple watch": "Apple Watch",
        "samsung watch": "Samsung Watch",
        "fitness watch": "Fitness Watch",

        earbuds: "Earbuds",
        "power bank": "Power Bank",

        "smart home": "Smart Home",
        "smart bulb": "Smart Bulb",
        "smart plug": "Smart Plug",

        "bluetooth speaker": "Bluetooth Speaker",
        "gaming controller": "Gaming Controller",
      };

      return titleMap[value] || "Gadget";
    }

    // =======================================================
    // 2. NESTED CATEGORY URL
    //
    // Main category dropdown uses:
    // /category/gadget/smart-watch/apple
    // =======================================================

    const path = pathname
      .replace(/\/$/, "")
      .toLowerCase();

    const pathTitleMap = {
      "/category/gadget": "Gadget",

      "/category/gadget/smart-watch":
        "Smart Watch",

      "/category/gadget/smart-watch/apple":
        "Apple Watch",

      "/category/gadget/smart-watch/samsung":
        "Samsung Watch",

      "/category/gadget/smart-watch/fitness":
        "Fitness Watch",

      "/category/gadget/earbuds":
        "Earbuds",

      "/category/gadget/power-bank":
        "Power Bank",

      "/category/gadget/smart-home":
        "Smart Home",

      "/category/gadget/smart-home/smart-bulb":
        "Smart Bulb",

      "/category/gadget/smart-home/smart-plug":
        "Smart Plug",
    };

    return pathTitleMap[path] || "Gadget";
  }, [subcategory, pathname]);

  // =========================================================
  // RETURN
  // =========================================================

  return (
    <>
      {/* =====================================================
          GADGET HERO
      ===================================================== */}

      <GadgetHero />

      {/* =====================================================
          GADGET NAVBAR
      ===================================================== */}

      <GadgetNavbar />

      {/* =====================================================
          MAIN GADGET SECTION
      ===================================================== */}

      <section className="bg-[#f2f4f8]">
        <Container>
             <div className="mx-auto bg-[#fff] px-4">

          {/* =================================================
              TITLE
          ================================================= */}

          <div className="py-6">
            <h1 className="text-2xl text-center font-bold text-gray-900">
              {pageTitle}
            </h1>

            <p className="mt-1 text-sm text-center text-gray-500">
              {filteredProducts.length} products found
            </p>
          </div>

          {/* =================================================
              FILTER + PRODUCTS
          ================================================= */}

          <div className="flex flex-col gap-6 lg:flex-row">

            {/* FILTER */}

            <GadgetFilter
              products={gadgetProducts}
              price={price}
              setPrice={setPrice}
              selectedBrands={selectedBrands}
              setSelectedBrands={setSelectedBrands}
              selectedCategories={selectedCategories}
              setSelectedCategories={
                setSelectedCategories
              }
              selectedRating={selectedRating}
              setSelectedRating={setSelectedRating}
            />

            {/* PRODUCTS */}

            <div className="min-w-0 flex-1">
              <GadgetProducts
                products={filteredProducts}
              />
            </div>

          </div>
        </div>
     </Container>
      </section>
    </>
  );
}

