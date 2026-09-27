"use client";

export default function GamingTVHero({ title = "Gaming TV" }) {
  return (
    <section className="w-full bg-gray-100">
      <div className="mx-auto max-w-[1400px] px-4 py-8 md:px-6 md:py-10 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">

          {/* LEFT CONTENT */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-3xl font-bold text-gray-900 md:text-4xl lg:text-5xl">
              {title}
            </h1>

            <p className="mt-3 max-w-2xl text-sm leading-6 text-gray-600 md:text-base">
              Explore Smart TVs, OLED, QLED and high-refresh-rate Gaming TVs
              designed for entertainment and gaming.
            </p>

            <button className="mt-5 rounded-md bg-gray-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-gray-700">
              Explore TVs
            </button>
          </div>

          {/* RIGHT TV IMAGE */}
          <div className="flex w-full flex-1 items-center justify-center md:justify-end">
            <img
              src="https://images.unsplash.com/photo-1593784991095-a205069470b6?w=1000"
              alt="Gaming TV"
              className="h-[220px] w-full max-w-[520px] object-contain md:h-[280px] lg:h-[320px]"
            />
          </div>

        </div>
      </div>
    </section>
  );
}