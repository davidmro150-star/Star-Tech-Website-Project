"use client";

import { Suspense, useMemo } from "react";
import { useSearchParams } from "next/navigation";

// ==========================================
// API
// ==========================================

import productsData from "../../../../../api/productsData";

// ==========================================
// COMPONENTS
// ==========================================

import NetworkingHero from "../../../../../components/networking/NetworkingHero";
import NetworkingNavbar from "../../../../../components/networking/NetworkingNavbar";
import ProductFilter from "../../../../../components/desktop/ProductFilter";
import NetworkingProducts from "../../../../../components/networking/NetworkingProducts";
import NetworkingProductFilter from "../../../../../components/networking/NetworkingProductFilter";

// ==========================================
// NETWORKING CONTENT
// ==========================================

function NetworkingContent() {
  const searchParams = useSearchParams();

  const path = searchParams.get("path");
  const brand = searchParams.get("brand");

  // ==========================================
  // FILTER PRODUCTS
  // ==========================================

  const filteredProducts = useMemo(() => {
    // Make sure productsData is an array
    if (!Array.isArray(productsData)) {
      console.error(
        "productsData is not an array:",
        productsData
      );

      return [];
    }

    // ========================================
    // START FROM MAIN PRODUCTS API
    // ========================================

    let products = [...productsData];

    // ========================================
    // NETWORKING PRODUCTS
    // ========================================

    products = products.filter((product) => {
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
        category === "networking" ||
        category === "network" ||
        categoryPath.startsWith("networking/") ||
        subcategory.includes("router") ||
        subcategory.includes("switch") ||
        subcategory.includes("network")
      );
    });

    // ========================================
    // PATH FILTER
    // ========================================

    if (path) {
      const selectedPath = path.toLowerCase();

      products = products.filter((product) => {
        const categoryPath = String(
          product.categoryPath || ""
        ).toLowerCase();

        return categoryPath === selectedPath;
      });
    }

    // ========================================
    // BRAND FILTER
    // ========================================

    if (brand) {
      products = products.filter(
        (product) =>
          String(product.brand || "").toLowerCase() ===
          String(brand).toLowerCase()
      );
    }

    return products;
  }, [path, brand]);

  // ==========================================
  // TITLE
  // ==========================================

  let title = "Networking";

  if (path === "networking/router/wifi") {
    title = "WiFi Router";
  } else if (path === "networking/router/4g") {
    title = "4G Router";
  } else if (path === "networking/router/5g") {
    title = "5G Router";
  } else if (path === "networking/switch/8-port") {
    title = "8 Port Switch";
  } else if (path === "networking/switch/16-port") {
    title = "16 Port Switch";
  } else if (path === "networking/switch/24-port") {
    title = "24 Port Switch";
  } else if (path === "networking/network-adapter") {
    title = "Network Adapter";
  } else if (path === "networking/access-point") {
    title = "Access Point";
  } else if (path === "networking/cable") {
    title = "Network Cable";
  }

  // ==========================================
  // DEBUG
  // ==========================================

  console.log("Networking path:", path);
  console.log("Total productsData:", productsData?.length);
  console.log(
    "Filtered Networking products:",
    filteredProducts.length
  );

  // ==========================================
  // PAGE
  // ==========================================

  return (
    <>
      {/* ======================================
          HERO
      ======================================= */}

      <NetworkingHero />

      {/* ======================================
          NAVBAR
      ======================================= */}

      <NetworkingNavbar />

      {/* ======================================
          MAIN CONTENT
      ======================================= */}

      <section className="bg-white">
        <div className="mx-auto flex max-w-[1440px] gap-6 px-4 py-6">

          {/* ==================================
              FILTER
          =================================== */}

          <aside className="hidden w-[250px] shrink-0 lg:block">
           <NetworkingProductFilter products={filteredProducts} />
          </aside>

          {/* ==================================
              PRODUCTS
          =================================== */}

          <div className="min-w-0 flex-1">
            <NetworkingProducts
              products={filteredProducts}
              title={title}
            />
          </div>

        </div>
      </section>
    </>
  );
}

// ==========================================
// NETWORKING PAGE
// ==========================================

export default function NetworkingPage() {
  return (
    <Suspense
      fallback={
        <div className="py-20 text-center">
          Loading networking products...
        </div>
      }
    >
      <NetworkingContent />
    </Suspense>
  );
}