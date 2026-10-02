"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Search,
  User,
  Gift,
  Wrench,
  Clock3,
  Menu,
  X,
  MonitorCog,
} from "lucide-react";
import Container from "./Container";

const Header = () => {
  const [search, setSearch] = useState("");
  const [mobileMenu, setMobileMenu] = useState(false);

  // Search functionality
  const handleSearch = (e) => {
    e.preventDefault();

    const query = search.trim();

    if (!query) return;

    window.location.href = `/search?q=${encodeURIComponent(query)}`;
  };

  return (
    <header className="w-full border-b border-gray-800 bg-black">
      {/* ================= HEADER TOP ================= */}
      <Container>
        <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-8">
          <div className="flex min-h-[78px] items-center gap-3 sm:gap-4">
            {/* ================= MOBILE MENU BUTTON ================= */}
            <button
              type="button"
              onClick={() => setMobileMenu(!mobileMenu)}
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-gray-700 text-white transition hover:border-[#e21b23] hover:text-[#e21b23] md:hidden"
              aria-label={mobileMenu ? "Close menu" : "Open menu"}
            >
              {mobileMenu ? <X size={21} /> : <Menu size={21} />}
            </button>

            {/* ================= LOGO ================= */}
            <Link
              href="/"
              className="shrink-0"
              aria-label="Star Tech Home"
              onClick={() => setMobileMenu(false)}
            >
              <img
                src="/images/logo.png"
                alt="Star Tech"
                className="h-auto w-[105px] object-contain sm:w-[125px] lg:w-[140px]"
              />
            </Link>

            {/* ================= DESKTOP SEARCH ================= */}
            <form
              onSubmit={handleSearch}
              className="mx-auto hidden min-w-0 flex-1 md:block"
            >
              <div className="mx-auto flex w-full max-w-[650px]">
                {/* Search Input */}
                <div className="relative min-w-0 flex-1">
                  <Search
                    size={19}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                  />

                  <input
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search for products, brands or categories..."
                    className="h-[46px] w-full rounded-l-lg border border-gray-300 border-r-0 bg-gray-50 pl-11 pr-4 text-sm text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-[#e21b23] focus:bg-white"
                  />
                </div>

                {/* Search Button */}
                <button
                  type="submit"
                  aria-label="Search"
                  className="flex h-[46px] w-[52px] shrink-0 items-center justify-center rounded-r-lg border border-gray-300 border-l-0 bg-white text-gray-700 transition hover:text-[#e21b23]"
                >
                  <Search size={20} />
                </button>
              </div>
            </form>

            {/* ================= OFFERS ================= */}
            <Link
              href="/offers"
              className="hidden shrink-0 items-center gap-2 text-gray-300 transition text-star-red lg:flex"
            >
              <Gift size={23} strokeWidth={1.8} />

              <div className="text-left leading-tight">
                <p className="text-[15px] font-medium text-white">Offers</p>

                <p className="whitespace-nowrap text-[12px] font-medium text-gray-400">
                  Latest Offers
                </p>
              </div>
            </Link>

            {/* ================= HAPPY HOURS ================= */}
            <Link
              href="/happy-hour"
              className="hidden shrink-0 items-center gap-2 text-gray-300 transition text-star-red lg:flex"
            >
              <Clock3
                size={23}
                strokeWidth={1.8}
                className="animate-happy-hour"
              />

              <div className="text-left leading-tight">
                <p className="text-[15px] font-medium text-white">
                  Happy Hours
                </p>

                <p className="whitespace-nowrap text-[12px] font-medium text-gray-400">
                  Special Deals
                </p>
              </div>
            </Link>

            {/* ================= ACCOUNT ================= */}
            <Link
              href="/account"
              className="hidden shrink-0 items-center gap-2 text-gray-300 transition text-star-red sm:flex"
            >
              <User size={24} strokeWidth={1.8} />

              <div className="hidden leading-tight xl:block">
                <p className="text-[15px] font-medium text-white">Account</p>

                <p className="whitespace-nowrap text-[12px] font-medium text-gray-400">
                  Register or Login
                </p>
              </div>
            </Link>

            {/* ================= PC BUILDER ================= */}
            <Link
              href="/pc-builder"
              className="hidden shrink-0 items-center gap-3 rounded-md px-5 py-2.5 text-white transition hover:brightness-110 lg:flex"
              style={{
                background:
                  "linear-gradient(45deg, #00237e, #3749bb, #0bc1e9, #3749bb, #00237e)",
                backgroundSize: "400% 400%",
                animation: "gradientMove 8s ease infinite",
              }}
            >
              <div className="text-left leading-tight">
                <p className="text-[11px] text-white/80">Build Your</p>

                <p className="whitespace-nowrap text-sm font-semibold text-white">
                  PC Builder
                </p>
              </div>
            </Link>
          </div>

          {/* ================= MOBILE SEARCH ================= */}
          <form onSubmit={handleSearch} className="pb-4 md:hidden">
            <div className="flex w-full">
              {/* Input */}
              <div className="relative min-w-0 flex-1">
                <Search
                  size={18}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                />

                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search products..."
                  className="h-11 w-full rounded-l-lg border border-gray-300 border-r-0 bg-gray-50 pl-10 pr-3 text-sm text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-[#e21b23] focus:bg-white"
                />
              </div>

              {/* Button */}
              <button
                type="submit"
                className="flex h-11 w-12 shrink-0 items-center justify-center rounded-r-lg bg-[#e21b23] text-white transition hover:bg-[#c9181f]"
                aria-label="Search"
              >
                <Search size={18} />
              </button>
            </div>
          </form>
        </div>
      </Container>

      {/* ================= MOBILE MENU ================= */}
      {mobileMenu && (
        <div className="border-t border-gray-200 bg-white md:hidden">
          <Container>
            <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6">
              <nav className="py-3">
                {/* ACCOUNT */}
                <Link
                  href="/account"
                  onClick={() => setMobileMenu(false)}
                  className="flex items-center gap-3 rounded-lg bg-gray-50 p-3 transition hover:bg-gray-100"
                >
                  <User size={22} className="text-gray-700" />

                  <div>
                    <p className="text-xs text-gray-500">Account</p>

                    <p className="text-sm font-semibold text-gray-800">
                      Register or Login
                    </p>
                  </div>
                </Link>

                {/* OFFERS */}
                <Link
                  href="/offers"
                  onClick={() => setMobileMenu(false)}
                  className="flex items-center gap-3 border-b border-gray-100 py-4 text-sm font-medium text-gray-700 transition hover:text-[#e21b23]"
                >
                  <Gift size={20} />
                  <span>Latest Offers</span>
                </Link>

                {/* HAPPY HOURS */}
                <Link
                  href="/happy-hour"
                  onClick={() => setMobileMenu(false)}
                  className="flex items-center gap-3 border-b border-gray-100 py-4 text-sm font-medium text-gray-700 transition hover:text-[#e21b23]"
                >
                  <Clock3 size={20} className="animate-happy-hour" />

                  <span>Happy Hours</span>
                </Link>

                {/* PC BUILDER */}
                <Link
                  href="/pc-builder"
                  onClick={() => setMobileMenu(false)}
                  className="flex items-center gap-3 border-b border-gray-100 py-4 text-sm font-medium text-gray-700 transition hover:text-[#e21b23]"
                >
                  <MonitorCog size={20} />

                  <span>PC Builder</span>
                </Link>

                {/* SERVICE CENTER */}
                <Link
                  href="/service"
                  onClick={() => setMobileMenu(false)}
                  className="flex items-center gap-3 border-b border-gray-100 py-4 text-sm font-medium text-gray-700 transition hover:text-[#e21b23]"
                >
                  <Wrench size={20} />

                  <span>Service Center</span>
                </Link>
              </nav>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
};

export default Header;
