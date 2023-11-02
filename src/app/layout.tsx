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
    template: "%s | LearnEaseU",
  },
  description:
    "LearnEaseU: Your Academic Companion,Discover LearnEaseU, your central hub for academic success at Central University. Simplifying your education with comprehensive department-specific resources, we're committed to making your learning journey efficient and effective. Explore notes, sessional materials, and PYQs, connecting with a community of learners. Your pathway to academic excellence starts here.",

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
    description: `Download Sessionals,Study materials, and PYQs for Central University. Simplify your studies and excel with LearnEaseU.`,
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
