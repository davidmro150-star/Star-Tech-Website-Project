"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronDown, ChevronRight, Menu, X } from "lucide-react";
import categoryMenu from "../api/categoryMenu";


const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSubmenu, setMobileSubmenu] = useState(null);

  return (
    <nav className="w-full border-b border-gray-200 bg-white font-jost">
      {/* ================= DESKTOP NAVBAR ================= */}
      <div className="hidden xl:block">
        <div className="mx-auto max-w-[1400px] px-3">
          <div className="flex h-[54px] items-center justify-between">

            {categoryMenu.map((category) => (
              <div
                key={category.name}
                className="relative h-full"
                onMouseEnter={() => setActiveMenu(category.name)}
                onMouseLeave={() => setActiveMenu(null)}
              >
                {/* Main Category */}
                <Link
                  href={category.href}
                  className="flex h-full items-center gap-1 whitespace-nowrap px-2 text-[13px] font-medium text-gray-800 transition-colors hover:text-[#0b5d3b]"
                >
                  {category.name}

                  {category.children?.length > 0 && (
                    <ChevronDown size={13} strokeWidth={1.8} />
                  )}
                </Link>

                {/* ================= LEVEL 1 DROPDOWN ================= */}
                {activeMenu === category.name &&
                  category.children?.length > 0 && (
                    <div
                      className="absolute left-0 top-full z-50 min-w-[245px] border border-gray-200 bg-white py-2 shadow-xl"
                      onMouseEnter={() => setActiveMenu(category.name)}
                    >
                      {category.children.map((item) => (
                        <DesktopMenuItem
                          key={item.name}
                          item={item}
                        />
                      ))}
                    </div>
                  )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ================= TABLET / MOBILE NAVBAR ================= */}
      <div className="xl:hidden">
        <div className="flex h-[54px] items-center justify-between px-4">
          <span className="text-sm font-semibold text-gray-800">
            Categories
          </span>

          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex h-9 w-9 items-center justify-center rounded border border-gray-200 text-gray-700"
            aria-label="Toggle categories"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {mobileOpen && (
          <div className="border-t border-gray-200 bg-white">
            {categoryMenu.map((category) => (
              <MobileMenuItem
                key={category.name}
                item={category}
                mobileSubmenu={mobileSubmenu}
                setMobileSubmenu={setMobileSubmenu}
                setMobileOpen={setMobileOpen}
              />
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

/* =========================================================
   DESKTOP MENU ITEM
========================================================= */

const DesktopMenuItem = ({ item }) => {
  const [open, setOpen] = useState(false);

  const hasChildren = item.children?.length > 0;

  if (!hasChildren) {
    return (
      <Link
        href={item.href || "#"}
        className="flex items-center justify-between px-5 py-2.5 text-sm text-gray-700 transition-colors hover:bg-gray-50 hover:text-[#0b5d3b]"
      >
        {item.name}
      </Link>
    );
  }

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <div className="flex items-center justify-between">
        <Link
          href={item.href || "#"}
          className="flex-1 px-5 py-2.5 text-sm text-gray-700 transition-colors hover:bg-gray-50 hover:text-[#0b5d3b]"
        >
          {item.name}
        </Link>

        <ChevronRight
          size={15}
          className="mr-4 text-gray-400"
        />
      </div>

      {/* ================= LEVEL 2 / SUB-DROPDOWN ================= */}
      {open && (
        <div className="absolute left-full top-0 z-50 min-w-[230px] border border-gray-200 bg-white py-2 shadow-xl">
          {item.children.map((child) => (
            <DesktopMenuItem
              key={child.name}
              item={child}
            />
          ))}
        </div>
      )}
    </div>
  );
};

/* =========================================================
   MOBILE MENU ITEM
========================================================= */

const MobileMenuItem = ({
  item,
  mobileSubmenu,
  setMobileSubmenu,
  setMobileOpen,
}) => {
  const hasChildren = item.children?.length > 0;
  const isOpen = mobileSubmenu === item.name;

  if (!hasChildren) {
    return (
      <Link
        href={item.href || "#"}
        onClick={() => setMobileOpen(false)}
        className="flex items-center justify-between border-b border-gray-100 px-5 py-3.5 text-sm text-gray-800"
      >
        {item.name}
      </Link>
    );
  }

  return (
    <div className="border-b border-gray-100">
      <div className="flex items-center justify-between">
        <Link
          href={item.href || "#"}
          onClick={() => setMobileOpen(false)}
          className="flex-1 px-5 py-3.5 text-sm font-medium text-gray-800"
        >
          {item.name}
        </Link>

        <button
          type="button"
          onClick={() =>
            setMobileSubmenu(isOpen ? null : item.name)
          }
          className="flex h-12 w-12 items-center justify-center text-gray-500"
          aria-label={`Open ${item.name} submenu`}
        >
          <ChevronDown
            size={17}
            className={`transition-transform ${isOpen ? "rotate-180" : ""
              }`}
          />
        </button>
      </div>

      {isOpen && (
        <div className="bg-gray-50">
          {item.children.map((child) => (
            <MobileMenuItem
              key={child.name}
              item={child}
              mobileSubmenu={mobileSubmenu}
              setMobileSubmenu={setMobileSubmenu}
              setMobileOpen={setMobileOpen}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Navbar;