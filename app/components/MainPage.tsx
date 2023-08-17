"use client";

import { IFetchData } from "../types";
import Image from "next/image";
import List from "../components/List";
import Cart from "../components/Cart";
import { useState } from "react";

type ListParams = {
  data: IFetchData | undefined;
};

const MainPage = ({ data }: ListParams) => {
  const [cart, setCart] = useState(data ? data.near_earth_objects : []);
  const [asteroids, setAsteroids] = useState(data ? data.near_earth_objects : []);

  return (
    <main className="relative flex justify-center">
      <section className="fixed left-0 top-[138px] mr-[127px] h-[620px] w-[400px]">
        <Image
          alt=""
          src={"/planeta_lg.jpg"}
          width={400}
          height={620}
        />
      </section>
      <List />
      <section className="fixed right-[300px] top-[140px]">
        <Cart />
      </section>
    </main>
  );
};
export default MainPage;
