
import Link from "next/link";
import Image from "../Image";

export default function DesktopProducts({ products = [] }) {
  return (
    <section className="bg-white py-10">
      <div className="mx-auto max-w-7xl px-4">

        {/* HEADER */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-900">
            Desktop Products
          </h2>

          <p className="mt-1 text-sm text-gray-500 ">
            {products.length} products available
          </p>
        </div>

        {/* PRODUCTS */}
        {products.length > 0 ? (
          <div className="grid grid-cols-1  gap-5 min-[480px]:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">

            {products.map((product) => (
              <Link
                key={product.id}
                href={`/ product / ${ product.id } `}
                className="group border border-gray-200 bg-white transition duration-200 hover:-translate-y-1 hover:shadow-lg"
              >

                {/* IMAGE */}
                <div className="flex h-56 w-full items-center justify-center bg-white p-5">
                  <Image
                    src={product.image}
                    alt={product.title}
                    className="h-full w-full object-contain"
                  />
                </div>

                {/* PRODUCT INFO */}
                <div className="border-t border-gray-200 p-4">

                  <p className="text-xs text-gray-500">
                    {product.subcategory}
                  </p>

                  <h3 className="mt-1 min-h-12 text-sm font-semibold leading-5 text-gray-900 group-hover:text-[#0b5d3b]">
                    {product.title}
                  </h3>

                  <p className="mt-2 line-clamp-2 text-xs leading-5 text-gray-500">
                    {product.subtitle}
                  </p>

                  {/* PRICE + RATING */}
                  <div className="mt-3 flex items-center justify-between gap-2">

                    <span className="text-base font-bold text-[#0b5d3b]">
                      ৳{Number(product.price).toLocaleString()}
                    </span>

                    <span className="shrink-0 text-sm text-yellow-500">
                      ★ {product.rating}
                    </span>

                  </div>

                </div>
              </Link>
            ))}

          </div>
        ) : (

          /* NO PRODUCTS */
          <div className="py-16 text-center">
            <h3 className="text-lg font-semibold text-gray-900">
              No products found
            </h3>

            <p className="mt-2 text-sm text-gray-500">
              Try increasing the price range.
            </p>
          </div>

        )}

      </div>
    </section>
  );
}

