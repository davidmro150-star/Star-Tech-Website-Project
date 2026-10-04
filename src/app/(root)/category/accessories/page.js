"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";

import productsData from "../../../../../api/productsData";

import AccessoriesHero from "../../../../../components/accessories/AccessoriesHero";
import AccessoriesNavbar from "../../../../../components/accessories/AccessoriesNavbar";
import AccessoriesProducts from "../../../../../components/accessories/AccessoriesProducts";
import AccessoriesFilter from "../../../../../components/accessories/AccessoriesFilter";
import Container from "../../../../../components/Container";

export default function AccessoriesPage() {
  const searchParams = useSearchParams();

  // Navbar selected subcategory
  const activeSubcategory =
    searchParams.get("subcategory") || "";

  // Get all Accessories products
  const accessoriesProducts = useMemo(() => {
    return productsData.filter(
      (product) => product.category === "Accessories"
    );
  }, []);

  // Filter products from navbar
  const products = useMemo(() => {
    if (!activeSubcategory) {
      return accessoriesProducts;
    }

    return accessoriesProducts.filter(
      (product) =>
        product.subcategory === activeSubcategory
    );
  }, [
    accessoriesProducts,
    activeSubcategory,
  ]);

  // Filter states
  const [price, setPrice] = useState(2500);
  const [selectedCategories, setSelectedCategories] =
    useState([]);
  const [selectedBrands, setSelectedBrands] =
    useState([]);
  const [selectedRating, setSelectedRating] =
    useState(0);

  // Apply filters
  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      // Category filter
      if (
        selectedCategories.length > 0 &&
        !selectedCategories.includes(
          product.subcategory
        )
      ) {
        return false;
      }

      // Price filter
      if (Number(product.price) > price) {
        return false;
      }

      // Brand filter
      if (
        selectedBrands.length > 0 &&
        !selectedBrands.includes(product.brand)
      ) {
        return false;
      }

      // Rating filter
      if (
        selectedRating > 0 &&
        Number(product.rating) < selectedRating
      ) {
        return false;
      }

      return true;
    });
  }, [
    products,
    price,
    selectedCategories,
    selectedBrands,
    selectedRating,
  ]);

  return (
    <>
      {/* Hero */}
      <AccessoriesHero />

      {/* Accessories Navbar */}
      <AccessoriesNavbar />

      {/* Main Content */}
      <section className="bg-[#f2f4f8]">
        <Container>
          <div className="mx-auto bg-[#fff] px-4 py-6">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-[250px_1fr]">


  {/* Filter */}
 <AccessoriesFilter
  products={accessoriesProducts}
  price={price}
  setPrice={setPrice}
  selectedCategories={selectedCategories}
  setSelectedCategories={setSelectedCategories}
  selectedBrands={selectedBrands}
  setSelectedBrands={setSelectedBrands}
  selectedRating={selectedRating}
  setSelectedRating={setSelectedRating}
/>

  {/* Products */}
  <AccessoriesProducts
    products={filteredProducts}
    title={activeSubcategory || "Accessories"}
  />



          </div>
        </div>
        </Container>
      </section>
    </>
  );
}