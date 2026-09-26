
export default function LaptopHero() {
  return (
    <section className="border border-gray-200 bg-white">
      <div className="grid min-h-[220px] grid-cols-1 items-center gap-6 p-6 md:grid-cols-2 md:p-8">
        <div>
          <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-[#0b5d3b]">
            Laptop Collection
          </p>

          <h1 className="text-3xl font-bold leading-tight text-gray-900 md:text-4xl">
            Find The Right Laptop For You
          </h1>

          <p className="mt-3 max-w-xl text-sm leading-6 text-gray-500">
            Explore gaming laptops, student laptops, business laptops and
            Apple MacBooks with powerful performance and modern design.
          </p>

       
        </div>

        <div className="flex min-h-[180px] items-center justify-center bg-gray-50 p-6">
          <div className="text-center">
            <div className="text-6xl">💻</div>

            <p className="mt-3 text-sm font-medium text-gray-600">
              Premium Laptops
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

