import Image from "next/image";
import { NearEarthObject } from "../types";
import { Dispatch, SetStateAction } from "react";
import getCorrectSuffix from "../actions/getCorrectSuffix";
import getDate from "../actions/getDate";
import Link from "next/link";
import { useListContext } from "../Context";

type CardParams = {
  asteroid: NearEarthObject;
  showParam?: "km" | "moon";
  isOdered?: boolean;
};

const Element = ({ asteroid, showParam = "km", isOdered = true }: CardParams) => {
  const { listState, setListState } = useListContext();
  const cart = listState.map((asteroid) => asteroid.id);
  const date = getDate(asteroid.close_approach_data[0].close_approach_date_full);
  const distance = asteroid.close_approach_data[0].miss_distance;
  const diameter = Math.ceil(
    (asteroid.estimated_diameter.meters.estimated_diameter_min +
      asteroid.estimated_diameter.meters.estimated_diameter_max) /
      2,
  );
  const isInCart = cart.find((id) => id === asteroid.id);

  const handleOrder = (id: string) => {
    if (isInCart) {
      const newListState = listState.filter((asteroid) => asteroid.id !== id);
      setListState(newListState);
    } else {
      setListState((prevState) => [...prevState, asteroid]);
    }
  };

  return (
    <div className={`w-[400px] bg-black ${isOdered ? "cursor-default" : ""}`}>
      {isOdered ? (
        <Link href={`/asteroid/${asteroid.id}`}>
          <p className="text-[24px] font-bold hover:text-[--myOrange] hover:underline">{date}</p>
        </Link>
      ) : (
        <p className={`text-[24px] font-bold ${isOdered ? "hover:underline" : ""}`}>{date}</p>
      )}

      <div className="flex items-center">
        <div>
          <p className="flex flex-col items-center">
            {showParam === "km"
              ? Math.round(+distance.kilometers)
                  .toString()
                  .replace(/(\d)(?=(\d{3})+$)/g, "$1 ") +
                " " +
                "км"
              : getCorrectSuffix(Math.round(+distance.lunar), [
                  "лунная орбита",
                  "лунные орбиты",
                  "лунных орбит",
                ])}
          </p>
          <Image
            src="/arrow.svg"
            alt="delimiter"
            width={150}
            height={32}
          />
        </div>
        <Image
          src={diameter < 50 ? "/asteroid_small.png" : "/asteroid_big.png"}
          alt={diameter < 50 ? "small asteroid image" : "big asteroid image"}
          width={diameter < 50 ? 22 : 36}
          height={diameter < 50 ? 24 : 40}
          className="flex-0 mx-4"
        />
        {isOdered ? (
          <Link href={`/asteroid/${asteroid.id}`}>
            <div className="flex flex-col items-start">
              <p className="border-b-[1px] font-bold">{asteroid.name}</p>
              <p className="text-[12px]">Ø {diameter} м</p>
            </div>
          </Link>
        ) : (
          <div className="flex flex-col items-start">
            <p className="border-b-[1px] font-bold">{asteroid.name}</p>
            <p className="text-[12px]">Ø {diameter} м</p>
          </div>
        )}
      </div>
      <div className="flex gap-4">
        {isOdered && (
          <button
            className={`rounded-[16px] bg-[#F8660026] px-[11px] py-[2px] text-[11px] font-bold uppercase hover:bg-[--myOrange] hover:text-[#fff] ${
              isInCart ? "text-[#F5DED9]" : "text-[--myOrange]"
            }`}
            onClick={() => handleOrder(asteroid.id)}
          >
            {isInCart ? "в корзине" : "заказать"}
          </button>
        )}
        <p className="flex">{asteroid.is_potentially_hazardous_asteroid ? "⚠️Опасен" : ""}</p>
      </div>
    </div>
  );
};

export default Element;
