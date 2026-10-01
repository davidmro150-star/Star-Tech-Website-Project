import Announcement from "../../../components/banner/announcement";
import HomeBanner from "../../../components/banner/banner";
import CustomerServices from "../../../components/customers-services/CustomerServices";
import ToolsSection from "../../../components/toolssection/ToolsSection";
import CustomerServicesPage from "./customer-services/page";
import CategoryPage from "./featurescategories/page";


export default function Home() {
  return (
    <main>
      <HomeBanner />
      <Announcement />
      <ToolsSection />
      <CategoryPage />
      < CustomerServices/>
    </main>
  );
}