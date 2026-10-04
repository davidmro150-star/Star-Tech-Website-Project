import Image from "../Image";
import Container from "../Container";

export default function GadgetHero() {
  return (
    <section className="bg-[#f2f4f8]">
      <Container>
        <div className="grid min-h-[280px] grid-cols-1 items-center gap-6 py-8 md:grid-cols-2 bg-[#fff]">

          {/* LEFT */}
          <div>
            <p className="mb-2 text-sm font-medium uppercase tracking-wider text-gray-500">
              Gadget Collection
            </p>

            <h1 className="text-3xl font-bold text-gray-900 md:text-4xl lg:text-5xl">
              Smart Gadgets For
              <br />
              Everyday Life
            </h1>

            <p className="mt-4 max-w-lg text-sm leading-6 text-gray-600">
              Explore smart watches, earbuds, power banks, smart home devices,
              speakers and gaming gadgets.
            </p>
          </div>

          {/* RIGHT */}
          <div className="flex justify-center md:justify-end">
            <Image
              src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=900&q=80"
              alt="Gadget"
              width={700}
              height={400}
              className="h-[220px] w-full max-w-[600px] object-cover"
            />
          </div>

        </div>
      </Container>
    </section>
  );
}