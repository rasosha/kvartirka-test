"use client";

import { IFetchData, NearEarthObjects } from "../types";
import Image from "next/image";
import List from "../components/List";
import Cart from "../components/Cart";
import { useEffect } from "react";

type ListParams = {
  data: IFetchData | undefined;
};

const MainPage = ({ data }: ListParams) => {
  // useEffect(() => {
  console.log("data:>>", data?.element_count);
  // }, [data]);

  const asteroidsData = data?.near_earth_objects[0];

  return (
    <main className="relative flex justify-center">
      <section className="fixed left-0 top-[138px] mr-[127px] h-[620px] w-[400px]">
        <Image
          alt=""
          src={"/planeta_lg.jpg"}
          width={400}
          height={620}
          priority
        />
      </section>
      <List data={data} />
      <section className="fixed right-[300px] top-[140px]">
        <Cart />
      </section>
    </main>
  );
};
export default MainPage;
