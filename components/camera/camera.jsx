
"use client";

import CameraProducts from "./CameraProducts";

export default function Camera({ products = [] }) {
  return (
    <CameraProducts products={products} />
  );
}

