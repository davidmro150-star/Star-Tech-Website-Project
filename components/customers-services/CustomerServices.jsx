"use client";

import Link from "next/link";
import {
  ArrowRight,
  BellRing,
  History,
  ShieldCheck,
} from "lucide-react";
import Container from "../Container";

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
    <section className="bg-[#f2f4f8] py-6 sm:py-20">
      <Container>
        <div className="mx-auto bg[#fff] px-4 sm:px-6 lg:px-8">

          {/* =====================================================
            SECTION HEADER
        ====================================================== */}

          <div className="mx-auto  text-center">

          

            <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
               Shopping Experience
            </h2>


          </div>

          {/* =====================================================
            SERVICE CARDS
        ====================================================== */}

          <div className="mt-8 grid gap-6 grid-cols-2 sm:grid-cols-3">

            {customerServices.map((service) => {

              const Icon = service.icon;

              return (
                <Link
                  key={service.id}
                  href={service.href}
                  className="group rounded-2xl border border-gray-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-red-200 hover:shadow-lg"
                >

                  {/* ICON */}
                  
                  <div className="flex h-8 sm:h-14 w-8 sm:w-14 items-center justify-center rounded-xl bg-red-50 text-red-600 transition group-hover:bg-red-600 group-hover:text-white">
                    <Icon size={28} />
                  </div>

                  {/* CONTENT */}

                  <div className="mt-5">
                    <h3 className=" text-sx sm:text-xl font-bold text-gray-900">
                      {service.title}
                    </h3>

                    <p className="mt-3 min-h-[72px] text-xs sm:text-sm leading-6 text-gray-600">
                      {service.description}
                    </p>
                  </div>
                  


                


                </Link>
              );
            })}

          </div>

        </div>
  </Container>
    </section>
  );
}