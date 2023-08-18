import "./globals.css";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ListProvider } from "./Context";
import { Passion_One } from "next/font/google";

export const metadata: Metadata = {
  title: "Armaggedon",
  description: "Kvartirka-test",
};

const passion = Passion_One({ subsets: ["latin"], weight: ["400", "700", "900"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <ListProvider>
        <body className="flex flex-col bg-[#000] text-[#fff]">
          <header className={`self-start px-4 ${passion.className}`}>
            <Link href={"/"}>
              <h1 className="text-[32px] text-[--myOrange] hover:text-red-100">ARMAGEDDON 2023</h1>
              <div className="font-[helvetica]">
                <p>ООО “Команда им. Б. Уиллиса”.</p>
                <p>Взрываем астероиды с 1998 года.</p>
              </div>
            </Link>
          </header>
          <section className="fixed left-0 top-[138px] h-[620px] w-[400px]">
            <Image
              alt=""
              src={"/planeta_lg.jpg"}
              width={400}
              height={620}
              priority
            />
          </section>
          <>{children}</>
        </body>
      </ListProvider>
    </html>
  );
}
