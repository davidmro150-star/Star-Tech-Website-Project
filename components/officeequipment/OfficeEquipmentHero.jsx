import Container from "../Container";

export default function OfficeEquipmentHero({
  title = "Office Equipment",
}) {
  return (
    <section className="bg-gray-100">
      <Container>
        <div className="py-8 md:py-12">
          <h1 className="text-2xl font-semibold text-gray-900 md:text-3xl">
            {title}
          </h1>

          <p className="mt-2 text-sm text-gray-600">
            Professional office equipment for modern workplaces.
          </p>
        </div>
      </Container>
    </section>
  );
}