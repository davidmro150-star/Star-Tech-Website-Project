import productsData from "../../../api/productsData";

import GamingTV from "../../../components/gamingtv/GamingTV";

export default function GamingTVPage() {
  const products = productsDat.filter(
    (product) => product.category === "Gaming TV"
  );

  return (
    <GamingTV
      products={products}
      title="Gaming TV"
    />
  );
}