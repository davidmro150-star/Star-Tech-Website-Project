"use client";

function ProductCard({ product }) {
  return (
    <div className="group rounded-xl border border-gray-200 bg-white p-3 transition hover:-translate-y-1 hover:shadow-lg">
      <div className="flex h-[210px] items-center justify-center overflow-visible rounded-lg bg-[#F7F5EE]">
        <img
          src={product.image}
          alt={product.title}
          className="h-full w-full object-contain transition duration-300 group-hover:scale-105"
        />
      </div>

      <div className="pt-4">
        <p className="text-xs text-gray-500">
          {product.brand}
        </p>

        <h3 className="mt-1 line-clamp-2 min-h-[42px] text-sm font-semibold text-gray-800">
          {product.title}
        </h3>

        <div className="mt-2 flex items-center gap-1">
          <span className="text-sm text-yellow-500">
            ★
          </span>

          <span className="text-xs text-gray-600">
            {product.rating}
          </span>
        </div>

        <div className="mt-3">
          <span className="text-lg font-bold text-[#074E37]">
            ৳{Number(product.price).toLocaleString()}
          </span>
        </div>
      </div>
    </div>
  );
}

export default function ApplianceProducts({
  products = [],
}) {
  return (
    <section className="w-full ">
      {/* =====================================================
          HEADER
      ===================================================== */}

      <div className="mb-6 flex items-center justify-between ">
        <div>
          <h2 className="text-xl font-semibold text-[#074E37]">
            Appliance Products
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            {products.length} products found
          </p>
        </div>
      </div>

      {/* =====================================================
          PRODUCTS
      ===================================================== */}

      {products.length === 0 ? (
        <div className="rounded-xl bg-white p-10 text-center">
          <h3 className="text-lg font-semibold text-gray-700">
            No products found
          </h3>

          <p className="mt-2 text-sm text-gray-500">
            Try changing your filter options.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-4 min-[400px]:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>
      )}
    </section>
  );
}