"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";

import productsData from "../../../../../api/productsData";

import SecurityHero from "../../../../../components/security/SecurityHero";
import SecurityNavbar from "../../../../../components/security/SecurityNavbar";
import SecurityProductFilter from "../../../../../components/security/SecurityProductFilter";
import SecurityProducts from "../../../../../components/security/SecurityPeoducts";

export default function SecurityPage() {
  // =========================
  // URL CATEGORY
  // =========================
  const searchParams = useSearchParams();

  const selectedSubcategory =
    searchParams.get("subcategory") || "all";

  // =========================
  // FILTER STATE
  // =========================
  const [filters, setFilters] = useState({
    price: null,
    brand: [],
    rating: null,

    // Kept so the same filter
    // structure remains compatible.
    processor: [],
    ram: [],
    storage: [],
  });

  // =========================
  // ALL SECURITY PRODUCTS
  // =========================
  const securityProducts = productsData.filter(
    (product) =>
      String(product.category || "").toLowerCase() ===
      "security"
  );

  // =========================
  // SECURITY NAVBAR FILTER
  // =========================
  const categoryProducts =
    securityProducts.filter((product) => {
      // ALL SECURITY
      if (selectedSubcategory === "all") {
        return true;
      }

      // CCTV CAMERA
      // Show Dome + Bullet + IP
      if (
        selectedSubcategory.toLowerCase() ===
        "cctv camera"
      ) {
        return [
          "dome camera",
          "bullet camera",
          "ip camera",
        ].includes(
          String(
            product.subcategory || ""
          ).toLowerCase()
        );
      }

      // OTHER CATEGORIES
      return (
        String(
          product.subcategory || ""
        ).toLowerCase() ===
        selectedSubcategory.toLowerCase()
      );
    });

  // =========================
  // PRICE + BRAND + RATING
  // =========================
  const filteredProducts =
    categoryProducts.filter((product) => {

      // =========================
      // PRICE
      // =========================
      if (
        filters.price !== null &&
        Number(product.price || 0) >
          Number(filters.price)
      ) {
        return false;
      }

      // =========================
      // BRAND
      // =========================
      if (filters.brand.length > 0) {
        const productBrand =
          String(
            product.brand || ""
          ).toLowerCase();

        const matched =
          filters.brand.some(
            (brand) =>
              productBrand ===
              String(
                brand
              ).toLowerCase()
          );

        if (!matched) {
          return false;
        }
      }

      // =========================
      // RATING
      // =========================
      if (
        filters.rating !== null &&
        Number(product.rating || 0) <
          Number(filters.rating)
      ) {
        return false;
      }

      return true;
    });

  // =========================
  // TITLE
  // =========================
  const pageTitle =
    selectedSubcategory === "all"
      ? "Security Products"
      : selectedSubcategory;

  return (
    <>
      {/* =========================
          HERO
      ========================= */}
      <SecurityHero />

      {/* =========================
          SECURITY NAVBAR
      ========================= */}
      <SecurityNavbar />

      {/* =========================
          FILTER + PRODUCTS
      ========================= */}
      <section className="bg-white">
        <div className="mx-auto max-w-[1440px] px-4 py-6">

          <div className="flex items-start gap-6">

            {/* =========================
                LEFT FILTER
            ========================= */}
            <aside className="hidden w-[240px] shrink-0 lg:block">
              <SecurityProductFilter
                products={categoryProducts}
                filters={filters}
                setFilters={setFilters}
              />
            </aside>

            {/* =========================
                RIGHT PRODUCTS
            ========================= */}
            <main className="min-w-0 flex-1">

              <SecurityProducts
                products={filteredProducts}
                title={pageTitle}
              />

            </main>

          </div>

        </div>
      </section>
    </>
  );
}