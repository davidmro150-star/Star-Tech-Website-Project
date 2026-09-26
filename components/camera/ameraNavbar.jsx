"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function CameraNavbar() {
  const searchParams = useSearchParams();

  const selectedSubcategory =
    searchParams.get("subcategory");

  const categories = [
    {
      name: "All Cameras",
      href: "/category/camera",
    },
    {
      name: "DSLR",
      href: "/category/camera?subcategory=dslr",
    },
    {
      name: "Mirrorless",
      href: "/category/camera?subcategory=mirrorless",
    },
    {
      name: "Action Camera",
      href: "/category/camera?subcategory=action-camera",
    },
    {
      name: "Camera Lens",
      href: "/category/camera?subcategory=lens",
    },
    {
      name: "Accessories",
      href: "/category/camera?subcategory=accessories",
    },
  ];

  return (
    <nav className="mb-6 border border-gray-200 bg-white">
      <div className="flex overflow-x-auto">

        {categories.map((category) => {
          const isActive =
            category.name === "All Cameras"
              ? !selectedSubcategory
              : selectedSubcategory ===
                category.name
                  .toLowerCase()
                  .replace(" ", "-");

          return (
            <Link
              key={category.name}
              href={category.href}
              className={`whitespace-nowrap border-b-2 px-5 py-3 text-sm font-medium transition ${
                isActive
                  ? "border-green-600 text-green-700"
                  : "border-transparent text-gray-600 hover:border-green-600 hover:text-green-700"
              }`}
            >
              {category.name}
            </Link>
          );
        })}

      </div>
    </nav>
  );
}