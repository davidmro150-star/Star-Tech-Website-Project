
import {
  Phone,
  MapPin,
  Mail,
  Facebook,
  Youtube,
  Instagram,
} from "lucide-react";

const aboutLinks = [
  {
    name: "Affiliate Program",
    href: "https://www.startech.com.bd/affiliate-program",
  },
  {
    name: "EMI Terms",
    href: "https://www.startech.com.bd/emi-terms",
  },
  {
    name: "About Us",
    href: "https://www.startech.com.bd/about_us",
  },
  {
    name: "Online Delivery",
    href: "https://www.startech.com.bd/online-delivery",
  },
  {
    name: "Privacy Policy",
    href: "https://www.startech.com.bd/privacy",
  },
  {
    name: "Terms and Conditions",
    href: "https://www.startech.com.bd/warranty-policy",
  },
  {
    name: "Refund and Return Policy",
    href: "https://www.startech.com.bd/refund-policy",
  },
  {
    name: "Star Point Policy",
    href: "https://www.startech.com.bd/star-point-policy",
  },
  {
    name: "Career",
    href: "https://www.startech.com.bd/career",
  },
  {
    name: "Blog",
    href: "https://www.startech.com.bd/blog",
  },
  {
    name: "Contact Us",
    href: "https://www.startech.com.bd/information/contact",
  },
  {
    name: "Brands",
    href: "https://www.startech.com.bd/product/manufacturer",
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white text-[#666]">

      {/* Main Footer */}
      <div className="mx-auto max-w-[1200px] px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">

          {/* ================= SUPPORT ================= */}
          <div>
            <h3 className="mb-5 text-[16px] font-semibold text-[#333]">
              Support
            </h3>

            <div className="space-y-5">

              {/* Phone */}
              <a
                href="tel:16793"
                className="group flex items-start gap-3"
              >
                <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#f5f5f5] text-[#e53e3e] transition-colors group-hover:bg-[#e53e3e] group-hover:text-white">
                  <Phone size={17} strokeWidth={1.8} />
                </div>

                <div>
                  <p className="mb-1 text-[13px] text-[#888]">
                    9 AM - 8 PM
                  </p>

                  <p className="text-[20px] font-semibold leading-none text-[#333] group-hover:text-[#e53e3e]">
                    16793
                  </p>
                </div>
              </a>

              {/* Store */}
              <a
                href="https://www.startech.com.bd/information/contact"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-3"
              >
                <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#f5f5f5] text-[#e53e3e] transition-colors group-hover:bg-[#e53e3e] group-hover:text-white">
                  <MapPin size={17} strokeWidth={1.8} />
                </div>

                <div>
                  <p className="mb-1 text-[13px] text-[#888]">
                    Store Locator
                  </p>

                  <p className="text-[14px] font-medium text-[#333] group-hover:text-[#e53e3e]">
                    Find Our Stores
                  </p>
                </div>
              </a>

            </div>
          </div>

          {/* ================= ABOUT US ================= */}
          <div>
            <h3 className="mb-5 text-[16px] font-semibold text-[#333]">
              About Us
            </h3>

            <ul className="space-y-[9px]">
              {aboutLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-[13px] leading-5 text-[#666] transition-colors hover:text-[#e53e3e]"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ================= STAY CONNECTED ================= */}
          <div>
            <h3 className="mb-5 text-[16px] font-semibold text-[#333]">
              Stay Connected
            </h3>

            <div className="space-y-5">

              <div>
                <p className="mb-2 text-[14px] font-semibold text-[#333]">
                  Star Tech Ltd
                </p>

                <p className="max-w-[250px] text-[13px] leading-6 text-[#666]">
                  Head Office: 28 Kazi Nazrul Islam Ave,
                  Navana Zohura Square, Dhaka 1000
                </p>
              </div>

              <div>
                <div className="mb-2 flex items-center gap-2">
                  <Mail
                    size={15}
                    className="text-[#e53e3e]"
                    strokeWidth={1.8}
                  />

                  <span className="text-[13px] font-medium text-[#333]">
                    Email:
                  </span>
                </div>

                <a
                  href="mailto:webteam@startechbd.com"
                  className="text-[13px] text-[#666] transition-colors hover:text-[#e53e3e]"
                >
                  webteam@startechbd.com
                </a>
              </div>

              {/* Social Icons */}
              <div className="flex items-center gap-2.5">
                <a
                  href="#"
                  aria-label="Facebook"
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 text-[#777] transition-all hover:border-[#1877f2] hover:bg-[#1877f2] hover:text-white"
                >
                  <Facebook size={15} />
                </a>

                <a
                  href="#"
                  aria-label="Instagram"
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 text-[#777] transition-all hover:border-[#e4405f] hover:bg-[#e4405f] hover:text-white"
                >
                  <Instagram size={15} />
                </a>

                <a
                  href="#"
                  aria-label="YouTube"
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 text-[#777] transition-all hover:border-[#ff0000] hover:bg-[#ff0000] hover:text-white"
                >
                  <Youtube size={15} />
                </a>
              </div>

            </div>
          </div>

          {/* ================= APP ================= */}
          <div>
            <h3 className="mb-5 text-[16px] font-semibold text-[#333]">
              Experience Star Tech App
            </h3>

            <p className="mb-4 text-[13px] leading-6 text-[#666]">
              Experience Star Tech App on your mobile
            </p>

            <div className="flex flex-col gap-3">

              {/* Google Play */}
              <a
                href="https://play.google.com/store/apps/details?id=com.startech.shop"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-fit overflow-hidden rounded-md transition-transform hover:scale-[1.02]"
              >
                <div className="flex h-[46px] min-w-[150px] items-center gap-2 bg-[#111] px-3 text-white">
                  <div className="text-[20px]">▶</div>

                  <div className="leading-none">
                    <span className="block text-[8px] uppercase tracking-wide text-gray-300">
                      Get it on
                    </span>

                    <span className="block mt-1 text-[14px] font-medium">
                      Google Play
                    </span>
                  </div>
                </div>
              </a>

              {/* App Store */}
              <a
                href="https://apps.apple.com/app/id6443544088"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-fit overflow-hidden rounded-md transition-transform hover:scale-[1.02]"
              >
                <div className="flex h-[46px] min-w-[150px] items-center gap-2 bg-[#111] px-3 text-white">
                  <div className="text-[21px]">●</div>

                  <div className="leading-none">
                    <span className="block text-[8px] uppercase tracking-wide text-gray-300">
                      Download on the
                    </span>

                    <span className="block mt-1 text-[14px] font-medium">
                      App Store
                    </span>
                  </div>
                </div>
              </a>

            </div>
          </div>

        </div>
      </div>

      {/* ================= BOTTOM BAR ================= */}
      <div className="border-t border-gray-200 bg-[#fafafa]">
        <div className="mx-auto flex max-w-[1200px] flex-col items-center justify-between gap-2 px-4 py-4 text-center sm:flex-row sm:px-6 lg:px-8 sm:text-left">

          <p className="text-[12px] text-[#777]">
            © 2026 Star Tech Ltd | All rights reserved
          </p>

          <p className="text-[12px] text-[#777]">
            Powered By:{" "}
            <a
              href="https://www.startech.com.bd"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-[#555] hover:text-[#e53e3e]"
            >
              Star Tech
            </a>
          </p>

        </div>
      </div>

    </footer>
  );
}

