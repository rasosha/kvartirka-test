import "./globals.css";
import type { Metadata } from "next";
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
        <body className="flex flex-col gap-8 bg-[#000] text-[#fff]">
          <header className={`self-start px-4  ${passion.className}`}>
            <Link href={"/"}>
              <h1 className="text-[32px] text-[--myOrange] hover:text-red-100">ARMAGEDDON 2023</h1>
              <div className="font-[helvetica]">
                <p>ООО “Команда им. Б. Уиллиса”.</p>
                <p>Взрываем астероиды с 1998 года.</p>
              </div>
            </Link>
          </header>
          <section className="lg:bg-planeta_lg md:bg-planeta_md sm:bg-planeta_sm fixed left-0 top-[138px] -z-10 h-[620px] w-[400px] bg-no-repeat sm:h-[436px] sm:w-[48px] md:h-[436px] md:w-[304px]"></section>
          <>{children}</>
        </body>
      </ListProvider>
    </html>
  );
}
