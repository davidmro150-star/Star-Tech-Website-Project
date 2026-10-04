"use client";

import Link from "next/link";
import { useState } from "react";

const powerCategories = [
  {
    name: "UPS",
    href: "/category/power?subcategory=UPS",

  },
      {
        name: "650VA UPS",
        href: "/category/power?subcategory=650VA%20UPS",
      },
      {
        name: "850VA UPS",
        href: "/category/power?subcategory=850VA%20UPS",
      },
      {
        name: "1200VA UPS",
        href: "/category/power?subcategory=1200VA%20UPS",
      },
    
  

  {
    name: "IPS",
    href: "/category/power?subcategory=IPS",
  },

  {
    name: "Power Supply",
    href: "/category/power?subcategory=Power%20Supply",
  },
    
      {
        name: "550W",
        href: "/category/power?subcategory=550W",
      },
      {
        name: "650W",
        href: "/category/power?subcategory=650W",
      },
      {
        name: "850W",
        href: "/category/power?subcategory=850W",
      },
  
  {
    name: "Power Strip",
    href: "/category/power?subcategory=Power%20Strip",
  },
];

export default function PowerNavbar() {
  const [openMenu, setOpenMenu] = useState(null);

  return (
    <nav className="relative mt-5 border border-gray-200 bg-white">
      <div className="flex flex-wrap items-center gap-x-7 gap-y-3 px-5 py-4">
        {powerCategories.map((item) => (
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

            {item.children && openMenu === item.name && (
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