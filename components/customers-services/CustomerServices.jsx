"use client";

import Link from "next/link";
import {
  ArrowRight,
  BellRing,
  History,
  ShieldCheck,
} from "lucide-react";

const customerServices = [
  {
    id: 1,
    title: "Shopping History",
    description:
      "View your previous purchases, order details, spending history, and purchased products.",
    icon: History,
    href: "/customer-services/shopping-history",
  },

  {
    id: 2,
    title: "Price Drop Alert",
    description:
      "Set your desired price and get notified when your favorite products reach your target price.",
    icon: BellRing,
    href: "/customer-services/price-drop-alert",
  },

  {
    id: 3,
    title: "Warranty Reminder",
    description:
      "Keep track of your product warranties and receive reminders before your warranty expires.",
    icon: ShieldCheck,
    href: "/customer-services/warranty-reminder",
  },
];

export default function CustomerServices() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* =====================================================
            SECTION HEADER
        ====================================================== */}

        <div className="mx-auto max-w-2xl text-center">

          <p className="text-sm font-semibold uppercase tracking-wider text-red-600">
            Customer Services
          </p>

          <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Manage Your Shopping Experience
          </h2>

          <p className="mt-4 text-base leading-7 text-gray-600">
            Easily manage your purchases, track product prices,
            and stay informed about your product warranties.
          </p>

        </div>

        {/* =====================================================
            SERVICE CARDS
        ====================================================== */}

        <div className="mt-12 grid gap-6 md:grid-cols-3">

          {customerServices.map((service) => {

            const Icon = service.icon;

            return (
              <Link
                key={service.id}
                href={service.href}
                className="group rounded-2xl border border-gray-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-red-200 hover:shadow-lg"
              >

                {/* ICON */}

                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-red-50 text-red-600 transition group-hover:bg-red-600 group-hover:text-white">
                  <Icon size={28} />
                </div>

                {/* CONTENT */}

                <h3 className="mt-6 text-xl font-bold text-gray-900">
                  {service.title}
                </h3>

                <p className="mt-3 min-h-[72px] text-sm leading-6 text-gray-600">
                  {service.description}
                </p>

                {/* LINK */}

                <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-red-600">

                  <span>
                    Explore Service
                  </span>

                  <ArrowRight
                    size={17}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />

                </div>

              </Link>
            );
          })}

        </div>

      </div>
    </section>
  );
}