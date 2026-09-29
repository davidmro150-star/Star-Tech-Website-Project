"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import Support from "./support";

const banners = [
  "/images/banners/banner1.jpg",
  "/images/banners/banner2.jpeg",
  "/images/banners/banner3.jpeg",
];

export default function HomeBanner() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const slider = setInterval(() => {
      setCurrent((prev) => (prev + 1) % banners.length);
    }, 4000);

    return () => clearInterval(slider);
  }, []);

  return (
    <section className="w-full py-4">
      <div className="mx-auto w-full max-w-[1400px] px-3">

        <div className="grid grid-cols-1 gap-3 lg:grid-cols-[2fr_1fr]">

          {/* =========================================
              MAIN BANNER
          ========================================= */}
          <Link
            href="/offers"
            className="relative block rounded-md"
          >
            <Image
              src={banners[current]}
              alt="Promotional Offer"
              width={1912}
              height={972}
              priority
              className="w-full rounded-md"
            />

            {/* SLIDER DOTS */}
            <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-2">
              {banners.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    setCurrent(index);
                  }}
                  aria-label={`Go to banner ${index + 1}`}
                  className={`h-2.5 w-2.5 rounded-full ${current === index
                      ? "bg-white"
                      : "bg-white/50"
                    }`}
                />
              ))}
            </div>
          </Link>

          {/* =========================================
              RIGHT SIDE
          ========================================= */}
          <div className="grid grid-rows-2 gap-3">

            {/* SUPPORT */}
            <Support />

            {/* CAREER */}
        
            <Link
              href="/bannercareer"
              className="relative min-h-0 rounded-md"
            >
              <Image
                src="/images/banners/banner5.png"
                alt="Career"
                fill
      
                className="rounded-md"
              />
            </Link>

          </div>

        </div>
      </div>
    </section>
  );
}