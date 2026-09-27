"use client";

import Link from "next/link";

export default function GamingTVProducts({ products = [] }) {
  if (!products || products.length === 0) {
    return (
      <div className="rounded-lg bg-white p-6">
        <h2 className="text-2xl font-bold text-gray-900">
          Gaming TV Products
        </h2>

        <p className="mt-1 text-sm text-gray-500">
          0 products found
        </p>

        <div className="flex min-h-[300px] items-center justify-center">
          <p className="text-gray-500">
            No Gaming TV products found.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* =====================================================
          PRODUCT TITLE
      ====================================================== */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900">
          Gaming TV Products
        </h2>

        <p className="mt-1 text-sm text-gray-500">
          {products.length} products found
        </p>
      </div>

      {/* =====================================================
          PRODUCT GRID
      ====================================================== */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((product) => {
          const price = Number(product.price || 0);
          const rating = Number(product.rating || 0);
          const stock = Number(product.stock || 0);

          return (
            <div
              key={product.id}
              className="group rounded-lg border border-gray-200 bg-white p-4 transition duration-300 hover:shadow-md"
            >
              {/* PRODUCT IMAGE */}
              <Link href={`/product/${product.id}`}>
                <div className="flex h-[220px] items-center justify-center bg-gray-50">
                  <img
                    src={
                      product.image ||
                      "https://via.placeholder.com/500x500?text=No+Image"
                    }
                    alt={
                      product.title ||
                      "Gaming TV Product"
                    }
                    className="h-full w-full object-contain p-4 transition duration-300 group-hover:scale-105"
                  />
                </div>
              </Link>

              {/* PRODUCT INFORMATION */}
              <div className="pt-4">

                {/* BRAND */}
                {product.brand && (
                  <p className="mb-1 text-xs text-gray-500">
                    {product.brand}
                  </p>
                )}

                {/* TITLE */}
                <Link href={`/product/${product.id}`}>
                  <h3 className="line-clamp-2 min-h-[48px] text-sm font-semibold text-gray-900 transition hover:text-red-500">
                    {product.title}
                  </h3>
                </Link>

                {/* SUBTITLE */}
                {product.subtitle && (
                  <p className="mt-2 line-clamp-2 text-xs text-gray-500">
                    {product.subtitle}
                  </p>
                )}

                {/* CATEGORY */}
                {product.subcategory && (
                  <p className="mt-2 text-xs text-gray-400">
                    {product.subcategory}
                  </p>
                )}

                {/* RATING */}
                <div className="mt-3 flex items-center gap-2">
                  <span className="text-sm text-yellow-500">
                    ★
                  </span>

                  <span className="text-sm text-gray-600">
                    {rating.toFixed(1)}
                  </span>
                </div>

                {/* PRICE + STOCK */}
                <div className="mt-3 flex items-center justify-between gap-2">
                  <span className="text-lg font-bold text-gray-900">
                    ৳ {price.toLocaleString()}
                  </span>

                  <span className="text-xs text-gray-500">
                    Stock: {stock}
                  </span>
                </div>

              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}