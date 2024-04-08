import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import Modal from "./components/modals/Modal";
import "./globals.css";

import Navbar from "./components/navbar/Navbar";
import ClientOnly from "./components/ClientOnly";

const font  = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Airbnb",
  description: "Cloned by Tapash",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
        <Modal isOpen />

        <Navbar />

        </ClientOnly>
        {children}
        </body>
    </html>
  );
}
