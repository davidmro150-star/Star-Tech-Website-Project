"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";

import DesktopHero from "../../../../components/desktop/DesktopHero";
import DesktopNavbar from "../../../../components/desktop/DesktopNavbar";
import DesktopProducts from "../../../../components/desktop/DesktoProducts";
import ProductFilter from "../../../../components/desktop/ProductFilter";

import productsData from "../../../../api/productsData";

export default function DesktopPage() {
  const searchParams = useSearchParams();

  const selectedSubcategory =
    searchParams.get("subcategory");

  const pageTitle =
    selectedSubcategory || "Desktop Products";

  const [price, setPrice] = useState(null);

  const [openSections, setOpenSections] = useState({
    processor: true,
    generation: true,
    ram: true,
    ssd: true,
    stock: true,
    size: true,
  });

  const [selected, setSelected] = useState({
    processor: [],
    generation: [],
    ram: [],
    ssd: [],
    stock: [],
    size: [],
  });

  const desktopProducts = productsData.filter(
    (product) => product.category === "Desktop"
  );

  const filteredProducts =
    price === null
      ? desktopProducts
      : desktopProducts.filter(
          (product) => Number(product.price) <= Number(price)
        );

  const productsToShow = filteredProducts.slice(0, 24);

  return (
    <main className="bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 py-6">

        <DesktopHero />

        <DesktopNavbar />



{/* PAGE TITLE */}
<div className="py-6">
  <h1 className="text-center text-2xl font-bold text-gray-900">
    {pageTitle}
  </h1>

  <p className="mt-1 text-center text-sm text-gray-500">
    {filteredProducts.length} products found
  </p>
</div>

{/* FILTER + PRODUCTS */}
<div className="grid grid-cols-1 gap-6 lg:grid-cols-[260px_1fr]">

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

  <div className="min-w-0">
    <DesktopProducts products={productsToShow} />
  </div>

</div>

      

      </div>
    </main>
  );
}