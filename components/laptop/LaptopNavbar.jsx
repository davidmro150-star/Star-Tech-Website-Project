"use client";

import Link from "next/link";

const laptopCategories = [
  {
    name: "All Laptops",
    href: "/laptop",
  },
  {
    name: "Gaming Laptop",
    href: "/laptop?subcategory=Gaming%20Laptop",
  },
  {
    name: "Laptop Bag",
    href: "/laptop?subcategory=Laptop%20Bag",
  },
  {
    name: "Laptop Stand",
    href: "/laptop?subcategory=Laptop%20Stand",
  },
  {
    name: "Laptop Cooler",
    href: "/laptop?subcategory=Laptop%20Cooler",
  },
  {
    name: "Laptop Accessories",
    href: "/laptop?subcategory=Laptop%20Accessories",
  },
  {
    name: "Apple MacBook",
    href: "/laptop?subcategory=Apple%20MacBook",
  },
];

export default function LaptopNavbar() {
  return (
    <nav className="mt-5 border border-gray-200 bg-white">
      <div className="flex flex-wrap items-center gap-x-7 gap-y-3 px-5 py-4">
        {laptopCategories.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="text-sm font-medium text-gray-700 transition hover:text-[#0b5d3b]"
          >
            {item.name}
          </Link>
        ))}
      </div>
    </nav>
  );
}