
"use client";

import { usePathname } from "next/navigation";

import DesktopNavbar from "./DesktopNavbar";

export default function DesktopLayout({ children }) {
  const pathname = usePathname();

  const isDesktopPage =
    pathname === "/desktop" ||
    pathname.startsWith("/category/desktop");

  return (
    <>
      {isDesktopPage && <DesktopNavbar />}

      {children}
    </>
  );
}

