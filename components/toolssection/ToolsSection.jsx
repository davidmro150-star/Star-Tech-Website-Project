
"use client";

import Link from "next/link";
import {
  Laptop,
  MessageSquareWarning,
  Calculator,
  Settings,
} from "lucide-react";
import Container from "../Container";

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
    href: "bannersupport",
    icon: MessageSquareWarning,
  },
  {
    title: "AC Ton Calculator",
    description: "Find Perfect AC.",
    href: "Acton",
    icon: Calculator,
  },
  {
    title: "Servicing Center",
    description: "Repair Your Device",
    href: "servicescenter",
    icon: Settings,
  },
];

export default function ToolsSection() {
  return (
    <section className="bg-[#f2f4f8]py-6 min-[320px]:py-8">
      <Container>
        <div className="mx-auto">
          <div className="grid grid-cols-2 bg-[#fff] gap-2 min-[320px]:gap-3 sm:gap-4 lg:grid-cols-4">
            {tools.map((tool) => {
              const Icon = tool.icon;

              return (
                <Link
                  key={tool.title}
                  href={tool.href}
                  className="group flex min-w-0 items-center gap-2 rounded-lg border border-gray-200 bg-white p-2.5 transition hover:border-red-500 hover:shadow-md min-[320px]:gap-2.5 min-[320px]:p-3 sm:gap-4 sm:p-5"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#ef4a23] min-[320px]:h-10 min-[320px]:w-10 sm:h-12 sm:w-12">
                    <Icon
                      size={18}
                      className="text-white min-[320px]:h-5 min-[320px]:w-5 sm:h-[25px] sm:w-[25px]"
                    />
                  </div>

                  <div className="min-w-0">
                    <h3 className="truncate text-[11px] font-semibold leading-[1.3] text-gray-900 min-[320px]:text-[12px] sm:text-base">
                      {tool.title}
                    </h3>

                    <p className="mt-0.5 text-[9px] leading-[1.4] text-gray-500 min-[320px]:text-[10px] sm:mt-1 sm:text-sm">
                      {tool.description}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
