import Link from "next/link";

export default function About() {
  const links = [
    {
      name: "Affiliate Program",
      href: "/affiliate",
    },
    {
      name: "EMI Terms",
      href: "/emi",
    },
    {
      name: "About Us",
      href: "/about",
    },
    {
      name: "Online Delivery",
      href: "/online-delivery",
    },
    {
      name: "Privacy Policy",
      href: "/privacy",
    },
    {
      name: "Terms and Conditions",
      href: "/terms",
    },
    {
      name: "Refund and Return Policy",
      href: "/refund-policy",
    },
    {
      name: "Career",
      href: "/career",
    },
    {
      name: "Blog",
      href: "/blog",
    },
    {
      name: "Contact Us",
      href: "/contact",
    },
    {
      name: "Brands",
      href: "/brands",
    },
  ];

  return (
    <div className="footer-column">
      <h3>About Us</h3>

      <ul>
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href}>
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}