import Link from "next/link";
import Image from "next/image";

export default function Support() {
  return (
    <Link
      href="/bannercontact"
      className="relative block min-h-0 rounded-md"
    >
      <Image
        src="/images/banners/banner4.webp"
        alt="Customer Support"
        fill
        sizes="(max-width: 1024px) 100vw, 33vw"
        className="rounded-md object-cover"
      />
    </Link>
  );
}