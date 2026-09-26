import Link from "next/link";
import Image from "../Image";
import Container from "../Container";

export default function SecurityProducts({
  products = [],
  title = "Security Products",
}) {
  return (
    <section className="bg-white">
      <Container>
        <div className="py-6">

          {/* =========================
              PRODUCT TITLE
          ========================= */}
          <div className="mb-6 border-b border-gray-200 pb-4">
            <h2 className="text-xl font-semibold text-gray-900 md:text-2xl">
              {title}
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              {products.length} products found
            </p>
          </div>

          {/* =========================
              PRODUCTS
          ========================= */}
          {products.length > 0 ? (
            <div className="grid grid-cols-1 gap-4 min-[480px]:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
              {products.map((product) => (
                <Link
                  key={product.id}
                  href={`/product/${product.id}`}
                  className="group"
                >
                  <div className="border border-gray-200 bg-white transition duration-200 hover:shadow-md">

                    {/* PRODUCT IMAGE */}
                    <div className="aspect-square bg-gray-100">
                      <Image
                        src={product.image}
                        alt={product.title || "Security Product"}
                        width={500}
                        height={500}
                        className="h-full w-full object-cover"
                      />
                    </div>

                    {/* PRODUCT INFO */}
                    <div className="p-3">

                      {/* SUBCATEGORY */}
                      <p className="mb-1 text-xs text-gray-500">
                        {product.subcategory || "Security"}
                      </p>

                      {/* TITLE */}
                      <h3 className="line-clamp-2 text-sm font-medium text-gray-800 transition group-hover:text-green-700">
                        {product.title}
                      </h3>

                      {/* PRICE */}
                      <p className="mt-2 text-base font-semibold text-gray-900">
                        ৳{Number(product.price || 0).toLocaleString()}
                      </p>

                      {/* RATING */}
                      <div className="mt-1 flex items-center gap-1 text-sm">
                        <span className="text-yellow-500">
                          ★
                        </span>

                        <span className="text-gray-600">
                          {product.rating || 0}
                        </span>
                      </div>

                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            /* =========================
               NO PRODUCTS
            ========================= */
            <div className="py-20 text-center">
              <h3 className="text-lg font-medium text-gray-800">
                No {title.toLowerCase()} found
              </h3>

              <p className="mt-2 text-sm text-gray-500">
                Try selecting another security category.
              </p>
            </div>
          )}

        </div>
      </Container>
    </section>
  );
}