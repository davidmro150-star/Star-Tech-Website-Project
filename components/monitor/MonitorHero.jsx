import Container from "../Container";

export default function MonitorHero() {
  return (
    <section className="border border-gray-200 bg-white">
      <Container>
        <div className="grid min-h-[280px] grid-cols-1 items-center lg:grid-cols-2">

          {/* CONTENT */}
          <div className="px-6 py-10 sm:px-10 lg:px-12">
            <p className="mb-3 text-sm font-medium uppercase tracking-wider text-[#0b5d3b]">
              Monitor Collection
            </p>

            <h1 className="text-3xl font-bold leading-tight text-gray-900 sm:text-3xl lg:text-4xl">
              Find the Perfect Monitor
            </h1>

            <p className="mt-4 max-w-xl text-sm leading-6 text-gray-600 sm:text-base">
              Explore gaming, professional, curved and portable monitors
              for work, entertainment and high-performance gaming.
            </p>
          </div>

          {/* IMAGE */}
          <div className="flex min-h-[240px] items-center justify-center bg-gray-50 p-6 sm:p-10">
            <img
              src="https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=1000&q=80"
              alt="Monitor"
              className="h-full max-h-[260px] w-full object-contain"
            />
          </div>

        </div>
    </Container>
    </section>
  );
}