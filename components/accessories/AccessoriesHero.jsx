import Image from "../Image";
import Container from "../Container";

export default function AccessoriesHero() {
  return (
    <section className="bg-[#f2f4f8]">
      <Container>
        <div className="grid bg-[#fff] min-h-[280px] grid-cols-1 items-center gap-6 py-8 md:grid-cols-2 lg:min-h-[340px]">

          {/* LEFT */}
          <div>
            <p className="mb-2 text-sm font-medium uppercase tracking-wide text-[#86bc42]">
              Accessories
            </p>

            <h1 className="font-jost text-3xl font-semibold leading-tight text-[#074e37] sm:text-4xl lg:text-5xl">
              Computer Accessories
            </h1>

            <p className="mt-4 max-w-xl text-sm leading-6 text-gray-600 sm:text-base">
              Explore keyboards, mice, headphones, gaming headsets,
              webcams, speakers and other essential computer accessories.
            </p>
          </div>

          {/* RIGHT */}
          <div className="flex justify-center md:justify-end">
            <Image
              src="https://images.unsplash.com/photo-1527814050087-3793815479db?w=800"
              alt="Computer Accessories"
              width={600}
              height={400}
              className="h-[220px] w-full max-w-[500px] object-cover sm:h-[260px] lg:h-[300px]"
            />
          </div>

        </div>
      </Container>
    </section>
  );
}