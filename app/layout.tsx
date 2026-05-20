import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ThemeToggle from "@/components/ThemeToggle";
import "./globals.css";

export const metadata: Metadata = {
  title: "Carlotta Pflug — creating, managing & connecting in hh.",
  description:
    "Personal portfolio of Carlotta Pflug — Hamburg-based, working across interdisciplinary art, education, and social transformation.",
};

const themeScript = `
(function(){try{var t=localStorage.getItem('theme');if(t==='night'){document.documentElement.setAttribute('data-theme','night');}}catch(e){}})();
`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <Nav />
        {children}
        <Footer />
        <ThemeToggle />
      </body>
    </html>
  );
}
