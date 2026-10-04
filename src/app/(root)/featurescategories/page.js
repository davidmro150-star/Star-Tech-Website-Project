
"use client";

import Link from "next/link";
import Container from "../../../../components/Container";

const featuredCategories = [
  {
    name: "Desktop",
    slug: "desktop",
    href: "/category/desktop",
    image:
      "https://www.startech.com.bd/image/cache/catalog/category-thumb/desktop-48x48.png",
  },
  {
    name: "Laptop",
    slug: "laptop",
    href: "/category/laptop",
    image:
      "https://www.startech.com.bd/image/cache/catalog/category-thumb/laptop-48x48.png",
  },
  {
    name: "Component",
    slug: "component",
    href: "/category/component",
    image:
      "https://www.startech.com.bd/image/cache/catalog/category-thumb/component-48x48.png",
  },
  {
    name: "Monitor",
    slug: "monitor",
    href: "/category/monitor",
    image:
      "https://www.startech.com.bd/image/cache/catalog/category-thumb/monitor-48x48.png",
  },
  {
    name: "Power",
    slug: "power",
    href: "/category/power",
    image:
      "https://www.startech.com.bd/image/cache/catalog/category-thumb/power-48x48.png",
  },
  {
    name: "Phone",
    slug: "phone",
    href: "/category/phone",
    image:
      "https://www.startech.com.bd/image/cache/catalog/category-thumb/mobile-phone-48x48.png",
  },
  {
    name: "Tablet",
    slug: "tablet",
    href: "/category/tablet",
    image:
      "https://www.startech.com.bd/image/cache/catalog/category-thumb/tablet-48x48.png",
  },
  {
    name: "Office Equipment",
    slug: "office-equipment",
    href: "/category/office-equipment",
    image:
      "https://www.startech.com.bd/image/cache/catalog/category-thumb/office-equipment-48x48.png",
  },
  {
    name: "Camera",
    slug: "camera",
    href: "/category/camera",
    image:
      "https://www.startech.com.bd/image/cache/catalog/category-thumb/camera-48x48.png",
  },
  {
    name: "Security",
    slug: "security",
    href: "/category/security",
    image:
      "https://www.startech.com.bd/image/cache/catalog/category-thumb/security-48x48.png",
  },
  {
    name: "Networking",
    slug: "networking",
    href: "/category/networking",
    image:
      "https://www.startech.com.bd/image/cache/catalog/category-thumb/networking-48x48.png",
  },
  {
    name: "Software",
    slug: "software",
    href: "/category/software",
    image:
      "https://www.startech.com.bd/image/cache/catalog/category-thumb/software-48x48.png",
  },
  {
    name: "Accessories",
    slug: "accessories",
    href: "/category/accessories",
    image:
      "https://www.startech.com.bd/image/cache/catalog/category-thumb/accessories-48x48.png",
  },
  {
    name: "Gadget",
    slug: "gadget",
    href: "/category/gadget",
    image:
      "https://www.startech.com.bd/image/cache/catalog/category-thumb/gadget-48x48.png",
  },
  {
    name: "Gaming TV",
    slug: "gaming-tv",
    href: "/category/gaming-tv",
    image:
      "https://www.startech.com.bd/image/cache/catalog/category-thumb/tv-48x48.png",
  },
  {
    name: "Appliance",
    slug: "appliance",
    href: "/category/appliance",
    image:
      "https://www.startech.com.bd/image/cache/catalog/category-thumb/appliance-48x48.png",
  },
];

export default function FeaturedCategories() {
  return (
    <section className="bg-[#f2f4f8] ">
      <Container>
          <div className="mx-auto bg-[#fff] px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold pt-4 text-center text-gray-900">
            Featured Category
          </h2>

          <p className="mt-1 text-sm text-center text-gray-500">
            Get Your Desired Product from Featured Category!
          </p>
        </div>

        {/* Category Grid */}
  <div className="grid grid-cols-4 min-[480px]:grid-cols-6 lg:grid-cols-8 gap-3">

          {featuredCategories.map((category) => (
            <Link
              key={category.slug}
              href={category.href}
              className="group flex min-h-[120px] flex-col items-center justify-center rounded-md border border-gray-200 bg-white shadow-[0_2px_10px_rgba(0,0,0,0.08)] px-2 py-4 transition-all duration-200 hover:border-red-500 hover:shadow-sm "
            >
              {/* Category Icon */}
              <div className="flex h-8 md:h-12 w-8 md:w-12 items-center justify-center">
                <img
                  src={category.image}
                  alt={`${category.name} Icon`}
                  className="h-8 md:h-12 w-8 md:w-12 object-contain transition-transform duration-200 group-hover:scale-110"
                />
              </div>

              {/* Category Name */}
              <h3 className="mt-3 text-center text-10 md:text-sm font-medium text-gray-700 transition-colors group-hover:text-red-600">
                {category.name}
              </h3>
            </Link>
          ))}

        </div>
      </div>
    </Container>
    </section>
  );
}

