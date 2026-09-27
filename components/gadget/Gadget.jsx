"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";

import GadgetHero from "./GadgetHero";
import GadgetNavbar from "./GadgetNavbar";
import GadgetFilter from "./GadgetFilter";
import GadgetProducts from "./GadgetProducts";

export default function Gadget({ products = [] }) {
  const searchParams = useSearchParams();

  const subcategory = searchParams.get("subcategory");

  // =========================================================
  // FILTER STATES
  // =========================================================

  const [price, setPrice] = useState(50000);

  const [selectedBrands, setSelectedBrands] = useState([]);

  const [selectedCategories, setSelectedCategories] =
    useState([]);

  const [selectedRating, setSelectedRating] =
    useState(null);

  // =========================================================
  // BASE GADGET PRODUCTS
  // =========================================================

  const gadgetProducts = useMemo(() => {
    return products.filter(
      (product) =>
        product.category?.toLowerCase() ===
        "gadget"
    );
  }, [products]);

  // =========================================================
  // FILTER PRODUCTS
  // =========================================================

  const filteredProducts = useMemo(() => {
    let result = [...gadgetProducts];

    // ---------------------------------------------
    // URL SUBCATEGORY
    // ---------------------------------------------

    if (subcategory) {
      const value = decodeURIComponent(subcategory)
        .trim()
        .toLowerCase();

      if (value === "smart watch") {
        result = result.filter((product) =>
          [
            "Apple Watch",
            "Samsung Watch",
            "Fitness Watch",
          ].includes(product.subcategory)
        );
      } else if (value === "smart home") {
        result = result.filter((product) =>
          [
            "Smart Bulb",
            "Smart Plug",
          ].includes(product.subcategory)
        );
      } else {
        result = result.filter(
          (product) =>
            product.subcategory?.toLowerCase() ===
            value
        );
      }
    }

    // ---------------------------------------------
    // PRICE
    // ---------------------------------------------

    result = result.filter(
      (product) =>
        Number(product.price || 0) <= Number(price || 0)
    );

    // ---------------------------------------------
    // CATEGORY CHECKBOX
    // ---------------------------------------------

    if (selectedCategories.length > 0) {
      result = result.filter((product) =>
        selectedCategories.includes(
          product.subcategory
        )
      );
    }

    // ---------------------------------------------
    // BRAND
    // ---------------------------------------------

    if (selectedBrands.length > 0) {
      result = result.filter((product) => {
        const title =
          product.title?.toLowerCase() || "";

        return selectedBrands.some((brand) =>
          title.includes(brand.toLowerCase())
        );
      });
    }

    // ---------------------------------------------
    // RATING
    // ---------------------------------------------

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
    selectedBrands,
    selectedCategories,
    selectedRating,
  ]);

  // =========================================================
  // TITLE
  // =========================================================

  const pageTitle = useMemo(() => {
    if (!subcategory) {
      return "Gadget";
    }

    const value = decodeURIComponent(subcategory);

    if (value === "Smart Watch") {
      return "Smart Watch";
    }

    if (value === "Smart Home") {
      return "Smart Home";
    }

    return value;
  }, [subcategory]);

  return (
    <>
      {/* HERO */}
      <GadgetHero />

      {/* CATEGORY NAVBAR */}
      <GadgetNavbar />

      {/* MAIN */}
      <section className="bg-gray-50">
        <div className="mx-auto max-w-[1400px] px-4">

          {/* TITLE */}
          <div className="py-6">
            <h2 className="text-2xl font-bold text-gray-900">
              {pageTitle}
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              {filteredProducts.length} products found
            </p>
          </div>

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
                products={filteredProducts.slice(0, 24)}
              />
            </div>

          </div>
        </div>
      </section>
    </>
  );
}