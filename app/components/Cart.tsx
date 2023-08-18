"use client";

import { useEffect } from "react";
import getCorrectSuffix from "../actions/getCorrectSuffix";
import { IFetchData, NearEarthObject } from "../types";
import Link from "next/link";
import { useListContext } from "../Context";

type CartProps = {
  data: IFetchData | undefined;
};

const Cart = ({ data }: CartProps) => {
  const { listState, setListState } = useListContext();
  const cart = listState.map((asteroid) => asteroid.id);

  useEffect(() => {
    console.log("listState:>>", cart.length);
  }, [listState]);

  return (
    <section className="flex h-[161px] w-[150px] flex-col rounded-[24px] bg-[#232526]">
      <p className="p-4 pb-0 text-[20px]">Корзина</p>
      <p className="p-4 pt-0">
        {getCorrectSuffix(cart?.length, ["астероид", "астероида", "астероидов"])}
      </p>
      <Link
        href={"/order"}
        className={`mt-4 self-center rounded-[24px] px-[16px] py-[8px] text-[16px] font-bold capitalize ${
          cart.length ? "bg-[--myOrange]" : "bg-gray-600 hover:cursor-default"
        }`}
      >
        отправить
      </Link>
    </section>
  );
};

export default Cart;
