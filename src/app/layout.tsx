import React from "react";
import type { Metadata } from "next";
import "@/styles/global.css";

export const metadata: Metadata = {
  title: "Mentalyc",
  description: "Mentalyc - AI Psychotherapy Progress Notes",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
