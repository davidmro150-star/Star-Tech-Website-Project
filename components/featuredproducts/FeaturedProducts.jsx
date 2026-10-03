import Link from "next/link";
import productsData from "../../api/productsData";
import Image from "../Image";

export default function FeaturedProducts() {
  const products = Array.isArray(productsData)
    ? productsData.slice(0, 20)
    : productsData?.products?.slice(0, 20) || [];

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

  const getDiscount = (product) => {
    const price = getPrice(product);
    const oldPrice = getOldPrice(product);

    if (!price || !oldPrice || oldPrice <= price) {
      return null;
    }

    const saved = oldPrice - price;

    const percentage = Math.round(
      (saved / oldPrice) * 100
    );

    return {
      saved,
      percentage,
    };
  };

  return (
    <section className="bg-[#f5f6f8] py-12">
      <div className="mx-auto w-[92%] max-w-[1400px]">

        {/* Header */}
        <div className="mb-7 flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-bold text-[#222] md:text-[28px]">
              Featured Products
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              Check &amp; Get Your Desired Product!
            </p>
          </div>

          <Link
            href="/featuredproducts"
            className="rounded border border-[#ef4b4f] bg-white px-4 py-2 text-sm font-semibold text-[#ef4b4f] transition hover:bg-[#ef4b4f] hover:text-white"
          >
            View All
          </Link>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 lg:gap-4">

          {products.map((product) => {
            const name = getName(product);
            const image = getImage(product);
            const price = getPrice(product);
            const oldPrice = getOldPrice(product);
            const discount = getDiscount(product);
            const slug = getSlug(product);

            return (
              <Link
                key={product.id || slug}
                href={`/featuredproducts/${encodeURIComponent(slug)}`}
                className="group relative overflow-hidden rounded border border-gray-200 bg-white transition duration-200 hover:-translate-y-1 hover:border-gray-300 hover:shadow-lg"
              >

                {/* Discount */}
                {discount && (
                  <span className="absolute left-2 top-2 z-10 rounded bg-[#fff0f0] px-2 py-1 text-[10px] font-semibold text-[#e53935] sm:text-[11px]">
                    Save{" "}
                    {discount.saved.toLocaleString("en-BD")}
                    ৳ (-{discount.percentage}%)
                  </span>
                )}

                {/* Image */}
                <div className="flex h-[175px] items-center justify-center bg-white p-4 sm:h-[200px] lg:h-[220px]">
                  <Image
                    src={image}
                    alt={name}
                    width={220}
                    height={220}
                    className="h-full w-full object-contain transition duration-300 group-hover:scale-105"
                  />
                </div>

                {/* Product Info */}
                <div className="p-3 sm:p-4">

                  <h3 className="line-clamp-2 min-h-[42px] text-[13px] leading-5 text-gray-700 transition group-hover:text-[#e53935] sm:text-sm">
                    {name}
                  </h3>

                  <div className="mt-2 flex flex-wrap items-center gap-2">

                    <span className="text-[16px] font-bold text-[#e53935] sm:text-[17px]">
                      {price.toLocaleString("en-BD")}৳
                    </span>

                    {oldPrice > price && (
                      <del className="text-xs text-gray-400">
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
    </section>
  );
}