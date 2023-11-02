import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav/Nav";
import Footer from "@/components/Footer/Footer";
import ImageNav from "@/components/ImageNav/ImageNav";

const inter = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "LearnEaseU",
    template: "%s",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
