"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import Container from "../Container";

const securityCategories = [
  {
    name: "All Security",
    value: "all",
  },
  {
    name: "Dome Camera",
    value: "Dome Camera",
  },
  {
    name: "Bullet Camera",
    value: "Bullet Camera",
  },
  {
    name: "IP Camera",
    value: "IP Camera",
  },
  {
    name: "DVR",
    value: "DVR",
  },
  {
    name: "NVR",
    value: "NVR",
  },
  {
    name: "Access Control",
    value: "Access Control",
  },
  {
    name: "Smart Door Lock",
    value: "Smart Door Lock",
  },
];

export default function SecurityNavbar() {
  const searchParams = useSearchParams();

  const selectedCategory = searchParams.get("subcategory") || "all";

  return (
    <section className="border-b border-gray-200 bg-white">
      <Container>
        <div className="flex gap-6 overflow-x-auto py-4">
          {securityCategories.map((item) => {
            const href =
              item.value === "all"
                ? "/category/security"
                : `/category/security?subcategory=${encodeURIComponent(
                  item.value
                )}`;

            const active =
              selectedCategory.toLowerCase() ===
              item.value.toLowerCase();

            return (
              <Link
                key={item.value}
                href={href}
                className={`whitespace-nowrap border-b-2 pb-2 text-sm font-medium transition ${active
                    ? "border-green-700 text-green-700"
                    : "border-transparent text-gray-700 hover:text-green-700"
                  }`}
              >
                {item.name}
              </Link>
            );
          })}
        </div>
      </Container>
    </section>
  );
}