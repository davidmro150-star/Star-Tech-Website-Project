import Link from "next/link";
import Image from "../Image";
import Container from "../Container";

export default function GadgetProducts({ products = [] }) {
  return (
    <section className="bg-white">
      <Container>
        <div className="py-6">

          {/* HEADER */}
          <div className="mb-6">
            <h2 className="text-2xl font-bold  text-gray-900">
              Gadget Products
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              {products.length} products available
            </p>
          </div>

          {products.length > 0 ? (
            <div className="grid grid-cols-1  gap-4 min-[480px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">

              {products.map((product) => (
                <Link
                  href={`/product/${product.id}`}
                  key={product.id}
                  className="group rounded-lg border border-gray-200 bg-white p-3 transition hover:shadow-md"
                >

                  {/* IMAGE */}
                  <div className="mb-3 flex h-[200px] items-center justify-center bg-gray-50">
                    <Image
                      src={product.image}
                      alt={product.title}
                      width={300}
                      height={300}
                      className="h-full w-full object-contain transition duration-300 group-hover:scale-105"
                    />
                  </div>

                  {/* CATEGORY */}
                  <p className="mb-1 text-xs text-gray-500">
                    {product.subcategory}
                  </p>

                  {/* TITLE */}
                  <h3 className="line-clamp-2 min-h-[40px] text-sm font-semibold text-gray-900">
                    {product.title}
                  </h3>

                  {/* SUBTITLE */}
                  <p className="mt-1 line-clamp-1 text-xs text-gray-500">
                    {product.subtitle}
                  </p>

                  {/* RATING */}
                  <div className="mt-2 flex items-center gap-1 text-xs">
                    <span className="text-yellow-500">
                      ★
                    </span>

                    <span className="text-gray-600">
                      {product.rating}
                    </span>

                    <span className="text-gray-400">
                      ({product.stock})
                    </span>
                  </div>

                  {/* PRICE */}
                  <div className="mt-3 flex items-center justify-between">
                    <span className="text-base font-bold text-gray-900">
                      ৳ {Number(product.price).toLocaleString()}
                    </span>

                    {product.stock > 0 && (
                      <span className="text-xs text-green-600">
                        In Stock
                      </span>
                    )}
                  </div>

                  {/* SIZE */}
                  {product.size && (
                    <p className="mt-2 text-xs text-gray-500">
                      Size: {product.size}
                    </p>
                  )}

                </Link>
              ))}

            </div>
          ) : (
            <div className="py-16 text-center">
              <h3 className="text-lg font-semibold text-gray-800">
                No gadgets found
              </h3>

              <p className="mt-2 text-sm text-gray-500">
                Try changing your filters.
              </p>
            </div>
          )}

        </div>
      </Container>
    </section>
  );
}