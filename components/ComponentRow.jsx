"use client";

import { ChevronDown, X } from "lucide-react";

export default function ComponentRow({
  component,
  selectedProduct,
  onChoose,
  onRemove,
}) {
  const Icon = component.icon;

  return (
    <div className="grid grid-cols-1 items-center gap-3 border-b border-gray-100 px-4 py-4 last:border-b-0 sm:grid-cols-[180px_minmax(0,1fr)]">

      {/* Component Name */}
      <div className="flex items-center gap-3 text-sm font-semibold text-gray-700">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-gray-50 text-gray-500">
          <Icon size={19} strokeWidth={1.8} />
        </div>

        <span>{component.name}</span>
      </div>

      {/* Product Selector */}
      <div className="flex min-w-0 items-center gap-2">
        <button
          type="button"
          onClick={() => onChoose(component)}
          className="flex min-h-[44px] min-w-0 flex-1 items-center justify-between rounded-md border border-gray-200 bg-white px-4 text-left text-sm transition hover:border-[#e21b23]"
        >
          {selectedProduct ? (
            <span className="truncate font-medium text-gray-800">
              {selectedProduct.name}
            </span>
          ) : (
            <span className="text-gray-400">
              Choose {component.name}
            </span>
          )}

          <ChevronDown
            size={18}
            className="ml-3 shrink-0 text-gray-400"
          />
        </button>

        {/* Price */}
        {selectedProduct && (
          <span className="hidden shrink-0 whitespace-nowrap text-sm font-semibold text-[#e21b23] md:block">
            ৳{selectedProduct.price.toLocaleString()}
          </span>
        )}

        {/* Remove */}
        {selectedProduct && (
          <button
            type="button"
            onClick={() => onRemove(component.key)}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-gray-200 text-gray-400 transition hover:border-red-500 hover:text-red-500"
            aria-label={`Remove ${component.name}`}
          >
            <X size={17} />
          </button>
        )}
      </div>
    </div>
  );
}