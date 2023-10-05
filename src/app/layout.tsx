import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header } from "./header";
import GoogleAnalytics from "./analytics";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Knowles Glass & Glazing",
  description:
    "We are a Glass & Glazing company located in south florida which can help you install glass in your commerical and residential buildings.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <GoogleAnalytics />
      </body>
    </html>
  );
}
