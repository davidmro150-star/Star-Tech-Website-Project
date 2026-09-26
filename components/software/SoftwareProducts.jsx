import Link from "next/link";
import Container from "../Container";
import Image from "../Image";

export default function SoftwareProducts({
  products = [],
  title = "Software",
}) {
  return (
    <section className="bg-white">
      <Container>

        <div className="py-6">

          {/* =================================================
              TITLE
          ================================================= */}

          <div className="mb-5 flex items-center justify-between">

            <h2 className="text-xl font-semibold text-gray-900">
              {title}
            </h2>

            <p className="text-sm text-gray-500">
              {products.length} Products
            </p>

          </div>

          {/* =================================================
              PRODUCTS
          ================================================= */}

          {products.length > 0 ? (
            <div className="grid grid-cols-1 gap-4 min-[480px]:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">

              {products.map((product) => (
                <Link
                  key={product.id}
                  href={`/product/${product.id}`}
                  className="group rounded-lg border border-gray-200 bg-white p-3 transition hover:shadow-md"
                >

                  {/* IMAGE */}

                  <div className="mb-3 flex h-[190px] items-center justify-center bg-gray-50">

                    <Image
                      src={product.image}
                      alt={product.title}
                      width={300}
                      height={300}
                      className="h-full w-full object-contain"
                    />

                  </div>

                  {/* SUBCATEGORY */}

                  <p className="mb-1 text-xs text-gray-500">
                    {product.subcategory}
                  </p>

                  {/* TITLE */}

                  <h3 className="line-clamp-2 min-h-[40px] text-sm font-medium text-gray-900 group-hover:text-[#074E37]">
                    {product.title}
                  </h3>

                  {/* PRICE + RATING */}

                  <div className="mt-2 flex items-center justify-between">

                    <span className="font-semibold text-[#074E37]">
                      ৳
                      {Number(
                        product.price || 0
                      ).toLocaleString()}
                    </span>

                    <span className="text-xs text-gray-500">
                      ★ {product.rating}
                    </span>

                  </div>

                </Link>
              ))}

            </div>
          ) : (
            <div className="py-16 text-center">

              <h3 className="text-lg font-semibold text-gray-700">
                No products found
              </h3>

              <p className="mt-2 text-sm text-gray-500">
                Try another software category.
              </p>

            </div>
          )}

        </div>

      </Container>
    </section>
  );
}