"use client";

import { useEffect, useState } from "react";
import {
  FaLaptop,
  FaDesktop,
  FaHeadphones,
} from "react-icons/fa";
import {
  MdMonitor,
  MdKeyboard,
  MdMouse,
} from "react-icons/md";
import { IoWatchOutline } from "react-icons/io5";

const HappyHour = () => {
  const STARTING_DAYS = 10;
  const STARTING_HOURS = 4;
  const STARTING_MINUTES = 57;
  const STARTING_SECONDS = 0;

  const [timeLeft, setTimeLeft] = useState({
    days: STARTING_DAYS,
    hours: STARTING_HOURS,
    minutes: STARTING_MINUTES,
    seconds: STARTING_SECONDS,
  });

  useEffect(() => {
    let totalSeconds =
      STARTING_DAYS * 24 * 60 * 60 +
      STARTING_HOURS * 60 * 60 +
      STARTING_MINUTES * 60 +
      STARTING_SECONDS;

    const timer = setInterval(() => {
      totalSeconds--;

      if (totalSeconds <= 0) {
        clearInterval(timer);

        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });

        return;
      }

      const days = Math.floor(totalSeconds / 86400);
      const hours = Math.floor((totalSeconds % 86400) / 3600);
      const minutes = Math.floor((totalSeconds % 3600) / 60);
      const seconds = totalSeconds % 60;

      setTimeLeft({
        days,
        hours,
        minutes,
        seconds,
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const categories = [
    {
      name: "Laptop",
      icon: <FaLaptop />,
    },
    {
      name: "Desktop",
      icon: <FaDesktop />,
    },
    {
      name: "Monitor",
      icon: <MdMonitor />,
    },
    {
      name: "Smart Watch",
      icon: <IoWatchOutline />,
    },
    {
      name: "Keyboard",
      icon: <MdKeyboard />,
    },
    {
      name: "Mouse",
      icon: <MdMouse />,
    },
    {
      name: "Headphone",
      icon: <FaHeadphones />,
    },
  ];

  return (
    <main className="min-h-screen bg-[#f5f6f7] font-jost">

      {/* Hero Section */}
      <section className="bg-[#074E37]">
        <div className="mx-auto max-w-[1400px] px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="text-center text-white">

            <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-[#86BC42] px-5 py-2 text-sm font-medium">
              <span className="h-2 w-2 animate-pulse rounded-full bg-white"></span>
              SPECIAL OFFER
            </div>

            <h1 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl lg:text-6xl">
              শুরু হচ্ছে স্টার টেক{" "}
              <span className="text-[#86BC42]">
                Happy Hour!
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-gray-200 sm:text-lg">
              আজ রাত ১০টায়, আপনার পছন্দের{" "}
              <span className="font-semibold text-white">
                Laptop, Desktop, Monitor, Smart Watch, Keyboard, Mouse,
                Headphone
              </span>{" "}
              সহ প্রযুক্তি পণ্যে পাচ্ছেন নিশ্চিত মূল্যছাড়।
            </p>

            {/* Countdown */}
            <div className="mt-10">

              <p className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-[#86BC42] sm:text-base">
                Starting In
              </p>

              <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-5">

                <CountdownBox
                  value={timeLeft.days}
                  label="Days"
                />

                <span className="text-2xl font-bold text-[#86BC42] sm:text-4xl">
                  :
                </span>

                <CountdownBox
                  value={timeLeft.hours}
                  label="Hours"
                />

                <span className="text-2xl font-bold text-[#86BC42] sm:text-4xl">
                  :
                </span>

                <CountdownBox
                  value={timeLeft.minutes}
                  label="Minutes"
                />

                <span className="text-2xl font-bold text-[#86BC42] sm:text-4xl">
                  :
                </span>

                <CountdownBox
                  value={timeLeft.seconds}
                  label="Seconds"
                />

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="mx-auto max-w-[1400px] px-4 py-12 sm:px-6 lg:px-8">

        <div className="mb-8 text-center">
          <h2 className="text-2xl font-bold text-[#074E37] sm:text-3xl">
            Happy Hour Categories
          </h2>

          <p className="mt-2 text-gray-500">
            আপনার পছন্দের ক্যাটাগরি থেকে সেরা অফারটি বেছে নিন
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7">

          {categories.map((category) => (
            <div
              key={category.name}
              className="group flex cursor-pointer flex-col items-center justify-center rounded-xl bg-white px-3 py-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >

              <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-[#eef7e6] text-2xl text-[#074E37] transition group-hover:bg-[#86BC42] group-hover:text-white">
                {category.icon}
              </div>

              <h3 className="text-center text-sm font-semibold text-gray-700">
                {category.name}
              </h3>

            </div>
          ))}

        </div>
      </section>

      {/* Coming Soon */}
      <section className="mx-auto max-w-[1400px] px-4 pb-16 sm:px-6 lg:px-8">

        <div className="rounded-2xl bg-white px-5 py-12 text-center shadow-sm sm:px-10">

          <div className="mx-auto max-w-2xl">

            <h2 className="text-2xl font-bold text-[#074E37] sm:text-3xl">
              Get Ready for Amazing Deals!
            </h2>

            <p className="mt-4 leading-7 text-gray-500">
              Happy Hour শুরু হলে এখানে বিশেষ মূল্যছাড়ের পণ্যগুলো দেখতে
              পারবেন। আপনার পছন্দের প্রযুক্তি পণ্যগুলো কম দামে কেনার সুযোগ
              মিস করবেন না।
            </p>

            <button className="mt-7 rounded-md bg-[#86BC42] px-7 py-3 font-semibold text-white transition hover:bg-[#074E37]">
              Explore Deals
            </button>

          </div>
        </div>
      </section>

    </main>
  );
};

const CountdownBox = ({ value, label }) => {
  return (
    <div className="min-w-[75px] rounded-lg bg-white px-3 py-4 text-center shadow-lg sm:min-w-[100px] sm:px-5 sm:py-5">

      <div className="text-2xl font-bold text-[#074E37] sm:text-4xl">
        {String(value).padStart(2, "0")}
      </div>

      <div className="mt-1 text-[10px] font-medium uppercase tracking-wider text-gray-500 sm:text-xs">
        {label}
      </div>

    </div>
  );
};

export default HappyHour;