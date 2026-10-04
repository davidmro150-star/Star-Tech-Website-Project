
"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import productsData from "../../../../../api/productsData";
import ApplianceHero from "../../../../../components/appliance/applianceHero";
import ApplianceNavbar from "../../../../../components/appliance/ApplianceNavbar";
import ApplianceFilter from "../../../../../components/appliance/ApplianceFilter";
import ApplianceProducts from "../../../../../components/appliance/ApplianceProducts";
import Container from "../../../../../components/Container";



export default function AppliancePage() {
  const searchParams = useSearchParams();

  // =========================================================
  // SELECTED SUBCATEGORY
  // =========================================================
  const selectedSubcategory =
    searchParams.get("subcategory");

  // =========================================================
  // GET ALL APPLIANCE PRODUCTS
  // =========================================================
  const applianceProducts = useMemo(() => {
    return productsData.filter(
      (product) => product.category === "Appliance"
    );
  }, []);

  // =========================================================
  // FILTER STATES
  // =========================================================
  const [price, setPrice] = useState(15000);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedRating, setSelectedRating] = useState(null);

  // =========================================================
  // FILTER PRODUCTS
  // =========================================================
  const filteredProducts = useMemo(() => {
    return applianceProducts.filter((product) => {
      // -----------------------------------------------------
      // SUBCATEGORY / CHILD CATEGORY
      // -----------------------------------------------------
      if (selectedSubcategory) {
        const parentMatch =
          product.subcategory?.toLowerCase() ===
          selectedSubcategory.toLowerCase();

        const childMatch =
          product.childCategory?.toLowerCase() ===
          selectedSubcategory.toLowerCase();

        if (!parentMatch && !childMatch) {
          return false;
        }
      }

      // -----------------------------------------------------
      // PRICE
      // -----------------------------------------------------
      if (Number(product.price) > Number(price)) {
        return false;
      }

      // -----------------------------------------------------
      // BRAND
      // -----------------------------------------------------
      if (
        selectedBrands.length > 0 &&
        !selectedBrands.includes(product.brand)
      ) {
        return false;
      }

      // -----------------------------------------------------
      // RATING
      // -----------------------------------------------------
      if (
        selectedRating !== null &&
        Number(product.rating) < Number(selectedRating)
      ) {
        return false;
      }

      return true;
    });
  }, [
    applianceProducts,
    selectedSubcategory,
    price,
    selectedBrands,
    selectedRating,
  ]);

  // =========================================================
  // PAGE TITLE
  // =========================================================
  const title = selectedSubcategory
    ? selectedSubcategory
    : "Appliance Products";

  return (
    <main className="w-full">
      {/* =====================================================
          HERO
      ===================================================== */}
      <ApplianceHero />

      {/* =====================================================
          NAVBAR
      ===================================================== */}
      <ApplianceNavbar />

      {/* =====================================================
          PRODUCTS SECTION
      ===================================================== */}
      <section className="w-full bg-[#f2f4f8]">
        <Container>
             <div className="mx-auto bg-[#fff] px-4 py-8 md:px-6 lg:px-8">

          {/* =================================================
              TITLE
          ================================================= */}
          <div className="mb-8 text-center">
            <h1 className="text-2xl font-semibold text-[#074E37]">
              {title}
            </h1>

            <p className="mt-1 text-sm text-gray-500">
              {filteredProducts.length} products found
            </p>
          </div>

          {/* =================================================
              FILTER + PRODUCTS
          ================================================= */}
          <div className="flex flex-col gap-8 lg:flex-row">

            {/* FILTER */}
            <ApplianceFilter
              products={applianceProducts}
              price={price}
              setPrice={setPrice}
              selectedBrands={selectedBrands}
              setSelectedBrands={setSelectedBrands}
              selectedRating={selectedRating}
              setSelectedRating={setSelectedRating}
            />

            {/* PRODUCTS */}
            <div className="min-w-0 flex-1">
              <ApplianceProducts
                products={filteredProducts}
              />
            </div>

          </div>
        </div>
     </Container>
      </section>
    </main>
  );
}

