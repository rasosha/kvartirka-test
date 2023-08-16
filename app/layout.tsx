import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Armaggedon",
  description: "Kvartirka-test",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-[#000] text-[#fff]">{children}</body>
    </html>
  );
}
