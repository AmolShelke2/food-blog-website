import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Food Track Landing Page",
  description:
    "Responsive Food Track Landing Page created with Next.js, tailwindcss and typescript",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
