"use client";

import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

import ProductFilter from "@/components/desktop/ProductFilter";
import productsData from "../../../../../api/productsData";
import OfficeEquipmentProducts from "../../../../../components/officeequipment/OfficeEquipmentProducts";
import OfficeEquipmentHero from "../../../../../components/officeequipment/OfficeEquipmentHero";
import OfficeEquipmentNavbar from "../../../../../components/officeequipment/OfficeEquipmentNavbar";




// =============================================================
// PAGE CONTENT
// =============================================================

function OfficeEquipmentPageContent() {
  const searchParams = useSearchParams();

  // =========================================================
  // FILTER STATE
  // =========================================================

  const [price, setPrice] = useState(null);

  const [openSections, setOpenSections] = useState({
    stock: true,
    size: true,
  });

  const [selected, setSelected] = useState({
    stock: [],
    size: [],
  });

  // =========================================================
  // READ URL FILTERS
  // =========================================================

  useEffect(() => {
    const stock = searchParams.get("stock");
    const size = searchParams.get("size");
    const urlPrice = searchParams.get("price");

    setSelected({
      stock: stock ? [stock] : [],
      size: size ? [size] : [],
    });

    setPrice(
      urlPrice !== null && urlPrice !== ""
        ? Number(urlPrice)
        : null
    );
  }, [searchParams]);

  // =========================================================
  // SUBCATEGORY
  // =========================================================

  const selectedSubcategory =
    searchParams.get("subcategory");

  // =========================================================
  // COMBINE BOTH DATA SOURCES
  // =========================================================
  //
  // 1. Get Office Equipment from productsData
  // 2. Add dedicated officeEquipmentData
  //
  // =========================================================

  const officeProductsFromMainAPI = productsData.filter(
    (product) =>
      String(product.category || "")
        .trim()
        .toLowerCase() === "office equipment"
  );

  const officeProductsFromDedicatedAPI =
    Array.isArray(officeEquipmentData)
      ? officeEquipmentData
      : [];

  const officeEquipmentProducts = [
    ...officeProductsFromMainAPI,
    ...officeProductsFromDedicatedAPI,
  ];

  // =========================================================
  // REMOVE DUPLICATE PRODUCTS
  // =========================================================

  const uniqueOfficeEquipmentProducts =
    OfficeEquipmentProducts.filter(
      (product, index, self) =>
        index ===
        self.findIndex(
          (item) =>
            String(item.id) === String(product.id)
        )
    );

  // =========================================================
  // FILTER PRODUCTS
  // =========================================================

  const filteredProducts =
    uniqueOfficeEquipmentProducts.filter((product) => {

      const subcategory = String(
        product.subcategory || ""
      )
        .trim()
        .toLowerCase();

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

      const stock = Number(
        product.stock || 0
      );

      // =======================================================
      // SUBCATEGORY FILTER
      // =======================================================

      if (selectedSubcategory) {

        const wanted =
          selectedSubcategory
            .trim()
            .toLowerCase();

        const searchableText = `
          ${subcategory}
          ${title}
          ${subtitle}
          ${description}
          ${information}
        `.toLowerCase();

        let matched = false;

        // -----------------------------------------------------
        // PRINTER
        // -----------------------------------------------------

        if (wanted === "printer") {

          matched =
            subcategory === "laser printer" ||
            subcategory === "inkjet printer" ||
            subcategory === "multifunction printer";
        }

        // -----------------------------------------------------
        // LASER PRINTER
        // -----------------------------------------------------

        else if (
          wanted === "laser printer"
        ) {

          matched =
            subcategory === "laser printer";
        }

        // -----------------------------------------------------
        // INKJET PRINTER
        // -----------------------------------------------------

        else if (
          wanted === "inkjet printer"
        ) {

          matched =
            subcategory === "inkjet printer";
        }

        // -----------------------------------------------------
        // MULTIFUNCTION PRINTER
        // -----------------------------------------------------

        else if (
          wanted === "multifunction printer"
        ) {

          matched =
            subcategory ===
            "multifunction printer";
        }

        // -----------------------------------------------------
        // SCANNER
        // -----------------------------------------------------

        else if (
          wanted === "scanner"
        ) {

          matched =
            subcategory === "scanner";
        }

        // -----------------------------------------------------
        // PROJECTOR
        // -----------------------------------------------------

        else if (
          wanted === "projector"
        ) {

          matched =
            subcategory === "projector";
        }

        // -----------------------------------------------------
        // PHOTOCOPIER
        // -----------------------------------------------------

        else if (
          wanted === "photocopier"
        ) {

          matched =
            subcategory === "photocopier";
        }

        // -----------------------------------------------------
        // POS EQUIPMENT
        // -----------------------------------------------------

        else if (
          wanted === "pos" ||
          wanted === "pos equipment"
        ) {

          matched =
            subcategory === "pos equipment";
        }

        // -----------------------------------------------------
        // OTHER SUBCATEGORIES
        // -----------------------------------------------------

        else {

          matched =
            subcategory === wanted ||
            searchableText.includes(wanted);
        }

        if (!matched) {
          return false;
        }
      }

      // =======================================================
      // PRICE FILTER
      // =======================================================

      if (
        price !== null &&
        Number(product.price || 0) >
          Number(price)
      ) {
        return false;
      }

      // =======================================================
      // STOCK FILTER
      // =======================================================

      if (selected.stock.length > 0) {

        const wantedStock =
          selected.stock
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

      // =======================================================
      // SIZE FILTER
      // =======================================================

      if (selected.size.length > 0) {

        const matchedSize =
          selected.size.some(
            (item) =>
              size.includes(
                String(item).toLowerCase()
              )
          );

        if (!matchedSize) {
          return false;
        }
      }

      return true;
    });

  // =========================================================
  // SHOW MAX 24 PRODUCTS
  // =========================================================

  const productsToShow =
    filteredProducts.slice(0, 24);

  // =========================================================
  // PAGE
  // =========================================================

  return (
    <main className="bg-gray-50 min-h-screen">

      {/* =====================================================
          HERO
      ===================================================== */}

      <OfficeEquipmentHero
        title={
          selectedSubcategory
            ? selectedSubcategory
            : "Office Equipment"
        }
      />

      {/* =====================================================
          OFFICE EQUIPMENT NAVBAR
      ===================================================== */}

      <OfficeEquipmentNavbar />

      {/* =====================================================
          CONTENT
      ===================================================== */}

      <div className="mx-auto max-w-7xl px-4 py-6">

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[260px_1fr]">

          {/* =================================================
              FILTER
          ================================================= */}

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

          {/* =================================================
              PRODUCTS
          ================================================= */}

          <div className="min-w-0">

            {/* =================================================
                PRODUCT TITLE
            ================================================= */}

            <div className="mb-5">

              <h1 className="text-center text-2xl font-bold text-gray-900">

                {selectedSubcategory ||
                  "Office Equipment"}

              </h1>

              <p className="mt-1 text-center text-sm text-gray-500">

                Showing{" "}
                {productsToShow.length}{" "}
                of{" "}
                {filteredProducts.length}{" "}
                products

              </p>

            </div>

            {/* =================================================
                PRODUCT LIST
            ================================================= */}

            <OfficeEquipmentProducts
              products={productsToShow}
              title=""
            />

          </div>

        </div>

      </div>

    </main>
  );
}


// =============================================================
// PAGE EXPORT
// =============================================================

export default function OfficeEquipmentPage() {

  return (
    <Suspense
      fallback={
        <main className="min-h-screen bg-gray-50">

          <div className="mx-auto max-w-7xl px-4 py-10">

            <p className="text-center text-gray-500">
              Loading office equipment products...
            </p>

          </div>

        </main>
      }
    >
      <OfficeEquipmentPageContent />
    </Suspense>
  );
}