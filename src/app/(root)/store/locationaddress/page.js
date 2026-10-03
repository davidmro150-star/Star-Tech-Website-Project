
"use client";

import { useMemo, useState } from "react";
import {
  Search,
  MapPin,
  Phone,
  Clock,
  ArrowUpRight,
  Navigation,
} from "lucide-react";
import Container from "../../../../../components/Container";


const stores = [
  {
    name: "Sylhet Branch",
    address:
      "Showdagor Tower, 1st Floor, Azadi 54/A, Mirboxtula, Sylhet",
    phones: [
      ["Desktop", "01335138163"],
      ["Laptop", "01335138161"],
      ["Accessories & TV", "01335138162"],
      ["Corporate Deal", "01335138160"],
    ],
    hours: "11 AM - 8 PM",
    closed: "Friday Off",
    map: "https://maps.app.goo.gl/jTA2UdS6KywU6F5e8",
  },

  {
    name: "Narayanganj Branch",
    address:
      "155 Aman Bhaban, Level-3, BB Road, Kalir Bazer, Shornopottir Mor, Chashara, Narayanganj",
    phones: [
      ["Desktop-1", "01335138048"],
      ["Desktop-2", "01335138047"],
      ["Laptop", "01313717067"],
      ["Accessories", "01335138046"],
    ],
    hours: "11 AM - 8 PM",
    closed: "Friday Off",
    map: "https://maps.app.goo.gl/5y3fLmpxa3eZQk9w9",
  },

  {
    name: "Savar Branch",
    address:
      "Shop-170-171, Level-3, Savar New Market, Savar - 1340, Dhaka",
    phones: [
      ["Desktop", "01335138024"],
      ["Laptop", "01335138023"],
      ["Accessories", "01335138022"],
      ["Corporate Deal", "01335138021"],
    ],
    hours: "11 AM - 8 PM",
    closed: "Open Everyday",
    map: "https://maps.app.goo.gl/t4WSfmedn3DVHTJC6",
  },

  {
    name: "Elephant Road Branch",
    address: "Level-3, Minita Plaza, 54 New Elephant Road, Dhaka.",
    phones: [
      ["Laptop", "01332522022"],
      ["Desktop", "01313717159"],
      ["Accessories & TV", "01713651652"],
      ["Corporate Deal", "01332522183"],
    ],
    hours: "11 AM - 8 PM",
    closed: "Open Everyday",
    map: "https://maps.app.goo.gl/YYkm8VZGkKvsPALFA",
  },

  {
    name: "RIG House (Multiplan, Level-9)",
    address:
      "Shop-942-944, Level-09, Multiplan Center, New Elephant Road, Dhaka.",
    phones: [
      ["Laptop", "01313717163"],
      ["Desktop", "01332522026"],
      ["Desktop 2", "01313717024"],
      ["Corporate Deal", "01313717021"],
    ],
    hours: "11 AM - 8 PM",
    closed: "Tuesday Off",
    map: "https://maps.app.goo.gl/Gx9CnMNfRZLRbYu16",
  },

  {
    name: "Multiplan Branch - (Level-09/2)",
    address:
      "Shop-934-935 & 975-976, Level-09, Multiplan Center, New Elephant Road, Dhaka.",
    phones: [
      ["Desktop", "01313717031"],
      ["Desktop 2", "01713651663"],
      ["Gadget & TV", "01322811341"],
      ["Corporate Deal", "01709995406"],
    ],
    hours: "11 AM - 8 PM",
    closed: "Tuesday Off",
    map: "https://goo.gl/maps/ZwQDA5tQsM27TLFG6",
  },

  {
    name: "Multiplan Branch - (Level-09)",
    address:
      "Shop-934-935, Level-09, Multiplan Center, New Elephant Road, Dhaka",
    phones: [
      ["Laptop", "01313717031"],
      ["Desktop", "01713651663"],
      ["Accessories & TV", "01322811341"],
      ["Corporate Deal", "01709995406"],
    ],
    hours: "11 AM - 8 PM",
    closed: "Tuesday Off",
    map: "https://goo.gl/maps/ZwQDA5tQsM27TLFG6",
  },

  {
    name: "Mymensingh Branch",
    address:
      "99/A, Parvaz Tower Sharda Ghosh Road (Opposite of Women's Degree College) Mymensingh",
    phones: [
      ["Desktop", "01332522118"],
      ["Laptop", "01713651582"],
      ["Accessories & TV", "01332522117"],
      ["Corporate Deal", "01332522116"],
    ],
    hours: "11 AM - 8 PM",
    closed: "Friday Off",
    map: "https://maps.app.goo.gl/zcbVs7uiRdikxh2U6",
  },

  {
    name: "Banani Branch",
    address:
      "156 Concord Colosseum, 1st Floor, Road# 12, Kemal Ataturk Ave, Dhaka.",
    phones: [
      ["Desktop & Monitor", "01709995416"],
      ["Laptop", "01322811334"],
      ["Accessories & TV", "01322811335"],
      ["Corporate Deal", "01313717049"],
    ],
    hours: "11 AM - 8 PM",
    closed: "Open Everyday",
    map: "https://goo.gl/maps/94oMPcW5r7YCKRXj8",
  },

  {
    name: "Uttara Sonargaon Janapath Branch",
    address:
      "Uttorayon, House: 16, Sector: 09, Sonargaon Janapath, Uttara, Dhaka",
    phones: [
      ["Laptop", "01709995441"],
      ["Desktop", "01709995400"],
      ["Accessories & TV", "01322811362"],
      ["Corporate Deal", "01709995420"],
    ],
    hours: "11 AM - 8 PM",
    closed: "Open Everyday",
    map: "https://goo.gl/maps/9U6xAFrxpWVoVPvD7",
  },

  {
    name: "Uttara Syed Grand Center Branch",
    address:
      "Syed Grand Center, 119, 3rd Floor, Road No: 28, Sector: 7, Uttara",
    phones: [
      ["Desktop", "01709995443"],
      ["Laptop", "01335138076"],
      ["Accessories & TV", "01332522191"],
      ["Corporate Deal", "01709995577"],
    ],
    hours: "11 AM - 8 PM",
    closed: "Wednesday Off",
    map: "https://goo.gl/maps/AtFngi6y2yA2b1sz9",
  },

  {
    name: "IDB Branch",
    address:
      "Shop-228, 229, 2nd Floor, IDB Bhaban, Agargaon, Dhaka",
    phones: [
      ["Desktop", "01313717121"],
      ["Laptop", "01313717070"],
      ["Accessories & TV", "01313716992"],
      ["Corporate Deal", "01332522013"],
    ],
    hours: "11 AM - 8 PM",
    closed: "Sunday Off",
    map: "https://goo.gl/maps/LPFvuMJ9viqgmFSh8",
  },

  {
    name: "Pragati Sharani Branch",
    address:
      "BTI Premier Plaza (Level # 2), CHA-90/A Pragati Sharani, North Badda, Dhaka",
    phones: [
      ["Desktop", "01313717041"],
      ["Laptop", "01313717066"],
      ["Accessories & TV", "01313717122"],
      ["Corporate Deal", "01322811413"],
    ],
    hours: "11 AM - 8 PM",
    closed: "Wednesday Off",
    map: "https://goo.gl/maps/sKnCzDcUk2B7Mc6N8",
  },

  {
    name: "Multiplan Branch - (Level-01)",
    address:
      "Shop-148-155, Level-01, Multiplan Center, New Elephant Road, Dhaka",
    phones: [
      ["Laptop", "01322811308"],
      ["Desktop", "01313717018"],
      ["Accessories & TV", "01332522024"],
      ["Corporate Deal", "01709995405"],
    ],
    hours: "11 AM - 8 PM",
    closed: "Tuesday Off",
    map: "https://goo.gl/maps/ZwQDA5tQsM27TLFG6",
  },

  {
    name: "Multiplan Branch - (Level-03)",
    address:
      "Shop-325-326, Level-03, Multiplan Center, New Elephant Road, Dhaka.",
    phones: [
      ["Laptop", "01313717017"],
      ["Desktop", "01313717046"],
      ["Accessories & TV", "01332522196"],
      ["Corporate Deal", "01709995443"],
    ],
    hours: "11 AM - 8 PM",
    closed: "Tuesday Off",
    map: "https://goo.gl/maps/ZwQDA5tQsM27TLFG6",
  },

  {
    name: "Multiplan Branch - (Level-05)",
    address:
      "Shop-504-505, Level-05, Multiplan Center, New Elephant Road, Dhaka.",
    phones: [
      ["Laptop", "01313717090"],
      ["Desktop", "01322811344"],
      ["Desktop 2", "01709995430"],
      ["Corporate Deal", "01709995573"],
    ],
    hours: "11 AM - 8 PM",
    closed: "Tuesday Off",
    map: "https://goo.gl/maps/ZwQDA5tQsM27TLFG6",
  },

  {
    name: "Gazipur Branch",
    address:
      "Nazma Shahidullah Complex, 1st floor, (Besides City Bank), Rowshan Shorok, Joydebpur Road, Gazipur Chowrasta, Gazipur",
    phones: [
      ["Desktop", "01709995414"],
      ["Laptop", "01313717103"],
      ["Corporate Deal", "01332522180"],
      ["Accessories", "01313717104"],
    ],
    hours: "11 AM - 8 PM",
    closed: "Saturday Off",
    map: "https://goo.gl/maps/JGLhRd8HjFuMcBcY9",
  },

  {
    name: "Rajshahi Branch",
    address:
      "Moon Rabeya Tower (1st floor), South Dorikhorbona, Boalia, Rajshahi.",
    phones: [
      ["Desktop", "01322811320"],
      ["Laptop", "01322811319"],
      ["Accessories & TV", "01322811332"],
      ["Corporate Deal", "01322811320"],
    ],
    hours: "11 AM - 8 PM",
    closed: "Friday Off",
    map: "https://goo.gl/maps/DLHz6iFYuDgN1uee7",
  },

  {
    name: "Chattogram Agrabad Branch",
    address:
      "Shop#35, RF Zohura Tower, Chittagong Computer Market (Ground floor), SK Mojib Road, Agrabad, Chowmuhani",
    phones: [
      ["Desktop", "01322811309"],
      ["Laptop", "01709995423"],
      ["Accessories & TV", "01322811364"],
      ["Corporate Deal", "01313717098"],
    ],
    hours: "11 AM - 8 PM",
    closed: "Friday Off",
    map: "https://goo.gl/maps/xz3kdBm5eV8k2CV37",
  },

  {
    name: "Chattogram GEC Branch",
    address:
      "HNS Tower (Beside National Bank), 2628/1 CDA Avenue, GEC Circle, Nasirabad, Chattogram, Bangladesh.",
    phones: [
      ["Desktop", "01713651638"],
      ["Laptop", "01313717106"],
      ["Accessories & TV", "01322811368"],
      ["Corporate Deal", "01313717179"],
    ],
    hours: "11 AM - 8 PM",
    closed: "Open Everyday",
    map: "https://goo.gl/maps/DK6TMrgMLtYiksDX9",
  },

  {
    name: "Rangpur Branch",
    address:
      "Chadima Hotel Building (1st Floor), Opposite of Pusti Mistir Dokan, Near Payra Chottor, Rangpur",
    phones: [
      ["Desktop", "01709995494"],
      ["Laptop", "01709995493"],
      ["Accessories & TV", "01322811310"],
      ["Corporate Deal", "01709995490"],
    ],
    hours: "11 AM - 8 PM",
    closed: "Friday Off",
    map: "https://goo.gl/maps/S7gADUyh1DYUMuiN6",
  },

 
];



export default function StoresPage() {
  const [search, setSearch] = useState("");

  const filteredStores = useMemo(() => {
    const query = search.toLowerCase().trim();

    if (!query) {
      return stores;
    }

    return stores.filter(
      (store) =>
        store.name.toLowerCase().includes(query) ||
        store.address.toLowerCase().includes(query)
    );
  }, [search]);

  return (
    <main className="min-h-screen bg-[#f5f5f5]">
      <Container>
        {/* Header */}
        <section className="border-b border-[#eeeeee] bg-white">
          <div className="py-8 sm:py-10">
            <div className="mb-2 flex items-center gap-2">
              <MapPin
                size={22}
                strokeWidth={2}
                className="text-[#000]"
              />

              <h1 className="m-0 text-[24px] font-semibold leading-[1.3] text-[#222] sm:text-[28px]">
                Our Sales Outlet
              </h1>
            </div>

            <p className="m-0 text-[14px] leading-6 text-[#666]">
              Find the nearest store and visit us to get your desired IT
              products.
            </p>
          </div>
        </section>

        {/* Search */}
        <section className="bg-white">
          <div className="pb-7">
            <div className="relative max-w-[600px]">
              <Search
                size={19}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-[#999]"
              />

              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search by branch or location..."
                className="h-[46px] w-full rounded-[4px] border border-[#ddd] bg-white pl-11 pr-4 text-[14px] text-[#333] outline-none transition-colors placeholder:text-[#999] focus:border-[#ef4a23]"
              />
            </div>
          </div>
        </section>

        {/* Store List */}
        <section className="bg-[#f5f5f5]">
          <div className="py-7 sm:py-10">
            <div className="mb-5 flex items-center justify-between">
              <h2 className="m-0 text-[18px] font-semibold text-[#222]">
                Our Stores
              </h2>

              <span className="text-[13px] text-[#777]">
                {filteredStores.length} Stores
              </span>
            </div>

            {filteredStores.length > 0 ? (
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                {filteredStores.map((store) => (
                  <StoreCard key={store.name} store={store} />
                ))}
              </div>
            ) : (
              <div className="rounded-[4px] border border-[#e5e5e5] bg-white px-5 py-12 text-center">
                <MapPin
                  size={32}
                  className="mx-auto mb-3 text-[#ccc]"
                />

                <h3 className="m-0 text-[16px] font-semibold text-[#333]">
                  No Store Found
                </h3>

                <p className="mt-1 text-[13px] text-[#777]">
                  Try searching with another branch name or location.
                </p>
              </div>
            )}
          </div>
        </section>
      </Container>
    </main>
  );
}

function StoreCard({ store }) {
  return (
    <article className="group flex h-full flex-col rounded-[5px] border border-[#e5e5e5] bg-white transition-all duration-200 hover:border-[#ef4a23] hover:shadow-[0_4px_15px_rgba(0,0,0,0.06)]">
      {/* Card Header */}
      <div className="border-b border-[#eeeeee] px-5 py-4">
        <h3 className="m-0 text-[16px] font-semibold leading-6 text-[#222]">
          {store.name}
        </h3>
      </div>

      {/* Card Body */}
      <div className="flex flex-1 flex-col px-5 py-5">
        {/* Address */}
        <div className="flex gap-3">
          <MapPin
            size={18}
            strokeWidth={2}
            className="mt-0.5 shrink-0 text-[#000]"
          />

          <div>
            <h4 className="m-0 text-[13px] font-semibold text-[#333]">
              Address
            </h4>

            <p className="mt-1.5 text-[13px] leading-[1.65] text-[#666]">
              {store.address}
            </p>
          </div>
        </div>

        {/* Phones */}
        <div className="mt-5 flex gap-3">
          <Phone
            size={18}
            strokeWidth={2}
            className="mt-0.5 shrink-0 text-[#000]"
          />

          <div className="min-w-0 flex-1">
            <h4 className="m-0 text-[13px] font-semibold text-[#333]">
              Phone
            </h4>

            <div className="mt-2 space-y-1.5">
              {store.phones.map(([label, number]) => (
                <div
                  key={`${label}-${number}`}
                  className="flex items-center justify-between gap-2 text-[12px]"
                >
                  <span className="text-[#777]">{label}</span>

                  <a
                    href={`tel:${number.replace(/[^0-9+]/g, "")}`}
                    className="font-medium text-[#444] no-underline hover:text-[#ef4a23]"
                  >
                    {number}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Opening Hours */}
        <div className="mt-5 flex gap-3">
          <Clock
            size={18}
            strokeWidth={2}
            className="mt-0.5 shrink-0 text-[#000]"
          />

          <div>
            <h4 className="m-0 text-[13px] font-semibold text-[#333]">
              Opening Hours
            </h4>

            <p className="mt-1 text-[13px] text-[#666]">
              {store.hours}
            </p>

            <p
              className={`mt-0.5 text-[12px] ${
                store.closed === "Open Everyday"
                  ? "text-[#22a06b]"
                  : "text-[#ef4a23]"
              }`}
            >
              {store.closed}
            </p>
          </div>
        </div>

        {/* Direction */}
        <div className="mt-auto pt-6">
          <a
            href={store.map}
            target="_blank"
            rel="noopener noreferrer"
            className="group/direction inline-flex w-full items-center justify-center gap-2 rounded-[4px] border border-[#ef4a23] bg-white px-4 py-2.5 text-[13px] font-medium text-[#ef4a23] no-underline transition-colors duration-200 hover:bg-[#ef4a23] hover:text-white"
          >
            <Navigation size={16} strokeWidth={2} />

            <span>Get Direction</span>

            <ArrowUpRight
              size={15}
              strokeWidth={2}
              className="transition-transform duration-200 group-hover/direction:translate-x-0.5 group-hover/direction:-translate-y-0.5"
            />
          </a>
        </div>
      </div>
    </article>
  );
}

