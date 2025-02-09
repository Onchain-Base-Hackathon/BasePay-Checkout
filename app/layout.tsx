import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import Header from "@/components/Header";
import { Web3Modal } from "../context/web3modal";

export const metadata: Metadata = {
  title: "BasePay",
  description: "Fiat to Crypto payments with ease",
};

const generalSans = localFont({
  src: [
    {
      path: "./fonts/GeneralSans-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/GeneralSans-Medium.woff2",
      weight: "500",
      style: "medium",
    },
    {
      path: "./fonts/GeneralSans-Semibold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/GeneralSans-Bold.woff2",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--font-general-sans",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${generalSans.variable}`}>
      <body className="relative font-generalSans leading-[1.25rem] tracking-tight text-black">
        <Header />
        <div className="px-6">
          {" "}
          <Web3Modal>{children}</Web3Modal>
        </div>
      </body>
    </html>
  );
}
