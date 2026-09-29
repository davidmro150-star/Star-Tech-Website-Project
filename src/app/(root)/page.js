import Announcement from "../../../components/banner/announcement";
import HomeBanner from "../../../components/banner/banner";
import ToolsSection from "../../../components/toolssection/ToolsSection";


export default function Home() {
  return (
    <main>
      <HomeBanner />
      <Announcement />
      <ToolsSection />
    </main>
  );
}