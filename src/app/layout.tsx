import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav/Nav";
import Footer from "@/components/Footer/Footer";
import ImageNav from "@/components/ImageNav/ImageNav";

const inter = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "LearnEaseU - Simplify Your Academic Journey",
    template: "%s | LearnEaseU - Simplify Your Academic Journey",
  },
  description:
    "Download Sessionals,Study materials, and PYQs for Central University. Simplify your studies and excel with LearnEaseU",

  keywords: [
    "Central University",
    "Central University of Haryana",
    "CUH",
    "Notes",
    "seassonls",
    "End Term Exam",
    "PYQs",
    "Academic Resources",
    "Learning Materials",
    "Study Notes",
    "Sessional Materials",
    "Previous Year Questions",
    "Department-Specific Resources",
    "Academic Excellence",
    "Simplified Learning",
    "Education Portal",
    "Student Community",
  ],
  creator: "Rohit Yadav",
  publisher: "Rohit Yadav",
  openGraph: {
    title: "LearnEaseU",
    description:
      "Download Sessionals,Study materials, and PYQs for Central University. Simplify your studies and excel with LearnEaseU",
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
