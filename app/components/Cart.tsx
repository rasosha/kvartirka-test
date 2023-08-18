import { Dispatch, SetStateAction, useEffect, useState } from "react";
import getCorrectSuffix from "../actions/getCorrectSuffix";
import { IFetchData, NearEarthObject } from "../types";
import Link from "next/link";

type CartProps = {
  data: IFetchData | undefined;
  cart: string[];
  setCart: Dispatch<SetStateAction<string[]>>;
};

const Cart = ({ data, cart }: CartProps) => {
  const [asteroids, setAsteroids] = useState("");
  const [isActive, setIsActive] = useState(false);
  const makeNewAsteroid = (asteroid: NearEarthObject) => {
    return {
      id: asteroid.id,
      name: asteroid.name,
      diameter: Math.ceil(
        (+asteroid.estimated_diameter.meters.estimated_diameter_min +
          +asteroid.estimated_diameter.meters.estimated_diameter_max) /
          2,
      ),
      missDistanceKm: asteroid.close_approach_data[0].miss_distance.kilometers,
      date: asteroid.close_approach_data[0].close_approach_date_full,
      is_potentially_hazardous_asteroid: asteroid.is_potentially_hazardous_asteroid,
    };
  };

  useEffect(() => {
    const asteroidsData = Object.values(data!.near_earth_objects)[0].filter((asteroid) =>
      cart.includes(asteroid.id),
    );
    const temp = asteroidsData.map((asteroid) => makeNewAsteroid(asteroid));
    setAsteroids(JSON.stringify(temp));
    if (asteroidsData.length) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }, [asteroids, cart, data]);

  return (
    <>
      <div className="flex h-[161px] w-[150px] flex-col rounded-[24px] bg-[#232526]">
        <p className="p-4 pb-0 text-[20px]">Корзина</p>
        <p className="p-4 pt-0">
          {getCorrectSuffix(cart?.length, ["астероид", "астероида", "астероидов"])}
        </p>
        <Link
          href={isActive ? { pathname: "/cart", query: { asteroid: asteroids } } : ""}
          className={`mt-4 self-center rounded-[24px] px-[16px] py-[8px] text-[16px] font-bold capitalize ${
            isActive ? "bg-[--myOrange]" : "bg-gray-600 hover:cursor-default"
          }`}
        >
          отправить
        </Link>
      </div>
    </>
  );
};

export default Cart;
