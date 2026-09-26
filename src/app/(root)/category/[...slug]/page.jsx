"use client";

import { useParams } from "next/navigation";



import productsData from "../../../../../api/productsData";
import DesktopProductsLayout from "../../../../../components/desktop/ProductsDesktopLayout";

export default function CategoryPage() {
  const params = useParams();

  const slug = Array.isArray(params?.slug)
    ? params.slug
    : [];

  const currentPath = slug
    .map((item) => decodeURIComponent(item).toLowerCase())
    .join("/");

  const products = productsData.filter((product) => {
    if (!product.categoryPath) return false;

    const productPath = product.categoryPath
      .toLowerCase()
      .trim();

    return (
      productPath === currentPath ||
      productPath.startsWith(`${currentPath}/`)
    );
  });

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 py-8">

        <h1 className="mb-2 text-2xl font-bold capitalize md:text-3xl">
          {slug[slug.length - 1]?.replace(/-/g, " ")}
        </h1>

        <p className="mb-6 text-sm text-gray-500">
          {products.length} products available
        </p>

        <DesktopProductsLayout products={products} />

      </div>
    </main>
  );
}