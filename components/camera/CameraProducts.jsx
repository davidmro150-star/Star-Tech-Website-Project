"use client";

import { useState } from "react";
import Container from "../Container";
import Image from "../Image";
import Link from "next/link";

export default function CameraProducts({
  products = [],
  price,
  setPrice,
}) {
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = [
    "All",
    "DSLR",
    "Mirrorless Camera",
    "Action Camera",
    "Camera Lens",
    "Camera Accessories",
  ];

  // =========================================================
  // CAMERA FILTER
  // =========================================================
  const filteredProducts = products.filter((product) => {
    if (activeFilter === "All") {
      return true;
    }

    const subcategory = String(
      product?.subcategory || ""
    ).toLowerCase();

    const subtitle = String(
      product?.subtitle || ""
    ).toLowerCase();

    const title = String(
      product?.title || ""
    ).toLowerCase();

    const categoryPath = String(
      product?.categoryPath || ""
    ).toLowerCase();

    const filter = activeFilter.toLowerCase();

    return (
      subcategory.includes(filter) ||
      subtitle.includes(filter) ||
      title.includes(filter) ||
      categoryPath.includes(filter)
    );
  });

  return (
    <section className="bg-white">
      <Container>
        <div className="py-6">

       
          

          {/* =================================================
              PRODUCT HEADER
          ================================================= */}
          <div className="mb-5 flex items-center justify-between">
            <div>
              <h2 className="text-xl font-semibold text-gray-800">
                Camera Products
              </h2>

              <p className="mt-1 text-sm text-gray-500">
                {filteredProducts.length} Products
              </p>
            </div>
          </div>

          {/* =================================================
              PRODUCTS
          ================================================= */}
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 gap-4 min-[480px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
              {filteredProducts.map(
                (product, index) => (
                  <Link
                    key={
                      product?.id || index
                    }
                    href={`/product/${product?.id ||
                      index + 1
                      }`}
                    className="group border border-gray-200 bg-white transition hover:border-green-600"
                  >
                    <div className="flex h-[220px] items-center justify-center bg-gray-50 p-4">
                      <Image
                        src={product?.image}
                        alt={
                          product?.title ||
                          "Camera product"
                        }
                        width={300}
                        height={300}
                        className="h-full w-full object-contain transition duration-300 group-hover:scale-105"
                      />
                    </div>

                    <div className="p-4">
                      <p className="mb-1 text-xs text-gray-500">
                        {product?.subcategory ||
                          product?.subtitle}
                      </p>

                      <h3 className="line-clamp-2 min-h-[48px] text-sm font-semibold text-gray-800 group-hover:text-green-700">
                        {product?.title}
                      </h3>

                      <div className="mt-2 flex items-center gap-2">
                        <span className="text-sm text-yellow-500">
                          ★
                        </span>

                        <span className="text-xs text-gray-500">
                          {product?.rating ?? 0}
                        </span>
                      </div>

                      <div className="mt-3">
                        <span className="text-lg font-bold text-green-700">
                          ৳
                          {Number(
                            product?.price || 0
                          ).toLocaleString()}
                        </span>
                      </div>

                      <p className="mt-1 text-xs text-gray-500">
                        Stock:{" "}
                        {product?.stock ?? 0}
                      </p>
                    </div>
                  </Link>
                )
              )}
            </div>
          ) : (
            <div className="py-16 text-center">
              <p className="text-gray-500">
                No camera products found.
              </p>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}