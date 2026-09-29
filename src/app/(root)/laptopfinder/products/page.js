
"use client";

import { useMemo } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
  ArrowLeft,
  Laptop,
  RotateCcw,
} from "lucide-react";

import LaptopProducts from "../../../../../components/laptop/LaptopProducts";

// =========================================================
// GET BUDGET
// =========================================================
function getBudgetValue(value) {
  if (!value) return null;

  const match = String(value).match(/[\d,]+/);

  if (!match) return null;

  return Number(match[0].replace(/,/g, ""));
}

// =========================================================
// GET PRODUCT TEXT
// =========================================================
function getProductText(product) {
  return [
    product.title,
    product.subtitle,
    product.category,
    product.subcategory,
    product.description,
    product.information,
    product.processor,
    product.generation,
    product.ram,
    product.ssd,
    product.graphicsCard,
  ]
    .filter(Boolean)
    .join(" ")
    .toLowerCase();
}

// =========================================================
// PURPOSE MATCH
// =========================================================
function matchesPurpose(product, purpose) {
  if (!purpose) return true;

  const text = getProductText(product);

  const purposeMap = {
    "Basic Home Use": [
      "everyday",
      "home",
      "basic",
      "productivity",
      "entertainment",
    ],

    "Basic Office Use": [
      "business",
      "office",
      "productivity",
      "professional",
    ],

    Study: [
      "student",
      "study",
      "student laptop",
      "education",
    ],

    Freelancing: [
      "freelance",
      "professional",
      "productivity",
      "business",
      "creator",
    ],

    "Basic Programming": [
      "programming",
      "coding",
      "developer",
      "development",
      "core i5",
      "ryzen 5",
    ],

    "Software Development": [
      "software",
      "development",
      "developer",
      "programming",
      "coding",
      "core i5",
      "core i7",
      "ryzen 5",
      "ryzen 7",
      "m2",
      "m3",
    ],

    "Graphic Design": [
      "graphic",
      "design",
      "creative",
      "rtx",
      "creative workloads",
    ],

    "Video Editing": [
      "video",
      "editing",
      "creative",
      "rtx",
      "creative workloads",
    ],

    Gaming: [
      "gaming",
      "gaming laptop",
      "rtx",
    ],

    Streaming: [
      "streaming",
      "gaming",
      "creator",
    ],

    "Gaming & Streaming": [
      "gaming",
      "streaming",
      "rtx",
      "creator",
    ],
  };

  const keywords = purposeMap[purpose] || [];

  return keywords.some((keyword) =>
    text.includes(keyword)
  );
}

// =========================================================
// SCREEN SIZE
// =========================================================
function getScreenSize(product) {
  // Your data already has:
  // size: "15.6 inch"

  if (product?.size) {
    const match = String(product.size).match(
      /(\d+(?:\.\d+)?)/
    );

    if (match) {
      return Number(match[1]);
    }
  }

  return null;
}

// =========================================================
// SCREEN MATCH
// =========================================================
function matchesScreen(product, screenSize) {
  if (!screenSize) return true;

  const size = getScreenSize(product);

  // Don't remove a product if size is missing
  if (size === null) return true;

  if (screenSize === "Less than 13 inches") {
    return size < 13;
  }

  if (screenSize === "13 to 14.9 inches") {
    return size >= 13 && size <= 14.9;
  }

  if (screenSize === "15 to 17 inches") {
    return size >= 15 && size <= 17;
  }

  if (screenSize === "Bigger than 17 inches") {
    return size > 17;
  }

  return true;
}

// =========================================================
// PORTABILITY
// =========================================================
function matchesPortability(product, portability) {
  if (!portability) return true;

  // Not necessary = don't filter
  if (portability === "Not necessary") {
    return true;
  }

  // Your current data doesn't have a dedicated
  // portability field.
  //
  // So for "Yes", check common words if available.
  const text = getProductText(product);

  const portableWords = [
    "lightweight",
    "portable",
    "ultrabook",
    "slim",
    "thin",
  ];

  // If the data doesn't contain portability information,
  // keep the product instead of removing everything.
  const hasPortabilityInfo = portableWords.some(
    (word) => text.includes(word)
  );

  if (!hasPortabilityInfo) {
    return true;
  }

  return true;
}

// =========================================================
// FILTER PRODUCTS
// =========================================================
function filterLaptopProducts(products, answers) {
  if (!Array.isArray(products)) {
    return [];
  }

  return products.filter((product) => {
    // =====================================================
    // BUDGET
    // =====================================================
    if (answers.budget) {
      const maxBudget = getBudgetValue(
        answers.budget
      );

      const productPrice = Number(product.price);

      if (
        Number.isFinite(maxBudget) &&
        Number.isFinite(productPrice) &&
        productPrice > maxBudget
      ) {
        return false;
      }
    }

    // =====================================================
    // PURPOSE
    // =====================================================
    if (
      answers.purpose &&
      !matchesPurpose(
        product,
        answers.purpose
      )
    ) {
      return false;
    }

    // =====================================================
    // SCREEN
    // =====================================================
    if (
      answers.screenSize &&
      !matchesScreen(
        product,
        answers.screenSize
      )
    ) {
      return false;
    }

    // =====================================================
    // PORTABILITY
    // =====================================================
    if (
      !matchesPortability(
        product,
        answers.portability
      )
    ) {
      return false;
    }

    // =====================================================
    // FEATURES
    //
    // IMPORTANT:
    // Your current products don't have feature fields.
    // Therefore we DON'T filter by features yet.
    // =====================================================

    return true;
  });
}

// =========================================================
// MAIN PAGE
// =========================================================
export default function LaptopFinderProductsPage() {
  const searchParams = useSearchParams();

  // =======================================================
  // GET ANSWERS
  // =======================================================
  const answers = useMemo(() => {
    const featureParam =
      searchParams.get("features");

    return {
      budget:
        searchParams.get("budget") || "",

      purpose:
        searchParams.get("purpose") || "",

      screenSize:
        searchParams.get("screenSize") || "",

      portability:
        searchParams.get("portability") || "",

      features: featureParam
        ? featureParam
            .split(",")
            .map((item) =>
              decodeURIComponent(item)
            )
            .filter(Boolean)
        : [],
    };
  }, [searchParams]);

  // =======================================================
  // MATCHED PRODUCTS
  // =======================================================
  const matchedProducts = useMemo(() => {
    return filterLaptopProducts(
      LaptopProducts,
      answers
    );
  }, [answers]);

  // =======================================================
  // REQUIREMENTS
  // =======================================================
  const requirements = [
    answers.budget,
    answers.purpose,
    answers.screenSize,
    answers.portability,
    ...answers.features,
  ].filter(Boolean);

  // =======================================================
  // PAGE
  // =======================================================
  return (
    <main className="min-h-screen bg-gray-50">

      {/* =================================================
          HEADER
      ================================================= */}
      <section className="border-b bg-white">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">

          <div className="flex items-center justify-between">

            <Link
              href="/laptopfinder"
              className="inline-flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-red-600"
            >
              <ArrowLeft size={18} />
              Back to Laptop Finder
            </Link>

            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-50 text-red-600">
              <Laptop size={20} />
            </div>

          </div>

          <div className="mt-6 text-center">

            <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
              Recommended Laptops
            </h1>

            <p className="mt-2 text-sm text-gray-500">
              Find the laptop that matches your requirements
            </p>

          </div>
        </div>
      </section>

      {/* =================================================
          CONTENT
      ================================================= */}
      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">

        {/* =================================================
            REQUIREMENTS
        ================================================= */}
        {requirements.length > 0 && (
          <div className="mb-8 rounded-xl border bg-white p-5">

            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">

              <div>

                <h2 className="text-lg font-semibold text-gray-900">
                  Your Requirements
                </h2>

                <div className="mt-3 flex flex-wrap gap-2">

                  {requirements.map(
                    (item, index) => (
                      <span
                        key={`${item}-${index}`}
                        className="rounded-full bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-700"
                      >
                        {item}
                      </span>
                    )
                  )}

                </div>

              </div>

              <Link
                href="/laptopfinder"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:border-red-500 hover:text-red-600"
              >
                <RotateCcw size={16} />
                Change Requirements
              </Link>

            </div>
          </div>
        )}

        {/* =================================================
            RESULT COUNT
        ================================================= */}
        <div className="mb-6">

          <h2 className="text-xl font-bold text-gray-900">
            Matching Laptops
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            {matchedProducts.length} laptops found
          </p>

        </div>

        {/* =================================================
            PRODUCTS
        ================================================= */}
        {matchedProducts.length > 0 ? (

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

            {matchedProducts.map(
              (product, index) => (

                <div
                  key={`${product?.id ?? "laptop"}-${index}`}
                  className="rounded-xl border bg-white p-4 transition hover:shadow-lg"
                >

                  {/* IMAGE */}
                  <div className="flex h-52 items-center justify-center rounded-lg bg-gray-50 p-3">

                    {product.image ? (
                      <img
                        src={product.image}
                        alt={
                          product.title ||
                          "Laptop"
                        }
                        className="max-h-full max-w-full object-contain"
                      />
                    ) : (
                      <Laptop
                        size={50}
                        className="text-gray-400"
                      />
                    )}

                  </div>

                  {/* INFO */}
                  <div className="mt-4">

                    <h3 className="line-clamp-2 text-base font-semibold text-gray-900">
                      {product.title}
                    </h3>

                    <p className="mt-1 line-clamp-2 text-sm text-gray-500">
                      {product.subtitle}
                    </p>

                    {/* SPECS */}
                    <div className="mt-3 space-y-1 text-xs text-gray-500">

                      {product.processor && (
                        <p>
                          Processor:{" "}
                          <span className="font-medium text-gray-700">
                            {product.processor}
                          </span>
                        </p>
                      )}

                      {product.ram && (
                        <p>
                          RAM:{" "}
                          <span className="font-medium text-gray-700">
                            {product.ram}
                          </span>
                        </p>
                      )}

                      {product.ssd && (
                        <p>
                          SSD:{" "}
                          <span className="font-medium text-gray-700">
                            {product.ssd}
                          </span>
                        </p>
                      )}

                      {product.size && (
                        <p>
                          Display:{" "}
                          <span className="font-medium text-gray-700">
                            {product.size}
                          </span>
                        </p>
                      )}

                      {product.graphicsCard && (
                        <p>
                          Graphics:{" "}
                          <span className="font-medium text-gray-700">
                            {product.graphicsCard}
                          </span>
                        </p>
                      )}

                    </div>

                    {/* PRICE */}
                    <div className="mt-4 flex items-center justify-between">

                      <span className="text-lg font-bold text-red-600">
                        {product.price}৳
                      </span>

                      <span className="rounded-md bg-yellow-50 px-2 py-1 text-sm text-gray-700">
                        ★ {product.rating}
                      </span>

                    </div>

                    {/* STOCK */}
                    <p className="mt-2 text-xs text-gray-500">
                      {product.stock} in stock
                    </p>

                  </div>
                </div>
              )
            )}

          </div>

        ) : (

          /* =================================================
             NO PRODUCTS
          ================================================= */
          <div className="rounded-xl border bg-white px-5 py-16 text-center">

            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gray-100 text-gray-500">
              <Laptop size={30} />
            </div>

            <h2 className="mt-5 text-xl font-bold text-gray-900">
              No matching laptops found
            </h2>

            <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-gray-500">
              Try changing your budget or other requirements.
            </p>

            <Link
              href="/laptopfinder"
              className="mt-6 inline-flex items-center gap-2 rounded-lg bg-red-600 px-6 py-3 text-sm font-semibold text-white hover:bg-red-700"
            >
              <RotateCcw size={17} />
              Change Requirements
            </Link>

          </div>
        )}

      </section>
    </main>
  );
}

