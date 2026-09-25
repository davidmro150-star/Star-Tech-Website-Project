"use client";

import { X } from "lucide-react";

export default function ProductSelector({
  component,
  onSelect,
  onClose,
}) {
  if (!component) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4 py-6">

      <div className="flex max-h-[90vh] w-full max-w-2xl flex-col rounded-lg bg-white shadow-xl">

        {/* Header */}
        <div className="flex items-center justify-between border-b border-gray-200 px-5 py-4">
          <div>
            <h2 className="text-lg font-bold text-gray-800">
              Choose {component.name}
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              Select a product for your PC build
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="flex h-9 w-9 items-center justify-center rounded-md text-gray-500 transition hover:bg-gray-100 hover:text-gray-800"
          >
            <X size={20} />
          </button>
        </div>

        {/* Products */}
        <div className="overflow-y-auto p-4">
          <div className="space-y-3">

            {component.products.map((product) => (
              <button
                key={product.id}
                type="button"
                onClick={() => onSelect(product)}
                className="flex w-full items-center justify-between gap-4 rounded-md border border-gray-200 p-4 text-left transition hover:border-[#e21b23] hover:bg-red-50/30"
              >
                <div>
                  <h3 className="text-sm font-semibold text-gray-800">
                    {product.name}
                  </h3>

                  <p className="mt-1 text-xs text-gray-500">
                    Power: {product.wattage}W
                  </p>
                </div>

                <span className="shrink-0 text-sm font-bold text-[#e21b23]">
                  ৳{product.price.toLocaleString()}
                </span>
              </button>
            ))}

          </div>
        </div>

      </div>
    </div>
  );
}