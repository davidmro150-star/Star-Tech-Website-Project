"use client";

import {
  ShoppingCart,
  Save,
  Printer,
  Camera,
} from "lucide-react";

export default function PCBuilderTopBar({
  handleAddToCart,
  handleSave,
  handlePrint,
  handleScreenshot,
}) {
  return (
    <div className="border-b border-gray-200">

      <div className="mx-auto flex w-full items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">

        {/* Logo */}
        <a href="/" className="shrink-0">
          <img
            src="/images/logo.png"
            alt="Star Tech"
            className="h-8 w-auto sm:h-10"
          />
        </a>

        {/* Actions */}
        <div className="flex flex-wrap items-center justify-end gap-2">

          {/* Add Cart */}
          <button
            onClick={handleAddToCart}
            className="flex items-center gap-2 rounded-md border border-gray-200 px-3 py-2 text-xs font-semibold text-gray-700 transition hover:border-[#e21b23] hover:text-[#e21b23] sm:px-4 sm:text-sm"
          >
            <ShoppingCart
              size={16}
              className="text-[#e21b23]"
            />
            <span>Add Cart</span>
          </button>

          {/* Save PC */}
          <button
            onClick={handleSave}
            className="flex items-center gap-2 rounded-md border border-gray-200 px-3 py-2 text-xs font-semibold text-gray-700 transition hover:border-[#e21b23] hover:text-[#e21b23] sm:px-4 sm:text-sm"
          >
            <Save
              size={16}
              className="text-[#e21b23]"
            />
            <span>Save PC</span>
          </button>

          {/* Print */}
          <button
            onClick={handlePrint}
            className="flex items-center gap-2 rounded-md border border-gray-200 px-3 py-2 text-xs font-semibold text-gray-700 transition hover:border-[#e21b23] hover:text-[#e21b23] sm:px-4 sm:text-sm"
          >
            <Printer
              size={16}
              className="text-[#e21b23]"
            />
            <span>Print</span>
          </button>

          {/* Screenshot */}
          <button
            onClick={handleScreenshot}
            className="flex items-center gap-2 rounded-md border border-gray-200 px-3 py-2 text-xs font-semibold text-gray-700 transition hover:border-[#e21b23] hover:text-[#e21b23] sm:px-4 sm:text-sm"
          >
            <Camera
              size={16}
              className="text-[#e21b23]"
            />
            <span>Screenshot</span>
          </button>

        </div>

      </div>

    </div>
  );
}