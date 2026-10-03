import Link from "next/link";
import productsData from "../../../../../api/productsData";
import Image from "../../../../../components/Image";


export default async function ProductDetailsPage({ params }) {
  const { slug } = await params;

  const products = Array.isArray(productsData)
    ? productsData
    : productsData?.products || [];

  const product = products.find((item) => {
    const productSlug = item.slug || item.id;

    return String(productSlug) === String(slug);
  });

  /* ================= PRODUCT NOT FOUND ================= */

  if (!product) {
    return (
      <main className="min-h-screen bg-[#f5f6f8] px-5 py-20">

        <div className="mx-auto max-w-3xl rounded-xl bg-white p-10 text-center shadow-sm">

          <h1 className="text-3xl font-bold text-gray-800">
            Product Not Found
          </h1>

          <p className="mt-3 text-gray-500">
            Sorry, we could not find this product.
          </p>

          <Link
            href="/featuredproducts"
            className="mt-7 inline-block rounded-md bg-[#e53935] px-6 py-3 font-semibold text-white hover:bg-[#c62828]"
          >
            Back to Featured Products
          </Link>

        </div>

      </main>
    );
  }

  /* ================= BASIC DATA ================= */

  const title =
    product.name ||
    product.title ||
    product.productName ||
    "Product";

  const image =
    product.image ||
    product.thumbnail ||
    product.images?.[0] ||
    "/images/product-placeholder.png";

  const images = Array.isArray(product.images)
    ? product.images
    : [image];

  const price = Number(
    product.price ||
      product.salePrice ||
      product.currentPrice ||
      0
  );

  const oldPrice = Number(
    product.oldPrice ||
      product.previousPrice ||
      product.regularPrice ||
      product.originalPrice ||
      0
  );

  /* ================= DISCOUNT ================= */

  const saved =
    oldPrice > price
      ? oldPrice - price
      : 0;

  const discount =
    oldPrice > price
      ? Math.round((saved / oldPrice) * 100)
      : 0;

  /* ================= RATING ================= */

  const rating = Number(
    product.rating ||
      product.ratings ||
      product.averageRating ||
      0
  );

  const reviewCount = Number(
    product.reviewCount ||
      product.reviewsCount ||
      product.totalReviews ||
      product.numReviews ||
      0
  );

  /* ================= STOCK ================= */

  const stock =
    product.stock ??
    product.stockQuantity ??
    product.quantity ??
    null;

  const inStock =
    product.inStock !== undefined
      ? product.inStock
      : stock === null
        ? true
        : Number(stock) > 0;

  /* ================= OTHER DATA ================= */

  const brand =
    product.brand ||
    product.brandName ||
    "";

  const category =
    product.category ||
    product.categoryName ||
    "";

  const sku =
    product.sku ||
    product.SKU ||
    product.productCode ||
    "";

  const description =
    product.description ||
    product.shortDescription ||
    product.details ||
    "";

  /* ================= SIZE ================= */

  const sizes =
    product.sizes ||
    product.size ||
    product.availableSizes ||
    [];

  const sizeList = Array.isArray(sizes)
    ? sizes
    : typeof sizes === "string"
      ? sizes
          .split(",")
          .map((item) => item.trim())
          .filter(Boolean)
      : [];

  /* ================= COLOR ================= */

  const colors =
    product.colors ||
    product.color ||
    product.availableColors ||
    [];

  const colorList = Array.isArray(colors)
    ? colors
    : typeof colors === "string"
      ? colors
          .split(",")
          .map((item) => item.trim())
          .filter(Boolean)
      : [];

  /* ================= SPECIFICATIONS ================= */

  const specifications =
    product.specifications ||
    product.specs ||
    product.features ||
    null;

  return (
    <main className="min-h-screen bg-[#f5f6f8] py-8 md:py-12">

      <div className="mx-auto w-[92%] max-w-[1400px]">

        {/* ================= BREADCRUMB ================= */}

        <div className="mb-6 text-sm text-gray-500">

          <Link
            href="/"
            className="hover:text-[#e53935]"
          >
            Home
          </Link>

          <span className="mx-2">
            /
          </span>

          <Link
            href="/featuredproducts"
            className="hover:text-[#e53935]"
          >
            Featured Products
          </Link>

          <span className="mx-2">
            /
          </span>

          <span className="text-gray-700">
            {title}
          </span>

        </div>

        {/* ================= PRODUCT ================= */}

        <div className="overflow-hidden rounded-xl bg-white shadow-sm">

          <div className="grid md:grid-cols-2">

            {/* ================= IMAGE ================= */}

            <div className="border-b border-gray-100 p-5 md:border-b-0 md:border-r md:p-10">

              {discount > 0 && (
                <div className="mb-4">
                  <span className="inline-block rounded-md bg-[#fff0f0] px-3 py-2 text-sm font-semibold text-[#e53935]">
                    Save {saved.toLocaleString("en-BD")}৳ (-{discount}%)
                  </span>
                </div>
              )}

              <div className="flex h-[350px] items-center justify-center md:h-[500px]">

                <Image
                  src={image}
                  alt={title}
                  width={600}
                  height={600}
                  className="max-h-full w-full object-contain"
                />

              </div>

              {/* Additional Images */}

              {images.length > 1 && (
                <div className="mt-5 flex gap-3 overflow-x-auto">

                  {images.map((item, index) => (
                    <div
                      key={index}
                      className="flex h-20 w-20 shrink-0 items-center justify-center rounded-md border border-gray-200 p-2"
                    >

                      <Image
                        src={item}
                        alt={`${title} ${index + 1}`}
                        width={80}
                        height={80}
                        className="h-full w-full object-contain"
                      />

                    </div>
                  ))}

                </div>
              )}

            </div>

            {/* ================= INFORMATION ================= */}

            <div className="p-6 md:p-10">

              {/* Title */}

              <h1 className="text-2xl font-bold leading-9 text-gray-800 md:text-3xl">
                {title}
              </h1>

              {/* Rating */}

              {rating > 0 && (
                <div className="mt-4 flex items-center gap-3">

                  <span className="text-lg text-[#f59e0b]">
                    ★
                  </span>

                  <span className="font-semibold text-gray-700">
                    {rating.toFixed(1)}
                  </span>

                  {reviewCount > 0 && (
                    <span className="text-sm text-gray-500">
                      ({reviewCount} reviews)
                    </span>
                  )}

                </div>
              )}

              {/* Price */}

              <div className="mt-6 flex flex-wrap items-center gap-3">

                <span className="text-3xl font-bold text-[#e53935]">
                  {price.toLocaleString("en-BD")}৳
                </span>

                {oldPrice > price && (
                  <del className="text-lg text-gray-400">
                    {oldPrice.toLocaleString("en-BD")}৳
                  </del>
                )}

              </div>

              {/* Stock */}

              <div className="mt-5">

                {inStock ? (
                  <span className="inline-flex rounded-md bg-green-50 px-3 py-2 text-sm font-semibold text-green-600">
                    ✓ In Stock
                    {stock !== null &&
                      ` (${stock} available)`}
                  </span>
                ) : (
                  <span className="inline-flex rounded-md bg-red-50 px-3 py-2 text-sm font-semibold text-red-600">
                    Out of Stock
                  </span>
                )}

              </div>

              {/* Basic Details */}

              <div className="mt-7 border-t border-gray-200 pt-6">

                {brand && (
                  <div className="mb-4 flex gap-3 text-sm">
                    <span className="w-24 font-semibold text-gray-700">
                      Brand
                    </span>

                    <span className="text-gray-500">
                      {brand}
                    </span>
                  </div>
                )}

                {category && (
                  <div className="mb-4 flex gap-3 text-sm">
                    <span className="w-24 font-semibold text-gray-700">
                      Category
                    </span>

                    <span className="text-gray-500">
                      {category}
                    </span>
                  </div>
                )}

                {sku && (
                  <div className="mb-4 flex gap-3 text-sm">
                    <span className="w-24 font-semibold text-gray-700">
                      SKU
                    </span>

                    <span className="text-gray-500">
                      {sku}
                    </span>
                  </div>
                )}

                {product.id && (
                  <div className="flex gap-3 text-sm">
                    <span className="w-24 font-semibold text-gray-700">
                      Product ID
                    </span>

                    <span className="text-gray-500">
                      {product.id}
                    </span>
                  </div>
                )}

              </div>

              {/* SIZE */}

              {sizeList.length > 0 && (
                <div className="mt-7">

                  <h3 className="mb-3 font-semibold text-gray-800">
                    Select Size
                  </h3>

                  <div className="flex flex-wrap gap-2">

                    {sizeList.map((size, index) => (
                      <button
                        key={index}
                        type="button"
                        className="rounded-md border border-gray-300 px-4 py-2 text-sm hover:border-[#e53935] hover:text-[#e53935]"
                      >
                        {String(size)}
                      </button>
                    ))}

                  </div>

                </div>
              )}

              {/* COLOR */}

              {colorList.length > 0 && (
                <div className="mt-6">

                  <h3 className="mb-3 font-semibold text-gray-800">
                    Available Colors
                  </h3>

                  <div className="flex flex-wrap gap-2">

                    {colorList.map((color, index) => (
                      <button
                        key={index}
                        type="button"
                        className="rounded-md border border-gray-300 px-4 py-2 text-sm hover:border-[#e53935] hover:text-[#e53935]"
                      >
                        {String(color)}
                      </button>
                    ))}

                  </div>

                </div>
              )}

              {/* BUTTONS */}

              <div className="mt-8 flex gap-3">

                <button
                  type="button"
                  disabled={!inStock}
                  className="flex-1 rounded-md bg-[#e53935] px-6 py-3 font-semibold text-white hover:bg-[#c62828] disabled:cursor-not-allowed disabled:bg-gray-300"
                >
                  {inStock
                    ? "Add to Cart"
                    : "Out of Stock"}
                </button>

                <button
                  type="button"
                  className="rounded-md border border-gray-300 px-5 py-3 text-xl text-gray-600 hover:border-[#e53935] hover:text-[#e53935]"
                  aria-label="Add to wishlist"
                >
                  ♡
                </button>

              </div>

            </div>

          </div>

          {/* ================= DESCRIPTION ================= */}

          {description && (
            <div className="border-t border-gray-200 p-6 md:p-10">

              <h2 className="text-2xl font-bold text-gray-800">
                Description
              </h2>

              <div className="mt-5 whitespace-pre-line text-[15px] leading-7 text-gray-600">
                {description}
              </div>

            </div>
          )}

          {/* ================= SPECIFICATIONS ================= */}

          {specifications && (
            <div className="border-t border-gray-200 p-6 md:p-10">

              <h2 className="text-2xl font-bold text-gray-800">
                Specifications
              </h2>

              <div className="mt-5 overflow-hidden rounded-lg border border-gray-200">

                {typeof specifications === "object" &&
                !Array.isArray(specifications) ? (

                  Object.entries(specifications).map(
                    ([key, value], index) => (
                      <div
                        key={key}
                        className={`grid grid-cols-1 sm:grid-cols-3 ${
                          index % 2 === 0
                            ? "bg-gray-50"
                            : "bg-white"
                        }`}
                      >

                        <div className="border-b border-gray-200 p-4 font-semibold text-gray-700 sm:border-b-0 sm:border-r">
                          {key}
                        </div>

                        <div className="p-4 text-gray-600 sm:col-span-2">
                          {Array.isArray(value)
                            ? value.join(", ")
                            : String(value)}
                        </div>

                      </div>
                    )
                  )

                ) : Array.isArray(specifications) ? (

                  specifications.map((item, index) => (
                    <div
                      key={index}
                      className="border-b border-gray-200 p-4 text-gray-600 last:border-b-0"
                    >
                      {typeof item === "object"
                        ? JSON.stringify(item)
                        : String(item)}
                    </div>
                  ))

                ) : (

                  <div className="whitespace-pre-line p-5 text-gray-600">
                    {String(specifications)}
                  </div>

                )}

              </div>

            </div>
          )}

        </div>

      </div>

    </main>
  );
}