import Link from "next/link";
import Image from "../Image";
import Container from "../Container";

export default function OfficeEquipmentProducts({
  products = [],
  title = "Office Equipment",
}) {
  return (
    <section className="bg-white">
      <Container>
        <div className="py-6">

          {/* TITLE */}
          <div className="mb-5 flex items-center justify-between">
            <div>
              <h1 className="text-xl font-semibold text-gray-900 md:text-2xl">
                {title}
              </h1>

              <p className="mt-1 text-sm text-gray-500">
                {products.length} Products
              </p>
            </div>
          </div>

          {/* PRODUCTS */}
          {products.length > 0 ? (
            <div className="grid grid-cols-1 gap-4 min-[480px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">

              {products.map((product) => (
                <Link
                  key={product.id}
                  href={`/product/${product.id}`}
                  className="group border border-gray-200 bg-white p-3 hover:shadow-md"
                >
                  {/* IMAGE */}
                  <div className="flex h-52 items-center justify-center bg-gray-50">
                    {product.image ? (
                      <Image
                        src={product.image}
                        alt={product.title}
                        className="h-full w-full object-contain"
                      />
                    ) : (
                      <div className="text-sm text-gray-400">
                        No Image
                      </div>
                    )}
                  </div>

                  {/* BRAND */}
                  <p className="mt-3 text-xs text-gray-500">
                    {product.brand}
                  </p>

                  {/* TITLE */}
                  <h2 className="mt-1 line-clamp-2 text-sm font-medium text-gray-800 group-hover:text-blue-600">
                    {product.title}
                  </h2>

                  {/* PRICE */}
                  <div className="mt-2 flex items-center gap-2">
                    <span className="font-semibold text-gray-900">
                      ৳{Number(product.price).toLocaleString()}
                    </span>

                    {product.discount > 0 && (
                      <span className="text-xs text-green-600">
                        -{product.discount}%
                      </span>
                    )}
                  </div>

                  {/* SIZE */}
                  <p className="mt-1 text-xs text-gray-500">
                    {product.size}
                  </p>

                  {/* WARRANTY */}
                  <p className="mt-1 text-xs text-gray-500">
                    Warranty: {product.warranty}
                  </p>

                  {/* STOCK */}
                  <p className="mt-1 text-xs text-gray-500">
                    Stock: {product.stock}
                  </p>
                </Link>
              ))}

            </div>
          ) : (
            <div className="py-16 text-center">
              <p className="text-gray-500">
                No products found.
              </p>
            </div>
          )}

        </div>
      </Container>
    </section>
  );
}