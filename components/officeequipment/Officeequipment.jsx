import OfficeEquipmentHero from "./OfficeEquipmentHero";
import OfficeEquipmentNavbar from "./OfficeEquipmentNavbar";
import OfficeEquipmentProducts from "./OfficeEquipmentProducts";

export default function OfficeEquipment({
  products = [],
}) {
  return (
    <>
      <OfficeEquipmentHero />

      <OfficeEquipmentNavbar />

      <OfficeEquipmentProducts
        products={products}
        title="Office Equipment"
      />
    </>
  );
}