
"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import Container from "../Container";

const categories = [
  {
    name: "All",
    href: "/category/office-equipment",
  },
  {
    name: "Printer",
    href: "/category/office-equipment?subcategory=Printer",
  },
  {
    name: "Scanner",
    href: "/category/office-equipment?subcategory=Scanner",
  },
  {
    name: "Projector",
    href: "/category/office-equipment?subcategory=Projector",
  },
  {
    name: "Photocopier",
    href: "/category/office-equipment?subcategory=Photocopier",
  },
  {
    name: "POS Equipment",
    href: "/category/office-equipment?subcategory=POS%20Equipment",
  },
];

export default function OfficeEquipmentNavbar() {
  const searchParams = useSearchParams();

  const selectedSubcategory =
    searchParams.get("subcategory");

  return (
    <section className="border-b bg-white">
      <Container>
        <div className="flex gap-6 overflow-x-auto py-4">
          {categories.map((category) => {
            const isActive =
              category.name === "All"
                ? !selectedSubcategory
                : selectedSubcategory?.toLowerCase() ===
                  category.name.toLowerCase();

            return (
              <Link
                key={category.name}
                href={category.href}
                className={`whitespace - nowrap border - b - 2 pb - 1 text - sm font - medium transition ${
  isActive
    ? "border-blue-600 text-blue-600"
    : "border-transparent text-gray-700 hover:border-blue-600 hover:text-blue-600"
} `}
              >
                {category.name}
              </Link>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

