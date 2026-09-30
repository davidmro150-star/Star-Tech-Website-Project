import Link from "next/link";
import Image from "next/image";

export default function Support() {
  return (
    <Link
      href="/bannersupport"
      className="relative block min-h-0 rounded-md"
    >
      <Image
        src="/images/banners/banner4.png"
        alt="Customer Support"
        fill
      
        className="rounded-md"
      />
    </Link>
  );
}