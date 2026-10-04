"use client";

import Link from "next/link";
import {
  FaArrowRight,
  FaBangladeshiTakaSign,
  FaBuildingColumns,
  FaCalendarDays,
  FaCheck,
  FaCreditCard,
  FaFileCircleCheck,
  FaGlobe,
  FaLocationDot,
  FaPhone,
  FaShieldHalved,
  FaTriangleExclamation,
} from "react-icons/fa6";

/* =========================================================
   BANK DATA
========================================================= */

const banks = [
  {
    name: "AB Bank PLC",
    logo: "https://www.startech.com.bd/image/catalog/logo-brand/bank/ab-bank.webp",
    applicable: "Online & Offline",
    tenure: "3, 6 months(Online) & 3, 6, 9, 12 months(Offline)",
    minPurchase: "BDT. 5,000",
    condition: "N/A",
  },
  {
    name: "Bank Asia PLC",
    logo: "https://www.startech.com.bd/image/catalog/logo-brand/bank/bank-asia.webp",
    applicable: "Online & Offline",
    tenure: "3, 6, 9, 12 months",
    minPurchase: "BDT. 5,000(Offline), BDT. 10,000(Online)",
    condition: "N/A",
  },
  {
    name: "BRAC Bank PLC",
    logo: "https://www.startech.com.bd/image/catalog/logo-brand/bank/brac-bank.webp",
    applicable: "Online & Offline",
    tenure: "3, 6, 9, 12 months",
    minPurchase: "BDT. 5,000",
    condition: "N/A",
  },
  {
    name: "Citizens Bank PLC",
    logo: "https://www.startech.com.bd/image/catalog/logo-brand/bank/citizens-bank.webp",
    applicable: "Offline",
    tenure: "3, 6, 9, 12 months(Offline)",
    minPurchase: "BDT. 5,000",
    condition: "N/A",
  },
  {
    name: "City Bank PLC",
    logo: "https://www.startech.com.bd/image/catalog/logo-brand/bank/city-bank-logo.webp",
    applicable: "Online & Offline",
    tenure: "3, 6 months(Online) & 3, 6, 9, 12 months (Offline)",
    minPurchase: "BDT. 5,000",
    condition: "Only AMEX Card",
  },
  {
    name: "Commercial Bank of Ceylon PLC",
    logo: "https://www.startech.com.bd/image/catalog/logo-brand/banks/commercial-bank-of-ceylon-plc.webp",
    applicable: "Offline",
    tenure: "3, 6, 9, 12 months (Offline)",
    minPurchase: "BDT. 5,000",
    condition: "N/A",
  },
  {
    name: "Community Bank Bangladesh PLC",
    logo: "https://www.startech.com.bd/image/catalog/logo-brand/bank/community-bank.webp",
    applicable: "Online & Offline",
    tenure: "3, 6 months(Online) & 3, 6, 9, 12 months (Offline)",
    minPurchase: "BDT. 5,000",
    condition: "N/A",
  },
  {
    name: "Dhaka Bank PLC",
    logo: "https://www.startech.com.bd/image/catalog/logo-brand/banks/dhaka-bank-plc.webp",
    applicable: "Online & Offline",
    tenure:
      "3, 6, 9, 12 months(Online) & 3, 6, 9, 12 months(Offline)",
    minPurchase: "BDT. 5,000",
    maxPurchase: "BDT. 2,00,000",
    condition: "N/A",
  },
  {
    name: "Dutch Bangla Bank PLC",
    logo: "https://www.startech.com.bd/image/catalog/logo-brand/bank/dbbl.webp",
    applicable: "Online & Offline",
    tenure:
      "3, 6, 9, 12 months(Online) & 3, 6, 9, 12 months(Offline)",
    minPurchase: "BDT. 5,000",
    condition: "N/A",
  },
  {
    name: "Eastern Bank PLC",
    logo: "https://www.startech.com.bd/image/catalog/logo-brand/banks/eastern-bank-plc.webp",
    applicable: "Online & Offline",
    tenure: "3, 6, 9, 12 months",
    minPurchase: "BDT. 5,000",
    condition: "N/A",
  },
  {
    name: "EXIM Bank PLC",
    logo: "https://www.startech.com.bd/image/catalog/logo-brand/bank/exim-bank.webp",
    applicable: "Online",
    tenure: "3, 6 months",
    minPurchase: "BDT. 5,000",
    condition: "N/A",
  },
  {
    name: "Islami Bank Bangladesh PLC",
    logo: "https://www.startech.com.bd/image/catalog/logo-brand/banks/islami-bank-bangladesh-plc.webp",
    applicable: "Offline",
    tenure: "3, 6, 9, 12 months",
    minPurchase: "BDT. 5,000",
    condition: "N/A",
  },
  {
    name: "Jamuna Bank PLC",
    logo: "https://www.startech.com.bd/image/catalog/logo-brand/banks/jamuna-bank-plc.webp",
    applicable: "Online & Offline",
    tenure: "3, 6 months(Online) & 3, 6, 9, 12 months (Offline)",
    minPurchase: "BDT. 5,000",
    condition: "N/A",
  },
  {
    name: "LankaBangla Finance PLC",
    logo: "https://www.startech.com.bd/image/catalog/logo-brand/bank/lb.webp",
    applicable: "Online & Offline",
    tenure: "3, 6, 9, 12 months",
    minPurchase: "BDT. 5,000",
    condition: "N/A",
  },
  {
    name: "Meghna Bank PLC",
    logo: "https://www.startech.com.bd/image/catalog/logo-brand/banks/meghna-bank-plc.webp",
    applicable: "Online & Offline",
    tenure: "3, 6 months(Online) & 3, 6, 9, 12 months(Offline)",
    minPurchase: "BDT. 5,000",
    condition: "N/A",
  },
  {
    name: "Mercantile Bank PLC",
    logo: "https://www.startech.com.bd/image/catalog/logo-brand/banks/mercantile-bank-plc.webp",
    applicable: "Online & Offline",
    tenure: "3, 6 months(Online) & 3, 6, 9, 12 months (Offline)",
    minPurchase: "BDT. 5,000(Online) & BDT. 10,000(Offline)",
    condition: "N/A",
  },
  {
    name: "Midland Bank PLC",
    logo: "https://www.startech.com.bd/image/catalog/logo-brand/banks/midland-bank-plc.webp",
    applicable: "Online & Offline",
    tenure: "3, 6 months(Online) & 3, 6, 9, 12 months(Offline)",
    minPurchase: "BDT. 5,000",
    condition: "N/A",
  },
  {
    name: "Modhumoti Bank PLC",
    logo: "https://www.startech.com.bd/image/catalog/logo-brand/banks/modhumoti-bank-plc.webp",
    applicable: "Online & Offline",
    tenure: "3, 6 months(Online) & 3, 6, 9, 12 months (Offline)",
    minPurchase: "BDT. 5,000",
    maxPurchase: "BDT. 3,00,000",
    condition: "N/A",
  },
  {
    name: "Mutual Trust Bank PLC",
    logo: "https://www.startech.com.bd/image/catalog/logo-brand/banks/mutual-trust-bank-plc.webp",
    applicable: "Online & Offline",
    tenure: "3, 6, 9, 12 months",
    minPurchase: "BDT. 5,000",
    condition: "N/A",
  },
  {
    name: "National Bank PLC",
    logo: "https://www.startech.com.bd/image/catalog/logo-brand/bank/national-bank-plc.webp",
    applicable: "Offline",
    tenure: "3, 6, 9, 12 months",
    minPurchase: "BDT. 5,000",
    condition: "N/A",
  },
  {
    name: "NCC Bank PLC",
    logo: "https://www.startech.com.bd/image/catalog/logo-brand/bank/ncc-bank.webp",
    applicable: "Online & Offline",
    tenure: "3, 6 months(Online) & 3, 6, 9, 12 months(Offline)",
    minPurchase: "BDT. 5,000",
    condition: "N/A",
  },
  {
    name: "NRB Bank PLC",
    logo: "https://www.startech.com.bd/image/catalog/logo-brand/bank/nrb.webp",
    applicable: "Online & Offline",
    tenure: "3, 6 months(Online) & 3, 6, 9, 12 months(Offline)",
    minPurchase: "BDT. 5,000",
    condition: "N/A",
  },
  {
    name: "NRB Commercial Bank PLC",
    logo: "https://www.startech.com.bd/image/catalog/logo-brand/bank/nrbc-bank.webp",
    applicable: "Online & Offline",
    tenure: "3, 6 months(Online) & 3, 6, 9, 12 months(Offline)",
    minPurchase: "BDT. 5,000",
    condition: "N/A",
  },
  {
    name: "ONE Bank PLC",
    logo: "https://www.startech.com.bd/image/catalog/logo-brand/banks/one-bank-plc-0.webp",
    applicable: "Online & Offline",
    tenure: "3, 6 months(Online) & 3, 6, 9, 12 months(Offline)",
    minPurchase: "BDT. 5,000",
    condition: "N/A",
  },
  {
    name: "The Premier Bank PLC",
    logo: "https://www.startech.com.bd/image/catalog/logo-brand/bank/premier-bank.webp",
    applicable: "Online & Offline",
    tenure: "3, 6 months(Online) & 3, 6, 9, 12 months(Offline)",
    minPurchase: "BDT. 5,000(Online) & BDT. 10,000(Offline)",
    condition: "N/A",
  },
  {
    name: "Prime Bank PLC",
    logo: "https://www.startech.com.bd/image/catalog/logo-brand/bank/prime-bank.webp",
    applicable: "Online & Offline",
    tenure:
      "3, 6, 9, 12 months(Online) & 3, 6, 9, 12 months(Offline)",
    minPurchase: "BDT. 5,000(Online) & BDT. 10,000(Offline)",
    condition: "N/A",
  },
  {
    name: "Pubali Bank PLC",
    logo: "https://www.startech.com.bd/image/catalog/logo-brand/bank/pubali-bank.webp",
    applicable: "Online & Offline",
    tenure: "3, 6 months(Online) & 3, 6, 9, 12 months (Offline)",
    minPurchase: "BDT. 5,000",
    condition: "N/A",
  },
  {
    name: "Shimanto Bank PLC",
    logo: "https://www.startech.com.bd/image/catalog/logo-brand/banks/shimanto-bank-plc.webp",
    applicable: "Offline",
    tenure: "3, 6, 9, 12 months (Offline)",
    minPurchase: "BDT. 5,000",
    condition: "N/A",
  },
  {
    name: "Shahjalal Islami Bank PLC (SJIBL)",
    logo: "https://www.startech.com.bd/image/catalog/logo-brand/banks/shahjalal-islami-bank-plc.webp",
    applicable: "Online & Offline",
    tenure: "3, 6 months(Online) & 3, 6, 9, 12 months(Offline)",
    minPurchase: "BDT. 5,000",
    condition: "N/A",
  },
  {
    name: "Social Islami Bank PLC (SIBL)",
    logo: "https://www.startech.com.bd/image/catalog/logo-brand/banks/social-islami-bank-plc.webp",
    applicable: "Offline",
    tenure: "3, 6, 9, 12 months (Offline)",
    minPurchase: "BDT. 5,000",
    condition: "N/A",
  },
  {
    name: "South Bangla Agriculture Bank PLC (SBAC)",
    logo: "https://www.startech.com.bd/image/catalog/logo-brand/banks/south-bangla-agriculture-bank-plc.webp",
    applicable: "Online & Offline",
    tenure: "3, 6 months(Online) & 3, 6, 9, 12 months(Offline)",
    minPurchase: "BDT. 5,000",
    condition: "N/A",
  },
  {
    name: "Southeast Bank PLC",
    logo: "https://www.startech.com.bd/image/catalog/logo-brand/banks/southeast-bank-plc-0.webp",
    applicable: "Online & Offline",
    tenure: "3, 6, 12 months(Online) & 3, 6, 9, 12 months(Offline)",
    minPurchase: "BDT. 5,000",
    condition: "N/A",
  },
  {
    name: "Standard Bank PLC",
    logo: "https://www.startech.com.bd/image/catalog/logo-brand/banks/standard-bank-plc.webp",
    applicable: "Online & Offline",
    tenure: "3, 6 months(Online) & 3, 6, 9, 12 months(Offline)",
    minPurchase: "BDT. 5,000",
    condition: "N/A",
  },
  {
    name: "Standard Chartered Bank PLC",
    logo: "https://www.startech.com.bd/image/catalog/logo-brand/bank/scb.webp",
    applicable: "Online & Offline",
    tenure: "3, 6, 9, 12 months",
    minPurchase: "BDT. 5,000",
    condition: "N/A",
  },
  {
    name: "Trust Bank PLC",
    logo: "https://www.startech.com.bd/image/catalog/logo-brand/banks/trust-bank-plc.webp",
    applicable: "Online & Offline",
    tenure: "3, 6 months(Online) & 3, 6, 9, 12 months(Offline)",
    minPurchase: "BDT. 5,000",
    condition: "N/A",
  },
  {
    name: "UCB Bank PLC",
    logo: "https://www.startech.com.bd/image/catalog/logo-brand/banks/ucb-bank-plc.webp",
    applicable: "Online & Offline",
    tenure: "3, 6, 9, 12 months",
    minPurchase: "BDT. 5,000",
    condition: "N/A",
  },
  {
    name: "Saadiq Personal Finance",
    logo: "https://www.startech.com.bd/image/catalog/logo-brand/bank/scb-saadiq.webp",
    applicable: "Online & Offline",
    tenure: "12-60 Months",
    minPurchase: "BDT. 50,000",
    condition: "Read More",
    saadiq: true,
  },
  {
    name: "Al-Arafah Islamic Bank PLC",
    logo: "https://www.startech.com.bd/image/catalog/logo-brand/bank/al-arafah-islamic-bank-plc.webp",
    applicable: "Online & Offline",
    tenure: "3, 6, 9, 12 months",
    minPurchase: "BDT. 5,000",
    condition: "N/A",
  },
  {
    name: "Uttara Bank PLC",
    logo: "https://www.startech.com.bd/image/catalog/logo-brand/bank/uttara-bank-plc.webp",
    applicable: "Offline",
    tenure: "3, 6, 9, 12 months (Offline)",
    minPurchase: "BDT. 5,000",
    condition: "N/A",
  },
  {
    name: "IFIC Bank PLC",
    logo: "https://www.startech.com.bd/image/catalog/logo-brand/bank/ific-bank-plc-01.webp",
    applicable: "Offline",
    tenure: "3, 6, 9, 12 months (Offline)",
    minPurchase: "BDT. 5,000",
    condition: "N/A",
  },
];

/* =========================================================
   BANK CARD
========================================================= */

function BankCard({ bank }) {
  return (
    <div className="group flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-5 transition duration-300 hover:-translate-y-1 hover:border-[#e21b23] hover:shadow-xl">
      {/* LOGO */}
      <div className="mb-5 flex h-[90px] items-center justify-center rounded-xl border border-gray-100 bg-gray-50 p-4">
        <img
          src={bank.logo}
          alt={`${bank.name} logo`}
          className="max-h-[65px] max-w-[180px] object-contain"
        />
      </div>

      {/* BANK NAME */}
      <h2 className="min-h-[52px] text-lg font-bold leading-7 text-[#17212b]">
        {bank.name}
      </h2>

      <div className="my-4 h-px bg-gray-100" />

      {/* DETAILS */}
      <div className="space-y-4">
        <div>
          <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-gray-400">
            Applicable For
          </p>

          <div className="flex items-start gap-2 text-sm font-medium text-gray-700">
            {bank.applicable.includes("Online") ? (
              <FaGlobe className="mt-0.5 shrink-0 text-[#e21b23]" />
            ) : (
              <FaLocationDot className="mt-0.5 shrink-0 text-[#e21b23]" />
            )}

            <span>{bank.applicable}</span>
          </div>
        </div>

        <div>
          <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-gray-400">
            EMI Tenure
          </p>

          <div className="flex items-start gap-2 text-sm leading-6 text-gray-700">
            <FaCalendarDays className="mt-1 shrink-0 text-[#e21b23]" />
            <span>{bank.tenure}</span>
          </div>
        </div>

        <div>
          <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-gray-400">
            Min. Purchase
          </p>

          <div className="flex items-start gap-2 text-sm font-semibold text-gray-700">
            <FaBangladeshiTakaSign className="mt-0.5 shrink-0 text-[#e21b23]" />
            <span>{bank.minPurchase}</span>
          </div>
        </div>

        {bank.maxPurchase && (
          <div>
            <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-gray-400">
              Max. Purchase
            </p>

            <div className="flex items-start gap-2 text-sm font-semibold text-gray-700">
              <FaBangladeshiTakaSign className="mt-0.5 shrink-0 text-[#e21b23]" />
              <span>{bank.maxPurchase}</span>
            </div>
          </div>
        )}

        <div>
          <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-gray-400">
            Condition
          </p>

          {bank.saadiq ? (
            <a
              href="#saadiq-tc"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#e21b23] hover:underline"
            >
              Read More
              <FaArrowRight className="text-xs" />
            </a>
          ) : (
            <div className="flex items-start gap-2 text-sm text-gray-700">
              <FaCheck className="mt-0.5 shrink-0 text-green-600" />
              <span>{bank.condition}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   MAIN PAGE
========================================================= */

export default function EmiTerms() {
  return (
    <main className="bg-[#f7f8fa]">
      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="border-b border-gray-200 bg-white">
        <div className="mx-auto max-w-[1400px] px-4 py-12 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-red-50 px-4 py-2 text-sm font-semibold text-[#e21b23]">
              <FaCreditCard />
              EMI Facility
            </div>

            <h1 className="text-3xl font-bold leading-tight text-[#17212b] sm:text-4xl lg:text-5xl">
              Enjoy 0% EMI Facility From The Banks Listed Below
            </h1>

            <p className="mt-5 max-w-3xl text-base leading-7 text-gray-500">
              Choose from the available partner banks and enjoy convenient
              0% EMI facilities on eligible purchases.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          QUICK SUMMARY
      ===================================================== */}

      <section className="mx-auto max-w-[1400px] px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          <div className="rounded-2xl border border-gray-200 bg-white p-6">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-red-50 text-xl text-[#e21b23]">
              <FaBuildingColumns />
            </div>

            <h2 className="text-lg font-bold text-[#17212b]">
              Multiple Banks
            </h2>

            <p className="mt-2 text-sm leading-6 text-gray-500">
              EMI facilities are available from a wide range of participating
              banks.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-6">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-red-50 text-xl text-[#e21b23]">
              <FaCalendarDays />
            </div>

            <h2 className="text-lg font-bold text-[#17212b]">
              Up To 12 Months
            </h2>

            <p className="mt-2 text-sm leading-6 text-gray-500">
              Most listed banks provide EMI options for 3, 6, 9 and 12 months.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-6">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-red-50 text-xl text-[#e21b23]">
              <FaShieldHalved />
            </div>

            <h2 className="text-lg font-bold text-[#17212b]">
              0% EMI
            </h2>

            <p className="mt-2 text-sm leading-6 text-gray-500">
              Enjoy the listed 0% EMI facility according to applicable terms.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          BANK LIST
      ===================================================== */}

      <section className="mx-auto max-w-[1400px] px-4 pb-14 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-[#17212b] sm:text-3xl">
            Participating Banks
          </h2>

          <p className="mt-2 text-sm leading-6 text-gray-500 sm:text-base">
            Check the applicable payment method, EMI tenure and minimum
            purchase amount for each bank.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {banks.map((bank) => (
            <BankCard
              key={bank.name}
              bank={bank}
            />
          ))}
        </div>
      </section>

      {/* =====================================================
          BANGLA TERMS
      ===================================================== */}

      <section className="bg-white py-14">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-red-50 text-xl text-[#e21b23]">
              <FaFileCircleCheck />
            </div>

            <h2 className="text-2xl font-bold text-[#17212b] sm:text-3xl">
              EMI সুবিধা কার্যকরের শর্তাবলি
            </h2>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-[#f7f8fa] p-6 sm:p-8">
            <div className="space-y-5 text-sm leading-8 text-gray-700 sm:text-base">
              <div className="flex gap-3">
                <FaCheck className="mt-2 shrink-0 text-[#e21b23]" />
                <p>
                  স্টার টেক এর যেকোনো রিটেইল আউটলেট থেকে ১২ মাসের 0% EMI
                  সুবিধাটি উপভোগ করা যাবে।
                </p>
              </div>

              <div className="flex gap-3">
                <FaCheck className="mt-2 shrink-0 text-[#e21b23]" />
                <p>
                  0% EMI সুবিধাটি সর্বোচ্চ ১২ মাস মেয়াদ এর জন্য কার্যকর হবে।
                  এখানে চাইলে আপনি ৩, ৬, ৯, ১২ মাসের EMI সুবিধাটি উপভোগ করতে
                  পারবেন।
                </p>
              </div>

              <div className="flex gap-3">
                <FaCheck className="mt-2 shrink-0 text-[#e21b23]" />
                <p>
                  সর্বনিম্ন ৫০০০ টাকার পণ্য এবং কিছু কিছু ব্যাংক এর ক্ষেত্রে
                  সর্বনিম্ন ১০০০০ টাকার পণ্য ক্রয়ের ক্ষেত্রে এই সুবিধাটি
                  প্রযোজ্য হবে।
                </p>
              </div>

              <div className="flex gap-3">
                <FaCheck className="mt-2 shrink-0 text-[#e21b23]" />
                <p>
                  অনলাইন EMI সুবিধাটি শুধুমাত্র ৩ এবং ৬ মাসের জন্য প্রযোজ্য।
                </p>
              </div>

              <div className="flex gap-3">
                <FaCheck className="mt-2 shrink-0 text-[#e21b23]" />
                <p>
                  EMI সুবিধার ক্ষেত্রে স্পেশাল প্রাইস / ডিস্কাউন্ট প্রাইস
                  প্রযোজ্য নয়, এক্ষেত্রে রেগুলার প্রাইস প্রযোজ্য হবে।
                </p>
              </div>

              <div className="flex gap-3">
                <FaCheck className="mt-2 shrink-0 text-[#e21b23]" />
                <p>
                  EMI কার্যকর হতে ৭ কর্মদিবস অথবা আরো বেশি সময় লাগতে পারে।
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          SAADIQ BANNER
      ===================================================== */}

      <section className="mx-auto max-w-[1400px] px-4 py-12 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white">
          <img
            src="https://www.startech.com.bd/image/catalog/logo-brand/bank/saadiq-pf-banner.webp"
            alt="Saadiq Personal Finance"
            className="h-auto w-full object-cover"
          />
        </div>
      </section>

      {/* =====================================================
          SAADIQ TERMS
      ===================================================== */}

      <section
        id="saadiq-tc"
        className="bg-white py-14"
      >
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-[#17212b] sm:text-3xl">
              Saadiq Personal Finance সুবিধার শর্তাবলি
            </h2>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-[#f7f8fa] p-6 sm:p-8">
            <div className="space-y-5 text-sm leading-8 text-gray-700 sm:text-base">
              <div className="flex gap-3">
                <FaCheck className="mt-2 shrink-0 text-[#e21b23]" />
                <p>
                  চাকুরীজীবীর ক্ষেত্রে যেকোনো ব্যাংকে সেলারি একাউন্ট থাকলে
                  অথবা ব্যবসায়ী বা ডাক্তার হলে এই সুবিধাটি পেতে পারেন।
                </p>
              </div>

              <div className="flex gap-3">
                <FaCheck className="mt-2 shrink-0 text-[#e21b23]" />
                <p>
                  স্যালারি Standard Chartered Bank এ সর্বনিম্ন ২২,০০০ টাকা ও
                  অন্যান্য ব্যাংক এ সর্বনিম্ন ৩৫,০০০ টাকা স্যালারি হতে হবে।
                </p>
              </div>

              <div className="flex gap-3">
                <FaCheck className="mt-2 shrink-0 text-[#e21b23]" />
                <p>
                  ব্যবসায়ীদের ক্ষেত্রে সর্বনিম্ন ৫৫,০০০ টাকা ইনকাম থাকতে হবে।
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          SAADIQ PURCHASE RULES
      ===================================================== */}

      <section className="mx-auto max-w-[1200px] px-4 py-14 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-[#17212b] sm:text-3xl">
            Saadiq Personal Finance -এ পণ্য ক্রয়ের নিয়মাবলি
          </h2>
        </div>

        <div className="space-y-4">
          <div className="rounded-2xl border border-gray-200 bg-white p-6">
            <div className="flex gap-3">
              <FaCheck className="mt-2 shrink-0 text-[#e21b23]" />

              <p className="text-sm leading-7 text-gray-600 sm:text-base">
                ক্রেতা যে পণ্য অথবা পণ্যসমূহ কিনবেন তার একটি ফর্মাল কোটেশন
                স্টার টেক থেকে নিতে হবে।
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-6">
            <div className="flex gap-3">
              <FaCheck className="mt-2 shrink-0 text-[#e21b23]" />

              <p className="text-sm leading-7 text-gray-600 sm:text-base">
                ক্রেতা Standard Chartered Bank এর{" "}
                <a
                  href="https://www.sc.com/bd/islamic-banking/saadiq-personal-finance/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-[#e21b23] hover:underline"
                >
                  ওয়েবসাইট
                </a>{" "}
                থেকে মোট এমাউন্ট ও পেমেন্ট সময় দিয়ে Apply Now তে ক্লিক করে
                এপ্লাই করতে পারবেন অথবা ক্রেতা চাইলে স্টার টেক এর যেকোনো
                হটলাইন এজেন্টকে তার নাম ও ফোন নাম্বার দিলে ব্যাংক থেকে
                ক্রেতার সাথে যোগাযোগ করা হবে।
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-6">
            <div className="flex gap-3">
              <FaCheck className="mt-2 shrink-0 text-[#e21b23]" />

              <p className="text-sm leading-7 text-gray-600 sm:text-base">
                পরবর্তীতে সকল ডকুমেন্ট ব্যাংকে জমা দিয়ে ব্যাংক কর্তৃক
                এসেসমেন্ট এর পর ক্রেতা ব্যাংকের পে-অর্ডার নিয়ে স্টার টেক থেকে
                তার পণ্যটি কিনতে পারবেন।
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          SAADIQ CONTACT
      ===================================================== */}

      <section className="bg-[#17212b] py-12">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-gray-700 bg-[#202d38] p-6 sm:p-8">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <h2 className="text-xl font-bold text-white sm:text-2xl">
                  বিস্তারিত জানতে যোগাযোগ করুন
                </h2>

                <p className="mt-2 text-sm leading-6 text-gray-300">
                  Saadiq Personal Finance সম্পর্কে বিস্তারিত জানতে Star Tech
                  এর হটলাইনে যোগাযোগ করুন।
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                  href="tel:16793"
                  className="inline-flex items-center gap-2 rounded-lg bg-[#e21b23] px-5 py-3 text-sm font-bold text-white transition hover:bg-red-700"
                >
                  <FaPhone />
                  16793
                </a>

                <a
                  href="tel:09678002003"
                  className="inline-flex items-center gap-2 rounded-lg border border-gray-500 px-5 py-3 text-sm font-bold text-white transition hover:border-white"
                >
                  <FaPhone />
                  09678002003
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          BACK TO HOME
      ===================================================== */}

      <div className="bg-white py-8">
        <div className="flex justify-center px-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-lg bg-[#e21b23] px-6 py-3 text-sm font-bold text-white transition hover:bg-red-700"
          >
            Back to Home
            <FaArrowRight />
          </Link>
        </div>
      </div>
    </main>
  );
}