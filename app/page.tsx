"use client";

import Image from "next/image";
import List from "./components/List";
import Cart from "./components/Cart";
import { useState } from "react";

export default function Home() {
  let storedCart = null;
  if (typeof window !== "undefined") {
    storedCart = localStorage.getItem("cart") || "";
  }
  const cartState = storedCart ? JSON.parse(storedCart) : [];
  const [cart, setCart] = useState<string[]>(cartState);

  return (
    <>
      <header className="p-2 self-start">
        <h1 className="text-[32px] text-[--myOrange] ">ARMAGEDDON 2023</h1>
        <div>
          <p>ООО “Команда им. Б. Уиллиса”.</p>
          <p>Взрываем астероиды с 1998 года.</p>
        </div>
      </header>
      <main className="flex relative justify-center">
        <section className="h-[620px] w-[400px] mr-[127px] fixed left-0 top-[138px]">
          <Image
            alt=""
            src={"/planeta_lg.jpg"}
            width={400}
            height={620}
          />
        </section>
        <List
          cart={cart}
          setCart={setCart}
        />
        <section className="fixed top-[140px] right-[300px]">
          <Cart cart={cart} />
        </section>
      </main>
    </>
  );
}
