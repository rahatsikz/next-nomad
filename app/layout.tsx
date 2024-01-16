import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Shared/Navbar/Navbar";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "Next Nomad",
  description: "Made by Rahat",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={`${poppins.className} bg-white `}>
        <Navbar />
        <div className='container mx-auto px-4 lg:px-0'>{children}</div>
      </body>
    </html>
  );
}
