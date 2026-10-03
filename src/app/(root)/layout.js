


import "./globals.css";

import Header from "../../../components/Header";
import Navbar from "../../../components/Navbar";

export const metadata = {
  title: "Star Tech",
  description: "Technology and electronics e-commerce website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <Navbar />


          {children}
  
      </body>
    </html>
  );
}

