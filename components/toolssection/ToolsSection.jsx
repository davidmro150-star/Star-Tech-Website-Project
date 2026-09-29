"use client";

import Link from "next/link";
import { Laptop, MessageSquareWarning, Calculator, Settings } from "lucide-react";

const tools = [
  {
    title: "Laptop Finder",
    description: "Find Your Laptop Easily",
    href: "laptopfinder",
    icon: Laptop,
  },
  {
    title: "Raise a Complaint",
    description: "Share your experience",
    href: "/tool/complaint",
    icon: MessageSquareWarning,
  },
  {
    title: "AC Ton Calculator",
    description: "Find Perfect AC.",
    href: "/tool/btu-calculator",
    icon: Calculator,
  },
  {
    title: "Servicing Center",
    description: "Repair Your Device",
    href: "/tool/servicing-center",
    icon: Settings,
  },
];

export default function ToolsSection() {
  return (
    <section className="bg-white py-8">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {tools.map((tool) => {
            const Icon = tool.icon;

            return (
              <Link
                key={tool.title}
                href={tool.href}
                className="group flex items-center gap-4 rounded-lg border border-gray-200 bg-white p-5 transition hover:border-red-500 hover:shadow-md"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full  bg-[#ef4a23] transition ">
                  <Icon
                    size={25}
                    className="text-white"
                  />
                </div>

                <div>
                  <h3 className="text-base font-semibold text-gray-900">
                    {tool.title}
                  </h3>

                  <p className="mt-1 text-sm text-gray-500">
                    {tool.description}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}