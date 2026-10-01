"use client";

import { useEffect, useState } from "react";
import {
  Bell,
  BellRing,
  CheckCircle2,
  Trash2,
} from "lucide-react";
import productsData from "../../api/productsData";



// =========================================================
// DEMO ALERTS
// =========================================================

const defaultAlerts = [
  {
    id: 1,
    productId: 1,
    targetPrice: 100000,
  },

  {
    id: 2,
    productId: 2,
    targetPrice: 8000,
  },
];

export default function PriceDropAlertPage() {

  const [alerts, setAlerts] =
    useState(defaultAlerts);

  const [selectedProduct, setSelectedProduct] =
    useState("");

  const [targetPrice, setTargetPrice] =
    useState("");

  // =========================================================
  // LOAD SAVED ALERTS
  // =========================================================

  useEffect(() => {

    const savedAlerts =
      localStorage.getItem(
        "priceDropAlerts"
      );

    if (savedAlerts) {
      setAlerts(
        JSON.parse(savedAlerts)
      );
    }

  }, []);

  // =========================================================
  // SAVE ALERTS
  // =========================================================

  useEffect(() => {

    localStorage.setItem(
      "priceDropAlerts",
      JSON.stringify(alerts)
    );

  }, [alerts]);

  // =========================================================
  // FORMAT PRICE
  // =========================================================

  const formatPrice = (price) => {
    return new Intl.NumberFormat("en-BD").format(
      price
    );
  };

  // =========================================================
  // ADD ALERT
  // =========================================================

  const handleAddAlert = () => {

    if (
      !selectedProduct ||
      !targetPrice ||
      Number(targetPrice) <= 0
    ) {
      return;
    }

    const alreadyExists = alerts.some(
      (alert) =>
        alert.productId ===
        Number(selectedProduct)
    );

    if (alreadyExists) {
      return;
    }

    const newAlert = {
      id: Date.now(),
      productId: Number(selectedProduct),
      targetPrice: Number(targetPrice),
    };

    setAlerts((previous) => [
      ...previous,
      newAlert,
    ]);

    setSelectedProduct("");
    setTargetPrice("");
  };

  // =========================================================
  // REMOVE ALERT
  // =========================================================

  const removeAlert = (id) => {

    setAlerts((previous) =>
      previous.filter(
        (alert) => alert.id !== id
      )
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
            Price Drop Alert
          </h1>

          <p className="mt-3 max-w-2xl text-gray-600">
            Choose products you want to buy and set your
            target price. We will show an alert when the
            current price reaches your target.
          </p>

        </div>

      </section>

      {/* =====================================================
          CREATE ALERT
      ====================================================== */}

      <section className="py-10">

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">

            <div className="flex items-center gap-3">

              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-red-50 text-red-600">
                <Bell size={23} />
              </div>

              <div>

                <h2 className="text-lg font-bold text-gray-900">
                  Create Price Alert
                </h2>

                <p className="text-sm text-gray-500">
                  Set the price you want to pay.
                </p>

              </div>

            </div>

            <div className="mt-7 grid gap-5 lg:grid-cols-3">

              {/* PRODUCT */}

              <div className="lg:col-span-2">

                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Select Product
                </label>

                <select
                  value={selectedProduct}
                  onChange={(event) =>
                    setSelectedProduct(
                      event.target.value
                    )
                  }
                  className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm outline-none focus:border-red-500"
                >

                  <option value="">
                    Select a product
                  </option>

                  {productsData.map(
                    (product) => (
                      <option
                        key={product.id}
                        value={product.id}
                      >
                        {product.title} — ৳
                        {formatPrice(
                          product.price
                        )}
                      </option>
                    )
                  )}

                </select>

              </div>

              {/* TARGET */}

              <div>

                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Target Price
                </label>

                <input
                  type="number"
                  value={targetPrice}
                  onChange={(event) =>
                    setTargetPrice(
                      event.target.value
                    )
                  }
                  placeholder="Example: 50000"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none focus:border-red-500"
                />

              </div>

            </div>

            <button
              onClick={handleAddAlert}
              className="mt-6 inline-flex items-center gap-2 rounded-lg bg-red-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-red-700"
            >
              <Bell size={17} />
              Set Price Alert
            </button>

          </div>

        </div>

      </section>

      {/* =====================================================
          ALERTS
      ====================================================== */}

      <section className="pb-16">

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="mb-6">

            <h2 className="text-2xl font-bold text-gray-900">
              Your Price Alerts
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              Products you are currently tracking.
            </p>

          </div>

          <div className="space-y-5">

            {alerts.map((alert) => {

              const product =
                productsData.find(
                  (item) =>
                    item.id ===
                    alert.productId
                );

              if (!product) return null;

              const priceDropped =
                product.price <=
                alert.targetPrice;

              return (
                <div
                  key={alert.id}
                  className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm"
                >

                  <div className="flex flex-col gap-5 lg:flex-row lg:items-center">

                    {/* IMAGE */}

                    <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-lg bg-gray-50">

                      <img
                        src={product.image}
                        alt={product.title}
                        className="max-h-20 max-w-20 object-contain"
                      />

                    </div>

                    {/* PRODUCT */}

                    <div className="min-w-0 flex-1">

                      <h3 className="text-lg font-semibold text-gray-900">
                        {product.title}
                      </h3>

                      <div className="mt-2 flex flex-wrap gap-5 text-sm">

                        <span className="text-gray-500">
                          Current:
                          {" "}
                          <strong className="text-gray-900">
                            ৳{formatPrice(
                              product.price
                            )}
                          </strong>
                        </span>

                        <span className="text-gray-500">
                          Target:
                          {" "}
                          <strong className="text-gray-900">
                            ৳{formatPrice(
                              alert.targetPrice
                            )}
                          </strong>
                        </span>

                      </div>

                    </div>

                    {/* STATUS */}

                    <div>

                      {priceDropped ? (

                        <div className="flex items-center gap-2 text-green-600">

                          <CheckCircle2 size={21} />

                          <div>

                            <p className="font-semibold">
                              Price Target Reached
                            </p>

                            <p className="text-xs text-gray-500">
                              You can now consider purchasing.
                            </p>

                          </div>

                        </div>

                      ) : (

                        <div className="flex items-center gap-2 text-orange-600">

                          <BellRing size={21} />

                          <div>

                            <p className="font-semibold">
                              Alert Active
                            </p>

                            <p className="text-xs text-gray-500">
                              Waiting for price drop.
                            </p>

                          </div>

                        </div>

                      )}

                    </div>

                    {/* REMOVE */}

                    <button
                      onClick={() =>
                        removeAlert(alert.id)
                      }
                      className="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-200 px-4 py-2 text-sm font-medium text-gray-600 transition hover:border-red-200 hover:text-red-600"
                    >
                      <Trash2 size={16} />
                      Remove
                    </button>

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