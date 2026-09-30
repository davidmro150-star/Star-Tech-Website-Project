
"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useMemo } from "react";
import productsData from "../../../../api/productsData";



export default function CategoryPage() {
  const params = useParams();

  const categorySlug = params?.category;

  // Convert URL slug into category name
  const categoryName = useMemo(() => {
    if (!categorySlug) return "";

    return categorySlug
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  }, [categorySlug]);

  // Get products for this category
  const categoryProducts = useMemo(() => {
    if (!categoryName) return [];

    return productsData.filter(
      (product) =>
        product.category?.toLowerCase() === categoryName.toLowerCase()
    );
  }, [categoryName]);

  return (
    <main className="min-h-screen bg-gray-50">

      {/* Breadcrumb */}
      <div className="border-b bg-white">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Link
              href="/"
              className="hover:text-red-600"
            >
              Home
            </Link>

            <span>/</span>

            <span className="font-medium text-gray-900">
              {categoryName}
            </span>
          </div>
        </div>
      </div>

      {/* Category Header */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">

          <h1 className="text-2xl font-semibold text-gray-900">
            {categoryName}
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            Find the best {categoryName.toLowerCase()} products at the best
            price.
          </p>

        </div>
      </section>

      {/* Brand Navigation */}
      <section className="border-y bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="flex items-center gap-6 overflow-x-auto py-4">

            <Link
              href={`/category/${categorySlug}`}
              className="whitespace-nowrap border-b-2 border-red-600 pb-2 text-sm font-medium text-red-600"
            >
              All
            </Link>

            {/* Temporary brand links */}
            <Link
              href={`/category/${categorySlug}/hp`}
              className="whitespace-nowrap text-sm font-medium text-gray-600 hover:text-red-600"
            >
              HP
            </Link>

            <Link
              href={`/category/${categorySlug}/dell`}
              className="whitespace-nowrap text-sm font-medium text-gray-600 hover:text-red-600"
            >
              Dell
            </Link>

            <Link
              href={`/category/${categorySlug}/lenovo`}
              className="whitespace-nowrap text-sm font-medium text-gray-600 hover:text-red-600"
            >
              Lenovo
            </Link>

            <Link
              href={`/category/${categorySlug}/asus`}
              className="whitespace-nowrap text-sm font-medium text-gray-600 hover:text-red-600"
            >
              ASUS
            </Link>

            <Link
              href={`/category/${categorySlug}/acer`}
              className="whitespace-nowrap text-sm font-medium text-gray-600 hover:text-red-600"
            >
              Acer
            </Link>

            <Link
              href={`/category/${categorySlug}/msi`}
              className="whitespace-nowrap text-sm font-medium text-gray-600 hover:text-red-600"
            >
              MSI
            </Link>

          </div>

        </div>
      </section>

      {/* Products */}
      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">

        <div className="mb-5 flex items-center justify-between">

          <h2 className="text-lg font-semibold text-gray-900">
            {categoryName} Products
          </h2>

          <span className="text-sm text-gray-500">
            {categoryProducts.length} Products
          </span>

        </div>

        {categoryProducts.length === 0 ? (
          <div className="rounded-lg bg-white p-10 text-center">
            <p className="text-gray-500">
              No products found in this category.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">

            {categoryProducts.map((product) => (
              <div
                key={product.id}
                className="rounded-lg border border-gray-200 bg-white p-4 transition hover:shadow-md"
              >

                {/* Product Image */}
                <div className="flex h-48 items-center justify-center">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>

                {/* Product Information */}
                <div className="mt-4">

                  <h3 className="line-clamp-2 text-sm font-medium text-gray-800">
                    {product.title}
                  </h3>

                  {product.subtitle && (
                    <p className="mt-1 line-clamp-1 text-xs text-gray-500">
                      {product.subtitle}
                    </p>
                  )}

                  <div className="mt-3">
                    <span className="text-lg font-semibold text-red-600">
                      ৳ {product.price}
                    </span>
                  </div>

                  {product.rating && (
                    <div className="mt-2 text-xs text-gray-500">
                      ★ {product.rating}
                    </div>
                  )}

                </div>

              </div>
            ))}

          </div>
        )}

      </section>

    </main>
  );
}

