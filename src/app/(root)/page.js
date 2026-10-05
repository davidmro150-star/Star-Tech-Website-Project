import Announcement from "../../../components/banner/announcement";
import HomeBanner from "../../../components/banner/banner";
import TechShopContent from "../../../components/content/Content";
import CustomerServices from "../../../components/customers-services/CustomerServices";
import FeaturedProducts from "../../../components/featuredproducts/FeaturedProducts";
import PhysicalStores from "../../../components/findstore/PhysicalStores";
import ToolsSection from "../../../components/toolssection/ToolsSection";

import CategoryPage from "./featurescategories/page";


export default function Home() {
  return (
    <main>
      <HomeBanner />
     
      <Announcement />
     
      <ToolsSection />
        
      <CategoryPage />
   
     
       <CustomerServices />
      <PhysicalStores />
      <FeaturedProducts /> 
      <TechShopContent/>
    
    
    </main>
  );
}