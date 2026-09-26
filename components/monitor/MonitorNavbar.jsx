"use client";

import Link from "next/link";
import { useState } from "react";

const monitorCategories = [
  {
    name: "Gaming Monitor",
    href: "/category/monitor?subcategory=Gaming%20Monitor",
    children: [
      {
        name: "144Hz Monitor",
        href: "/category/monitor?subcategory=144Hz%20Monitor",
      },
      {
        name: "165Hz Monitor",
        href: "/category/monitor?subcategory=165Hz%20Monitor",
      },
      {
        name: "240Hz Monitor",
        href: "/category/monitor?subcategory=240Hz%20Monitor",
      },
    ],
  },

  {
    name: "Professional Monitor",
    href: "/category/monitor?subcategory=Professional%20Monitor",
    children: [
      {
        name: "4K Monitor",
        href: "/category/monitor?subcategory=4K%20Monitor",
      },
      {
        name: "Color Accurate",
        href: "/category/monitor?subcategory=Color%20Accurate",
      },
    ],
  },

  {
    name: "Curved Monitor",
    href: "/category/monitor?subcategory=Curved%20Monitor",
  },

  {
    name: "Portable Monitor",
    href: "/category/monitor?subcategory=Portable%20Monitor",
  },
];

export default function MonitorNavbar() {
  const [openMenu, setOpenMenu] = useState(null);

  return (
    <nav className="relative mt-5 border border-gray-200 bg-white">
      <div className="flex flex-wrap items-center gap-x-7 gap-y-3 px-5 py-4">
        {monitorCategories.map((item) => (
          <div
            key={item.name}
            className="relative"
            onMouseEnter={() => setOpenMenu(item.name)}
            onMouseLeave={() => setOpenMenu(null)}
          >
            <Link
              href={item.href}
              className="flex items-center gap-1 text-sm font-medium text-gray-700 transition hover:text-[#0b5d3b]"
            >
              {item.name}

              {item.children && (
                <span className="text-xs">▾</span>
              )}
            </Link>

            {item.children &&
              openMenu === item.name && (
                <div className="absolute left-0 top-full z-50 mt-2 min-w-[200px] border border-gray-200 bg-white py-2 shadow-lg">
                  {item.children.map((child) => (
                    <Link
                      key={child.name}
                      href={child.href}
                      className="block px-4 py-2.5 text-sm text-gray-700 transition hover:bg-gray-50 hover:text-[#0b5d3b]"
                    >
                      {child.name}
                    </Link>
                  ))}
                </div>
              )}
          </div>
        ))}
      </div>
    </nav>
  );
}