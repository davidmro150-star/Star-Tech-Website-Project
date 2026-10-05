import offers from "../../../../api/offers";
import Container from "../../../../components/Container";
import Offer from "../../../../components/OffersPage";

export default function OffersPage() {
  return (
    <main className="min-h-screen bg-[#f2f4f8] py-8">
      <Container>
          <div className="mx-auto px-4 sm:px-6 lg:px-8 bg-[#fff]">

        <div className="mb-7">
          <h1 className="text-2xl font-semibold text-gray-900 sm:text-3xl">
            Latest Offers
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            Explore our latest offers, discounts and special deals.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {offers.map((offer) => (
            <Offer key={offer.id} offer={offer} />
          ))}
        </div>

      </div>
    </Container>
    </main>
  );
}