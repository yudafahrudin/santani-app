import React from "react";
import type { Metadata } from "next";
import { Quicksand } from "next/font/google";

const inter = Quicksand({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SANTANI-APP",
};

interface Props {
  children: React.ReactNode;
}

const RootLayout: React.FC<Props> = ({ children }) => {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
};

export default RootLayout;
