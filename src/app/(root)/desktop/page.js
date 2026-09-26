"use client";

import { useState } from "react";

import DesktopHero from "../../../../components/desktop/DesktopHero";
import DesktopNavbar from "../../../../components/desktop/DesktopNavbar";
import DesktopProducts from "../../../../components/desktop/DesktoProducts";
import ProductFilter from "../../../../components/desktop/ProductFilter";

import productsData from "../../../../api/productsData";

export default function DesktopPage() {
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

  // Get all Desktop products
  const desktopProducts = productsData.filter(
    (product) => product.category === "Desktop"
  );

  // Price filter
  const filteredProducts =
    price === null
      ? desktopProducts
      : desktopProducts.filter(
          (product) => product.price <= price
        );

  // Always show maximum 24 products
  const productsToShow = filteredProducts.slice(0, 24);

  return (
    <main className="bg-gray-50">

      <div className="mx-auto max-w-7xl px-4 py-6">

        <DesktopHero />

        <DesktopNavbar />

        <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-[260px_1fr]">

          {/* LEFT FILTER */}
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

          {/* RIGHT PRODUCTS */}
          <div className="min-w-0">
            <DesktopProducts products={productsToShow} />
          </div>

        </div>

      </div>

    </main>
  );
}