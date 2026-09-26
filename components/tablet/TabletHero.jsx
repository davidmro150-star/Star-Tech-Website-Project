import Image from "../Image";

export default function TabletHero() {
  return (
    <section className=" boder border-gray-200 bg-white">
      <div className="mx-auto max-w-[1400px] px-3">
        <div className="grid min-h-[260px] grid-cols-1 items-center lg:grid-cols-2">
          <div className="py-10">
            <p className="text-sm font-medium uppercase tracking-wider text-[#0b5d3b]">
              Tablet Collection
            </p>

            <h1 className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl">
              Find the Right Tablet for You
            </h1>

            <p className="mt-4 max-w-xl text-sm leading-6 text-gray-600 sm:text-base">
              Explore iPads, Samsung Galaxy Tabs, Xiaomi Pads and Lenovo
              tablets for work, study, entertainment and everyday use.
            </p>
          </div>

          <div className="flex min-h-[260px] items-center justify-center p-6">
            <Image
              src="https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=1000&q=80"
              alt="Tablet"
              className="h-64 w-full object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}