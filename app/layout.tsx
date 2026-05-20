import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Carlotta — Creative Studio",
  description:
    "An independent studio specializing in beauty, fashion, and wellness — art direction, identity, and social.",
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
