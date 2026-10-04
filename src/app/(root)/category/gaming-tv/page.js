"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import productsData from "../../../../../api/productsData";
import GamingTVHero from "../../../../../components/gamingtv/GamingTvHero";
import GamingTVNavbar from "../../../../../components/gamingtv/GamingTvNavbar";
import GamingTVFilter from "../../../../../components/gamingtv/GamingTvFilter";
import GamingTVProducts from "../../../../../components/gamingtv/GamingTVProducts";
import Container from "../../../../../components/Container";


export default function GamingTVPage() {
  const searchParams = useSearchParams();

  const subcategory = searchParams.get("subcategory");

  const [price, setPrice] = useState(20000);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedRating, setSelectedRating] = useState(null);

  // =========================================================
  // GAMING TV PRODUCTS
  // =========================================================

  const gamingTVProducts = useMemo(() => {
    return productsData.filter(
      (product) =>
        product.category?.toLowerCase() === "gaming tv"
    );
  }, []);

  // =========================================================
  // FILTER
  // =========================================================

  const filteredProducts = useMemo(() => {
    let result = [...gamingTVProducts];

    if (subcategory) {
      const value = decodeURIComponent(subcategory)
        .trim()
        .toLowerCase();

      if (value === "smart tv") {
        result = result.filter((product) =>
          [
            "4K Smart TV",
            "OLED TV",
            "QLED TV",
          ].includes(product.subcategory)
        );
      } else if (value === "gaming tv") {
        result = result.filter((product) =>
          [
            "120Hz Gaming TV",
            "144Hz Gaming TV",
          ].includes(product.subcategory)
        );
      } else {
        result = result.filter(
          (product) =>
            product.subcategory?.toLowerCase() === value
        );
      }
    }

    // PRICE
    result = result.filter(
      (product) =>
        Number(product.price || 0) <= Number(price || 0)
    );

    // CATEGORY
    if (selectedCategories.length > 0) {
      result = result.filter((product) =>
        selectedCategories.includes(product.subcategory)
      );
    }

    // BRAND
    if (selectedBrands.length > 0) {
      result = result.filter((product) => {
        const brand =
          product.brand?.toLowerCase() || "";

        return selectedBrands.some(
          (selectedBrand) =>
            brand === selectedBrand.toLowerCase()
        );
      });
    }

    // RATING
    if (selectedRating) {
      result = result.filter(
        (product) =>
          Number(product.rating || 0) >=
          Number(selectedRating)
      );
    }

    return result;
  }, [
    gamingTVProducts,
    subcategory,
    price,
    selectedCategories,
    selectedBrands,
    selectedRating,
  ]);

  // =========================================================
  // TITLE
  // =========================================================

  const pageTitle = useMemo(() => {
    if (!subcategory) {
      return "Gaming TV";
    }

    const value = decodeURIComponent(subcategory)
      .trim()
      .toLowerCase();

    const titleMap = {
      "smart tv": "Smart TV",
      "4k smart tv": "4K Smart TV",
      "oled tv": "OLED TV",
      "qled tv": "QLED TV",
      "gaming tv": "Gaming TV",
      "120hz gaming tv": "120Hz Gaming TV",
      "144hz gaming tv": "144Hz Gaming TV",
      "tv accessories": "TV Accessories",
    };

    return titleMap[value] || "Gaming TV";
  }, [subcategory]);

  // =========================================================
  // PAGE
  // =========================================================

  return (
    <>
      <GamingTVHero/>

      <GamingTVNavbar />

      <section className="bg-[#f2f4f8]">
        <Container>
            <div className="mx-auto bg-[#fff] px-4">

          <div className="py-6">
            <h1 className="text-center text-2xl font-bold text-gray-900">
              {pageTitle}
            </h1>

            <p className="mt-1 text-center text-sm text-gray-500">
              {filteredProducts.length} products found
            </p>
          </div>

  <div className="flex flex-col gap-6 lg:flex-row">
  <GamingTVFilter
    products={gamingTVProducts}
    price={price}
    setPrice={setPrice}
    selectedBrands={selectedBrands}
    setSelectedBrands={setSelectedBrands}
    selectedCategories={selectedCategories}
    setSelectedCategories={setSelectedCategories}
    selectedRating={selectedRating}
    setSelectedRating={setSelectedRating}
  />

  <div className="min-w-0 flex-1">
    <GamingTVProducts
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