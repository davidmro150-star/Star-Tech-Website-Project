import Announcement from "../../../components/banner/announcement";
import HomeBanner from "../../../components/banner/banner";
import ToolsSection from "../../../components/toolssection/ToolsSection";
import CategoryPage from "./featurescategories/page";


export default function Home() {
  return (
    <main>
      <HomeBanner />
      <Announcement />
      <ToolsSection />
      <CategoryPage/>
    </main>
  );
}