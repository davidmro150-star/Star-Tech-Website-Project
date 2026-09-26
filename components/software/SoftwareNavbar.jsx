"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

const softwareCategories = [
  {
    name: "All Software",
    value: "",
  },
  {
    name: "Operating System",
    value: "Operating System",
  },
  {
    name: "Windows",
    value: "Windows",
  },
  {
    name: "Windows Server",
    value: "Windows Server",
  },
  {
    name: "Office Software",
    value: "Office Software",
  },
  {
    name: "Microsoft Office",
    value: "Microsoft Office",
  },
  {
    name: "Microsoft 365",
    value: "Microsoft 365",
  },
  {
    name: "Antivirus",
    value: "Antivirus",
  },
  {
    name: "Design Software",
    value: "Design Software",
  },
];

export default function SoftwareNavbar() {
  const searchParams = useSearchParams();

  const currentSubcategory =
    searchParams.get("subcategory") || "";

  return (
    <div className="border-b bg-white">
      <div className="mx-auto flex max-w-[1400px] gap-2 overflow-x-auto px-4 py-3">

        {softwareCategories.map((item) => {
          const active =
            currentSubcategory.toLowerCase() ===
            item.value.toLowerCase();

          const href = item.value
            ? `/category/software?subcategory=${encodeURIComponent(
              item.value
            )}`
            : "/category/software";

          return (
            <Link
              key={item.name}
              href={href}
              className={`whitespace-nowrap rounded-md px-4 py-2 text-sm font-medium transition ${active
                  ? "bg-[#074E37] text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
            >
              {item.name}
            </Link>
          );
        })}

      </div>
    </div>
  );
}