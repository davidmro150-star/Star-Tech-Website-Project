"use client";

import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import productsData from "../../../../../api/productsData";
import CameraHero from "../../../../../components/camera/CameraHero";
import CameraNavbar from "../../../../../components/camera/ameraNavbar";
import ProductFilter from "../../../../../components/desktop/ProductFilter";
import CameraProducts from "../../../../../components/camera/CameraProducts";
import Container from "../../../../../components/Container";



function CameraPageContent() {
  const searchParams = useSearchParams();

  // =========================================================
  // PRICE
  // =========================================================

  const [price, setPrice] = useState(null);

  // =========================================================
  // FILTER OPEN / CLOSE
  // =========================================================

  const [openSections, setOpenSections] = useState({
    processor: false,
    generation: false,
    ram: false,
    ssd: false,
    stock: true,
    size: true,
  });

  // =========================================================
  // SELECTED FILTERS
  // =========================================================

  const [selected, setSelected] = useState({
    processor: [],
    generation: [],
    ram: [],
    ssd: [],
    stock: [],
    size: [],
  });

  // =========================================================
  // READ FILTERS FROM URL
  // =========================================================

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

  // =========================================================
  // CAMERA SUBCATEGORY FROM URL
  // =========================================================
  //
  // Examples:
  //
  // /category/camera
  // /category/camera?subcategory=dslr
  // /category/camera?subcategory=dslr/canon
  // /category/camera?subcategory=mirrorless/sony
  // /category/camera?subcategory=action
  //
  // =========================================================

  const querySubcategory =
    searchParams.get("subcategory");

  const selectedPath = querySubcategory
    ? querySubcategory
        .trim()
        .toLowerCase()
        .split("/")
        .filter(Boolean)
    : [];

  // =========================================================
  // PAGE TITLE
  // =========================================================

  const getPageTitle = () => {
    // Main camera page
    if (selectedPath.length === 0) {
      return "Camera Products";
    }

    const titleMap = {
      dslr: "DSLR Camera",
      mirrorless: "Mirrorless Camera",

      action: "Action Camera",
      "action-camera": "Action Camera",

      lens: "Camera Lens",
      accessories: "Camera Accessories",

      canon: "Canon Camera",
      nikon: "Nikon Camera",
      sony: "Sony Camera",
      fujifilm: "Fujifilm Camera",
    };

    const lastPart =
      selectedPath[selectedPath.length - 1];

    if (titleMap[lastPart]) {
      return titleMap[lastPart];
    }

    return "Camera Products";
  };

  const pageTitle = getPageTitle();

  // =========================================================
  // GET CAMERA PRODUCTS FROM productsData
  // =========================================================

  const cameraProducts = Array.isArray(productsData)
    ? productsData.filter(
        (product) =>
          String(product?.category || "")
            .trim()
            .toLowerCase() === "camera"
      )
    : [];

  // =========================================================
  // FILTER CAMERA PRODUCTS
  // =========================================================

  const filteredProducts = cameraProducts.filter(
    (product) => {
      // =====================================================
      // PRODUCT DATA
      // =====================================================

      const subcategory = String(
        product?.subcategory || ""
      )
        .trim()
        .toLowerCase();

      const categoryPath = String(
        product?.categoryPath || ""
      )
        .trim()
        .toLowerCase();

      const title = String(
        product?.title || ""
      ).toLowerCase();

      const subtitle = String(
        product?.subtitle || ""
      ).toLowerCase();

      const description = String(
        product?.description || ""
      ).toLowerCase();

      const information = String(
        product?.information || ""
      ).toLowerCase();

      const brand = String(
        product?.brand || ""
      ).toLowerCase();

      const size = String(
        product?.size || ""
      ).toLowerCase();

      const stock = Number(
        product?.stock || 0
      );

      // =====================================================
      // SEARCHABLE TEXT
      // =====================================================

      const searchableText = `
        ${subcategory}
        ${categoryPath}
        ${title}
        ${subtitle}
        ${description}
        ${information}
        ${brand}
      `.toLowerCase();

      // =====================================================
      // CAMERA SUBCATEGORY FILTER
      // =====================================================

      if (selectedPath.length > 0) {
        const matched = selectedPath.every(
          (part) => {
            // =================================================
            // DSLR
            // =================================================

            if (part === "dslr") {
              return (
                subcategory.includes("dslr") ||
                categoryPath.includes("camera/dslr") ||
                searchableText.includes("dslr")
              );
            }

            // =================================================
            // MIRRORLESS
            // =================================================

            if (part === "mirrorless") {
              return (
                subcategory.includes("mirrorless") ||
                categoryPath.includes(
                  "camera/mirrorless"
                ) ||
                searchableText.includes("mirrorless")
              );
            }

            // =================================================
            // ACTION CAMERA
            // =================================================

            if (
              part === "action" ||
              part === "action-camera"
            ) {
              return (
                subcategory.includes("action") ||
                categoryPath.includes(
                  "camera/action"
                ) ||
                categoryPath.includes(
                  "camera/action-camera"
                ) ||
                searchableText.includes(
                  "action camera"
                )
              );
            }

            // =================================================
            // CAMERA LENS
            // =================================================

            if (part === "lens") {
              return (
                subcategory.includes("lens") ||
                categoryPath.includes(
                  "camera/lens"
                ) ||
                searchableText.includes("lens")
              );
            }

            // =================================================
            // CAMERA ACCESSORIES
            // =================================================

            if (part === "accessories") {
              return (
                subcategory.includes("accessor") ||
                categoryPath.includes(
                  "camera/accessories"
                ) ||
                searchableText.includes(
                  "accessories"
                )
              );
            }

            // =================================================
            // CANON
            // =================================================

            if (part === "canon") {
              return searchableText.includes(
                "canon"
              );
            }

            // =================================================
            // NIKON
            // =================================================

            if (part === "nikon") {
              return searchableText.includes(
                "nikon"
              );
            }

            // =================================================
            // SONY
            // =================================================

            if (part === "sony") {
              return searchableText.includes(
                "sony"
              );
            }

            // =================================================
            // FUJIFILM
            // =================================================

            if (part === "fujifilm") {
              return searchableText.includes(
                "fujifilm"
              );
            }

            // =================================================
            // DEFAULT
            // =================================================

            return searchableText.includes(part);
          }
        );

        if (!matched) {
          return false;
        }
      }

      // =====================================================
      // PRICE FILTER
      // =====================================================

      if (
        price !== null &&
        Number(product?.price || 0) >
          Number(price)
      ) {
        return false;
      }

      // =====================================================
      // STOCK FILTER
      // =====================================================

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

      // =====================================================
      // SIZE FILTER
      // =====================================================

      if (selected.size.length > 0) {
        const matchedSize =
          selected.size.some((item) =>
            size.includes(
              String(item).toLowerCase()
            )
          );

        if (!matchedSize) {
          return false;
        }
      }

      // =====================================================
      // PRODUCT PASSED ALL FILTERS
      // =====================================================

      return true;
    }
  );

  // =========================================================
  // SHOW MAX 24 PRODUCTS
  // =========================================================

  const productsToShow =
    filteredProducts.slice(0, 24);

  // =========================================================
  // UI
  // =========================================================

  return (
    <main className="bg-[#f2f4f8]">
      <Container>
         <div className="mx-auto bg-[#fff] px-4 py-6">

        {/* ===================================================
            CAMERA HERO
        =================================================== */}

        <CameraHero />

        {/* ===================================================
            CAMERA NAVBAR
        =================================================== */}

        <CameraNavbar />

        {/* ===================================================
            FILTER + PRODUCTS
        =================================================== */}

        <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-[260px_1fr]">

          {/* =================================================
              LEFT FILTER
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
              RIGHT PRODUCTS
          ================================================= */}

          <div className="min-w-0">

            {/* ===============================================
                CATEGORY TITLE
            =============================================== */}

            <div className="mb-5">
              <h1 className="text-center text-2xl font-bold text-gray-900">
                {pageTitle}
              </h1>

              <p className="mt-1 text-center text-sm text-gray-500">
                Showing {productsToShow.length} of{" "}
                {filteredProducts.length} products
              </p>
            </div>

            {/* ===============================================
                PRODUCTS
            =============================================== */}

            <CameraProducts
              products={productsToShow}
            />

          </div>
        </div>
      </div>
     </Container>
    </main>
  );
}

// ===========================================================
// CAMERA PAGE
// ===========================================================

export default function CameraPage() {
  return (
    <Suspense
      fallback={
        <main className="min-h-screen bg-gray-50">
          <div className="mx-auto max-w-7xl px-4 py-10">
            <p className="text-center text-gray-500">
              Loading camera products...
            </p>
          </div>
        </main>
      }
    >
      <CameraPageContent />
    </Suspense>
  );
}