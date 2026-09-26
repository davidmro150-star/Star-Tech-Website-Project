"use client";

import Link from "next/link";
import { useState } from "react";

const componentCategories = [
  {
    name: "Processor",
    href: "/component?subcategory=Processor",
    children: [
      {
        name: "Intel",
        href: "/component?subcategory=Intel",
      },
      {
        name: "AMD Ryzen",
        href: "/component?subcategory=AMD%20Ryzen",
      },
    ],
  },

  {
    name: "Motherboard",
    href: "/component?subcategory=Motherboard",
    children: [
      {
        name: "Intel Motherboard",
        href: "/component?subcategory=Intel%20Motherboard",
      },
      {
        name: "AMD Motherboard",
        href: "/component?subcategory=AMD%20Motherboard",
      },
    ],
  },

  {
    name: "RAM",
    href: "/component?subcategory=RAM",
    children: [
      {
        name: "DDR4 RAM",
        href: "/component?subcategory=DDR4%20RAM",
      },
      {
        name: "DDR5 RAM",
        href: "/component?subcategory=DDR5%20RAM",
      },
    ],
  },

  {
    name: "Graphics Card",
    href: "/component?subcategory=Graphics%20Card",
    children: [
      {
        name: "NVIDIA",
        href: "/component?subcategory=NVIDIA",
      },
      {
        name: "AMD Radeon",
        href: "/component?subcategory=AMD%20Radeon",
      },
    ],
  },

  {
    name: "Storage",
    href: "/component?subcategory=Storage",
    children: [
      {
        name: "SSD",
        href: "/component?subcategory=SSD",
      },
      {
        name: "HDD",
        href: "/component?subcategory=HDD",
      },
      {
        name: "External Storage",
        href: "/component?subcategory=External%20Storage",
      },
    ],
  },

  {
    name: "Power Supply",
    href: "/component?subcategory=Power%20Supply",
  },

  {
    name: "PC Casing",
    href: "/component?subcategory=PC%20Casing",
  },
];

export default function ComponentNavbar() {
  const [openMenu, setOpenMenu] = useState(null);

  return (
    <nav className="relative mt-5 border border-gray-200 bg-white">
      <div className="flex flex-wrap items-center gap-x-7 gap-y-3 px-5 py-4">
        {componentCategories.map((item) => (
          <div
            key={item.name}
            className="relative"
            onMouseEnter={() =>
              setOpenMenu(item.name)
            }
            onMouseLeave={() =>
              setOpenMenu(null)
            }
          >
            <Link
              href={item.href}
              className="flex items-center gap-1 text-sm font-medium text-gray-700 transition hover:text-[#0b5d3b]"
            >
              {item.name}

              {item.children && (
                <span className="text-xs">
                  ▾
                </span>
              )}
            </Link>

            {item.children &&
              openMenu === item.name && (
                <div className="absolute left-0 top-full z-50 mt-2 min-w-[190px] border border-gray-200 bg-white py-2 shadow-lg">
                  {item.children.map(
                    (child) => (
                      <Link
                        key={child.name}
                        href={child.href}
                        className="block px-4 py-2.5 text-sm text-gray-700 transition hover:bg-gray-50 hover:text-[#0b5d3b]"
                      >
                        {child.name}
                      </Link>
                    )
                  )}
                </div>
              )}
          </div>
        ))}
      </div>
    </nav>
  );
}