"use client";

import Element from "../components/Element";
import Link from "next/link";
import { useListContext } from "../Context";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Order",
};

export default function Cart() {
  const { listState, setListState } = useListContext();

  return (
    <>
      <main className="flex min-h-[calc(100vh-96px-48px)] flex-col items-center font-[helvetica]">
        {listState.length ? (
          <p className="text-[28px] font-bold">Заказ отправлен!</p>
        ) : (
          <p className="text-[28px] font-bold">Нужно что-то заказать!</p>
        )}

        <button onClick={() => setListState([])}>
          <Link
            href={"/"}
            className="p-4 hover:text-[--myOrange]"
          >
            ❰ Назад к списку
          </Link>
        </button>
        <div className="flex flex-col gap-6">
          {listState.map((asteroid) => (
            <Element
              key={asteroid.id}
              asteroid={asteroid}
              isOdered={false}
            />
          ))}
        </div>
      </main>
      <footer className="flex justify-center bg-black p-[12px] font-[helvetica]">
        <p>© Все права и планета защищены</p>
      </footer>
    </>
  );
}
