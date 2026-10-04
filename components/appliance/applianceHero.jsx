"use client";

import Container from "../Container";

export default function ApplianceHero() {
  return (
    <section className="w-full bg-[#f2f4f8]">
      <Container>
        <div className="mx-auto bg-[#fff] px-4 py-8 md:px-6 lg:px-8 lg:py-12">
          <div className="flex min-h-[220px] items-center justify-between overflow-visible rounded-2xl bg-[#074E37] px-6 py-8 md:px-10 lg:min-h-[280px] lg:px-16">

            <div className="max-w-[600px]">
              <p className="mb-3 text-sm font-medium uppercase tracking-[2px] text-[#86BC42]">
                Home Appliances
              </p>

              <h1 className="text-3xl font-semibold leading-tight text-white md:text-4xl lg:text-5xl">
                Smart Appliances
                <br />
                For Modern Living
              </h1>

              <p className="mt-4 max-w-[500px] text-sm leading-6 text-white/80 md:text-base">
                Explore refrigerators, air conditioners, washing machines,
                microwave ovens and other essential home appliances.
              </p>
            </div>

            <div className="hidden md:block">
              <div className="flex h-[190px] w-[240px] items-center justify-center rounded-full bg-white/10">
                <span className="text-7xl">🏠</span>
              </div>
            </div>

          </div>
        </div>
      </Container>
    </section>
  );
}