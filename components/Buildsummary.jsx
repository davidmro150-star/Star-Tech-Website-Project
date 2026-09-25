"use client";

import { ShoppingCart } from "lucide-react";

export default function BuildSummary({
  selectedComponents = {},
  onAddToCart,
}) {
  const selectedItems = Object.entries(selectedComponents);

  return (
    <aside className="h-fit rounded-lg border border-gray-200 bg-white">

      {/* Header */}
      <div className="border-b border-gray-200 px-5 py-4">
        <h2 className="text-lg font-bold text-gray-800">
          Build Summary
        </h2>

        <p className="mt-1 text-xs text-gray-500">
          Selected Products
        </p>
      </div>

      {/* Products */}
      <div className="p-5">
        {selectedItems.length === 0 ? (
          <div className="py-8 text-center">
            <p className="text-sm text-gray-400">
              No components selected yet.
            </p>

            <p className="mt-1 text-xs text-gray-400">
              Choose components from the left.
            </p>
          </div>
        ) : (
          <div className="space-y-3">
            {selectedItems.map(([key, product]) => (
              <div
                key={key}
                className="flex items-start justify-between gap-3 border-b border-gray-100 pb-3"
              >
                <div className="min-w-0">
                  <p className="truncate text-sm font-medium text-gray-700">
                    {product.name}
                  </p>

                  <p className="mt-1 text-xs text-gray-400">
                    {product.wattage}W
                  </p>
                </div>

                <span className="shrink-0 text-sm font-semibold text-gray-800">
                  ৳{product.price.toLocaleString()}
                </span>
              </div>
            ))}
          </div>
        )}

        {/* Add Cart */}
        <button
          type="button"
          onClick={onAddToCart}
          disabled={selectedItems.length === 0}
          className="mt-6 flex w-full items-center justify-center gap-2 rounded-md bg-[#e21b23] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#c9161d] disabled:cursor-not-allowed disabled:bg-gray-300"
        >
          <ShoppingCart size={18} />
          Add Complete PC to Cart
        </button>
      </div>
    </aside>
  );
}