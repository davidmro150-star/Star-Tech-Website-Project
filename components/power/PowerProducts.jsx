import Link from "next/link";
import Image from "../Image";

export default function PowerProducts({ products = [] }) {
  return (
    <section className="bg-white">
      <div className="px-5 py-6">
        {products.length > 0 ? (
          <div className="grid grid-cols-1 gap-5 min-[480px]:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
            {products.map((product) => (
              <Link
                key={product.id}
                href={`/product/${product.id}`}
                className="group flex h-full flex-col border border-gray-200 bg-white transition duration-200 hover:-translate-y-1 hover:shadow-lg"
              >
                {/* IMAGE */}
                <div className="flex h-56 w-full items-center justify-center bg-white p-5">
                  <Image
                    src={product.image}
                    alt={product.title || "Power product"}
                    className="h-full w-full object-contain transition duration-300 group-hover:scale-105"
                  />
                </div>

                {/* CONTENT */}
                <div className="flex flex-1 flex-col border-t border-gray-200 p-4">
                  {product.subcategory && (
                    <p className="text-xs text-gray-500">
                      {product.subcategory}
                    </p>
                  )}

                  <h3 className="mt-1 min-h-[48px] text-sm font-semibold leading-5 text-gray-900 group-hover:text-[#0b5d3b]">
                    {product.title}
                  </h3>

                  {product.subtitle && (
                    <p className="mt-2 line-clamp-2 text-xs leading-5 text-gray-500">
                      {product.subtitle}
                    </p>
                  )}

                  <div className="mt-3 space-y-1 text-xs text-gray-500">
                    {product.size && (
                      <p>
                        <span className="font-medium text-gray-700">
                          Size:
                        </span>{" "}
                        {product.size}
                      </p>
                    )}

                    {product.information && (
                      <p className="line-clamp-2">
                        <span className="font-medium text-gray-700">
                          Info:
                        </span>{" "}
                        {product.information}
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

                  {/* PRICE + RATING */}
                  <div className="mt-auto flex items-center justify-between gap-2 pt-4">
                    <span className="text-base font-bold text-[#0b5d3b]">
                      ৳{Number(product.price || 0).toLocaleString()}
                    </span>

                    <span className="shrink-0 text-sm text-yellow-500">
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
              No power products found
            </h3>

            <p className="mt-2 text-sm text-gray-500">
              Try changing or clearing your filters.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}