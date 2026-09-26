"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

const accessoriesMenu = [
  {
    name: "All Accessories",
    value: "",
  },
  {
    name: "Keyboard",
    value: "Keyboard",
  },
  {
    name: "Mechanical Keyboard",
    value: "Mechanical Keyboard",
  },
  {
    name: "Wireless Keyboard",
    value: "Wireless Keyboard",
  },
  {
    name: "Mouse",
    value: "Mouse",
  },
  {
    name: "Gaming Mouse",
    value: "Gaming Mouse",
  },
  {
    name: "Wireless Mouse",
    value: "Wireless Mouse",
  },
  {
    name: "Headphone",
    value: "Headphone",
  },
  {
    name: "Gaming Headset",
    value: "Gaming Headset",
  },
  {
    name: "Wireless Headphone",
    value: "Wireless Headphone",
  },

  {
    name: "Speaker",
    value: "Speaker",
  },
];

export default function AccessoriesNavbar() {
  const searchParams = useSearchParams();

  const activeSubcategory =
    searchParams.get("subcategory") || "";

  return (
    <section className="border-b border-gray-200 bg-white">
      <div className="w-full overflow-x-auto">
        <div className="mx-auto flex min-w-max items-center justify-center gap-2 px-4 py-3">
          {accessoriesMenu.map((item) => {
            const isActive =
              activeSubcategory === item.value;

            const href = item.value
              ? `/category/accessories?subcategory=${encodeURIComponent(
                item.value
              )}`
              : "/category/accessories";

            return (
              <Link
                key={item.name}
                href={href}
                className={`whitespace-nowrap rounded-md px-4 py-2 text-sm font-medium transition ${isActive
                    ? "bg-[#074e37] text-white"
                    : "text-gray-600 hover:bg-[#074e37] hover:text-white"
                  }`}
              >
                {item.name}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}