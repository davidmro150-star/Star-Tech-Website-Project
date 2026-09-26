

import DesktopLayout from "../../../components/desktop/DesktopLayout";
import Header from "../../../components/Header";
import Navbar from "../../../components/Navbar";
import "./globals.css";

export const metadata = {
  title: "Star Tech",
  description: "Technology and electronics e-commerce website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <Navbar/>

        <DesktopLayout>
          {children}
        </DesktopLayout>
      </body>
    </html>
  );
}