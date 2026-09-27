"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

export default function GamingTVNavbar() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const currentSubcategory = searchParams.get("subcategory");

  const items = [
    {
      name: "Gaming TV",
      href: "/category/gaming-tv",
    },
    {
      name: "Smart TV",
      href: "/category/gaming-tv?subcategory=Smart%20TV",
    },
    {
      name: "4K Smart TV",
      href: "/category/gaming-tv?subcategory=4K%20Smart%20TV",
    },
    {
      name: "OLED TV",
      href: "/category/gaming-tv?subcategory=OLED%20TV",
    },
    {
      name: "QLED TV",
      href: "/category/gaming-tv?subcategory=QLED%20TV",
    },
    {
      name: "Gaming TV",
      href: "/category/gaming-tv?subcategory=Gaming%20TV",
    },
    {
      name: "120Hz",
      href: "/category/gaming-tv?subcategory=120Hz%20Gaming%20TV",
    },
    {
      name: "144Hz",
      href: "/category/gaming-tv?subcategory=144Hz%20Gaming%20TV",
    },
    {
      name: "TV Accessories",
      href: "/category/gaming-tv?subcategory=TV%20Accessories",
    },
  ];

  const isActive = (href) => {
    const url = new URL(href, "http://localhost");

    const subcategory = url.searchParams.get("subcategory");

    // Main Gaming TV
    if (!subcategory) {
      return (
        pathname === "/category/gaming-tv" &&
        !currentSubcategory
      );
    }

    // Subcategory
    return (
      pathname === "/category/gaming-tv" &&
      currentSubcategory?.toLowerCase() ===
      subcategory.toLowerCase()
    );
  };

  return (
    <nav className=" bg-white">
      <div className="mx-auto flex max-w-[1400px] flex-wrap gap-3 px-4 py-4">
        {items.map((item) => {
          const active = isActive(item.href);

          return (
            <Link
              key={item.name + item.href}
              href={item.href}
              className={`whitespace-nowrap rounded-md px-4 py-2 text-sm font-medium transition ${active
                  ? "bg-[#074e37] text-white"
                  : "text-gray-600 hover:bg-[#074e37] hover:text-white"
                }`}
            >
              {item.name}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}