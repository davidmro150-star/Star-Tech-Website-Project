import Link from "next/link";
import { Phone, MapPin, ChevronRight } from "lucide-react";

export default function Support() {
  return (
    <div className="footer-column support">

      <h3>Support</h3>

      <a href="tel:16793" className="support-phone">
        <Phone size={20} />
        <span>16793</span>
      </a>

      <p className="support-time">
        9 AM - 8 PM
      </p>

      <Link
        href="/store-locator"
        className="store-link"
      >
        <MapPin size={22} />

        <div>
          <span>Store Locator</span>
          <small>Find Our Stores</small>
        </div>

        <ChevronRight size={18} />
      </Link>

    </div>
  );
}