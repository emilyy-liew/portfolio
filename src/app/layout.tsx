import "./globals.css";
import type { Metadata } from "next";
import Head from "next/head";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Emily Liew's Portfolio",
  description:
    "A portfolio created by Emily Liew to showcase her software engineering work.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/icon.png" />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
