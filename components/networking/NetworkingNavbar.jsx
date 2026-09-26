"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

const networkingMenu = [
  {
    name: "All Networking",
    href: "/category/networking",
    path: null,
  },
  {
    name: "WiFi Router",
    path: "networking/router/wifi",
  },
  {
    name: "4G Router",
    path: "networking/router/4g",
  },
  {
    name: "5G Router",
    path: "networking/router/5g",
  },
  {
    name: "8 Port Switch",
    path: "networking/switch/8-port",
  },
  {
    name: "16 Port Switch",
    path: "networking/switch/16-port",
  },
  {
    name: "24 Port Switch",
    path: "networking/switch/24-port",
  },
  {
    name: "Network Adapter",
    path: "networking/network-adapter",
  },
  {
    name: "Access Point",
    path: "networking/access-point",
  },
  {
    name: "Network Cable",
    path: "networking/cable",
  },
];

export default function NetworkingNavbar() {
  const searchParams = useSearchParams();

  const currentPath = searchParams.get("path");

  return (
    <section className="border-b border-gray-200 bg-white">
      <div className="mx-auto max-w-[1440px] px-4">
        <div className="flex gap-6 overflow-x-auto py-4 scrollbar-hide">
          {networkingMenu.map((item) => {
            const active =
              item.path === null
                ? !currentPath
                : currentPath === item.path;

            const href =
              item.path === null
                ? item.href
                : `/category/networking?path=${encodeURIComponent(
                  item.path
                )}`;

            return (
              <Link
                key={item.name}
                href={href}
                className={`whitespace-nowrap text-sm font-medium transition ${active
                    ? "text-[#074e37]"
                    : "text-gray-600 hover:text-[#074e37]"
                  }`}
              >
                {item.name}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}