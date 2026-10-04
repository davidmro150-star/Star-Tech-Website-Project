"use client";

import Link from "next/link";
import {
  FaPhone,
  FaLocationDot,
  FaWhatsapp,
  FaFacebookF,
  FaYoutube,
  FaInstagram,
  FaGooglePlay,
  FaApple,
  FaPlus,
  FaCartShopping,
} from "react-icons/fa6";

const aboutLinks = [
  {
    title: "Affiliate Program",
    href: "/affiliate-program",
  },
  {
    title: "Online Delivery",
    href: "/footer/online-delivery",
  },
  {
    title: "Refund and Return Policy",
    href: "/footer/return-policy",
  },
  {
    title: "Blog",
    href: "/footer/blog",
  },
];

const middleLinks = [
  {
    title: "EMI Terms",
    href: "/footer/emiterms",
  },
  {
    title: "Privacy Policy",
    href: "/footer/privacypolicy",
  },
  {
    title: "Star Point Policy",
    href: "/footer/starpoint",
  },
  {
    title: "Contact Us",
    href: "/store/locationaddress",
  },
];

const rightLinks = [
  {
    title: "About Us",
    href: "/footer/aboutus",
  },
  {
    title: "Terms and Conditions",
    href: "/footer/termscondition",
  },
  {
    title: "Career",
    href: "/bannercareer",
  },
  {
    title: "Brands",
    href: "/footer/brands",
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#061621] text-white">
      {/* =========================================
          MAIN FOOTER
      ========================================== */}
      <div className="mx-auto max-w-[1690px] px-6 py-11 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[340px_1fr_355px] lg:gap-16">

          {/* =====================================
              SUPPORT
          ====================================== */}
          <div>
            <h3 className="mb-10 text-[16px] font-semibold uppercase tracking-[5px] text-white">
              Support
            </h3>

            {/* Phone */}
            <a
              href="tel:16793"
              className="group mb-6 flex h-[87px] w-full max-w-[353px] items-center rounded-full border border-[#253642] transition-colors duration-200 hover:border-[#e94b2e]"
            >
              <div className="flex w-[68px] items-center justify-center border-r border-[#253642]">
                <FaPhone className="text-[21px] text-white" />
              </div>

              <div className="pl-6">
                <p className="text-[13px] text-[#8d9ba4]">
                  9 AM - 8 PM
                </p>

                <p className="mt-1 text-[25px] font-medium leading-none text-[#ff4b2b]">
                  16793
                </p>
              </div>
            </a>

            {/* Store Locator */}
            <Link
              href="/store/locationaddress"
              className="group flex h-[87px] w-full max-w-[353px] items-center rounded-full border border-[#253642] transition-colors duration-200 hover:border-[#e94b2e]"
            >
              <div className="flex w-[68px] items-center justify-center border-r border-[#253642]">
                <FaLocationDot className="text-[22px] text-white" />
              </div>

              <div className="pl-6">
                <p className="text-[13px] text-[#8d9ba4]">
                  Store Locator
                </p>

                <p className="mt-1 text-[25px] font-medium leading-none text-[#ff4b2b]">
                  Find Our Stores
                </p>
              </div>
            </Link>
          </div>

          {/* =====================================
              ABOUT US
          ====================================== */}
          <div>
            <h3 className="mb-10 text-[16px] font-semibold uppercase tracking-[5px] text-white">
              About Us
            </h3>

            <div className="grid grid-cols-1 gap-x-10 gap-y-7 sm:grid-cols-3">
              
              {/* Column 1 */}
              <div className="flex flex-col gap-7">
                {aboutLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-[16px] text-[#8e9ca5] transition-colors duration-200 hover:text-[#ff4b2b]"
                  >
                    {item.title}
                  </Link>
                  
                ))}
              </div>

              {/* Column 2 */}
              <div className="flex flex-col gap-7">
                {middleLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-[16px] text-[#8e9ca5] transition-colors duration-200 hover:text-[#ff4b2b]"
                  >
                    {item.title}
                  </Link>
                ))}
              </div>

              {/* Column 3 */}
              <div className="flex flex-col gap-7">
                {rightLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-[16px] text-[#8e9ca5] transition-colors duration-200 hover:text-[#ff4b2b]"
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* =====================================
              STAY CONNECTED
          ====================================== */}
          <div>
            <h3 className="mb-10 text-[16px] font-semibold uppercase tracking-[5px] text-white">
              Stay Connected
            </h3>

            <div className="text-[16px] leading-8 text-[#8e9ca5]">
              <p className="font-semibold text-white">
                Star Tech Ltd
              </p>

              <p className="mt-2">
                Head Office: 28 Kazi Nazrul Islam
                <br />
                Ave, Navana Zohura Square, Dhaka 1000
              </p>

              <p className="mt-4">
                Email:
              </p>

              <a
                href="mailto:webteam@startechbd.com"
                className="text-[#ff4b2b] transition-colors hover:text-white"
              >
                webteam@startechbd.com
              </a>
            </div>
          </div>
        </div>

        {/* =========================================
            DIVIDER
        ========================================== */}
        <div className="mt-14 border-t border-[#25333d]" />

        {/* =========================================
            APP + SOCIAL
        ========================================== */}
        <div className="flex flex-col gap-6 py-5 md:flex-row md:items-center md:justify-between">

          {/* App Download */}
          <div className="flex flex-wrap items-center gap-5">
            <p className="text-[15px] text-[#8e9ca5]">
              Experience Star Tech App on your mobile:
            </p>

            {/* Google Play */}
            <a
              href="https://play.google.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-[51px] items-center gap-2 rounded-lg border border-[#53616a] px-3 transition-colors hover:border-white"
            >
              <FaGooglePlay className="text-[23px]" />

              <div className="leading-none">
                <span className="block text-[10px] text-[#9da8ae]">
                  Download on
                </span>

                <span className="text-[16px] font-semibold">
                  Google Play
                </span>
              </div>
            </a>

            {/* App Store */}
            <a
              href="https://www.apple.com/app-store/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-[51px] items-center gap-2 rounded-lg border border-[#53616a] px-3 transition-colors hover:border-white"
            >
              <FaApple className="text-[23px]" />

              <div className="leading-none">
                <span className="block text-[10px] text-[#9da8ae]">
                  Download on
                </span>

                <span className="text-[16px] font-semibold">
                  App Store
                </span>
              </div>
            </a>
          </div>

          {/* Social Media */}
          <div className="flex items-center gap-3">
            <a
              href="https://wa.me/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="flex h-12 w-12 items-center justify-center rounded-full bg-[#24323c] text-white transition-all hover:bg-[#ff4b2b]"
            >
              <FaWhatsapp size={21} />
            </a>

            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="flex h-12 w-12 items-center justify-center rounded-full bg-[#24323c] text-white transition-all hover:bg-[#ff4b2b]"
            >
              <FaFacebookF size={19} />
            </a>

            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="flex h-12 w-12 items-center justify-center rounded-full bg-[#24323c] text-white transition-all hover:bg-[#ff4b2b]"
            >
              <FaYoutube size={21} />
            </a>

            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex h-12 w-12 items-center justify-center rounded-full bg-[#24323c] text-white transition-all hover:bg-[#ff4b2b]"
            >
              <FaInstagram size={21} />
            </a>
          </div>
        </div>

        {/* =========================================
            BOTTOM DIVIDER
        ========================================== */}
        <div className="border-t border-[#25333d]" />

        {/* =========================================
            COPYRIGHT
        ========================================== */}
        <div className="flex flex-col gap-3 pt-5 text-[14px] text-[#8e9ca5] md:flex-row md:items-center md:justify-between ">
          <p className="">
            © 2026 Star Tech Ltd | All rights reserved
          </p>

          <p>
            Powered By:{" "}
            <Link
              href="/"
              className="transition-colors hover:text-white"
            >
              Star Tech
            </Link>
          </p>
        </div>
      </div>

      {/* ===========================================
          FIXED COMPARE + CART
      ============================================ */}
      <div className="fixed right-0 top-[65%] z-50 hidden flex-col gap-3 md:flex">

        {/* Compare */}
        <Link
          href="/compare"
          className="relative flex h-[74px] w-[74px] flex-col items-center justify-center rounded-l-md border border-[#33434d] bg-[#071923] text-white transition-colors hover:bg-[#e94b2b]"
        >
          <span className="absolute -right-1 -top-3 flex h-6 w-6 items-center justify-center rounded-full bg-[#ff4b2b] text-[12px] font-semibold">
            0
          </span>

          <div className="flex items-center gap-1">
            <FaPlus size={14} />
            <FaPlus size={14} />
          </div>

          <span className="mt-1 text-[11px] font-semibold">
            COMPARE
          </span>
        </Link>

        {/* Cart */}
        <Link
          href="/cart"
          className="relative flex h-[74px] w-[74px] flex-col items-center justify-center rounded-l-md border border-[#33434d] bg-[#071923] text-white transition-colors hover:bg-[#e94b2b]"
        >
          <span className="absolute -right-1 -top-3 flex h-6 w-6 items-center justify-center rounded-full bg-[#ff4b2b] text-[12px] font-semibold">
            0
          </span>

          <FaCartShopping size={21} />

          <span className="mt-1 text-[11px] font-semibold">
            CART
          </span>
        </Link>
      </div>
    </footer>
  );
}