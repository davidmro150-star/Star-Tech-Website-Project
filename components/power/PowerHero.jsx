export default function PowerHero() {
  return (
    <section className="border border-gray-200 bg-white">
      <div className="grid min-h-[280px] grid-cols-1 items-center lg:grid-cols-2">
        <div className="px-6 py-10 sm:px-10 lg:px-12">
          <p className="mb-3 text-sm font-medium uppercase tracking-wider text-[#0b5d3b]">
            Power Collection
          </p>

          <h1 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Reliable Power for Your Devices
          </h1>

          <p className="mt-4 max-w-xl text-sm leading-6 text-gray-600 sm:text-base">
            Explore UPS, power supplies, IPS and power accessories for
            computers, gaming systems, offices and everyday electronics.
          </p>
        </div>

        <div className="flex min-h-[240px] items-center justify-center bg-gray-50 p-6 sm:p-10">
          <img
            src="https://images.unsplash.com/photo-1756576170672-1123237f1d77?auto=format&fit=crop&w=1000&q=80"
            alt="Computer Power Supply"
            className="h-full max-h-[260px] w-full object-contain"
          />
        </div>
      </div>
    </section>
  );
}