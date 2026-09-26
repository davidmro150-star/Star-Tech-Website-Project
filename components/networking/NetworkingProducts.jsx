"use client";

import Link from "next/link";
import Image from "../Image";
import Container from "../Container";

export default function NetworkingProducts({
  products = [],
  title = "Networking",
}) {
  return (
    <section className="bg-white">
      <Container>
        <div className="py-6">

          <div className="mb-5 flex items-center justify-between">
            <div>
              <h2 className="font-jost text-xl font-semibold text-[#074e37] sm:text-2xl">
                {title}
              </h2>

              <p className="mt-1 text-sm text-gray-500">
                {products.length} products
              </p>
            </div>
          </div>

          {products.length > 0 ? (
            <div className="grid grid-cols-1 gap-4 min-[480px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">

              {products.map((product) => (
                <Link
                  href={`/product/${product.id}`}
                  key={product.id}
                  className="group rounded-md border border-gray-200 bg-white p-3 transition hover:border-[#86bc42]"
                >
                  <div className="flex h-[190px] items-center justify-center">
                    <Image
                      src={product.image}
                      alt={product.title}
                      width={500}
                      height={500}
                      className="h-full w-full object-contain transition duration-300 group-hover:scale-105"
                    />
                  </div>

                  <div className="mt-4">
                    <p className="text-xs text-gray-500">
                      {product.brand || "Networking"}
                    </p>

                    <h3 className="mt-1 line-clamp-2 min-h-[40px] text-sm font-medium text-gray-800">
                      {product.title}
                    </h3>

                    <div className="mt-2 flex items-center justify-between">
                      <span className="font-jost font-semibold text-[#074e37]">
                        ৳{Number(product.price || 0).toLocaleString()}
                      </span>

                      <span className="text-xs text-yellow-600">
                        ★ {product.rating}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}

            </div>
          ) : (
            <div className="py-20 text-center">
              <p className="text-gray-500">
                No networking products found.
              </p>
            </div>
          )}

        </div>
      </Container>
    </section>
  );
}