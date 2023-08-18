"use client";

import Link from "next/link";
import Order from "../components/Order";
import { ListProvider } from "../Context";

export default function Cart() {
  return (
    <>
      <main className="flex flex-col items-center">
        <p className="text-[28px] font-bold">Заказ отправлен!</p>
        <Link
          href={"/"}
          className="p-4"
        >
          ❰ Назад к списку
        </Link>
        <Order />
      </main>
      <footer className="fixed bottom-0 flex w-screen justify-center">
        <p>© Все права и планета защищены</p>
      </footer>
    </>
  );
}
