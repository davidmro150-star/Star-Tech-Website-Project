import Link from "next/link";
import { CalendarDays, MapPin, ArrowRight } from "lucide-react";

export default function Offer({ offer }) {
  return (
    <article className="group rounded-lg border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md">
      <Link href={`/offers/${offer.slug}`}>
        <div className="aspect-square w-full bg-gray-100">
          <img
            src={offer.image}
            alt={offer.title}
            className="h-full w-full object-cover"
          />
        </div>
      </Link>

      <div className="p-5">
        <div className="mb-4 flex flex-wrap gap-3 text-xs text-gray-500">
          <span className="flex items-center gap-1.5">
            <CalendarDays size={15} />
            {offer.date}
          </span>

          <span className="flex items-center gap-1.5">
            <MapPin size={15} />
            {offer.store}
          </span>
        </div>

        <Link href={`/offers/${offer.slug}`}>
          <h2 className="line-clamp-2 text-lg font-semibold leading-6 text-gray-900 transition group-hover:text-[#e21b23]">
            {offer.title}
          </h2>
        </Link>

        <p className="mt-3 line-clamp-2 text-sm leading-6 text-gray-500">
          {offer.description}
        </p>

        <Link
          href={`/offers/${offer.slug}`}
          className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#e21b23] transition hover:gap-3"
        >
          View Details
          <ArrowRight size={16} />
        </Link>
      </div>
    </article>
  );
}