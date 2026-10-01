"use client";

import { useMemo } from "react";
import {
  CalendarDays,
  Package,
  ShoppingBag,
  Wallet,
  ShieldCheck,
} from "lucide-react";
import productsData from "../../api/productsData";


// =========================================================
// DEMO PURCHASE HISTORY
// =========================================================
// productId connects with your existing productsData.
// purchasePrice is the price paid when the customer purchased.
// =========================================================

const purchaseHistory = [
  {
    id: 1,
    productId: 1,
    quantity: 1,
    purchasePrice: 100000,
    purchaseDate: "2026-08-15",
    warrantyMonths: 12,
  },

  {
    id: 2,
    productId: 2,
    quantity: 2,
    purchasePrice: 8500,
    purchaseDate: "2026-07-20",
    warrantyMonths: 12,
  },

  {
    id: 3,
    productId: 3,
    quantity: 1,
    purchasePrice: 80000,
    purchaseDate: "2026-06-10",
    warrantyMonths: 24,
  },
];

export default function ShoppingHistoryPage() {

  // =========================================================
  // CONNECT PURCHASE HISTORY WITH PRODUCTS DATA
  // =========================================================

  const purchases = useMemo(() => {
    return purchaseHistory
      .map((purchase) => {

        const product = productsData.find(
          (item) => item.id === purchase.productId
        );

        if (!product) return null;

        return {
          ...purchase,
          product,
        };
      })
      .filter(Boolean);
  }, []);

  // =========================================================
  // TOTAL PRODUCTS
  // =========================================================

  const totalProducts = purchases.reduce(
    (total, purchase) =>
      total + purchase.quantity,
    0
  );

  // =========================================================
  // TOTAL SPENT
  // =========================================================

  const totalSpent = purchases.reduce(
    (total, purchase) =>
      total +
      purchase.purchasePrice *
      purchase.quantity,
    0
  );

  // =========================================================
  // TOTAL ORDERS
  // =========================================================

  const totalOrders = purchases.length;

  // =========================================================
  // FORMAT PRICE
  // =========================================================

  const formatPrice = (price) => {
    return new Intl.NumberFormat("en-BD").format(price);
  };

  return (
    <main className="bg-gray-50 min-h-screen">

      {/* =====================================================
          HEADER
      ====================================================== */}

      <section className="bg-white border-b border-gray-200">

        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">

          <p className="text-sm font-semibold uppercase tracking-wider text-red-600">
            Customer Services
          </p>

          <h1 className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl">
            Shopping History
          </h1>

          <p className="mt-3 max-w-2xl text-gray-600">
            View your previous purchases, spending,
            order details, and warranty information.
          </p>

        </div>

      </section>

      {/* =====================================================
          SUMMARY
      ====================================================== */}

      <section className="py-10">

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

            {/* TOTAL PRODUCTS */}

            <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">

              <div className="flex items-center gap-4">

                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-red-50 text-red-600">
                  <ShoppingBag size={24} />
                </div>

                <div>

                  <p className="text-sm text-gray-500">
                    Products Purchased
                  </p>

                  <h2 className="mt-1 text-2xl font-bold text-gray-900">
                    {totalProducts}
                  </h2>

                </div>

              </div>

            </div>

            {/* TOTAL ORDERS */}

            <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">

              <div className="flex items-center gap-4">

                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                  <Package size={24} />
                </div>

                <div>

                  <p className="text-sm text-gray-500">
                    Total Orders
                  </p>

                  <h2 className="mt-1 text-2xl font-bold text-gray-900">
                    {totalOrders}
                  </h2>

                </div>

              </div>

            </div>

            {/* TOTAL SPENT */}

            <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">

              <div className="flex items-center gap-4">

                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-50 text-green-600">
                  <Wallet size={24} />
                </div>

                <div>

                  <p className="text-sm text-gray-500">
                    Total Spent
                  </p>

                  <h2 className="mt-1 text-2xl font-bold text-gray-900">
                    ৳{formatPrice(totalSpent)}
                  </h2>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          PURCHASE HISTORY
      ====================================================== */}

      <section className="pb-16">

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="mb-6">

            <h2 className="text-2xl font-bold text-gray-900">
              Your Purchases
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              Products you have purchased from our store.
            </p>

          </div>

          <div className="space-y-5">

            {purchases.map((purchase) => {

              const product = purchase.product;

              const totalPrice =
                purchase.purchasePrice *
                purchase.quantity;

              return (
                <div
                  key={purchase.id}
                  className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm"
                >

                  <div className="flex flex-col gap-6 lg:flex-row lg:items-center">

                    {/* IMAGE */}

                    <div className="flex h-28 w-28 shrink-0 items-center justify-center rounded-lg bg-gray-50">

                      <img
                        src={product.image}
                        alt={product.title}
                        className="max-h-24 max-w-24 object-contain"
                      />

                    </div>

                    {/* PRODUCT */}

                    <div className="min-w-0 flex-1">

                      <p className="text-xs font-semibold uppercase tracking-wide text-red-600">
                        {product.category}
                      </p>

                      <h3 className="mt-1 text-lg font-semibold text-gray-900">
                        {product.title}
                      </h3>

                      <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-500">

                        <span className="flex items-center gap-1.5">
                          <CalendarDays size={15} />
                          {purchase.purchaseDate}
                        </span>

                        <span>
                          Quantity: {purchase.quantity}
                        </span>

                        <span className="flex items-center gap-1.5">
                          <ShieldCheck size={15} />
                          Warranty: {purchase.warrantyMonths} months
                        </span>

                      </div>

                    </div>

                    {/* PRICE */}

                    <div className="shrink-0 lg:text-right">

                      <p className="text-sm text-gray-500">
                        Purchase Total
                      </p>

                      <p className="mt-1 text-xl font-bold text-gray-900">
                        ৳{formatPrice(totalPrice)}
                      </p>

                      <p className="mt-1 text-xs text-gray-500">
                        ৳{formatPrice(purchase.purchasePrice)}
                        {" "}× {purchase.quantity}
                      </p>

                    </div>

                  </div>

                </div>
              );
            })}

          </div>

        </div>

      </section>

    </main>
  );
}