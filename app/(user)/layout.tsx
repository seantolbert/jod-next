import Footer from "@/components/Footer";
import "../../styles/globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Jungles of Dorado",
  description:
    "Exploring history and culture. Celebrating the beautiful, obscure, and forgotten.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="mx-auto bg-[#eae7d3] text-gray-700 ">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
