"use client";

import React from "react";
import Link from "next/link";
import Container from "../../../../../components/Container";

const productLinks = [
  {
    label: "Laptop",
    href: "https://www.startech.com.bd/laptop-notebook/laptop",
  },
  {
    label: "Gaming PC",
    href: "https://www.startech.com.bd/desktops/gaming-pc",
  },
  {
    label: "Mobile Phones",
    href: "https://www.startech.com.bd/mobile-phone",
  },
  {
    label: "Graphics Tablet",
    href: "https://www.startech.com.bd/graphics-tablet",
  },
  {
    label: "Monitors",
    href: "https://www.startech.com.bd/monitor",
  },
  {
    label: "Office Equipment",
    href: "https://www.startech.com.bd/office-equipment",
  },
  {
    label: "Televisions",
    href: "https://www.startech.com.bd/television-startech",
  },
];

const brandLinks = [
  {
    label: "Antec",
    href: "https://www.startech.com.bd/antec",
  },
  {
    label: "Deli",
    href: "https://www.startech.com.bd/deli",
  },
  {
    label: "ESET",
    href: "https://www.startech.com.bd/eset",
  },
  {
    label: "Gamdias",
    href: "https://www.startech.com.bd/gamdias",
  },
  {
    label: "Lian Li",
    href: "https://www.startech.com.bd/lian-li",
  },
  {
    label: "Razer",
    href: "https://www.startech.com.bd/razer",
  },
  {
    label: "Zyxel",
    href: "https://www.startech.com.bd/zyxel",
  },
];

function ExternalLink({ href, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="font-medium text-[#e21b23] transition-colors hover:text-red-700 hover:underline"
    >
      {children}
    </a>
  );
}

function SectionTitle({ children }) {
  return (
    <h2 className="mb-4 text-2xl font-bold text-gray-900 sm:text-3xl">
      {children}
    </h2>
  );
}

export default function AboutUs() {
  return (
    <main className="bg-[#f2f4f8]">
      {/* Page Header */}
      <Container>
            <section className="border-b bg-[#fff] 0 1px 1px rgba(0, 0, 0, 0.1) border-gray-200 bg-gray-50">
       
      

          <div className="mt-3 flex flex-wrap items-center gap-2 text-sm text-gray-500">
            <Link href="/" className="transition hover:text-[#e21b23]">
              Home
            </Link>

            <span>/</span>

            <span className="text-gray-700">About Us</span>
          </div>
    
      </section>

      {/* Main Content */}
      <section className="  bg-[#fff] 0 1px 1px rgba(0, 0, 0, 0.1) mx-auto px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        <div className="space-y-10">
          {/* About Star Tech */}
          <section>
            <SectionTitle>About Star Tech</SectionTitle>

            <div className="space-y-4 text-[15px] leading-7 text-gray-700">
              <p>
                <ExternalLink href="https://www.startech.com.bd/">
                  Star Tech Ltd.
                </ExternalLink>{" "}
                has been founded on 1 March 2007. From then to now, Star Tech
                Ltd. has won the hearts of many people and now is a country-wide
                renowned brand. That has been possible due to the hard work
                Star Tech Ltd. has done to satisfy its customers.
              </p>

              <p>
                Having the aim to satisfy customers, providing customers with
                their required products, and being true to their motto,{" "}
                <strong>&quot;Customers Come First&quot;</strong> has brought
                Star Tech to the top choice for E-Commerce Sites in Bangladesh
                and is recognized as the largest Computer and Tech retailer.
              </p>

              <p>
                Star Tech Ltd. has over 900+ employees and is growing more and
                more, working diligently to fulfill the Main Criteria of Star
                Tech&apos;s Motto or Vision.
              </p>

              <p>
                Star Tech is located in 10 Central territories in Dhaka,
                Gazipur, Savar, Narayanganj, Chattogram, Khulna, Rajshahi,
                Sylhet, Mymensingh, and Rangpur.
              </p>

              <p>
                Star Tech Ltd. has a total of 22 Physical outlets all over the
                country; selling genuine Tech products. Among them, 12 outlets
                are in Dhaka as it&apos;s the capital city. Star Tech Ltd. also
                has two branches in Chattogram; the commercial capital of
                Bangladesh.
              </p>

              <p>
                There is one Branch in Gazipur, one in Savar, one in
                Narayanganj, one in Khulna, one in Rajshahi, one in Sylhet, one
                in Mymensingh, and one Branch in Rangpur.
              </p>

              <p>
                Apart from the Physical Branches, We also have our successful
                E-Commerce website.
              </p>
            </div>
          </section>

          {/* ISO */}
          <section>
            <SectionTitle>ISO Certified Quality Management System</SectionTitle>

            <p className="text-[15px] leading-7 text-gray-700">
              Star Tech has always managed the standards for Quality
              management. In 2022, Star Tech Ltd. was certified with the
              well-known ISO 9001:2015 Certification. This marked a
              groundbreaking achievement for us.
            </p>

            <p className="mt-4 text-[15px] leading-7 text-gray-700">
              As an <strong>&quot;ISO 9001:2015 certified&quot;</strong>{" "}
              organization; we consistently maintain all sorts of regulatory
              requirements to provide the best products and services to meet
              any customer requirement.
            </p>
          </section>

          {/* Main Goal */}
          <section>
            <SectionTitle>The Main Goal and Aim</SectionTitle>

            <div className="space-y-4 text-[15px] leading-7 text-gray-700">
              <p>
                We are Star Tech Ltd, and we are here to help you with all your
                technology needs. We aim to provide all the requirements of our
                customers and help them satisfy their needs, wants, and
                desires.
              </p>

              <p>
                We delight in seeing our customers happy and satisfied with our
                resilience in providing them with their products. Our complete
                focus is on the customers.
              </p>

              <p>
                We keep tabs and records on what our customers want, and we try
                our best to bring that to them. We are already providing our
                customers with a delivery system so that they can order online
                and receive their products from their area.
              </p>

              <p>
                They do not have to travel long distances to get their desired
                product.
              </p>
            </div>
          </section>

          {/* Services */}
          <section>
            <SectionTitle>Services Being Provided</SectionTitle>

            <div className="space-y-4 text-[15px] leading-7 text-gray-700">
              <p>
                We are a Tech-based product seller. We provide our customers
                with the best quality products at the most reasonable price. We
                have a variety of products that our customers can choose from.
              </p>

              <p>
                The product range starts from Desktop PC,{" "}
                {productLinks.map((item, index) => (
                  <React.Fragment key={item.label}>
                    <ExternalLink href={item.href}>{item.label}</ExternalLink>
                    {index < productLinks.length - 1 ? ", " : ", "}
                  </React.Fragment>
                ))}
                Cameras, Security Cameras, and many other products.
              </p>

              <p>
                Each of our products is checked and reviewed before it is sold
                to our Loyal Customers. You are our driving force to better
                ourselves in all aspects of the service-providing sector.
              </p>

              <p>
                We strive to become a Perfectionist Company that delivers
                everything, word for word.
              </p>
            </div>
          </section>

          {/* Top Selling Brands */}
          <section>
            <SectionTitle>Top-Selling Brands</SectionTitle>

            <div className="space-y-4 text-[15px] leading-7 text-gray-700">
              <p>
                We have many top-selling brands that gained our attention to
                focus on them. These brands are{" "}
                <ExternalLink href="https://www.startech.com.bd/antec">
                  Antec
                </ExternalLink>
                , Asrock, Bitfenix, Cryorig,{" "}
                <ExternalLink href="https://www.startech.com.bd/deli">
                  Deli
                </ExternalLink>
                , EKWB,{" "}
                <ExternalLink href="https://www.startech.com.bd/eset">
                  ESET
                </ExternalLink>
                , Galax,{" "}
                <ExternalLink href="https://www.startech.com.bd/gamdias">
                  Gamdias
                </ExternalLink>
                , GEiL, Infocus, KWG,{" "}
                <ExternalLink href="https://www.startech.com.bd/lian-li">
                  Lian Li
                </ExternalLink>
                , MaxGreen, Noctua,{" "}
                <ExternalLink href="https://www.startech.com.bd/razer">
                  Razer
                </ExternalLink>
                , R&amp;M, Team, XFX,{" "}
                <ExternalLink href="https://www.startech.com.bd/zyxel">
                  Zyxel
                </ExternalLink>{" "}
                to name a few.
              </p>

              <p>
                As being top-selling and demanding brands, you will be able to
                get the latest updated products and service facilities more.
                You will also get better after-sales service from us.
              </p>

              <p>
                If any trouble occurs with these brand products, we will be
                able to solve it very easily. After fixing the problem you will
                be able to get the product in pristine condition just like if
                it is still new.
              </p>

              <p>
                These Brand Products are very high-quality products that provide
                the best service to the customers. We ensure that you are
                getting the best quality product.
              </p>

              <p>
                You can freely buy top-selling Brand products without having to
                think twice about what you are buying. We also provide our
                customers with the best pricing for the products compared to
                anywhere in Bangladesh.
              </p>

              <p>
                You can stay easy and relax knowing that one of our goals is to
                provide the customer with the best product at the most
                reasonable pricing. We ensure that our customers are satisfied
                with our product and the pricing.
              </p>
            </div>
          </section>

          {/* Corporate Sector */}
          <section>
            <SectionTitle>Dealing with Corporate Sector</SectionTitle>

            <div className="space-y-4 text-[15px] leading-7 text-gray-700">
              <p>
                We have also been working with Corporate Customers from the
                beginning of Star Tech. We are working with many well-known
                offices in Bangladesh and have a very good relationship with
                them.
              </p>

              <p>
                We have worked with many Corporate offices like bank,
                hospitals, Government organizations, Multi-National Companies,
                and Telecom Companies, to name a few.
              </p>

              <p>
                We provide them with all the Tech product-related support and
                facilities for their business.
              </p>

              <p>
                The Tech facilities that we provide are all IT-related hardware
                products like network-based products, servers and routers,
                laptops, desktops, printers, and other Tech-related hardware
                accessories.
              </p>
            </div>
          </section>

          {/* Customer Satisfaction */}
          <section>
            <SectionTitle>Customer Satisfaction</SectionTitle>

            <div className="space-y-4 text-[15px] leading-7 text-gray-700">
              <p>
                We have been in the market for a long time, and we have come to
                know what the customers want and desire.
              </p>

              <p>
                We have made changes around our customers so that we will be
                able to fulfill the desires of each of our customers.
              </p>

              <p>
                We want to improve more and more to be able to give everyone
                their desired or dreamed products.
              </p>

              <p>
                We are providing online buying opportunities for our customers,
                and providing delivery service for all of our products all over
                Bangladesh.
              </p>

              <p>
                We provide the best after-sales customer service to our
                customers to make them feel that we do care about their
                possessions and provide them with the best solutions for their
                problems.
              </p>
            </div>
          </section>

          {/* Brand That Cares */}
          <section>
            <SectionTitle>The Brand That Cares For You</SectionTitle>

            <div className="space-y-4 text-[15px] leading-7 text-gray-700">
              <p>
                This is{" "}
                <ExternalLink href="https://www.startech.com.bd/">
                  STAR TECH
                </ExternalLink>
                ! A Brand that is Truly concerned about its customers and
                loyally provides all the needs of the customers.
              </p>

              <p>
                Customers come first to this Company. Our customers will
                receive the best service and deals that Star Tech Ltd. offers.
              </p>

              <p>
                To us, our customers&apos; wants and needs take the top
                priority. We always have and will aim to provide the perfect
                result to our loyal customers.
              </p>

              <p>
                And our after-sales service will ensure that no one of our
                customers will come to us with the same issue twice.
              </p>

              <p>
                Come and Experience the service, product, and facilities Star
                Tech offers.
              </p>
            </div>
          </section>

          {/* Company Information */}
          <section className="pt-2">
            <SectionTitle>Company Information</SectionTitle>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {/* TIN */}
              <div className="rounded-lg border border-gray-200 bg-gray-50 p-5">
                <h3 className="text-base font-semibold text-gray-700">
                  TIN No of Star Tech Ltd.
                </h3>

                <p className="mt-3 text-xl font-bold text-gray-900">
                  736363668716
                </p>
              </div>

              {/* BIN */}
              <div className="rounded-lg border border-gray-200 bg-gray-50 p-5">
                <h3 className="text-base font-semibold text-gray-700">
                  BIN No of Star Tech Ltd.
                </h3>

                <p className="mt-3 text-xl font-bold text-gray-900">
                  005561607-0201
                </p>
              </div>

              {/* DBID */}
              <div className="rounded-lg border border-gray-200 bg-gray-50 p-5 sm:col-span-2 lg:col-span-1">
                <h3 className="text-base font-semibold text-gray-700">
                  DBID No of Star Tech Ltd.
                </h3>

                <p className="mt-3 text-xl font-bold text-gray-900">
                  542038604
                </p>
              </div>
            </div>
          </section>
        </div>
      </section>
  </Container>
    </main>
  );
}