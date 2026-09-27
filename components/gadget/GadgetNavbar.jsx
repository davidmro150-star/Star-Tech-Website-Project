"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function GadgetNavbar() {
  const searchParams = useSearchParams();

  const activeSubcategory = searchParams.get("subcategory");

  const menus = [
    {
      name: "All Gadgets",
      href: "/category/gadget",
      value: "",
    },
    {
      name: "Smart Watch",
      value: "Smart Watch",
    },
    
        {
          name: "Samsung Watch",
          value: "Samsung Watch",
        },
        {
          name: "Fitness Watch",
          value: "Fitness Watch",
        },
      
    
    {
      name: "Apple Watch",
      value: "Apple Watch",
    },
    {
      name: "Earbuds",
      value: "Earbuds",
    },
    {
      name: "Power Bank",
      value: "Power Bank",
    },
    {
      name: "Smart Home",
      value: "Smart Home",
      children: [
        {
          name: "Smart Bulb",
          value: "Smart Bulb",
        },
        {
          name: "Smart Plug",
          value: "Smart Plug",
        },
      ],
    },
    {
      name: "Bluetooth Speaker",
      value: "Bluetooth Speaker",
    },
    {
      name: "Gaming Controller",
      value: "Gaming Controller",
    },
  ];

  return (
    <section className="border-b border-gray-200 bg-white">
      <div className="mx-auto max-w-[1400px] px-4">
        <div className="flex flex-wrap items-center gap-2 py-3">

          {menus.map((menu) => {
            const isActive =
              menu.value === activeSubcategory ||
              (menu.name === "All Gadgets" && !activeSubcategory);

            return (
              <div key={menu.name} className="group relative">

                <Link
                  href={
                    menu.value
                      ? `/category/gadget?subcategory=${encodeURIComponent(
                        menu.value
                      )}`
                      : "/category/gadget"
                  }
                  className={`block whitespace-nowrap rounded-md px-4 py-2 text-sm font-medium transition ${isActive
                      ? "bg-black text-white"
                      : "text-gray-700 hover:bg-gray-100"
                    }`}
                >
                  {menu.name}
                </Link>

                {menu.children && (
                  <div className="invisible absolute left-0 top-full z-50 mt-1 min-w-[190px] rounded-md border border-gray-200 bg-white p-2 opacity-0 shadow-lg transition-all group-hover:visible group-hover:opacity-100">
                    {menu.children.map((child) => (
                      <Link
                        key={child.name}
                        href={`/category/gadget?subcategory=${encodeURIComponent(
                          child.value
                        )}`}
                        className="block rounded px-3 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                )}

              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
}