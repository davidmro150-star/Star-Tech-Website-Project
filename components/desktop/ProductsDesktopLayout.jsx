"use client";

import { useState } from "react";
import ProductFilter from "./ProductFilter";
import DesktopProducts from "./DesktoProducts";

export default function DesktopProductsLayout({ products = [] }) {
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

  const filteredProducts = products.filter((product) => {
    if (price !== null && Number(product.price) > Number(price)) {
      return false;
    }

    if (
      selected.processor.length > 0 &&
      !selected.processor.includes(product.processor)
    ) {
      return false;
    }

    if (
      selected.generation.length > 0 &&
      !selected.generation.includes(product.generation)
    ) {
      return false;
    }

    if (
      selected.ram.length > 0 &&
      !selected.ram.includes(product.ram)
    ) {
      return false;
    }

    if (
      selected.ssd.length > 0 &&
      !selected.ssd.includes(product.ssd)
    ) {
      return false;
    }

    if (selected.stock.length > 0) {
      const inStock = Number(product.stock) > 0;

      const stockMatch =
        (selected.stock.includes("In Stock") && inStock) ||
        (selected.stock.includes("Out of Stock") && !inStock);

      if (!stockMatch) {
        return false;
      }
    }

    if (
      selected.size.length > 0 &&
      !selected.size.includes(product.size)
    ) {
      return false;
    }

    return true;
  });

  return (
    <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-[260px_1fr]">

      {/* FILTER */}
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

      {/* PRODUCTS */}
      <div className="min-w-0">
        <DesktopProducts products={filteredProducts} />
      </div>

    </div>
  );
}