"use client";

import Link from "next/link";
import Container from "../Container";

const tabletCategories = [
  {
    name: "Android Tablet",
    href: "/category/tablet?subcategory=Android%20Tablet",
  },
  {
    name: "Samsung Tablet",
    href: "/category/tablet?subcategory=Samsung%20Tablet",
  },
  {
    name: "Xiaomi Tablet",
    href: "/category/tablet?subcategory=Xiaomi%20Tablet",
  },
  {
    name: "Lenovo Tablet",
    href: "/category/tablet?subcategory=Lenovo%20Tablet",
  },
  {
    name: "iPad",
    href: "/category/tablet?subcategory=iPad",
  },
  {
    name: "iPad Air",
    href: "/category/tablet?subcategory=iPad%20Air",
  },
  {
    name: "iPad Pro",
    href: "/category/tablet?subcategory=iPad%20Pro",
  },
  {
    name: "iPad Mini",
    href: "/category/tablet?subcategory=iPad%20Mini",
  },
  {
    name: "Tablet Accessories",
    href: "/category/tablet?subcategory=Tablet%20Accessories",
  },
];

export default function TabletNavbar() {
  return (
    <section className="border-b border-gray-200 bg-white">
      <Container>
        <div className="px-5">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 py-3">
            {tabletCategories.map((category) => (
              <Link
                key={category.name}
                href={category.href}
                className="whitespace-nowrap px-2 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-100 hover:text-[#0b5d3b]"
              >
                {category.name}
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}