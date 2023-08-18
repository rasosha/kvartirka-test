"use client";
import getCorrectSuffix from "../actions/getCorrectSuffix";
import Link from "next/link";
import { useListContext } from "../Context";

const Cart = () => {
  const { listState } = useListContext();
  const cart = listState.map((asteroid) => asteroid.id);

  return (
    <section className="flex flex-col gap-8 rounded-[24px] bg-[#232526] p-4 sm:flex-row sm:justify-between sm:rounded-none">
      <div>
        <p className="pb-0 text-[20px]">Корзина</p>
        <p className="">
          {getCorrectSuffix(cart?.length, ["астероид", "астероида", "астероидов"])}
        </p>
      </div>
      <Link
        href={listState.length ? "/order" : ""}
        className={`self-center rounded-[24px] px-[16px] py-[8px] text-[16px] font-bold capitalize sm:mx-4 ${
          cart.length ? "bg-[--myOrange]" : "bg-gray-600 hover:cursor-default"
        }`}
      >
        отправить
      </Link>
    </section>
  );
};

export default Cart;
