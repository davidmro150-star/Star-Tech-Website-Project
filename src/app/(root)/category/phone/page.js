"use client";

import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import productsData from "../../../../../api/productsData";
import PhoneHero from "../../../../../components/phone/PhoneHero";
import PhoneNavbar from "../../../../../components/phone/PhoneNavbar";
import ProductFilter from "../../../../../components/desktop/ProductFilter";
import PhoneProducts from "../../../../../components/phone/PhoneProducts";



function PhonePageContent() {
  const searchParams = useSearchParams();

  const [price, setPrice] = useState(null);

  const [openSections, setOpenSections] = useState({
    processor: false,
    generation: false,
    ram: false,
    ssd: false,
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

  const phoneProducts = productsData.filter(
    (product) =>
      String(product.category || "").toLowerCase() === "phone"
  );

  const selectedSubcategory =
    searchParams.get("subcategory");

  const filteredProducts = phoneProducts.filter((product) => {
    const subcategory = String(
      product.subcategory || ""
    ).toLowerCase();

    const categoryPath = String(
      product.categoryPath || ""
    ).toLowerCase();

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

    const stock = Number(product.stock || 0);

    if (selectedSubcategory) {
      const wanted =
        selectedSubcategory.toLowerCase();

      const searchableText = `
        ${subcategory}
        ${categoryPath}
        ${title}
        ${subtitle}
        ${description}
        ${information}
      `.toLowerCase();

      let matched = false;

      if (wanted === "smartphone") {
        matched =
          subcategory === "smartphone" ||
          categoryPath.includes("phone/smartphone");
      } else if (wanted === "android phone") {
        matched =
          subcategory === "android phone" ||
          categoryPath.includes("android-phone");
      } else if (wanted === "iphone") {
        matched =
          subcategory === "iphone" ||
          searchableText.includes("iphone");
      } else if (wanted === "gaming phone") {
        matched =
          subcategory === "gaming phone" ||
          categoryPath.includes("gaming-phone") ||
          searchableText.includes("gaming");
      } else if (wanted === "5g phone") {
        matched =
          subcategory === "5g phone" ||
          categoryPath.includes("5g-phone") ||
          searchableText.includes("5g");
      } else {
        matched =
          searchableText.includes(wanted);
      }

      if (!matched) {
        return false;
      }
    }

    if (
      price !== null &&
      Number(product.price || 0) >
        Number(price)
    ) {
      return false;
    }

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

    if (selected.size.length > 0) {
      const matched = selected.size.some(
        (item) =>
          size.includes(
            String(item).toLowerCase()
          )
      );

      if (!matched) {
        return false;
      }
    }

    return true;
  });

  const productsToShow =
    filteredProducts.slice(0, 24);

  return (
    <main className="bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 py-6">
        <PhoneHero/>

        <PhoneNavbar />

        <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-[260px_1fr]">
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
            <div className="mb-5">
              <h1 className="text-center text-2xl font-bold text-gray-900">
                {selectedSubcategory ||
                  "Phone Products"}
              </h1>

              <p className="mt-1 text-center text-sm text-gray-500">
                Showing {productsToShow.length} of{" "}
                {filteredProducts.length} products
              </p>
            </div>

            <PhoneProducts
              products={productsToShow}
            />
          </div>
        </div>
      </div>
    </main>
  );
}

export default function PhonePage() {
  return (
    <Suspense
      fallback={
        <main className="min-h-screen bg-gray-50">
          <div className="mx-auto max-w-7xl px-4 py-10">
            <p className="text-center text-gray-500">
              Loading phone products...
            </p>
          </div>
        </main>
      }
    >
      <PhonePageContent />
    </Suspense>
  );
}