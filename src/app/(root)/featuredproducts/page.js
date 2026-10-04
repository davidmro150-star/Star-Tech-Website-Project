import Link from "next/link";


import productsData from "../../../../api/productsData";
import Image from "../../../../components/Image";
import Container from "../../../../components/Container";

export default function FeaturedProductsPage() {
  const products = Array.isArray(productsData)
    ? productsData
    : productsData?.products || [];

  const getName = (product) =>
    product.name ||
    product.title ||
    product.productName ||
    "Product";

  const getImage = (product) =>
    product.image ||
    product.thumbnail ||
    product.images?.[0] ||
    "/images/product-placeholder.png";

  const getPrice = (product) =>
    Number(
      product.price ||
        product.salePrice ||
        product.currentPrice ||
        0
    );

  const getOldPrice = (product) =>
    Number(
      product.oldPrice ||
        product.previousPrice ||
        product.regularPrice ||
        product.originalPrice ||
        0
    );

  const getSlug = (product) =>
    String(product.slug || product.id);

  return (
    <main className="min-h-screen bg-[#f2f4f8] py-10">

      <Container>
           <div className="mx-auto w-[92%] bg-[#fff]">

        {/* Header */}
        <div className="mb-8">
          <Link
            href="/"
            className="text-sm text-gray-500 hover:text-[#e53935]"
          >
            Home
          </Link>

          <h1 className="mt-3 text-3xl font-bold text-gray-800">
            Featured Products
          </h1>

          <p className="mt-2 text-gray-500">
            Check &amp; Get Your Desired Product!
          </p>
        </div>

        {/* Products */}
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 lg:gap-4">

          {products.map((product) => {
            const name = getName(product);
            const image = getImage(product);
            const price = getPrice(product);
            const oldPrice = getOldPrice(product);
            const slug = getSlug(product);

            return (
              <Link
                key={product.id || slug}
                href={`/featuredproducts/${encodeURIComponent(slug)}`}
                className="group overflow-hidden rounded-lg border border-gray-200 bg-white transition hover:-translate-y-1 hover:shadow-lg"
              >

                {/* Image */}
                <div className="flex h-[220px] items-center justify-center bg-white p-4">
                  <Image
                    src={image}
                    alt={name}
                    width={300}
                    height={300}
                    className="h-full w-full object-contain transition duration-300 group-hover:scale-105"
                  />
                </div>

                {/* Info */}
                <div className="p-4">

                  <h2 className="line-clamp-2 min-h-[48px] text-sm font-medium text-gray-700 group-hover:text-[#e53935]">
                    {name}
                  </h2>

                  <div className="mt-3 flex flex-wrap items-center gap-2">

                    <span className="text-lg font-bold text-[#e53935]">
                      {price.toLocaleString("en-BD")}৳
                    </span>

                    {oldPrice > price && (
                      <del className="text-sm text-gray-400">
                        {oldPrice.toLocaleString("en-BD")}৳
                      </del>
                    )}

                  </div>

                </div>

              </Link>
            );
          })}

        </div>

      </div>
   </Container>

    </main>
  );
}