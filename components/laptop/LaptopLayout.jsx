
"use client";

import LaptopNavbar from "./LaptopNavbar";

export default function LaptopLayout({ children }) {
  return (
    <>
      <LaptopNavbar />

      {children}
    </>
  );
}

