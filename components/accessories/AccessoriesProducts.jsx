"use client";

import Link from "next/link";
import Image from "../Image";
import Container from "../Container";

export default function AccessoriesProducts({
  products = [],
  title = "Accessories",
}) {
  return (
    <section className="bg-white">
      <Container>
        <div className="py-6">

          {/* TITLE */}
          <div className="mb-5">
            <h2 className="font-jost text-2xl font-semibold text-[#074e37] sm:text-3xl">
              {title}
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              {products.length} products
            </p>
          </div>

          {/* PRODUCTS */}
          {products.length > 0 ? (
            <div className="grid grid-cols-1 gap-4 min-[400px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
              {products.map((product) => (
                <Link
                  href={`/product/${product.id}`}
                  key={product.id}
                  className="group rounded-lg border border-gray-200 bg-white p-3 transition hover:shadow-md"
                >
                  <div className="flex h-[210px] items-center justify-center bg-gray-50">
                    <Image
                      src={product.image}
                      alt={product.title}
                      width={300}
                      height={300}
                      className="h-full w-full object-contain transition duration-300 group-hover:scale-105"
                    />
                  </div>

                  <div className="pt-3">
                    <p className="mb-1 text-xs text-gray-400">
                      {product.brand}
                    </p>

                    <h3 className="line-clamp-2 min-h-[42px] text-sm font-medium text-gray-800">
                      {product.title}
                    </h3>

                    <div className="mt-2 flex items-center gap-1">
                      <span className="text-sm text-[#86bc42]">
                        ★
                      </span>

                      <span className="text-xs text-gray-500">
                        {product.rating}
                      </span>

                      <span className="text-xs text-gray-400">
                        ({product.reviews})
                      </span>
                    </div>

                    <div className="mt-2 flex items-center gap-2">
                      <span className="font-jost text-lg font-semibold text-[#074e37]">
                        ৳{Number(product.price).toLocaleString()}
                      </span>

                      {product.oldPrice && (
                        <span className="text-sm text-gray-400 line-through">
                          ৳{Number(product.oldPrice).toLocaleString()}
                        </span>
                      )}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="py-16 text-center">
              <h3 className="text-xl font-semibold text-gray-700">
                No products found
              </h3>

              <p className="mt-2 text-sm text-gray-500">
                Try changing your filter.
              </p>
            </div>
          )}

        </div>
      </Container>
    </section>
  );
}