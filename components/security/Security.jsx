"use client";

import SecurityHero from "./SecurityHero";
import SecurityNavbar from "./SecurityNavbar";
import SecurityProducts from "./SecurityProducts";

export default function Security({ products = [] }) {
  return (
    <>
      <SecurityHero />

      <SecurityNavbar />

      <SecurityProducts products={products} />
    </>
  );
}