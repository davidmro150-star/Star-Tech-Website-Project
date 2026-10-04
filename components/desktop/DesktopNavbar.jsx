"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import categoryMenu from "../../api/categoryMenu";
import Container from "../Container";


export default function DesktopNavbar() {
  const pathname = usePathname();

  // Find Desktop from the main category menu
  const desktopMenu = categoryMenu.find(
    (category) => category.name === "Desktop"
  );

  if (!desktopMenu) return null;

  // Find the menu item whose href matches the current URL
  function findActiveMenu(items) {
    for (const item of items) {
      if (item.href === pathname) {
        return item;
      }

      if (item.children) {
        const found = findActiveMenu(item.children);

        if (found) {
          return found;
        }
      }
    }

    return null;
  }

  /*
    /desktop
    → show Desktop children

    /category/desktop/desktop-pc
    → show Desktop PC children

    /category/desktop/desktop-pc/gaming-pc
    → show Gaming PC children

    /category/desktop/desktop-pc/gaming-pc/intel
    → show Intel children
  */

  const activeMenu = findActiveMenu(desktopMenu.children || []);

  // Decide which children should appear in navbar
  const navbarItems = activeMenu?.children
    ? activeMenu.children
    : desktopMenu.children || [];

  return (
    <nav className="border-b border-gray-200 bg-[#f2f4f8] ">
      <Container>
        <div className="mx-auto  px-4">
          <div className="flex min-h-12 items-center gap-1 overflow-x-auto">

            {navbarItems.map((item) => (
              <Link
                key={item.href || item.name}
                href={item.href}
                className="flex shrink-0 items-center px-4 py-3 text-sm font-medium text-gray-700 transition hover:bg-gray-50 hover:text-[#0b5d3b]"
              >
                {item.name}
              </Link>
            ))}

          </div>
        </div>
     </Container>
    </nav>
  );
}