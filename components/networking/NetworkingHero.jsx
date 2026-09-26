import Image from "../Image";
import Container from "../Container";

export default function NetworkingHero() {
  return (
    <section className="bg-[#f7f5ee]">
      <Container>
        <div className="grid min-h-[260px] grid-cols-1 items-center gap-8 py-10 lg:grid-cols-2">

          <div>
            <p className="mb-3 text-sm font-medium uppercase tracking-wider text-[#86bc42]">
              Networking
            </p>

            <h1 className="font-jost text-3xl font-semibold leading-tight text-[#074e37] sm:text-4xl lg:text-5xl">
              Networking Devices
            </h1>

            <p className="mt-4 max-w-xl text-sm leading-6 text-gray-600 sm:text-base">
              Explore routers, switches, network adapters, access points and
              networking accessories for home, office and professional networks.
            </p>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-[500px]">
              <Image
                src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=900"
                alt="Networking"
                width={900}
                height={500}
                className="h-[230px] w-full object-cover"
              />
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}