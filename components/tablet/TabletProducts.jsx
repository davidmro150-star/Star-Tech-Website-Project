import Link from "next/link";
import Image from "../Image";
import Container from "../Container";

export default function TabletProducts({
  products = [],
  title = "Tablet Products",
}) {
  return (
    <section className="bg-white">
      <Container>
        <div className="py-6">

          {/* =================================================
              PRODUCT TITLE
          ================================================= */}

          <div className="mb-5">
            <h2 className="text-2xl font-bold text-gray-900">
              {title}
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              {products.length} products found
            </p>
          </div>

          {/* =================================================
              PRODUCTS
          ================================================= */}

          {products.length > 0 ? (
            <div className="grid grid-cols-1 gap-4 min-[480px]:grid-cols-2 lg:grid-cols-4">

              {products.map((product) => (
                <Link
                  key={product.id}
                  href={`/product/${product.id}`}
                  className="group flex h-full min-w-0 flex-col border border-gray-200 bg-white transition duration-200 hover:-translate-y-1 hover:shadow-lg"
                >

                  {/* IMAGE */}

                  <div className="flex h-48 w-full items-center justify-center bg-white p-4">
                    <Image
                      src={product.image}
                      alt={product.title || "Tablet"}
                      className="h-full w-full object-contain transition duration-300 group-hover:scale-105"
                    />
                  </div>

                  {/* CONTENT */}

                  <div className="flex flex-1 flex-col border-t border-gray-200 p-3">

                    {product.subcategory && (
                      <p className="text-[11px] text-gray-500">
                        {product.subcategory}
                      </p>
                    )}

                    <h3 className="mt-1 min-h-[44px] text-[13px] font-semibold leading-5 text-gray-900 group-hover:text-[#0b5d3b]">
                      {product.title}
                    </h3>

                    {product.subtitle && (
                      <p className="mt-1 line-clamp-2 text-[11px] leading-4 text-gray-500">
                        {product.subtitle}
                      </p>
                    )}

                    <div className="mt-2 space-y-1 text-[11px] text-gray-500">

                      {product.brand && (
                        <p>
                          <span className="font-medium text-gray-700">
                            Brand:
                          </span>{" "}
                          {product.brand}
                        </p>
                      )}

                      {product.type && (
                        <p>
                          <span className="font-medium text-gray-700">
                            Type:
                          </span>{" "}
                          {product.type}
                        </p>
                      )}

                      {product.size && (
                        <p>
                          <span className="font-medium text-gray-700">
                            Size:
                          </span>{" "}
                          {product.size}
                        </p>
                      )}

                      {product.ram && (
                        <p>
                          <span className="font-medium text-gray-700">
                            RAM:
                          </span>{" "}
                          {product.ram}
                        </p>
                      )}

                      {product.ssd && (
                        <p>
                          <span className="font-medium text-gray-700">
                            Storage:
                          </span>{" "}
                          {product.ssd}
                        </p>
                      )}

                      {product.stock !== undefined && (
                        <p>
                          <span className="font-medium text-gray-700">
                            Stock:
                          </span>{" "}
                          {product.stock}
                        </p>
                      )}

                    </div>

                    <div className="mt-auto flex items-center justify-between gap-2 pt-3">

                      <span className="text-sm font-bold text-[#0b5d3b]">
                        ৳{Number(product.price || 0).toLocaleString()}
                      </span>

                      <span className="shrink-0 text-xs text-yellow-500">
                        ★ {product.rating || 0}
                      </span>

                    </div>

                  </div>
                </Link>
              ))}

            </div>
          ) : (
            <div className="border border-gray-200 py-16 text-center">

              <h3 className="text-lg font-semibold text-gray-900">
                No tablet products found
              </h3>

              <p className="mt-2 text-sm text-gray-500">
                Try changing or clearing your filters.
              </p>

            </div>
          )}

        </div>
      </Container>
    </section>
  );
}