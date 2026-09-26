"use client";

import Link from "next/link";
import { useState } from "react";

const phoneCategories = [
  {
    name: "Smartphone",
    href: "/category/phone?subcategory=Smartphone",
  },

  {
    name: "Android Phone",
    href: "/category/phone?subcategory=Android%20Phone",
  },

  {
    name: "iPhone",
    href: "/category/phone?subcategory=iPhone",
  },

  {
    name: "Gaming Phone",
    href: "/category/phone?subcategory=Gaming%20Phone",
  },

  {
    name: "5G Phone",
    href: "/category/phone?subcategory=5G%20Phone",
  },
];

export default function PhoneNavbar() {
  const [openMenu, setOpenMenu] = useState(null);

  return (
    <nav className="relative mt-5 border border-gray-200 bg-white">
      <div className="flex flex-wrap items-center gap-x-7 gap-y-3 px-5 py-4">
        {phoneCategories.map((item) => (
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
            </Link>
          </div>
        ))}
      </div>
    </nav>
  );
}