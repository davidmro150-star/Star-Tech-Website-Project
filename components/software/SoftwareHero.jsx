import Image from "../Image";
import Container from "../Container";

export default function SoftwareHero() {
  return (
    <section className="bg-gray-100">
      <Container>
        <div className="grid min-h-[260px] grid-cols-1 items-center gap-6 py-8 md:grid-cols-2">
          <div>
          

            <h1 className="text-3xl font-bold text-gray-900 md:text-4xl">
              Software
            </h1>

            <p className="mt-3 max-w-xl text-sm leading-6 text-gray-600">
              Explore operating systems, office applications, antivirus,
              design tools and other professional software solutions.
            </p>
          </div>

          <div className="flex justify-center md:justify-end">
            <Image
              src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800"
              alt="Software"
              width={600}
              height={350}
              className="h-[220px] w-full max-w-[500px] object-cover"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}