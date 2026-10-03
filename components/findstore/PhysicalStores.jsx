"use client";

import Link from "next/link";
import { MapPin, Search, ArrowRight } from "lucide-react";
import Container from "../Container";


export default function PhysicalStores() {
  return (
    
    <section className="w-full bg-white py-6 sm:py-[30px]">
      <Container>
        <div className=" mx-auto bg-[linear-gradient(125deg,#0bc1e9,#3749bb,#00237e)] px-3 py-5 min-[320px]:px-4 min-[320px]:py-6 sm:px-[15px] sm:py-8 md:py-10">
          <div className="flex w-full min-w-0 flex-col gap-5 md:flex-row md:items-center md:gap-[30px]">

            {/* Icon + Content */}
            <div className="flex min-w-0 flex-1 items-center gap-2.5 min-[320px]:gap-3 sm:gap-5">
              <MapPin
                size={32}
                strokeWidth={2}
                className="shrink-0 text-white min-[320px]:h-[34px] min-[320px]:w-[34px] sm:h-[35px] sm:w-[35px]"
              />

              <div className="min-w-0">
                <h2 className="m-0 text-[16px] font-semibold leading-[1.4] text-white min-[320px]:text-[17px] sm:text-[20px]">
                  20+ Physical Stores
                </h2>

                <p className="m-0 mt-1 text-[11px] leading-[1.5] text-white/80 min-[320px]:text-[12px] sm:text-[14px]">
                  Visit Our Store &amp; Get Your Desired IT Product!
                </p>
              </div>
            </div>

            {/* Find Store + Search */}
            <div className="flex w-full min-w-0 items-stretch md:w-auto md:shrink-0">

              {/* Find Store Button */}
              <Link
                href="/store/locationaddress"
                className="group flex min-w-0 flex-1 items-center justify-center gap-1 rounded-l-[4px] border border-[#ef4a23] bg-[#ef4a23] px-2 text-[10px] font-medium leading-none text-white no-underline transition-colors duration-200 hover:border-[#d93f1c] hover:bg-[#d93f1c] min-[320px]:gap-1.5 min-[320px]:px-2.5 min-[320px]:text-[11px] sm:gap-2 sm:px-4 sm:text-[13px] md:flex-none md:px-[18px] md:text-[14px]"
              >
                <span className="truncate">
                  Find Our Store
                </span>

                <ArrowRight
                  size={14}
                  strokeWidth={2}
                  className="shrink-0 transition-transform duration-200 group-hover:translate-x-[3px] min-[320px]:h-[15px] min-[320px]:w-[15px] sm:h-[17px] sm:w-[17px]"
                />
              </Link>

              {/* Search Button */}
              <button
                type="button"
                aria-label="Search stores"
                className="flex h-[36px] w-[36px] shrink-0 items-center justify-center rounded-r-[4px] border border-l-0 border-[#ef4a23] bg-[#ef4a23] p-0 text-white transition-colors duration-200 hover:bg-[#d93f1c] min-[320px]:h-[38px] min-[320px]:w-[38px] sm:h-[42px] sm:w-[44px]"
              >
                <Search
                  size={16}
                  strokeWidth={2}
                  className="min-[320px]:h-[17px] min-[320px]:w-[17px] sm:h-[20px] sm:w-[20px]"
                />
              </button>

            </div>
          </div>
        </div>
      </Container>
      
    

  </section>


);
}
