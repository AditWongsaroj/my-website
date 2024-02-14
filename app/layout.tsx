import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./components/navBar";
import Social_links from "./components/social_links";
import { StrictMode } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Wongsaroj.dev",
  description: "Made with coffee",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StrictMode>
      <html lang="en">
        <body className={inter.className}>
          <NavBar />
          {children}
          <Social_links />
        </body>
      </html>
    </StrictMode>
  );
}
