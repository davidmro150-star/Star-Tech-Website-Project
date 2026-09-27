
"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

export default function ApplianceNavbar() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const currentSubcategory = searchParams.get("subcategory");

  const items = [
    {
      name: "Appliance",
      href: "/category/appliance",
    },
    {
      name: "Refrigerator",
      href: "/category/appliance?subcategory=Refrigerator",
    },
    {
      name: "Single Door",
      href: "/category/appliance?subcategory=Single%20Door",
    },
    {
      name: "Double Door",
      href: "/category/appliance?subcategory=Double%20Door",
    },

    {
      name: "Air Conditioner",
      href: "/category/appliance?subcategory=Air%20Conditioner",
    },
    {
      name: "1 Ton AC",
      href: "/category/appliance?subcategory=1%20Ton%20AC",
    },
    {
      name: "1.5 Ton AC",
      href: "/category/appliance?subcategory=1.5%20Ton%20AC",
    },
    {
      name: "2 Ton AC",
      href: "/category/appliance?subcategory=2%20Ton%20AC",
    },
    {
      name: "Washing Machine",
      href: "/category/appliance?subcategory=Washing%20Machine",
    },
    {
      name: "Front Load",
      href: "/category/appliance?subcategory=Front%20Load",
    },
    {
      name: "Top Load",
      href: "/category/appliance?subcategory=Top%20Load",
    },
    {
      name: "Microwave Oven",
      href: "/category/appliance?subcategory=Microwave%20Oven",
    },
    {
      name: "Rice Cooker",
      href: "/category/appliance?subcategory=Rice%20Cooker",
    },
    {
      name: "Blender",
      href: "/category/appliance?subcategory=Blender",
    },
    {
      name: "Electric Oven",
      href: "/category/appliance?subcategory=Electric%20Oven",
    },
   
  ];

  const isActive = (href) => {
    const url = new URL(href, "http://localhost");

    const subcategory = url.searchParams.get("subcategory");

    // Main Appliance
    if (!subcategory) {
      return (
        pathname === "/category/appliance" &&
        !currentSubcategory
      );
    }

    // Subcategory
    return (
      pathname === "/category/appliance" &&
      currentSubcategory?.toLowerCase() ===
        subcategory.toLowerCase()
    );
  };

  return (
    <nav className=" bg-white">
      <div className="mx-auto flex max-w-[1400px] flex-wrap gap-3 px-4 py-2">
        {items.map((item) => {
          const active = isActive(item.href);

          return (
            <Link
              key={item.name + item.href}
              href={item.href}
              className={`whitespace - nowrap rounded - md px - 6 py - 3 text - sm font - medium transition px-2 py-2 text-bold ${
  active
    ? "bg-[#074e37] text-white"
    : "text-gray-600 hover:bg-[#074e37] hover:text-white"
} `}
            >
              {item.name}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}

