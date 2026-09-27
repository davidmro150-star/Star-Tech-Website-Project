"use client";

import ApplianceHero from "./ApplianceHero";
import ApplianceNavbar from "./ApplianceNavbar";
import ApplianceProducts from "./ApplianceProducts";

export default function Appliance({ products = [] }) {
  return (
    <div className="w-full">
      <ApplianceHero />

      <ApplianceNavbar />

      <ApplianceProducts products={products} />
    </div>
  );
}