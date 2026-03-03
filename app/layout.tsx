import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "VERI | Verified Employment Records Infrastructure",
  description:
    "VERI helps informal workers turn verified work into portable proof that can unlock access to opportunity.",
};

export default function RootLayout({
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
