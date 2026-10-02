"use client";

import { useMemo } from "react";
import {
  CalendarClock,
  CheckCircle2,
  ShieldCheck,
  TriangleAlert,
} from "lucide-react";
import productsData from "../../api/productsData";



// =========================================================
// PURCHASE DATA
// =========================================================

const purchaseHistory = [
  {
    id: 1,
    productId: 1,
    purchaseDate: "2026-08-15",
    warrantyMonths: 12,
  },

  {
    id: 2,
    productId: 2,
    purchaseDate: "2026-07-20",
    warrantyMonths: 12,
  },

  {
    id: 3,
    productId: 3,
    purchaseDate: "2026-06-10",
    warrantyMonths: 24,
  },
];

export default function WarrantyReminder() {

  // =========================================================
  // WARRANTY CALCULATION
  // =========================================================

  const warrantyProducts = useMemo(() => {

    const today = new Date();

    return purchaseHistory
      .map((purchase) => {

        const product =
          productsData.find(
            (item) =>
              item.id === purchase.productId
          );

        if (!product) return null;

        const purchaseDate =
          new Date(
            purchase.purchaseDate
          );

        const expiryDate =
          new Date(purchaseDate);

        expiryDate.setMonth(
          expiryDate.getMonth() +
          purchase.warrantyMonths
        );

        const difference =
          expiryDate.getTime() -
          today.getTime();

        const remainingDays =
          Math.ceil(
            difference /
            (1000 * 60 * 60 * 24)
          );

        const isExpired =
          remainingDays <= 0;

        const reminderActive =
          remainingDays > 0 &&
          remainingDays <= 10;

        return {
          ...purchase,
          product,
          expiryDate,
          remainingDays,
          isExpired,
          reminderActive,
        };

      })
      .filter(Boolean);

  }, []);

  // =========================================================
  // DATE FORMAT
  // =========================================================

  const formatDate = (date) => {

    return date.toLocaleDateString(
      "en-BD",
      {
        day: "numeric",
        month: "long",
        year: "numeric",
      }
    );

  };

  return (
    <main className="min-h-screen bg-gray-50">

      {/* =====================================================
          HEADER
      ====================================================== */}

      <section className="border-b border-gray-200 bg-white">

        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">

          <p className="text-sm font-semibold uppercase tracking-wider text-red-600">
            Customer Services
          </p>

          <h1 className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl">
            Warranty Reminder
          </h1>

          <p className="mt-3 max-w-2xl text-gray-600">
            Keep track of your product warranties and
            receive a reminder 10 days before the warranty
            expires.
          </p>

        </div>

      </section>

      {/* =====================================================
          WARRANTY LIST
      ====================================================== */}

      <section className="py-10">

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="mb-6">

            <h2 className="text-2xl font-bold text-gray-900">
              Your Product Warranties
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              Monitor your active and expiring warranties.
            </p>

          </div>

          <div className="space-y-5">

            {warrantyProducts.map((item) => {

              return (
                <div
                  key={item.id}
                  className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm"
                >

                  <div className="flex flex-col gap-6 lg:flex-row lg:items-center">

                    {/* IMAGE */}

                    <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-lg bg-gray-50">

                      <img
                        src={item.product.image}
                        alt={item.product.title}
                        className="max-h-20 max-w-20 object-contain"
                      />

                    </div>

                    {/* PRODUCT INFORMATION */}

                    <div className="min-w-0 flex-1">

                      <p className="text-xs font-semibold uppercase tracking-wide text-red-600">
                        {item.product.category}
                      </p>

                      <h3 className="mt-1 text-lg font-semibold text-gray-900">
                        {item.product.title}
                      </h3>

                      <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-500">

                        <span className="flex items-center gap-1.5">
                          <CalendarClock size={15} />

                          Purchased:
                          {" "}
                          {formatDate(
                            new Date(
                              item.purchaseDate
                            )
                          )}
                        </span>

                        <span>
                          Warranty:
                          {" "}
                          {item.warrantyMonths}
                          {" "}
                          months
                        </span>

                      </div>

                      <p className="mt-2 text-sm text-gray-500">

                        Warranty expires:
                        {" "}

                        <strong className="text-gray-700">
                          {formatDate(
                            item.expiryDate
                          )}
                        </strong>

                      </p>

                    </div>

                    {/* STATUS */}

                    <div className="shrink-0">

                      {item.isExpired ? (

                        <div className="flex items-center gap-2 text-red-600">

                          <TriangleAlert size={22} />

                          <div>

                            <p className="font-semibold">
                              Warranty Expired
                            </p>

                            <p className="text-xs text-gray-500">
                              Please contact customer service.
                            </p>

                          </div>

                        </div>

                      ) : item.reminderActive ? (

                        <div className="flex items-center gap-2 text-orange-600">

                          <TriangleAlert size={22} />

                          <div>

                            <p className="font-semibold">
                              Warranty Reminder
                            </p>

                            <p className="text-xs text-gray-500">
                              Expires in{" "}
                              {item.remainingDays}
                              {" "}
                              days.
                            </p>

                          </div>

                        </div>

                      ) : (

                        <div className="flex items-center gap-2 text-green-600">

                          <CheckCircle2 size={22} />

                          <div>

                            <p className="font-semibold">
                              Warranty Active
                            </p>

                            <p className="text-xs text-gray-500">
                              {item.remainingDays}
                              {" "}
                              days remaining.
                            </p>

                          </div>

                        </div>

                      )}

                    </div>

                  </div>

                </div>
              );
            })}

          </div>

        </div>

      </section>

      {/* =====================================================
          REMINDER INFORMATION
      ====================================================== */}

      <section className="pb-16">

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="rounded-xl border border-blue-100 bg-blue-50 p-6">

            <div className="flex gap-4">

              <ShieldCheck
                className="shrink-0 text-blue-600"
                size={24}
              />

              <div>

                <h3 className="font-semibold text-blue-900">
                  Warranty Reminder Policy
                </h3>

                <p className="mt-1 text-sm leading-6 text-blue-800">
                  You will receive a reminder when your
                  product warranty has 10 days or less
                  remaining. This helps you contact the
                  service center before your warranty expires.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}